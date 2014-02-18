/**
 * Created by Etherfly on 01.02.14.
 *
 * This file contains common objects pregenerations.
 */

/* LANDSCAPES */

function createTitleLandscape() {
    var titleLandscape = new Landscape(getImageResource("imgDecGrassBackground"), "#007700", "#009900", "#00AA00", 600);
    titleLandscape.defineGenerateTerrain(function (path) {
        var color = this.pathToColor(path);
        var terrain = generateSurface(path, color);
        registerObject(pathToLandscapeLayer(path), terrain);

        var patchSet = [];
        for (var i = 1; i < 3; i++) {
            patchSet.push(getImageResource("imgDecGrassPatch" + i));
        }
        patchSet.push(getImageResource("imgDecGrassFlower1"));
        decorateReaches(path, -3, 4, 0.6, 50, patchSet);

        var shrubSet = [];
        for (i = 1; i < 3; i++) {
            shrubSet.push(getImageResource("imgDecGrassShrub" + i));
        }
        decorateReaches(path, 0, 2.5, 0.5, 90, shrubSet);

        var treeSet = [];
        for (i = 1; i < 5; i++) {
            treeSet.push(getImageResource("imgDecGrassTree" + i));
        }
        decorateReaches(path, 0, 2, 1, 10, treeSet);
    });
    return titleLandscape;
}

/* SEQUENCES */

function procureTitleSequence() {
    var titleDisplay = new Sequence();
    var logoAppearAction = new Action();
    var titleDisplayAction = new Action();
    var imgResLogo = getImageResource("imgResLogo");
    logoAppearAction.definePlayFrame(function (frame) {
        fc.beginPath();
        fc.drawImage(imgResLogo, (W - imgResLogo.width / 2) / 2, -imgResLogo.height / 2 + frame * 4, 700, 471);
        return frame * 4 > imgResLogo.height / 2 + 10;
    });
    titleDisplayAction.definePlayFrame(function (frame) {
        fc.beginPath();
        fc.drawImage(imgResLogo, (W - imgResLogo.width / 2) / 2, 10, 700, 471);
        if (frame % 50 < 25) {
            fc.beginPath();
            fc.fillStyle = "white";
            fc.font = "bold 24pt Courier New";
            fc.fillText(TXT_PRESS_START[lang], (W - 375) / 2, 110 + imgResLogo.height / 2);
        }
        if (keyPressed == KEY_ACTION) {
            var mainMenuSequence = new Sequence();
            mainMenuSequence.addAction(procureDisplayCenteredMessageAction(300, "", false)
                .addChoice(TXT_NEW_GAME).addChoice(TXT_LOAD_GAME).addChoice(TXT_ENDLESS_MODE, function () {return false;}));
            mainMenuSequence.addAction(procureCodeFragmentAction(function () {
                switch (eventChoice) {
                    case 0:
                        registerObject(GUI_EVENT, procureStartPrologueSequence());
                        break;
                    default:
                        loadGame();
                }
            }));
            registerObject(GUI_EVENT, mainMenuSequence);
            return true;
        } else {
            return false;
        }
    });
    titleDisplay.addAction(logoAppearAction);
    titleDisplay.addAction(titleDisplayAction);
    return titleDisplay;
}

function procureAuraSkillSequence(character, auraImage, skillName) {
    var auraSkillSequence = new Sequence();
    auraSkillSequence.addAction(procureStopAction());
    var auraAnimationAction = new Action();
    var seed = Math.random() * 1000;
    auraAnimationAction.definePlayFrame(function (frame) {
        if (frame == 1) {
            registerObject(GUI_COMMON, procureGuiEffectAction(GFX_SCREEN_FLASH, "#FFFFFF", null));
        }
        var auraImageScale = (AURA_ANIMATION_H - 40) / auraImage.height;
        fc.beginPath();
        fc.fillStyle = "#3060E0";
        fc.fillRect(0, AURA_ANIMATION_Y, W, AURA_ANIMATION_H);
        setSeed(seed);
        var tailsLimit = 130 + Math.floor(random() * 20);
        for (var i = 0; i < tailsLimit; i++) {
            var x = random() * W * 5 - frame * 50;
            var y = AURA_ANIMATION_Y + random() * AURA_ANIMATION_H;
            var length = 100 + Math.floor(random() * 20);
            fc.beginPath();
            fc.strokeStyle = "#FFFFFF";
            fc.lineWidth = 3;
            fc.moveTo(x, y);
            fc.lineTo(x + length, y);
            fc.stroke();
        }
        fc.beginPath();
        if (frame < 25) {
            fc.drawImage(auraImage, ((25 - frame) / 25) * (-auraImage.width * auraImageScale), AURA_ANIMATION_Y + 40,
                auraImage.width * auraImageScale, auraImage.height * auraImageScale);
        } else {
            fc.drawImage(auraImage, 0, AURA_ANIMATION_Y + 40,
                auraImage.width * auraImageScale, auraImage.height * auraImageScale);
        }

        var lineLength = skillName[lang].length * LARGE_CHAR_WIDTH + 25;
        drawTextbox((W - lineLength) / 2, AURA_ANIMATION_Y + 20, lineLength, 12 + LARGE_LINE_HEIGHT);
        fc.beginPath();
        fc.textAlign = "center";
        fc.fillStyle = TEXT_COLOR_GOLD;
        fc.font = LARGE_FONT;
        fc.fillText(skillName[lang], W / 2, AURA_ANIMATION_Y + 20 + LARGE_LINE_HEIGHT - 5);
        fc.textAlign = "left";

        if (frame >= 100) {
            registerObject(GUI_COMMON, procureGuiEffectAction(GFX_SCREEN_FLASH, "#FFFFFF", null));
            return true;
        } else {
            return false;
        }
    });
    auraSkillSequence.addAction(auraAnimationAction);
    auraSkillSequence.addAction(procureResumeAction());
    return auraSkillSequence;
}

