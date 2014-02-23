/**
 * Created by Etherfly on 01.02.14.
 *
 * This file contains objects specific to or introduced in the prologue.
 */

/* DATA STORAGE */

var chroniclersNames = [
    ["Hilbert", "Benjamin", "Aristarchus", "Arnold", "Sebastian", "Anselm", "Algernon"],
    ["Гильберт", "Бенджамин", "Аристарх", "Арнольд", "Себастьян", "Ансельм", "Алжернон"]
];

var CH00_PHASE = 0;                     // phase
var CH00_TUTORIAL_FIELD = 1;            // tutorial message: basic field control
var CH00_TUTORIAL_SAVING = 2;           // tutorial message: saving game
var CH00_TUTORIAL_BATTLE = 3;           // tutorial message: combat basics
var CH00_TUTORIAL_MINI_BOSS = 4;        // tutorial message: mini bosses
var CH00_LIBRARY_VISIT = 5;             // library visit count
var CH00_BANDIT_RINGLEADER_BEATEN = 6;  // bandit ringleader beaten flag

/* TEXT DATA */

var CH00_TITLE = ["Prologue: Hero's Karma <br> ", "Пролог: Карма Героя <br> "];

var CH00_CHRONICLER_01 = [
    "Dominique comes upon a tranquil pavilion where chronicler ",
    "Доминик встречает на своём пути укромную беседку, где летописец "
];
var CH00_CHRONICLER_02 = [
    " records everything that happens around and anything that he hears of. Such is the way of the Order "
        + "of the Holy Stylus - gather every piece of information this world has to offer. "
        + "He may even write down Dominique's story, so that it is not forgotten in the ages to come. <br> <br> "
        + "Would you like to save?",
    " записывает всё, что происходит вокруг, и о чём он слышит. Таков путь Ордена Святого Стилуса - "
        + "собирать песчинки любой информации, которую только может предложить этот мир. "
        + "Он может записать даже историю Доминика, дабы её не забыли будущие поколения. <br> <br> "
        + "Желаете сохраниться?"
];
var CH00_CHRONICLER_03 = [
    "Chronicler successfully writes down Dominique's story.",
    "Летописец успешно записывает историю Доминика."
];

var CH00_CHRONICLER_04 = [
    "Chronicler tries to write down Dominique's story, but the quill falls out of his hands and the ink gets spilt "
        + "on the floor. ",
    "Летописец пытается записать историю Доминика, но перо выпадает у него из рук, а чернила проливаются на пол. "
];

var CH00_CHRONICLER_05 = [
    " takes this as a bad omen and refuses to serve Dominique. It seems some greater force doesn't want "
        + "his story to live on.",
    " принимает это за недобрый знак и отказывается обслуживать Доминика. Похоже, какая-то высшая сила не хочет, "
        + "чтобы история Доминика жила."
];

var CH00_INN_01 = [
    "A bustling inn appears along the way. Enticing smells and flavors catch Dominique's attention and his mouth "
        + "waters at the thought of having a grand feast. <br> <br> Wild dreams aside, having a meal and resting "
        + "at this inn will restore ",
    "На пути возник шумный трактир. Манящие запахи привлекают внимание Доминика, и при мысли о грандиозном пире у "
        + "него текут слюнки. <br> <br> Шутки в сторону, пища и отдых в этом трактире восстановят "
];
var CH00_INN_02 = [" However, it will cost Dominique ", " Однако это обойдётся Доминику в "];
var CH00_INN_03 = ["Would you like to stop here?", "Желаете остановиться?"];
var CH00_INN_04_1 = [
    "After a disgusting meal and a horrible rest Dominique, nonetheless, feels a little better.",
    "После омерзительной трапезы и ужасного отдыха Доминик, тем не менее, чувствует себя немного лучше."
];
var CH00_INN_04_2 = [
    "After a so-so meal and a fairly bad rest Dominique, nonetheless, feels better.",
    "После так себе трапезы и довольно плохого отдыха Доминик, тем не менее, чувствует себя лучше."
];
var CH00_INN_04_3 = [
    "After a tasty meal and a good rest Dominique feels better.",
    "После приятной трапезы и хорошего отдыха Доминик чувствует себя лучше."
];
var CH00_INN_04_4 = [
    "After a great meal and a top grade rest Dominique feels much better.",
    "После чудесной трапезы и отдыха высшего класса Доминик чувствует себя гораздо лучше."
];
var CH00_INN_04_5 = [
    "After a divine meal and an ancient deity quality rest Dominique feels excellent!",
    "После райской трапезы и отдыха, достойного древнего божества, Доминик чувствует себя превосходно!"
];

