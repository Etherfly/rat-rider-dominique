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

var DEFAULT_SAVE_KEY = "rrdSavedGame";

var debugMode = false;
var lagFactor = 0;       // stores the time of last full manifestation
var timerNick;

var CM_EVENT = 0;    // Control mode: event
var CM_FIELD = 1;   // Control mode: field
var CM_BATTLE = 2;  // Control mode: battle

var controlMode = CM_EVENT;

var layers = [];    // global object storage

var LANDSCAPE_FAR = 1;
var OBJECTS_FAR_BG = 2;
var OBJECTS_FAR = 3;
var OBJECTS_FAR_HERO = 4;
var OBJECTS_FAR_FRONT = 5;
var LANDSCAPE_MID = 7;
var OBJECTS_MID_BG = 8;
var OBJECTS_MID = 9;
var OBJECTS_MID_HERO = 10;
var OBJECTS_MID_FRONT = 11;
var LANDSCAPE_NEAR = 13;
var OBJECTS_NEAR_BG = 14;
var OBJECTS_NEAR = 15;
var OBJECTS_NEAR_HERO = 16;
var OBJECTS_NEAR_FRONT = 17;
var GUI_COMMON = 19;
var GUI_EVENT = 22;

// path layers
var FAR = 0; var MID = 1; var NEAR = 2;

var CLOUD_HEIGHT = 120;

var reaches = [];               // farthest terrain chunks (corresponding to paths FAR, MID and NEAR)
var upperReaches;               // farthest upper decoration
var moving = true;              // terrain movement
var maneuvering = true;         // movement between paths
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
var KEY_PLUS = 8;
var KEY_MINUS = 9;
var KEY_DIGIT_0 = 10;
var KEY_DEBUG = 20;

var keyPressed = KEY_NONE;
var keyShift = false;
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

var currentSyncCoefficient = 0; // current agility difference coefficient used in syncing

// karmic rebound period bounds
var KARMIC_REBOUND_PERIOD_LOW = 100;
var KARMIC_REBOUND_PERIOD_RANGE = 300;

// characters
var hero = null;
var enemy = null;

var BATTLEGAUGE_SHIFT_BASIS = 3;

var impacts = [];
var heroResponseHandlers = [];
var enemyResponseHandlers = [];

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

var SP_RECOVERY_BASIS = 0.0005;
var AP_DIMINISHING_BASIS = 0.0002;
var AP_GAIN_FACTOR = 0.6;
var PATH_CHANGE_SP_COST_RATIO = 0.25;

var attrIncrease = [];
attrIncrease[ATTR_ATTACK] = 0;      // attack is increased by... attacking and dealing damage
attrIncrease[ATTR_DEFENSE] = 0;     // defense is increased by defending
attrIncrease[ATTR_AGILITY] = 0;     // agility is increased by rapid actions, one after another
attrIncrease[ATTR_REFLEXES] = 0;    // reflexes are increased by precision actions, like attacking the enemy
                                    // in a weakpoint or defending right when the enemy attacks

// skill and item slot lock status
var skillSlotLock = [];
skillSlotLock.length = 10;

var itemSlotLock = [];
itemSlotLock.length = 5;

// afterbattle gains
var itemsLooted = [];
var skillsLearned = [];

// attribute increase bases
var AIB_ATTACK = 0.1;
var AIB_DEFENSE = 0.2;
var AIB_AGILITY = 0.05;
var AIB_REFLEXES = 0.03;

// landmarks
var landscape = null;
var landscapeId = 0;

var landmarksOnLayer = [0, 0, 0];   // number of landmarks on layer
var farthestLandmarks = [];         // farthest landmark position on layer
var singletonIds = [];              // array of singleton landmark ids present on the field

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

// music control

var eventMusic = null;
var specialBattleMusic = null;

var musicFade = [];     // fade in and out volume factors
var musicFadeOut = [];  // fade direction - true if out

var MPS_LANDSCAPE = 0;
var MPS_BATTLE = 1;
var MPS_EVENT = 2;
var MPS_BATTLE_END = 3;

var musicPlayState = 0;

var SFX_GUI_TINK = "sndGuiTink";
var SFX_GUI_THUCK = "sndGuiThuck";
var SFX_GUI_BOROK = "sndGuiBorok";
var SFX_BATTLE_HERO = "sndHeroBattleSfx";
var SFX_BATTLE_ENEMY = "sndEnemyBattleSfx";

