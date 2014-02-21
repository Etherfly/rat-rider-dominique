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
var BGL_LEFT = W / 2 - 320;
var BGL_RIGHT = W / 2 + 280;
var BGL_HEIGHT = 30;

var BGL_COLOR = "#C8FFFF";

var CM_EVENT = 0;    // Control mode: event
var CM_FIELD = 1;   // Control mode: field
var CM_BATTLE = 2;  // Control mode: battle

var controlMode = CM_EVENT;

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

var reboundFrame = 0;       // karmic rebound frame counter
var reboundTargetFrame = 0; // karmic rebound current target frame

// karmic rebound period bounds
var KARMIC_REBOUND_PERIOD_LOW = 100;
var KARMIC_REBOUND_PERIOD_RANGE = 300;

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

var ATTR_HP = 0;
var ATTR_SP = 1;
var ATTR_AP = 2;

var SP_RECOVERY_BASIS = 0.05;
var AP_DIMINISHING_BASIS = 0.0002;
var AP_GAIN_FACTOR = 0.6;
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

var eventChoice = 0;

var DEFAULT_FONT = "bold 14pt Courier New";
var DEFAULT_CHAR_WIDTH = 11.4;
var DEFAULT_LINE_HEIGHT = 22;

var LARGE_FONT = "bold 18pt Courier New";
var LARGE_CHAR_WIDTH = 15;
var LARGE_LINE_HEIGHT = 34;

var CURSOR_DOWN;
var CURSOR_RIGHT;
var CURSOR_UP;
var CURSOR_LEFT;

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
    setControlMode(CM_EVENT);
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

function registerImpact(attacker, target, attackPower, evadable, apGain, inflictData) {
    impacts.push({
        attacker: attacker,
        target: target,
        attackPower: attackPower,
        evadable: evadable === undefined ? true : evadable,
        apGain: apGain === undefined ? true : apGain,
        defenseThreshold: inflictData === undefined ? null : inflictData.defenseThreshold,
        statusArtifacts: inflictData === undefined ? null : inflictData.statusArtifacts,
        statusName: inflictData === undefined ? null : inflictData.statusName
    });
}