var CH00_HOTSPRING_01 = [
    "What luck! A small resort around a hotspring is just what Dominique's weathered body needs. "
        + "Bathing in the hotspring's nutritious waters will restore ",
    "Какая удача! Маленький курорт возле горячего источника - то, что нужно для усталого тела Доминика. "
        + "Искупавшись в целебных водах источника, он мгновенно восстановит "
];
var CH00_HOTSPRING_02 = [" in no time, but for a price of ", ", однако не бесплатно, а за "];
var CH00_HOTSPRING_03 = ["Would you like to take a bath?", "Желаете искупаться?"];
var CH00_HOTSPRING_04_1 = [
    "The water of this hotspring is just common water with barely any healing properties. "
        + "Still, it's refreshing to take a bath once in a while.",
    "Вода этого источника самая обычная, и у неё едва ли есть какие-либо целительные свойства. "
        + "Тем не менее, помыться всё равно не помешало."
];
var CH00_HOTSPRING_04_2 = [
    "The water of this hotspring slightly invigorates Dominique's body. It's not what he expected, but it will do.",
    "Вода этого источника придаёт Доминику немного сил. Не совсем то, что он ожидал, но и это неплохо."
];
var CH00_HOTSPRING_04_3 = [
    "The water of this hotspring definitely has curative properties, "
        + "as merely pouring it at the wounds makes them heal times faster.",
    "Вода этого источника определённо обладает целебными свойствами, "
        + "ибо даже простое омовение ран в разы ускоряет их исцеление."
];
var CH00_HOTSPRING_04_4 = [
    "The water of this hotspring revitalizes Dominique and fills him with will to live and "
        + "the desire to make this world a better place.",
    "Вода этого источника буквально оживляет Доминика и наполняет его волей к жизни и желанием делать этот мир лучше."
];
var CH00_HOTSPRING_04_5 = [
    "The water of this hotspring must be the legendary reviving waters of Etheria, for when Dominique walkes into it, "
        + "his wounds immediately close and all worries leave his mind.",
    "В этом источнике, должно быть, легендарные воскрешающие воды Этерии, ибо лишь только Доминик заходит в них, "
        + "его раны тут же закрываются, и все тревоги покидают его разум."
];

/* LANDSCAPE */

var LSC_PROLOGUE = 1;
function createPrologueLandscape() {
    var prologueLandscape = createTitleLandscape();
    prologueLandscape.addObjectType(describeChroniclersPavilionType());
    prologueLandscape.addObjectType(describeHotspringType());
    prologueLandscape.addObjectType(describeInnType());
    prologueLandscape.addObjectType(describeBanditType());
    prologueLandscape.addObjectType(describeWolfType());
    prologueLandscape.addObjectType(describeWaspType());
    return prologueLandscape;
}

/* SEQUENCES */

