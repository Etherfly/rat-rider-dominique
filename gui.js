/**
 * Created by Etherfly on 14.02.14.
 *
 * This file contains GUI initialization and escape menu logic.
 */

/* GUI constants and variables */

var HP_GAUGE_X = 18;
var HP_GAUGE_Y = 31;
var INFO_WINDOW_X = 320;
var INFO_WINDOW_Y = H - 230;
var INFO_WINDOW_W = W - 600;
var INFO_WINDOW_H = 220;
var ITEM_WINDOW_X = W - 270;
var ITEM_WINDOW_W = 260;

var MENU_ROOT_Y_OFFSET = 90;
var MENU_ROOT_HEIGHT = INFO_WINDOW_Y - HP_GAUGE_Y - MENU_ROOT_Y_OFFSET - 10;

var MENU_SKILLS_AVAILABLE_X = 320;
var MENU_SKILLS_AURA_X = 680;
var MENU_SKILLS_ACTIVE_X = 1040;
var MENU_SKILLS_COLUMN_WIDTH = 350;

var AURA_ANIMATION_Y = 200;
var AURA_ANIMATION_H = 300;

var TEXT_COLOR_INK = "#101030";
var TEXT_COLOR_GOLD = "#f0f040";
var TEXT_COLOR_RED = "#702020";

var heroBGNicksPosition = 0;
var enemyBGNicksPosition = 0;

var GFX_HERO_SPGAUGE_FLASH = 0;             // GUI effect: flashing sp gauge
var GFX_HERO_APGAUGE_FLASH = 1;             // GUI effect: flashing sp gauge
var GFX_HERO_HPGAUGE_TEXT = 2;              // GUI effect: floating text at hero hp gauge
var GFX_ENEMY_HPGAUGE_TEXT = 3;             // GUI effect: floating text at enemy hp gauge
var GFX_HERO_BATTLEGAUGE_FLASH = 4;         // GUI effect: hero battle gauge border flash
var GFX_HERO_BATTLEGAUGE_FLASH_FILL = 5;    // GUI effect: hero battle gauge fill flash
var GFX_ENEMY_BATTLEGAUGE_FLASH = 6;        // GUI effect: enemy battle gauge border flash
var GFX_ENEMY_BATTLEGAUGE_FLASH_FILL = 7;   // GUI effect: enemy battle gauge fill flash
var GFX_SCREEN_FLASH = 8;                   // GUI effect: screen flash

var heroHpShake = 0;
var enemyHpShake = 0;

var BATTLEGAUGE_FLASH_LENGTH = 1;

var displayGui = false;
var blackMask = false;

var menuChoice = 0;     // selected menu item
var skillChoice = 0;    // selected skill
var itemChoice = 0;     // selected item

var scrollOffset = 0;   // skill or item list scrolling offset
var objectChoice = [];    // menu item choice in the multi-column layouts

var menuState = 0;          // global menu state
var previousMenuState = 0;  // previous menu state value when displaying a message

// menu states
var MS_NONE = 0;
var MS_OPENING = 1;
var MS_ROOT = 2;
var MS_STATS = 3;
var MS_SKILLS_BROWSE_1 = 4;
var MS_SKILLS_BROWSE_2 = 5;
var MS_SKILLS_BROWSE_3 = 6;
var MS_SKILLS_EXCHANGE_1 = 7;
var MS_SKILLS_EXCHANGE_2 = 8;
var MS_SKILLS_EXCHANGE_3 = 9;
var MS_ITEMS_BROWSE_1 = 10;
var MS_ITEMS_BROWSE_2 = 11;
var MS_ITEMS_BROWSE_3 = 12;
var MS_ITEMS_EXCHANGE_1 = 13;
var MS_ITEMS_EXCHANGE_2 = 14;
var MS_CODEX_ROOT = 15;
var MS_CODEX_CATEGORY = 16;
var MS_CODEX_ENTRY = 17;
var MS_SKILL_GAINED = 20;
var MS_ITEM_OBTAINED = 21;
var MS_NEW_CODEX_ENTRY = 22;
var MS_MENU_MESSAGE = 23;

/*
 * Universal text processor
 *
 * Displays text starting at the specified point, limited by the specified line width.
 * Text can be a multilingual array.
 * Supported tags: <br>
 * Returns the line count.
 */
function processText(text, w, x, y, font) {
    function writeLine(line, lineCount) {
        fc.beginPath();
        fc.fillStyle = "white";
        fc.font = font == null ? DEFAULT_FONT : font;
        fc.fillText(line, x, y + 10 + DEFAULT_LINE_HEIGHT * (lineCount + 1));
    }

    var print = (x != null) && (y != null);

    var processedTextData = {
        textLines: [],
        lineCount: 0
    };
    var charLimitPerLine = Math.floor((w - 30) / DEFAULT_CHAR_WIDTH - 1);
    var words = (typeof text === "string") ? text.split(" ") : text[lang].split(" ");
    if ((words.length != 1) || (words[0] != "")) {
        words.push("");
        var line = "";
        for (var i = 0; i < words.length; i++) {
            if ((line.length + words[i].length > charLimitPerLine) || (words[i] == "<br>") || (i == words.length - 1)) {
                if (print) {
                    writeLine(line, processedTextData.lineCount);
                }
                processedTextData.textLines.push(line);
                processedTextData.lineCount++;
                line = "";
            }
            if (words[i].indexOf("<") == -1) {
                line += words[i] + " ";
            }
        }
    }

    return processedTextData;
}

function processInfoText(text) {
    return processText(text, INFO_WINDOW_W, INFO_WINDOW_X + 30, INFO_WINDOW_Y);
}

/* GUI utility functions */

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

function drawInfoWindow() {
    drawTextbox(INFO_WINDOW_X, INFO_WINDOW_Y, INFO_WINDOW_W, INFO_WINDOW_H);
}

function drawLabel(x, y, text) {
    var leftEdge = getResource("imgBattleLabelLeft");
    var rightEdge = getResource("imgBattleLabelRight");
    fc.beginPath();
    fc.font = DEFAULT_FONT;
    var displayText = (typeof text === "string") ? text : text[lang];
    var lineWidth = fc.measureText(displayText).width + 8;
    fc.drawImage(leftEdge, x - (lineWidth + leftEdge.width + rightEdge.width) / 2, y - 18);
    fc.drawImage(rightEdge, x + (lineWidth + leftEdge.width - rightEdge.width) / 2, y - 18);
    fc.fillStyle = "#F1ECAD";
    fc.fillRect(x - lineWidth / 2 - 1, y - 14, lineWidth + 2, 19);
    fc.fillStyle = "#111133";
    fc.textAlign = "center";
    fc.fillText(displayText, x, y);
    fc.textAlign = "left";
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
        realStartColor = {
            r: Math.floor(startColor.r - (startColor.r - endColor.r) * (1 - (xEnd - realXStart) / (xEnd - xStart))),
            g: Math.floor(startColor.g - (startColor.g - endColor.g) * (1 - (xEnd - realXStart) / (xEnd - xStart))),
            b: Math.floor(startColor.b - (startColor.b - endColor.b) * (1 - (xEnd - realXStart) / (xEnd - xStart)))
        };
    } else {
        realXStart = xStart;
        realStartColor = startColor;
    }
    if (xEnd > BGL_RIGHT) {
        realXEnd = BGL_RIGHT;
        realEndColor = {
            r: Math.floor(endColor.r - (endColor.r - startColor.r) * (1 - (realXEnd - xStart) / (xEnd - xStart))),
            g: Math.floor(endColor.g - (endColor.g - startColor.g) * (1 - (realXEnd - xStart) / (xEnd - xStart))),
            b: Math.floor(endColor.b - (endColor.b - startColor.b) * (1 - (realXEnd - xStart) / (xEnd - xStart)))
        };
    } else {
        realXEnd = xEnd;
        realEndColor = endColor;
    }
    if (realXEnd > realXStart) {
        fc.beginPath();
        var colorRange = {
            r: realEndColor.r - realStartColor.r,
            g: realEndColor.g - realStartColor.g,
            b: realEndColor.b - realStartColor.b
        };
        var rectColor;
        if (realXEnd - realXStart <= 5) {
            rectColor = rgbToHex(Math.floor(realStartColor.r + colorRange.r / 2),
                Math.floor(realStartColor.g + colorRange.g / 2),
                Math.floor(realStartColor.b + colorRange.b / 2));
            fc.fillStyle = rectColor;
            fc.fillRect(realXStart, yStart, realXEnd - realXStart, yEnd - yStart);
        } else {
            var streamersQuantity = Math.floor((realXEnd - realXStart) / 3) + 1;
            for (var i = 0; i <= streamersQuantity; i++) {
                rectColor = rgbToHex(Math.floor(realStartColor.r + i * colorRange.r / streamersQuantity),
                    Math.floor(realStartColor.g + i * colorRange.g / streamersQuantity),
                    Math.floor(realStartColor.b + i * colorRange.b / streamersQuantity));
                fc.fillStyle = rectColor;
                fc.fillRect(realXStart + i * (realXEnd - realXStart) / streamersQuantity, yStart,
                    (realXEnd - realXStart) / streamersQuantity, yEnd - yStart);
            }
        }
    }
}

/* GUI initialization */