/* ACTIONS */

function procureCodeFragmentAction(func) {
    var fragmentAction = new Action();
    fragmentAction.definePlayFrame(function (frame) {
        func();
        return true;
    });
    return fragmentAction;
}

function procureMaskAction() {
    var maskAction = new Action();
    maskAction.definePlayFrame(function (frame) {
        fc.beginPath();
        fc.fillStyle = "#000000";
        if (frame < 10) {
            var width = W * (frame / 10);
            fc.fillRect(W - width, 0, width, H);
            return false;
        } else {
            fc.fillRect(0, 0, W, H);
            blackMask = true;
            return true;
        }
    });
    return maskAction;
}

function procureUnmaskAction() {
    var unmaskAction = new Action();
    unmaskAction.definePlayFrame(function (frame) {
        blackMask = false;
        if (frame < 10) {
            fc.beginPath();
            fc.fillStyle = "#000000";
            var width = W * (frame / 10);
            fc.fillRect(0, 0, W - width, H);
            return false;
        } else {
            return true;
        }
    });
    return unmaskAction;
}

function procureDisplayFreeTextAction(xPos, yPos, width, text, displayCursor) {
    var displayFreeTextAction = new Action();
    displayFreeTextAction.definePlayFrame(function (frame) {
        function writeLine(line, lineCount) {
            fc.beginPath();
            fc.fillStyle = "white";
            fc.font = DEFAULT_FONT;
            fc.fillText(line, xPos + 30, yPos + DEFAULT_LINE_HEIGHT * (lineCount + 1));
        }

        var translatedText = (typeof text === "string") ? text : text[lang];
        var printedText = frame * 3 >= translatedText.length ? translatedText : translatedText.substr(0, frame * 3);
        var lineCount = processText(printedText, xPos + 30, yPos, width);

        if (displayCursor && (frame * 3 >= text.length)) {
            fc.beginPath();
            if (frame % 20 < 10) {
                fc.drawImage(CURSOR_DOWN, xPos + width / 2 - CURSOR_DOWN.width / 2, yPos + 20 + DEFAULT_LINE_HEIGHT * lineCount);
            } else {
                fc.drawImage(CURSOR_DOWN, xPos + width / 2 - CURSOR_DOWN.width / 2, yPos + 25 + DEFAULT_LINE_HEIGHT * lineCount);
            }
        }

        return keyPressed == KEY_ACTION;
    });
    return displayFreeTextAction;
}

function procureDisplayMessageAction(xPos, yPos, width, height, text, displayCursor) {
    var displayMessageAction = new Action();
    displayMessageAction.choices = [];
    displayMessageAction.addChoice = function (textAnswer, activityFunction) {
        var isActive = activityFunction == null ? function () {return true} : activityFunction;
        displayMessageAction.choices.push({text: textAnswer, active: isActive});
        height += DEFAULT_LINE_HEIGHT;
        return displayMessageAction;
    };
    displayMessageAction.definePlayFrame(function (frame) {
        function writeLine(line, lineCount, color, offset) {
            fc.beginPath();
            fc.fillStyle = color;
            fc.font = DEFAULT_FONT;
            fc.fillText(line, xPos + offset, yPos + DEFAULT_LINE_HEIGHT * (lineCount + 1));
        }

        if ((frame == 0) && (displayMessageAction.choices.length > 0)) {
            eventChoice = 0;
        }

        if (frame < 10) {
            drawTextbox(xPos, yPos, width * frame / 10, height * frame / 10);
        } else {
            drawTextbox(xPos, yPos, width, height);
            var lineCount = processText(text, xPos + 30, yPos, width);

            if (displayMessageAction.choices.length > 0) {
                lineCount++;
                if (keyPressed == KEY_UP) {
                    if (eventChoice > 0) {
                        eventChoice--;
                    } else {
                        eventChoice = displayMessageAction.choices.length - 1;
                    }
                } else if (keyPressed == KEY_DOWN) {
                    if (eventChoice < displayMessageAction.choices.length - 1) {
                        eventChoice++;
                    } else {
                        eventChoice = 0;
                    }
                }
                for (i = 0; i < displayMessageAction.choices.length; i++) {
                    writeLine(((typeof displayMessageAction.choices[i].text === "string"))
                        ? displayMessageAction.choices[i].text : displayMessageAction.choices[i].text[lang],
                        lineCount, displayMessageAction.choices[i].active() ? "white" : "gray", 60);
                    lineCount++;
                    if (i == eventChoice) {
                        fc.beginPath();
                        var cursorOffset = (frame % 20 < 10) ? 35 : 40;
                        fc.drawImage(CURSOR_RIGHT, xPos + cursorOffset,
                            yPos + 7 + DEFAULT_LINE_HEIGHT * (lineCount - 1));
                    }
                }
            } else if (displayCursor) {
                fc.beginPath();
                cursorOffset = (frame % 20 < 10) ? 20 : 25;
                fc.drawImage(CURSOR_DOWN, xPos + width / 2 - CURSOR_DOWN.width / 2,
                    yPos + cursorOffset + DEFAULT_LINE_HEIGHT * lineCount);
            }

            return (keyPressed == KEY_ACTION)
                && (displayMessageAction.choices.length == 0 || displayMessageAction.choices[eventChoice].active());
        }
        return false;
    });
    return displayMessageAction;
}