function procureStartPrologueSequence() {
    var startPrologue = new Sequence();
    startPrologue.addAction(procureMaskAction());
    startPrologue.addAction(procureDisplayFreeTextAction(500, 200, W - 1100, CH00_TITLE, true));
    startPrologue.addAction(procureDisplayFreeTextAction(200, 200, W - 400, TXT_INTRO_1, true));
    startPrologue.addAction(procureDisplayFreeTextAction(200, 200, W - 400, TXT_INTRO_2, true));
    startPrologue.addAction(procureDisplayFreeTextAction(200, 200, W - 400, TXT_INTRO_3, true));
    startPrologue.addAction(procureDisplayMessageAction((W - 1100) / 2, 200, 1100, 350,
        TXT_INTRO_4, false));
    startPrologue.addAction(procureCodeFragmentAction(function () {

        // creating hero, enabling GUI
        clearObjectType("Hero");
        hero = new Hero();
        registerObject(OBJECTS_MID, hero);

        loadLandscape(LSC_PROLOGUE);
        landscape.resetTerrain();
        registerObject(GUI_EVENT, landscape);
        setControlMode(CM_FIELD);
    }));
    startPrologue.addAction(procureResumeAction());
    startPrologue.addAction(procureUnmaskAction());
    startPrologue.addAction(procureCodeFragmentAction(function () {
        displayGui = true;
    }));
    return startPrologue;
}

/* FIELD OBJECTS */

function describeChroniclersPavilionType() {
    var chroniclersPavilionType = new ObjectType(0.1);
    chroniclersPavilionType.defineGenerateObject(function (path, position) {
        var chroniclersPavilion = new FieldObject(path, position, 50, getImageResource("imgObjArbor"));
        chroniclersPavilion.defineTrigger(function () {
            var pavilionSequence = new Sequence();
            pavilionSequence.addAction(procureStopAction());
            var nameId = Math.floor(Math.random() * chroniclersNames[0].length);
            var chroniclersMessage = [
                CH00_CHRONICLER_01[LANG_ENG] + chroniclersNames[LANG_ENG][nameId] + CH00_CHRONICLER_02[LANG_ENG],
                CH00_CHRONICLER_01[LANG_RUS] + chroniclersNames[LANG_RUS][nameId] + CH00_CHRONICLER_02[LANG_RUS]
            ];
            pavilionSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM,
                chroniclersMessage, true).addChoice(TXT_YES).addChoice(TXT_NO));
            pavilionSequence.addAction(procureCodeFragmentAction(function () {
                var pavillionSequenceAnswered = new Sequence();
                if (eventChoice == 0) {
                    if (hero.karma >= 0) {
                        pavillionSequenceAnswered.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL, CH00_CHRONICLER_03, true));
                        pavillionSequenceAnswered.addAction(procureCodeFragmentAction(saveGame));
                    } else {
                        chroniclersMessage = [
                            CH00_CHRONICLER_04[LANG_ENG] + chroniclersNames[LANG_ENG][nameId]
                                + CH00_CHRONICLER_05[LANG_ENG],
                            CH00_CHRONICLER_04[LANG_RUS] + chroniclersNames[LANG_RUS][nameId]
                                + CH00_CHRONICLER_05[LANG_RUS]
                        ];
                        pavillionSequenceAnswered.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL, chroniclersMessage, true));
                    }
                } else {
                    pavillionSequenceAnswered.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL, TXT_SUIT_YOURSELF, true));
                }
                pavillionSequenceAnswered.addAction(procureResumeAction());
                registerObject(GUI_EVENT, pavillionSequenceAnswered);
            }));
            registerObject(GUI_EVENT, pavilionSequence);
        });
        return chroniclersPavilion;
    });
    return chroniclersPavilionType;
}