function initializeGui() {
    var imgGuiHpSpGauge = getResource("imgGuiHpSpGauge");
    var hpSpGauge = new GuiElement(null, HP_GAUGE_X, HP_GAUGE_Y);
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
                fc.fillRect(this.xPos + 59 + shakeXOffset, this.yPos + 16 + shakeYOffset, width, 14);
            }
            if ((battleFrame > 0) && (hero != null)) {
                var skillSpWidth;
                var chosenSkill = hero.skillSet[skillChoice];
                if ((chosenSkill != null) && (chosenSkill.spCost < hero.attrMaxSp)) {
                    skillSpWidth = 231 * (chosenSkill.spCost / hero.attrMaxSp);
                } else {
                    skillSpWidth = 231;
                }
                fc.beginPath();
                fc.fillStyle = "#444400";
                fc.fillRect(this.xPos + 59 + shakeXOffset, this.yPos + 32 + shakeYOffset, skillSpWidth, 14);
            }
            if (hero.sp > 0) {
                width = 231 * (hero.sp / hero.attrMaxSp);
                fc.beginPath();
                fc.fillStyle = "#FFFF11";
                fc.fillRect(this.xPos + 59 + shakeXOffset, this.yPos + 32 + shakeYOffset, width, 14);
            }
            if ((battleFrame > 0) && (hero != null)) {
                fc.beginPath();
                fc.fillStyle = "#CCCC11";
                if ((chosenSkill != null) && (chosenSkill.spCost < hero.sp)) {
                    fc.fillRect(this.xPos + 59 + shakeXOffset + width, this.yPos + 32 + shakeYOffset, -skillSpWidth, 14);
                } else {
                    fc.fillRect(this.xPos + 59 + shakeXOffset + width, this.yPos + 32 + shakeYOffset, -width, 14);
                }
            }
            if (hero.ap > 0) {
                width = 231 * hero.ap;
                fc.beginPath();
                fc.fillStyle = ((hero.ap == 1) && (globalFrame % 10 > 4)) ? "#FFBBFF" : "#FFFFFF";
                fc.fillRect(this.xPos + 59 + shakeXOffset, this.yPos + 48 + shakeYOffset, width, 14);
            }
        }
    });
    registerObject(GUI_COMMON, hpSpGauge);
    var imgGuiAttributeGrowthGauge = getResource("imgGuiAttributeGrowthGauge");
    var imgIconAttrAttack = getResource("imgIconAttrAttack");
    var imgIconAttrDefense = getResource("imgIconAttrDefense");
    var imgIconAttrAgility = getResource("imgIconAttrAgility");
    var imgIconAttrReflexes = getResource("imgIconAttrReflexes");
    var attributeBox = new GuiElement(null, 10, INFO_WINDOW_Y);
    attributeBox.defineReflect(function() {
        function displayAttribute(icon, attrName, attribute, offset) {
            var yPos = attributeBox.yPos + offset;
            fc.beginPath();
            fc.drawImage(icon, 25, yPos);
            fc.beginPath();
            fc.fillStyle = "white";
            fc.font = DEFAULT_FONT;
            fc.fillText(attrName[lang], 70, yPos + 20);
            fc.fillText(Math.floor(attribute).toString(), 180, yPos + 20);
            fc.beginPath();
            fc.drawImage(imgGuiAttributeGrowthGauge, 70, yPos + 25);
            fc.fillStyle = "#FFD010";
            var width = 97 * (attribute % 1);
            fc.fillRect(71, yPos + 26, width, 3);
        }

        function displayEffectiveAttribute(attribute, offset) {
            if (battleFrame > 0) {
                fc.beginPath();
                if (attribute > 1) {
                    fc.fillStyle = TEXT_COLOR_GOLD;
                } else if (attribute < 1) {
                    fc.fillStyle = "#f04040";
                } else {
                    fc.fillStyle = "white";
                }
                fc.font = DEFAULT_FONT;
                var yPos = attributeBox.yPos + offset + 20;
                var displayValue = Math.floor(attribute * 100).toString();
                var valueOffset = (3 - displayValue.length) * (DEFAULT_CHAR_WIDTH + 0.2);
                fc.fillText(Math.floor(attribute * 100).toString() + "%", 240 + valueOffset, yPos);
            }
        }

        if (hero != null) {
            drawTextbox(attributeBox.xPos, attributeBox.yPos, 300, 165);
            var offset = 10;
            displayAttribute(imgIconAttrAttack, TXT_ATTR_ATTACK, hero.attrAttack, offset);
            displayEffectiveAttribute(hero.effAttack, offset);
            offset += 36;
            displayAttribute(imgIconAttrDefense, TXT_ATTR_DEFENSE, hero.attrDefense, offset);
            displayEffectiveAttribute(hero.effDefense, offset);
            offset += 36;
            displayAttribute(imgIconAttrAgility, TXT_ATTR_AGILITY, hero.attrAgility, offset);
            displayEffectiveAttribute(hero.effAgility, offset);
            offset += 36;
            displayAttribute(imgIconAttrReflexes, TXT_ATTR_REFLEXES, hero.attrReflexes, offset);
            displayEffectiveAttribute(hero.effReflexes, offset);
        }
    });
    registerObject(GUI_COMMON, attributeBox);
    var imgKarma = getResource("imgKarma");
    var karmaDisplay = new GuiElement(null, 10, H - 55);
    karmaDisplay.defineReflect(function() {
        if (hero != null) {
            drawTextbox(this.xPos, this.yPos, 300, 45);
            fc.beginPath();
            fc.fillStyle = hero.karma >= 0 ? "white" : "red";
            fc.font = LARGE_FONT;
            fc.fillText(TXT_KARMA[lang], this.xPos + 15, this.yPos + 29);
            var displayValue = hero.karma.toString();
            var valueOffset = (8 - displayValue.length) * (LARGE_CHAR_WIDTH + 0.2);
            fc.fillText(displayValue, this.xPos + 130 + valueOffset, this.yPos + 29);
            fc.drawImage(imgKarma, this.xPos + 258, this.yPos + 8, 30, 30);
        }
    });
    registerObject(GUI_COMMON, karmaDisplay);
    var imgEnemyHpGauge = getResource("imgGuiEnemyHpGauge");
    var enemyHpGauge = new GuiElement(null, 18, 185);
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
                this.xPos - 16 + shakeXOffset, this.yPos - 16 + shakeYOffset, 64,
                enemy.animationObject.defaultImage.height * (64 / enemy.animationObject.defaultImage.width));
            fc.fillStyle = "#FF4444";
            fc.fillRect(this.xPos + 59 + shakeXOffset, this.yPos + 2 + shakeYOffset, width, 14);
        }
    });
    registerObject(GUI_COMMON, enemyHpGauge);
    var imgGuiBattleGauges = getResource("imgBattleGauges");
    var battleGauges = new GuiElement(null, (W - imgGuiBattleGauges.width) / 2 - 20, 22);
    battleGauges.defineReflect(function () {
        if ((battleFrame > 0) && (hero != null) && (enemy != null)) {
            if (controlMode == CM_BATTLE) {
                heroBGNicksPosition = (heroBGNicksPosition + BATTLEGAUGE_SHIFT_BASIS
                    * getGlobalBattleGaugeShiftCoefficient()) % 40;
            }
            for (var i = 0; i < 57; i++) {
                fc.beginPath();
                fc.strokeStyle = "black";
                fc.lineWidth = 1;
                fc.moveTo(BGL_LEFT + 30 + i * 10 - heroBGNicksPosition,
                    getBattleGaugeOffset(hero) - 3);
                fc.lineTo(BGL_LEFT + 30 + i * 10 - heroBGNicksPosition,
                    getBattleGaugeOffset(hero) - (i % 4 == 0 ? 18 : 12));
                fc.stroke();
            }
            if (controlMode == CM_BATTLE) {
                enemyBGNicksPosition = (enemyBGNicksPosition + BATTLEGAUGE_SHIFT_BASIS
                    * getGlobalBattleGaugeShiftCoefficient() * getAgilityDifferenceCoefficient()) % 40;
            }
            for (i = 0; i < 57; i++) {
                fc.beginPath();
                fc.strokeStyle = "black";
                fc.lineWidth = 1;
                fc.moveTo(BGL_LEFT + 30 + i * 10 - enemyBGNicksPosition,
                    getBattleGaugeOffset(enemy) - 3);
                fc.lineTo(BGL_LEFT + 30 + i * 10 - enemyBGNicksPosition,
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
        function writeLine(line, color, lineCount, offset) {
            fc.beginPath();
            fc.fillStyle = color;
            fc.font = DEFAULT_FONT;
            fc.fillText(line, W - 360 + offset, 84 + 30 * lineCount);
        }

        if ((battleFrame > 0) && (hero != null)) {
            var lineCount = hero.skillSet.length;
            if (lineCount < 4) {
                lineCount = 4;
            }
            drawTextbox(W - 350, 54, 330, 50 + 30 * lineCount);
            if (keyPressed == KEY_UP) {
                playSfx(SFX_GUI_TINK);
                skillChoice--;
                while (hero.skillSet[skillChoice] == null) {
                    if (skillChoice > 0) {
                        skillChoice--;
                    } else {
                        skillChoice = hero.skillSet.length - 1;
                    }
                }
            } else if (keyPressed == KEY_DOWN) {
                playSfx(SFX_GUI_TINK);
                skillChoice++;
                while (hero.skillSet[skillChoice] == null) {
                    if (skillChoice < hero.skillSet.length - 1) {
                        skillChoice++;
                    } else {
                        skillChoice = 0;
                    }
                }
            } else if ((keyPressed >= KEY_DIGIT_0) && (keyPressed <= KEY_DIGIT_0 + 9)) {
                var skillChoiceToBe = (keyPressed - KEY_DIGIT_0 + 9) % 10;
                if (hero.skillSet[skillChoiceToBe] != null) {
                    skillChoice = skillChoiceToBe;
                }
            }

            for (var i = 0; i < hero.skillSet.length; i++) {
                if (hero.skillSet[i] != null) {
                    var enabled = !skillSlotLock[i] && (hero.sp >= hero.skillSet[i].spCost) && ((i < 7) || hero.ap >= 1);
                    writeLine(hero.skillSet[i].name[lang], enabled ? (i < 7 ? "white" : TEXT_COLOR_GOLD) : "gray", i, 50);
                }
                if (i == skillChoice) {
                    if (!keyCtrl) {
                        var artifactData = hero.skillSet[i].getArtifacts(0);
                        for (var j = 0; j < artifactData.length; j++) {
                            artifactData[j].sketch(artifactData[j].position, hero);
                        }
                    }

                    fc.beginPath();
                    var cursorOffset = (globalFrame % 20 < 10) ? 330 : 335;
                    fc.drawImage(CURSOR_RIGHT, W - cursorOffset, 69 + 30 * i);
                }
            }
        }
    });
    registerObject(GUI_COMMON, skillSet);
    var itemSet = new GuiElement(null, W - 360, 54);
    itemSet.defineReflect(function() {
        function writeLine(line, align, color, offsetX, offsetY) {
            fc.beginPath();
            fc.textAlign = align;
            fc.fillStyle = color;
            fc.font = DEFAULT_FONT;
            fc.fillText(line, ITEM_WINDOW_X + ITEM_WINDOW_W / 2 + offsetX, INFO_WINDOW_Y + offsetY);
            fc.textAlign = "left";
        }

        if ((battleFrame > 0) && (hero != null)) {
            drawTextbox(ITEM_WINDOW_X, INFO_WINDOW_Y, ITEM_WINDOW_W, INFO_WINDOW_H);
            var activeItemsNumber = 0;
            for (var i = 0; i < 5; i++) {
                if (hero.activeItems[i] != null) {
                    activeItemsNumber++;
                }
            }
            if (activeItemsNumber > 0) {
                if (keyPressed == KEY_LEFT) {
                    playSfx(SFX_GUI_TINK);
                    itemChoice--;
                    while (hero.activeItems[itemChoice] == null) {
                        if (itemChoice > 0) {
                            itemChoice--;
                        } else {
                            itemChoice = hero.activeItems.length - 1;
                        }
                    }
                } else if (keyPressed == KEY_RIGHT) {
                    playSfx(SFX_GUI_TINK);
                    itemChoice++;
                    while (hero.activeItems[itemChoice] == null) {
                        if (itemChoice < hero.activeItems.length - 1) {
                            itemChoice++;
                        } else {
                            itemChoice = 0;
                        }
                    }
                } else if (keyCtrl && (keyPressed >= KEY_DIGIT_0 + 1) && (keyPressed <= KEY_DIGIT_0 + 5)) {
                    var itemChoiceToBe = (keyPressed - KEY_DIGIT_0 + 4) % 5;
                    if (hero.activeItems[itemChoiceToBe] != null) {
                        itemChoice = itemChoiceToBe;
                    }
                }
            }

            var chosenItem;
            if (hero.activeItems[itemChoice] != null) {
                chosenItem = obtainItem(hero.activeItems[itemChoice].id);
                writeLine(chosenItem.name[lang], "center", !itemSlotLock[itemChoice] ? "white" : "gray", 0, 30);
                if (!itemSlotLock[itemChoice]) {
                    writeLine(TXT_CTRLENTER[lang], "center", "white", 0, 150);
                }
                fc.beginPath();
                fc.drawImage(chosenItem.image, ITEM_WINDOW_X + ITEM_WINDOW_W / 2 - 32, INFO_WINDOW_Y + 50, 64, 64);
                if (hero.activeItems[itemChoice].charges > 1) {
                    writeLine("x" + hero.activeItems[itemChoice].charges, "left", "white", 34, 110);
                }
                if (activeItemsNumber > 1) {
                    var cursorOffset = globalFrame % 20 < 10 ? 40 : 45;
                    fc.drawImage(CURSOR_LEFT, ITEM_WINDOW_X + ITEM_WINDOW_W / 2 - cursorOffset - CURSOR_LEFT.width,
                        INFO_WINDOW_Y + 82 - CURSOR_LEFT.height / 2);
                    fc.drawImage(CURSOR_RIGHT, ITEM_WINDOW_X + ITEM_WINDOW_W / 2 + cursorOffset,
                        INFO_WINDOW_Y + 82 - CURSOR_RIGHT.height / 2);
                }
                if (keyCtrl) {
                    fc.strokeStyle = "white";
                    fc.lineWidth = 2;
                    fc.strokeRect(ITEM_WINDOW_X + ITEM_WINDOW_W / 2 - 32, INFO_WINDOW_Y + 50, 64, 64);
                    drawInfoWindow();
                    processInfoText([
                        chosenItem.name[LANG_ENG] + " <br> <br> " + chosenItem.description[LANG_ENG]
                            + " <br> <br> " + TXT_USES_REMAINING[LANG_ENG] + hero.activeItems[itemChoice].charges,
                        chosenItem.name[LANG_RUS] + " <br> <br> " + chosenItem.description[LANG_RUS]
                            + " <br> <br> " + TXT_USES_REMAINING[LANG_RUS] + hero.activeItems[itemChoice].charges
                    ]);
                }
            } else {
                writeLine(TXT_NOCHOSENITEM[lang], "center", "white", 0, 30);
            }

            if (activeItemsNumber > 0) {
                for (i = 0; i < hero.activeItems.length; i++) {
                    if (hero.activeItems[i] != null) {
                        fc.beginPath();
                        fc.drawImage(obtainItem(hero.activeItems[i].id).image,
                            ITEM_WINDOW_X + 10 * (i + 1) + ((ITEM_WINDOW_W - 60) / 5) * i, INFO_WINDOW_Y + 160,
                            (ITEM_WINDOW_W - 60) / 5, (ITEM_WINDOW_W - 60) / 5);
                    }
                    if (i == itemChoice) {
                        fc.strokeStyle = "white";
                        fc.lineWidth = 1;
                        fc.strokeRect(ITEM_WINDOW_X + 10 * (i + 1) + ((ITEM_WINDOW_W - 60) / 5) * i,
                            INFO_WINDOW_Y + 160, (ITEM_WINDOW_W - 60) / 5, (ITEM_WINDOW_W - 60) / 5);

                        if ((keyCtrl) && (chosenItem != null)) {
                            var artifactData = chosenItem.getArtifacts(0);
                            if (artifactData != null) {
                                for (var j = 0; j < artifactData.length; j++) {
                                    artifactData[j].sketch(artifactData[j].position, hero);
                                }
                            }
                        }
                    }
                }
            } else {
                writeLine(TXT_NOACTIVEITEMS[lang], "center", "white", 0, 190);
            }
        }
    });
    registerObject(GUI_COMMON, itemSet);
    displayGui = false;
    blackMask = false;
    menuState = MS_NONE;
}

/* SKILL GAINED / ITEM OBTAINED / NEW CODEX ENTRY */

function procureSkillGainedSequence(skillId) {
    var skillGainedSequence = new Sequence();
    skillGainedSequence.addAction(procureDisplaySkillMessageAction(skillId).authorizeMenuPlay());
    skillGainedSequence.addAction(procureCodeFragmentAction(function () {
        menuState = MS_NONE;
    }).authorizeMenuPlay());
    return skillGainedSequence;
}

function procureDisplaySkillMessageAction(skillId) {
    var displayItemMessageAction = new Action();
    displayItemMessageAction.definePlayFrame(function (frame) {
        var skill = gainSkill(skillId);
        var skillLine = TXT_SKILL_GAINED[lang] + skill.name[lang];
        var lineLength = skillLine.length * LARGE_CHAR_WIDTH + 55;

        if (frame < 10) {
            drawTextbox((W - lineLength) / 2, H / 2 - 50,
                lineLength * frame / 10, (12 + LARGE_LINE_HEIGHT) * frame / 10);
        } else {
            drawTextbox((W - lineLength) / 2, H / 2 - 50, lineLength, 12 + LARGE_LINE_HEIGHT);
            fc.beginPath();
            fc.drawImage(getResource("imgIconMenuSkill"), (W - lineLength ) / 2 + 15, H / 2 - 42, 30, 30);
            fc.textAlign = "center";
            fc.fillStyle = "white";
            fc.font = LARGE_FONT;
            fc.fillText(skillLine, W / 2 + 16, H / 2 - 50 + LARGE_LINE_HEIGHT - 5);
            fc.textAlign = "left";

            return (keyPressed == KEY_ACTION) || (keyPressed == KEY_ESC);
        }
        return false;
    });
    return displayItemMessageAction;
}

function procureAuraSkillGainedSequence(auraSkillId) {
    var skillGainedSequence = new Sequence();
    skillGainedSequence.addAction(procureDisplayAuraSkillMessageAction(auraSkillId).authorizeMenuPlay());
    skillGainedSequence.addAction(procureCodeFragmentAction(function () {
        menuState = MS_NONE;
    }).authorizeMenuPlay());
    return skillGainedSequence;
}

function procureDisplayAuraSkillMessageAction(auraSkillId) {
    var displayItemMessageAction = new Action();
    displayItemMessageAction.definePlayFrame(function (frame) {
        var skill = gainSkill(auraSkillId);
        var skillLine = TXT_AURA_SKILL_GAINED[lang] + skill.name[lang];
        var lineLength = skillLine.length * LARGE_CHAR_WIDTH + 55;

        if (frame < 10) {
            drawTextbox((W - lineLength) / 2, H / 2 - 50,
                lineLength * frame / 10, (12 + LARGE_LINE_HEIGHT) * frame / 10);
        } else {
            drawTextbox((W - lineLength) / 2, H / 2 - 50, lineLength, 12 + LARGE_LINE_HEIGHT);
            fc.beginPath();
            fc.drawImage(getResource("imgIconMenuAuraSkill"), (W - lineLength ) / 2 + 15, H / 2 - 42, 30, 30);
            fc.textAlign = "center";
            fc.fillStyle = TEXT_COLOR_GOLD;
            fc.font = LARGE_FONT;
            fc.fillText(skillLine, W / 2 + 16, H / 2 - 50 + LARGE_LINE_HEIGHT - 5);
            fc.textAlign = "left";

            return (keyPressed == KEY_ACTION) || (keyPressed == KEY_ESC);
        }
        return false;
    });
    return displayItemMessageAction;
}

function procureItemObtainedSequence(itemRecord) {
    var itemObtainedSequence = new Sequence();
    itemObtainedSequence.addAction(procureDisplayItemMessageAction(itemRecord).authorizeMenuPlay());
    itemObtainedSequence.addAction(procureCodeFragmentAction(function () {
        menuState = MS_NONE;
    }).authorizeMenuPlay());
    return itemObtainedSequence;
}

function procureDisplayItemMessageAction(itemRecord) {
    var displayItemMessageAction = new Action();
    displayItemMessageAction.definePlayFrame(function (frame) {
        var item = obtainItem(itemRecord.id);
        var itemLine = TXT_ITEM_OBTAINED[lang] + item.name[lang] + " (x" + itemRecord.charges + ")";
        var lineLength = itemLine.length * LARGE_CHAR_WIDTH + 55;

        if (frame < 10) {
            drawTextbox((W - lineLength) / 2, H / 2 - 50,
                lineLength * frame / 10, (12 + LARGE_LINE_HEIGHT) * frame / 10);
        } else {
            drawTextbox((W - lineLength) / 2, H / 2 - 50, lineLength, 12 + LARGE_LINE_HEIGHT);
            fc.beginPath();
            fc.drawImage(item.image, (W - lineLength ) / 2 + 15, H / 2 - 42, 30, 30);
            fc.textAlign = "center";
            fc.fillStyle = "white";
            fc.font = LARGE_FONT;
            fc.fillText(itemLine, W / 2 + 16, H / 2 - 50 + LARGE_LINE_HEIGHT - 5);
            fc.textAlign = "left";

            return keyPressed == (KEY_ACTION) || (keyPressed == KEY_ESC);
        }
        return false;
    });
    return displayItemMessageAction;
}

function procureNewCodexEntrySequence(entryId) {
    var skillGainedSequence = new Sequence();
    skillGainedSequence.addAction(procureDisplayCodexEntryMessageAction(entryId).authorizeMenuPlay());
    skillGainedSequence.addAction(procureCodeFragmentAction(function () {
        menuState = MS_NONE;
    }).authorizeMenuPlay());
    return skillGainedSequence;
}

function procureDisplayCodexEntryMessageAction(entryId) {
    var displayItemMessageAction = new Action();
    displayItemMessageAction.definePlayFrame(function (frame) {
        var entry = inquireCodex(entryId);
        var entryLine = TXT_NEW_CODEX_ENTRY[lang] + entry.title[lang];
        var lineLength = entryLine.length * LARGE_CHAR_WIDTH + 55;

        if (frame < 10) {
            drawTextbox((W - lineLength) / 2, H / 2 - 50,
                lineLength * frame / 10, (12 + LARGE_LINE_HEIGHT) * frame / 10);
        } else {
            drawTextbox((W - lineLength) / 2, H / 2 - 50, lineLength, 12 + LARGE_LINE_HEIGHT);
            fc.beginPath();
            fc.drawImage(getResource("imgIconMenuCodex"), (W - lineLength ) / 2 + 15, H / 2 - 42, 30, 30);
            fc.textAlign = "center";
            fc.fillStyle = "white";
            fc.font = LARGE_FONT;
            fc.fillText(entryLine, W / 2 + 16, H / 2 - 50 + LARGE_LINE_HEIGHT - 5);
            fc.textAlign = "left";

            return (keyPressed == KEY_ACTION) || (keyPressed == KEY_ESC);
        }
        return false;
    });
    return displayItemMessageAction;
}

/* ESCAPE MENU LOGIC */

function processTutorialMessages(chId, varId, message1, message2) {
    if (gst[chId][varId] < 1) {
        gst[chId][varId] = 1;
        previousMenuState = menuState;
        menuState = MS_MENU_MESSAGE;
        var tutorialMessageSequence = new Sequence();
        tutorialMessageSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM,
            message1, true).authorizeMenuPlay());
        if (message2 != null) {
            tutorialMessageSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM,
                message2, true).authorizeMenuPlay());
        }
        tutorialMessageSequence.addAction(procureCodeFragmentAction(function () {
            menuState = previousMenuState;
        }).authorizeMenuPlay());
        registerObject(GUI_EVENT, tutorialMessageSequence);
    }
}


