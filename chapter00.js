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

var houseInhabitants = [
    ["An elderly couple", "A lonely young hogman", "A hogwoman with three sons", "A rugged wolf"],
    ["Пожилая пара", "Одинокий молодой кабан", "Кабаниха с трёмя сыновьями", "Суровый волк"]
];

var houseTasks = [
    ["killing some rats in the basement (Sallinger gives a disapproving look), okay, asking them to leave",
        "doing laundry and picking out poison thorns from clothes", "cooking a meal for an important guest",
        "repairing the roof"],
    ["убив несколько крыс в подвале (Сэллинджер бросает осуждающий взгляд), ладно, попросив их уйти",
        "занявшись стиркой и вытаскиванием ядовитых шипов из одежды", "приготовив ужин для важного гостя",
        "починив крышу"]
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

var CH00_HOUSE_REST_01 = [
    " greets Dominique by the house and invites inside to share a meal. Being a rat rider certainly has some "
        + "advantages, especially in a land where bandits roam. <br> <br> Staying here will restore some HP or SP "
        + "for free. Would you like to stay?",
    " приветствует Доминика возле дома и приглашает внутрь, чтобы отобедать. В том, что Доминик - крысиный всадник, "
        + "определённо есть преимущества, особенно когда в округе рыщут бандиты. <br> <br> Если он останется, он "
        + "восстановит немного ОЖ или ОВ. Желаете остановиться?"
];

var CH00_HOUSE_REST_02 = [
    "Dominique eats some home-cooked food, hears some everyday life stories and expresses sincere gratitude before "
        + "leaving.", "Доминик отведывает домашнюю еду, выслушивает несколько бытовых историй и выражает искреннюю "
        + "благодарность, прежде чем покинуть этот дом."
];

var CH00_HOUSE_WORK_01 = [
    " greets Dominique and after some prompt introductions asks him to help around the house by ",
    " приветствует Доминика и после короткого знакомства просит его помочь по дому, "
];

var CH00_HOUSE_WORK_02 = [
    ". Not the most fitting task for a rat rider, but occasional housework may ease the spirit and helping another "
        + "never hurts. Participating in this will expend up to ", ". Не самое подходящее задание для крысиного "
        + "всадника, но работа по дому время от времени облегчает груз на душе, да и помощь другому - хорошее дело. "
        + "Поучаствовав в этом, Доминик может потратить до "
];

var CH00_HOUSE_WORK_03 = [" and net up to ", " и заработать до "];

var CH00_HOUSE_WORK_04 = [" <br> <br> Would you like to work?", " <br> <br> Желаете поработать?"];

var CH00_HOUSE_WORK_05 = [
    "After some time the work is done, and everyone is happy with the result, Dominique not the least. Although he is "
        + "tired, after all.", "По прошествии некоторого времени работа сделана, и все довольны результатом, в том "
        + "числе и сам Доминик. Хотя в итоге он всё-таки устал."
];

var CH00_HOUSE_WORK_ANSWER1 = ["Exert to the fullest", "Выложиться по полной"];
var CH00_HOUSE_WORK_ANSWER2 = ["Work at a forgiving pace", "Работать в щадящем темпе"];

var CH00_TRADING_POST_01 = [
    "A trading post appears by the road. Dominique takes a moment to look what's on sale today. Among many things "
        + "one item catches his attention: ",
    "Вдоль дороги возник торговый пост. Доминик уделяет немного времени просмотру того, что сегодня продаётся. "
        + "Среди разных вещиц одна привлекает его внимание: "
];

var CH00_TRADING_POST_02 =
    [". To take it with him, he will have to pay ", ". Чтобы взять её с собой, придётся заплатить "];

var CH00_TRADING_POST_03 = [" <br> <br> Would you like to trade?", " <br> <br> Желаете поторговать?"];

var CH00_TRADING_POST_04 = ["Dominique takes the item with him, offering his gratitude and karma as payment.",
    "Доминик берёт товар с собой, отдавая свою благодарность и карму в качестве платы."];

var CH00_COMMON_CHEST_01 = [
    "Dominique spots a dirty iron-banded chest. Would you like to open it?",
    "Доминик замечает грязный обитый железными пластинами сундук. Желаете открыть его?"
];

var CH00_COMMON_CHEST_02_1 = [
    "Nothing is inside, except for a few dried leaves.", "Внутри пусто, за исключением нескольких высохших листьев."
];

var CH00_COMMON_CHEST_02_2 = [
    "It seems there were spirits magically imprisoned inside. Opening the chest set them free and earned Dominique ",
    "Похоже, внутри были магически заточены духи. Открыв сундук, Доминик освободил их и обрёл "
];

var CH00_COMMON_CHEST_02_3 = [
    "As Dominique opens the chest, a cloud of dust bursts from it! He starts feeling funny.",
    "Когда Доминик открыл сундук, из него вырвалось облако пыли! Доминику становится нехорошо."
];

var CH00_DESTROYED_HOUSE = [
    "Dominique and Sallinger discover a house that was practically brought apart by something large and vicious. "
        + "This definitely seems like the start of a hero's job! <br> <br> "
        + "Dominique picks up a suspicious scale amidst the ruins.",
    "Доминик и Сэллинджер обнаруживают дом, который был практически разобран на куски чем-то большим и жестоким. "
        + "Это определённо выглядит как начало работёнки для героя! <br> <br> "
        + "Доминик находит среди развалин подозрительную чешуйку."
];

var CH00_MILESTONE_01 = [
    "This milestone points towards Dominique's goal, but more dangers probably await further down this path. "
        + "<br> <br> Would you like to advance?",
    "Этот мильный камень указывает в направлении цели Доминика, однако на этом пути его, вероятно, ждёт больше "
        + "опасностей. <br> <br> Желаете ли вы проследовать в этом направлении?"
];

var CH00_MILESTONE_02 = [
    "Dominique chooses to advance. The landscape around him begins to change.",
    "Доминик решает идти вперёд. Местность вокруг него начинает меняться."
];

/* LANDSCAPE */

var LSC_PROLOGUE = 1;
function createPrologueLandscape() {
    var prologueLandscape = createTitleLandscape();
    prologueLandscape.defineActualize(function () {
        this.clearObjectTypes();
        this.addObjectType(describeChroniclersPavilionType(0.1));
        this.addObjectType(describeHotspringType(0.1));
        this.addObjectType(describeInnType(0.1));
        this.addObjectType(describeHouseRestType(0.1));
        this.addObjectType(describeHouseWorkType(0.1));
        this.addObjectType(describeTradingPostType(0.1));
        this.addObjectType(describeCommonChestType(0.1));
        this.addObjectType(describeTrainerType(0.07));
        if (gst[CH00][CH00_PHASE] == 1) {
            this.addObjectType(describeBanditType(0.15));
            this.addObjectType(describeWolfType(0.15));
            this.addObjectType(describeDestroyedHouseType(0.1));
        } else if (gst[CH00][CH00_PHASE] == 2) {
            this.addObjectType(describeBanditType(0.15));
            this.addObjectType(describeWolfType(0.15));
            this.addObjectType(describeMilestoneType(0.1));
        } else if (gst[CH00][CH00_PHASE] == 3) {
            this.addObjectType(describeBanditType(0.15));
            this.addObjectType(describeWolfType(0.15));
            this.addObjectType(describeBrigandType(0.1));
            this.addObjectType(describeWaspType(0.1));
            this.addObjectType(describeMilestoneType(0.1));
        } else if (gst[CH00][CH00_PHASE] == 4) {
            this.addObjectType(describeBanditType(0.15));
            this.addObjectType(describeWolfType(0.15));
            this.addObjectType(describeBrigandType(0.15));
            this.addObjectType(describeWaspType(0.15));
            this.addObjectType(describeMilestoneType(0.1));
        } else if (gst[CH00][CH00_PHASE] == 5) {
            this.addObjectType(describeBanditType(0.1));
            this.addObjectType(describeWolfType(0.1));
            this.addObjectType(describeBrigandType(0.15));
            this.addObjectType(describeWaspType(0.15));
            this.addObjectType(describeRedWolfType(0.1));
            this.addObjectType(describePoisonWaspType(0.1));
            this.addObjectType(describeArmadilloKnightType(0.1));
            this.addObjectType(describeBanditRingleaderType(0.05));
            this.addObjectType(describeArmadilloVityazType(0.05));
            this.addObjectType(describeGreenSerpentType(0.1));
        }
    });
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
    startPrologue.addAction(procureCodeFragmentAction(function () {
        registerObject(GUI_EVENT, procureDisplayCenteredMessageAction(WW_SMALL,
            ["Display tutorial messages?", "Отображать обучающие сообщения?"], true).addChoice(TXT_YES).addChoice(TXT_NO));
    }));
    startPrologue.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
        ["And here we are, at last. This is where all we have learned up until now will be put to the test. "
            + "How do you feel, Dominique? Do you need a refresher on heroics basics?",
            "Вот мы и прибыли, наконец. Здесь всё, чему мы научились до этого момента, будет проверено на практике. "
                + "Как себя чувствуешь, Доминик? Тебе нужно напомнить основы геройского ремесла?"]));
    startPrologue.addAction(procureCodeFragmentAction(function () {
        if (eventChoice == 1) {
            gst[CH00][CH00_TUTORIAL_FIELD] = 2;
            gst[CH00][CH00_TUTORIAL_SAVING] = 1;
            gst[CH00][CH00_TUTORIAL_BATTLE] = 2;
            gst[CH00][CH00_TUTORIAL_MINI_BOSS] = 1;
        }
    }));
    startPrologue.addAction(procureCodeFragmentAction(function () {

        // creating hero, enabling GUI
        clearObjectType("Hero");
        hero = new Hero();
        registerObject(OBJECTS_MID, hero);

        gst[CH00][CH00_PHASE] = 1;

        loadLandscape(LSC_PROLOGUE);
        landscape.resetTerrain();
        registerObject(GUI_EVENT, landscape);
        setControlMode(CM_FIELD);
    }));
    startPrologue.addAction(procureResumeAction());
    startPrologue.addAction(procureUnmaskAction());
    startPrologue.addAction(procureCodeFragmentAction(function () {
        displayGui = true;
        if (gst[CH00][CH00_TUTORIAL_FIELD] < 1) {
            startPrologue.addAction(procureStopAction());
            startPrologue.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["Alright. First things first, we should discuss movement around the field.",
                    "Ну, что ж. Перво-наперво, нам следует обсудить перемещение."]));
            startPrologue.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["I have decided, Sallinger, that we are never to go back. We move only forward towards our destiny. "
                    + "What's left behind should stay behind unless we happen across it again.",
                    "Я решил, Сэллинджер, что мы никогда не будем идти назад. Мы движемся только вперёд, навстречу нашей судьбе. "
                        + "Что позади - то позади, если, конечно, наш путь не приведёт нас обратно."]));
            startPrologue.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["Err, right. That and the fact that your wayfinding skills are lacking. "
                    + "So, the only immediate choice of movement we can make is balancing across three paths, "
                    + "conventionally named the far, the middle and the near.",
                    "Эмм, верно. Это и тот факт, что твои навыки ориентирования оставляют желать лучшего. "
                        + "Итак, единственный прямой выбор направления для нас - это балансирование между тремя тропами, "
                        + "условно называемыми дальней, средней и ближней."]));
            startPrologue.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["To travel towards the farther path, press the 'W' key or the 'Up' key. To travel towards the nearer path, press the 'S' key or the 'Down' key. "
                    + "But be cautious: such movement expends your stamina, so too much of it and you will get tired very quickly.",
                    "Чтобы путешествовать дальше, следует нажать 'W' или 'Вверх'. Чтобы путешествовать ближе, следует нажать 'S' или 'Вниз'. "
                        + "Но будь осторожен: такие перемещения тратят твою выносливость, так что если будешь много петлять, быстро устанешь."]));
            startPrologue.addAction(procureResumeAction());
        }
    }));
    return startPrologue;
}

