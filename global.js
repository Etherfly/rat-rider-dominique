/**
 * Created by Etherfly on 01.02.14.
 *
 * This file contains global vars and utility functions.
 */

/* GLOBAL VARS */

// screen size
var W = 1400;                   var H = 750;

// default message window sizes
var WW_SMALL = 500;
var WW_MEDIUM = 750;
var WW_LARGE = 1000;

// battle gauge limits
var BGL_LEFT = W / 2 - 300;
var BGL_RIGHT = W / 2 + 300;
var BGL_HEIGHT = 30;

var BGL_COLOR = "#C8FFFF";

var CM_NONE = 0;    // Control mode: none
var CM_FIELD = 1;   // Control mode: field
var CM_EVENT = 2;   // Control mode: event
var CM_BATTLE = 3;  // Control mode: battle

var controlMode = CM_NONE;

var layers = [];    // global object storage

var LANDSCAPE_FAR = 1;
var OBJECTS_FAR_BG = 2;
var OBJECTS_FAR = 3;
var OBJECTS_FAR_FRONT = 4;
var DECORATIONS_FAR = 5;
var LANDSCAPE_MID = 7;
var OBJECTS_MID_BG = 8;
var OBJECTS_MID = 9;
var OBJECTS_MID_FRONT = 10;
var DECORATIONS_MID = 11;
var LANDSCAPE_NEAR = 13;
var OBJECTS_NEAR_BG = 14;
var OBJECTS_NEAR = 15;
var OBJECTS_NEAR_FRONT = 16;
var DECORATIONS_NEAR = 17;
var GUI_COMMON = 19;
var GUI_EVENT = 22;

// path layers
var FAR = 0; var MID = 1; var NEAR = 2;

var reaches = [];               // farthest terrain chunks (corresponding to paths FAR, MID and NEAR)
var moving = true;              // terrain movement
var movementCoefficient = 3;    // movement speed

// control keys
var KEY_NONE = 0;
var KEY_LEFT = 1;
var KEY_RIGHT = 2;
var KEY_UP = 3;
var KEY_DOWN = 4;
var KEY_ACTION = 5;
var KEY_ESC = 6;
var KEY_LANG = 7;
var KEY_DIGIT_0 = 10;

var keyPressed = KEY_NONE;
var keyCtrl = false;

// animation states
var AN_STAND = 0;
var AN_MOVE_1 = 1;
var AN_MOVE_2 = 2;
var AN_PREPARE = 3;
var AN_ATTACK = 4;
var AN_DEFEND = 5;
var AN_DEATH = 6;
var AN_NONE = 7;

var globalFrame = 0;    // global frame counter up to 100 for technical purposes

// characters
var hero = null;
var enemy = null;

var BATTLEGAUGE_SHIFT_BASIS = 3;

var impacts = [];
var battleFrame;            // number of frames that have passed in the current battle
var behaviorFluctuation;    // random offset to be used in behavioral patterns of AI

var eventBattleEndSequence = null;

// attributes
var ATTR_ATTACK = 0;
var ATTR_DEFENSE = 1;
var ATTR_AGILITY = 2;
var ATTR_REFLEXES = 3;
var ATTR_EVASION = 4;
var ATTR_REFLECT = 5;

var SP_RECOVERY_BASIS = 0.05;
var PATH_CHANGE_SP_COST_RATIO = 0.25;

var attrIncrease = [];
attrIncrease[ATTR_ATTACK] = 0;      // attack is increased by... attacking and dealing damage
attrIncrease[ATTR_DEFENSE] = 0;     // defense is increased by defending
attrIncrease[ATTR_AGILITY] = 0;     // agility is increased by rapid actions, one after another
attrIncrease[ATTR_REFLEXES] = 0;    // reflexes are increased by precision actions, like attacking the enemy
                                    // in a weakpoint or defending right when the enemy attacks
// attribute increase bases
var AIB_ATTACK = 0.1;
var AIB_DEFENSE = 0.2;
var AIB_AGILITY = 0.05;
var AIB_REFLEXES = 0.03;

// objects
var landscape = null;

var objectsOnLayer = [0, 0, 0]; // number of objects on layer
var farthestObjects = [];       // farthest object position on layer

var collisionDistance = 40;

// GUI
var GFX_HERO_SPGAUGE_FLASH = 0;             // GUI effect: flashing sp gauge
var GFX_HERO_HPGAUGE_SHAKE = 1;             // GUI effect: shaking hero hp gauge
var GFX_ENEMY_HPGAUGE_SHAKE = 2;            // GUI effect: shaking enemy hp gauge
var GFX_HERO_BATTLEGAUGE_FLASH = 3;         // GUI effect: hero battle gauge border flash
var GFX_HERO_BATTLEGAUGE_FLASH_FILL = 4;    // GUI effect: hero battle gauge fill flash
var GFX_ENEMY_BATTLEGAUGE_FLASH = 5;        // GUI effect: enemy battle gauge border flash
var GFX_ENEMY_BATTLEGAUGE_FLASH_FILL = 6;   // GUI effect: enemy battle gauge fill flash

var heroHpShake = 0;
var enemyHpShake = 0;