function procureEscapeMenuSequence() {
    var escMenuSequence = new Sequence();
    escMenuSequence.addAction(procureMaskAction().authorizeMenuPlay(), OBJECTS_NEAR_FRONT);
    escMenuSequence.addAction(procureDisplayMenuRootAction().authorizeMenuPlay());
    escMenuSequence.addAction(procureUnmaskAction().authorizeMenuPlay(), OBJECTS_NEAR_FRONT);
    escMenuSequence.addAction(procureCodeFragmentAction(function () {
        menuState = MS_NONE;
    }).authorizeMenuPlay());
    return escMenuSequence;
}

function procureDisplayMenuRootAction() {
    var displayMenuRootAction = new Action();
    displayMenuRootAction.choices = [
        TXT_MENU_STATS, TXT_MENU_SKILLS, TXT_MENU_ITEMS, TXT_MENU_CODEX, TXT_LOAD_GAME, TXT_MENU_QUIT
    ];
    displayMenuRootAction.definePlayFrame(function (frame) {
        function writeLine(line, lineCount, offset) {
            fc.beginPath();
            fc.fillStyle = "white";
            fc.font = LARGE_FONT;
            fc.fillText(line, HP_GAUGE_X + offset,
                HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 16 + LARGE_LINE_HEIGHT * (lineCount + 1));
        }

        if ((frame == 0)) {
            menuState = MS_ROOT;
            menuChoice = 0;
        }

        if (frame < 10) {
            drawTextbox(HP_GAUGE_X - 8, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET,
                300 * frame / 10, MENU_ROOT_HEIGHT * frame / 10);
        } else {
            drawTextbox(HP_GAUGE_X - 8, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET, 300, MENU_ROOT_HEIGHT);
            drawInfoWindow();

            processTutorialMessages(CH00, CH00_TUTORIAL_MENU_ROOT, CH00_TUTORIAL_MENU_ROOT_TXT);

            var lineLength = landscape.name[lang].length * LARGE_CHAR_WIDTH + 5;
            drawTextbox((W - lineLength - 20) / 2, HP_GAUGE_Y + 15, lineLength + 20, 12 + LARGE_LINE_HEIGHT);
            fc.beginPath();
            fc.textAlign = "center";
            fc.fillStyle = "white";
            fc.font = LARGE_FONT;
            fc.fillText(landscape.name[lang], W / 2, HP_GAUGE_Y + 10 + LARGE_LINE_HEIGHT);
            fc.textAlign = "left";

            var i;
            var lineCount = 0;
            if (menuState == MS_ROOT) {
                if (keyPressed == KEY_UP) {
                    playSfx(SFX_GUI_TINK);
                    if (menuChoice > 0) {
                        menuChoice--;
                    } else {
                        menuChoice = displayMenuRootAction.choices.length - 1;
                    }
                } else if (keyPressed == KEY_DOWN) {
                    playSfx(SFX_GUI_TINK);
                    if (menuChoice < displayMenuRootAction.choices.length - 1) {
                        menuChoice++;
                    } else {
                        menuChoice = 0;
                    }
                } else if (keyPressed == KEY_ACTION) {
                    playSfx(SFX_GUI_THUCK);
                    switch (menuChoice) {
                        case 0:
                            var escMenuStatsSequence = new Sequence();
                            escMenuStatsSequence.addAction(procureDisplayMenuStatsAction().authorizeMenuPlay());
                            escMenuStatsSequence.addAction(procureCodeFragmentAction(function () {
                                menuState = MS_ROOT;
                                menuChoice = 0;
                            }).authorizeMenuPlay());
                            registerObject(GUI_EVENT, escMenuStatsSequence);
                            break;
                        case 1:
                            var escMenuSkillsSequence = new Sequence();
                            escMenuSkillsSequence.addAction(procureDisplayMenuSkillsAction().authorizeMenuPlay());
                            escMenuSkillsSequence.addAction(procureCodeFragmentAction(function () {
                                menuState = MS_ROOT;
                                menuChoice = 1;
                            }).authorizeMenuPlay());
                            registerObject(GUI_EVENT, escMenuSkillsSequence);
                            break;
                        case 2:
                            var escMenuItemsSequence = new Sequence();
                            escMenuItemsSequence.addAction(procureDisplayMenuItemsAction().authorizeMenuPlay());
                            escMenuItemsSequence.addAction(procureCodeFragmentAction(function () {
                                menuState = MS_ROOT;
                                menuChoice = 2;
                            }).authorizeMenuPlay());
                            registerObject(GUI_EVENT, escMenuItemsSequence);
                            break;
                        case 3:
                            var escMenuCodexSequence = new Sequence();
                            escMenuCodexSequence.addAction(procureDisplayMenuCodexAction().authorizeMenuPlay());
                            escMenuCodexSequence.addAction(procureCodeFragmentAction(function () {
                                menuState = MS_ROOT;
                                menuChoice = 3;
                            }).authorizeMenuPlay());
                            registerObject(GUI_EVENT, escMenuCodexSequence);
                            break;
                        case 4:
                            loadGame();
                            break;
                        case 5:
                            resetGame();
                            registerObject(GUI_EVENT, procureTitleSequence());
                            break;
                    }
                }

                for (i = 0; i < displayMenuRootAction.choices.length; i++) {
                    writeLine(displayMenuRootAction.choices[i][lang], lineCount, 45);
                    lineCount++;
                    if (i == menuChoice) {
                        fc.beginPath();
                        var cursorOffset = (frame % 20 < 10) ? 20 : 25;
                        fc.drawImage(CURSOR_RIGHT, HP_GAUGE_X + cursorOffset, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET
                            + LARGE_LINE_HEIGHT * lineCount);
                    }
                }
            } else {
                for (i = 0; i < displayMenuRootAction.choices.length; i++) {
                    writeLine(displayMenuRootAction.choices[i][lang], lineCount, 45);
                    lineCount++;
                    if ((((i == 0) && (menuState == MS_STATS))
                        || ((i == 1) && (menuState >= MS_SKILLS_BROWSE_1) && (menuState <= MS_SKILLS_EXCHANGE_3))
                        || ((i == 2) && (menuState >= MS_ITEMS_BROWSE_1) && (menuState <= MS_ITEMS_EXCHANGE_2))
                        || ((i == 3) && (menuState >= MS_CODEX_ROOT) && (menuState <= MS_CODEX_ENTRY)))
                        && (frame % 14 > 6)) {
                        fc.beginPath();
                        fc.drawImage(CURSOR_RIGHT, HP_GAUGE_X + 20, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET
                            + LARGE_LINE_HEIGHT * lineCount);
                    }
                }
            }

            if ((keyPressed == KEY_ESC) && (menuState == MS_ROOT)) {
                playSfx(SFX_GUI_THUCK);
            }

            return (keyPressed == KEY_ESC) && (menuState == MS_ROOT);
        }
        return false;
    });
    return displayMenuRootAction;
}