/* FIELD OBJECTS */

function describeChroniclersPavilionType(chance) {
    var chroniclersPavilionType = new ObjectType(chance);
    chroniclersPavilionType.defineGenerateObject(function (path, position) {
        var chroniclersPavilion = new FieldObject(path, position, 50, getImageResource("imgObjArbor"));
        chroniclersPavilion.defineTrigger(function () {
            var pavilionSequence = new Sequence();
            pavilionSequence.addAction(procureStopAction());
            var nameId = Math.floor(Math.random() * chroniclersNames[LANG_ENG].length);
            var chroniclersMessage = [
                CH00_CHRONICLER_01[LANG_ENG] + chroniclersNames[LANG_ENG][nameId] + CH00_CHRONICLER_02[LANG_ENG],
                CH00_CHRONICLER_01[LANG_RUS] + chroniclersNames[LANG_RUS][nameId] + CH00_CHRONICLER_02[LANG_RUS]
            ];
            pavilionSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM,
                chroniclersMessage, true).addChoice(TXT_YES).addChoice(TXT_NO));
            pavilionSequence.addAction(procureCodeFragmentAction(function () {
                if (eventChoice == 0) {
                    if (hero.karma >= 0) {
                        pavilionSequence.addAction(procureCodeFragmentAction(saveGame));
                        pavilionSequence.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL, CH00_CHRONICLER_03, true));
                    } else {
                        chroniclersMessage = [
                            CH00_CHRONICLER_04[LANG_ENG] + chroniclersNames[LANG_ENG][nameId]
                                + CH00_CHRONICLER_05[LANG_ENG],
                            CH00_CHRONICLER_04[LANG_RUS] + chroniclersNames[LANG_RUS][nameId]
                                + CH00_CHRONICLER_05[LANG_RUS]
                        ];
                        pavilionSequence.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL, chroniclersMessage, true));
                    }
                } else {
                    pavilionSequence.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL, TXT_SUIT_YOURSELF, true));
                }
                pavilionSequence.addAction(procureResumeAction());
            }));
            registerObject(GUI_EVENT, pavilionSequence);
        });
        return chroniclersPavilion;
    });
    return chroniclersPavilionType;
}

function describeHotspringType(chance) {
    var hotspringType = new ObjectType(chance);
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
                    hotspringSequence.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL, qualityMessage, true));
                    hotspringSequence.addAction(procureCodeFragmentAction(function () {
                        hero.restoreHp(hero.attrMaxHp * (restoreAmount * 2 / 100));
                        hero.restoreSp(hero.attrMaxSp * (restoreAmount / 100));
                        hero.expendKarma(karmaCost);
                    }));
                } else {
                    hotspringSequence.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL, TXT_SUIT_YOURSELF, true));
                }
                hotspringSequence.addAction(procureResumeAction());
            }));
            registerObject(GUI_EVENT, hotspringSequence);
        });
        return hotspring;
    });
    return hotspringType;
}

function describeInnType(chance) {
    var innType = new ObjectType(chance);
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
                    innSequence.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL, qualityMessage, true));
                    innSequence.addAction(procureCodeFragmentAction(function () {
                        hero.restoreHp(hero.attrMaxHp * (restoreAmount / 100));
                        hero.restoreSp(hero.attrMaxSp * (restoreAmount * 2 / 100));
                        hero.expendKarma(karmaCost);
                    }));
                } else {
                    innSequence.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL, TXT_SUIT_YOURSELF, true));
                }
                innSequence.addAction(procureResumeAction());
            }));
            registerObject(GUI_EVENT, innSequence);
        });
        return inn;
    });
    return innType;
}