function describeHotspringType() {
    var hotspringType = new ObjectType(0.1);
    hotspringType.defineGenerateObject(function (path, position) {
        var hotspring = new FieldObject(path, position, 60, getImageResource("imgObjHotspring"));
        hotspring.defineTrigger(function () {
            var hotspringSequence = new Sequence();
            hotspringSequence.addAction(procureStopAction());
            var restoreAmount = 15 + Math.floor(Math.random() * (15 + 5 * gst[CH00][CH00_PHASE]));
            var karmaCost = Math.floor(hero.attrMaxHp * (0.5 + Math.random() * 0.4) * (restoreAmount / 100));
            var hotspringMessage = [
                CH00_HOTSPRING_01[LANG_ENG] + (restoreAmount * 2) + "% " + TXT_HP[LANG_ENG] + TXT_AND[LANG_ENG]
                    + restoreAmount + "% " + TXT_SP[LANG_ENG] + CH00_HOTSPRING_02[LANG_ENG]
                    + karmaCost + TXT_KARMA_COST[LANG_ENG] + " " + CH00_HOTSPRING_03[LANG_ENG],
                CH00_HOTSPRING_01[LANG_RUS] + (restoreAmount * 2) + "% " + TXT_HP[LANG_RUS] + TXT_AND[LANG_RUS]
                    + restoreAmount + "% " + TXT_SP[LANG_RUS] + CH00_HOTSPRING_02[LANG_RUS]
                    + karmaCost + TXT_KARMA_COST[LANG_RUS] + " " + CH00_HOTSPRING_03[LANG_RUS]
            ];
            hotspringSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM, hotspringMessage, true)
                .addChoice(TXT_YES).addChoice(TXT_NO));
            hotspringSequence.addAction(procureCodeFragmentAction(function () {
                var hotspringSequenceAnswered = new Sequence();
                if (eventChoice == 0) {
                    var qualityMessage;
                    if (restoreAmount < 20) {
                        qualityMessage = CH00_HOTSPRING_04_1;
                    } else if (restoreAmount < 25) {
                        qualityMessage = CH00_HOTSPRING_04_2;
                    } else if (restoreAmount < 35) {
                        qualityMessage = CH00_HOTSPRING_04_3;
                    } else if (restoreAmount < 45) {
                        qualityMessage = CH00_HOTSPRING_04_4;
                    } else {
                        qualityMessage = CH00_HOTSPRING_04_5;
                    }
                    hotspringSequenceAnswered.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL, qualityMessage, true));
                    hotspringSequenceAnswered.addAction(procureCodeFragmentAction(function () {
                        hero.restoreHp(hero.attrMaxHp * (restoreAmount * 2 / 100));
                        hero.restoreSp(hero.attrMaxSp * (restoreAmount / 100));
                        hero.expendKarma(karmaCost);
                    }));
                } else {
                    hotspringSequenceAnswered.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL, TXT_SUIT_YOURSELF, true));
                }
                hotspringSequenceAnswered.addAction(procureResumeAction());
                registerObject(GUI_EVENT, hotspringSequenceAnswered);
            }));
            registerObject(GUI_EVENT, hotspringSequence);
        });
        return hotspring;
    });
    return hotspringType;
}

function describeInnType() {
    var innType = new ObjectType(0.1);
    innType.defineGenerateObject(function (path, position) {
        var inn = new FieldObject(path, position, 50, getImageResource("imgObjInn"));
        inn.defineTrigger(function () {
            var innSequence = new Sequence();
            innSequence.addAction(procureStopAction());
            var restoreAmount = 15 + Math.floor(Math.random() * (15 + 5 * gst[CH00][CH00_PHASE]));
            var karmaCost = Math.floor(hero.attrMaxHp * (0.5 + Math.random() * 0.4) * (restoreAmount / 100));
            var innMessage = [
                CH00_INN_01[LANG_ENG] + restoreAmount + "% " + TXT_HP[LANG_ENG] + TXT_AND[LANG_ENG]
                    + (restoreAmount * 2) + "% " + TXT_SP[LANG_ENG] + "." + CH00_INN_02[LANG_ENG]
                    + karmaCost + TXT_KARMA_COST[LANG_ENG] + " " + CH00_INN_03[LANG_ENG],
                CH00_INN_01[LANG_RUS] + restoreAmount + "% " + TXT_HP[LANG_RUS] + TXT_AND[LANG_RUS]
                    + (restoreAmount * 2) + "% " + TXT_SP[LANG_RUS] + "." + CH00_INN_02[LANG_RUS]
                    + karmaCost + TXT_KARMA_COST[LANG_RUS] + " " + CH00_INN_03[LANG_RUS]
            ];
            innSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM, innMessage, true)
                .addChoice(TXT_YES).addChoice(TXT_NO));
            innSequence.addAction(procureCodeFragmentAction(function () {
                var innSequenceAnswered = new Sequence();
                if (eventChoice == 0) {
                    var qualityMessage;
                    if (restoreAmount < 20) {
                        qualityMessage = CH00_INN_04_1;
                    } else if (restoreAmount < 25) {
                        qualityMessage = CH00_INN_04_2;
                    } else if (restoreAmount < 35) {
                        qualityMessage = CH00_INN_04_3;
                    } else if (restoreAmount < 45) {
                        qualityMessage = CH00_INN_04_4;
                    } else {
                        qualityMessage = CH00_INN_04_5;
                    }
                    innSequenceAnswered.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL, qualityMessage, true));
                    innSequenceAnswered.addAction(procureCodeFragmentAction(function () {
                        hero.restoreHp(hero.attrMaxHp * (restoreAmount / 100));
                        hero.restoreSp(hero.attrMaxSp * (restoreAmount * 2 / 100));
                        hero.expendKarma(karmaCost);
                    }));
                } else {
                    innSequenceAnswered.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL, TXT_SUIT_YOURSELF, true));
                }
                innSequenceAnswered.addAction(procureResumeAction());
                registerObject(GUI_EVENT, innSequenceAnswered);
            }));
            registerObject(GUI_EVENT, innSequence);
        });
        return inn;
    });
    return innType;
}

