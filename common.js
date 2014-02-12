/**
 * Created by Etherfly on 01.02.14.
 *
 * This file contains common objects pregenerations.
 */

/* LANDSCAPES */

function createTitleLandscape() {
    var titleLandscape = new Landscape("#007700", "#009900", "#00AA00", 600);
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
            mainMenuSequence.addAction(procureDisplayCenteredMessageAction(300, "", true)
                .addChoice(TXT_NEW_GAME).addChoice(TXT_LOAD_GAME));
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
            fc.font = "bold 18pt Courier New";
            fc.fillText(line, xPos + 30, yPos + 30 + 30 * lineCount);
        }

        var translatedText = (typeof text === "string") ? text : text[lang];

        var printedText = frame * 3 >= translatedText.length ? translatedText : translatedText.substr(0, frame * 3);

        var charLimitPerLine = Math.floor((width - 60) / 14 - 1);
        var lineCount = 0;
        var words = printedText.split(" ");
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

        if (displayCursor && (frame * 3 >= text.length)) {
            fc.beginPath();
            if (frame % 20 < 10) {
                fc.drawImage(CURSOR_NEXT, xPos + width / 2 - CURSOR_NEXT.width / 2, yPos + 15 + 30 * lineCount);
            } else {
                fc.drawImage(CURSOR_NEXT, xPos + width / 2 - CURSOR_NEXT.width / 2, yPos + 20 + 30 * lineCount);
            }
        }

        return keyPressed == KEY_ACTION;
    });
    return displayFreeTextAction;
}

function procureDisplayMessageAction(xPos, yPos, width, height, text, displayCursor) {
    var displayMessageAction = new Action();
    displayMessageAction.choices = [];
    displayMessageAction.addChoice = function (textAnswer) {
        displayMessageAction.choices.push(textAnswer);
        height += 30;
        return displayMessageAction;
    };
    displayMessageAction.definePlayFrame(function (frame) {
        function writeLine(line, lineCount, offset) {
            fc.beginPath();
            fc.fillStyle = "white";
            fc.font = "bold 18pt Courier New";
            fc.fillText(line, xPos + offset, yPos + 30 + 30 * lineCount);
        }

        if ((frame == 0) && (displayMessageAction.choices.length > 0)) {
            eventChoice = 0;
        }

        if (frame < 10) {
            drawTextbox(xPos, yPos, width * frame / 10, height * frame / 10);
        } else {
            drawTextbox(xPos, yPos, width, height);
            var charLimitPerLine = Math.floor((width - 60) / 14 - 1);
            var lineCount = 0;
            var words = (typeof text === "string") ? text.split(" ") : text[lang].split(" ");
            words.push("");
            var line = "";
            for (var i = 0; i < words.length; i++) {
                if ((line.length + words[i].length > charLimitPerLine) || (words[i] == "<br>") || (i == words.length - 1)) {
                    writeLine(line, lineCount, 30);
                    lineCount++;
                    line = "";
                }
                if (words[i].indexOf("<") == -1) {
                    line += words[i] + " ";
                }
            }

            if (displayMessageAction.choices.length > 0) {
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
                    writeLine(((typeof displayMessageAction.choices[i] === "string"))
                        ? displayMessageAction.choices[i] : displayMessageAction.choices[i][lang], lineCount, 60);
                    lineCount++;
                    if (i == eventChoice) {
                        fc.beginPath();
                        if (frame % 20 < 10) {
                            fc.drawImage(CURSOR_CHOICE, xPos + 35, yPos + 15 + 30 * (lineCount - 1));
                        } else {
                            fc.drawImage(CURSOR_CHOICE, xPos + 40, yPos + 15 + 30 * (lineCount - 1));
                        }
                    }
                }
            } else if (displayCursor) {
                fc.beginPath();
                if (frame % 20 < 10) {
                    fc.drawImage(CURSOR_NEXT, xPos + width / 2 - CURSOR_NEXT.width / 2, yPos + 15 + 30 * lineCount);
                } else {
                    fc.drawImage(CURSOR_NEXT, xPos + width / 2 - CURSOR_NEXT.width / 2, yPos + 20 + 30 * lineCount);
                }
            }

            return keyPressed == KEY_ACTION;
        }
        return false;
    });
    return displayMessageAction;
}