function describeTrainerType(chance) {
    var trainerType = new ObjectType(chance);
    trainerType.defineGenerateObject(function (path, position) {
        var attribute = Math.floor(Math.random() * 4);
        var trainer = new FieldObject(path, position, 50,
            attribute < 2 ? getImageResource("imgObjSmith") : getImageResource("imgObjDojo"));
        trainer.defineTrigger(function () {
            var trainerSequence = new Sequence();
            trainerSequence.addAction(procureStopAction());
            var growth = (70 + Math.floor(Math.random() * 50)) / 100;
            var karmaCostIncrease = Math.floor(hero.getAttribute(attribute) * growth * (1.6 + Math.random() * 0.8));
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
            var karmaCostItem = Math.floor(obtainItem(itemId).karmaValue * (0.8 + Math.random() * 0.4));

            var answer1 = [
                TXT_INCREASE_ATTR[LANG_ENG] + attributeIdToName(attribute, CASE_ACCUSATIVE)[LANG_ENG].toLowerCase()
                    + TXT_BY[LANG_ENG] + growth.toFixed(2) + TXT_FOR[LANG_ENG] + karmaCostIncrease
                    + TXT_KARMA_COST[LANG_ENG],
                TXT_INCREASE_ATTR[LANG_RUS] + attributeIdToName(attribute, CASE_ACCUSATIVE)[LANG_RUS].toLowerCase()
                    + TXT_BY[LANG_RUS] + growth.toFixed(2) + TXT_FOR[LANG_RUS] + karmaCostIncrease
                    + TXT_KARMA_COST[LANG_RUS]
            ];
            var answer2 = [
                TXT_BUY[LANG_ENG] + obtainItem(itemId).name[LANG_ENG] + " (x" + obtainItem(itemId).defaultCharges + ")"
                    + TXT_FOR[LANG_ENG] + karmaCostItem + TXT_KARMA_COST[LANG_ENG],
                TXT_BUY[LANG_RUS] + obtainItem(itemId).name[LANG_RUS] + " (x" + obtainItem(itemId).defaultCharges + ")"
                    + TXT_FOR[LANG_RUS] + karmaCostItem + TXT_KARMA_COST[LANG_RUS]
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
                switch (eventChoice) {
                    case 0:
                        trainerSequence.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL, messageTaken1, true));
                        trainerSequence.addAction(procureCodeFragmentAction(function () {
                            hero.increaseAttribute(attribute, growth);
                            hero.expendKarma(karmaCostIncrease);
                        }));
                        break;
                    case 1:
                        trainerSequence.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL, messageTaken2, true));
                        trainerSequence.addAction(procureCodeFragmentAction(function () {
                            hero.obtainItem(itemId);
                            hero.expendKarma(karmaCostItem);
                        }));
                        break;
                    case 2:
                        trainerSequence.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL, messageTakenBoth, true));
                        trainerSequence.addAction(procureCodeFragmentAction(function () {
                            hero.increaseAttribute(attribute, growth);
                            hero.obtainItem(itemId);
                            hero.expendKarma(Math.floor((karmaCostIncrease + karmaCostItem) * 0.75));
                        }));
                        break;
                    default:
                        trainerSequence.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL, TXT_SUIT_YOURSELF, true));
                }
                trainerSequence.addAction(procureResumeAction());
            }));
            registerObject(GUI_EVENT, trainerSequence);
        });
        return trainer;
    });
    return trainerType;
}

function describeHouseRestType(chance) {
    var houseRestType = new ObjectType(chance);
    houseRestType.defineGenerateObject(function (path, position) {
        var houseRest = new FieldObject(path, position, 50,
            getRandomObject([getImageResource("imgObjHouse1"), getImageResource("imgObjHouse2")]));
        houseRest.defineTrigger(function () {
            var houseRestSequence = new Sequence();
            houseRestSequence.addAction(procureStopAction());
            var inhabitantId = Math.floor(Math.random() * houseInhabitants[LANG_ENG].length);
            var houseMessage = [
                houseInhabitants[LANG_ENG][inhabitantId] + CH00_HOUSE_REST_01[LANG_ENG],
                houseInhabitants[LANG_RUS][inhabitantId] + CH00_HOUSE_REST_01[LANG_RUS]
            ];

            houseRestSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM, houseMessage, true)
                .addChoice(TXT_YES).addChoice(TXT_NO));
            houseRestSequence.addAction(procureCodeFragmentAction(function () {
                if (eventChoice == 0) {
                    houseRestSequence.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL, CH00_HOUSE_REST_02, true));
                    houseRestSequence.addAction(procureCodeFragmentAction(function () {
                        var restoreAmount = 15 + Math.floor(Math.random() * 15);
                        if (Math.random() * 2 > 1) {
                            hero.restoreHp(hero.attrMaxHp * (restoreAmount / 100));
                        } else {
                            hero.restoreSp(hero.attrMaxSp * (restoreAmount / 100));
                        }
                    }));
                } else {
                    houseRestSequence.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL, TXT_SUIT_YOURSELF, true));
                }
                houseRestSequence.addAction(procureResumeAction());
            }));
            registerObject(GUI_EVENT, houseRestSequence);
        });
        return houseRest;
    });
    return houseRestType;
}

function describeHouseWorkType(chance) {
    var houseWorkType = new ObjectType(chance);
    houseWorkType.defineGenerateObject(function (path, position) {
        var houseWork = new FieldObject(path, position, 50,
            getRandomObject([getImageResource("imgObjHouse1"), getImageResource("imgObjHouse2")]));
        houseWork.defineTrigger(function () {
            var houseWorkSequence = new Sequence();
            houseWorkSequence.addAction(procureStopAction());
            var maxSpCostPercentage = 15 + Math.floor(Math.random() * 25);
            var maxSpCost = maxSpCostPercentage * hero.attrMaxSp / 100;
            var maxKarmaGain = Math.floor((0.9 + Math.random() * 0.3) * maxSpCostPercentage * hero.attrMaxSp / 100);
            var inhabitantId = Math.floor(Math.random() * houseInhabitants[LANG_ENG].length);
            var taskId = Math.floor(Math.random() * houseTasks[LANG_ENG].length);
            var houseMessage = [
                houseInhabitants[LANG_ENG][inhabitantId] + CH00_HOUSE_WORK_01[LANG_ENG] + houseTasks[LANG_ENG][taskId]
                    + CH00_HOUSE_WORK_02[LANG_ENG] + maxSpCostPercentage + "% " + TXT_SP[LANG_ENG]
                    + CH00_HOUSE_WORK_03[LANG_ENG] + maxKarmaGain + TXT_KARMA_COST[LANG_ENG]
                    + CH00_HOUSE_WORK_04[LANG_ENG],
                houseInhabitants[LANG_RUS][inhabitantId] + CH00_HOUSE_WORK_01[LANG_RUS] + houseTasks[LANG_RUS][taskId]
                    + CH00_HOUSE_WORK_02[LANG_RUS] + maxSpCostPercentage + "% " + TXT_SP[LANG_RUS]
                    + CH00_HOUSE_WORK_03[LANG_RUS] + maxKarmaGain + TXT_KARMA_COST[LANG_RUS]
                    + CH00_HOUSE_WORK_04[LANG_RUS]
            ];

            houseWorkSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM, houseMessage, true)
                .addChoice(CH00_HOUSE_WORK_ANSWER1).addChoice(CH00_HOUSE_WORK_ANSWER2).addChoice(TXT_NO));
            houseWorkSequence.addAction(procureCodeFragmentAction(function () {
                if (eventChoice == 0) {
                    houseWorkSequence.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL, CH00_HOUSE_WORK_05, true));
                    houseWorkSequence.addAction(procureCodeFragmentAction(function () {
                        var actualSpCost = maxSpCost;
                        if (hero.sp < actualSpCost) {
                            actualSpCost = hero.sp;
                        }
                        var karmaSpFactor = actualSpCost / maxSpCost;
                        hero.expendSp(actualSpCost);
                        hero.addKarma(Math.floor(maxKarmaGain * karmaSpFactor));
                    }));
                } else if (eventChoice == 1) {
                    houseWorkSequence.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL, CH00_HOUSE_WORK_05, true));
                    houseWorkSequence.addAction(procureCodeFragmentAction(function () {
                        var actualSpCost = maxSpCost / 2;
                        if (hero.sp < actualSpCost) {
                            actualSpCost = hero.sp;
                        }
                        var karmaSpFactor = actualSpCost / maxSpCost;
                        hero.expendSp(actualSpCost);
                        hero.addKarma(Math.floor(maxKarmaGain * karmaSpFactor));
                    }));
                } else {
                    houseWorkSequence.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL, TXT_SUIT_YOURSELF, true));
                }
                houseWorkSequence.addAction(procureResumeAction());
            }));
            registerObject(GUI_EVENT, houseWorkSequence);
        });
        return houseWork;
    });
    return houseWorkType;
}

