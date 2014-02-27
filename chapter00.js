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

var CH00_WEAPONSMITH_01 = [
    "Dominique enters the workshop of a local weaponsmith. Swords, axes and daggers lie around the place, begging to "
        + "be bought and swung in battle. But none of them interest Dominique, for Queen of Spades serves him well. "
        + " <br> <br> The smith still offers his services to repair and sharpen the weapon to provide a ",
    "Доминик заходит в мастерскую местного оружейника. Всюду лежат мечи, топоры и кинжалы, как будто желают, чтобы "
        + "их купили и использовали по назначению в битве. Но они неинтересны Доминику, ибо ему верно служит "
        + "Пиковая Дама. <br> <br> Кузнец тем не менее предлагает свои услуги по починке и заточке оружия, что даст "
];

var CH00_WEAPONSMITH_02 = [
    "% growth to attack. He also has some maginetic powder that temporary improves attack on sale. A special deal "
        + "awaits those who take up on both offers. So what do you say?",
    "%-ный прирост к атаке. У него также есть на продажу немного магинитной пыли, временно увеливающей атаку. "
        + "Особое предложение ожидает того, кто согласится на обе сделки. Что скажете?"
];

var CH00_WEAPONSMITH_03 = [
    "Dominique lets the smith take care of the Queen of Spades. When the work is done, it looks shines in the light.",
    "Доминик позволяет кузнецу позаботиться о Пиковой Даме. По окончании работы, она сверкает на свету."
];

var CH00_WEAPONSMITH_04 = [
    " <br> <br> Dominique also buys some maginetic powder enchanted with the rune CUT.",
    " <br> <br> Доминик также покупает немного магинитной пыли, зачарованной руной МЕЧ."
];

var CH00_WEAPONSMITH_05 = [
    "Dominique buys some maginetic powder enchanted with the rune CUT.",
    "Доминик покупает немного магинитной пыли, зачарованной руной МЕЧ."
];

var CH00_ARMORSMITH_01 = [
    "Dominique enters the workshop of a local armorsmith. Chainmails, helmets and shields are on display, begging to "
        + "be bought and donned to protect its owner in battle. But none of them interest Dominique, for his armor is "
        + "on an entirely different level of quality. "
        + " <br> <br> The smith still offers his services to repair and reinforce the armor to provide a ",
    "Доминик заходит в мастерскую местного кузнеца, изготавливающего доспехи. Напоказ выставлены кольчуги, шлемы и "
        + "щиты, ожидающие, когда их купят и позволят защищать хозяина. Но они неинтересны Доминику, ибо его доспехи "
        + "- это совершенно другой уровень качества."
        + " <br> <br> Кузнец тем не менее предлагает свои услуги по починке и усилению брони, что даст "
];

var CH00_ARMORSMITH_02 = [
    "% growth to defense. He also has some maginetic powder that temporary improves defense on sale. A special deal "
        + "awaits those who take up on both offers. So what do you say?",
    "%-ный прирост к защите. У него также есть на продажу немного магинитной пыли, временно увеливающей защиту. "
        + "Особое предложение ожидает того, кто согласится на обе сделки. Что скажете?"
];

var CH00_ARMORSMITH_03 = [
    "Dominique lets the smith take care of the white steel armor. When the work is done, it looks even brighter.",
    "Доминик позволяет кузнецу позаботиться о доспехах из белой стали. По окончании работы, они выглядят ещё ярче."
];

var CH00_ARMORSMITH_04 = [
    " <br> <br> Dominique also buys some maginetic powder enchanted with the rune PAD.",
    " <br> <br> Доминик также покупает немного магинитной пыли, зачарованной руной ЩИТ."
];

var CH00_ARMORSMITH_05 = [
    "Dominique buys some maginetic powder enchanted with the rune PAD.",
    "Доминик покупает немного магинитной пыли, зачарованной руной ЩИТ."
];