function describeBanditType() {
    return describeCommonEncounter(0.1, ["Bandit", "Разбойник"],
        getImageResource("imgEnemyBandit1Stand"), getImageResource("imgEnemyBandit1Attack"),
        enlistBandit, 22500, 140000);
}

function describeWolfType() {
    return describeCommonEncounter(0.1, ["Wolf", "Волк"],
        getImageResource("imgEnemyWolf1Stand"), getImageResource("imgEnemyWolf1Attack"),
        enlistWolf, 22500, 140000);
}

function describeWaspType() {
    return describeCommonEncounter(0.1, ["Wasp", "Оса"],
        getImageResource("imgEnemyWasp1Stand"), getImageResource("imgEnemyWasp1Attack"),
        enlistWasp, 22500, 140000);
}

/* ENEMIES */

function enlistBandit(startingHeroStrength, maxHeroStrength, animationObject) {
    var strScale = getHeroStrengthScale(startingHeroStrength, maxHeroStrength);
    var bandit = new Enemy(10 * strScale, 20 * strScale, 10 * strScale, 10 * strScale, 120 * strScale, animationObject);
    var attackSkill = gainAttackSkill();
    var defendSkill = gainDefendSkill();
    var opening = gainOpeningSkill(40, 0.5);
    bandit.defineBehave(function (character, battleFrame) {
        if (battleFrame == 0) {
            character.useSkill(gainOpenerSkill(200), 0);
            behaviorFluctuation = 1;
        } else if (character.getRightmostCooldown() < getAbsoluteArtifactPosition(200)) {
            if (behaviorFluctuation == 1) {
                character.useSkill(defendSkill, character.getRightmostCooldown() + defendSkill.getLeftCooldown()
                    + 30 +  Math.floor(70 * Math.random()) - getAbsoluteArtifactPosition(0));
                behaviorFluctuation++;
            } else if (behaviorFluctuation == 2) {
                character.useSkill(attackSkill, character.getRightmostCooldown() + attackSkill.getLeftCooldown()
                    + 30 + Math.floor(70 * Math.random()) - getAbsoluteArtifactPosition(0));
                behaviorFluctuation++;
            } else if (behaviorFluctuation == 3) {
                character.useSkill(opening, character.getRightmostCooldown() + opening.getLeftCooldown()
                    + 30 + Math.floor(70 * Math.random()) - getAbsoluteArtifactPosition(0));
                behaviorFluctuation = 1;
            }
        }
    });
    return bandit;
}

