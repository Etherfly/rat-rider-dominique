/**
 * Created by Etherfly on 01.02.14.
 *
 * This file contains GUI initialization and escape menu logic.
 */

/* GUI constants and variables */

var HP_GAUGE_X = 18;
var HP_GAUGE_Y = 31;

var MENU_ROOT_Y_OFFSET = 90;

var INFO_WINDOW_X = 320;
var INFO_WINDOW_Y = H - 230;
var INFO_WINDOW_W = W - 600;
var INFO_WINDOW_H = 220;

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

var menuChoice = 0; // selected menu item

var menuState = 0;  // global menu state

// menu states
var MS_NONE = 0;
var MS_OPENING = 1;
var MS_ROOT = 2;

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
        function writeLine(line, lineCount, offset) {
            fc.beginPath();
            fc.fillStyle = "white";
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
            drawTextbox(HP_GAUGE_X - 8, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET, 300 * frame / 10,
                (INFO_WINDOW_Y - HP_GAUGE_Y - MENU_ROOT_Y_OFFSET - 10) * frame / 10);
        } else {
            drawTextbox(HP_GAUGE_X - 8, HP_GAUGE_Y + MENU_ROOT_Y_OFFSET, 300,
                INFO_WINDOW_Y - HP_GAUGE_Y - MENU_ROOT_Y_OFFSET - 10);

            var lineCount = 0;
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

            return (keyPressed == KEY_ESC) && (menuState == MS_ROOT);
        }
        return false;
    });
    return displayMenuRootAction;
}