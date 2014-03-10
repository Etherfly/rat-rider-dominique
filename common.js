/**
 * Created by Etherfly on 01.02.14.
 *
 * This file contains common objects pregenerations.
 */

/* LANDSCAPES */

var LSC_TITLE = 0;
function createTitleLandscape() {
    var titleLandscape = new Landscape(getResource("imgDecGrassBackground"), "#007700", "#009900", "#00AA00",
        MUS_GRASSLANDS_THEME, MUS_BATTLE_THEME, 600);
    titleLandscape.defineGenerateTerrain(function (path) {
        var color = this.pathToColor(path);
        var terrain = generateSurface(path, color);
        registerObject(pathToLandscapeLayer(path), terrain);

        var patchSet = [];
        for (var i = 1; i < 3; i++) {
            patchSet.push(getResource("imgDecGrassPatch" + i));
        }
        patchSet.push(getResource("imgDecGrassFlower1"));
        decorateReaches(path, -3, 4, 0.6, 50, patchSet);

        var shrubSet = [];
        for (i = 1; i < 3; i++) {
            shrubSet.push(getResource("imgDecGrassShrub" + i));
        }
        decorateReaches(path, 0, 2.5, 0.5, 90, shrubSet);

        var treeSet = [];
        for (i = 1; i < 5; i++) {
            treeSet.push(getResource("imgDecGrassTree" + i));
        }
        decorateReaches(path, 0, 2, 1, 10, treeSet);
    });
    titleLandscape.defineGenerateUpperDecoration(function () {
        var cloud = new Decoration(null, 1, MID, -50 + Math.random() * 100, upperReaches.position + 270 + Math.random() * 70);
        cloud.movementFactor = 0.4;
        cloud.deleteRange = -400;
        var puffSeed = Math.random() * 10000;
        cloud.defineDraw(function () {
            this.position -= movementCoefficient * 0.2;
            setSeed(puffSeed);
            var puffQuantity = 3 + Math.floor(random() * 3);
            for (var i = 0; i < puffQuantity; i++) {
                var middlanceFactor = puffQuantity - Math.abs((puffQuantity - 1) / 2 - i);
                var radius = 12 * middlanceFactor + random() * 8;
                fc.beginPath();
                fc.fillStyle = "#f0ffff";
                fc.arc(this.position + i * radius, CLOUD_HEIGHT + this.offset, radius, 0, 2 * Math.PI);
                fc.fill();
            }
        });
        upperReaches = cloud;
        registerObject(DECORATIONS_MID, cloud);
    });
    return titleLandscape;
}

/* LANDSCAPES ID MAPPING */
function createLandscape(id) {
    switch (id) {
        case LSC_TITLE:
            return createTitleLandscape();
        case LSC_PROLOGUE:
            return createPrologueLandscape();
        default:
            return null;
    }
}

/* SEQUENCES */