function procureDisplayCenteredMessageAction(width, text, displayCursor) {
    var charLimitPerLine = Math.floor((width - 30) / DEFAULT_CHAR_WIDTH - 1);
    var lineCount = 0;
    var largestText;
    if (typeof text === "string") {
        largestText = text;
    } else {
        largestText = text[LANG_ENG].length > text[1].length ? text[LANG_ENG] : text[1];
    }
    var words = largestText.split(" ");
    words.push("");
    var line = "";
    for (var i = 0; i < words.length; i++) {
        if ((line.length + words[i].length > charLimitPerLine) || (words[i] == "<br>")) {
            lineCount++;
            line = "";
        }
        if (words[i] != "<br>") {
            line += words[i] + " ";
        }
    }
    if (displayCursor) {
        lineCount++;
    }
    return procureDisplayMessageAction(
        (W - width) / 2, H / 2 - 100, width, 50 + DEFAULT_LINE_HEIGHT * lineCount, text, displayCursor);
}

function procureFloatingTextAction(originX, originY, font, color, text) {
    var floatingTextAction = new Action();
    floatingTextAction.definePlayFrame(function (frame) {
        if ((frame < 50) && (text != null)) {
            fc.beginPath();
            fc.textAlign = "center";
            fc.fillStyle = color;
            fc.font = font;
            fc.fillText(text, originX, originY - frame);
            fc.textAlign = "left";
            return false;
        } else {
            return true;
        }
    });
    return floatingTextAction;
}

function procureHpGaugeTextAction(character, color, text) {
    var y = (character == hero) ? 70 : 175;
    return procureFloatingTextAction(60, y, DEFAULT_FONT, color, text);
}

function procureAttributeTextAction(attribute, color, text) {
    var y;
    switch (attribute) {
        case ATTR_ATTACK:
            y = INFO_WINDOW_Y + 15;
            break;
        case ATTR_DEFENSE:
            y = INFO_WINDOW_Y + 51;
            break;
        case ATTR_AGILITY:
            y = INFO_WINDOW_Y + 87;
            break;
        case ATTR_REFLEXES:
            y = INFO_WINDOW_Y + 123;
            break;
        default:
            y = -30;
    }
    return procureFloatingTextAction(40, y, LARGE_FONT, color, text);
}

function procureKarmaTextAction(color, text) {
    return procureFloatingTextAction(273, H - 47, LARGE_FONT, color, text);
}

function procureGuiEffectAction(guiEffect, color, value) {
    var guiEffectAction = new Action();
    guiEffectAction.definePlayFrame(function (frame) {
        switch (guiEffect) {
            case GFX_HERO_SPGAUGE_FLASH:
                if (frame % 24 < 12) {
                    fc.beginPath();
                    fc.lineWidth = 3;
                    fc.strokeStyle = color;
                    fc.strokeRect(HP_GAUGE_X + 58, HP_GAUGE_Y + 31, 235, 16);
                }
                return frame > 50;
                break;
            case GFX_HERO_APGAUGE_FLASH:
                if (frame % 24 < 12) {
                    fc.beginPath();
                    fc.lineWidth = 3;
                    fc.strokeStyle = color;
                    fc.strokeRect(HP_GAUGE_X + 58, HP_GAUGE_Y + 47, 235, 16);
                }
                return frame > 50;
                break;
            case GFX_HERO_BATTLEGAUGE_FLASH:
                if (frame % 12 < 6) {
                    fc.beginPath();
                    fc.lineWidth = 3;
                    fc.strokeStyle = color;
                    fc.strokeRect(BGL_LEFT - 2, getBattleGaugeOffset(hero) - 2,
                        BGL_RIGHT - BGL_LEFT + 4, BGL_HEIGHT + 2);
                }
                return frame > 23;
                break;
            case GFX_HERO_BATTLEGAUGE_FLASH_FILL:
                if (frame <= BATTLEGAUGE_FLASH_LENGTH) {
                    fc.beginPath();
                    fc.fillStyle = color;
                    fc.fillRect(BGL_LEFT - 2, getBattleGaugeOffset(hero) - 2,
                        BGL_RIGHT - BGL_LEFT + 4, BGL_HEIGHT + 2);
                }
                return frame > BATTLEGAUGE_FLASH_LENGTH;
                break;
            case GFX_ENEMY_BATTLEGAUGE_FLASH:
                if (frame % 12 < 6) {
                    fc.beginPath();
                    fc.lineWidth = 3;
                    fc.strokeStyle = color;
                    fc.strokeRect(BGL_LEFT - 2, getBattleGaugeOffset(enemy) - 2,
                        BGL_RIGHT - BGL_LEFT + 4, BGL_HEIGHT + 2);
                }
                return frame > 23;
                break;
            case GFX_ENEMY_BATTLEGAUGE_FLASH_FILL:
                if (frame <= BATTLEGAUGE_FLASH_LENGTH) {
                    fc.beginPath();
                    fc.fillStyle = color;
                    fc.fillRect(BGL_LEFT - 2, getBattleGaugeOffset(enemy) - 2,
                        BGL_RIGHT - BGL_LEFT + 4, BGL_HEIGHT + 2);
                }
                return frame > BATTLEGAUGE_FLASH_LENGTH;
                break;
            case GFX_SCREEN_FLASH:
                if (frame <= BATTLEGAUGE_FLASH_LENGTH) {
                    fc.beginPath();
                    fc.fillStyle = color;
                    fc.fillRect(0, 0, W, H);
                }
                return frame > BATTLEGAUGE_FLASH_LENGTH;
                break;
            default:
                return true;
        }
    });
    return guiEffectAction;
}