var BATTLEGAUGE_FLASH_LENGTH = 1;

var displayGui = false;
var blackMask = false;

var skillChoice = 0;
var itemChoice = 0;
var eventChoice = 0;

var CURSOR_NEXT;
var CURSOR_CHOICE;

var LANG_ENG = 0;       // English language
var LANG_RUS = 1;       // Русский язык

var lang = LANG_ENG;    // current language

// global game state storage

var gst = [];

var CH00 = 0;   // prologue

/* RESOURCES */

var field = document.getElementById("field");
field.width = W;
field.height = H;
var fc = field.getContext("2d");
var seed = Math.floor(Math.random() * 1000000);

function setSeed(newSeed) {
    seed = newSeed;
}

function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function registerObject(layer, object) {
    try {
        layers[layer].push(object);
    } catch (error) {
        alert(error);
    }
}

function clearObjectType(type) {
    for (var i = 0; i < layers.length; i++) {
        if (!(typeof layers[i] === "undefined")) {
            for (var j = 0; j < layers[i].length; j++) {
                var object = layers[i][j];
                if (!(typeof object === "undefined")) {
                    if (object.type == type) {
                        object.deletable = true;
                        delete layers [i][j];
                    }
                }
            }
        }
    }
}

function getImageResource(id) {
    return document.getElementById(id);
}

function getTextResource(id) {
    var string = document.getElementById(id).innerHTML;
    return string.replace(/\n/g, "").replace(/ +/g, " ").replace(/^ /, "");
}

/*
 * Universal text processor
 *
 * Displays text starting at the specified point, limited by the specified line width.
 * Text can be a multilingual array.
 * Supported tags: <br>
 * Returns the line count.
 */
function processText(text, x, y, w) {
    function writeLine(line, lineCount) {
        fc.beginPath();
        fc.fillStyle = "white";
        fc.font = "bold 18pt Courier New";
        fc.fillText(line, x, y + 30 * (lineCount + 1));
    }

    var lineCount = 0;
    var charLimitPerLine = Math.floor((w - 60) / 14 - 1);
    var words = (typeof text === "string") ? text.split(" ") : text[lang].split(" ");
    words.push("");
    var line = "";
    for (var i = 0; i < words.length; i++) {
        if ((line.length + words[i].length > charLimitPerLine) || (words[i] == "<br>") || (i == words.length - 1)) {
            writeLine(line, lineCount);
            lineCount++;
            line = "";
        }
        if (words[i].indexOf("<") == -1) {
            line += words[i] + " ";
        }
    }

    return lineCount;
}

function initializeChapterData(chapterId) {
    switch (chapterId) {
        case CH00:
            for (var i = 0; i < 7; i++) {
                gst[chapterId][i] = 0;
            }
            break;
        default:
            for (i = 0; i < gst[chapterId].length; i++) {
                gst[chapterId][i] = 0;
            }
    }
}

function resetGame() {
    layers.length = 23;
    for (var i = 0; i < layers.length; i++) {
        // Yeah, javascript, you're the best.
        layers[i] = [];
    }
    gst.length = 8;
    for (i = 0; i < gst.length; i++) {
        gst[i] = [];
        initializeChapterData(i);
    }
    setControlMode(CM_NONE);
    initializeGui();
    landscape = createTitleLandscape();
    landscape.resetTerrain();
    moving = true;
    registerObject(GUI_EVENT, landscape);
}

function saveGame() {
    // TODO: localStorage game saving
}

function loadGame() {
    resetGame();
    var loadGameSequence = new Sequence();
    loadGameSequence.addAction(procureDisplayCenteredMessageAction(400,
        "Sincerest apologies, but this feature is not implemented yet.", true));
    loadGameSequence.addAction(procureTitleSequence());
    registerObject(GUI_EVENT, loadGameSequence);
}

function setControlMode(newControlMode) {
    controlMode = newControlMode;
}

document.onkeydown = function (event) {
    switch (event.keyCode) {
        case 37:
        case 65:
            keyPressed = KEY_LEFT;
            break;
        case 39:
        case 68:
            keyPressed = KEY_RIGHT;
            break;
        case 38:
        case 87:
            keyPressed = KEY_UP;
            break;
        case 40:
        case 83:
            keyPressed = KEY_DOWN;
            break;
        case 13:
        case 32:
            keyPressed = KEY_ACTION;
            break;
        case 27:
            keyPressed = KEY_ESC;
            break;
        case 192:
            keyPressed = KEY_LANG;
            break;
        default:
            if (event.keyCode >= 48 && event.keyCode <= 57) {
                keyPressed = KEY_DIGIT_0 + event.keyCode - 48;
            } else {
                keyPressed = KEY_NONE;
            }
    }
    keyCtrl = event.ctrlKey;
};

document.onkeyup = function (event) {
    if (event.keyCode == 17) {
        keyCtrl = false;
    }
};

function pathToLandscapeLayer(path) {
    switch (path) {
        case FAR:
            return LANDSCAPE_FAR;
        case MID:
            return LANDSCAPE_MID;
        case NEAR:
            return LANDSCAPE_NEAR;
        default:
            return LANDSCAPE_NEAR;
    }
}