function procureDisplayMenuStatsAction() {
    var displayMenuStatsAction = new Action();
    displayMenuStatsAction.definePlayFrame(function (frame) {
        var lineCount = 0;
        function writeRecord(key, value) {
            lineCount++;
            fc.beginPath();
            if (lineCount % 2 == 0) {
                fc.fillStyle = "#4444AA";
            } else {
                fc.fillStyle = "#5555AA";
            }
            fc.fillRect(MENU_SKILLS_AVAILABLE_X + 5, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + DEFAULT_LINE_HEIGHT * (lineCount + 1),
                MENU_SKILLS_COLUMN_WIDTH * 2, DEFAULT_LINE_HEIGHT);
            fc.fillStyle = "white";
            fc.font = DEFAULT_FONT;
            fc.fillText(key, MENU_SKILLS_AVAILABLE_X + 25,
                HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 16 + DEFAULT_LINE_HEIGHT * (lineCount + 1));
            fc.fillText(value, MENU_SKILLS_AURA_X + 25,
                HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 16 + DEFAULT_LINE_HEIGHT * (lineCount + 1));
        }

        function writeDestiny(name, lineCount) {
            fc.beginPath();
            fc.fillStyle = "white";
            fc.font = DEFAULT_FONT;
            fc.fillText(name, MENU_SKILLS_ACTIVE_X + 45,
                HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 16 + DEFAULT_LINE_HEIGHT * (lineCount + 1));
        }

        if ((frame == 0)) {
            menuState = MS_STATS;
            menuChoice = 0;
        }

        if (frame < 10) {
            drawTextbox(MENU_SKILLS_AVAILABLE_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET, (W - HP_GAUGE_X - 320) * frame / 10,
                (INFO_WINDOW_Y - HP_GAUGE_Y - MENU_ROOT_Y_OFFSET - 10) * frame / 10);
            drawTextbox(MENU_SKILLS_ACTIVE_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET,
                MENU_SKILLS_COLUMN_WIDTH * frame / 10, MENU_ROOT_HEIGHT * frame / 10);
        } else {
            drawTextbox(MENU_SKILLS_AVAILABLE_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET, W - HP_GAUGE_X - MENU_SKILLS_COLUMN_WIDTH - 322,
                INFO_WINDOW_Y - HP_GAUGE_Y - MENU_ROOT_Y_OFFSET - 10);
            drawTextbox(MENU_SKILLS_ACTIVE_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET, MENU_SKILLS_COLUMN_WIDTH, MENU_ROOT_HEIGHT);

            processTutorialMessages(CH00, CH00_TUTORIAL_MENU_STATS, CH00_TUTORIAL_MENU_STATS_TXT);

            var xOffset = MENU_SKILLS_AVAILABLE_X + 30;
            fc.beginPath();
            fc.fillStyle = "white";
            fc.font = LARGE_FONT;
            fc.textAlign = "center";
            fc.fillText(TXT_MENU_STATS[lang], MENU_SKILLS_AURA_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 12 + DEFAULT_LINE_HEIGHT);
            fc.textAlign = "left";

            writeRecord(TXT_MAXHP[lang], Math.floor(hero.attrMaxHp));
            writeRecord(TXT_MAXSP[lang], Math.floor(hero.attrMaxSp));
            writeRecord(TXT_STATS_SKILLS_LEARNED[lang], hero.availableSkills.length + hero.availableAuraSkills.length
                + hero.activeSkills.filter(function (x) { return x; }).length + hero.activeAuraSkills.filter(function (x) { return x; }).length);
            writeRecord(TXT_STATS_CODEX_ENTRIES[lang], hero.codexEntries.length);

            fc.beginPath();
            fc.fillStyle = "white";
            fc.font = LARGE_FONT;
            fc.fillText(TXT_STATS_DESTINIES[lang], MENU_SKILLS_ACTIVE_X + 35, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 12 + DEFAULT_LINE_HEIGHT);
            for (var i = 0; i < 1; i++) {
                writeDestiny(["Rat rider", "Крысиный всадник"][lang], i + 1);
                fc.beginPath();
                var cursorOffset = (frame % 20 < 10) ? 20 : 25;
                fc.drawImage(CURSOR_RIGHT, MENU_SKILLS_ACTIVE_X + cursorOffset,
                    HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 24 + DEFAULT_LINE_HEIGHT * (i + 1));
                processInfoText(["Rat riders are an order of warriors who have formed a bond with their rat steed to the point of sharing " +
                    "their strength with each other. This is only possible if one accepts the Vows of Adamancy that define the ideals of " +
                    "rat riders. These vows include adhering to Natural Order, protecting the meek and answering any challenge they receive. " +
                    "Though nobody knows for sure, it is said that sentient rats were ones to create the Vows.",
                    "Крысиные всадники - это орден воинов, которые имеют особую связь со своей боевой крысой, позволяющую им делиться друг " +
                        "с другом своей силой. Это возможно только в случае принятия Обетов Твёрдости, которые определяют идеалы крысиных " +
                        "всадников. Они включают в себя поддержание Естественного Порядка, защиту смиренных и ответ на любой брошенный им вызов. " +
                        "Хотя никто не знает наверняка, говорят, именно разумные крысы создали Обеты."]);
            }

            return (keyPressed == KEY_ESC) && (menuState == MS_STATS);
        }
        return false;
    });
    return displayMenuStatsAction;
}