var CH00_DOJO_01 = [
    "Dominique stands before one of many training halls around these parts. The doorkeeper greets him with a bow and "
        + "seeing that he knows his way around in a fight, invites him to train with the adepts. Being admitted "
        + "into an inner circle of a fighting guild should not be taken lightly, for it takes a toll on the karma. "
        + " <br> <br> Training with these adepts will grant Dominique a ",
    "Доминик стоит перед одним из многих тренировочных залов этих мест. Дверник приветствует его поклоном и, видя, "
        + "что он не новичок в бою, приглашает потренироваться с адептами. Допуск ко внутреннему кругу "
        + "бойцовской гильдии - серьёзный шаг, который скажется на карме."
        + " <br> <br> Тренировка с этими адептами даст Доминику "
];

var CH00_AGIDOJO_02 = [
    "% growth to agility. They also have a stash of muscleflex they use in the training, and they are willing to "
        + "share. It's probably better to take up on both offers but there is a limit to anyone's hospitality. "
        + "So what do you say?",
    "%-ный прирост к ловкости. У них также есть запас мышцегиба, который они используют в тренировках и которым они "
        + "готовы поделиться. Наверное, имеет смысл принять оба предложения, но всякому гостеприимству есть предел. "
        + "Что скажете?"
];

var CH00_DOJO_03 = [
    "Dominique trains hard with the adepts and stays late to discuss certain spiritual aspects of martial arts. "
        + "He is even allowed to stay overnight, so, while he barely rests, his mind absorbs many new things.",
    "Доминик усердно тренируется с адептами и остаётся, чтобы обсудить отдельные духовные аспекты боевых "
        + "искусств. Ему даже позволено остаться на ночь, так что хотя он едва ли отдыхает, его разум впитывает много "
        + "нового."
];

var CH00_AGIDOJO_04 = [
    " <br> <br> Dominique also takes some muscleflex along with the secrets of this place.",
    " <br> <br> Доминик также берёт немного мышцегиба в нагрузку к секретам этого места."
];

var CH00_AGIDOJO_05 = [
    "Dominique takes some muscleflex instead of training. Well, that's also a way.",
    "Доминик берёт немного мышцегиба вместо того, чтобы тренироваться. Ну, что ж, это тоже вариант."
];

var CH00_RFXDOJO_02 = [
    "% growth to reflexes. They also have a stash of wedgewing they brew into beverages, and they are willing to "
        + "share. It's probably better to take up on both offers but there is a limit to anyone's hospitality. "
        + "So what do you say?",
    "%-ный прирост к реакции. У них также есть запас клинокрыла, из которого они делают напитки и которым они "
        + "готовы поделиться. Наверное, имеет смысл принять оба предложения, но всякому гостеприимству есть предел. "
        + "Что скажете?"
];

var CH00_RFXDOJO_04 = [
    " <br> <br> Dominique also takes some wedgewing along with the secrets of this place.",
    " <br> <br> Доминик также берёт немного клинокрыла в нагрузку к секретам этого места."
];

var CH00_RFXDOJO_05 = [
    "Dominique takes some wedgewing instead of training. Well, that's also a way.",
    "Доминик берёт немного клинокрыла вместо того, чтобы тренироваться. Ну, что ж, это тоже вариант."
];

/* LANDSCAPE */

var LSC_PROLOGUE = 1;
function createPrologueLandscape() {
    var prologueLandscape = createTitleLandscape();
    prologueLandscape.addObjectType(describeChroniclersPavilionType());
    prologueLandscape.addObjectType(describeHotspringType());
    prologueLandscape.addObjectType(describeInnType());
    prologueLandscape.addObjectType(describeTrainerType());
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
                        pavillionSequenceAnswered.addAction(procureCodeFragmentAction(saveGame));
                        pavillionSequenceAnswered.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL, CH00_CHRONICLER_03, true));
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