function pathToObjectLayer(path) {
    switch (path) {
        case FAR:
            return OBJECTS_FAR;
        case MID:
            return OBJECTS_MID;
        case NEAR:
            return OBJECTS_NEAR;
        default:
            return OBJECTS_NEAR;
    }
}

function pathToObjectFrontLayer(path) {
    switch (path) {
        case FAR:
            return OBJECTS_FAR_FRONT;
        case MID:
            return OBJECTS_MID_FRONT;
        case NEAR:
            return OBJECTS_NEAR_FRONT;
        default:
            return OBJECTS_NEAR_FRONT;
    }
}

function pathToDecorationLayer(path) {
    switch (path) {
        case FAR:
            return DECORATIONS_FAR;
        case MID:
            return DECORATIONS_MID;
        case NEAR:
            return DECORATIONS_NEAR;
        default:
            return DECORATIONS_NEAR;
    }
}

function getBasisHeight(path) {
    switch (path) {
        case FAR:
            return H - 250;
        case MID:
            return H - 150;
        case NEAR:
            return H - 50;
        default:
            return H - 50;
    }
}

function getOptimalHeight(path, position) {
    var layer = pathToLandscapeLayer(path);
    var terrainsSkipped = 0;
    var nearestTerrain = null;
    var greatestAltitude = 0;
    for (var i = 0; (i < layers[layer].length) && (terrainsSkipped < 3); i++) {
        var terrain = layers[layer][i];
        if (!(typeof terrain === "undefined")) {
            var currentDistance = Math.abs(terrain.position - position);
            if (nearestTerrain == null) {
                nearestTerrain = terrain;
                if (currentDistance > terrain.radius) {
                    greatestAltitude = getBasisHeight(path);
                } else {
                    greatestAltitude = getBasisHeight(path) - Math.floor(
                        Math.sqrt(Math.pow(terrain.radius, 2) - Math.pow(currentDistance, 2)));
                }
            } else {
                var currentAltitude;
                if (currentDistance > terrain.radius) {
                    currentAltitude = getBasisHeight(path);
                } else {
                    currentAltitude = getBasisHeight(path) - Math.floor(
                        Math.sqrt(Math.pow(terrain.radius, 2) - Math.pow(currentDistance, 2)));
                }

                if (currentAltitude <= greatestAltitude) {
                    greatestAltitude = currentAltitude;
                    terrainsSkipped = 0;
                } else {
                    terrainsSkipped++;
                }
            }
        }
    }
    return greatestAltitude;
}

function getPathScale(path) {
    return (2 + path) / 2;
}

function getBattleGaugeOffset(character) {
    if (character == hero) {
        return 56;
    } else {
        return 179;
    }
}

function getHeroStrengthScale(startingHeroStrength, maxHeroStrength) {
    var heroStrength = hero.attrAttack * hero.attrDefense * hero.attrAgility * hero.attrReflexes;
    if (heroStrength < startingHeroStrength) {
        return 1;
    } else if (heroStrength > maxHeroStrength) {
        return Math.sqrt(Math.sqrt((maxHeroStrength / startingHeroStrength - 1) * 0.2 + 1));
    } else {
        return Math.sqrt(Math.sqrt((heroStrength / startingHeroStrength - 1) * 0.2 + 1));
    }
}

function getGlobalBattleGaugeShiftCoefficient() {
    return (enemy.attrReflexes * enemy.effReflexes) / (hero.attrReflexes * hero.effReflexes);
}

function getAgilityDifferenceCoefficient() {
    return (enemy.attrAgility * enemy.effAgility) / (hero.attrAgility * hero.effAgility);
}

function generateSurface(path, color) {
    var newRadius = Math.floor(random() * 120) + 130;
    var offset = reaches[path].radius + Math.floor(random() * 100);
    if (newRadius > 2 * reaches[path].radius) {
        offset += newRadius - 2 * reaches[path].radius + 20;
    }
    var terrain = new Terrain(path, color,
        reaches[path].position + offset, newRadius);
    reaches[path] = terrain;
    return terrain;
}

function decorateReaches(path, layerOffset, density, scaleModifier, offset, imageSet) {
    var decorationCount = Math.floor(random() * density);
    for (var i = 0; i < decorationCount; i++) {
        var image = imageSet[Math.floor(Math.random() * imageSet.length)];
        var scale =  (getPathScale(path) + (random() * 0.6)) * scaleModifier;
        var position = Math.floor(random() * reaches[path].radius * 2)
            + reaches[path].position - reaches[path].radius;
        var decorationOffset = (Math.floor(Math.random() * (offset / 5)) + image.height + offset);

        var newDecoration = new Decoration(image, scale, path, decorationOffset, position);
        registerObject(pathToDecorationLayer(path) + layerOffset, newDecoration);
    }
}

function drawTextbox(xPos, yPos, width, height) {
    fc.beginPath();
    fc.fillStyle = "#FFFFFF";
    fc.fillRect(xPos, yPos, width, height);
    if ((width > 14) && (height > 14))
    {
        fc.beginPath();
        fc.fillStyle = "#3333AA";
        fc.fillRect(xPos + 5, yPos + 5, width - 10, height - 10);
    }
}