function procureDisplayCenteredMessageAction(width, text, displayCursor) {
    var charLimitPerLine = Math.floor((width - 60) / 14 - 1);
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
        (W - width) / 2, H / 2 - 100, width, 50 + 30 * lineCount, text, displayCursor);
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
                    fc.strokeRect(97, 72, 235, 16);
                }
                return frame > 50;
                break;
            case GFX_HERO_HPGAUGE_SHAKE:
                if (frame == 1) {
                    heroHpShake = 20;
                }
                if ((frame < 50) && (value != null)) {
                    fc.beginPath();
                    fc.fillStyle = color;
                    fc.font = "bold 14pt Courier New";
                    fc.fillText(value, 60, 70 - frame);
                }
                return frame > 50;
                break;
            case GFX_ENEMY_HPGAUGE_SHAKE:
                if (frame == 1) {
                    enemyHpShake = 20;
                }
                if ((frame < 50) && (value != null)) {
                    fc.beginPath();
                    fc.fillStyle = color;
                    fc.font = "bold 14pt Courier New";
                    fc.fillText(value, 60, 175 - frame);
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
            default:
                return true;
        }
    });
    return guiEffectAction;
}

function procureStopAction() {
    return procureCodeFragmentAction(function() {
        controlMode = CM_NONE;
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
        controlMode = CM_NONE;
        moving = false;
        var battleGuiAppearAction = new Action();
        battleGuiAppearAction.definePlayFrame(function (frame) {
            var imgGuiBattleGauges = getImageResource("imgBattleGauges");
            var x = (W - imgGuiBattleGauges.width) / 2;
            var y = frame * 8 - imgGuiBattleGauges.height;
            fc.beginPath();
            fc.drawImage(imgGuiBattleGauges, x, y);

            var scale = (frame * 16) >= (22 + imgGuiBattleGauges.height)
                ? 1 : (frame * 16) / (22 + imgGuiBattleGauges.height);

            var imgEnemyHpGauge = getImageResource("imgGuiEnemyHpGauge");
            x = -imgEnemyHpGauge.width + scale * (imgEnemyHpGauge.width + 40);
            fc.drawImage(imgEnemyHpGauge, x, 185);

            var lineCount = hero.skillSet.length;
            if (lineCount < 4) {
                lineCount = 4;
            }

            drawTextbox(W - 350, 54, 330 * scale, (50 + 30 * lineCount) * scale);

            if (scale == 1) {
                scale = (frame * 16) / (22 + imgGuiBattleGauges.height) - 1;
                fc.fillStyle = "#FF4444";
                fc.fillRect(99, 187, 231 * scale, 14);
            }

            if (y >= 22) {
                eventBattleEndSequence = finishedSequence;
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
            encounterSequence.addAction(procureDisplayCenteredMessageAction(WW_SMALL, encounterMessage, false)
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

/* SKILLS */

function acquireAttributeAdjustmentArtifact(position, leftWidth, rightWidth, weakColor, strongColor,
                                            attribute, minPower, maxPower) {
    var attributeAdjustmentArtifact = new BattleGaugeArtifact(position, leftWidth, rightWidth);
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
        }
        return position + rightWidth < BGL_LEFT;
    });
    attributeAdjustmentArtifact.defineDraw(function (position, character) {
        var topOffset = getBattleGaugeOffset(character);
        drawLimitedGradient(position - leftWidth, topOffset, position, topOffset + BGL_HEIGHT,
            weakColor, strongColor
        );
        drawLimitedGradient(position, topOffset, position + rightWidth, topOffset + BGL_HEIGHT,
            strongColor, weakColor
        );
    });
    attributeAdjustmentArtifact.defineSketch(function(position, character) {
        var topOffset = getBattleGaugeOffset(character);
        fc.beginPath();
        fc.rect(position - leftWidth, topOffset - 5, rightWidth + leftWidth, BGL_HEIGHT + 10);
        fc.lineWidth = 3;
        fc.strokeStyle = "black";
        fc.stroke();
        fc.lineWidth = 1;
        fc.moveTo(position - leftWidth, topOffset - 5);
        fc.lineTo(position - leftWidth, topOffset  + 164);
        fc.moveTo(position + rightWidth, topOffset - 5);
        fc.lineTo(position + rightWidth, topOffset  + 164);
        fc.stroke();
    });
    return attributeAdjustmentArtifact;
}

function acquireImpactArtifact(position, power) {
    var impactArtifact = new BattleGaugeArtifact(position, 10, 10);
    impactArtifact.defineGetEffect(function (position, character) {
        if (position <= BGL_LEFT) {
            character.strike(power);
            return true;
        } else {
            return false;
        }
    });
    impactArtifact.defineDraw(function (position, character) {
        var topOffset = getBattleGaugeOffset(character);
        if ((position > BGL_LEFT) && (position < BGL_RIGHT)) {
            var impactImage = getImageResource("imgBattleImpactIcon");
            fc.beginPath();
            fc.drawImage(impactImage, position - impactImage.width / 2, topOffset - impactImage.height / 2 + 20);
        }
    });
    impactArtifact.defineSketch(function (position, character) {
        var topOffset = getBattleGaugeOffset(character);
        var impactImage = getImageResource("imgBattleImpactIcon");
        fc.beginPath();
        fc.rect(position - impactImage.width / 2, topOffset - 8, impactImage.width, BGL_HEIGHT + 16);
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

function acquireEmptyArtifact(position, cooldown) {
    var emptyArtifact = new BattleGaugeArtifact(position, cooldown, cooldown);
    emptyArtifact.defineGetEffect(function (position) {
        return position < BGL_LEFT;
    });
    return emptyArtifact;
}

function getAbsoluteArtifactPosition(position) {
    return (W / 2) + position;
}

function obtainAttackSkill() {
    var attackSkill = new CombatSkill(["Attack", "Атаковать"],
        ["A standard strike. 100% attack power impact in the middle of a medium-sized guard down period.",
        "Обычный удар. Воздействие 100% силы атаки посреди средних размеров зоны пониженной защиты"], 10);
    attackSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                60, 60, BGL_COLOR, "#FF3C3C", ATTR_DEFENSE, 1, 0.3),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position), 1)
        ];
    });
    return attackSkill;
}

function obtainDefendSkill() {
    var defendSkill = new CombatSkill(["Defend", "Защищаться"],
        ["A medium-sized guard up period.", "Средних размеров зона повышенной защиты"], 5);
    defendSkill.defineGetArtifacts(function (position) {
        return [acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
            60, 60, BGL_COLOR, "#3C78FF", ATTR_DEFENSE, 1, 1.6)]
    });
    return defendSkill;
}

function obtainOpenerSkill(cooldown) {
    // A dummy skill that sets the initial cooldown for the enemy, so that it doesn't spam attacks right away
    var openerSkill = new CombatSkill("Opener",
        "A great way to start a battle! Unless you are Dominique.", 0);
    openerSkill.defineGetArtifacts(function (position) {
        return [acquireEmptyArtifact(getAbsoluteArtifactPosition(position), cooldown)];
    });
    return openerSkill;
}

function obtainOpeningSkill(width, vulnerability) {
    var openingSkill = new CombatSkill("Opening",
        "Not so much of a skill. More like a lack thereof.", 5);
    openingSkill.defineGetArtifacts(function (position) {
        return [acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
            width / 2, width / 2, BGL_COLOR, "#EE8C8C", ATTR_DEFENSE, 1, vulnerability)];
    });
    return openingSkill;
}

/* ENEMIES */