function describeTrainerType() {
    var trainerType = new ObjectType(0.1);
    trainerType.defineGenerateObject(function (path, position) {
        var attribute = Math.floor(Math.random() * 4);
        var trainer = new FieldObject(path, position, 50,
            attribute < 2 ? getImageResource("imgObjSmith") : getImageResource("imgObjDojo"));
        trainer.defineTrigger(function () {
            var trainerSequence = new Sequence();
            trainerSequence.addAction(procureStopAction());
            var growth = (70 + Math.floor(Math.random() * 50)) / 100;
            var karmaCostIncrease = Math.floor(hero.getAttribute(attribute) * growth * (1.6 + Math.random() * 0.8));
            var karmaCostItem = Math.floor(20 * (0.8 + Math.random() * 0.4));
            growth = growth / getHeroStrengthScale(HS_BASE, HS_CH00);

            var messageGreet;
            var messageTaken1;
            var messageTaken2;
            var messageTakenBoth;
            var itemId;
            switch (attribute) {
                case ATTR_ATTACK:
                    messageGreet = [
                        CH00_WEAPONSMITH_01[LANG_ENG] + (growth * 100).toFixed(0) + CH00_WEAPONSMITH_02[LANG_ENG],
                        CH00_WEAPONSMITH_01[LANG_RUS] + (growth * 100).toFixed(0) + CH00_WEAPONSMITH_02[LANG_RUS]
                    ];
                    messageTaken1 = CH00_WEAPONSMITH_03;
                    messageTaken2 = CH00_WEAPONSMITH_05;
                    messageTakenBoth = [
                        CH00_WEAPONSMITH_03[LANG_ENG] + CH00_WEAPONSMITH_04[LANG_ENG],
                        CH00_WEAPONSMITH_03[LANG_RUS] + CH00_WEAPONSMITH_04[LANG_RUS]
                    ];
                    itemId = ITM_ATKUP1;
                    break;
                case ATTR_DEFENSE:
                    messageGreet = [
                        CH00_ARMORSMITH_01[LANG_ENG] + (growth * 100).toFixed(0) + CH00_ARMORSMITH_02[LANG_ENG],
                        CH00_ARMORSMITH_01[LANG_RUS] + (growth * 100).toFixed(0) + CH00_ARMORSMITH_02[LANG_RUS]
                    ];
                    messageTaken1 = CH00_ARMORSMITH_03;
                    messageTaken2 = CH00_ARMORSMITH_05;
                    messageTakenBoth = [
                        CH00_ARMORSMITH_03[LANG_ENG] + CH00_ARMORSMITH_04[LANG_ENG],
                        CH00_ARMORSMITH_03[LANG_RUS] + CH00_ARMORSMITH_04[LANG_RUS]
                    ];
                    itemId = ITM_DEFUP1;
                    break;
                case ATTR_AGILITY:
                    messageGreet = [
                        CH00_DOJO_01[LANG_ENG] + (growth * 100).toFixed(0) + CH00_AGIDOJO_02[LANG_ENG],
                        CH00_DOJO_01[LANG_RUS] + (growth * 100).toFixed(0) + CH00_AGIDOJO_02[LANG_RUS]
                    ];
                    messageTaken1 = CH00_DOJO_03;
                    messageTaken2 = CH00_AGIDOJO_05;
                    messageTakenBoth = [
                        CH00_DOJO_03[LANG_ENG] + CH00_AGIDOJO_04[LANG_ENG],
                        CH00_DOJO_03[LANG_RUS] + CH00_AGIDOJO_04[LANG_RUS]
                    ];
                    itemId = ITM_AGIUP1;
                    break;
                case ATTR_REFLEXES:
                    messageGreet = [
                        CH00_DOJO_01[LANG_ENG] + (growth * 100).toFixed(0) + CH00_RFXDOJO_02[LANG_ENG],
                        CH00_DOJO_01[LANG_RUS] + (growth * 100).toFixed(0) + CH00_RFXDOJO_02[LANG_RUS]
                    ];
                    messageTaken1 = CH00_DOJO_03;
                    messageTaken2 = CH00_RFXDOJO_05;
                    messageTakenBoth = [
                        CH00_DOJO_03[LANG_ENG] + CH00_RFXDOJO_04[LANG_ENG],
                        CH00_DOJO_03[LANG_RUS] + CH00_RFXDOJO_04[LANG_RUS]
                    ];
                    itemId = ITM_RFXUP1;
                    break;
            }

            var answer1 = [
                TXT_INCREASE_ATTR[LANG_ENG] + attributeIdToName(attribute, CASE_ACCUSATIVE)[LANG_ENG].toLowerCase()
                    + TXT_BY[LANG_ENG] + growth.toFixed(2) + TXT_FOR[LANG_ENG] + karmaCostIncrease
                    + TXT_KARMA_COST[LANG_ENG],
                TXT_INCREASE_ATTR[LANG_RUS] + attributeIdToName(attribute, CASE_ACCUSATIVE)[LANG_RUS].toLowerCase()
                    + TXT_BY[LANG_RUS] + growth.toFixed(2) + TXT_FOR[LANG_RUS] + karmaCostIncrease
                    + TXT_KARMA_COST[LANG_RUS]
            ];
            var answer2 = [
                TXT_BUY[LANG_ENG] + obtainItem(itemId).name[LANG_ENG].toLowerCase() + " (x"
                    + obtainItem(itemId).defaultCharges + ")" + TXT_FOR[LANG_ENG] + karmaCostItem
                    + TXT_KARMA_COST[LANG_ENG],
                TXT_BUY[LANG_RUS] + obtainItem(itemId).name[LANG_RUS].toLowerCase() + " (x"
                    + obtainItem(itemId).defaultCharges + ")" + TXT_FOR[LANG_RUS] + karmaCostItem
                    + TXT_KARMA_COST[LANG_RUS]
            ];
            var answer3 = [
                TXT_GET_BOTH[LANG_ENG] + TXT_FOR[LANG_ENG] + Math.floor((karmaCostIncrease + karmaCostItem) * 0.75)
                    + TXT_KARMA_COST[LANG_ENG],
                TXT_GET_BOTH[LANG_RUS] + TXT_FOR[LANG_RUS] + Math.floor((karmaCostIncrease + karmaCostItem) * 0.75)
                    + TXT_KARMA_COST[LANG_RUS]
            ];
            var answer4 = [TXT_NOTHING[LANG_ENG] + ".", TXT_NOTHING[LANG_RUS] + "."];

            trainerSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM, messageGreet, true)
                .addChoice(answer1).addChoice(answer2).addChoice(answer3).addChoice(answer4));
            trainerSequence.addAction(procureCodeFragmentAction(function () {
                var trainerSequenceAnswered = new Sequence();
                switch (eventChoice) {
                    case 0:
                        trainerSequenceAnswered.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL, messageTaken1, true));
                        trainerSequenceAnswered.addAction(procureCodeFragmentAction(function () {
                            hero.increaseAttribute(attribute, growth);
                            hero.expendKarma(karmaCostIncrease);
                        }));
                        break;
                    case 1:
                        trainerSequenceAnswered.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL, messageTaken2, true));
                        trainerSequenceAnswered.addAction(procureCodeFragmentAction(function () {
                            hero.obtainItem(itemId);
                            hero.expendKarma(karmaCostItem);
                        }));
                        break;
                    case 2:
                        trainerSequenceAnswered.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL, messageTakenBoth, true));
                        trainerSequenceAnswered.addAction(procureCodeFragmentAction(function () {
                            hero.increaseAttribute(attribute, growth);
                            hero.obtainItem(itemId);
                            hero.expendKarma(Math.floor((karmaCostIncrease + karmaCostItem) * 0.75));
                        }));
                        break;
                    default:
                        trainerSequenceAnswered.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL, TXT_SUIT_YOURSELF, true));
                }
                trainerSequenceAnswered.addAction(procureResumeAction());
                registerObject(GUI_EVENT, trainerSequenceAnswered);
            }));
            registerObject(GUI_EVENT, trainerSequence);
        });
        return trainer;
    });
    return trainerType;
}

function describeBanditType() {
    return describeCommonEncounter(0.1, ["Bandit", "Разбойник"],
        getImageResource("imgEnemyBandit1Stand"), getImageResource("imgEnemyBandit1Attack"),
        enlistBandit, HS_BASE, HS_CH00);
}

function describeWolfType() {
    return describeCommonEncounter(0.1, ["Wolf", "Волк"],
        getImageResource("imgEnemyWolf1Stand"), getImageResource("imgEnemyWolf1Attack"),
        enlistWolf, HS_BASE, HS_CH00);
}

function describeWaspType() {
    return describeCommonEncounter(0.1, ["Wasp", "Оса"],
        getImageResource("imgEnemyWasp1Stand"), getImageResource("imgEnemyWasp1Attack"),
        enlistWasp, HS_BASE, HS_CH00);
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