function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function drawLimitedGradient(xStart, yStart, xEnd, yEnd, startColorHex, endColorHex) {
    var startColor = hexToRgb(startColorHex);
    var endColor = hexToRgb(endColorHex);
    var realXStart;
    var realXEnd;
    var realStartColor;
    var realEndColor;
    if (xStart < BGL_LEFT) {
        realXStart = BGL_LEFT;
        realStartColor = rgbToHex(
            Math.floor(startColor.r - (startColor.r - endColor.r) * (1 - (xEnd - realXStart) / (xEnd - xStart))),
            Math.floor(startColor.g - (startColor.g - endColor.g) * (1 - (xEnd - realXStart) / (xEnd - xStart))),
            Math.floor(startColor.b - (startColor.b - endColor.b) * (1 - (xEnd - realXStart) / (xEnd - xStart)))
        );
    } else {
        realXStart = xStart;
        realStartColor = rgbToHex(startColor.r, startColor.g, startColor.b);
    }
    if (xEnd > BGL_RIGHT) {
        realXEnd = BGL_RIGHT;
        realEndColor = rgbToHex(
            Math.floor(endColor.r - (endColor.r - startColor.r) * (1 - (realXEnd - xStart) / (xEnd - xStart))),
            Math.floor(endColor.g - (endColor.g - startColor.g) * (1 - (realXEnd - xStart) / (xEnd - xStart))),
            Math.floor(endColor.b - (endColor.b - startColor.b) * (1 - (realXEnd - xStart) / (xEnd - xStart)))
        );
    } else {
        realXEnd = xEnd;
        realEndColor = rgbToHex(endColor.r, endColor.g, endColor.b);
    }
    if (realXEnd > realXStart) {
        fc.beginPath();
        var limitedGradient = fc.createLinearGradient(realXStart, 0, realXEnd, 0);
        limitedGradient.addColorStop(0, realStartColor);
        limitedGradient.addColorStop(1, realEndColor);
        fc.fillStyle = limitedGradient;
        fc.fillRect(realXStart, yStart, realXEnd - realXStart, yEnd - yStart);
    }
}