function procureTitleSequence() {
    var titleDisplay = new Sequence();
    var logoAppearAction = new Action();
    var titleDisplayAction = new Action();
    var imgResLogo = getResource("imgResLogo");
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
                    playSfx(SFX_GUI_TINK);
                    if (eventChoice > 0) {
                        eventChoice--;
                    } else {
                        eventChoice = displayMessageAction.choices.length - 1;
                    }
                } else if (keyPressed == KEY_DOWN) {
                    playSfx(SFX_GUI_TINK);
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

            if (keyPressed == KEY_ACTION) {
                playSfx(SFX_GUI_THUCK);
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
    if ((displayCursor === undefined) || displayCursor) {
        lineCount++;
    }
    return procureDisplayMessageAction(
        (W - width) / 2, H / 2 - 100, width, 50 + DEFAULT_LINE_HEIGHT * lineCount, text, displayCursor);
}

function procureDisplaySpeechMessageAction(name, portrait, text) {
    var displaySpeechMessageAction = new Action();
    displaySpeechMessageAction.definePlayFrame(function (frame) {
        if (frame < 10) {
            drawTextbox(INFO_WINDOW_X, INFO_WINDOW_Y, INFO_WINDOW_W * frame / 10, INFO_WINDOW_H * frame / 10);
        } else {
            drawInfoWindow();
            fc.beginPath();
            fc.drawImage(portrait, INFO_WINDOW_X + 12, INFO_WINDOW_Y + 12, 196, 196);
            processText(name, INFO_WINDOW_X + 220, INFO_WINDOW_Y, INFO_WINDOW_W - 220, LARGE_FONT);
            var translatedText = (typeof text === "string") ? text : text[lang];
            var printedText = frame * 3 >= translatedText.length ? translatedText : translatedText.substr(0, (frame - 10) * 3);
            var lineCount = processText(printedText, INFO_WINDOW_X + 220, INFO_WINDOW_Y + LARGE_LINE_HEIGHT, INFO_WINDOW_W - 220);

            if ((frame - 10) * 3 >= text.length) {
                fc.beginPath();
                var cursorOffset = (frame % 20 < 10) ? 20 : 25;
                fc.drawImage(CURSOR_DOWN, INFO_WINDOW_X + 220 + (INFO_WINDOW_W - 220) / 2 - CURSOR_DOWN.width / 2,
                    INFO_WINDOW_Y + cursorOffset + LARGE_LINE_HEIGHT + DEFAULT_LINE_HEIGHT * lineCount);
            }

            return keyPressed == KEY_ACTION;
        }
        return false;
    });
    return displaySpeechMessageAction;
}

function procureFloatingTextAction(originX, originY, font, color, text, duration) {
    var floatingTextAction = new Action();
    floatingTextAction.definePlayFrame(function (frame) {
        if ((frame < ((duration === undefined) ? 50 : duration)) && (text != null)) {
            var flashLabel = getResource("imgFlashLabel");
            fc.beginPath();
            fc.textAlign = "center";
            fc.fillStyle = color;
            fc.font = font;
            var textToFloat = (typeof text === "string") ? text : text[lang];
            var labelWidth = (fc.measureText(textToFloat).width + 20) * 1.6;
            var yOffset = font == DEFAULT_FONT ? 28 : 30;
            fc.drawImage(flashLabel, originX - labelWidth / 2, originY - yOffset - frame, labelWidth, 45);
            fc.fillText(textToFloat, originX, originY - frame);
            fc.textAlign = "left";
            return false;
        } else {
            return true;
        }
    });
    return floatingTextAction;
}

function procureHeroTextAction(color, text) {
    return procureFloatingTextAction(hero.position + 200, hero.height, LARGE_FONT, color, text, 150);
}

function procureHpGaugeTextAction(character, color, text) {
    var y = (character == hero) ? 70 : 175;
    return procureFloatingTextAction(60, y, DEFAULT_FONT, color, text);
}

function procureStatusTextAction(character, color, text) {
    var y = (character == hero) ? 70 : 175;
    return procureFloatingTextAction(BGL_LEFT, y, DEFAULT_FONT, color, text);
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

function procureDisplayLabelAction(x, y, text, terminationFunction) {
    var internalFrameCounter = 0;
    if (terminationFunction === undefined) {
        terminationFunction = function () {
            internalFrameCounter++;
            return (internalFrameCounter >= 10) && (keyPressed == KEY_ACTION);
        };
    }
    var displayLabelAction = new Action();
    displayLabelAction.definePlayFrame(function (frame) {
        drawLabel(x, y, text);
        return terminationFunction();
    });
    return displayLabelAction;
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

function procureDistanceTimeoutAction(movingFrameDistance) {
    var distanceTimeoutAction = new Action();
    var movingFrame = 0;
    distanceTimeoutAction.definePlayFrame(function (frame) {
        if (moving) { movingFrame++; }
        return movingFrame >= movingFrameDistance;
    });
    return distanceTimeoutAction;
}

function procureInitiateBattleAction(newEnemy, finishedSequence) {
    return procureCodeFragmentAction(function () {
        hero.setAnimationState(AN_STAND);
        controlMode = CM_EVENT;
        moving = false;
        setMusicPlayState(MPS_BATTLE);
        var battleGuiAppearAction = new Action();
        battleGuiAppearAction.definePlayFrame(function (frame) {
            var imgGuiBattleGauges = getResource("imgBattleGauges");
            var x = (W - imgGuiBattleGauges.width) / 2 - 20;
            var y = frame * 8 - imgGuiBattleGauges.height;
            fc.beginPath();
            fc.drawImage(imgGuiBattleGauges, x, y);

            var scale = (frame * 16) >= (22 + imgGuiBattleGauges.height)
                ? 1 : (frame * 16) / (22 + imgGuiBattleGauges.height);

            var imgEnemyHpGauge = getResource("imgGuiEnemyHpGauge");
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
                currentSyncCoefficient = 1;
                heroBGNicksPosition = 0;
                enemyBGNicksPosition = 0;
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

function procureFloatingImageAction(linkedObject, floatingImage, terminationFunction) {
    if (terminationFunction === undefined) {
        terminationFunction = function () { return false; };
    }
    var floatingImageAction = new Action();
    floatingImageAction.definePlayFrame(function (frame) {
        if (linkedObject != null) {
            fc.beginPath();
            fc.drawImage(floatingImage, linkedObject.position - floatingImage.width / 2, getOptimalHeight(linkedObject.path,
                linkedObject.position) + linkedObject.offset - floatingImage.height - 20 + 10 * Math.sin(frame * 2 * Math.PI / 100));
            return terminationFunction();
        } else {
            return true;
        }
    });
    return floatingImageAction;
}

/* OBJECT TYPES */

function describeCommonEncounter(chanceToAppear, enemyName, enemyImageStand, enemyImageAttack, enlistEnemyFunction,
                                 startingHeroStrength, maxHeroStrength, chId, varId, firstEncounterMessageAction) {
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
            if ((chId != null) && (varId != null) && (firstEncounterMessageAction != null)) {
                if (gst[chId][varId] < 1) {
                    gst[chId][varId] = 1;
                    encounterSequence.addAction(firstEncounterMessageAction);
                }
            }
            encounterSequence.addAction(procureDisplayCenteredMessageAction(WW_SMALL, encounterMessage, true)
                .addChoice(TXT_COMMON_ENCOUNTER_CHOICE_FIGHT)
                .addChoice(TXT_COMMON_ENCOUNTER_CHOICE_AVOID));
            encounterSequence.addAction(procureCodeFragmentAction(function () {
                if (eventChoice == 0) {
                    encounterSequence.addAction(procureInitiateBattleAction(enemy));
                } else {
                    var avoidMessage = [
                        TXT_COMMON_ENCOUNTER_3[LANG_ENG] + karmaCost + TXT_KARMA_COST[LANG_ENG],
                        TXT_COMMON_ENCOUNTER_3[LANG_RUS] + karmaCost + TXT_KARMA_COST[LANG_RUS]
                    ];
                    encounterSequence.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL,  avoidMessage, true));
                    encounterSequence.addAction(procureCodeFragmentAction(function () {
                        hero.expendKarma(karmaCost);
                    }));
                    encounterSequence.addAction(procureResumeAction());
                }
            }));
            registerObject(GUI_EVENT, encounterSequence);
        });
        return enemyObject;
    });
    return encounterType;
}

function describeDangerEncounter(chanceToAppear, enemyName, enemyImageStand, enemyImageAttack, enlistEnemyFunction,
                                 startingHeroStrength, maxHeroStrength) {
    var encounterType = new ObjectType(chanceToAppear);
    encounterType.singletonId = "singleton: " + enemyName[LANG_ENG];
    encounterType.defineGenerateObject(function (path, position) {
        var enemyObject = new FieldObject(path, position, 50, enemyImageStand);
        enemyObject.setAttackImage(enemyImageAttack);
        var triggered = false;
        registerObject(pathToObjectLayer(path),
            procureFloatingImageAction(enemyObject, getResource("imgDangerMark"), function () {
                return triggered;
            }));
        var enemy = enlistEnemyFunction(startingHeroStrength, maxHeroStrength, enemyObject);
        enemyObject.defineTrigger(function () {
            var encounterSequence = new Sequence();
            encounterSequence.addAction(procureStopAction());
            var karmaCost = Math.floor(enemy.getKarma() / 2);
            var encounterMessage = [
                enemyName[LANG_ENG] + TXT_DANGER_ENCOUNTER_1[LANG_ENG] + karmaCost + TXT_COMMON_ENCOUNTER_2[LANG_ENG],
                enemyName[LANG_RUS] + TXT_DANGER_ENCOUNTER_1[LANG_RUS] + karmaCost + TXT_COMMON_ENCOUNTER_2[LANG_RUS]
            ];
            encounterSequence.addAction(procureDisplayCenteredMessageAction(WW_SMALL, encounterMessage, true)
                .addChoice(TXT_COMMON_ENCOUNTER_CHOICE_FIGHT)
                .addChoice(TXT_COMMON_ENCOUNTER_CHOICE_AVOID));
            encounterSequence.addAction(procureCodeFragmentAction(function () {
                triggered = true;
                if (eventChoice == 0) {
                    encounterSequence.addAction(procureInitiateBattleAction(enemy));
                } else {
                    var avoidMessage = [
                        TXT_COMMON_ENCOUNTER_3[LANG_ENG] + karmaCost + TXT_KARMA_COST[LANG_ENG],
                        TXT_COMMON_ENCOUNTER_3[LANG_RUS] + karmaCost + TXT_KARMA_COST[LANG_RUS]
                    ];
                    encounterSequence.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL,  avoidMessage, true));
                    encounterSequence.addAction(procureCodeFragmentAction(function () {
                        hero.expendKarma(karmaCost);
                    }));
                    encounterSequence.addAction(procureResumeAction());
                }
            }));
            registerObject(GUI_EVENT, encounterSequence);
        });
        return enemyObject;
    });
    return encounterType;
}