function procureDisplayMenuSkillsAction() {
    var displayMenuSkillsAction = new Action();
    displayMenuSkillsAction.definePlayFrame(function (frame) {
        function writeLine(line, color, font, lineCount, offset) {
            fc.beginPath();
            fc.fillStyle = color;
            fc.font = font;
            fc.fillText(line, offset, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 12 + DEFAULT_LINE_HEIGHT * (lineCount + 1));
        }

        if ((frame == 0)) {
            menuState = MS_SKILLS_BROWSE_1;
            menuChoice = 0;
            scrollOffset = 0;
            objectChoice[0] = 0;
            objectChoice[1] = 0;
            objectChoice[2] = 0;
        }

        if (frame < 10) {
            drawTextbox(MENU_SKILLS_AVAILABLE_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET,
                MENU_SKILLS_COLUMN_WIDTH * frame / 10, MENU_ROOT_HEIGHT * frame / 10);
            drawTextbox(MENU_SKILLS_AURA_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET,
                MENU_SKILLS_COLUMN_WIDTH * frame / 10, MENU_ROOT_HEIGHT * frame / 10);
            drawTextbox(MENU_SKILLS_ACTIVE_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET,
                MENU_SKILLS_COLUMN_WIDTH * frame / 10, MENU_ROOT_HEIGHT * frame / 10);
        } else {
            drawTextbox(MENU_SKILLS_AVAILABLE_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET,
                MENU_SKILLS_COLUMN_WIDTH, MENU_ROOT_HEIGHT);
            drawTextbox(MENU_SKILLS_AURA_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET,
                MENU_SKILLS_COLUMN_WIDTH, MENU_ROOT_HEIGHT);
            drawTextbox(MENU_SKILLS_ACTIVE_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET,
                MENU_SKILLS_COLUMN_WIDTH, MENU_ROOT_HEIGHT);

            processTutorialMessages(CH00, CH00_TUTORIAL_MENU_SKILLS, CH00_TUTORIAL_MENU_SKILLS_TXT);

            function getItemSetByMenuState(ms) {
                if (menuState < MS_SKILLS_EXCHANGE_1) {
                    return menuState - MS_SKILLS_BROWSE_1;
                } else if ((menuState == MS_SKILLS_EXCHANGE_1) || (menuState == MS_SKILLS_EXCHANGE_2)) {
                    return 2;
                } else if (objectChoice[2] > 6) {
                    return 1;
                } else {
                    return 0;
                }
            }

            function getLengthByColumn(col) {
                switch (col) {
                    case 0:
                        return hero.availableSkills.length;
                    case 1:
                        return hero.availableAuraSkills.length;
                    case 2:
                        return 9;
                    default:
                        return null;
                }
            }

            var escSafe = false;
            var skillInfo;
            var x;
            var i = getItemSetByMenuState(menuState);
            if (keyPressed == KEY_UP) {
                playSfx(SFX_GUI_TINK);
                if ((menuState < MS_SKILLS_EXCHANGE_1) || (menuState == MS_SKILLS_EXCHANGE_3)) {
                    objectChoice[i]--;
                    if (objectChoice[i] < 0) {
                        objectChoice[i] = getLengthByColumn(i);
                    }
                    if (i == 0) {
                        if (objectChoice[i] < scrollOffset) {
                            scrollOffset--;
                        } else if ((scrollOffset == 0) && (objectChoice[i] > 12)) {
                            scrollOffset = objectChoice[i] - 12;
                        }
                    }
                } else if (menuState == MS_SKILLS_EXCHANGE_1) {
                    objectChoice[i]--;
                    if (objectChoice[i] < 0) {
                        objectChoice[i] = 6;
                    }
                } else {
                    objectChoice[i]--;
                    if (objectChoice[i] < 7) {
                        objectChoice[i] = 9;
                    }
                }
            } else if (keyPressed == KEY_DOWN) {
                playSfx(SFX_GUI_TINK);
                if ((menuState < MS_SKILLS_EXCHANGE_1) || (menuState == MS_SKILLS_EXCHANGE_3)) {
                    objectChoice[i]++;
                    if (objectChoice[i] > getLengthByColumn(i)) {
                        objectChoice[i] = 0;
                    }
                    if (i == 0) {
                        if (objectChoice[i] > 12) {
                            scrollOffset = objectChoice[i] - 12;
                        } else {
                            scrollOffset = 0;
                        }
                    }
                } else if (menuState == MS_SKILLS_EXCHANGE_1) {
                    objectChoice[i]++;
                    if (objectChoice[i] > 6) {
                        objectChoice[i] = 0;
                    }
                } else {
                    objectChoice[i]++;
                    if (objectChoice[i] > 9) {
                        objectChoice[i] = 7;
                    }
                }
            } else if (keyPressed == KEY_RIGHT) {
                playSfx(SFX_GUI_TINK);
                if (menuState < MS_SKILLS_EXCHANGE_1) {
                    menuState++;
                    if (menuState > MS_SKILLS_BROWSE_3) {
                        menuState = MS_SKILLS_BROWSE_1;
                    }
                }
            } else if (keyPressed == KEY_LEFT) {
                playSfx(SFX_GUI_TINK);
                if (menuState < MS_SKILLS_EXCHANGE_1) {
                    menuState--;
                    if (menuState < MS_SKILLS_BROWSE_1) {
                        menuState = MS_SKILLS_BROWSE_3;
                    }
                }
            } else if (keyPressed == KEY_ACTION) {
                playSfx(SFX_GUI_THUCK);
                switch (menuState) {
                    case MS_SKILLS_BROWSE_1:
                        menuState = MS_SKILLS_EXCHANGE_1;
                        objectChoice[2] = 0;
                        break;
                    case MS_SKILLS_BROWSE_2:
                        menuState = MS_SKILLS_EXCHANGE_2;
                        objectChoice[2] = 7;
                        break;
                    case MS_SKILLS_BROWSE_3:
                        menuState = MS_SKILLS_EXCHANGE_3;
                        break;
                    case MS_SKILLS_EXCHANGE_1:
                        x = hero.availableSkills[objectChoice[0]];
                        hero.availableSkills[objectChoice[0]] = hero.activeSkills[objectChoice[2]];
                        hero.activeSkills[objectChoice[2]] = x;
                        menuState = MS_SKILLS_BROWSE_1;
                        hero.availableSkills = hero.availableSkills.filter(function (x) { return x; });
                        break;
                    case MS_SKILLS_EXCHANGE_2:
                        x = hero.availableAuraSkills[objectChoice[1]];
                        hero.availableAuraSkills[objectChoice[1]] = hero.activeAuraSkills[objectChoice[2] - 7];
                        hero.activeAuraSkills[objectChoice[2] - 7] = x;
                        menuState = MS_SKILLS_BROWSE_2;
                        hero.availableAuraSkills = hero.availableAuraSkills.filter(function (x) {return x; });
                        break;
                    case MS_SKILLS_EXCHANGE_3:
                        if (objectChoice[2] < 7) {
                            x = hero.availableSkills[objectChoice[0]];
                            hero.availableSkills[objectChoice[0]] = hero.activeSkills[objectChoice[2]];
                            hero.activeSkills[objectChoice[2]] = x;
                            hero.availableSkills = hero.availableSkills.filter(function (x) {return x; });
                        } else {
                            x = hero.availableAuraSkills[objectChoice[1]];
                            hero.availableAuraSkills[objectChoice[1]] = hero.activeAuraSkills[objectChoice[2] - 7];
                            hero.activeAuraSkills[objectChoice[2] - 7] = x;
                            hero.availableAuraSkills = hero.availableAuraSkills.filter(function (x) {return x; });
                        }
                        menuState = MS_SKILLS_BROWSE_3;
                        break;
                }
            } else if (keyPressed == KEY_ESC) {
                playSfx(SFX_GUI_THUCK);
                if (menuState >= MS_SKILLS_EXCHANGE_1) {
                    menuState -= 3;
                    escSafe = true;
                }
            }

            // AVAILABLE SKILLS COLUMN
            var lineCount = 0;
            var xOffset = MENU_SKILLS_AVAILABLE_X + 30;
            writeLine(TXT_MENU_AVAILABLE_SKILLS[lang], "white", LARGE_FONT, lineCount, xOffset - 10);
            lineCount++;
            if (scrollOffset > 0) {
                fc.beginPath();
                var cursorOffset = (frame % 20 < 10) ? 40 : 45;
                fc.drawImage(CURSOR_UP, MENU_SKILLS_AVAILABLE_X + MENU_SKILLS_COLUMN_WIDTH / 2,
                    HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + cursorOffset);
            }
            for (i = scrollOffset; (i < hero.availableSkills.length + 1) && (i - scrollOffset < 13); i++) {
                lineCount++;
                if (hero.availableSkills[i] != null) {
                    writeLine(gainSkill(hero.availableSkills[i]).name[lang], "white", DEFAULT_FONT, lineCount,
                        MENU_SKILLS_AVAILABLE_X + 45);
                }
                if (i == objectChoice[0]) {
                    if ((menuState == MS_SKILLS_BROWSE_1)
                        || ((menuState == MS_SKILLS_EXCHANGE_3) && (objectChoice[2] < 7))) {
                        fc.beginPath();
                        cursorOffset = (frame % 20 < 10) ? 20 : 25;
                        fc.drawImage(CURSOR_RIGHT, MENU_SKILLS_AVAILABLE_X + cursorOffset,
                            HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 20 + DEFAULT_LINE_HEIGHT * lineCount);
                        if (hero.availableSkills[i] != null) {
                            skillInfo = [
                                gainSkill(hero.availableSkills[i]).name[LANG_ENG] + " - "
                                    + gainSkill(hero.availableSkills[i]).spCost + " " + TXT_SP[LANG_ENG]
                                    + " <br> <br> " + gainSkill(hero.availableSkills[i]).description[LANG_ENG],
                                gainSkill(hero.availableSkills[i]).name[LANG_RUS] + " - "
                                    + gainSkill(hero.availableSkills[i]).spCost + " " + TXT_SP[LANG_RUS]
                                    + " <br> <br> " + gainSkill(hero.availableSkills[i]).description[LANG_RUS]
                            ];
                            processInfoText(skillInfo);
                        }
                    } else if ((menuState == MS_SKILLS_EXCHANGE_1) && (frame % 8 > 3)) {
                        // blinks
                        fc.beginPath();
                        fc.drawImage(CURSOR_RIGHT, MENU_SKILLS_AVAILABLE_X + 20, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET
                            + 20 + DEFAULT_LINE_HEIGHT * lineCount);
                    }
                }
            }
            if ((i < hero.availableSkills.length)) {
                fc.beginPath();
                cursorOffset = (frame % 20 < 10) ? 360 : 355;
                fc.drawImage(CURSOR_DOWN, MENU_SKILLS_AVAILABLE_X + MENU_SKILLS_COLUMN_WIDTH / 2,
                    HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + cursorOffset);
            }

            // AVAILABLE AURA SKILLS COLUMN
            lineCount = 0;
            xOffset = MENU_SKILLS_AURA_X + 30;
            writeLine(TXT_MENU_AVAILABLE_AURA_SKILLS[lang], "white", LARGE_FONT, lineCount, xOffset - 10);
            lineCount++;
            for (i = 0; i < hero.availableAuraSkills.length + 1; i++) {
                lineCount++;
                if (hero.availableAuraSkills[i] != null) {
                    writeLine(gainSkill(hero.availableAuraSkills[i]).name[lang], TEXT_COLOR_GOLD, DEFAULT_FONT,
                        lineCount, MENU_SKILLS_AURA_X + 45);
                }
                if (i == objectChoice[1]) {
                    if ((menuState == MS_SKILLS_BROWSE_2)
                        || ((menuState == MS_SKILLS_EXCHANGE_3) && (objectChoice[2] >= 7))) {
                        fc.beginPath();
                        cursorOffset = (frame % 20 < 10) ? 20 : 25;
                        fc.drawImage(CURSOR_RIGHT, MENU_SKILLS_AURA_X + cursorOffset, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET
                            + 20 + DEFAULT_LINE_HEIGHT * lineCount);
                        if (hero.availableAuraSkills[i] != null) {
                            skillInfo = [
                                gainSkill(hero.availableAuraSkills[i]).name[LANG_ENG] + " - "
                                    + gainSkill(hero.availableAuraSkills[i]).spCost + " " + TXT_SP[LANG_ENG]
                                    + TXT_FULL_AP_GAUGE_REQ[LANG_ENG] + " <br> <br> "
                                    + gainSkill(hero.availableAuraSkills[i]).description[LANG_ENG],
                                gainSkill(hero.availableAuraSkills[i]).name[LANG_RUS] + " - "
                                    + gainSkill(hero.availableAuraSkills[i]).spCost + " " + TXT_SP[LANG_RUS]
                                    + TXT_FULL_AP_GAUGE_REQ[LANG_RUS] + " <br> <br> "
                                    + gainSkill(hero.availableAuraSkills[i]).description[LANG_RUS]
                            ];
                            processInfoText(skillInfo);
                        }
                    } else if ((menuState == MS_SKILLS_EXCHANGE_2) && (frame % 8 > 3)) {
                        // blinks
                        fc.beginPath();
                        fc.drawImage(CURSOR_RIGHT, MENU_SKILLS_AURA_X + 20, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET
                            + 20 + DEFAULT_LINE_HEIGHT * lineCount);
                    }
                }
            }

            // ACTIVE SKILLS COLUMN
            lineCount = 0;
            xOffset = MENU_SKILLS_ACTIVE_X + 30;
            writeLine(TXT_MENU_ACTIVE_SKILLS[lang], "white", LARGE_FONT, lineCount, xOffset - 10);
            lineCount++;
            for (i = 0; i < 7; i++) {
                lineCount++;
                if (hero.activeSkills[i] == null) {
                    writeLine((i + 1).toString() + ": --------", "white", DEFAULT_FONT, lineCount,
                        MENU_SKILLS_ACTIVE_X + 45);
                } else {
                    writeLine((i + 1).toString() + ": " + gainSkill(hero.activeSkills[i]).name[lang],
                        "white", DEFAULT_FONT, lineCount, MENU_SKILLS_ACTIVE_X + 45);
                }
                if (i == objectChoice[2]) {
                    if ((menuState == MS_SKILLS_BROWSE_3) || (menuState == MS_SKILLS_EXCHANGE_1)) {
                        fc.beginPath();
                        cursorOffset = (frame % 20 < 10) ? 20 : 25;
                        fc.drawImage(CURSOR_RIGHT, MENU_SKILLS_ACTIVE_X + cursorOffset,
                            HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 20 + DEFAULT_LINE_HEIGHT * lineCount);
                        if (hero.activeSkills[i] != null) {
                            skillInfo = [
                                gainSkill(hero.activeSkills[i]).name[LANG_ENG] + " - "
                                    + gainSkill(hero.activeSkills[i]).spCost + " " + TXT_SP[LANG_ENG]
                                    + " <br> <br> " + gainSkill(hero.activeSkills[i]).description[LANG_ENG],
                                gainSkill(hero.activeSkills[i]).name[LANG_RUS] + " - "
                                    + gainSkill(hero.activeSkills[i]).spCost + " " + TXT_SP[LANG_RUS]
                                    + " <br> <br> " + gainSkill(hero.activeSkills[i]).description[LANG_RUS]
                            ];
                            processInfoText(skillInfo);
                        }
                    } else if ((menuState == MS_SKILLS_EXCHANGE_3) && (frame % 8 > 3)) {
                        // blinks
                        fc.beginPath();
                        fc.drawImage(CURSOR_RIGHT, MENU_SKILLS_ACTIVE_X + 20, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET
                            + 20 + DEFAULT_LINE_HEIGHT * lineCount);
                    }
                }
            }

            // ACTIVE AURA SKILLS
            lineCount += 2;
            writeLine(TXT_MENU_ACTIVE_AURA_SKILLS[lang], "white", LARGE_FONT, lineCount, xOffset - 10);
            lineCount++;
            for (i = 0; i < 3; i++) {
                lineCount++;
                if (hero.activeAuraSkills[i] == null) {
                    writeLine(((i + 8) % 10).toString() + ": --------", TEXT_COLOR_GOLD, DEFAULT_FONT, lineCount,
                        MENU_SKILLS_ACTIVE_X + 45);
                } else {
                    writeLine(((i + 8) % 10).toString() + ": " + gainSkill(hero.activeAuraSkills[i]).name[lang],
                        TEXT_COLOR_GOLD, DEFAULT_FONT, lineCount, MENU_SKILLS_ACTIVE_X + 45);
                }
                if (i + 7 == objectChoice[2]) {
                    if ((menuState == MS_SKILLS_BROWSE_3) || (menuState == MS_SKILLS_EXCHANGE_2)) {
                        fc.beginPath();
                        cursorOffset = (frame % 20 < 10) ? 20 : 25;
                        fc.drawImage(CURSOR_RIGHT, MENU_SKILLS_ACTIVE_X + cursorOffset,
                            HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 20 + DEFAULT_LINE_HEIGHT * lineCount);
                        if (hero.activeAuraSkills[i] != null) {
                            skillInfo = [
                                gainSkill(hero.activeAuraSkills[i]).name[LANG_ENG] + " - "
                                    + gainSkill(hero.activeAuraSkills[i]).spCost + " " + TXT_SP[LANG_ENG]
                                    + TXT_FULL_AP_GAUGE_REQ[LANG_ENG] + " <br> <br> "
                                    + gainSkill(hero.activeAuraSkills[i]).description[LANG_ENG],
                                gainSkill(hero.activeAuraSkills[i]).name[LANG_RUS] + " - "
                                    + gainSkill(hero.activeAuraSkills[i]).spCost + " " + TXT_SP[LANG_RUS]
                                    + TXT_FULL_AP_GAUGE_REQ[LANG_RUS] + " <br> <br> "
                                    + gainSkill(hero.activeAuraSkills[i]).description[LANG_RUS]
                            ];
                            processInfoText(skillInfo);
                        }
                    } else if ((menuState == MS_SKILLS_EXCHANGE_3) && (frame % 8 > 3)) {
                        // blinks
                        fc.beginPath();
                        fc.drawImage(CURSOR_RIGHT, MENU_SKILLS_ACTIVE_X + 20, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET
                            + 20 + DEFAULT_LINE_HEIGHT * lineCount);
                    }
                }
            }

            return (keyPressed == KEY_ESC) && !escSafe && (menuState >= MS_SKILLS_BROWSE_1) && (menuState <= MS_SKILLS_BROWSE_3);
        }
        return false;
    });
    return displayMenuSkillsAction;
}

