/**
 * Created by Etherfly on 01.02.14.
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

var MENU_ROOT_Y_OFFSET = 90;
var MENU_ROOT_HEIGHT = INFO_WINDOW_Y - HP_GAUGE_Y - MENU_ROOT_Y_OFFSET - 10;

var MENU_SKILLS_AVAILABLE_X = 320;
var MENU_SKILLS_AURA_X = 680;
var MENU_SKILLS_ACTIVE_X = 1040;
var MENU_SKILLS_COLUMN_WIDTH = 350;

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

var menuChoice = 0;     // selected menu item
var scrollOffset = 0;   // skill or item list scrolling offset
var itemChoice = [];    // menu item choice in the multi-column layouts

var menuState = 0;  // global menu state

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
var MS_ITEMS = 10;

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
        fc.font = DEFAULT_FONT;
        fc.fillText(line, x, y + 10 + DEFAULT_LINE_HEIGHT * (lineCount + 1));
    }

    var lineCount = 0;
    var charLimitPerLine = Math.floor((w - 30) / DEFAULT_CHAR_WIDTH - 1);
    var words = (typeof text === "string") ? text.split(" ") : text[lang].split(" ");
    if ((words.length != 1) || (words[0] != "")) {
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
    }

    return lineCount;
}

function processInfoText(text) {
    processText(text, INFO_WINDOW_X + 30, INFO_WINDOW_Y, INFO_WINDOW_W);
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

/* GUI initialization */

function initializeGui() {
    var imgGuiHpSpGauge = getImageResource("imgGuiHpSpGauge");
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
            if (hero.sp > 0) {
                width = 231 * (hero.sp / hero.attrMaxSp);
                fc.beginPath();
                fc.fillStyle = "#FFFF11";
                fc.fillRect(this.xPos + 59 + shakeXOffset, this.yPos + 32 + shakeYOffset, width, 14);
            }
        }
    });
    registerObject(GUI_COMMON, hpSpGauge);
    var imgGuiAttributeGrowthGauge = getImageResource("imgGuiAttributeGrowthGauge");
    var imgIconAttrAttack = getImageResource("imgIconAttrAttack");
    var imgIconAttrDefense = getImageResource("imgIconAttrDefense");
    var imgIconAttrAgility = getImageResource("imgIconAttrAgility");
    var imgIconAttrReflexes = getImageResource("imgIconAttrReflexes");
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
                    fc.fillStyle = "#f0f040";
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
    var imgKarma = getImageResource("imgKarma");
    var karmaDisplay = new GuiElement(null, 10, H - 55);
    karmaDisplay.defineReflect(function() {
        if (hero != null) {
            drawTextbox(this.xPos, this.yPos, 300, 45);
            fc.beginPath();
            fc.fillStyle = "white";
            fc.font = LARGE_FONT;
            fc.fillText(TXT_KARMA[lang], this.xPos + 15, this.yPos + 29);
            var displayValue = hero.karma.toString();
            var valueOffset = (8 - displayValue.length) * (LARGE_CHAR_WIDTH + 0.2);
            fc.fillText(displayValue, this.xPos + 130 + valueOffset, this.yPos + 29);
            fc.drawImage(imgKarma, this.xPos + 258, this.yPos + 8, 30, 30);
        }
    });
    registerObject(GUI_COMMON, karmaDisplay);
    var imgEnemyHpGauge = getImageResource("imgGuiEnemyHpGauge");
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
                this.xPos - 16 + shakeXOffset, this.yPos - 16 + shakeYOffset);
            fc.fillStyle = "#FF4444";
            fc.fillRect(this.xPos + 59 + shakeXOffset, this.yPos + 2 + shakeYOffset, width, 14);
        }
    });
    registerObject(GUI_COMMON, enemyHpGauge);
    var imgGuiBattleGauges = getImageResource("imgBattleGauges");
    var battleGauges = new GuiElement(null, (W - imgGuiBattleGauges.width) / 2 - 20, 22);
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
                skillChoice--;
                while (hero.skillSet[skillChoice] == null) {
                    if (skillChoice > 0) {
                        skillChoice--;
                    } else {
                        skillChoice = hero.skillSet.length - 1;
                    }
                }
            } else if (keyPressed == KEY_DOWN) {
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
                    writeLine(hero.skillSet[i].name[lang], i < 7 ? "white" : "#f0f040", i, 50);
                }
                if (i == skillChoice) {
                    var artifactData = hero.skillSet[i].getArtifacts(0);
                    for (var j = 0; j < artifactData.length; j++) {
                        artifactData[j].sketch(artifactData[j].position, hero);
                    }

                    fc.beginPath();
                    var cursorOffset = (globalFrame % 20 < 10) ? 330 : 335;
                    fc.drawImage(CURSOR_CHOICE, W - cursorOffset, 69 + 30 * i);

                    if (keyCtrl) {
                        drawInfoWindow();
                        var skillInfo = [
                            hero.skillSet[i].name[LANG_ENG] + " - " + hero.skillSet[i].spCost + " " + TXT_SP[LANG_ENG]
                                + TXT_HOTKEY[LANG_ENG] + ((i + 1) % 10) + "') <br> <br> "
                                + hero.skillSet[i].description[LANG_ENG],
                            hero.skillSet[i].name[LANG_RUS] + " - " + hero.skillSet[i].spCost + " " + TXT_SP[LANG_RUS]
                                + TXT_HOTKEY[LANG_RUS] + ((i + 1) % 10) + "') <br> <br> "
                                + hero.skillSet[i].description[LANG_RUS]
                        ];
                        processInfoText(skillInfo);
                    }
                }
            }
        }
    });
    registerObject(GUI_COMMON, skillSet);
    displayGui = false;
    blackMask = false;
    menuState = MS_NONE;
}