function procureStopAction() {
    return procureCodeFragmentAction(function() {
        controlMode = CM_EVENT;
        if ((battleFrame == null) || (battleFrame == 0)) {
            hero.setAnimationState(AN_STAND);
            moving = false;
        }
    });
}

function procureResumeAction() {
    return procureCodeFragmentAction(function() {
        if ((battleFrame == null) || (battleFrame == 0)) {
            hero.setAnimationState(AN_MOVE_1);
            controlMode = CM_FIELD;
            moving = true;
        } else {
            controlMode = CM_BATTLE;
        }
    });
}

function procureInitiateBattleAction(newEnemy, finishedSequence) {
    return procureCodeFragmentAction(function () {
        hero.setAnimationState(AN_STAND);
        controlMode = CM_EVENT;
        moving = false;
        var battleGuiAppearAction = new Action();
        battleGuiAppearAction.definePlayFrame(function (frame) {
            var imgGuiBattleGauges = getImageResource("imgBattleGauges");
            var x = (W - imgGuiBattleGauges.width) / 2 - 20;
            var y = frame * 8 - imgGuiBattleGauges.height;
            fc.beginPath();
            fc.drawImage(imgGuiBattleGauges, x, y);

            var scale = (frame * 16) >= (22 + imgGuiBattleGauges.height)
                ? 1 : (frame * 16) / (22 + imgGuiBattleGauges.height);

            var imgEnemyHpGauge = getImageResource("imgGuiEnemyHpGauge");
            x = -imgEnemyHpGauge.width + scale * (imgEnemyHpGauge.width + 18);
            fc.drawImage(imgEnemyHpGauge, x, 185);

            var lineCount = hero.skillSet.length;
            if (lineCount < 4) {
                lineCount = 4;
            }

            drawTextbox(W - 350, 54, 330 * scale, (50 + 30 * lineCount) * scale);

            if (scale == 1) {
                scale = (frame * 16) / (22 + imgGuiBattleGauges.height) - 1;
                fc.fillStyle = "#FF4444";
                fc.fillRect(77, 187, 231 * scale, 14);
            }

            if (y >= 22) {
                eventBattleEndSequence = finishedSequence;
                for (var i = 0; i < hero.activeSkills.length; i++) {
                    hero.skillSet[i] = gainSkill(hero.activeSkills[i]);
                }
                for (i = 0; i < hero.activeAuraSkills.length; i++) {
                    hero.skillSet[i + 7] = gainSkill(hero.activeAuraSkills[i]);
                }
                skillChoice = 0;
                itemChoice = 0;
                for (i = 4; i >= 0; i--) {
                    if (hero.activeItems[i] != null) {
                        itemChoice = i;
                    }
                }
                battleFrame = 0;
                behaviorFluctuation = 0;
                enemy = newEnemy;
                controlMode = CM_BATTLE;
                return true;
            } else {
                return false;
            }
        });
        registerObject(GUI_EVENT, battleGuiAppearAction);
    });
}

function procurePlayAnimationAction(imageSequence, framesPerImage, width, height, xPos, yPos) {
    var playAnimationAction = new Action();
    playAnimationAction.definePlayFrame(function (frame) {
        if (frame < framesPerImage * imageSequence.length) {
            fc.beginPath();
            fc.drawImage(imageSequence[Math.floor(frame / framesPerImage)],
                xPos - width / 2, yPos - height / 2, width, height);
            return false;
        } else {
            return true;
        }
    });
    return playAnimationAction;
}

function procureDeathAnimationAction(character) {
    var deathAnimationAction = new Action();
    deathAnimationAction.definePlayFrame(function (frame) {
        var animationObject = (character == hero) ? character : character.animationObject;
        if (frame > 50) {
            animationObject.setAnimationState(AN_NONE);
            return true;
        } else {
            if (frame == 1) {
                animationObject.setAnimationState(AN_DEATH);
            }
            return false;
        }
    });
    return deathAnimationAction;
}

/* OBJECT TYPES */