function describeTradingPostType(chance) {
    var objectType = new ObjectType(chance);
    objectType.defineGenerateObject(function (path, position) {
        var object = new FieldObject(path, position, 50, getImageResource("imgObjTradingPost"));
        object.defineTrigger(function () {
            var objectSequence = new Sequence();
            objectSequence.addAction(procureStopAction());
            var itemId = getRandomObject([ITM_HPRES1, ITM_SPRES1, ITM_DMG1, ITM_GUARD1, ITM_TALISMAN1]);
            var karmaCost = Math.floor(obtainItem(itemId).karmaValue * (0.8 + Math.random() * 0.4));
            var message = [
                CH00_TRADING_POST_01[LANG_ENG] + obtainItem(itemId).name[LANG_ENG] + CH00_TRADING_POST_02[LANG_ENG]
                    + karmaCost + TXT_KARMA_COST[LANG_ENG] + CH00_TRADING_POST_03[LANG_ENG],
                CH00_TRADING_POST_01[LANG_RUS] + obtainItem(itemId).name[LANG_RUS] + CH00_TRADING_POST_02[LANG_RUS]
                    + karmaCost + TXT_KARMA_COST[LANG_RUS] + CH00_TRADING_POST_03[LANG_RUS]
            ];

            var answerTrade = [
                TXT_BUY[LANG_ENG] + obtainItem(itemId).name[LANG_ENG] + " (x" + obtainItem(itemId).defaultCharges + ")"
                    + TXT_FOR[LANG_ENG] + karmaCost + TXT_KARMA_COST[LANG_ENG],
                TXT_BUY[LANG_RUS] + obtainItem(itemId).name[LANG_RUS] + " (x" + obtainItem(itemId).defaultCharges + ")"
                    + TXT_FOR[LANG_RUS] + karmaCost + TXT_KARMA_COST[LANG_RUS]
            ];

            objectSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM, message, true)
                .addChoice(answerTrade).addChoice(TXT_NO));
            objectSequence.addAction(procureCodeFragmentAction(function () {
                if (eventChoice == 0) {
                    objectSequence.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL, CH00_TRADING_POST_04, true));
                    objectSequence.addAction(procureCodeFragmentAction(function () {
                        hero.obtainItem(itemId);
                        hero.expendKarma(karmaCost);
                    }));
                } else {
                    objectSequence.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL, TXT_SUIT_YOURSELF, true));
                }
                objectSequence.addAction(procureResumeAction());
            }));
            registerObject(GUI_EVENT, objectSequence);
        });
        return object;
    });
    return objectType;
}

function describeCommonChestType(chance) {
    var objectType = new ObjectType(chance);
    objectType.defineGenerateObject(function (path, position) {
        var object = new FieldObject(path, position, 50, getImageResource("imgObjChest1"));
        object.layerOffset = -2;
        object.defineTrigger(function () {
            var objectSequence = new Sequence();
            objectSequence.addAction(procureStopAction());
            objectSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM, CH00_COMMON_CHEST_01, true)
                .addChoice(TXT_YES).addChoice(TXT_NO));
            objectSequence.addAction(procureCodeFragmentAction(function () {
                if (eventChoice == 0) {
                    var contentRoll = Math.floor(Math.random() * 10);
                    switch (contentRoll) {
                        case 0:
                        case 1:
                        case 2:
                            var itemId = getRandomObject(
                                [ITM_HPRES1, ITM_SPRES1, ITM_DMG1, ITM_GUARD1, ITM_TALISMAN1]);
                            objectSequence.addAction(procureCodeFragmentAction(function () {
                                hero.obtainItem(itemId);
                            }));
                            break;
                        case 3:
                        case 4:
                        case 5:
                            var karmaGain = 11 + Math.floor(Math.random() * 20);
                            var karmaMessage = [
                                CH00_COMMON_CHEST_02_2[LANG_ENG] + karmaGain + TXT_KARMA_COST[LANG_ENG],
                                CH00_COMMON_CHEST_02_2[LANG_RUS] + karmaGain + TXT_KARMA_COST[LANG_RUS]
                            ];
                            objectSequence.addAction(
                                procureDisplayCenteredMessageAction(WW_SMALL, karmaMessage, true));
                            objectSequence.addAction(procureCodeFragmentAction(function () {
                                hero.addKarma(karmaGain);
                            }));
                            break;
                        case 6:
                            var effectRoll = Math.floor(Math.random() * 4);
                            var statusEffect;
                            if (effectRoll == 0) {
                                statusEffect = acquireWeakStatus(0, 800, 0.7 + Math.random() * 0.15);
                            } else if (effectRoll == 1) {
                                statusEffect = acquireFrailStatus(0, 800, 0.7 + Math.random() * 0.15);
                            } else if (effectRoll == 2) {
                                statusEffect = acquireNumbStatus(0, 800, 0.7 + Math.random() * 0.15);
                            } else if (effectRoll == 3) {
                                statusEffect = acquireCloudedStatus(0, 800, 0.7 + Math.random() * 0.15);
                            }
                            objectSequence.addAction(
                                procureDisplayCenteredMessageAction(WW_SMALL, CH00_COMMON_CHEST_02_3, true));
                            objectSequence.addAction(procureCodeFragmentAction(function () {
                                hero.inflict(statusEffect.statusArtifacts);
                                registerObject(GUI_COMMON, procureHeroTextAction("white",
                                    [
                                        TXT_INFLICTED[LANG_ENG] + statusEffect.statusName[LANG_ENG],
                                        TXT_INFLICTED[LANG_RUS] + statusEffect.statusName[LANG_RUS]
                                    ]));
                            }));
                            break;
                        default:
                            objectSequence.addAction(
                                procureDisplayCenteredMessageAction(WW_SMALL, CH00_COMMON_CHEST_02_1, true));
                            break;
                    }

                } else {
                    objectSequence.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL, TXT_SUIT_YOURSELF, true));
                }
                objectSequence.addAction(procureResumeAction());
            }));
            registerObject(GUI_EVENT, objectSequence);
        });
        return object;
    });
    return objectType;
}

function describeDestroyedHouseType(chance) {
    var objectType = new ObjectType(chance);
    objectType.singletonId = "singleton: ch00_phase01";
    objectType.defineGenerateObject(function (path, position) {
        var object = new FieldObject(path, position, 50, getImageResource("imgObjDestroyedHouse"));
        var triggered = false;
        registerObject(pathToObjectLayer(path), procureFloatingImageAction(object, getImageResource("imgQuestMark"),
            function () {
                return triggered;
            }));
        object.defineTrigger(function () {
            var objectSequence = new Sequence();
            objectSequence.addAction(procureStopAction());
            objectSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM, CH00_DESTROYED_HOUSE, true));
            objectSequence.addAction(procureCodeFragmentAction(function () {
                triggered = true;
                gst[CH00][CH00_PHASE]++;
                landscape.actualize();
            }));
            objectSequence.addAction(procureResumeAction());
            registerObject(GUI_EVENT, objectSequence);
        });
        return object;
    });
    return objectType;
}