/* ESCAPE MENU LOGIC */

function procureEscapeMenuSequence() {
    var escMenuSequence = new Sequence();
    escMenuSequence.addAction(procureMaskAction().authorizeMenuPlay(), DECORATIONS_NEAR);
    escMenuSequence.addAction(procureDisplayMenuRootAction().authorizeMenuPlay());
    escMenuSequence.addAction(procureUnmaskAction().authorizeMenuPlay(), DECORATIONS_NEAR);
    escMenuSequence.addAction(procureCodeFragmentAction(function () {
        menuState = MS_NONE;
    }).authorizeMenuPlay());
    return escMenuSequence;
}

function procureDisplayMenuRootAction() {
    var displayMenuRootAction = new Action();
    displayMenuRootAction.choices = [
        TXT_MENU_STATS, TXT_MENU_SKILLS, TXT_MENU_ITEMS, TXT_LOAD_GAME, TXT_MENU_QUIT
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
            drawTextbox(HP_GAUGE_X - 8, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET, 300 * frame / 10, MENU_ROOT_HEIGHT * frame / 10);
        } else {
            drawTextbox(HP_GAUGE_X - 8, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET, 300, MENU_ROOT_HEIGHT);
            drawInfoWindow();

            var i;
            var lineCount = 0;
            if (menuState == MS_ROOT) {
                if (keyPressed == KEY_UP) {
                    if (menuChoice > 0) {
                        menuChoice--;
                    } else {
                        menuChoice = displayMenuRootAction.choices.length - 1;
                    }
                } else if (keyPressed == KEY_DOWN) {
                    if (menuChoice < displayMenuRootAction.choices.length - 1) {
                        menuChoice++;
                    } else {
                        menuChoice = 0;
                    }
                } else if (keyPressed == KEY_ACTION) {
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
                            loadGame();
                            break;
                        case 4:
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
                        fc.drawImage(CURSOR_CHOICE, HP_GAUGE_X + cursorOffset, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET
                            + LARGE_LINE_HEIGHT * lineCount);
                    }
                }
            } else {
                for (i = 0; i < displayMenuRootAction.choices.length; i++) {
                    writeLine(displayMenuRootAction.choices[i][lang], lineCount, 45);
                    lineCount++;
                    if ((((i == 0) && (menuState == MS_STATS))
                        || ((i == 1) && (menuState >= MS_SKILLS_BROWSE_1) && (menuState <= MS_SKILLS_EXCHANGE_3))
                        || ((i == 2) && (menuState == MS_ITEMS)))
                        && (frame % 14 > 6)) {
                        fc.beginPath();
                        fc.drawImage(CURSOR_CHOICE, HP_GAUGE_X + 20, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET
                            + LARGE_LINE_HEIGHT * lineCount);
                    }
                }
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
        function writeLine(line, lineCount, offset) {
            fc.beginPath();
            fc.fillStyle = "white";
            fc.font = LARGE_FONT;
            fc.fillText(line, HP_GAUGE_X + offset,
                HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 16 + LARGE_LINE_HEIGHT * (lineCount + 1));
        }

        if ((frame == 0)) {
            menuState = MS_STATS;
            menuChoice = 0;
        }

        if (frame < 10) {
            drawTextbox(MENU_SKILLS_AVAILABLE_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET, (W - HP_GAUGE_X - 320) * frame / 10,
                (INFO_WINDOW_Y - HP_GAUGE_Y - MENU_ROOT_Y_OFFSET - 10) * frame / 10);
        } else {
            drawTextbox(MENU_SKILLS_AVAILABLE_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET, W - HP_GAUGE_X - 320,
                INFO_WINDOW_Y - HP_GAUGE_Y - MENU_ROOT_Y_OFFSET - 10);

            var i;
            var lineCount = 0;

            for (i = 0; i < 0; i++) {
                writeLine(displayMenuStatsAction.choices[i][lang], lineCount, 45);
                lineCount++;
                if (i == menuChoice) {
                    fc.beginPath();
                    var cursorOffset = (frame % 20 < 10) ? 20 : 25;
                    fc.drawImage(CURSOR_CHOICE, HP_GAUGE_X + cursorOffset, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET
                        + LARGE_LINE_HEIGHT * lineCount);
                }
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
            itemChoice[0] = 0;
            itemChoice[1] = 0;
            itemChoice[2] = 0;
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

            function getItemSetByMenuState(ms) {
                if (menuState < MS_SKILLS_EXCHANGE_1) {
                    return menuState - MS_SKILLS_BROWSE_1;
                } else if ((menuState == MS_SKILLS_EXCHANGE_1) || (menuState == MS_SKILLS_EXCHANGE_2)) {
                    return 2;
                } else if (itemChoice[2] > 6) {
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

            var skillInfo;
            var x;
            var i = getItemSetByMenuState(menuState);
            if (keyPressed == KEY_UP) {
                if ((menuState < MS_SKILLS_EXCHANGE_1) || (menuState == MS_SKILLS_EXCHANGE_3)) {
                    itemChoice[i]--;
                    if (itemChoice[i] < 0) {
                        itemChoice[i] = getLengthByColumn(i);
                    }
                    if (i == 0) {
                        if (itemChoice[i] < scrollOffset) {
                            scrollOffset--;
                        } else if ((scrollOffset == 0) && (itemChoice[i] > 12)) {
                            scrollOffset = itemChoice[i] - 12;
                        }
                    }
                } else if (menuState == MS_SKILLS_EXCHANGE_1) {
                    itemChoice[i]--;
                    if (itemChoice[i] < 0) {
                        itemChoice[i] = 6;
                    }
                } else {
                    itemChoice[i]--;
                    if (itemChoice[i] < 7) {
                        itemChoice[i] = 9;
                    }
                }
            } else if (keyPressed == KEY_DOWN) {
                if ((menuState < MS_SKILLS_EXCHANGE_1) || (menuState == MS_SKILLS_EXCHANGE_3)) {
                    itemChoice[i]++;
                    if (itemChoice[i] > getLengthByColumn(i)) {
                        itemChoice[i] = 0;
                    }
                    if (i == 0) {
                        if (itemChoice[i] > 12) {
                            scrollOffset = itemChoice[i] - 12;
                        } else {
                            scrollOffset = 0;
                        }
                    }
                } else if (menuState == MS_SKILLS_EXCHANGE_1) {
                    itemChoice[i]++;
                    if (itemChoice[i] > 6) {
                        itemChoice[i] = 0;
                    }
                } else {
                    itemChoice[i]++;
                    if (itemChoice[i] > 9) {
                        itemChoice[i] = 7;
                    }
                }
            } else if (keyPressed == KEY_RIGHT) {
                if (menuState < MS_SKILLS_EXCHANGE_1) {
                    menuState++;
                    if (menuState > MS_SKILLS_BROWSE_3) {
                        menuState = MS_SKILLS_BROWSE_1;
                    }
                }
            } else if (keyPressed == KEY_LEFT) {
                if (menuState < MS_SKILLS_EXCHANGE_1) {
                    menuState--;
                    if (menuState < MS_SKILLS_BROWSE_1) {
                        menuState = MS_SKILLS_BROWSE_3;
                    }
                }
            } else if (keyPressed == KEY_ACTION) {
                switch (menuState) {
                    case MS_SKILLS_BROWSE_1:
                        menuState = MS_SKILLS_EXCHANGE_1;
                        itemChoice[2] = 2;
                        break;
                    case MS_SKILLS_BROWSE_2:
                        menuState = MS_SKILLS_EXCHANGE_2;
                        itemChoice[2] = 7;
                        break;
                    case MS_SKILLS_BROWSE_3:
                        if (itemChoice[2] >= 2) {   // cannot unequip attack and defend
                            menuState = MS_SKILLS_EXCHANGE_3;
                        }
                        break;
                    case MS_SKILLS_EXCHANGE_1:
                        if (itemChoice[2] >= 2) {   // cannot unequip attack and defend
                            x = hero.availableSkills[itemChoice[0]];
                            hero.availableSkills[itemChoice[0]] = hero.activeSkills[itemChoice[2]];
                            hero.activeSkills[itemChoice[2]] = x;
                            menuState = MS_SKILLS_BROWSE_1;
                            hero.availableSkills = hero.availableSkills.filter(function (x) {return x;});
                        }
                        break;
                    case MS_SKILLS_EXCHANGE_2:
                        x = hero.availableAuraSkills[itemChoice[1]];
                        hero.availableAuraSkills[itemChoice[1]] = hero.activeAuraSkills[itemChoice[2] - 7];
                        hero.activeAuraSkills[itemChoice[2] - 7] = x;
                        menuState = MS_SKILLS_BROWSE_2;
                        hero.availableAuraSkills = hero.availableAuraSkills.filter(function (x) {return x;});
                        break;
                    case MS_SKILLS_EXCHANGE_3:
                        if (itemChoice[2] < 7) {
                            x = hero.availableSkills[itemChoice[0]];
                            hero.availableSkills[itemChoice[0]] = hero.activeSkills[itemChoice[2]];
                            hero.activeSkills[itemChoice[2]] = x;
                            hero.availableSkills = hero.availableSkills.filter(function (x) {return x;});
                        } else {
                            x = hero.availableAuraSkills[itemChoice[1]];
                            hero.availableAuraSkills[itemChoice[1]] = hero.activeAuraSkills[itemChoice[2] - 7];
                            hero.activeAuraSkills[itemChoice[2] - 7] = x;
                            hero.availableAuraSkills = hero.availableAuraSkills.filter(function (x) {return x;});
                        }
                        menuState = MS_SKILLS_BROWSE_3;
                        break;
                }
            } else if (keyPressed == KEY_ESC) {
                if (menuState >= MS_SKILLS_EXCHANGE_1) {
                    menuState -= 3;
                    keyPressed = KEY_NONE;
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
                    writeLine(obtainSkill(hero.availableSkills[i]).name[lang], "white", DEFAULT_FONT, lineCount,
                        MENU_SKILLS_AVAILABLE_X + 45);
                }
                if (i == itemChoice[0]) {
                    if ((menuState == MS_SKILLS_BROWSE_1)
                        || ((menuState == MS_SKILLS_EXCHANGE_3) && (itemChoice[2] < 7))) {
                        fc.beginPath();
                        cursorOffset = (frame % 20 < 10) ? 20 : 25;
                        fc.drawImage(CURSOR_CHOICE, MENU_SKILLS_AVAILABLE_X + cursorOffset,
                            HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 20 + DEFAULT_LINE_HEIGHT * lineCount);
                        if (hero.availableSkills[i] != null) {
                            skillInfo = [
                                obtainSkill(hero.availableSkills[i]).name[LANG_ENG] + " - "
                                    + obtainSkill(hero.availableSkills[i]).spCost + " " + TXT_SP[LANG_ENG]
                                    + " <br> <br> " + obtainSkill(hero.availableSkills[i]).description[LANG_ENG],
                                obtainSkill(hero.availableSkills[i]).name[LANG_RUS] + " - "
                                    + obtainSkill(hero.availableSkills[i]).spCost + " " + TXT_SP[LANG_RUS]
                                    + " <br> <br> " + obtainSkill(hero.availableSkills[i]).description[LANG_RUS]
                            ];
                            processInfoText(skillInfo);
                        }
                    } else if ((menuState == MS_SKILLS_EXCHANGE_1) && (frame % 8 > 3)) {
                        // blinks
                        fc.beginPath();
                        fc.drawImage(CURSOR_CHOICE, MENU_SKILLS_AVAILABLE_X + 20, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET
                            + 20 + DEFAULT_LINE_HEIGHT * lineCount);
                    }
                }
            }
            if ((i < hero.availableSkills.length)) {
                fc.beginPath();
                cursorOffset = (frame % 20 < 10) ? 360 : 355;
                fc.drawImage(CURSOR_NEXT, MENU_SKILLS_AVAILABLE_X + MENU_SKILLS_COLUMN_WIDTH / 2,
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
                    writeLine(obtainSkill(hero.availableAuraSkills[i]).name[lang], "#f0f040", DEFAULT_FONT, lineCount,
                        MENU_SKILLS_AURA_X + 45);
                }
                if (i == itemChoice[1]) {
                    if ((menuState == MS_SKILLS_BROWSE_2)
                        || ((menuState == MS_SKILLS_EXCHANGE_3) && (itemChoice[2] >= 7))) {
                        fc.beginPath();
                        cursorOffset = (frame % 20 < 10) ? 20 : 25;
                        fc.drawImage(CURSOR_CHOICE, MENU_SKILLS_AURA_X + cursorOffset, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET
                            + 20 + DEFAULT_LINE_HEIGHT * lineCount);
                        if (hero.availableAuraSkills[i] != null) {
                            skillInfo = [
                                obtainSkill(hero.availableAuraSkills[i]).name[LANG_ENG] + " - "
                                    + obtainSkill(hero.availableAuraSkills[i]).spCost + " " + TXT_SP[LANG_ENG]
                                    + TXT_FULL_AP_GAUGE_REQ[LANG_ENG] + " <br> <br> "
                                    + obtainSkill(hero.availableAuraSkills[i]).description[LANG_ENG],
                                obtainSkill(hero.availableAuraSkills[i]).name[LANG_RUS] + " - "
                                    + obtainSkill(hero.availableAuraSkills[i]).spCost + " " + TXT_SP[LANG_RUS]
                                    + TXT_FULL_AP_GAUGE_REQ[LANG_RUS] + " <br> <br> "
                                    + obtainSkill(hero.availableAuraSkills[i]).description[LANG_RUS]
                            ];
                            processInfoText(skillInfo);
                        }
                    } else if ((menuState == MS_SKILLS_EXCHANGE_2) && (frame % 8 > 3)) {
                        // blinks
                        fc.beginPath();
                        fc.drawImage(CURSOR_CHOICE, MENU_SKILLS_AURA_X + 20, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET
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
                    writeLine((i + 1).toString() + ": " + obtainSkill(hero.activeSkills[i]).name[lang],
                        (i < 2) ? "gray" : "white", DEFAULT_FONT, lineCount, MENU_SKILLS_ACTIVE_X + 45);
                }
                if (i == itemChoice[2]) {
                    if ((menuState == MS_SKILLS_BROWSE_3) || (menuState == MS_SKILLS_EXCHANGE_1)) {
                        fc.beginPath();
                        cursorOffset = (frame % 20 < 10) ? 20 : 25;
                        fc.drawImage(CURSOR_CHOICE, MENU_SKILLS_ACTIVE_X + cursorOffset,
                            HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 20 + DEFAULT_LINE_HEIGHT * lineCount);
                        if (hero.activeSkills[i] != null) {
                            skillInfo = [
                                obtainSkill(hero.activeSkills[i]).name[LANG_ENG] + " - "
                                    + obtainSkill(hero.activeSkills[i]).spCost + " " + TXT_SP[LANG_ENG]
                                    + " <br> <br> " + obtainSkill(hero.activeSkills[i]).description[LANG_ENG],
                                obtainSkill(hero.activeSkills[i]).name[LANG_RUS] + " - "
                                    + obtainSkill(hero.activeSkills[i]).spCost + " " + TXT_SP[LANG_RUS]
                                    + " <br> <br> " + obtainSkill(hero.activeSkills[i]).description[LANG_RUS]
                            ];
                            processInfoText(skillInfo);
                        }
                    } else if ((menuState == MS_SKILLS_EXCHANGE_3) && (frame % 8 > 3)) {
                        // blinks
                        fc.beginPath();
                        fc.drawImage(CURSOR_CHOICE, MENU_SKILLS_ACTIVE_X + 20, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET
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
                    writeLine(((i + 8) % 10).toString() + ": --------", "#f0f040", DEFAULT_FONT, lineCount,
                        MENU_SKILLS_ACTIVE_X + 45);
                } else {
                    writeLine(((i + 8) % 10).toString() + ": " + obtainSkill(hero.activeAuraSkills[i]).name[lang],
                        "#f0f040", DEFAULT_FONT, lineCount, MENU_SKILLS_ACTIVE_X + 45);
                }
                if (i + 7 == itemChoice[2]) {
                    if ((menuState == MS_SKILLS_BROWSE_3) || (menuState == MS_SKILLS_EXCHANGE_2)) {
                        fc.beginPath();
                        cursorOffset = (frame % 20 < 10) ? 20 : 25;
                        fc.drawImage(CURSOR_CHOICE, MENU_SKILLS_ACTIVE_X + cursorOffset,
                            HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 20 + DEFAULT_LINE_HEIGHT * lineCount);
                        if (hero.activeAuraSkills[i] != null) {
                            skillInfo = [
                                obtainSkill(hero.activeAuraSkills[i]).name[LANG_ENG] + " - "
                                    + obtainSkill(hero.activeAuraSkills[i]).spCost + " " + TXT_SP[LANG_ENG]
                                    + TXT_FULL_AP_GAUGE_REQ[LANG_ENG] + " <br> <br> "
                                    + obtainSkill(hero.activeAuraSkills[i]).description[LANG_ENG],
                                obtainSkill(hero.activeAuraSkills[i]).name[LANG_RUS] + " - "
                                    + obtainSkill(hero.activeAuraSkills[i]).spCost + " " + TXT_SP[LANG_RUS]
                                    + TXT_FULL_AP_GAUGE_REQ[LANG_ENG] + " <br> <br> "
                                    + obtainSkill(hero.activeAuraSkills[i]).description[LANG_RUS]
                            ];
                            processInfoText(skillInfo);
                        }
                    } else if ((menuState == MS_SKILLS_EXCHANGE_3) && (frame % 8 > 3)) {
                        // blinks
                        fc.beginPath();
                        fc.drawImage(CURSOR_CHOICE, MENU_SKILLS_ACTIVE_X + 20, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET
                            + 20 + DEFAULT_LINE_HEIGHT * lineCount);
                    }
                }
            }

            return (keyPressed == KEY_ESC) && (menuState >= MS_SKILLS_BROWSE_1) && (menuState <= MS_SKILLS_BROWSE_3);
        }
        return false;
    });
    return displayMenuSkillsAction;
}

function procureDisplayMenuItemsAction() {
    var displayMenuItemsAction = new Action();
    displayMenuItemsAction.definePlayFrame(function (frame) {
        function writeLine(line, lineCount, offset) {
            fc.beginPath();
            fc.fillStyle = "white";
            fc.font = LARGE_FONT;
            fc.fillText(line, HP_GAUGE_X + offset,
                HP_GAUGE_Y + MENU_ROOT_Y_OFFSET + 16 + LARGE_LINE_HEIGHT * (lineCount + 1));
        }

        if ((frame == 0)) {
            menuState = MS_ITEMS;
            menuChoice = 0;
        }

        if (frame < 10) {
            drawTextbox(MENU_SKILLS_AVAILABLE_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET, (W - HP_GAUGE_X - 320) * frame / 10,
                (INFO_WINDOW_Y - HP_GAUGE_Y - MENU_ROOT_Y_OFFSET - 10) * frame / 10);
        } else {
            drawTextbox(MENU_SKILLS_AVAILABLE_X, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET, W - HP_GAUGE_X - 320,
                INFO_WINDOW_Y - HP_GAUGE_Y - MENU_ROOT_Y_OFFSET - 10);

            var i;
            var lineCount = 0;

            for (i = 0; i < 0; i++) {
                writeLine(displayMenuItemsAction.choices[i][lang], lineCount, 45);
                lineCount++;
                if (i == menuChoice) {
                    fc.beginPath();
                    var cursorOffset = (frame % 20 < 10) ? 20 : 25;
                    fc.drawImage(CURSOR_CHOICE, HP_GAUGE_X + cursorOffset, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET
                        + LARGE_LINE_HEIGHT * lineCount);
                }
            }

            return (keyPressed == KEY_ESC) && (menuState == MS_ITEMS);
        }
        return false;
    });
    return displayMenuItemsAction;
}