function enlistWolf(startingHeroStrength, maxHeroStrength, animationObject) {
    var strScale = getHeroStrengthScale(startingHeroStrength, maxHeroStrength);
    var wolf = new Enemy(7 * strScale, 14 * strScale, 12 * strScale, 10 * strScale, 90 * strScale, animationObject);
    var attackSkill = gainAttackSkill();
    var defendSkill = gainDefendSkill();
    var fumbledAttackSkill = gainFumbledAttackSkill(40, 0.3);
    wolf.defineBehave(function (character, battleFrame) {
        if (battleFrame == 0) {
            character.useSkill(gainOpenerSkill(100), 0);
            behaviorFluctuation = 1;
        } else if (character.getRightmostCooldown() < getAbsoluteArtifactPosition(200)) {
            if (behaviorFluctuation == 1) {
                character.useSkill(attackSkill, character.getRightmostCooldown() + attackSkill.getLeftCooldown()
                    + 30 +  Math.floor(60 * Math.random()) - getAbsoluteArtifactPosition(0));
                behaviorFluctuation += 1 + Math.floor(Math.random() * 2);
            } else if (behaviorFluctuation == 2) {
                character.useSkill(defendSkill, character.getRightmostCooldown() + defendSkill.getLeftCooldown()
                    + 30 + Math.floor(30 * Math.random()) - getAbsoluteArtifactPosition(0));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 3) {
                character.useSkill(defendSkill, character.getRightmostCooldown() + defendSkill.getLeftCooldown()
                    + 30 + Math.floor(50 * Math.random()) - getAbsoluteArtifactPosition(0));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation >= 4) {
                character.useSkill(fumbledAttackSkill, character.getRightmostCooldown() + fumbledAttackSkill.getLeftCooldown()
                    + 30 + Math.floor(50 * Math.random()) - getAbsoluteArtifactPosition(0));
                behaviorFluctuation = 1;
            }
        }
    });
    return wolf;
}

function enlistWasp(startingHeroStrength, maxHeroStrength, animationObject) {
    var strScale = getHeroStrengthScale(startingHeroStrength, maxHeroStrength);
    var wasp = new Enemy(7 * strScale, 14 * strScale, 12 * strScale, 10 * strScale, 90 * strScale, animationObject);
    var attackSkill = gainAttackSkill();
    var defendSkill = gainDefendSkill();
    var poisonStingSkill = gainPoisonStingSkill(40, 0.3);
    var thornsSkill = gainThornsSkill(1000, 0.1);
    wasp.defineBehave(function (character, battleFrame) {
        if (battleFrame == 0) {
            character.useSkill(gainOpenerSkill(100), 0);
            behaviorFluctuation = 1;
        } else if (character.getRightmostCooldown() < getAbsoluteArtifactPosition(200)) {
            if (behaviorFluctuation == 1) {
                character.useSkill(attackSkill, character.getRightmostCooldown() + attackSkill.getLeftCooldown()
                    + 30 +  Math.floor(60 * Math.random()) - getAbsoluteArtifactPosition(0));
                behaviorFluctuation += 1 + Math.floor(Math.random() * 2);
            } else if (behaviorFluctuation == 2) {
                character.useSkill(defendSkill, character.getRightmostCooldown() + defendSkill.getLeftCooldown()
                    + 30 + Math.floor(30 * Math.random()) - getAbsoluteArtifactPosition(0));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 3) {
                character.useSkill(defendSkill, character.getRightmostCooldown() + defendSkill.getLeftCooldown()
                    + 30 + Math.floor(50 * Math.random()) - getAbsoluteArtifactPosition(0));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 4) {
                character.useSkill(poisonStingSkill, character.getRightmostCooldown()
                    + poisonStingSkill.getLeftCooldown() + 30 + Math.floor(50 * Math.random())
                    - getAbsoluteArtifactPosition(0));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation >= 5) {
                character.useSkill(thornsSkill, character.getRightmostCooldown()
                    + thornsSkill.getLeftCooldown() + 500 + Math.floor(50 * Math.random())
                    - getAbsoluteArtifactPosition(0));
                behaviorFluctuation = 1;
            }
        }
    });
    return wasp;
}