function initializeGui() {
    var imgGuiHpSpGauge = getImageResource("imgGuiHpSpGauge");
    var hpSpGauge = new GuiElement(null, 40, 40);
    hpSpGauge.defineReflect(function() {
        var shakeXOffset = 0;
        var shakeYOffset = 0;
        if (heroHpShake > 0) {
            heroHpShake--;
            if (globalFrame % 4 == 0) {
                shakeXOffset = -5 + 10 * Math.random();
                shakeYOffset = -5 + 10 * Math.random();
            }
        }
        fc.beginPath();
        fc.drawImage(imgGuiHpSpGauge, this.xPos + shakeXOffset, this.yPos + shakeYOffset);
        if (hero != null) {
            var width;
            if (hero.hp > 0) {
                width = 231 * (hero.hp / hero.attrMaxHp);
                fc.beginPath();
                fc.fillStyle = "#FF4444";
                fc.fillRect(99 + shakeXOffset, 56 + shakeYOffset, width, 14);
            }
            if (hero.sp > 0) {
                width = 231 * (hero.sp / hero.attrMaxSp);
                fc.beginPath();
                fc.fillStyle = "#FFFF11";
                fc.fillRect(99 + shakeXOffset, 72 + shakeYOffset, width, 14);
            }
        }
    });
    registerObject(GUI_COMMON, hpSpGauge);
    var imgGuiAttributeBox = getImageResource("imgGuiAttributeBox");
    var attributeBox = new GuiElement(imgGuiAttributeBox, 10, H - imgGuiAttributeBox.height - 60);
    attributeBox.defineReflect(function() {
        function displayAttribute(attrName, attribute, offset) {
            fc.beginPath();
            fc.fillStyle = "white";
            fc.font = "bold 18pt Courier New";
            var yPos = H - imgGuiAttributeBox.height + offset;
            fc.fillText(attrName[lang], 72, yPos);
            fc.fillText(Math.floor(attribute).toString(), 216, yPos);
            fc.beginPath();
            fc.fillStyle = "#FFD010";
            var width = 117 * (attribute % 1);
            fc.fillRect(74, H - imgGuiAttributeBox.height + offset + 7, width, 3);
        }

        function displayEffectiveAttribute(attribute, offset) {
            if (battleFrame > 0) {
                fc.beginPath();
                if (attribute > 1) {
                    fc.fillStyle = "#f0f040";
                } else if (attribute < 1) {
                    fc.fillStyle = "#f04040";
                } else {
                    fc.fillStyle = "white";
                }
                fc.font = "bold 18pt Courier New";
                var yPos = H - imgGuiAttributeBox.height + offset;
                var displayValue = Math.floor(attribute * 100).toString();
                var valueOffset = (3 - displayValue.length) * 14;
                fc.fillText(Math.floor(attribute * 100).toString() + "%", 286 + valueOffset, yPos);
            }
        }

        if (hero != null) {
            fc.beginPath();
            fc.fillStyle = "white";
            fc.font = "bold 18pt Courier New";
            var offset = -24;
            displayAttribute(TXT_ATTR_ATTACK, hero.attrAttack, offset);
            displayEffectiveAttribute(hero.effAttack, offset);
            offset += 49;
            displayAttribute(TXT_ATTR_DEFENSE,hero.attrDefense, offset);
            displayEffectiveAttribute(hero.effDefense, offset);
            offset += 49;
            displayAttribute(TXT_ATTR_AGILITY,hero.attrAgility, offset);
            displayEffectiveAttribute(hero.effAgility, offset);
            offset += 49;
            displayAttribute(TXT_ATTR_REFLEXES,hero.attrReflexes, offset);
            displayEffectiveAttribute(hero.effReflexes, offset);
        }
    });
    registerObject(GUI_COMMON, attributeBox);
    var imgKarma = getImageResource("imgKarma");
    var karmaDisplay = new GuiElement(null, 10, H - 55);
    karmaDisplay.defineReflect(function() {
        if (hero != null) {
            drawTextbox(this.xPos, this.yPos, 350, 45);
            fc.beginPath();
            fc.fillStyle = "white";
            fc.font = "bold 18pt Courier New";
            fc.fillText(TXT_KARMA[lang], this.xPos + 15, this.yPos + 29);
            var displayValue = hero.karma.toString();
            var valueOffset = (8 - displayValue.length) * 14.2;
            fc.fillText(displayValue, this.xPos + 190 + valueOffset, this.yPos + 29);
            fc.drawImage(imgKarma, this.xPos + 308, this.yPos + 8, 30, 30);
        }
    });
    registerObject(GUI_COMMON, karmaDisplay);
    var imgEnemyHpGauge = getImageResource("imgGuiEnemyHpGauge");
    var enemyHpGauge = new GuiElement(null, 40, 185);
    enemyHpGauge.defineReflect(function() {
        if ((battleFrame > 0) && (enemy != null)) {
            var shakeXOffset = 0;
            var shakeYOffset = 0;
            if (enemyHpShake > 0) {
                enemyHpShake--;
                if (globalFrame % 4 == 0) {
                    shakeXOffset = -5 + 10 * Math.random();
                    shakeYOffset = -5 + 10 * Math.random();
                }
            }

            var width = 231 * (enemy.hp / enemy.attrMaxHp);
            fc.beginPath();
            fc.drawImage(imgEnemyHpGauge, this.xPos + shakeXOffset, this.yPos + shakeYOffset);
            fc.drawImage(enemy.animationObject.defaultImage,
                this.xPos - 16 + shakeXOffset, this.yPos - 16 + shakeYOffset);
            fc.fillStyle = "#FF4444";
            fc.fillRect(99 + shakeXOffset, 187 + shakeYOffset, width, 14);
        }
    });
    registerObject(GUI_COMMON, enemyHpGauge);
    var imgGuiBattleGauges = getImageResource("imgBattleGauges");
    var battleGauges = new GuiElement(null, (W - imgGuiBattleGauges.width) / 2, 22);
    battleGauges.defineReflect(function() {
        if ((battleFrame > 0) && (hero != null) && (enemy != null)) {
            var weightedBattleFrameOffset = (BATTLEGAUGE_SHIFT_BASIS * battleFrame
                * getGlobalBattleGaugeShiftCoefficient()) % 40;
            for (var i = 0; i < 57; i++) {
                fc.beginPath();
                fc.strokeStyle = "black";
                fc.lineWidth = 1;
                fc.moveTo(BGL_LEFT + 30 + i * 10 - weightedBattleFrameOffset,
                    getBattleGaugeOffset(hero) - 3);
                fc.lineTo(BGL_LEFT + 30 + i * 10 - weightedBattleFrameOffset,
                    getBattleGaugeOffset(hero) - (i % 4 == 0 ? 18 : 12));
                fc.stroke();
            }
            weightedBattleFrameOffset = (BATTLEGAUGE_SHIFT_BASIS * battleFrame
                * getGlobalBattleGaugeShiftCoefficient() * getAgilityDifferenceCoefficient()) % 40;
            for (i = 0; i < 57; i++) {
                fc.beginPath();
                fc.strokeStyle = "black";
                fc.lineWidth = 1;
                fc.moveTo(BGL_LEFT + 30 + i * 10 - weightedBattleFrameOffset,
                    getBattleGaugeOffset(enemy) - 3);
                fc.lineTo(BGL_LEFT + 30 + i * 10 - weightedBattleFrameOffset,
                    getBattleGaugeOffset(enemy) - (i % 4 == 0 ? 18 : 12));
                fc.stroke();
            }

            fc.beginPath();
            fc.drawImage(imgGuiBattleGauges, this.xPos, this.yPos);
            for (i = 0; i < hero.battleGaugeArtifacts.length; i++) {
                var artifact = hero.battleGaugeArtifacts[i];
                if (!(typeof artifact === "undefined")) {
                    artifact.draw(artifact.position, hero);
                }
            }
            for (i = 0; i < enemy.battleGaugeArtifacts.length; i++) {
                artifact = enemy.battleGaugeArtifacts[i];
                if (!(typeof artifact === "undefined")) {
                    artifact.draw(artifact.position, enemy);
                }
            }
        }
    });
    registerObject(GUI_COMMON, battleGauges);
    var skillSet = new GuiElement(null, W - 360, 54);
    skillSet.defineReflect(function() {
        function writeLine(line, lineCount, offset) {
            fc.beginPath();
            fc.fillStyle = "white";
            fc.font = "bold 18pt Courier New";
            fc.fillText(line, W - 360 + offset, 84 + 30 * lineCount);
        }

        if ((battleFrame > 0) && (hero != null)) {
            var lineCount = hero.skillSet.length;
            if (lineCount < 4) {
                lineCount = 4;
            }
            drawTextbox(W - 350, 54, 330, 50 + 30 * lineCount);
            if (keyPressed == KEY_UP) {
                if (skillChoice > 0) {
                    skillChoice--;
                } else {
                    skillChoice = hero.skillSet.length - 1;
                }
            } else if (keyPressed == KEY_DOWN) {
                if (skillChoice < hero.skillSet.length - 1) {
                    skillChoice++;
                } else {
                    skillChoice = 0;
                }
            } else if ((keyPressed >= KEY_DIGIT_0) && (keyPressed <= KEY_DIGIT_0 + 9)
                && ((keyPressed - KEY_DIGIT_0 + 9) % 10 < hero.skillSet.length)) {
                skillChoice = (keyPressed - KEY_DIGIT_0 + 9) % 10;
            }

            for (var i = 0; i < hero.skillSet.length; i++) {
                writeLine(hero.skillSet[i].name[lang], i, 50);
                if (i == skillChoice) {
                    var artifactData = hero.skillSet[i].getArtifacts(0);
                    for (var j = 0; j < artifactData.length; j++) {
                        artifactData[j].sketch(artifactData[j].position, hero);
                    }

                    fc.beginPath();
                    if (globalFrame % 20 < 10) {
                        fc.drawImage(CURSOR_CHOICE, W - 330, 69 + 30 * i);
                    } else {
                        fc.drawImage(CURSOR_CHOICE, W - 335, 69 + 30 * i);
                    }

                    if (keyCtrl) {
                        drawTextbox(20 + imgGuiAttributeBox.width, H - imgGuiAttributeBox.height - 60,
                            W - 370 - imgGuiAttributeBox.width, 55 + imgGuiAttributeBox.height);
                        var skillInfo = [
                            hero.skillSet[i].name[LANG_ENG] + " - " + hero.skillSet[i].spCost + " " + TXT_SP[LANG_ENG]
                                + TXT_HOTKEY[LANG_ENG] + ((i + 1) % 10) + "') <br> <br> "
                                + hero.skillSet[i].description[LANG_ENG],
                            hero.skillSet[i].name[LANG_RUS] + " - " + hero.skillSet[i].spCost + " " + TXT_SP[LANG_RUS]
                                + TXT_HOTKEY[LANG_RUS] + ((i + 1) % 10) + "') <br> <br> "
                                + hero.skillSet[i].description[LANG_RUS]
                        ];
                        processText(skillInfo, 50 + imgGuiAttributeBox.width, H - imgGuiAttributeBox.height - 60,
                            W - 370 - imgGuiAttributeBox.width);
                    }
                }
            }
        }
    });
    registerObject(GUI_COMMON, skillSet);
    displayGui = false;
}