function describeMilestoneType(chance) {
    var objectType = new ObjectType(chance);
    objectType.singletonId = "singleton: ch00_milestone";
    objectType.defineGenerateObject(function (path, position) {
        var object = new FieldObject(path, position, 50, getImageResource("imgObjMilestone"));
        var triggered = false;
        registerObject(pathToObjectLayer(path), procureFloatingImageAction(object, getImageResource("imgQuestMark"),
            function () {
                return triggered;
            }));
        object.defineTrigger(function () {
            var objectSequence = new Sequence();
            objectSequence.addAction(procureStopAction());
            objectSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM, CH00_MILESTONE_01, true)
                .addChoice(TXT_YES).addChoice(TXT_NO));
            objectSequence.addAction(procureCodeFragmentAction(function () {
                if (eventChoice == 0) {
                    triggered = true;
                    gst[CH00][CH00_PHASE]++;
                    landscape.actualize();
                    objectSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM, CH00_MILESTONE_02, true));
                }
                objectSequence.addAction(procureResumeAction());
            }));

            registerObject(GUI_EVENT, objectSequence);
        });
        return object;
    });
    return objectType;
}

function describeBanditType(chance) {
    return describeCommonEncounter(chance, ["Bandit", "Разбойник"],
        getImageResource("imgEnemyBandit1Stand"), getImageResource("imgEnemyBandit1Attack"),
        enlistBandit, HS_BASE, HS_CH00);
}

function describeBrigandType(chance) {
    return describeCommonEncounter(chance, ["Brigand", "Разбойник"],
        getImageResource("imgEnemyBandit2Stand"), getImageResource("imgEnemyBandit2Attack"),
        enlistBrigand, HS_BASE, HS_CH00);
}

function describeWolfType(chance) {
    return describeCommonEncounter(chance, ["Wolf", "Волк"],
        getImageResource("imgEnemyWolf1Stand"), getImageResource("imgEnemyWolf1Attack"),
        enlistWolf, HS_BASE, HS_CH00);
}

function describeRedWolfType(chance) {
    return describeCommonEncounter(chance, ["Red Wolf", "Бурый Волк"],
        getImageResource("imgEnemyWolf2Stand"), getImageResource("imgEnemyWolf2Attack"),
        enlistRedWolf, HS_BASE, HS_CH00);
}

function describeWaspType(chance) {
    return describeCommonEncounter(chance, ["Wasp", "Оса"],
        getImageResource("imgEnemyWasp1Stand"), getImageResource("imgEnemyWasp1Attack"),
        enlistWasp, HS_BASE, HS_CH00);
}

function describePoisonWaspType(chance) {
    return describeCommonEncounter(chance, ["Posion Wasp", "Ядовитая Оса"],
        getImageResource("imgEnemyWasp2Stand"), getImageResource("imgEnemyWasp2Attack"),
        enlistPoisonWasp, HS_BASE, HS_CH00);
}

function describeArmadilloKnightType(chance) {
    return describeCommonEncounter(chance, ["Armadillo Knight", "Броненосец-рыцарь"],
        getImageResource("imgEnemyArmadillo1Stand"), getImageResource("imgEnemyArmadillo1Attack"),
        enlistArmadilloKnight, HS_BASE, HS_CH00);
}

function describeBanditRingleaderType(chance) {
    return describeDangerEncounter(chance, ["Bandit Ringleader", "Главарь банды"],
        getImageResource("imgEnemyBandit3Stand"), getImageResource("imgEnemyBandit3Attack"),
        enlistBanditRingleader, HS_BASE, HS_CH00);
}

function describeArmadilloVityazType(chance) {
    return describeDangerEncounter(chance, ["Armadillo Vityaz", "Броненосец-витязь"],
        getImageResource("imgEnemyArmadillo2Stand"), getImageResource("imgEnemyArmadillo2Attack"),
        enlistArmadilloVityaz, HS_BASE, HS_CH00);
}

function describeGreenSerpentType(chance) {
    return describeDangerEncounter(chance, ["Green Serpent", "Зелёный змей"],
        getImageResource("imgEnemySerpent1Stand"), getImageResource("imgEnemySerpent1Attack"),
        enlistGreenSerpent, HS_BASE, HS_CH00);
}

/* ENEMIES */

function enlistTutorialBandit(startingHeroStrength, maxHeroStrength, animationObject) {
    var bandit = new Enemy(4, 15, 10, 8, 240, animationObject);
    var attackSkill = gainAttackSkill();
    var defendSkill = gainDefendSkill();
    var opening = gainOpeningSkill(40, 0.5);
    bandit.defineBehave(function (character, battleFrame) {
        var position;
        if (battleFrame == 0) {
            character.useSkill(gainOpenerSkill(200), 0);
            behaviorFluctuation = 1;
        } else if (character.getRightmostCooldown() < getAbsoluteArtifactPosition(200)) {
            if (behaviorFluctuation == 1) {
                position = getStandardEnemyOffset(defendSkill) + 30 +  Math.floor(70 * Math.random());
                character.useSkill(defendSkill, position);
                character.inflict([acquireLabelArtifact(getAbsoluteArtifactPosition(position),
                    ["Guard up", "Защита"])]);
                behaviorFluctuation++;
            } else if (behaviorFluctuation == 2) {
                character.useSkill(attackSkill, getStandardEnemyOffset(attackSkill)
                    + 30 + Math.floor(70 * Math.random()));
                behaviorFluctuation++;
            } else if (behaviorFluctuation == 3) {
                position = getStandardEnemyOffset(opening) + 30 + Math.floor(70 * Math.random());
                character.useSkill(opening, position);
                character.inflict([acquireLabelArtifact(getAbsoluteArtifactPosition(position),
                    ["Opening", "Уязвимость"])]);
                behaviorFluctuation = 1;
            }
        }
    });
    return bandit;
}

function enlistBandit(startingHeroStrength, maxHeroStrength, animationObject) {
    var strScale = getHeroStrengthScale(startingHeroStrength, maxHeroStrength);
    var bandit = new Enemy(10 * strScale, 15 * strScale, 10 * strScale, 8 * strScale, 120 * strScale, animationObject);
    var attackSkill = gainAttackSkill();
    var defendSkill = gainDefendSkill();
    var opening = gainOpeningSkill(40, 0.5);
    bandit.defineBehave(function (character, battleFrame) {
        var position;
        if (battleFrame == 0) {
            character.useSkill(gainOpenerSkill(200), 0);
            behaviorFluctuation = 1;
        } else if (character.getRightmostCooldown() < getAbsoluteArtifactPosition(200)) {
            if (behaviorFluctuation == 1) {
                position = getStandardEnemyOffset(defendSkill) + 30 +  Math.floor(70 * Math.random());
                character.useSkill(defendSkill, position);
                character.inflict([acquireLabelArtifact(getAbsoluteArtifactPosition(position),
                    ["Guard up", "Защита"])]);
                behaviorFluctuation++;
            } else if (behaviorFluctuation == 2) {
                character.useSkill(attackSkill, getStandardEnemyOffset(attackSkill)
                    + 30 + Math.floor(70 * Math.random()));
                behaviorFluctuation++;
            } else if (behaviorFluctuation == 3) {
                position = getStandardEnemyOffset(opening) + 30 + Math.floor(70 * Math.random());
                character.useSkill(opening, position);
                character.inflict([acquireLabelArtifact(getAbsoluteArtifactPosition(position),
                    ["Opening", "Уязвимость"])]);
                behaviorFluctuation = 1;
            }
        }
    });
    return bandit;
}