function procureDisplayMenuItemsAction() {
    var displayMenuItemsAction = new Action();
    displayMenuItemsAction.definePlayFrame(function (frame) {
        function writeLine(line, color, font, lineCount, offset) {
            fc.beginPath();
            fc.fillStyle = color;
            fc.font = font;
            fc.fillText(line, offset, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 12 + DEFAULT_LINE_HEIGHT * (lineCount + 1));
        }

        if ((frame == 0)) {
            menuState = MS_ITEMS_BROWSE_1;
            menuChoice = 0;
            scrollOffset = 0;
            objectChoice[0] = 0;
            objectChoice[1] = 0;
            objectChoice[2] = 0;
        }

        if (frame < 10) {
            drawTextbox(MENU_SKILLS_AVAILABLE_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET,
                MENU_SKILLS_COLUMN_WIDTH * frame / 10, MENU_ROOT_HEIGHT * frame / 10);
            drawTextbox(MENU_SKILLS_AURA_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET,
                (INFO_WINDOW_W - MENU_SKILLS_COLUMN_WIDTH - 10) * frame / 10, MENU_ROOT_HEIGHT * frame / 10);
        } else {
            drawTextbox(MENU_SKILLS_AVAILABLE_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET,
                MENU_SKILLS_COLUMN_WIDTH, MENU_ROOT_HEIGHT);
            drawTextbox(MENU_SKILLS_AURA_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET,
                INFO_WINDOW_W - MENU_SKILLS_COLUMN_WIDTH - 10, MENU_ROOT_HEIGHT);

            processTutorialMessages(CH00, CH00_TUTORIAL_MENU_ITEMS, CH00_TUTORIAL_MENU_ITEMS_TXT_01,
                CH00_TUTORIAL_MENU_ITEMS_TXT_02);

            function getItemSetByMenuState(ms) {
                if (ms < MS_ITEMS_EXCHANGE_1) {
                    return menuState - MS_ITEMS_BROWSE_1;
                } else if (ms == MS_ITEMS_EXCHANGE_1) {
                    return 1;
                } else {
                    return 0;
                }
            }

            function getLengthByColumn(col) {
                switch (col) {
                    case 0:
                        return hero.availableItems.length;
                    case 1:
                        return 4;
                    case 2:
                        return 2;
                    default:
                        return null;
                }
            }

            var escSafe = false;
            var currentItem;
            var itemInfo;
            var x;
            var i = getItemSetByMenuState(menuState);
            if (keyPressed == KEY_UP) {
                playSfx(SFX_GUI_TINK);
                if ((menuState == MS_ITEMS_BROWSE_2) && (objectChoice[i] == 0)) {
                    menuState = MS_ITEMS_BROWSE_3;
                    objectChoice[2] = 2;
                } else if ((menuState == MS_ITEMS_BROWSE_3) && (objectChoice[2] == 0)) {
                    menuState = MS_ITEMS_BROWSE_2;
                    objectChoice[1] = 4;
                } else {
                    objectChoice[i]--;
                    if (objectChoice[i] < 0) {
                        objectChoice[i] = getLengthByColumn(i);
                    }
                    if (i == 0) {
                        if (objectChoice[i] < scrollOffset) {
                            scrollOffset--;
                        } else if ((scrollOffset == 0) && (objectChoice[i] > 12)) {
                            scrollOffset = objectChoice[i] - 12;
                        }
                    }
                }
            } else if (keyPressed == KEY_DOWN) {
                playSfx(SFX_GUI_TINK);
                if ((menuState == MS_ITEMS_BROWSE_2) && (objectChoice[i] == 4)) {
                    menuState = MS_ITEMS_BROWSE_3;
                    objectChoice[2] = 0;
                } else if ((menuState == MS_ITEMS_BROWSE_3) && (objectChoice[2] == 2)) {
                    menuState = MS_ITEMS_BROWSE_2;
                    objectChoice[1] = 0;
                } else {
                    objectChoice[i]++;
                    if (objectChoice[i] > getLengthByColumn(i)) {
                        objectChoice[i] = 0;
                    }
                    if (i == 0) {
                        if (objectChoice[i] > 12) {
                            scrollOffset = objectChoice[i] - 12;
                        } else {
                            scrollOffset = 0;
                        }
                    }
                }
            } else if ((keyPressed == KEY_RIGHT) || (keyPressed == KEY_LEFT)) {
                playSfx(SFX_GUI_TINK);
                if (menuState == MS_ITEMS_BROWSE_1) {
                    menuState = MS_ITEMS_BROWSE_2;
                } else if ((menuState == MS_ITEMS_BROWSE_2) || (menuState == MS_ITEMS_BROWSE_3)) {
                    menuState = MS_ITEMS_BROWSE_1;
                }
            } else if (keyPressed == KEY_ACTION) {
                if (menuState != MS_ITEMS_BROWSE_3) {
                    playSfx(SFX_GUI_THUCK);
                } else {
                    playSfx(SFX_GUI_BOROK);
                }
                switch (menuState) {
                    case MS_ITEMS_BROWSE_1:
                        if (keyCtrl) {
                            hero.useItemInField(false, objectChoice[0]);
                        } else {
                            menuState = MS_ITEMS_EXCHANGE_1;
                        }
                        break;
                    case MS_ITEMS_BROWSE_2:
                        if (keyCtrl) {
                            hero.useItemInField(true, objectChoice[1]);
                        } else {
                            menuState = MS_ITEMS_EXCHANGE_2;
                        }
                        break;
                    case MS_ITEMS_BROWSE_3:
                        // cannot change equipment at this time
                        break;
                    case MS_ITEMS_EXCHANGE_1:
                    case MS_ITEMS_EXCHANGE_2:
                        x = hero.availableItems[objectChoice[0]];
                        hero.availableItems[objectChoice[0]] = hero.activeItems[objectChoice[1]];
                        hero.activeItems[objectChoice[1]] = x;
                        menuState -= 3;
                        hero.availableItems = hero.availableItems.filter(function (x) {
                            return x;
                        });
                        break;
                }
            } else if (keyPressed == KEY_ESC) {
                playSfx(SFX_GUI_THUCK);
                if (menuState >= MS_ITEMS_EXCHANGE_1) {
                    menuState -= 3;
                    escSafe = true;
                }
            }

            // AVAILABLE ITEMS COLUMN
            var lineCount = 0;
            var xOffset = MENU_SKILLS_AVAILABLE_X + 30;
            writeLine(TXT_MENU_AVAILABLE_ITEMS[lang], "white", LARGE_FONT, lineCount, xOffset - 10);
            lineCount++;
            if (scrollOffset > 0) {
                fc.beginPath();
                var cursorOffset = (frame % 20 < 10) ? 40 : 45;
                fc.drawImage(CURSOR_UP, MENU_SKILLS_AVAILABLE_X + MENU_SKILLS_COLUMN_WIDTH / 2,
                    HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + cursorOffset);
            }
            for (i = scrollOffset; (i < hero.availableItems.length + 1) && (i - scrollOffset < 13); i++) {
                lineCount++;
                if (hero.availableItems[i] != null) {
                    currentItem = obtainItem(hero.availableItems[i].id);
                    writeLine(currentItem.name[lang]
                        + (hero.availableItems[i].charges > 1 ?" x" + hero.availableItems[i].charges : ""),
                        "white", DEFAULT_FONT, lineCount, MENU_SKILLS_AVAILABLE_X + 45);
                }
                if (i == objectChoice[0]) {
                    if ((menuState == MS_ITEMS_BROWSE_1) || (menuState == MS_ITEMS_EXCHANGE_2)) {
                        fc.beginPath();
                        cursorOffset = (frame % 20 < 10) ? 20 : 25;
                        fc.drawImage(CURSOR_RIGHT, MENU_SKILLS_AVAILABLE_X + cursorOffset,
                            HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 20 + DEFAULT_LINE_HEIGHT * lineCount);
                        if (hero.availableItems[i] != null) {
                            itemInfo = [
                                currentItem.name[LANG_ENG] + " <br> <br> " + currentItem.description[LANG_ENG]
                                    + " <br> <br> " + TXT_USES_REMAINING[LANG_ENG] + hero.availableItems[i].charges
                                    + (currentItem.usableInField && (menuState < MS_ITEMS_BROWSE_3)
                                    ? ". " + TXT_USABLE_IN_FIELD[LANG_ENG] : ""),
                                currentItem.name[LANG_RUS] + " <br> <br> " + currentItem.description[LANG_RUS]
                                    + " <br> <br> " + TXT_USES_REMAINING[LANG_RUS] + hero.availableItems[i].charges
                                    + (currentItem.usableInField && (menuState < MS_ITEMS_BROWSE_3)
                                    ? ". " + TXT_USABLE_IN_FIELD[LANG_RUS] : "")
                            ];
                            processInfoText(itemInfo);
                        }
                    } else if ((menuState == MS_ITEMS_EXCHANGE_1) && (frame % 8 > 3)) {
                        // blinks
                        fc.beginPath();
                        fc.drawImage(CURSOR_RIGHT, MENU_SKILLS_AVAILABLE_X + 20, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET
                            + 20 + DEFAULT_LINE_HEIGHT * lineCount);
                    }
                }
            }
            if ((i < hero.availableItems.length)) {
                fc.beginPath();
                cursorOffset = (frame % 20 < 10) ? 360 : 355;
                fc.drawImage(CURSOR_DOWN, MENU_SKILLS_AVAILABLE_X + MENU_SKILLS_COLUMN_WIDTH / 2,
                    HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + cursorOffset);
            }

            // ACTIVE ITEMS COLUMN
            lineCount = 0;
            xOffset = MENU_SKILLS_AURA_X + 30;
            writeLine(TXT_MENU_ACTIVE_ITEMS[lang], "white", LARGE_FONT, lineCount, xOffset - 10);
            lineCount++;
            for (i = 0; i < 5; i++) {
                lineCount++;
                if (hero.activeItems[i] == null) {
                    writeLine((i + 1).toString() + ": --------", "white", DEFAULT_FONT, lineCount,
                        MENU_SKILLS_AURA_X + 45);
                } else {
                    currentItem = obtainItem(hero.activeItems[i].id);
                    writeLine((i + 1).toString() + ": " + currentItem.name[lang]
                        + (hero.activeItems[i].charges > 1 ? " x" + hero.activeItems[i].charges : ""),
                        "white", DEFAULT_FONT, lineCount, MENU_SKILLS_AURA_X + 45);
                }
                if (i == objectChoice[1]) {
                    if ((menuState == MS_ITEMS_BROWSE_2) || (menuState == MS_ITEMS_EXCHANGE_1)) {
                        fc.beginPath();
                        cursorOffset = (frame % 20 < 10) ? 20 : 25;
                        fc.drawImage(CURSOR_RIGHT, MENU_SKILLS_AURA_X + cursorOffset,
                            HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 20 + DEFAULT_LINE_HEIGHT * lineCount);
                        if (hero.activeItems[i] != null) {
                            itemInfo = [
                                currentItem.name[LANG_ENG] + " <br> <br> " + currentItem.description[LANG_ENG]
                                    + " <br> <br> " + TXT_USES_REMAINING[LANG_ENG] + hero.activeItems[i].charges
                                    + (currentItem.usableInField && (menuState < MS_ITEMS_BROWSE_3)
                                    ? ". " + TXT_USABLE_IN_FIELD[LANG_ENG] : ""),
                                currentItem.name[LANG_RUS] + " <br> <br> " + currentItem.description[LANG_RUS]
                                    + " <br> <br> " + TXT_USES_REMAINING[LANG_RUS] + hero.activeItems[i].charges
                                    + (currentItem.usableInField && (menuState < MS_ITEMS_BROWSE_3)
                                    ? ". " + TXT_USABLE_IN_FIELD[LANG_RUS] : "")
                            ];
                            processInfoText(itemInfo);
                        }
                    } else if ((menuState == MS_ITEMS_EXCHANGE_2) && (frame % 8 > 3)) {
                        // blinks
                        fc.beginPath();
                        fc.drawImage(CURSOR_RIGHT, MENU_SKILLS_AURA_X + 20, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET
                            + 20 + DEFAULT_LINE_HEIGHT * lineCount);
                    }
                }
            }

            // EQUIPMENT INFO
            lineCount += 2;
            writeLine(TXT_MENU_EQUIPMENT[lang], "white", LARGE_FONT, lineCount, xOffset - 10);
            lineCount++;
            function displayEquipmentInfo(equipName, equipDesc, choiceId) {
                lineCount++;
                writeLine(equipName[lang], "gray", DEFAULT_FONT, lineCount, MENU_SKILLS_AURA_X + 45);
                if ((menuState == MS_ITEMS_BROWSE_3) && (objectChoice[2] == choiceId)) {
                    fc.beginPath();
                    cursorOffset = (frame % 20 < 10) ? 20 : 25;
                    fc.drawImage(CURSOR_RIGHT, MENU_SKILLS_AURA_X + cursorOffset,
                        HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 20 + DEFAULT_LINE_HEIGHT * lineCount);
                    itemInfo = [
                        equipName[LANG_ENG] + " <br> <br> " + equipDesc[LANG_ENG],
                        equipName[LANG_RUS] + " <br> <br> " + equipDesc[LANG_RUS]
                    ];
                    processInfoText(itemInfo);
                }
            }

            displayEquipmentInfo(TXT_MENU_QUEEN_OF_SPADES, TXT_MENU_QUEEN_OF_SPADES_DESC, 0);
            displayEquipmentInfo(TXT_MENU_WHITE_STEEL_ARMOR, TXT_MENU_WHITE_STEEL_ARMOR_DESC, 1);
            displayEquipmentInfo(TXT_MENU_RAT_RIDER_PELERINE, TXT_MENU_RAT_RIDER_PELERINE_DESC, 2);

            return (keyPressed == KEY_ESC) && !escSafe && (menuState >= MS_ITEMS_BROWSE_1) && (menuState <= MS_ITEMS_BROWSE_3);
        }
        return false;
    });
    return displayMenuItemsAction;
}