/* BATTLE GAUGE ARTIFACTS */

function getAbsoluteArtifactPosition(position) {
    return (W / 2) - 10 + position;
}

function getStandardEnemyOffset(skill) {
    return enemy.getRightmostCooldown() + skill.getLeftCooldown() - getAbsoluteArtifactPosition(0);
}

function acquireAttributeAdjustmentArtifact(position, leftWidth, rightWidth, weakColor, strongColor,
                                            attribute, minPower, maxPower, fluctuation, hidden) {
    var attributeAdjustmentArtifact = new BattleGaugeArtifact(position, leftWidth, rightWidth);
    if (hidden) {
        attributeAdjustmentArtifact.leftCooldown = 0;
        attributeAdjustmentArtifact.rightCooldown = 0;
    }
    attributeAdjustmentArtifact.defineGetEffect(function (position, character) {
        var power;
        if (battleFrame % 50 == 0) {
            attributeAdjustmentArtifact.fluctuation = (2 * fluctuation * Math.random() - fluctuation);
        } else {
            attributeAdjustmentArtifact.fluctuation += (fluctuation * Math.random() / 3 - fluctuation / 6);
        }
        if (attributeAdjustmentArtifact.fluctuation > fluctuation) {
            attributeAdjustmentArtifact.fluctuation = fluctuation;
        } else if (attributeAdjustmentArtifact.fluctuation < -fluctuation) {
            attributeAdjustmentArtifact.fluctuation = -fluctuation;
        }
        if (position >= BGL_LEFT) {
            if ((leftWidth != 0) && (position - BGL_LEFT <= leftWidth)) {
                power = minPower + attributeAdjustmentArtifact.fluctuation
                    + (maxPower - minPower) * (1 - (position - BGL_LEFT) / leftWidth);
            } else {
                power = 1;
            }
        } else {
            if ((rightWidth != 0) && (BGL_LEFT - position <= rightWidth)) {
                power = minPower + attributeAdjustmentArtifact.fluctuation
                    + (maxPower - minPower) * (1 - (BGL_LEFT - position) / rightWidth);
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
                                      attribute, minPower, maxPower, fluctuation, hidden) {
    var gradualChangeArtifact = new BattleGaugeArtifact(position, leftWidth, rightWidth);
    if (hidden) {
        gradualChangeArtifact.leftCooldown = 0;
        gradualChangeArtifact.rightCooldown = 0;
    }
    gradualChangeArtifact.defineGetEffect(function (position, character) {
        var power;
        if (position >= BGL_LEFT) {
            if ((leftWidth != 0) && (position - BGL_LEFT <= leftWidth)) {
                power = minPower + (2 * fluctuation * Math.random() - fluctuation)
                    + (maxPower - minPower) * (1 - (position - BGL_LEFT) / leftWidth);
            } else {
                power = 0;
            }
        } else {
            if ((rightWidth != 0) && (BGL_LEFT - position <= rightWidth)) {
                power = minPower + (2 * fluctuation * Math.random() - fluctuation)
                    + (maxPower - minPower) * (1 - (BGL_LEFT - position) / rightWidth);
            } else {
                power = 0;
            }
        }
        power = power * BATTLEGAUGE_SHIFT_BASIS * getGlobalBattleGaugeShiftCoefficient() / (leftWidth + rightWidth);
        switch (attribute) {
            case ATTR_HP:
                if (power >= 0) {
                    character.restoreHp(power);
                } else {
                    character.expendHp(-power);
                }
                break;
            case ATTR_SP:
                if (power >= 0) {
                    character.restoreSp(power);
                } else {
                    character.expendSp(-power);
                }
                break;
            case ATTR_AP:
                if (power >= 0) {
                    character.restoreAp(power);
                } else {
                    character.expendAp(-power);
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

function acquireImpactArtifact(position, image, power, evadable, apGain, inflictData) {
    var impactArtifact = new BattleGaugeArtifact(position, 10, 10);
    impactArtifact.defineGetEffect(function (position, character) {
        if (position <= BGL_LEFT) {
            playBattleSfx(character, "sound/sfx/hit.ogg");
            character.strike(power, evadable, apGain, inflictData);
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

function acquireSelfInflictArtifact(position, cooldown, image, inflictData) {
    var selfInflictArtifact = new BattleGaugeArtifact(position, cooldown, cooldown);
    selfInflictArtifact.defineGetEffect(function (position, character) {
        if (position <= BGL_LEFT) {
            registerObject(GUI_COMMON, procureStatusTextAction(character, TEXT_COLOR_INK,
                [TXT_ACTIVATED[LANG_ENG] + inflictData.statusName[LANG_ENG],
                    TXT_ACTIVATED[LANG_RUS] + inflictData.statusName[LANG_RUS]]));
            character.inflict(inflictData.statusArtifacts);
            return true;
        } else {
            return false;
        }
    });
    if (image !== undefined) {
        selfInflictArtifact.defineDraw(function (position, character) {
            var topOffset = getBattleGaugeOffset(character);
            if ((position > BGL_LEFT) && (position < BGL_RIGHT)) {
                fc.beginPath();
                var imageToDraw = (image instanceof HTMLImageElement) ? image : image
                    [Math.floor((globalFrame % (20 * image.length - 1)) / 10) % image.length];
                fc.drawImage(imageToDraw, position - imageToDraw.width / 2, topOffset - imageToDraw.height / 2 + 20);
            }
        });
        selfInflictArtifact.defineSketch(function (position, character) {
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
    }
    return selfInflictArtifact;
}

function acquireTriggerArtifact(triggerFunction, position, cooldown, image) {
    var triggerArtifact = new BattleGaugeArtifact(position, cooldown, cooldown);
    triggerArtifact.defineGetEffect(function (position, character) {
        if (position <= BGL_LEFT) {
            triggerFunction();
            return true;
        } else {
            return false;
        }
    });
    if (image !== undefined) {
        triggerArtifact.defineDraw(function (position, character) {
            var topOffset = getBattleGaugeOffset(character);
            if ((position > BGL_LEFT) && (position < BGL_RIGHT)) {
                fc.beginPath();
                var imageToDraw = (image instanceof HTMLImageElement) ? image : image
                    [Math.floor((globalFrame % (20 * image.length - 1)) / 10) % image.length];
                fc.drawImage(imageToDraw, position - imageToDraw.width / 2, topOffset - imageToDraw.height / 2 + 20);
            }
        });
        triggerArtifact.defineSketch(function (position, character) {
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
    }
    return triggerArtifact;
}

function acquireKarmaArtifactSet(position, karmaGain, distance, count) {
    var karmaArtifactSet = [];
    for (var i = 0; i < count; i++) {
        var karmaArtifact = new BattleGaugeArtifact(position + distance * i, 0, 0);
        karmaArtifact.defineGetEffect(function (position, character) {
            if (position <= BGL_LEFT) {
                hero.addKarma(karmaGain);
                return true;
            } else {
                return false;
            }
        });
        karmaArtifactSet.push(karmaArtifact);
    }
    return karmaArtifactSet;
}

function acquireResponseArtifact(position, leftWidth, rightWidth, weakColor, strongColor, responseHandler, hidden) {
    var responseArtifact = new BattleGaugeArtifact(position, leftWidth, rightWidth);
    if (hidden) {
        responseArtifact.leftCooldown = 0;
        responseArtifact.rightCooldown = 0;
    }
    responseArtifact.defineGetEffect(function (position, character) {
        if (((position >= BGL_LEFT) && (leftWidth != 0) && (position - BGL_LEFT <= leftWidth))
            || ((position <= BGL_LEFT) && (rightWidth != 0) && (BGL_LEFT - position <= rightWidth))) {

            if (character == hero) {
                heroResponseHandlers.push(responseHandler);
            } else {
                enemyResponseHandlers.push(responseHandler);
            }
        }
        return position + rightWidth < BGL_LEFT;
    });
    if (!hidden) {
        responseArtifact.defineDraw(function (position, character) {
            var topOffset = getBattleGaugeOffset(character);
            drawLimitedGradient(position - leftWidth, topOffset, position, topOffset + BGL_HEIGHT,
                weakColor, strongColor
            );
            drawLimitedGradient(position, topOffset, position + rightWidth, topOffset + BGL_HEIGHT,
                strongColor, weakColor
            );
        });
        responseArtifact.defineSketch(function (position, character) {
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
    return responseArtifact;
}

function acquireEmptyArtifact(position, cooldown, image) {
    var emptyArtifact = new BattleGaugeArtifact(position, cooldown, cooldown);
    if (image !== undefined) {
        emptyArtifact.defineDraw(function (position, character) {
            var topOffset = getBattleGaugeOffset(character);
            if ((position > BGL_LEFT) && (position < BGL_RIGHT)) {
                fc.beginPath();
                var imageToDraw = (image instanceof HTMLImageElement) ? image : image
                    [Math.floor((globalFrame % (20 * image.length - 1)) / 10) % image.length];
                fc.drawImage(imageToDraw, position - imageToDraw.width / 2, topOffset - imageToDraw.height / 2 + 20);
            }
        });
        emptyArtifact.defineSketch(function (position, character) {
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
    }
    emptyArtifact.defineGetEffect(function (position) {
        return position < BGL_LEFT;
    });
    return emptyArtifact;
}

function acquireLabelArtifact(position, text) {
    var labelArtifact = new BattleGaugeArtifact(position, 0, 0);
    labelArtifact.defineDraw(function (position, character) {
        var topOffset = getBattleGaugeOffset(character);
        if ((position > BGL_LEFT) && (position < BGL_RIGHT)) {
            drawLabel(position, topOffset + 60, text);
        }
    });
    labelArtifact.defineGetEffect(function (position) {
        return position < BGL_LEFT;
    });
    return labelArtifact;
}