function enlistBrigand(startingHeroStrength, maxHeroStrength, animationObject) {
    var strScale = getHeroStrengthScale(startingHeroStrength, maxHeroStrength);
    var brigand = new Enemy(12 * strScale, 13 * strScale, 11 * strScale, 10 * strScale, 130 * strScale, animationObject);
    var powerAttack = gainPowerAttackSkill(200, 0.6, 1.7);
    var defenseSkill = gainEnemyDefenseSkill(300, 1.7);
    var attackSkill = gainAttackSkill();
    var fumbledAttackSkill = gainFumbledAttackSkill(50, 0.6);
    brigand.defineBehave(function (character, battleFrame) {
        if (battleFrame == 0) {
            character.useSkill(gainOpenerSkill(100), 0);
            behaviorFluctuation = 1;
        } else if (character.getRightmostCooldown() < getAbsoluteArtifactPosition(200)) {
            if (behaviorFluctuation == 1) {
                character.useSkill(powerAttack, getStandardEnemyOffset(powerAttack)
                    + 20 +  Math.floor(20 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 2) {
                character.useSkill(defenseSkill,  getStandardEnemyOffset(defenseSkill)
                    + 10 + Math.floor(20 * Math.random()));
                behaviorFluctuation += 1 + Math.floor(Math.random() * 2);
            } else if (behaviorFluctuation == 3) {
                character.useSkill(attackSkill,  getStandardEnemyOffset(attackSkill)
                    + 20 + Math.floor(10 * Math.random()));
                character.useSkill(fumbledAttackSkill,  getStandardEnemyOffset(fumbledAttackSkill)
                    + 20 + Math.floor(10 * Math.random()));
                behaviorFluctuation = 5;
            } else if (behaviorFluctuation == 4) {
                character.useSkill(fumbledAttackSkill,  getStandardEnemyOffset(fumbledAttackSkill)
                    + 20 + Math.floor(30 * Math.random()));
                character.useSkill(attackSkill,  getStandardEnemyOffset(attackSkill)
                    + 20 + Math.floor(10 * Math.random()));
                behaviorFluctuation = 5;
            } else if (behaviorFluctuation == 5) {
                character.useSkill(defenseSkill,  getStandardEnemyOffset(defenseSkill)
                    + 20 + Math.floor(40 * Math.random()));
                behaviorFluctuation = 1;
            }
        }
    });
    return brigand;
}

function enlistBanditRingleader(startingHeroStrength, maxHeroStrength, animationObject) {
    var strScale = getHeroStrengthScale(startingHeroStrength, maxHeroStrength);
    var banditRingleader = new Enemy(14 * strScale, 17 * strScale, 11 * strScale, 9 * strScale, 400 * strScale, animationObject);
    var powerAttack = gainPowerAttackSkill(200, 0.6, 1.9);
    var doubleStrike = gainDoubleStrikeSkill();
    var defenseSkill = gainEnemyDefenseSkill(200, 2.1);
    var attackSkill = gainAttackSkill();
    var jabSkill = gainJabSkill();
    var fumbledAttackSkill = gainFumbledAttackSkill(50, 0.6);
    banditRingleader.defineBehave(function (character, battleFrame) {
        if (battleFrame == 0) {
            character.useSkill(gainOpenerSkill(10), 0);
            behaviorFluctuation = 1;
        } else if (character.getRightmostCooldown() < getAbsoluteArtifactPosition(200)) {
            if (behaviorFluctuation == 1) {
                character.useSkill(defenseSkill, getStandardEnemyOffset(defenseSkill)
                    + 20 +  Math.floor(20 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 2) {
                character.useSkill(doubleStrike,  getStandardEnemyOffset(doubleStrike)
                    + 10 + Math.floor(40 * Math.random()));
                behaviorFluctuation += 1 + Math.floor(Math.random() * 2);
            } else if (behaviorFluctuation == 3) {
                character.useSkill(jabSkill,  getStandardEnemyOffset(jabSkill)
                    + 20 + Math.floor(10 * Math.random()));
                character.useSkill(attackSkill,  getStandardEnemyOffset(attackSkill)
                    + 20 + Math.floor(30 * Math.random()));
                behaviorFluctuation = 5;
            } else if (behaviorFluctuation == 4) {
                character.useSkill(attackSkill,  getStandardEnemyOffset(attackSkill)
                    + 20 + Math.floor(30 * Math.random()));
                character.useSkill(jabSkill,  getStandardEnemyOffset(jabSkill)
                    + 20 + Math.floor(10 * Math.random()));
                behaviorFluctuation = 5;
            } else if (behaviorFluctuation == 5) {
                character.useSkill(powerAttack,  getStandardEnemyOffset(powerAttack)
                    + 60 + Math.floor(40 * Math.random()));
                behaviorFluctuation = 1;
            }
        }
    });
    return banditRingleader;
}

function enlistWolf(startingHeroStrength, maxHeroStrength, animationObject) {
    var strScale = getHeroStrengthScale(startingHeroStrength, maxHeroStrength);
    var wolf = new Enemy(7 * strScale, 14 * strScale, 12 * strScale, 9 * strScale, 90 * strScale, animationObject);
    var attackSkill = gainAttackSkill();
    var defendSkill = gainDefendSkill();
    var fumbledAttackSkill = gainFumbledAttackSkill(40, 0.3);
    wolf.defineBehave(function (character, battleFrame) {
        if (battleFrame == 0) {
            character.useSkill(gainOpenerSkill(100), 0);
            behaviorFluctuation = 1;
        } else if (character.getRightmostCooldown() < getAbsoluteArtifactPosition(200)) {
            if (behaviorFluctuation == 1) {
                character.useSkill(attackSkill, getStandardEnemyOffset(attackSkill)
                    + 30 +  Math.floor(60 * Math.random()));
                behaviorFluctuation += 1 + Math.floor(Math.random() * 2);
            } else if (behaviorFluctuation == 2) {
                character.useSkill(defendSkill, getStandardEnemyOffset(defendSkill)
                    + 30 + Math.floor(30 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 3) {
                character.useSkill(defendSkill, getStandardEnemyOffset(defendSkill)
                    + 30 + Math.floor(50 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 4) {
                character.useSkill(fumbledAttackSkill, getStandardEnemyOffset(fumbledAttackSkill)
                    + 30 + Math.floor(50 * Math.random()));
                behaviorFluctuation = 1;
            }
        }
    });
    return wolf;
}

function enlistRedWolf(startingHeroStrength, maxHeroStrength, animationObject) {
    var strScale = getHeroStrengthScale(startingHeroStrength, maxHeroStrength);
    var redWolf = new Enemy(9 * strScale, 12 * strScale, 12 * strScale, 10 * strScale, 150 * strScale, animationObject);
    var attackSkill = gainAttackSkill();
    var defendSkill = gainDefendSkill();
    var opening = gainOpeningSkill(40, 0.4);
    redWolf.defineBehave(function (character, battleFrame) {
        if (battleFrame == 0) {
            character.inflict([acquireResponseArtifact(BGL_LEFT, 1, 1, BGL_COLOR, BGL_COLOR, function (dmg) {
                var status = acquireNimbleStatus(0, 1200, 1.2);
                registerObject(GUI_COMMON, procureStatusTextAction(character, "white",
                    [TXT_ACTIVATED[LANG_ENG] + "Enraged", TXT_ACTIVATED[LANG_RUS] + "Разъярён"]));
                character.inflict(status.statusArtifacts);
                return dmg;
            }, true).perpetuate()]);
            character.useSkill(gainOpenerSkill(100), 0);
            behaviorFluctuation = 1;
        } else if (character.getRightmostCooldown() < getAbsoluteArtifactPosition(200)) {
            if (behaviorFluctuation == 1) {
                behaviorFluctuation += 1 + Math.floor(((character.attrMaxHp - character.hp) / character.attrMaxHp) + Math.random() * 2);
            } else if (behaviorFluctuation == 2) {
                character.useSkill(defendSkill, getStandardEnemyOffset(defendSkill)
                    + 50 + Math.floor(30 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 3) {
                character.useSkill(defendSkill, getStandardEnemyOffset(defendSkill)
                    + 50 + Math.floor(50 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 4) {
                character.useSkill(attackSkill, getStandardEnemyOffset(attackSkill)
                    + 50 + Math.floor(50 * Math.random()));
                behaviorFluctuation += 1 + Math.floor(Math.random() * 2);
            } else if (behaviorFluctuation == 5) {
                character.useSkill(opening, getStandardEnemyOffset(opening)
                    + 50 + Math.floor(50 * Math.random()));
                character.useSkill(attackSkill, getStandardEnemyOffset(attackSkill)
                    + 50 + Math.floor(50 * Math.random()));
                behaviorFluctuation = 1;
            } else if (behaviorFluctuation == 6) {
                character.useSkill(attackSkill, getStandardEnemyOffset(attackSkill)
                    + 50 + Math.floor(50 * Math.random()));
                character.useSkill(opening, getStandardEnemyOffset(opening)
                    + 50 + Math.floor(50 * Math.random()));
                behaviorFluctuation = 1;
            }
        }
    });
    return redWolf;
}

function enlistWasp(startingHeroStrength, maxHeroStrength, animationObject) {
    var strScale = getHeroStrengthScale(startingHeroStrength, maxHeroStrength);
    var wasp = new Enemy(8 * strScale, 13 * strScale, 13 * strScale, 10 * strScale, 80 * strScale, animationObject);
    var jabSkill = gainEnemyAttackSkill(40, 0.6, 0.4);
    var evadeSkill = gainEnemyEvadeSkill(100, 0.2);
    var openingSkill = gainOpeningSkill(50, 0.8);
    var poisonStingSkill = gainStatusAttackSkill(100, 0.7, acquireWeakStatus, 1.1, 1000, 0.7);
    wasp.defineBehave(function (character, battleFrame) {
        if (battleFrame == 0) {
            character.inflict([acquirePerpetualAttributeModifierArtifact(ATTR_EVASION, 0.7)]);
            character.useSkill(gainOpenerSkill(100), 0);
            behaviorFluctuation = 1;
        } else if (character.getRightmostCooldown() < getAbsoluteArtifactPosition(200)) {
            if (behaviorFluctuation == 1) {
                character.useSkill(jabSkill, getStandardEnemyOffset(jabSkill)
                    + 30 +  Math.floor(30 * Math.random()));
                behaviorFluctuation += 1 + Math.floor(Math.random() * 2);
            } else if (behaviorFluctuation == 2) {
                character.useSkill(jabSkill,  getStandardEnemyOffset(jabSkill)
                    + 30 + Math.floor(30 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 3) {
                character.useSkill(jabSkill,  getStandardEnemyOffset(jabSkill)
                    + 30 + Math.floor(30 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 4) {
                character.useSkill(evadeSkill,  getStandardEnemyOffset(evadeSkill)
                    + 40 + Math.floor(40 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 5) {
                character.useSkill(openingSkill,  getStandardEnemyOffset(openingSkill)
                    + 20 + Math.floor(20 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 6) {
                character.useSkill(poisonStingSkill,  getStandardEnemyOffset(poisonStingSkill)
                    + 40 + Math.floor(40 * Math.random()));
                behaviorFluctuation = 1;
            }
        }
    });
    return wasp;
}

function enlistPoisonWasp(startingHeroStrength, maxHeroStrength, animationObject) {
    var strScale = getHeroStrengthScale(startingHeroStrength, maxHeroStrength);
    var poisonWasp = new Enemy(9 * strScale, 13 * strScale, 13 * strScale, 10 * strScale,
        80 * strScale, animationObject);
    var jabSkill = gainEnemyAttackSkill(40, 0.6, 0.4);
    var evadeSkill = gainEnemyEvadeSkill(100, 0.2);
    var openingSkill = gainOpeningSkill(50, 0.8);
    var poisonStingSkill = gainStatusAttackSkill(140, 0.7, acquirePoisonedStatus, 1.1, 1000, 30);
    poisonWasp.defineBehave(function (character, battleFrame) {
        if (battleFrame == 0) {
            character.inflict([acquirePerpetualAttributeModifierArtifact(ATTR_EVASION, 0.7)]);
            character.useSkill(gainOpenerSkill(100), 0);
            behaviorFluctuation = 1;
        } else if (character.getRightmostCooldown() < getAbsoluteArtifactPosition(200)) {
            if (behaviorFluctuation == 1) {
                character.useSkill(evadeSkill,  getStandardEnemyOffset(evadeSkill)
                    + 40 + Math.floor(40 * Math.random()));
                behaviorFluctuation += 1 + Math.floor(Math.random() * 2);
            } else if (behaviorFluctuation == 2) {
                character.useSkill(jabSkill,  getStandardEnemyOffset(jabSkill)
                    + 30 + Math.floor(30 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 3) {
                character.useSkill(jabSkill,  getStandardEnemyOffset(jabSkill)
                    + 30 + Math.floor(30 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 4) {
                character.useSkill(evadeSkill,  getStandardEnemyOffset(evadeSkill)
                    + 40 + Math.floor(40 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 5) {
                character.useSkill(jabSkill,  getStandardEnemyOffset(jabSkill)
                    + 30 + Math.floor(30 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 6) {
                character.useSkill(jabSkill,  getStandardEnemyOffset(jabSkill)
                    + 30 + Math.floor(30 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 7) {
                character.useSkill(poisonStingSkill,  getStandardEnemyOffset(poisonStingSkill)
                    + 40 + Math.floor(40 * Math.random()));
                behaviorFluctuation = 1;
            }
        }
    });
    return poisonWasp;
}

function enlistArmadilloKnight(startingHeroStrength, maxHeroStrength, animationObject) {
    var strScale = getHeroStrengthScale(startingHeroStrength, maxHeroStrength);
    var armadilloKnight = new Enemy(11 * strScale, 18 * strScale, 9 * strScale, 8 * strScale,
        170 * strScale, animationObject);
    var attackSkill = gainAttackSkill();
    var defendSkill = gainDefendSkill();
    var fullguardStrike = gainFullguardAttackSkill(160, 1.7);
    var openingSkill = gainOpeningSkill(50, 0.8);
    armadilloKnight.defineBehave(function (character, battleFrame) {
        if (battleFrame == 0) {
            character.useSkill(gainOpenerSkill(100), 0);
            behaviorFluctuation = 1;
        } else if (character.getRightmostCooldown() < getAbsoluteArtifactPosition(200)) {
            if (behaviorFluctuation == 1) {
                character.useSkill(defendSkill, getStandardEnemyOffset(defendSkill)
                    + 5 +  Math.floor(15 * Math.random()));
                behaviorFluctuation += 1 + Math.floor(Math.random() * 2);
            } else if (behaviorFluctuation == 2) {
                character.useSkill(fullguardStrike, getStandardEnemyOffset(fullguardStrike)
                    + 10 + Math.floor(20 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 3) {
                character.useSkill(openingSkill, getStandardEnemyOffset(openingSkill)
                    + 30 + Math.floor(50 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 4) {
                character.useSkill(attackSkill, getStandardEnemyOffset(attackSkill)
                    + 30 + Math.floor(50 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 5) {
                character.useSkill(defendSkill, getStandardEnemyOffset(defendSkill)
                    + 10 + Math.floor(50 * Math.random()));
                behaviorFluctuation = 1;
            }
        }
    });
    return armadilloKnight;
}

function enlistArmadilloVityaz(startingHeroStrength, maxHeroStrength, animationObject) {
    var strScale = getHeroStrengthScale(startingHeroStrength, maxHeroStrength);
    var armadilloVityaz = new Enemy(14 * strScale, 20 * strScale, 9 * strScale, 8 * strScale,
        370 * strScale, animationObject);
    var counterattack = gainCounterattackSkill();
    var guardedStrike = gainGuardedStrikeSkill();
    var defendSkill = gainDefendSkill();
    var fullguardStrike = gainFullguardAttackSkill(160, 1.7);
    var openingSkill = gainOpeningSkill(50, 0.8);
    armadilloVityaz.defineBehave(function (character, battleFrame) {
        if (battleFrame == 0) {
            character.useSkill(gainOpenerSkill(10), 0);
            behaviorFluctuation = 1;
        } else if (character.getRightmostCooldown() < getAbsoluteArtifactPosition(200)) {
            if (behaviorFluctuation == 1) {
                character.useSkill(fullguardStrike, getStandardEnemyOffset(fullguardStrike)
                    + 5 +  Math.floor(15 * Math.random()));
                behaviorFluctuation += 1 + Math.floor(Math.random() * 2);
            } else if (behaviorFluctuation == 2) {
                character.useSkill(openingSkill, getStandardEnemyOffset(openingSkill)
                    + 5 + Math.floor(10 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 3) {
                character.useSkill(defendSkill, getStandardEnemyOffset(defendSkill)
                    + 10 + Math.floor(10 * Math.random()));
                behaviorFluctuation += 1 + Math.floor(Math.random() * 2);
            } else if (behaviorFluctuation == 4) {
                character.useSkill(guardedStrike, getStandardEnemyOffset(guardedStrike)
                    + 30 + Math.floor(30 * Math.random()));
                character.useSkill(counterattack, getStandardEnemyOffset(counterattack)
                    + 30 + Math.floor(30 * Math.random()));
                behaviorFluctuation = 6;
            } else if (behaviorFluctuation == 5) {
                character.useSkill(counterattack, getStandardEnemyOffset(counterattack)
                    + 30 + Math.floor(30 * Math.random()));
                character.useSkill(guardedStrike, getStandardEnemyOffset(guardedStrike)
                    + 30 + Math.floor(30 * Math.random()));
                behaviorFluctuation = 6;
            } else if (behaviorFluctuation == 6) {
                character.useSkill(defendSkill, getStandardEnemyOffset(defendSkill)
                    + 30 + Math.floor(30 * Math.random()));
                behaviorFluctuation = 1;
            }
        }
    });
    return armadilloVityaz;
}

function enlistGreenSerpent(startingHeroStrength, maxHeroStrength, animationObject) {
    var strScale = getHeroStrengthScale(startingHeroStrength, maxHeroStrength);
    var greenSerpent = new Enemy(14 * strScale, 18 * strScale, 13 * strScale, 11 * strScale,
        800, animationObject);
    var attackSkill = gainEnemyAttackSkill(70, 0.7, 1);
    var powerAttack = gainPowerAttackSkill(200, 0.6, 1.6);
    var jabSkill = gainJabSkill();
    var defendSkill = gainEnemyDefenseSkill(150, 2);
    var evadeSkill = gainEnemyEvadeSkill(100, 0.1);
    var poisonFangSkill = gainStatusAttackSkill(140, 0.9, acquirePoisonedStatus, 1.1, 2000, 40);
    var lieInWait = gainLieInWaitSkill(200, 0.5, 0.8);
    greenSerpent.defineBehave(function (character, battleFrame) {
        if (battleFrame == 0) {
            character.inflict([acquireResponseArtifact(BGL_LEFT, 1, 1, BGL_COLOR, BGL_COLOR,function (dmg) {
                if ((character.hp > character.attrMaxHp * 0.7) && (character.hp - dmg <= character.attrMaxHp * 0.7)) {
                    registerObject(GUI_COMMON, procureStatusTextAction(character, "white",
                        [TXT_ACTIVATED[LANG_ENG] + "Enraged", TXT_ACTIVATED[LANG_RUS] + "Разъярён"]));
                    behaviorFluctuation = 1;
                }
                return dmg;
            }, true).perpetuate()]);
            character.useSkill(gainOpenerSkill(10), 0);
            behaviorFluctuation = 1;
        } else if (character.getRightmostCooldown() < getAbsoluteArtifactPosition(200)) {
            if (character.hp > character.attrMaxHp * 0.7) {
                if (behaviorFluctuation == 1) {
                    character.useSkill(evadeSkill, getStandardEnemyOffset(evadeSkill)
                        + 20 + Math.floor(10 * Math.random()));
                    behaviorFluctuation += 1;
                } else if (behaviorFluctuation == 2) {
                    character.useSkill(defendSkill, getStandardEnemyOffset(defendSkill)
                        + 10 + Math.floor(10 * Math.random()));
                    behaviorFluctuation += 1;
                } else if (behaviorFluctuation == 3) {
                    character.useSkill(powerAttack, getStandardEnemyOffset(powerAttack)
                        + 20 + Math.floor(10 * Math.random()));
                    behaviorFluctuation += 1;
                } else if (behaviorFluctuation == 4) {
                    character.useSkill(defendSkill, getStandardEnemyOffset(defendSkill)
                        + 30 + Math.floor(30 * Math.random()));
                    behaviorFluctuation += 1;
                } else if (behaviorFluctuation == 5) {
                    character.useSkill(evadeSkill, getStandardEnemyOffset(evadeSkill)
                        + 10 + Math.floor(20 * Math.random()));
                    behaviorFluctuation += 1;
                } else if (behaviorFluctuation == 6) {
                    character.useSkill(jabSkill, getStandardEnemyOffset(jabSkill)
                        + 10 + Math.floor(30 * Math.random()));
                    behaviorFluctuation = 1;
                }
            } else if (character.hp > character.attrMaxHp * 0.1) {
                if (behaviorFluctuation == 1) {
                    character.useSkill(poisonFangSkill, getStandardEnemyOffset(poisonFangSkill)
                        + 20 + Math.floor(10 * Math.random()));
                    behaviorFluctuation += 1;
                } else if (behaviorFluctuation == 2) {
                    character.useSkill(evadeSkill, getStandardEnemyOffset(evadeSkill)
                        + 10 + Math.floor(10 * Math.random()));
                    behaviorFluctuation += 1 + Math.floor(Math.random() * 2);
                } else if (behaviorFluctuation == 3) {
                    character.useSkill(jabSkill, getStandardEnemyOffset(jabSkill)
                        + 20 + Math.floor(20 * Math.random()));
                    behaviorFluctuation += 1;
                } else if (behaviorFluctuation == 4) {
                    character.useSkill(jabSkill, getStandardEnemyOffset(jabSkill)
                        + 20 + Math.floor(20 * Math.random()));
                    behaviorFluctuation += 1;
                } else if (behaviorFluctuation == 5) {
                    character.useSkill(jabSkill, getStandardEnemyOffset(jabSkill)
                        + 20 + Math.floor(20 * Math.random()));
                    behaviorFluctuation += 1;
                } else if (behaviorFluctuation == 6) {
                    character.useSkill(defendSkill, getStandardEnemyOffset(defendSkill)
                        + 30 + Math.floor(30 * Math.random()));
                    behaviorFluctuation += 1 + Math.floor(Math.random() * 2);
                } else if (behaviorFluctuation == 7) {
                    character.useSkill(attackSkill, getStandardEnemyOffset(attackSkill)
                        + 20 + Math.floor(20 * Math.random()));
                    character.useSkill(evadeSkill, getStandardEnemyOffset(evadeSkill)
                        + 20 + Math.floor(20 * Math.random()));
                    character.useSkill(attackSkill, getStandardEnemyOffset(attackSkill)
                        + 20 + Math.floor(20 * Math.random()));
                    behaviorFluctuation = 9;
                } else if (behaviorFluctuation == 8) {
                    character.useSkill(powerAttack, getStandardEnemyOffset(powerAttack)
                        + 40 + Math.floor(20 * Math.random()));
                    character.useSkill(defendSkill, getStandardEnemyOffset(defendSkill)
                        + 30 + Math.floor(20 * Math.random()));
                    character.useSkill(attackSkill, getStandardEnemyOffset(attackSkill)
                        + 20 + Math.floor(20 * Math.random()));
                    behaviorFluctuation = 9;
                } else if (behaviorFluctuation == 9) {
                    character.useSkill(lieInWait, getStandardEnemyOffset(lieInWait)
                        + 30 + Math.floor(40 * Math.random()));
                    behaviorFluctuation = 1;
                }
            }
        }
    });
    return greenSerpent;
}