function registerImpact(attacker, target, attackPower) {
    impacts.push({
        attacker: attacker,
        target: target,
        attackPower: attackPower
    });
}

function handleBattleEnd() {
    battleFrame = null;
    behaviorFluctuation = 0;
    controlMode = CM_NONE;
    hero.battleGaugeArtifacts.length = 0;
    enemy.battleGaugeArtifacts.length = 0;
    var battleGuiDisappearAction = new Action();
    battleGuiDisappearAction.definePlayFrame(function (frame) {
        var imgGuiBattleGauges = getImageResource("imgBattleGauges");
        var reverseFrame = (22 + imgGuiBattleGauges.height) / 8 - frame;
        var x = (W - imgGuiBattleGauges.width) / 2;
        var y = reverseFrame * 8 - imgGuiBattleGauges.height;
        fc.beginPath();
        fc.drawImage(imgGuiBattleGauges, x, y);

        var scale = (reverseFrame * 16) >= (22 + imgGuiBattleGauges.height)
            ? 1 : (reverseFrame * 16) / (22 + imgGuiBattleGauges.height);

        var imgEnemyHpGauge = getImageResource("imgGuiEnemyHpGauge");
        x = -imgEnemyHpGauge.width + scale * (imgEnemyHpGauge.width + 40);
        fc.drawImage(imgEnemyHpGauge, x, 185);

        var lineCount = hero.skillSet.length;
        if (lineCount < 4) {
            lineCount = 4;
        }

        drawTextbox(W - 350, 54, 330 * scale, (50 + 30 * lineCount) * scale);

        return reverseFrame <= 0;
    });
    registerObject(GUI_EVENT, battleGuiDisappearAction);
    var battleEndSequence = new Sequence();
    if (hero.hp == 0) {
        battleEndSequence.addAction(procureDeathAnimationAction(hero));
    }
    if (enemy.hp == 0) {
        battleEndSequence.addAction(procureDeathAnimationAction(enemy));
    }
    if (hero.hp > 0) {
        var karmaGained = enemy.getKarma();
        var battleResultsMessage = [
            TXT_BATTLE_RESULTS_1[LANG_ENG] + Math.floor(attrIncrease[ATTR_ATTACK] * 100) + "%"
                + TXT_BATTLE_RESULTS_2[LANG_ENG] + Math.floor(attrIncrease[ATTR_DEFENSE] * 100) + "%"
                + TXT_BATTLE_RESULTS_3[LANG_ENG] + Math.floor(attrIncrease[ATTR_AGILITY] * 100) + "%"
                + TXT_BATTLE_RESULTS_4[LANG_ENG] + Math.floor(attrIncrease[ATTR_REFLEXES] * 100) + "%"
                + " <br> <br> " + TXT_KARMA[LANG_ENG] + " +" + karmaGained,
            TXT_BATTLE_RESULTS_1[LANG_RUS] + Math.floor(attrIncrease[ATTR_ATTACK] * 100) + "%"
                + TXT_BATTLE_RESULTS_2[LANG_RUS] + Math.floor(attrIncrease[ATTR_DEFENSE] * 100) + "%"
                + TXT_BATTLE_RESULTS_3[LANG_RUS] + Math.floor(attrIncrease[ATTR_AGILITY] * 100) + "%"
                + TXT_BATTLE_RESULTS_4[LANG_RUS] + Math.floor(attrIncrease[ATTR_REFLEXES] * 100) + "%"
                + " <br> <br> " + TXT_KARMA[LANG_RUS] + " +" + karmaGained
        ];
        battleEndSequence.addAction(procureDisplayCenteredMessageAction(WW_SMALL, battleResultsMessage, true));
        battleEndSequence.addAction(procureCodeFragmentAction(function () {
            heroHpShake = 0;
            enemyHpShake = 0;

            hero.attrAttack += attrIncrease[ATTR_ATTACK];
            hero.attrDefense += attrIncrease[ATTR_DEFENSE];
            hero.attrAgility += attrIncrease[ATTR_AGILITY];
            hero.attrReflexes += attrIncrease[ATTR_REFLEXES];
            for (var i = 0; i < attrIncrease.length; i++) { attrIncrease[i] = 0; }
            hero.addKarma(karmaGained);
        }));
        if (eventBattleEndSequence != null) {
            battleEndSequence.addAction(procureCodeFragmentAction(function () {
                registerObject(GUI_EVENT, eventBattleEndSequence);
            }));
        } else {
            battleEndSequence.addAction(procureResumeAction());
        }
    } else {
        battleEndSequence.addAction(procureDisplayCenteredMessageAction(WW_SMALL, TXT_DOMINIQUE_HAS_FALLEN)
            .addChoice(TXT_LOAD_GAME).addChoice(TXT_RETURN_TO_TITLE));
        battleEndSequence.addAction(procureCodeFragmentAction(function () {
            landscape.destroy();
            if (eventChoice == 0) {
                loadGame();
            } else {
                resetGame();
                registerObject(GUI_EVENT, procureTitleSequence());
            }
        }));
    }
    registerObject(GUI_EVENT, battleEndSequence);
}