var masterVolume = 0.5;

var LANG_ENG = 0;       // English language
var LANG_RUS = 1;       // Русский язык

var lang = LANG_ENG;    // current language

var CASE_NOMINATIVE = 0;
var CASE_ACCUSATIVE = 1;

// global game state storage

var gst = [];

var CH00 = 0;   // prologue

// hero strength scale border values

var HS_BASE = 22500;
var HS_CH00 = 140000;

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

function getResource(id) {
    return document.getElementById(id);
}

function getTextResource(id) {
    var string = document.getElementById(id).innerHTML;
    return string.replace(/\n/g, "").replace(/ +/g, " ").replace(/^ /, "");
}

function getRandomObject(objectSet) {
    return objectSet[Math.floor(Math.random() * objectSet.length)];
}

function initializeChapterData(chapterId) {
    switch (chapterId) {
        case CH00:
            for (var i = 0; i < 19; i++) {
                gst[chapterId][i] = 0;
            }
            break;
        default:
            for (i = 0; i < gst[chapterId].length; i++) {
                gst[chapterId][i] = 0;
            }
    }
}

function resetSlotLock() {
    var i;
    for (i = 0; i < skillSlotLock.length; i++) {
        skillSlotLock[i] = false;
    }
    for (i = 0; i < itemSlotLock.length; i++) {
        itemSlotLock[i] = false;
    }
}

function loadLandscape(id) {
    if (landscape != null) {
        clearObjectType("Landscape");
    }
    landscapeId = id;
    landscape = createLandscape(landscapeId);
    setEventMusic(null);
    setMusicPlayState(MPS_LANDSCAPE);
    setLandscapeMusic();
    singletonIds.length = 0;
    landscape.actualize();
    landscape.resetTerrain();
    registerObject(GUI_EVENT, landscape);
}

function resetGame() {
    layers.length = 23;
    for (var i = 0; i < layers.length; i++) {
        layers[i] = [];
    }
    gst.length = 8;
    for (i = 0; i < gst.length; i++) {
        gst[i] = [];
        initializeChapterData(i);
    }
    for (i = 0; i < 3; i++) {
        musicFade[i] = 0;
        musicFadeOut[i] = true;
    }
    setControlMode(CM_EVENT);
    initializeGui();
    loadLandscape(LSC_TITLE);
    moving = true;
    maneuvering = true;

    setEventMusic(MUS_TITLE_THEME);
    setMusicPlayState(MPS_EVENT);
}

function saveGame() {
    var save = {
        heroAttrAttack: hero.attrAttack,
        heroAttrDefense: hero.attrDefense,
        heroAttrAgility: hero.attrAgility,
        heroAttrReflexes: hero.attrReflexes,
        heroAttrMaxHp: hero.attrMaxHp,
        heroAttrMaxSp: hero.attrMaxSp,
        heroHp: hero.hp,
        heroSp: hero.sp,
        heroAp: hero.ap,
        heroAvailableSkills: hero.availableSkills,
        heroAvailableAuraSkills: hero.availableAuraSkills,
        heroActiveSkills: hero.activeSkills,
        heroActiveAuraSkills: hero.activeAuraSkills,
        heroAvailableItems: hero.availableItems,
        heroActiveItems: hero.activeItems,
        heroCodexEntries: hero.codexEntries,
        heroKarma: hero.karma,

        gameState: gst,
        landscape: landscapeId
    };
    localStorage.setItem(DEFAULT_SAVE_KEY, JSON.stringify(save));
}