function procureDisplayMenuCodexAction() {
    var displayMenuCodexAction = new Action();
    displayMenuCodexAction.choices = [
        TXT_CODEX_LANDMARKS, TXT_CODEX_ENEMIES, TXT_CODEX_LORE, TXT_CODEX_JOURNAL
    ];
    displayMenuCodexAction.definePlayFrame(function (frame) {
        function writeLine(line, color, font, lineCount, offset) {
            fc.beginPath();
            fc.fillStyle = color;
            fc.font = font;
            fc.fillText(line, offset, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 12 + DEFAULT_LINE_HEIGHT * (lineCount + 1));
        }

        if ((frame == 0)) {
            menuState = MS_CODEX_ROOT;
            scrollOffset = 0;
            objectChoice[0] = 0;
        }

        if (frame < 10) {
            drawTextbox(MENU_SKILLS_AVAILABLE_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET,
                MENU_SKILLS_COLUMN_WIDTH * frame / 10, MENU_ROOT_HEIGHT * frame / 10);
        } else {
            drawTextbox(MENU_SKILLS_AVAILABLE_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET,
                MENU_SKILLS_COLUMN_WIDTH, MENU_ROOT_HEIGHT);

            processTutorialMessages(CH00, CH00_TUTORIAL_MENU_CODEX, CH00_TUTORIAL_MENU_CODEX_TXT);

            var i;
            var lineCount = 0;
            var cursorOffset;
            var xOffset = MENU_SKILLS_AVAILABLE_X + 45;
            writeLine(TXT_CODEX_CATEGORIES[lang], "white", LARGE_FONT, lineCount, xOffset - 25);
            lineCount++;
            if (menuState == MS_CODEX_ROOT) {
                if (keyPressed == KEY_UP) {
                    playSfx(SFX_GUI_TINK);
                    if (objectChoice[0] > 0) {
                        objectChoice[0]--;
                    } else {
                        objectChoice[0] = displayMenuCodexAction.choices.length - 1;
                    }
                } else if (keyPressed == KEY_DOWN) {
                    playSfx(SFX_GUI_TINK);
                    if (objectChoice[0] < displayMenuCodexAction.choices.length - 1) {
                        objectChoice[0]++;
                    } else {
                        objectChoice[0] = 0;
                    }
                } else if (keyPressed == KEY_ACTION) {
                    playSfx(SFX_GUI_THUCK);
                    var codexCategorySequence = new Sequence();
                    codexCategorySequence.addAction(procureDisplayMenuCodexCategoryAction().authorizeMenuPlay());
                    codexCategorySequence.addAction(procureCodeFragmentAction(function () {
                        menuState = MS_CODEX_ROOT;
                    }).authorizeMenuPlay());
                    registerObject(GUI_EVENT, codexCategorySequence);
                }

                for (i = 0; i < displayMenuCodexAction.choices.length; i++) {
                    lineCount++;
                    writeLine(displayMenuCodexAction.choices[i][lang], "white", DEFAULT_FONT, lineCount, xOffset);
                    if (i == objectChoice[0]) {
                        fc.beginPath();
                        cursorOffset = (frame % 20 < 10) ? 20 : 25;
                        fc.drawImage(CURSOR_RIGHT, xOffset - 45 + cursorOffset, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET
                            + 20 + DEFAULT_LINE_HEIGHT * lineCount);
                        processInfoText(getCategoryDescById(objectChoice[0]));
                    }
                }
            } else {
                for (i = 0; i < displayMenuCodexAction.choices.length; i++) {
                    lineCount++;
                    writeLine(displayMenuCodexAction.choices[i][lang], "white", DEFAULT_FONT, lineCount, xOffset);
                    if (i == objectChoice[0]) {
                        if (frame % 14 > 6) {
                            fc.beginPath();
                            fc.drawImage(CURSOR_RIGHT, xOffset - 25, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET
                                + 20 + DEFAULT_LINE_HEIGHT * lineCount);
                        }
                        processInfoText(getCategoryDescById(objectChoice[0]));
                    }
                }
            }

            if ((keyPressed == KEY_ESC) && (menuState == MS_CODEX_ROOT)) {
                playSfx(SFX_GUI_THUCK);
            }

            return (keyPressed == KEY_ESC) && (menuState == MS_CODEX_ROOT);
        }
        return false;
    });
    return displayMenuCodexAction;
}