function describeCommonEncounter(chanceToAppear, enemyName, enemyImageStand, enemyImageAttack, enlistEnemyFunction,
                                 startingHeroStrength, maxHeroStrength) {
    var encounterType = new ObjectType(chanceToAppear);
    encounterType.defineGenerateObject(function (path, position) {
        var enemyObject = new FieldObject(path, position, 50, enemyImageStand);
        enemyObject.setAttackImage(enemyImageAttack);
        var enemy = enlistEnemyFunction(startingHeroStrength, maxHeroStrength, enemyObject);
        enemyObject.defineTrigger(function () {
            var encounterSequence = new Sequence();
            encounterSequence.addAction(procureStopAction());
            var karmaCost = enemy.getKarma();
            var encounterMessage = [
                enemyName[LANG_ENG] + TXT_COMMON_ENCOUNTER_1[LANG_ENG] + karmaCost + TXT_COMMON_ENCOUNTER_2[LANG_ENG],
                enemyName[LANG_RUS] + TXT_COMMON_ENCOUNTER_1[LANG_RUS] + karmaCost + TXT_COMMON_ENCOUNTER_2[LANG_RUS]
            ];
            encounterSequence.addAction(procureDisplayCenteredMessageAction(WW_SMALL, encounterMessage, true)
                .addChoice(TXT_COMMON_ENCOUNTER_CHOICE_FIGHT)
                .addChoice(TXT_COMMON_ENCOUNTER_CHOICE_AVOID));
            encounterSequence.addAction(procureCodeFragmentAction(function () {
                var encounterSequenceAnswered = new Sequence();
                if (eventChoice == 0) {
                    encounterSequenceAnswered.addAction(procureInitiateBattleAction(enemy));
                } else {
                    var avoidMessage = [
                        TXT_COMMON_ENCOUNTER_3[LANG_ENG] + karmaCost + TXT_KARMA_COST[LANG_ENG],
                        TXT_COMMON_ENCOUNTER_3[LANG_RUS] + karmaCost + TXT_KARMA_COST[LANG_RUS]
                    ];
                    encounterSequenceAnswered.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL,  avoidMessage, true));
                    encounterSequenceAnswered.addAction(procureCodeFragmentAction(function () {
                        hero.expendKarma(karmaCost);
                    }));
                    encounterSequenceAnswered.addAction(procureResumeAction());
                }
                registerObject(GUI_EVENT, encounterSequenceAnswered);
            }));
            registerObject(GUI_EVENT, encounterSequence);
        });
        return enemyObject;
    });
    return encounterType;
}

/* ARTIFACTS AMD SKILLS */

function acquireAttributeAdjustmentArtifact(position, leftWidth, rightWidth, weakColor, strongColor,
                                            attribute, minPower, maxPower, hidden) {
    var attributeAdjustmentArtifact = new BattleGaugeArtifact(position, leftWidth, rightWidth);
    if (hidden) {
        attributeAdjustmentArtifact.leftCooldown = 0;
        attributeAdjustmentArtifact.rightCooldown = 0;
    }
    attributeAdjustmentArtifact.defineGetEffect(function (position, character) {
        var power;
        if (position >= BGL_LEFT) {
            if (position - BGL_LEFT <= leftWidth) {
                power = minPower + (maxPower - minPower) * (1 - (position - BGL_LEFT) / leftWidth);
            } else {
                power = 1;
            }
        } else {
            if (BGL_LEFT - position <= rightWidth) {
                power = minPower + (maxPower - minPower) * (1 - (BGL_LEFT - position) / rightWidth);
            } else {
                power = 1;
            }
        }
        switch (attribute) {
            case ATTR_ATTACK:
                character.effAttack = character.effAttack * power;
                break;
            case ATTR_DEFENSE:
                character.effDefense = character.effDefense * power;
                break;
            case ATTR_AGILITY:
                character.effAgility = character.effAgility * power;
                break;
            case ATTR_REFLEXES:
                character.effReflexes = character.effReflexes * power;
                break;
            case ATTR_EVASION:
                character.effEvasion = character.effEvasion * power;
                break;
            case ATTR_REFLECT:
                character.effReflect = character.effReflect * power;
                break;
        }
        return position + rightWidth < BGL_LEFT;
    });
    if (!hidden) {
        attributeAdjustmentArtifact.defineDraw(function (position, character) {
            var topOffset = getBattleGaugeOffset(character);
            drawLimitedGradient(position - leftWidth, topOffset, position, topOffset + BGL_HEIGHT,
                weakColor, strongColor
            );
            drawLimitedGradient(position, topOffset, position + rightWidth, topOffset + BGL_HEIGHT,
                strongColor, weakColor
            );
        });
        attributeAdjustmentArtifact.defineSketch(function (position, character) {
            var topOffset = getBattleGaugeOffset(character);
            fc.beginPath();
            fc.rect(position - leftWidth, topOffset - 5, rightWidth + leftWidth, BGL_HEIGHT + 10);
            fc.lineWidth = 3;
            fc.strokeStyle = "black";
            fc.stroke();
            fc.lineWidth = 1;
            fc.moveTo(position - leftWidth, topOffset - 5);
            fc.lineTo(position - leftWidth, topOffset + 164);
            fc.moveTo(position + rightWidth, topOffset - 5);
            fc.lineTo(position + rightWidth, topOffset + 164);
            fc.stroke();
        });
    }
    return attributeAdjustmentArtifact;
}