/* GLOBAL TIMER EVENTS */

function deliverImpacts() {
    for (var i = 0; i < impacts.length; i ++) {
        var guiEffect;
        if (impacts[i].target == hero) {
            guiEffect = GFX_HERO_HPGAUGE_SHAKE;
        } else {
            guiEffect = GFX_ENEMY_HPGAUGE_SHAKE;
        }

        /*
         * DAMAGE FORMULA:
         * DMG = ATTACKER_BASE_ATK * (1 + (ATTACKER_BASE_ATK * ATTACKER_EFF_ATK - TARGET_BASE_DEF * TARGET_EFF_DEF) / (80~120))
         *       * (ATTACK_POWER / TARGET_EFF_DEF) * (0.9~1.1)
         *
         * Attacker's base attack serves as the damage basis, attack power and target's effective defense serve as
         * direct multiplier and divisor. Average multiplier difference is 100, thus, if attacker's attack is ~100 more
         * than target's defense (taking into account effective values) the damage is roughly doubled
         * than if those attributes were equal. If target's defense is 100+ points ahead, effective modifiers included, chances are
         * the attack will deal no damage.
         */
        var dmg = impacts[i].attacker.attrAttack
            * (1 + (impacts[i].attacker.attrAttack * impacts[i].attacker.effAttack
            - impacts[i].target.attrDefense * impacts[i].target.effDefense) / (80 + 40 * Math.random()))
            * (impacts[i].attackPower / impacts[i].target.effDefense) * (0.9 + 0.2 * Math.random());
        if (Math.floor(dmg) <= 0) {
            registerObject(GUI_COMMON, procureGuiEffectAction(guiEffect, "white", 0));
        } else {
            impacts[i].target.expendHp(dmg);
            registerObject(GUI_COMMON, procureGuiEffectAction(guiEffect, "red", Math.floor(dmg).toString()));
        }

        registerObject(pathToObjectFrontLayer(impacts[i].target.path),
            impacts[i].target.getEffectAction([
                getImageResource("imgEffectHit1-1"),
                getImageResource("imgEffectHit1-2"),
                getImageResource("imgEffectHit1-3")], 3, 35, 35));

        /*
         * ATTRIBUTE INCREASE:
         * Attack is increased by... attacking and dealing damage.
         * Defense is increased by defending.
         * Agility is increased by rapid actions, one after another.
         * Reflexes are increased by precision actions, like attacking the enemy.
         * in a weakpoint or defending right when the enemy attacks.
         * The agility gain if defined in useSkill.
         */
        var enemyStrengthModifier;
        var enemyReflexesModifier;
        if (impacts[i].attacker == hero) {
            enemyStrengthModifier = impacts[i].target.attrDefense / impacts[i].attacker.attrAttack;
            enemyReflexesModifier = impacts[i].target.attrReflexes / impacts[i].attacker.attrReflexes;
            attrIncrease[ATTR_ATTACK] += impacts[i].attackPower * enemyStrengthModifier * AIB_ATTACK;
            attrIncrease[ATTR_REFLEXES] += enemyReflexesModifier * AIB_REFLEXES
                / (impacts[i].target.effDefense + 0.01);
        } else {
            enemyStrengthModifier = impacts[i].attacker.attrAttack / impacts[i].target.attrDefense;
            enemyReflexesModifier = impacts[i].attacker.attrReflexes / impacts[i].target.attrReflexes;
            attrIncrease[ATTR_DEFENSE] += impacts[i].target.effDefense * enemyStrengthModifier * AIB_DEFENSE;
            attrIncrease[ATTR_REFLEXES] += enemyReflexesModifier * impacts[i].target.effDefense * AIB_REFLEXES;
        }
    }
    impacts.length = 0;
}