function procureDisplayMenuCodexCategoryAction() {
    var displayCodexCategoryAction = new Action();
    displayCodexCategoryAction.entries = [];
    for (var e = 0; e < hero.codexEntries.length; e++) {
        if (inquireCodex(hero.codexEntries[e].id).category == objectChoice[0]) {
            displayCodexCategoryAction.entries.push(hero.codexEntries[e]);
        }
    }
    displayCodexCategoryAction.definePlayFrame(function (frame) {
        function writeLine(line, color, font, lineCount, offset) {
            fc.beginPath();
            fc.fillStyle = color;
            fc.font = font;
            fc.fillText(line, offset, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 12 + DEFAULT_LINE_HEIGHT * (lineCount + 1));
        }

        if ((frame == 0)) {
            menuState = MS_CODEX_CATEGORY;
            scrollOffset = 0;
            objectChoice[1] = 0;
        }

        if (frame < 10) {
            drawTextbox(MENU_SKILLS_AURA_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET,
                (INFO_WINDOW_W - MENU_SKILLS_COLUMN_WIDTH - 10) * frame / 10, MENU_ROOT_HEIGHT * frame / 10);
        } else {
            drawTextbox(MENU_SKILLS_AURA_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET,
                (INFO_WINDOW_W - MENU_SKILLS_COLUMN_WIDTH - 10), MENU_ROOT_HEIGHT);

            if (menuState == MS_CODEX_CATEGORY) {
                if (keyPressed == KEY_UP) {
                    playSfx(SFX_GUI_TINK);
                    if (objectChoice[1] > 0) {
                        objectChoice[1]--;
                    } else {
                        objectChoice[1] = displayCodexCategoryAction.entries.length - 1;
                    }
                    if (objectChoice[1] < scrollOffset) {
                        scrollOffset--;
                    } else if ((scrollOffset == 0) && (objectChoice[1] > 12)) {
                        scrollOffset = objectChoice[1] - 12;
                    }
                } else if (keyPressed == KEY_DOWN) {
                    playSfx(SFX_GUI_TINK);
                    if (objectChoice[1] < displayCodexCategoryAction.entries.length - 1) {
                        objectChoice[1]++;
                    } else {
                        objectChoice[1] = 0;
                    }
                    if (objectChoice[1] > 12) {
                        scrollOffset = objectChoice[1] - 12;
                    } else {
                        scrollOffset = 0;
                    }
                } else if ((keyPressed == KEY_ACTION) && (displayCodexCategoryAction.entries.length > 0)) {
                    playSfx(SFX_GUI_THUCK);
                    var codexEntrySequence = new Sequence();
                    codexEntrySequence.addAction(procureDisplayMenuCodexEntryAction(
                        displayCodexCategoryAction.entries[objectChoice[1]].id).authorizeMenuPlay());
                    codexEntrySequence.addAction(procureCodeFragmentAction(function () {
                        menuState = MS_CODEX_CATEGORY;
                    }).authorizeMenuPlay());
                    registerObject(GUI_EVENT, codexEntrySequence);
                    if (!displayCodexCategoryAction.entries[objectChoice[1]].read) {
                        displayCodexCategoryAction.entries[objectChoice[1]].read = true;
                        for (e = 0; e < hero.codexEntries.length; e++) {
                            if (hero.codexEntries[e].id == displayCodexCategoryAction.entries[objectChoice[1]].id) {
                                hero.codexEntries[e].read = true;
                            }
                        }
                    }
                }
            }

            var i;
            var lineCount = 0;
            var cursorOffset;
            var xOffset = MENU_SKILLS_AURA_X + 45;
            writeLine(getCategoryNameById(objectChoice[0])[lang], "white", LARGE_FONT, lineCount, xOffset - 25);
            lineCount++;
            if (displayCodexCategoryAction.entries.length > 0) {
                if (scrollOffset > 0) {
                    fc.beginPath();
                    cursorOffset = (frame % 20 < 10) ? 40 : 45;
                    fc.drawImage(CURSOR_UP, xOffset - 45 + MENU_SKILLS_COLUMN_WIDTH / 2,
                        HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + cursorOffset);
                }
                for (i = scrollOffset; (i < displayCodexCategoryAction.entries.length) && (i - scrollOffset < 13); i++) {
                    lineCount++;
                    writeLine(inquireCodex(displayCodexCategoryAction.entries[i].id).title[lang], "white",
                        DEFAULT_FONT, lineCount, xOffset);
                    if (!displayCodexCategoryAction.entries[i].read) {
                        var newMarkOffset = fc.measureText(inquireCodex(displayCodexCategoryAction.entries[i].id).title[lang]).width;
                        fc.drawImage(getResource("imgQuestMark"), xOffset + newMarkOffset + 5,
                            HP_GAUGE_Y + MENU_ROOT_Y_OFFSET - 6 + DEFAULT_LINE_HEIGHT * (lineCount + 1), 4, 12);
                    }
                    if (i == objectChoice[1]) {
                        fc.beginPath();
                        cursorOffset = (frame % 20 < 10) ? 20 : 25;
                        fc.drawImage(CURSOR_RIGHT, xOffset - 45 + cursorOffset,
                            HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 20 + DEFAULT_LINE_HEIGHT * lineCount);
                    }
                }
                if ((i < displayCodexCategoryAction.entries.length)) {
                    fc.beginPath();
                    cursorOffset = (frame % 20 < 10) ? 360 : 355;
                    fc.drawImage(CURSOR_DOWN, xOffset - 45 + MENU_SKILLS_COLUMN_WIDTH / 2,
                        HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + cursorOffset);
                }
            } else {
                lineCount++;
                writeLine(TXT_CODEX_NO_ENTRIES_YET[lang], "white", DEFAULT_FONT, lineCount, xOffset);
            }

            if ((keyPressed == KEY_ESC) && (menuState == MS_CODEX_CATEGORY)) {
                playSfx(SFX_GUI_THUCK);
            }

            return (keyPressed == KEY_ESC) && (menuState == MS_CODEX_CATEGORY);
        }
        return false;
    });
    return displayCodexCategoryAction;
}

function procureDisplayMenuCodexEntryAction(entryId) {
    var displayMenuCodexEntryAction = new Action();
    var scrollTop = getResource("imgScrollTop");
    var scrollBottom = getResource("imgScrollBottom");
    var entry = inquireCodex(entryId);
    displayMenuCodexEntryAction.definePlayFrame(function (frame) {
        function writeLine(line, color, font, lineCount, offset) {
            fc.beginPath();
            fc.fillStyle = color;
            fc.font = font;
            fc.fillText(line, offset, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 12 + DEFAULT_LINE_HEIGHT * (lineCount + 1));
        }

        if ((frame == 0)) {
            menuState = MS_CODEX_ENTRY;
            objectChoice[2] = 0;
        }

        fc.beginPath();
        fc.fillStyle = "black";
        fc.fillRect(MENU_SKILLS_AVAILABLE_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET, INFO_WINDOW_W,
            MENU_ROOT_HEIGHT + 10 + INFO_WINDOW_H);

        var scrollTopHeight = scrollTop.height * INFO_WINDOW_W / scrollTop.width;

        if (frame < 10) {
            fc.drawImage(scrollTop, INFO_WINDOW_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET, INFO_WINDOW_W, scrollTopHeight);
            fc.fillStyle = "#F1ECAD";
            fc.fillRect(INFO_WINDOW_X + 1, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + scrollTopHeight,
                INFO_WINDOW_W - 33, (MENU_ROOT_HEIGHT + 10 + INFO_WINDOW_H - scrollTopHeight * 2) * frame / 10);
            fc.drawImage(scrollBottom, INFO_WINDOW_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + scrollTopHeight
                + (MENU_ROOT_HEIGHT + 10 + INFO_WINDOW_H - scrollTopHeight * 2) * frame / 10, INFO_WINDOW_W, scrollTopHeight);
        } else {
            fc.drawImage(scrollTop, INFO_WINDOW_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET, INFO_WINDOW_W, scrollTopHeight);
            fc.fillStyle = "#F1ECAD";
            fc.fillRect(INFO_WINDOW_X + 1, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + scrollTopHeight,
                INFO_WINDOW_W - 33, MENU_ROOT_HEIGHT + 10 + INFO_WINDOW_H - scrollTopHeight * 2);
            fc.drawImage(scrollBottom, INFO_WINDOW_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + scrollTopHeight
                + MENU_ROOT_HEIGHT + 10 + INFO_WINDOW_H - scrollTopHeight * 2, INFO_WINDOW_W, scrollTopHeight);

            processTutorialMessages(CH00, CH00_TUTORIAL_MENU_CODEX, CH00_TUTORIAL_MENU_CODEX_TXT);

            var textLines = processText(entry.text, INFO_WINDOW_W - 60).textLines;
            var limit = textLines.length - 15;
            if (limit < 0) {
                limit = 0;
            }

            if (menuState == MS_CODEX_ENTRY) {
                if (keyPressed == KEY_UP) {
                    playSfx(SFX_GUI_TINK);
                    if (objectChoice[2] > 0) {
                        objectChoice[2]--;
                    }
                } else if (keyPressed == KEY_DOWN) {
                    playSfx(SFX_GUI_TINK);
                    if (objectChoice[2] < limit) {
                        objectChoice[2]++;
                    }
                }
            }

            if (limit > 0) {
                fc.beginPath();
                fc.strokeStyle = "#D1CC8D";
                fc.lineWidth = 2;
                fc.moveTo(INFO_WINDOW_X + INFO_WINDOW_W - 45,
                    HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + scrollTopHeight);
                fc.lineTo(INFO_WINDOW_X + INFO_WINDOW_W - 45,
                    HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + scrollTopHeight
                        + MENU_ROOT_HEIGHT + 10 + INFO_WINDOW_H - scrollTopHeight * 2);
                fc.stroke();
                var scrollerPosition = HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + scrollTopHeight
                    + (MENU_ROOT_HEIGHT + 10 + INFO_WINDOW_H - scrollTopHeight * 2) * objectChoice[2] / limit;
                fc.beginPath();
                fc.fillStyle = "#B1AC6D";
                fc.arc(INFO_WINDOW_X + INFO_WINDOW_W - 45, scrollerPosition, 5, 0, 2 * Math.PI);
                fc.fill();
            }

            for (var i = 1 + objectChoice[2]; i < 25 + objectChoice[2]; i++) {
                if (i == 1) {
                    fc.textAlign = "center";
                    writeLine(entry.title[lang], TEXT_COLOR_INK, LARGE_FONT, i, MENU_SKILLS_AVAILABLE_X + INFO_WINDOW_W / 2);
                    fc.textAlign = "left";
                }
                if ((i == 2) && (entry.image != null)) {
                    var scale = (DEFAULT_LINE_HEIGHT * 4) / entry.image.height;
                    //if (scale > 1) { scale = 1; }
                    fc.drawImage(entry.image, INFO_WINDOW_X + (INFO_WINDOW_W - entry.image.width * scale) / 2,
                        HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + scrollTopHeight + (i - objectChoice[2] - 1) * DEFAULT_LINE_HEIGHT,
                        entry.image.width * scale, entry.image.height * scale)
                }
                if ((i >= 7) && (textLines[i - 7] != null)) {
                    writeLine(textLines[i - 7], TEXT_COLOR_INK, DEFAULT_FONT, i - objectChoice[2], MENU_SKILLS_AVAILABLE_X + 30);
                }
            }

            if ((keyPressed == KEY_ESC) && (menuState == MS_CODEX_ENTRY)) {
                playSfx(SFX_GUI_THUCK);
            }

            return ((keyPressed == KEY_ACTION) || (keyPressed == KEY_ESC)) && (menuState == MS_CODEX_ENTRY);
        }
        return false;
    });
    return displayMenuCodexEntryAction;
}