function acquireGradualChangeArtifact(position, leftWidth, rightWidth, weakColor, strongColor,
                                            attribute, minPower, maxPower, hidden) {
    var gradualChangeArtifact = new BattleGaugeArtifact(position, leftWidth, rightWidth);
    if (hidden) {
        gradualChangeArtifact.leftCooldown = 0;
        gradualChangeArtifact.rightCooldown = 0;
    }
    gradualChangeArtifact.defineGetEffect(function (position, character) {
        var power;
        if (position >= BGL_LEFT) {
            if (position - BGL_LEFT <= leftWidth) {
                power = minPower + (maxPower - minPower) * (1 - (position - BGL_LEFT) / leftWidth);
            } else {
                power = 0;
            }
        } else {
            if (BGL_LEFT - position <= rightWidth) {
                power = minPower + (maxPower - minPower) * (1 - (BGL_LEFT - position) / rightWidth);
            } else {
                power = 0;
            }
        }
        power = power * BATTLEGAUGE_SHIFT_BASIS * getGlobalBattleGaugeShiftCoefficient() / (leftWidth + rightWidth);
        switch (attribute) {
            case ATTR_HP:
                if (power >= 0) {
                    hero.restoreHp(power);
                } else {
                    hero.expendHp(-power);
                }
                break;
            case ATTR_SP:
                if (power >= 0) {
                    hero.restoreSp(power);
                } else {
                    hero.expendSp(-power);
                }
                break;
            case ATTR_AP:
                if (power >= 0) {
                    hero.restoreAp(power);
                } else {
                    hero.expendAp(-power);
                }
                break;
        }
        return position + rightWidth < BGL_LEFT;
    });
    if (!hidden) {
        gradualChangeArtifact.defineDraw(function (position, character) {
            var topOffset = getBattleGaugeOffset(character);
            drawLimitedGradient(position - leftWidth, topOffset, position, topOffset + BGL_HEIGHT,
                weakColor, strongColor
            );
            drawLimitedGradient(position, topOffset, position + rightWidth, topOffset + BGL_HEIGHT,
                strongColor, weakColor
            );
        });
        gradualChangeArtifact.defineSketch(function (position, character) {
            var topOffset = getBattleGaugeOffset(character);
            fc.beginPath();
            fc.rect(position - leftWidth, topOffset - 5, rightWidth + leftWidth, BGL_HEIGHT + 10);
            fc.lineWidth = 3;
            fc.strokeStyle = "black";
            fc.stroke();
            fc.lineWidth = 1;
            fc.moveTo(position - leftWidth, topOffset - 5);
            fc.lineTo(position - leftWidth, topOffset + 164);
            fc.moveTo(position + rightWidth, topOffset - 5);
            fc.lineTo(position + rightWidth, topOffset + 164);
            fc.stroke();
        });
    }
    return gradualChangeArtifact;
}

function acquireImpactArtifact(position, image, power, evadable, apGain) {
    var impactArtifact = new BattleGaugeArtifact(position, 10, 10);
    impactArtifact.defineGetEffect(function (position, character) {
        if (position <= BGL_LEFT) {
            character.strike(power, evadable, apGain);
            return true;
        } else {
            return false;
        }
    });
    impactArtifact.defineDraw(function (position, character) {
        var topOffset = getBattleGaugeOffset(character);
        if ((position > BGL_LEFT) && (position < BGL_RIGHT)) {
            fc.beginPath();
            var imageToDraw = (image instanceof HTMLImageElement) ? image : image
                [Math.floor((globalFrame % (20 * image.length - 1)) / 10) % image.length];
            fc.drawImage(imageToDraw, position - imageToDraw.width / 2, topOffset - imageToDraw.height / 2 + 20);
        }
    });
    impactArtifact.defineSketch(function (position, character) {
        var topOffset = getBattleGaugeOffset(character);
        fc.beginPath();
        var imageToDraw = (image instanceof HTMLImageElement) ? image : image[0];
        fc.rect(position - imageToDraw.width / 2, topOffset - 8, imageToDraw.width, BGL_HEIGHT + 16);
        fc.lineWidth = 3;
        fc.strokeStyle = "black";
        fc.stroke();
        fc.lineWidth = 1;
        fc.moveTo(position, topOffset + BGL_HEIGHT + 5);
        fc.lineTo(position, topOffset + 164);
        fc.stroke();
    });
    return impactArtifact;
}

function acquireEmptyArtifact(position, cooldown, image) {
    var emptyArtifact = new BattleGaugeArtifact(position, cooldown, cooldown);
    if (image !== undefined) {
        emptyArtifact.defineDraw(function (position, character) {
            var topOffset = getBattleGaugeOffset(character);
            if ((position > BGL_LEFT) && (position < BGL_RIGHT)) {
                fc.beginPath();
                fc.drawImage(image, position - image.width / 2, topOffset - image.height / 2 + 20);
            }
        });
        emptyArtifact.defineSketch(function (position, character) {
            var topOffset = getBattleGaugeOffset(character);
            fc.beginPath();
            fc.rect(position - image.width / 2, topOffset - 8, image.width, BGL_HEIGHT + 16);
            fc.lineWidth = 3;
            fc.strokeStyle = "black";
            fc.stroke();
            fc.lineWidth = 1;
            fc.moveTo(position, topOffset + BGL_HEIGHT + 5);
            fc.lineTo(position, topOffset + 164);
            fc.stroke();
        });
    }
    emptyArtifact.defineGetEffect(function (position) {
        return position < BGL_LEFT;
    });
    return emptyArtifact;
}

function getAbsoluteArtifactPosition(position) {
    return (W / 2) - 10 + position;
}

var SKL_ATTACK = 1;
function gainAttackSkill() {
    var attackSkill = new CombatSkill(["Attack", "Атаковать"],
        ["A standard strike. 100% attack power impact in the middle of a medium-sized guard down period.",
        "Обычный удар. Воздействие 100% силы атаки посреди средних размеров зоны пониженной защиты."], 10);
    attackSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                60, 60, BGL_COLOR, "#FF3C3C", ATTR_DEFENSE, 1, 0.3, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position), getImageResource("imgBattleImpactIcon"), 1)
        ];
    });
    return attackSkill;
}