function tick() {
    window.setTimeout(tick, 20);

    fc.clearRect(0, 0, W, H);

    if (keyPressed == KEY_LANG) {
        lang++;
        if (lang > 1) {
            lang = 0;
        }
    }

    for (var i = 0; i < layers.length; i++) {

        // masking screen when needed
        if ((blackMask) && (i == GUI_COMMON)) {
            fc.beginPath();
            fc.fillStyle = "#000000";
            fc.fillRect(0, 0, W, H);
        }

        if (!(typeof layers[i] === "undefined")) {
            for (var j = 0; j < layers[i].length; j++) {

                // every defined object...
                var object = layers[i][j];
                if (!(typeof object === "undefined")) {
                    if (moving) {               // ...moves...
                        object.move();
                    }
                    object.manifest();          // ...manifests...
                    if (object.deletable) {     // ...and vanishes when done.
                        delete layers[i][j];
                    }

                    // check whether hero needs to be relayered
                    if (object.type == "Hero") {
                        var wishfulLayer = pathToObjectLayer(object.path);
                        if (i != wishfulLayer) {
                            registerObject(wishfulLayer, hero);
                            delete layers[i][j];
                        }
                    }

                    // check whether hero comes into contact with anything
                    if (object.type == "FieldObject") {
                        if ((object.path == hero.path) && (!object.finished)
                            && (Math.abs(object.position - hero.position) < collisionDistance)
                            && (Math.abs(getOptimalHeight(object.path, object.position) - hero.height)
                            < collisionDistance))
                        {
                            object.finished = true;
                            object.trigger();
                        }
                    }
                }
            }
        }
        if (i == LANDSCAPE_FAR) {
            fc.beginPath();
            fc.fillStyle = "#007700";
            fc.fillRect(0, H - 250, W, H);
        } else if (i == LANDSCAPE_MID) {
            fc.beginPath();
            fc.fillStyle = "#009900";
            fc.fillRect(0, H - 150, W, H);
        } else if (i == LANDSCAPE_NEAR) {
            fc.beginPath();
            fc.fillStyle = "#00AA00";
            fc.fillRect(0, H - 50, W, H);
        }
    }

    if (controlMode == CM_FIELD) {
        hero.restoreSp(SP_RECOVERY_BASIS);

        switch (keyPressed) {
            case KEY_UP:
                hero.moveFarther();
                break;
            case KEY_DOWN:
                hero.moveNearer();
                break;
        }
    } else if ((controlMode == CM_BATTLE) && !keyCtrl) {
        if ((hero.hp > 0) && (enemy.hp > 0)) {
            hero.restoreSp(0.05 * getGlobalBattleGaugeShiftCoefficient());

            hero.progressBattleGauge();
            enemy.progressBattleGauge();
            deliverImpacts();
            enemy.behave(enemy, battleFrame);
            if (keyPressed == KEY_ACTION) {
                hero.useSkill(hero.skillSet[skillChoice], 0);
            }
            battleFrame++;
        } else {
            handleBattleEnd();
        }
    }

    globalFrame++;
    if (globalFrame >= 100) {
        globalFrame = 0;
    }

    keyPressed = KEY_NONE;

    //window.setTimeout(tick, 20);
}