function handleBattleEnd() {
    battleFrame = null;
    behaviorFluctuation = 0;
    controlMode = CM_EVENT;
    hero.skillSet.length = 0;
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
        x = -imgEnemyHpGauge.width + scale * (imgEnemyHpGauge.width + 18);
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

            for (var i = 0; i < attrIncrease.length; i++) {
                hero.increaseAttribute(i, attrIncrease[i]);
                attrIncrease[i] = 0;
            }
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
        displayGui = false;
        battleEndSequence.addAction(procureDisplayCenteredMessageAction(WW_SMALL, TXT_DOMINIQUE_HAS_FALLEN, true)
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

        var enemyStrengthModifier;
        var enemyAgilityModifier = enemy.attrAgility / hero.attrAgility;
        var enemyReflexesModifier;
        if (!impacts[i].evadable || (Math.random() < impacts[i].target.effEvasion)) { /* EVASION */

            if (impacts[i].attackPower > 0) {
                /*
                 * DAMAGE FORMULA:
                 * DMG = ATTACKER_BASE_ATK
                 *      * (1 + (ATTACKER_BASE_ATK * ATTACKER_EFF_ATK - TARGET_BASE_DEF * TARGET_EFF_DEF) / (80~120))
                 *      * (ATTACK_POWER * ATTACKER_EFF_ATK / TARGET_EFF_DEF) * (0.9~1.1)
                 *
                 * Attacker's base attack serves as the damage basis, attack power and target's effective defense
                 * serve as direct multiplier and divisor. Average multiplier difference is 100, thus, if attacker's
                 * attack is ~100 more than target's defense (taking into account effective values) the damage is
                 * roughly doubled than if those attributes were equal. If target's defense is 100+ points ahead,
                 * effective modifiers included, chances are the attack will deal no damage.
                 */
                var dmg = impacts[i].attacker.attrAttack
                    * (1 + (impacts[i].attacker.attrAttack * impacts[i].attacker.effAttack
                    - impacts[i].target.attrDefense * impacts[i].target.effDefense) / (80 + 40 * Math.random()))
                    * (impacts[i].attackPower * impacts[i].attacker.effAttack / impacts[i].target.effDefense)
                    *  (0.9 + 0.2 * Math.random());
                if (Math.floor(dmg) <= 0) {
                    registerObject(GUI_COMMON, procureHpGaugeTextAction(impacts[i].target, "white", "0"));
                } else {
                    impacts[i].target.expendHp(dmg);
                }

                /* REFLECT */
                if (impacts[i].target.effReflect < 1) {
                    impacts[i].attacker.expendHp(dmg * (1 - impacts[i].target.effReflect));
                }

                /* AURA POINTS GAIN */
                if ((impacts[i].apGain)
                    && ((hero.skillSet[7] != null) || (hero.skillSet[8] != null) || (hero.skillSet[9] != null))) {
                    var apGain = (impacts[i].target == hero) ? dmg / hero.attrMaxHp : dmg / (hero.attrMaxHp * 2);
                    hero.restoreAp(apGain * AP_GAIN_FACTOR);
                }

            }

            /* STATUS EFFECTS */
            if ((impacts[i].defenseThreshold != null) && (impacts[i].statusArtifacts != null)) {
                if (impacts[i].target.effDefense > impacts[i].defenseThreshold) {
                    registerObject(GUI_COMMON, procureStatusTextAction(impacts[i].attacker, "white", TXT_RESISTED));
                } else {
                    impacts[i].target.inflict(impacts[i].statusArtifacts);
                    registerObject(GUI_COMMON, procureStatusTextAction(impacts[i].attacker, "white",
                        [TXT_INFLICTED[LANG_ENG] + impacts[i].statusName[LANG_ENG],
                            TXT_INFLICTED[LANG_RUS] + impacts[i].statusName[LANG_RUS]]));
                }
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
             * Agility is increased by rapid actions, one after another, and evasion.
             * Reflexes are increased by precision actions, like attacking the enemy
             * in a weakpoint or defending right when the enemy attacks, and evasion.
             * The agility gain is also defined in useSkill.
             */
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
        } else {
            registerObject(GUI_COMMON, procureHpGaugeTextAction(impacts[i].target, "white", TXT_MISS));
            if (impacts[i].attacker != hero) {
                enemyReflexesModifier = impacts[i].target.attrReflexes / impacts[i].attacker.attrReflexes;
                attrIncrease[ATTR_AGILITY] += enemyAgilityModifier * AIB_AGILITY;
                attrIncrease[ATTR_REFLEXES] += enemyReflexesModifier * AIB_REFLEXES;
            }
        }
    }
    impacts.length = 0;
}

function performKarmaRebound() {
    var karmaRebounded = Math.floor(Math.abs(hero.karma) * 0.1 + Math.random() * 10);
    hero.addKarma(karmaRebounded);
    var reboundType;
    var statusEffect = null;
    var reboundText;
    if (karmaRebounded <= 10) {
        reboundType = Math.floor(4 * Math.random());
        if (reboundType == 0) {
            hero.expendHp(karmaRebounded * 2);
            reboundText = [
                TXT_KARMA_REBOUND[LANG_ENG] + TXT_KARMA_REBOUND_1[LANG_ENG],
                TXT_KARMA_REBOUND[LANG_RUS] + TXT_KARMA_REBOUND_1[LANG_RUS]
            ];
        } else if (reboundType == 1) {
            hero.expendSp(karmaRebounded * 2);
            reboundText = [
                TXT_KARMA_REBOUND[LANG_ENG] + TXT_KARMA_REBOUND_2[LANG_ENG] + TXT_KARMA_REBOUND_3[LANG_ENG],
                TXT_KARMA_REBOUND[LANG_RUS] + TXT_KARMA_REBOUND_2[LANG_RUS] + TXT_KARMA_REBOUND_3[LANG_RUS]
            ];
        }

    } else if (karmaRebounded <= 50) {
        reboundType = Math.floor(4 * Math.random());
        if (reboundType == 0) {
            statusEffect = acquireWeakStatus(0, 200 * karmaRebounded, 0.7);
        } else if (reboundType == 1) {
            statusEffect = acquireFrailStatus(0, 200 * karmaRebounded, 0.7);
        } else if (reboundType == 2) {
            statusEffect = acquireNumbStatus(0, 200 * karmaRebounded, 0.7);
        } else if (reboundType == 3) {
            statusEffect = acquireCloudedStatus(0, 200 * karmaRebounded, 0.7);
        }
        reboundText = [
            TXT_KARMA_REBOUND[LANG_ENG] + TXT_KARMA_REBOUND_4[LANG_ENG] + statusEffect.statusName[LANG_ENG] + ".",
            TXT_KARMA_REBOUND[LANG_RUS] + TXT_KARMA_REBOUND_4[LANG_RUS] + statusEffect.statusName[LANG_RUS] + "."
        ];
    } else if (karmaRebounded > 50) {
        reboundType = Math.floor(2 * Math.random());
        if (reboundType == 0) {
            statusEffect = acquirePoisonedStatus(0, 70 * karmaRebounded, karmaRebounded);
        } else if (reboundType == 1) {
            statusEffect = acquireExhaustedStatus(0, 70 * karmaRebounded, karmaRebounded);
        }
        reboundText = [
            TXT_KARMA_REBOUND[LANG_ENG] + TXT_KARMA_REBOUND_2[LANG_ENG]
                + statusEffect.statusName[LANG_ENG].toLowerCase() + ".",
            TXT_KARMA_REBOUND[LANG_ENG] + TXT_KARMA_REBOUND_2[LANG_RUS]
                + statusEffect.statusName[LANG_RUS].toLowerCase() + "."
        ];
    }
    if (statusEffect != null) {
        hero.inflict(statusEffect.statusArtifacts);
    }
    registerObject(GUI_COMMON, procureHeroTextAction("white", reboundText));
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

    if (landscape != null) {
        fc.beginPath();
        fc.drawImage(landscape.background, 0, 0);
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
                    if (moving && (menuState == MS_NONE)) {   // ...moves...
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

    if (displayGui && (menuState == MS_NONE) && (controlMode != CM_BATTLE) && (keyPressed == KEY_ESC)) {
        menuState = MS_OPENING;
        registerObject(GUI_EVENT, procureEscapeMenuSequence());
    }

    if (menuState == MS_NONE) {
        if (controlMode == CM_FIELD) {
            hero.restoreSp(SP_RECOVERY_BASIS);
            hero.expendAp(AP_DIMINISHING_BASIS);
            if (hero.karma < 0) {
                if (reboundTargetFrame == 0) {
                    reboundTargetFrame = KARMIC_REBOUND_PERIOD_LOW + Math.random() * (KARMIC_REBOUND_PERIOD_RANGE);
                }
                reboundFrame++;
                if (reboundFrame > reboundTargetFrame) {
                    performKarmaRebound();
                    if (hero.karma < 0) {
                        reboundFrame = 0;
                        reboundTargetFrame = KARMIC_REBOUND_PERIOD_LOW + Math.random() * (KARMIC_REBOUND_PERIOD_RANGE);
                    }
                }
            } else {
                reboundFrame = 0;
                reboundTargetFrame = 0;
            }

            switch (keyPressed) {
                case KEY_UP:
                    hero.moveFarther();
                    break;
                case KEY_DOWN:
                    hero.moveNearer();
                    break;
            }
        } else if (controlMode == CM_BATTLE) {
            if ((hero.hp > 0) && (enemy.hp > 0)) {
                hero.restoreSp(SP_RECOVERY_BASIS * getGlobalBattleGaugeShiftCoefficient());

                hero.progressBattleGauge();
                enemy.progressBattleGauge();
                deliverImpacts();
                enemy.behave(enemy, battleFrame);
                if (keyPressed == KEY_ACTION) {
                    if (keyCtrl) {
                        hero.useItem(itemChoice, 0);
                    } else if (skillChoice < 7) {
                        hero.useSkill(hero.skillSet[skillChoice], 0);
                    } else {
                        hero.useAuraSkill(hero.skillSet[skillChoice], 0);
                    }
                }
                battleFrame++;
            } else {
                handleBattleEnd();
            }
        }
    }

    globalFrame++;
    if (globalFrame >= 100) {
        globalFrame = 0;
    }

    keyPressed = KEY_NONE;

    //window.setTimeout(tick, 20);
}