var SKL_DEFEND = 2;
function gainDefendSkill() {
    var defendSkill = new CombatSkill(["Defend", "Защищаться"],
        ["A basic defensive action. A medium-sized guard up period.",
            "Базовый защитный манёвр. Средних размеров зона повышенной защиты."], 5);
    defendSkill.defineGetArtifacts(function (position) {
        return [acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
            60, 60, BGL_COLOR, "#3C78FF", ATTR_DEFENSE, 1, 1.6, false)]
    });
    return defendSkill;
}

var SKL_CHARGE = 3;
function gainChargeSkill() {
    var chargeSkill = new CombatSkill(["Charge", "Напор"],
        ["A charging attack. 150% attack power impact in the right side of a large guard down period.",
            "Стремительная атака. Воздействие 150% силы атаки в правой части большой зоны пониженной защиты."], 15);
    chargeSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                70, 70, BGL_COLOR, "#FF3C3C", ATTR_DEFENSE, 1, 0.3, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) + 30,
                getImageResource("imgBattleImpactIcon"), 1.5)
        ];
    });
    return chargeSkill;
}

var SKL_JAB = 4;
function gainJabSkill() {
    var jabSkill = new CombatSkill(["Jab", "Короткий удар"],
        ["A fast strike. 50% attack power impact in the middle of a small guard down period.",
            "Быстрый удар. Воздействие 50% силы атаки посредине небольшой зоны пониженной защиты."], 8);
    jabSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                30, 30, BGL_COLOR, "#FF5C5C", ATTR_DEFENSE, 1, 0.5, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position), getImageResource("imgBattleImpactIcon"), 0.5)
        ];
    });
    return jabSkill;
}

var SKL_COUNTERATTACK = 5;
function gainCounterattackSkill() {
    var counterattackSkill = new CombatSkill(["Counterattack", "Контратака"], [
        "A defensive action followed by an attack. A medium-sized guard up period followed by a 75% attack power "
            + "impact followed by a small guard down period.",
        "Защитный манёвр, за которым следует атака. Средних размеров зона повышенной защиты, за которой следует "
            + "воздействие 75% силы атаки, за которыи следует небольшая зона пониженной защиты."], 15);
    counterattackSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                60, 0, BGL_COLOR, "#3C78FF", ATTR_DEFENSE, 1, 1.5, false),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                0, 30, BGL_COLOR, "#FF5C5C", ATTR_DEFENSE, 1, 0.5, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position), getImageResource("imgBattleImpactIcon"), 0.75)
        ];
    });
    return counterattackSkill;
}

var SKL_GUARDEDSTRIKE = 6;
function gainGuardedStrikeSkill() {
    var guardedStrikeSkill = new CombatSkill(["Guarded strike", "Осторожный удар"], [
        "An attack followed by a defensive action. A medium-sized guard down period followed by a 100% attack power "
            + "impact followed by a large guard up period.",
        "Атака, за которой следует защитный манёвр. Средних размеров зона пониженной защиты, за которой следует "
            + "воздействие 100% силы атаки, за которыи следует большая зона повышенной защиты."], 18);
    guardedStrikeSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                30, 0, BGL_COLOR, "#FF5C5C", ATTR_DEFENSE, 1, 0.6, false),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                0, 80, BGL_COLOR, "#3C78FF", ATTR_DEFENSE, 1, 1.7, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position), getImageResource("imgBattleImpactIcon"), 1)
        ];
    });
    return guardedStrikeSkill;
}

var SKL_RATRIDERDANCE = 7;
function gainRatRiderDanceSkill() {
    var ratRiderDanceSkill = new CombatSkill(["Rat Rider Dance", "Танец Крыс. Всадника"], [
        "A mighty combo of three strikes. Three 80% attack power impacts surrounded with small guard up, guard down, "
            + "guard down, guard up periods.",
        "Мощная комбинация из трёх ударов. Три воздействия 80% силы атаки, окружённые небольшими зонами повышенной, "
            + "пониженной, пониженной и ещё раз повышенной защиты."], 25);
    ratRiderDanceSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position) - 30,
                40, 0, BGL_COLOR, "#3C78FF", ATTR_DEFENSE, 1, 1.7, false),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                30, 30, "#FF5C5C", "#FF5C5C", ATTR_DEFENSE, 0.6, 0.6, false),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position) + 30,
                0, 40, BGL_COLOR, "#3C78FF", ATTR_DEFENSE, 1, 1.7, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) - 30,
                getImageResource("imgBattleImpactIcon"), 0.8),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position),
                getImageResource("imgBattleImpactIcon"), 0.8),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) + 30,
                getImageResource("imgBattleImpactIcon"), 0.8)
        ];
    });
    return ratRiderDanceSkill;
}

var SKL_ACEOFSPADES = 8;
function gainAceOfSpadesSkill() {
    var aceOfSpadesSkill = new CombatSkill(["Ace of Spades", "Пиковый Туз"], [
        "An ultimate technique for the Queen of Spades. 500% attack power impact in the right side "
            + "of a huge guard down period.",
        "Высшая техника для Пиковой Дамы. Воздействие 500% силы атаки в правой части "
            + "огромной зоны пониженной защиты."], 40);
    aceOfSpadesSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                80, 80, BGL_COLOR, "#FF3C3C", ATTR_DEFENSE, 1, 0.3, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) + 40,
                [getImageResource("imgBattleAuraImpact1Icon"), getImageResource("imgBattleAuraImpact2Icon")],
                5, false, false)
        ];
    });
    return aceOfSpadesSkill;
}