function loadGame() {
    resetGame();
    var loadedData = localStorage.getItem(DEFAULT_SAVE_KEY);
    if (loadedData == null) {
        var noSavedGameSequence = new Sequence();
        noSavedGameSequence.addAction(procureDisplayCenteredMessageAction(400, TXT_LOAD_GAME_NO_DATA, true));
        noSavedGameSequence.addAction(procureTitleSequence());
        registerObject(GUI_EVENT, noSavedGameSequence);
    } else {

        var save = JSON.parse(loadedData);
        hero = new Hero();
        hero.attrAttack = save.heroAttrAttack;
        hero.attrDefense = save.heroAttrDefense;
        hero.attrAgility = save.heroAttrAgility;
        hero.attrReflexes = save.heroAttrReflexes;
        hero.attrMaxHp = save.heroAttrMaxHp;
        hero.attrMaxSp = save.heroAttrMaxSp;
        hero.hp = save.heroHp;
        hero.sp = save.heroSp;
        hero.ap = save.heroAp;
        hero.availableSkills = save.heroAvailableSkills != null ? save.heroAvailableSkills : [];
        hero.availableAuraSkills = save.heroAvailableAuraSkills != null ? save.heroAvailableAuraSkills : [];
        hero.activeSkills = save.heroActiveSkills != null ? save.heroActiveSkills : [];
        hero.activeAuraSkills = save.heroActiveAuraSkills != null ? save.heroActiveAuraSkills : [];
        hero.availableItems = save.heroAvailableItems != null ? save.heroAvailableItems : [];
        hero.activeItems = save.heroActiveItems != null ? save.heroActiveItems : [];
        hero.codexEntries = save.heroCodexEntries != null ? save.heroCodexEntries : [];
        hero.karma = save.heroKarma;
        registerObject(OBJECTS_MID, hero);

        gst = save.gameState;

        blackMask = true;
        loadLandscape(save.landscape);

        var loadGameSequence = new Sequence();
        loadGameSequence.addAction(procureCodeFragmentAction(function () {
            setControlMode(CM_FIELD);
        }));
        loadGameSequence.addAction(procureResumeAction());
        loadGameSequence.addAction(procureUnmaskAction());
        loadGameSequence.addAction(procureCodeFragmentAction(function () {
            displayGui = true;
        }));
        registerObject(GUI_EVENT, loadGameSequence);
    }
}

function setControlMode(newControlMode) {
    controlMode = newControlMode;
}

function setMusicPlayState(newMPS) {
    if (musicPlayState != newMPS) {
        if (newMPS != MPS_BATTLE_END) {
            musicFadeOut[musicPlayState] = true;
            musicFadeOut[newMPS] = false;
        } else {
            getResource("sndBattleMusic").currentTime = specialBattleMusic != null
                ? specialBattleMusic.ending : landscape.battleTheme.ending;
        }
        musicPlayState = newMPS;
    }
}

function setLandscapeMusic() {
    getResource("sndLandscapeMusic").src = landscape.mainTheme.src;
    getResource("sndBattleMusic").src = landscape.battleTheme.src;
}

function setBattleMusic(newBattleMusic) {
    if (newBattleMusic != null) {
        getResource("sndBattleMusic").src = newBattleMusic.src;
        specialBattleMusic = newBattleMusic;
    } else {
        getResource("sndBattleMusic").src = landscape.battleTheme.src;
        specialBattleMusic = null;
    }
}

function setEventMusic(newEventMusic) {
    if (newEventMusic != null) {
        getResource("sndEventMusic").src = newEventMusic.src;
        eventMusic = newEventMusic;
    } else {
        eventMusic = null;
    }
}

function playSfx(sfx) {
    if ((sfx == SFX_GUI_TINK) || (sfx == SFX_GUI_THUCK) || (sfx == SFX_GUI_BOROK)) {
        if (!getResource(sfx + "1").paused) {
            sfx += "2";
        } else {
            sfx += "1";
        }
    }
    var sfxElement = getResource(sfx);
    if (sfxElement.volume != masterVolume) {
        sfxElement.volume = masterVolume;
    }
    if (sfxElement.paused) {
        sfxElement.play();
        sfxElement.currentTime = 0;
    }
}

function playBattleSfx(character, src) {
    var sfxElement = character == hero ? getResource(SFX_BATTLE_HERO) : getResource(SFX_BATTLE_ENEMY);
    if (sfxElement.volume != masterVolume) {
        sfxElement.volume = masterVolume;
    }
    sfxElement.src = src;
    sfxElement.play();
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
        case 107:
            keyPressed = KEY_PLUS;
            break;
        case 109:
            keyPressed = KEY_MINUS;
            break;
        case 192:
            keyPressed = KEY_LANG;
            break;
        case 220:
            keyPressed = KEY_DEBUG;
            break;
        default:
            if (event.keyCode >= 48 && event.keyCode <= 57) {
                keyPressed = KEY_DIGIT_0 + event.keyCode - 48;
            } else {
                keyPressed = KEY_NONE;
            }
    }
    keyShift = event.shiftKey;
    keyCtrl = event.ctrlKey;
};