var SKL_OMNISLASH = 100;
function gainOmnislashSkill() {
    var omnislashSkill = new CombatSkill(["Omnislash", "Омнислэш"], [
        "Nine crushing blows from all possible and impossible angles.",
        "Девять сокрушительных ударов со всех мыслимых и немыслимых углов."], 50);
    omnislashSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position) - 120,
                40, 0, BGL_COLOR, "#3C78FF", ATTR_DEFENSE, 1, 1.7, false),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                120, 120, "#FF5C5C", "#FF5C5C", ATTR_DEFENSE, 0.6, 0.6, false),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position) + 120,
                0, 40, BGL_COLOR, "#3C78FF", ATTR_DEFENSE, 1, 1.7, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) - 120,
                getImageResource("imgBattleImpactIcon"), 0.8),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) - 90,
                getImageResource("imgBattleImpactIcon"), 0.8),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) - 60,
                getImageResource("imgBattleImpactIcon"), 0.8),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) - 30,
                getImageResource("imgBattleImpactIcon"), 0.8),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position),
                getImageResource("imgBattleImpactIcon"), 0.8),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) + 30,
                getImageResource("imgBattleImpactIcon"), 0.8),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) + 60,
                getImageResource("imgBattleImpactIcon"), 0.8),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) + 90,
                getImageResource("imgBattleImpactIcon"), 0.8),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) + 120,
                getImageResource("imgBattleImpactIcon"), 0.8)
        ];
    });
    return omnislashSkill;
}

/* ENEMY SKILLS */

function gainOpenerSkill(cooldown) {
    // A dummy skill that sets the initial cooldown for the enemy, so that it doesn't spam attacks right away
    var openerSkill = new CombatSkill("Opener", "A great way to start a battle! Unless you are Dominique.", 0);
    openerSkill.defineGetArtifacts(function (position) {
        return [acquireEmptyArtifact(getAbsoluteArtifactPosition(position), cooldown)];
    });
    return openerSkill;
}

function gainOpeningSkill(width, vulnerability) {
    var openingSkill = new CombatSkill("Opening", "Not so much of a skill. More like a lack thereof.", 5);
    openingSkill.defineGetArtifacts(function (position) {
        return [acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
            width / 2, width / 2, BGL_COLOR, "#EE8C8C", ATTR_DEFENSE, 1, vulnerability, false)];
    });
    return openingSkill;
}

function gainFumbledAttackSkill(width, vulnerability) {
    var fumbledAttackSkill = new CombatSkill("Fumbled attack", "A weaker attack with a weakness area around.", 10);
    fumbledAttackSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                width, width * (1 + Math.random()), BGL_COLOR, "#FF4C4C", ATTR_DEFENSE, 1, vulnerability, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position), getImageResource("imgBattleImpactIcon"),
                vulnerability)
        ];
    });
    return fumbledAttackSkill;
}

function gainFullguardAttackSkill(width, armor) {
    var fullguardAttackSkill = new CombatSkill("Fullguard attack", "An attack with a guard up area around.", 20);
    fullguardAttackSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                width / 2, width / 2, BGL_COLOR, "#AA40F0", ATTR_DEFENSE, 1, armor, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position), getImageResource("imgBattleImpactIcon"), 1.2)
        ];
    });
    return fullguardAttackSkill;
}

/* GAINABLE SKILLS ID MAPPING */
function gainSkill(id) {
    switch (id) {
        case SKL_ATTACK:
            return gainAttackSkill();
        case SKL_DEFEND:
            return gainDefendSkill();
        case SKL_CHARGE:
            return gainChargeSkill();
        case SKL_JAB:
            return gainJabSkill();
        case SKL_COUNTERATTACK:
            return gainCounterattackSkill();
        case SKL_GUARDEDSTRIKE:
            return gainGuardedStrikeSkill();
        case SKL_RATRIDERDANCE:
            return gainRatRiderDanceSkill();
        case SKL_ACEOFSPADES:
            return gainAceOfSpadesSkill();
        case SKL_OMNISLASH:
            return gainOmnislashSkill();
        default:
            return null;
    }
}

/* ITEMS */

var ITM_OINTMENT1 = 1;
function obtainOintmentItem() {
    var ointmentItem = new UsableItem(["Ointment", "Мазь"],
        ["A common curative ointment that is useful when working on flesh wounds. "
            + "Restores 25% HP over a long period of time.", "Обычная целебная мазь, полезна при обработке "
            + "поверхностных ран. Восстанавливает 25% ОЖ за длительный период времени."],
        getImageResource("imgItemOintment1"), 2, true);
    ointmentItem.defineGetFieldEffect(function () {
        hero.restoreHp(hero.attrMaxHp * 0.25);
        return true;
    });
    ointmentItem.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                60, 0, BGL_COLOR, "#FF3C3C", ATTR_DEFENSE, 1, 0.3, false),
            acquireGradualChangeArtifact(getAbsoluteArtifactPosition(position),
                0, 100, BGL_COLOR, "#3CFF3C", ATTR_HP, hero.attrMaxHp * 0.25, hero.attrMaxHp * 0.25, false),
            acquireEmptyArtifact(getAbsoluteArtifactPosition(position), 0, getImageResource("imgBattleItemIcon"))
        ];
    });
    return ointmentItem;
}

/* OBTAINABLE ITEMS ID MAPPING */
function obtainItem(id) {
    switch (id) {
        case ITM_OINTMENT1:
            return obtainOintmentItem();
        default:
            return null;
    }
}

/* ENEMIES */