document.onkeyup = function (event) {
    if (event.keyCode == 16) {
        keyShift = false;
    } else if (event.keyCode == 17) {
        keyCtrl = false;
    }
};

function attributeIdToName(attribute, wordCase) {
    if (wordCase == CASE_ACCUSATIVE) {
        switch (attribute) {
            case ATTR_ATTACK:
                return ["Attack", "Атаку"];
            case ATTR_DEFENSE:
                return ["Defense", "Защиту"];
            case ATTR_AGILITY:
                return ["Agility", "Ловкость"];
            case ATTR_REFLEXES:
                return ["Reflexes", "Реакцию"];
            default:
                return null;
        }
    } else {
        switch (attribute) {
            case ATTR_ATTACK:
                return ["Attack", "Атака"];
            case ATTR_DEFENSE:
                return ["Defense", "Защита"];
            case ATTR_AGILITY:
                return ["Agility", "Ловкость"];
            case ATTR_REFLEXES:
                return ["Reflexes", "Реакция"];
            default:
                return null;
        }
    }
}

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

function pathToObjectBackgroundLayer(path) {
    switch (path) {
        case FAR:
            return OBJECTS_FAR_BG;
        case MID:
            return OBJECTS_MID_BG;
        case NEAR:
            return OBJECTS_NEAR_BG;
        default:
            return OBJECTS_NEAR_BG;
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

function pathToObjectHeroLayer(path) {
    switch (path) {
        case FAR:
            return OBJECTS_FAR_HERO;
        case MID:
            return OBJECTS_MID_HERO;
        case NEAR:
            return OBJECTS_NEAR_HERO;
        default:
            return OBJECTS_NEAR_HERO;
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

function getBasisHeight(path) {
    switch (path) {
        case FAR:
            return H - 300;
        case MID:
            return H - 175;
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
    return (2 + path) / 3;
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
    return Math.sqrt(enemy.attrReflexes / hero.attrReflexes) * enemy.effReflexes / hero.effReflexes;
}

function getAgilityDifferenceCoefficient() {
    var adc = Math.sqrt(enemy.attrAgility / hero.attrAgility) * enemy.effAgility / hero.effAgility;
    if (adc < 1) {
        if (keyShift) {
            if (currentSyncCoefficient * adc > 1) {
                currentSyncCoefficient -= 0.005 * currentSyncCoefficient;
            } else {
                currentSyncCoefficient += 0.005 * currentSyncCoefficient;
            }
            if (Math.abs(currentSyncCoefficient * adc - 1) <= 0.01) { currentSyncCoefficient = 1 / adc; }
        }
    }
    if (!keyShift) {
        if (currentSyncCoefficient > 1) {
            currentSyncCoefficient -= 0.005 * currentSyncCoefficient;
        } else {
            currentSyncCoefficient += 0.005 * currentSyncCoefficient;
        }
        if (Math.abs(currentSyncCoefficient - 1) <= 0.01) { currentSyncCoefficient = 1; }
    }
    return adc * currentSyncCoefficient;
}

function generateSurface(path, color, radiusBase) {
    if (radiusBase === undefined) {
        radiusBase = 120;
    }
    var newRadius = Math.floor(Math.random() * radiusBase) + radiusBase;
    var offset = reaches[path].radius + Math.floor(Math.random() * 100);
    if (newRadius > 2 * reaches[path].radius) {
        offset += newRadius - 2 * reaches[path].radius;
    }
    var terrain = new Terrain(path, color,
        reaches[path].position + offset, newRadius);
    reaches[path] = terrain;
    return terrain;
}

function decorateReaches(path, layerOffset, density, scaleModifier, offset, imageSet) {
    var decorationCount = Math.floor(Math.random() * density);
    for (var i = 0; i < decorationCount; i++) {
        var image = imageSet[Math.floor(Math.random() * imageSet.length)];
        var scale =  (getPathScale(path) + (Math.random() * 0.6)) * scaleModifier;
        var position = Math.floor(Math.random() * reaches[path].radius * 2)
            + reaches[path].position - reaches[path].radius;
        var decorationOffset = (Math.floor(Math.random() * (offset / 5)) + image.height + offset);

        var newDecoration = new Decoration(image, scale, path, decorationOffset, position);
        registerObject(pathToObjectFrontLayer(path) + layerOffset, newDecoration);
    }
}

function registerImpact(attacker, target, attackPower, evadable, apGain, inflictData, impactAnimationData) {
    impacts.push({
        attacker: attacker,
        target: target,
        attackPower: attackPower,
        evadable: evadable == undefined ? true : evadable,
        apGain: apGain == undefined ? true : apGain,
        defenseThreshold: inflictData == undefined ? null : inflictData.defenseThreshold,
        statusArtifacts: inflictData == undefined ? null : inflictData.statusArtifacts,
        statusName: inflictData == undefined ? null : inflictData.statusName,
        impactAnimationData: impactAnimationData == undefined
            ?
        {
            animation: [getResource("imgEffectHit1-1"), getResource("imgEffectHit1-2"), getResource("imgEffectHit1-3")],
            sfxSrc: "sound/sfx/hit.ogg",
            framesPerImage: 3,
            width: 35,
            height: 35
        }
            : impactAnimationData
    });
}

function handleBattleEnd() {
    battleFrame = null;
    behaviorFluctuation = 0;
    controlMode = CM_EVENT;
    hero.skillSet.length = 0;
    hero.battleGaugeArtifacts.length = 0;
    enemy.battleGaugeArtifacts.length = 0;
    setMusicPlayState(MPS_BATTLE_END);
    var battleGuiDisappearAction = new Action();
    battleGuiDisappearAction.definePlayFrame(function (frame) {
        var imgGuiBattleGauges = getResource("imgBattleGauges");
        var reverseFrame = (22 + imgGuiBattleGauges.height) / 8 - frame;
        var x = (W - imgGuiBattleGauges.width) / 2;
        var y = reverseFrame * 8 - imgGuiBattleGauges.height;
        fc.beginPath();
        fc.drawImage(imgGuiBattleGauges, x, y);

        var scale = (reverseFrame * 16) >= (22 + imgGuiBattleGauges.height)
            ? 1 : (reverseFrame * 16) / (22 + imgGuiBattleGauges.height);

        var imgEnemyHpGauge = getResource("imgGuiEnemyHpGauge");
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

        var i;
        var itemMessage = ["", ""];
        if (itemsLooted.length > 0) {
            var itemListEng = "";
            var itemListRus = "";
            for (i = 0; i < itemsLooted.length; i++) {
                itemListEng += obtainItem(itemsLooted[i].id).name[LANG_ENG]
                    + (itemsLooted[i].charges > 1 ? " x" + itemsLooted[i].charges : "");
                itemListRus += obtainItem(itemsLooted[i].id).name[LANG_RUS]
                    + (itemsLooted[i].charges > 1 ? " x" + itemsLooted[i].charges : "");
                if (i < itemsLooted.length - 1) {
                    itemListEng += ", ";
                    itemListRus += ", ";
                }
            }
            itemMessage = [TXT_BATTLE_RESULTS_5[LANG_ENG] + itemListEng, TXT_BATTLE_RESULTS_5[LANG_RUS] + itemListRus];
        }

        skillsLearned = skillsLearned.filter(function (skill) { return !hero.hasSkill(skill); });
        var skillMessage = ["", ""];
        if (skillsLearned.length > 0) {
            var skillListEng = "";
            var skillListRus = "";
            for (i = 0; i < skillsLearned.length; i++) {
                skillListEng += gainSkill(skillsLearned[i]).name[LANG_ENG];
                skillListRus += gainSkill(skillsLearned[i]).name[LANG_RUS];
                if (i < skillsLearned.length - 1) {
                    skillListEng += ", ";
                    skillListRus += ", ";
                }
            }
            skillMessage = [TXT_BATTLE_RESULTS_6[LANG_ENG] + skillListEng, TXT_BATTLE_RESULTS_6[LANG_RUS] + skillListRus];
        }
        var battleResultsMessage = [
            TXT_BATTLE_RESULTS_1[LANG_ENG] + Math.floor(attrIncrease[ATTR_ATTACK] * 100) + "%"
                + TXT_BATTLE_RESULTS_2[LANG_ENG] + Math.floor(attrIncrease[ATTR_DEFENSE] * 100) + "%"
                + TXT_BATTLE_RESULTS_3[LANG_ENG] + Math.floor(attrIncrease[ATTR_AGILITY] * 100) + "%"
                + TXT_BATTLE_RESULTS_4[LANG_ENG] + Math.floor(attrIncrease[ATTR_REFLEXES] * 100) + "%"
                + " <br> <br> " + TXT_KARMA[LANG_ENG] + " +" + karmaGained + itemMessage[LANG_ENG] + skillMessage[LANG_ENG],
            TXT_BATTLE_RESULTS_1[LANG_RUS] + Math.floor(attrIncrease[ATTR_ATTACK] * 100) + "%"
                + TXT_BATTLE_RESULTS_2[LANG_RUS] + Math.floor(attrIncrease[ATTR_DEFENSE] * 100) + "%"
                + TXT_BATTLE_RESULTS_3[LANG_RUS] + Math.floor(attrIncrease[ATTR_AGILITY] * 100) + "%"
                + TXT_BATTLE_RESULTS_4[LANG_RUS] + Math.floor(attrIncrease[ATTR_REFLEXES] * 100) + "%"
                + " <br> <br> " + TXT_KARMA[LANG_RUS] + " +" + karmaGained + itemMessage[LANG_RUS] + skillMessage[LANG_RUS]
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

            var levelingSkillList = getLevelingSkills();
            if (levelingSkillList.length > 0) {
                battleEndSequence.addAction(procureDisplayCenteredMessageAction(WW_SMALL, TXT_BATTLE_RESULTS_SKILLS, true));
                for (i = 0; i < levelingSkillList.length; i++) {
                    var levelingSkillId = levelingSkillList[i];
                    battleEndSequence.addAction(procureCodeFragmentAction(function (skillId) {
                        hero.gainSkill(skillId);
                    }, levelingSkillId));
                }
            }
            battleEndSequence.addAction(procureCodeFragmentAction(function () {
                if (enemy.codexEntry != null) {
                    hero.obtainCodexEntry(enemy.codexEntry);
                }
            }));
            if (eventBattleEndSequence != null) {
                battleEndSequence.addAction(procureCodeFragmentAction(function () {
                    registerObject(GUI_EVENT, eventBattleEndSequence);
                }));
            } else {
                battleEndSequence.addAction(procureResumeAction());
            }
        }));
        for (i = 0; i < itemsLooted.length; i++) {
            var itemRecord = itemsLooted[i];
            battleEndSequence.addAction(procureCodeFragmentAction(function (itemRecord) {
                hero.obtainItem(itemRecord.id, itemRecord.charges);
            }, itemRecord));
        }
        for (i = 0; i < skillsLearned.length; i++) {
            var skillId = skillsLearned[i];
            battleEndSequence.addAction(procureCodeFragmentAction(function (skillId) {
                hero.gainSkill(skillId);
            }, skillId));
        }
        battleEndSequence.addAction(procureCodeFragmentAction(function () {
            itemsLooted.length = 0;
            skillsLearned.length = 0;
        }));
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
                * (0.9 + 0.2 * Math.random());

            var j;
            if (impacts[i].target == hero) {
                for (j = 0; j < heroResponseHandlers.length; j++) {
                    if (!(heroResponseHandlers[j] === undefined)) {
                        dmg = heroResponseHandlers[j](dmg);
                    }
                }
            } else {
                for (j = 0; j < enemyResponseHandlers.length; j++) {
                    if (!(enemyResponseHandlers[j] === undefined)) {
                        dmg = enemyResponseHandlers[j](dmg);
                    }
                }
            }

            if (impacts[i].attackPower > 0) {

                if (Math.floor(dmg) <= 0) {
                    registerObject(GUI_COMMON, procureHpGaugeTextAction(impacts[i].target, TEXT_COLOR_INK, "0"));
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
                    registerObject(GUI_COMMON, procureStatusTextAction(impacts[i].attacker, TEXT_COLOR_INK, TXT_RESISTED));
                } else {
                    impacts[i].target.inflict(impacts[i].statusArtifacts);
                    registerObject(GUI_COMMON, procureStatusTextAction(impacts[i].attacker, TEXT_COLOR_INK,
                        [TXT_INFLICTED[LANG_ENG] + impacts[i].statusName[LANG_ENG],
                            TXT_INFLICTED[LANG_RUS] + impacts[i].statusName[LANG_RUS]]));
                }
            }

            playBattleSfx(impacts[i].attacker, impacts[i].impactAnimationData.sfxSrc);
            registerObject(pathToObjectFrontLayer(impacts[i].target.path),
                impacts[i].target.getEffectAction(
                    impacts[i].impactAnimationData.animation,
                    impacts[i].impactAnimationData.framesPerImage,
                    impacts[i].impactAnimationData.width,
                    impacts[i].impactAnimationData.height));

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
            playBattleSfx(impacts[i].attacker, "sound/sfx/miss.ogg");
            registerObject(GUI_COMMON, procureHpGaugeTextAction(impacts[i].target, TEXT_COLOR_INK, TXT_MISS));
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
        reboundType = Math.floor(2 * Math.random());
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
            statusEffect = acquireWeakStatus(0, 400 * karmaRebounded, 0.7);
        } else if (reboundType == 1) {
            statusEffect = acquireFrailStatus(0, 400 * karmaRebounded, 0.7);
        } else if (reboundType == 2) {
            statusEffect = acquireNumbStatus(0, 400 * karmaRebounded, 0.7);
        } else if (reboundType == 3) {
            statusEffect = acquireCloudedStatus(0, 400 * karmaRebounded, 0.7);
        }
        reboundText = [
            TXT_KARMA_REBOUND[LANG_ENG] + TXT_KARMA_REBOUND_4[LANG_ENG] + statusEffect.statusName[LANG_ENG] + ".",
            TXT_KARMA_REBOUND[LANG_RUS] + TXT_KARMA_REBOUND_4[LANG_RUS] + statusEffect.statusName[LANG_RUS] + "."
        ];
    } else if (karmaRebounded > 50) {
        reboundType = Math.floor(2 * Math.random());
        if (reboundType == 0) {
            statusEffect = acquirePoisonedStatus(0, 70 * karmaRebounded, karmaRebounded * 2);
        } else if (reboundType == 1) {
            statusEffect = acquireExhaustedStatus(0, 70 * karmaRebounded, karmaRebounded * 2);
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
    registerObject(GUI_COMMON, procureHeroTextAction(TEXT_COLOR_RED, reboundText));
}

function manageMusic() {
    var lscMusicElement = getResource("sndLandscapeMusic");
    var btlMusicElement = getResource("sndBattleMusic");
    var evtMusicElement = getResource("sndEventMusic");

    switch (musicPlayState) {
        case MPS_LANDSCAPE:
            musicFadeOut[MPS_LANDSCAPE] = false;
            musicFadeOut[MPS_EVENT] = true;
            if (lscMusicElement.paused) {
                lscMusicElement.play();
            }
            if (lscMusicElement.currentTime > landscape.mainTheme.loopEnd) {
                lscMusicElement.currentTime = landscape.mainTheme.loopStart;
            }
            break;
        case MPS_BATTLE:
            musicFadeOut[MPS_LANDSCAPE] = true;
            musicFadeOut[MPS_BATTLE] = !musicFadeOut[MPS_EVENT];
            var battleTheme = specialBattleMusic != null ? specialBattleMusic : landscape.battleTheme;
            if (btlMusicElement.paused) {
                btlMusicElement.play();
            }
            if (btlMusicElement.currentTime > battleTheme.loopEnd) {
                btlMusicElement.currentTime = battleTheme.loopStart;
            }
            break;
        case MPS_EVENT:
            musicFadeOut[MPS_LANDSCAPE] = true;
            musicFadeOut[MPS_BATTLE] = true;
            musicFadeOut[MPS_EVENT] = false;
            if (evtMusicElement.paused) {
                evtMusicElement.play();
            }
            if (evtMusicElement.currentTime > eventMusic.loopEnd) {
                evtMusicElement.currentTime = eventMusic.loopStart;
            }
            break;
        case MPS_BATTLE_END:
            if (btlMusicElement.ended) {
                setBattleMusic(null);
                if (eventMusic == null) {
                    musicFade[MPS_LANDSCAPE] = 0;
                    musicPlayState = MPS_LANDSCAPE;
                } else {
                    musicFade[MPS_EVENT] = 0;
                    musicPlayState = MPS_EVENT;
                }
            }
            break;
    }

    for (var i = 0; i < 3; i++) {
        if (musicFadeOut[i]) {
            if (musicFade[i] > 0) {
                musicFade[i] -= 0.01;
            }
            if (musicFade[i] < 0) {
                musicFade[i] = 0;
            }
        } else {
            if (musicFade[i] < 1) {
                musicFade[i] += 0.01;
            }
            if (musicFade[i] > 1) {
                musicFade[i] = 1;
            }
        }
    }

    lscMusicElement.volume = musicFade[MPS_LANDSCAPE] * masterVolume;
    btlMusicElement.volume = musicFade[MPS_BATTLE] * masterVolume;
    evtMusicElement.volume = musicFade[MPS_EVENT] * masterVolume;
}

function tick() {
    if (keyPressed == KEY_DEBUG) {
        debugMode = !debugMode;
    }

    if (!debugMode) { window.setTimeout(tick, 20); }

    fc.clearRect(0, 0, W, H);

    timerNick = Date.now();

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
                        var wishfulLayer = pathToObjectHeroLayer(object.path);
                        if (i != wishfulLayer) {
                            registerObject(wishfulLayer, hero);
                            delete layers[i][j];
                        }
                    }

                    // check whether hero comes into contact with anything
                    if (object.type == "Landmark") {
                        if ((object.path == hero.path) && (!object.finished)
                            && (Math.abs(object.position - hero.position) < collisionDistance)
                            && (Math.abs(getOptimalHeight(object.path, object.position) - hero.height)
                            < collisionDistance * 2))
                        {
                            object.finished = true;
                            object.trigger();
                        }
                    }
                }
            }
        }

        if (landscape != null) {
            if (i == LANDSCAPE_FAR) {
                fc.beginPath();
                fc.fillStyle = landscape.terrainColorFar;
                fc.fillRect(0, getBasisHeight(FAR), W, H);
            } else if (i == LANDSCAPE_MID) {
                fc.beginPath();
                fc.fillStyle = landscape.terrainColorMid;
                fc.fillRect(0, getBasisHeight(MID), W, H);
            } else if (i == LANDSCAPE_NEAR) {
                fc.beginPath();
                fc.fillStyle = landscape.terrainColorNear;
                fc.fillRect(0, getBasisHeight(NEAR), W, H);
            }
        }
    }

    if (displayGui && (menuState == MS_NONE) && (controlMode != CM_BATTLE) && (keyPressed == KEY_ESC)) {
        playSfx(SFX_GUI_THUCK);
        menuState = MS_OPENING;
        registerObject(GUI_EVENT, procureEscapeMenuSequence());
    }

    if (menuState == MS_NONE) {
        if (controlMode == CM_FIELD) {
            hero.restoreSp(hero.attrMaxSp * SP_RECOVERY_BASIS);
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

            if (maneuvering) {
                switch (keyPressed) {
                    case KEY_UP:
                        hero.moveFarther();
                        break;
                    case KEY_DOWN:
                        hero.moveNearer();
                        break;
                }
            }
        } else if (controlMode == CM_BATTLE) {
            if ((hero.hp > 0) && (enemy.hp > 0)) {
                hero.restoreSp(hero.attrMaxSp * SP_RECOVERY_BASIS * getGlobalBattleGaugeShiftCoefficient());

                resetSlotLock();
                hero.progressBattleGauge();
                enemy.progressBattleGauge();
                deliverImpacts();
                enemy.behave(enemy, battleFrame);
                if (keyPressed == KEY_ACTION) {
                    if (keyCtrl) {
                        if (!itemSlotLock[itemChoice]) {
                            hero.useItem(itemChoice, 0);
                        } else {
                            playSfx(SFX_GUI_BOROK);
                        }
                    } else if (!skillSlotLock[skillChoice]) {
                        if (skillChoice < 7) {
                            hero.useSkill(hero.skillSet[skillChoice], 0);
                        } else {
                            hero.useAuraSkill(hero.skillSet[skillChoice], 0);
                        }
                    } else {
                        playSfx(SFX_GUI_BOROK);
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

    if ((keyPressed == KEY_PLUS) && (masterVolume < 1)) {
        masterVolume += 0.05;
        if (masterVolume > 1) {
            masterVolume = 1;
        }
    } else if ((keyPressed == KEY_MINUS) && (masterVolume > 0)) {
        masterVolume -= 0.05;
        if (masterVolume < 0) {
            masterVolume = 0;
        }
    }

    keyPressed = KEY_NONE;

    manageMusic();

    lagFactor = (Date.now() - timerNick) / 20;
    if (lagFactor > 1) {
        console.log("Lagging with lag factor of " + lagFactor + "!");
    }

    if (debugMode) { window.setTimeout(tick, 20); }
}