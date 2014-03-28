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
    ["An elderly couple", "A lonely young hogman", "A hogwoman with three sons", "A rugged wolfman"],
    ["Пожилая пара", "Одинокий молодой кабанолюд", "Кабаниха с трёмя сыновьями", "Суровый волколюд"]
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
var CH00_TUTORIAL_COMBAT = 1;           // tutorial message: combat basics
var CH00_TUTORIAL_KARMA = 2;            // tutorial message: karma
var CH00_TUTORIAL_BANDIT = 3;           // tutorial message: escape menu
var CH00_TUTORIAL_WOLF = 4;             // tutorial message: wolf battle
var CH00_TUTORIAL_WASP = 5;             // tutorial message: wasp battle
var CH00_TUTORIAL_BRIGAND = 6;          // tutorial message: brigand battle
var CH00_TUTORIAL_RED_WOLF = 7;         // tutorial message: red wolf battle
var CH00_TUTORIAL_POISON_WASP = 8;      // tutorial message: poison wasp battle
var CH00_TUTORIAL_DANGER = 9;           // tutorial message: danger encounters
var CH00_TUTORIAL_ARMADILLO = 10;       // tutorial message: armadillo battle
var CH00_TUTORIAL_MENU_ROOT = 11;       // tutorial message: escape menu root
var CH00_TUTORIAL_MENU_STATS = 12;      // tutorial message: escape menu - stats
var CH00_TUTORIAL_MENU_SKILLS = 13;     // tutorial message: escape menu - skills
var CH00_TUTORIAL_MENU_ITEMS = 14;      // tutorial message: escape menu - items
var CH00_TUTORIAL_MENU_CODEX = 15;      // tutorial message: escape menu - codex
var CH00_CONVERSATION_CAVE = 16;        // conversation: serpent cave
var CH00_BANDIT_RINGLEADER_QUEST = 17;  // bandit ringleader quest flag
var CH00_ARMADILLO_VITYAZ_QUEST = 18;   // armadillo vityaz quest flag

/* TEXT DATA */

var CH00_TITLE = ["Prologue: Hero's Karma <br> ", "Пролог: Карма Героя <br> "];

var CH00_TUTORIAL_MENU_ROOT_TXT = [
    "This is the pause menu. Here you can manage Dominique's skills and items, view statistics data "
        + "and codex entries. <br> <br> You can access the pause menu almost anytime outside of battle.",
    "Это меню паузы. Здесь Вы можете настраивать навыки и предметы Доминика, просматривать статистику и "
        + "записи в кодексе. <br> <br> Вы можете заходить в меню паузы почти в любой момент вне боя."
];

var CH00_TUTORIAL_MENU_STATS_TXT = [
    "On this screem you can view your character stats and game statistics and browse through your destinies.",
    "На этом экране Вы можете увидеть информацию о персонаже и игровую статистику, а также просмотреть Ваши судьбы."
];

var CH00_TUTORIAL_MENU_SKILLS_TXT = [
    "This is the skills menu where you can set up Dominique's skills. Use directional keys and ACTION button "
        + "to navigate the menu and move skills between the panels. The rightmost panel is where Dominique's current "
        + "skills lineup is displayed, along with hotkeys they are bound to. For now, Dominique does not have "
        + "any aura skills. <br> <br> Make sure to always have an attack skill ready. Otherwise, Dominique will not be "
        + "able to fight enemies!",
    "Перед Вами меню навыков, где Вы можете управлять навыками Доминика. Используйте клавиши направления и кнопку "
        + "ДЕЙСТВИЕ, чтобы перемещаться по меню и перемещать навыки между панелями. Крайняя правая панель - "
        + "текущий состав навыков Доминика вместе с горячими клавишами, к которым они привязаны. На данный момент, "
        + "у Доминика нет аура-навыков. <br> <br> Следите за тем, чтобы всегда был установлен атакующий навык, иначе "
        + "Доминик не сможет сражаться с врагами!"
];

var CH00_TUTORIAL_MENU_ITEMS_TXT_01 = [
    "This is the items menu where you can set up Dominique's items. Use directional keys and ACTION button "
        + "to navigate the menu and move items between the panels. The right panel is where Dominique's current "
        + "items lineup is displayed, along with hotkeys they are bound to. Dominique's basic equipment cannot be "
        + "changed.",
    "Перед Вами меню предметов, где Вы можете управлять предметами Доминика. Используйте клавиши направления и кнопку "
        + "ДЕЙСТВИЕ, чтобы перемещаться по меню и перемещать предметы между панелями. Правая панель - "
        + "текущий состав предметов Доминика вместе с горячими клавишами, к которым они привязаны. Базовое снаряжение "
        + "Доминика изменять нельзя."
];

var CH00_TUTORIAL_MENU_ITEMS_TXT_02 = [
    "To access items in battle by hotkeys, hold 'Ctrl' key and press the corresponding digit "
        + "key. <br> <br> Most items can be used in the field by highlighting it in the menu, holding 'Ctrl' key and "
        + "pressing ACTION.",
    "Чтобы пользоваться горячими клавишами для предметов в бою, удерживайте "
        + "клавишу 'Ctrl' и нажимайте соответствующие клавиши цифр. <br> <br> Большинство предметов можно использовать "
        + "вне боя, выделяя их в меню, удерживая клавишу 'Ctrl' и нажимая ДЕЙСТВИЕ."
];

var CH00_TUTORIAL_MENU_CODEX_TXT = [
    "Codex is a record of things known to you about this world. Each entry provides information about a landmark, "
        + "an enemy, your quest or a lore topic. Entries are organized into categories for your convenience.",
    "Кодекс - это летопись всего, что Вам известно об этом мире. Каждая запись даёт информацию об объекте на местности, "
        + "враге, Ваших поисках или некие отвлечённые знания. Записи организованы в категории для Вашего удобства."
];

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
    "Dominique stands before one of many dojos around these parts. The doorkeeper greets him with a bow and "
        + "seeing that he knows his way around in a fight, invites him to train with the adepts. Being admitted "
        + "into an inner circle of a fighting guild should not be taken lightly, for it takes a toll on the karma. "
        + " <br> <br> Training with these adepts will grant Dominique a ",
    "Доминик стоит перед одним из многих додзё этих мест. Дверник приветствует его поклоном и, видя, "
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

var CH00_LIBRARY_01 = [
    "A majestic building stands tall before Dominique and Sallinger, its spire rising to the sky. " +
        "This is a library, a temple of learning, where all are free to dive into the world's knowledge. It's probably a great " +
        "place to spend time and improve oneself, since new things may be learnt here, and even if they are not immediately " +
        "useful, broadening horizons contributes to one's karmic wealth. <br> <br> Would you like to stay?",
    "Величественное здание с уходящим в небо шпилем возвышается над Домиником и Сэллинджером. Это библиотека, храм " +
        "познания, где все могут абсолютно свободно нырнуть в мир знаний. Это отличное место, где можно провести время " +
        "и стать лучше, ибо здесь узнаётся много нового, и даже если оно не будет полезным сразу, расширение горизонтов " +
        "вносит лепту в кармическое богатство. <br> <br> Желаете остановиться?"];

var CH00_LIBRARY_02_1 = [
    "Walking in the seemingly infinite bookshelf labyrinth, Dominique looks through the books and finally picks one. " +
        "He silently sits by the table in the corner and starts delving into its contents, taking notes in his codex.",
    "Бродя в кажущимся бесконечным лабиринте книжных полок, Доминик осматривает книги и, наконец, выбирает одну. Тихо сев " +
        "в уголок за письменный стол, он начинает погружаться в её содержимое и попутно делать заметки в своём кодексе."];
var CH00_LIBRARY_02_2 = [
    "Walking in the seemingly infinite bookshelf labyrinth, Dominique looks through the books and finally picks one. " +
        "He silently sits by the table in the corner and starts delving into its contents, enjoying beautiful classic poetry.",
    "Бродя в кажущимся бесконечным лабиринте книжных полок, Доминик осматривает книги и, наконец, выбирает одну. Тихо сев " +
        "в уголок за письменный стол, он начинает погружаться в её содержимое и наслаждаться прекрасными классическими стихами."];
var CH00_LIBRARY_02_3 = [
    "Walking in the seemingly infinite bookshelf labyrinth, Dominique looks through the books and notices one titled " +
        "\"The Art of Not Being Hit in the First Place\". He proceeds to carefully study its contents and concludes that he should " +
        "try practicing what he just learned",
    "Бродя в кажущимся бесконечным лабиринте книжных полок, Доминик осматривает книги и обнаруживает одну, озаглавленную " +
        "\"Искусство не Попадать под Удары\". Он аккуратно изучает её содержимое и заключает, что ему неплохо бы " +
        "попрактиковаться в том, что он только что освоил."];

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

var CH00_COMMON_CHEST_01 = [
    "Dominique spots a dirty iron-banded chest. Would you like to open it?",
    "Доминик замечает грязный обитый железными пластинами сундук. Желаете открыть его?"
];

var CH00_COMMON_CHEST_02_1 = [
    "Nothing is inside, except for a few dried leaves.", "Внутри пусто, за исключением вороха высохших листьев."
];

var CH00_COMMON_CHEST_02_2 = [
    "It seems there were spirits magically imprisoned inside. Opening the chest set them free and earned Dominique ",
    "Похоже, внутри были магически заточены духи. Открыв сундук, Доминик освободил их и обрёл "
];

var CH00_COMMON_CHEST_02_3 = [
    "As Dominique opens the chest, a cloud of dust bursts from it! He starts feeling funny.",
    "Когда Доминик открыл сундук, из него вырвалось облако пыли! Доминику становится нехорошо."
];

var CH00_COMMON_CHEST_02_4 = [
    "Dominique opens the chest and finds a hemp net with many pages of text describing different techniques of using " +
        "it to ensnare enemies. This certainly seems useful.",
    "Доминик открывает сундук и находит там пеньковую сеть с многостраничным описанием различных техник поимки в неё врагов. " +
        "Определённо полезная вещь."
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

var CH00_TUTORIAL_BANDIT_TXT = [
    "Are you aware that you can open the pause menu anytime you are not in battle? Press 'Esc' key to "
        + "do so. You can manage skills from there. Do you remember the combat breathing technique I taught "
        + "you a while ago? Why don't you try readying it?",
    "Знаешь ли ты, что ты можешь открыть меню паузы в любое время, когда ты находишься вне боя? Для этого нажми "
        + "клавишу 'Esc'. В нём производится управление навыками. Помнишь технику дыхания в бою, которой я тебя научил "
        + "некоторое время тому назад? Почему бы тебе не подготовить её к бою?"
];

var CH00_TUTORIAL_WOLF_TXT = [
    "Wolves are more agile than bandits. Instead of providing you with an opening, they tend to have a weak attack, "
        + "that you can use as a vulnerability.",
    "Волки более ловкие, нежели бандиты. Вместо того, чтобы открывать вам свои уязвимые места, они используют "
        + "слабую атаку, которой можно воспользоваться как уязвимостью."
];

var CH00_TUTORIAL_RED_WOLF_TXT = [
    "Red wolves are a type of enemy that reacts to what you do in a dangerous manner. Whenever you hit them, "
        + "they become more aggravated and move faster as a result. On top of that, the less health they have "
        + "the more they focus on offense.",
    "Бурые волки из тех врагов, что опасным образом реагируют на твои действия. Когда ты попадаешь "
        + "по ним, они злятся и начинают двигаться быстрее. Кроме того, чем меньше у них здоровья, тем больше они "
        + "сосредоточены на нападении."
];

var CH00_TUTORIAL_WASP_TXT = [
    "Giant wasps have a weakening poison to render their victims harmless. However, when they try to sting you, "
        + "they are easier to hit. <br> To defend yourself against negative statuses you simply have to block them.",
    "Гигантские осы используют ослабляющий яд, чтобы обезвредить своих жертв. Однако, когда они пытаются "
        + "ужалить тебя, попасть по ним легче. <br> Чтобы защититься от статусных атак, тебе просто нужно "
        + "блокировать их."
];

var CH00_TUTORIAL_POISON_WASP_TXT = [
    "These wasps are more dangerous than their kin, since their poison actually kills you. Take extra care "
        + "to defend when they try to sting you.",
    "Эти осы более опасны, чем их родня, так как их яд смертелен. Будь особенно осторожен, "
        + "и старайся защищаться, когда они пытаются тебя ужалить."
];

var CH00_TUTORIAL_BRIGAND_TXT = [
    "Brigands are all about muscle and power, so while their actions can be tardy, they can pack a punch. "
        + "Be very careful about their power attack. They slow down when they execute it, but if they catch you when "
        + "you are vulnerable, you'll receive some serious damage.",
    "Разбойники - это грубая сила, так что в то время, как их действия могут быть небыстрыми, они могут вломить "
        + "от души. Остерегайся их силовой атаки. Они замедляются, когда исполняют её, но если они поймают тебя, "
        + "когда ты уязвим, ты получишь серьёзные повреждения."
];

var CH00_TUTORIAL_ARMADILLO_TXT = [
    "Armadillo knights are an armored type of enemy, and their attack does not leave them open at all. "
        + "Keep an eye out for a vulnerability and do not waste stamina trying to bash through their plates.",
    "Броненосцы-рыцари - это пример бронированного врага, и их атака не оставляет их открытыми твоим атакам. "
        + "Ищи уявзимости и не трать попусту выносливость, пытаясь пробить их броню."
];

/* LANDSCAPE */

var LSC_PROLOGUE = 1;
function createPrologueLandscape() {
    var prologueLandscape = createGrasslandsLandscape();
    prologueLandscape.name = ["Asqarra", "Аскарра"];
    prologueLandscape.defineActualize(function () {
        this.clearLandmarkTypes();
        this.addLandmarkType(describeChroniclersPavilionType(0.1));
        this.addLandmarkType(describeHotspringType(0.1));
        this.addLandmarkType(describeInnType(0.1));
        this.addLandmarkType(describeHouseRestType(0.1));
        this.addLandmarkType(describeHouseWorkType(0.1));
        this.addLandmarkType(describeTradingPostType(0.1));
        this.addLandmarkType(describeCommonChestType(0.1));
        this.addLandmarkType(describeCodexLibraryType(0.1));
        if (!hero.hasSkill(SKL_NETCAST)) {
            this.addLandmarkType(describeCh00SkillChestType(0.05));
        }
        if (!hero.hasSkill(SKL_EVADE)) {
            this.addLandmarkType(describeSkillLibraryType(0.05));
        }
        this.addLandmarkType(describeTrainerType(0.07));
        if (gst[CH00][CH00_PHASE] == 1) {
            this.addLandmarkType(describeBanditType(0.15));
            this.addLandmarkType(describeWolfType(0.15));
            this.addLandmarkType(describeDestroyedHouseType(0.1));
        } else if (gst[CH00][CH00_PHASE] == 2) {
            this.addLandmarkType(describeBanditType(0.15));
            this.addLandmarkType(describeWolfType(0.15));
            this.addLandmarkType(describeMilestoneType(0.1));
        } else if (gst[CH00][CH00_PHASE] == 3) {
            this.addLandmarkType(describeBanditType(0.15));
            this.addLandmarkType(describeWolfType(0.15));
            this.addLandmarkType(describeBrigandType(0.1));
            this.addLandmarkType(describeWaspType(0.1));
            this.addLandmarkType(describeSeersHutType(0.1));
        } else if (gst[CH00][CH00_PHASE] == 4) {
            this.addLandmarkType(describeBanditType(0.15));
            this.addLandmarkType(describeWolfType(0.15));
            this.addLandmarkType(describeBrigandType(0.15));
            this.addLandmarkType(describeWaspType(0.15));
            this.addLandmarkType(describeMilestoneType(0.1));
        } else if (gst[CH00][CH00_PHASE] >= 5) {
            this.addLandmarkType(describeBanditType(0.1));
            this.addLandmarkType(describeWolfType(0.1));
            this.addLandmarkType(describeBrigandType(0.15));
            this.addLandmarkType(describeWaspType(0.15));
            this.addLandmarkType(describeRedWolfType(0.1));
            this.addLandmarkType(describePoisonWaspType(0.1));
            this.addLandmarkType(describeArmadilloKnightType(0.1));
            this.addLandmarkType(describeBanditRingleaderType(0.05));
            this.addLandmarkType(describeArmadilloVityazType(0.05));
            if (gst[CH00][CH00_PHASE] == 5) {
                this.addLandmarkType(describeSerpentCaveType(0.2));
            }
        }
    });
    return prologueLandscape;
}

var LSC_SERPENT_CAVE = 2;
function createSerpentCaveLandscape() {
    var serpentCaveLandscape = createCavesLandscape();
    serpentCaveLandscape.name = ["Asqarra - Serpent cave", "Аскарра - Пещера змея"];
    serpentCaveLandscape.mainTheme = MUS_FOREBODING;
    serpentCaveLandscape.defineActualize(function () {
        this.clearLandmarkTypes();
        this.addLandmarkType(describeGreenSerpentType(1));
    });
    return serpentCaveLandscape;
}

/* SEQUENCES */

function procureStartPrologueSequence() {
    var enemyObject = new Landmark(MID, 620, getResource("imgEnemyBandit1Stand"));
    enemyObject.setAttackImage(getResource("imgEnemyBandit1Attack"));
    var tutorialEnemy = enlistTutorialBandit(enemyObject);
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
            + "How do you feel, Dominique? Do you need a refresher on the basics of heroics?",
            "Вот мы и прибыли, наконец. Здесь всё, чему мы научились до этого момента, будет проверено на практике. "
                + "Как себя чувствуешь, Доминик? Тебе нужно напомнить основы геройского ремесла?"]));
    startPrologue.addAction(procureCodeFragmentAction(function () {
        if (eventChoice == 1) {
            gst[CH00][CH00_TUTORIAL_COMBAT] = 1;
            gst[CH00][CH00_TUTORIAL_BANDIT] = 1;
            gst[CH00][CH00_TUTORIAL_WOLF] = 1;
            gst[CH00][CH00_TUTORIAL_WASP] = 1;
            gst[CH00][CH00_TUTORIAL_BRIGAND] = 1;
            gst[CH00][CH00_TUTORIAL_RED_WOLF] = 1;
            gst[CH00][CH00_TUTORIAL_POISON_WASP] = 1;
            gst[CH00][CH00_TUTORIAL_ARMADILLO] = 1;
            gst[CH00][CH00_TUTORIAL_DANGER] = 1;
            gst[CH00][CH00_TUTORIAL_MENU_ROOT] = 1;
            gst[CH00][CH00_TUTORIAL_MENU_STATS] = 1;
            gst[CH00][CH00_TUTORIAL_MENU_SKILLS] = 1;
            gst[CH00][CH00_TUTORIAL_MENU_ITEMS] = 1;
            gst[CH00][CH00_TUTORIAL_MENU_CODEX] = 1;
        }
    }));
    startPrologue.addAction(procureCodeFragmentAction(function () {

        // creating hero, enabling GUI
        clearObjectType("Hero");
        hero = new Hero();
        registerObject(OBJECTS_MID_HERO, hero);

        gst[CH00][CH00_PHASE] = 1;

        loadLandscape(LSC_PROLOGUE);
        setControlMode(CM_FIELD);

        setEventMusic(null);
        setMusicPlayState(MPS_LANDSCAPE);

        if (gst[CH00][CH00_TUTORIAL_COMBAT] < 1) {
            maneuvering = false;
            enemyObject.finished = true;
            registerObject(OBJECTS_MID_FRONT, enemyObject);
        }
    }));
    startPrologue.addAction(procureResumeAction());
    startPrologue.addAction(procureUnmaskAction());
    startPrologue.addAction(procureCodeFragmentAction(function () {
        displayGui = true;
        maneuvering = true;
        startPrologue.addAction(procureStopAction());
        if (gst[CH00][CH00_TUTORIAL_COMBAT] < 1) {
            gst[CH00][CH00_TUTORIAL_COMBAT] = 1;
            startPrologue.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["Alright. First things first, we should discuss...",
                    "Ну, что ж. Перво-наперво, нам следует обсудить..."]));
            startPrologue.addAction(procureDisplaySpeechMessageAction(CHR_BANDIT.name, CHR_BANDIT.portrait,
                [
                    "Now stop right there! Oh... Isn't that a blessing? A rat rider. I'll make you plead for mercy!",
                    "А ну-ка стоять! О... Ну, разве это не подарок? Крысиный всадник. Я заставлю тебя молить о пощаде!"
                ]));
            startPrologue.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["How untimely...", "Как не вовремя..."]));
            startPrologue.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["On the contrary, this is an excellent chance to review what we know about combat. Prepare yourself!",
                    "Наоборот, это отличный шанс повторить, что мы знаем о поединках. Готовься!"]));
            var afterbattleSequence = new Sequence();
            afterbattleSequence.addAction(procureCodeFragmentAction(function () {
                hero.restoreHp(hero.attrMaxHp * 0.6);
                hero.restoreSp(hero.attrMaxSp * 0.6);
            }));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["Well, that does it. After each battle your combat prowess will grow depending on how you performed "
                    + "and how strong your opponent was. You also earn karma this way. <br> Alternatively, most "
                    + "encounters can be avoided at the cost of your own karma.",
                    "Ну, вот и всё. После каждой битвы твои боевые умения будут расти в зависимости от того, как "
                        + "ты сражался и насколько силён был твой противник. Таким же образом ты получаешь карму. <br> "
                        + "Ты также можешь избежать большинства стычек ценой собственной кармы."]));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["Now then, where were we?.. Ah, yes - we should discuss movement around the field.",
                    "Так, о чём мы с тобой говорили?.. Ах да - нам следует обсудить перемещение."]));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["I have decided, Sallinger, that we are never to go back. We move only forward towards our destiny. "
                    + "What's left behind should stay behind unless we happen across it again.",
                    "Я решил, Сэллинджер, что мы никогда не будем идти назад. Мы движемся только вперёд, навстречу "
                        + "нашей судьбе. Что позади - то позади, если, конечно, наш путь не приведёт нас обратно."]));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["Err, right. That and the fact that you barely have any sense of direction. "
                    + "So, the only immediate choice of movement we can make is balancing across three paths, "
                    + "conventionally named the far, the middle and the near.",
                    "Эмм, верно. Это и тот факт, что твоё умение ориентироваться оставляет желать лучшего. "
                        + "Итак, единственный прямой выбор направления для нас - это балансирование между тремя "
                        + "тропами, условно называемыми дальней, средней и ближней."]));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["To travel towards the farther path, press the 'W' key or the 'Up' key. To travel towards the nearer "
                    + "path, press the 'S' key or the 'Down' key. But be cautious: such movement expends stamina, "
                    + "so too much of it and I will get tired very quickly.",
                    "Чтобы путешествовать дальше, следует нажать 'W' или 'Вверх'. Чтобы путешествовать ближе, следует "
                        + "нажать 'S' или 'Вниз'. Но будь осторожен: такие перемещения тратят твою выносливость, так "
                        + "что если будешь много петлять, я быстро устану."]));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["Let's have a look around and see if someone has a task for a hero like you. "
                    + "Keep an eye out for an exclamation mark over a landmark - such marks denote places of "
                    + "special interest for us.",
                    "Давай осмотримся, нет ли здесь кого-нибудь, нуждающегося в помощи героя, вроде тебя. "
                        + "Обращай внимание на восклицательные знаки над объектами - такие знаки отмечают особо "
                        + "интересные для нас места."]));
            afterbattleSequence.addAction(procureCodeFragmentAction(function () {
                hero.obtainCodexEntry(CDX_JOU001_CH00P01);
            }));
            afterbattleSequence.addAction(procureResumeAction());
            startPrologue.addAction(procureInitiateBattleAction(tutorialEnemy, afterbattleSequence));
        } else {
            startPrologue.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["Let's have a look around and see if someone has a task for a hero like you.",
                    "Давай осмотримся, нет ли здесь кого-нибудь, нуждающегося в помощи героя, вроде тебя."]));
            startPrologue.addAction(procureCodeFragmentAction(function () {
                hero.obtainCodexEntry(CDX_JOU001_CH00P01);
            }));
            startPrologue.addAction(procureResumeAction());
        }
    }));
    return startPrologue;
}

function processKarmaTutorial() {
    if (gst[CH00][CH00_TUTORIAL_KARMA] < 1) {
        var karmaTutorialSequence = new Sequence();
        karmaTutorialSequence.addAction(procureDistanceTimeoutAction(100));
        karmaTutorialSequence.addAction(procureStopAction());
        karmaTutorialSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
            ["Dominique, do you know karma is?", "Доминик, ты знаешь, что такое карма?"]));
        karmaTutorialSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
            ["I have a few wild guesses that it's some sort of invisible coins like what humans use. Or that it's "
                + "an eternal river frozen in the last rays of the sunset between the now and forever... whatever "
                + "that means. So no. I don't know.",
                "У меня есть парочка догадок, что это может быть некой невидимой монетой, похожей на ту, что люди "
                    + "используют. Или что это вечная река, застывшая в последних лучах заката между сейчас и "
                    + "навеки... чтобы это ни значило. Так что нет. Не знаю."]));
        karmaTutorialSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
            ["Truth be told, no one does. But there are many practical teachings about karma. One of them states that "
                + "Natural Order - a.k.a. Law of Karma Distribution - controls the amount of happiness and grief "
                + "everyone receives.",
                "На самом деле, никто не знает. Но есть множество практических учений о карме. Одно из них гласит, что "
                    + "Естественный Порядок - он же Закон Распределения Кармы - управляет тем, кому сколько достаётся "
                    + "счастья и горя."]));
        karmaTutorialSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
            ["Oh, I know that one. It says that karma flows from the weak-willed and lost to the strong and worthy. "
                + "And that worthiness is determined by how you treat the world and what you give of yourself.",
                "О, я знаю его. Согласно ему, карма течёт от слабовольных и заблудших к сильным и достойным. А "
                    + "достоинство определяется тем, как ты относишься к миру и что отдаёшь."]));
        karmaTutorialSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
            ["Right. Keep that in mind when you accept and decline challenges or when you give and take. But there "
                + "is one particularly interesting thing about karma according to that theory. Natural Order does "
                + "not tolerate the void.",
                "Верно. Помни об этом, когда принимаешь или отвергаешь вызов и когда отдаёшь или берёшь. Но есть в "
                    + "этой теории одно интересное утверждение о карме. Естественный Порядок не терпит пустоты."]));
        karmaTutorialSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
            ["The void? Do you mean the absence of karma?", "Пустоты? Ты имеешь ввиду отсутствие кармы?"]));
        karmaTutorialSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
            ["Yes. When you take and not give, when you deny yourself a path, when you run away from the "
                + "consequences of your choices, you get closer to that void.",
                "Да. Когда ты берёшь и не отдаёшь, когда ты отказыаешь себе в наличии стези, когда ты убегаешь от "
                    + "последствий своего выбора, ты приближаешься к этой пустоте."]));
        karmaTutorialSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
            ["If your karma gets negative, Natural Order will proceed to fill that void and deal out an extra dose of "
                + "misfortunes to you. It's called karma rebound. Don't let it come to that.",
                "Если твоя карма окажется отрицательной, Естественный Порядок устремится заполнить пустоту и выдать "
                    + "дополнительную порцию бед на твою голову. Это называется отдачей кармы. Не доводи до этого."]));
        karmaTutorialSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
            ["Not planning, really. Let's go.", "Честно, не собираюсь. Пойдём."]));
        karmaTutorialSequence.addAction(procureResumeAction());
        registerObject(GUI_EVENT, karmaTutorialSequence);
        gst[CH00][CH00_TUTORIAL_KARMA] = 1;
    }
}

/* LANDMARKS */

function describeChroniclersPavilionType(chance) {
    var chroniclersPavilionType = new LandmarkType(chance);
    chroniclersPavilionType.defineGenerateLandmark(function (path, position) {
        var chroniclersPavilion = new Landmark(path, position, getResource("imgObjChronicler"));
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
    var hotspringType = new LandmarkType(chance);
    hotspringType.defineGenerateLandmark(function (path, position) {
        var hotspring = new Landmark(path, position, getResource("imgObjHotspring"));
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
                        processKarmaTutorial();
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
    var innType = new LandmarkType(chance);
    innType.defineGenerateLandmark(function (path, position) {
        var inn = new Landmark(path, position, getResource("imgObjInn"));
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
                        processKarmaTutorial();
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
    var trainerType = new LandmarkType(chance);
    trainerType.defineGenerateLandmark(function (path, position) {
        var attribute = Math.floor(Math.random() * 4);
        var trainer = new Landmark(path, position, attribute < 2 ? getResource("imgObjSmith") : getResource("imgObjDojo"));
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
                            processKarmaTutorial();
                        }));
                        break;
                    case 1:
                        trainerSequence.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL, messageTaken2, true));
                        trainerSequence.addAction(procureCodeFragmentAction(function () {
                            hero.obtainItem(itemId);
                            hero.expendKarma(karmaCostItem);
                            processKarmaTutorial();
                        }));
                        break;
                    case 2:
                        trainerSequence.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL, messageTakenBoth, true));
                        trainerSequence.addAction(procureCodeFragmentAction(function () {
                            hero.increaseAttribute(attribute, growth);
                            hero.obtainItem(itemId);
                            hero.expendKarma(Math.floor((karmaCostIncrease + karmaCostItem) * 0.75));
                            processKarmaTutorial();
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
    var houseRestType = new LandmarkType(chance);
    houseRestType.defineGenerateLandmark(function (path, position) {
        var houseRest = new Landmark(path, position, getRandomObject([getResource("imgObjHouse1"), getResource("imgObjHouse2")]));
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
    var houseWorkType = new LandmarkType(chance);
    houseWorkType.defineGenerateLandmark(function (path, position) {
        var houseWork = new Landmark(path, position, getRandomObject([getResource("imgObjHouse1"), getResource("imgObjHouse2")]));
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
    var objectType = new LandmarkType(chance);
    objectType.defineGenerateLandmark(function (path, position) {
        var object = new Landmark(path, position, getResource("imgObjTradingPost"));
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
                    objectSequence.addAction(procureCodeFragmentAction(function () {
                        hero.obtainItem(itemId);
                        hero.expendKarma(karmaCost);
                        processKarmaTutorial();
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

// TODO: do a good implementation of the library
function describeCodexLibraryType(chance) {
    var libraryType = new LandmarkType(chance);
    libraryType.defineGenerateLandmark(function (path, position) {
        var library = new Landmark(path, position, getResource("imgObjLibrary"));
        library.defineTrigger(function () {
            var librarySequence = new Sequence();
            librarySequence.addAction(procureStopAction());
            librarySequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM, CH00_LIBRARY_01, true)
                .addChoice(TXT_YES).addChoice(TXT_NO));
            librarySequence.addAction(procureCodeFragmentAction(function () {
                if (eventChoice == 0) {
                    if (!hero.hasCodexEntry(CDX_LORE005_HUMANSOCIETY)) {
                        librarySequence.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL, CH00_LIBRARY_02_1, true));
                        librarySequence.addAction(procureCodeFragmentAction(function () {
                            var codexEntryGained = false;
                            var i = 0;
                            while (!codexEntryGained && (i < 5)) {
                                if (!hero.hasCodexEntry(1001 + i)) {
                                    hero.obtainCodexEntry(1001 + i);
                                    codexEntryGained = true;
                                }
                                i++;
                            }
                        }));
                    } else {
                        librarySequence.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL, CH00_LIBRARY_02_2, true));
                    }
                    librarySequence.addAction(procureCodeFragmentAction(function () {
                        var karmaGained = 0;
                        for (i = 0; i < hero.codexEntries.length; i++) {
                            if ((hero.codexEntries[i] != null) && (hero.codexEntries[i].read)) {
                                karmaGained++;
                            }
                        }
                        karmaGained = Math.floor(karmaGained * (0.75 + 0.5 * Math.random()));
                        hero.addKarma(karmaGained);
                    }));
                } else {
                    librarySequence.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL, TXT_SUIT_YOURSELF, true));
                }
                librarySequence.addAction(procureResumeAction());
            }));
            registerObject(GUI_EVENT, librarySequence);
        });
        return library;
    });
    return libraryType;
}

// TODO: do a good implementation of the skill library
function describeSkillLibraryType(chance) {
    var libraryType = new LandmarkType(chance);
    libraryType.singletonId = "singleton: ch00_skill_evade";
    libraryType.defineGenerateLandmark(function (path, position) {
        var library = new Landmark(path, position, getResource("imgObjLibrary"));
        library.defineTrigger(function () {
            var librarySequence = new Sequence();
            librarySequence.addAction(procureStopAction());
            librarySequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM, CH00_LIBRARY_01, true)
                .addChoice(TXT_YES).addChoice(TXT_NO));
            librarySequence.addAction(procureCodeFragmentAction(function () {
                if (eventChoice == 0) {
                    librarySequence.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL, CH00_LIBRARY_02_3, true));
                    librarySequence.addAction(procureCodeFragmentAction(function () {
                        hero.gainSkill(SKL_EVADE);
                        landscape.actualize();
                    }));
                } else {
                    librarySequence.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL, TXT_SUIT_YOURSELF, true));
                }
                librarySequence.addAction(procureResumeAction());
            }));
            registerObject(GUI_EVENT, librarySequence);
        });
        return library;
    });
    return libraryType;
}

function describeCommonChestType(chance) {
    var objectType = new LandmarkType(chance);
    objectType.defineGenerateLandmark(function (path, position) {
        var object = new Landmark(path, position, getResource("imgObjChest1"));
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
                                registerObject(GUI_COMMON, procureHeroTextAction(TEXT_COLOR_RED,
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

// TODO: do a good implementation of the skill chest
function describeCh00SkillChestType(chance) {
    var objectType = new LandmarkType(chance);
    objectType.singletonId = "singleton: ch00_skill_netcast";
    objectType.defineGenerateLandmark(function (path, position) {
        var object = new Landmark(path, position, getResource("imgObjChest1"));
        object.defineTrigger(function () {
            var objectSequence = new Sequence();
            objectSequence.addAction(procureStopAction());
            objectSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM, CH00_COMMON_CHEST_01, true)
                .addChoice(TXT_YES).addChoice(TXT_NO));
            objectSequence.addAction(procureCodeFragmentAction(function () {
                if (eventChoice == 0) {
                    objectSequence.addAction(
                        procureDisplayCenteredMessageAction(WW_SMALL, CH00_COMMON_CHEST_02_4, true));
                    objectSequence.addAction(procureCodeFragmentAction(function () {
                        hero.gainSkill(SKL_NETCAST);
                        landscape.actualize();
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

function describeDestroyedHouseType(chance) {
    var objectType = new LandmarkType(chance);
    objectType.singletonId = "singleton: ch00_phase01";
    objectType.defineGenerateLandmark(function (path, position) {
        var object = new Landmark(path, position, getResource("imgObjDestroyedHouse"));
        var triggered = false;
        registerObject(pathToObjectLayer(path), procureFloatingImageAction(object, getResource("imgQuestMark"),
            function () {
                return triggered;
            }));
        object.defineTrigger(function () {
            var objectSequence = new Sequence();
            objectSequence.addAction(procureStopAction());
            objectSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM, [
                "Dominique and Sallinger discover a house that was practically brought apart by something large and vicious. White tablecloth " +
                    "is stained crimson with either wine or blood, or maybe even a mix of both. Half-eaten victims are lying on the floor. " +
                    "Even though they are all commoners, they are dressed better than what one would expect. It seems that a party was held here.",
                "Доминик и Сэллинджер обнаруживают дом, который был практически разобран на куски чем-то большим и жестоким. Белая скатерть " +
                    "покрыта пятнами чего-то красного, вина или крови или даже смеси того и другого. На полу лежат наполовину съеденные жертвы. " +
                    "Хотя все они незнатного происхождения, одеты они лучше, чем следовало бы ожидать. Видно, здесь проходило празднество."
            ], true));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["This is... terrible. Who could have done that?", "Это... ужасно. Кто мог такое сотворить?"]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["Cannot say for sure, but it was definitely larger than your average denizen of these parts.",
                    "Не могу сказать наверняка, но оно определённо было больше, чем среднестатистический житель этих мест."]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["A large and powerful mythical creature, probably, winged and... *looks at the burnt wall* ...fire-breathing? " +
                    "Is this what I think it is - the eternal rival of brave knights?",
                    "Большое и могучее мифическое существо, вероятно, крылатое и... *смотрит на обгоревшие стены* ...огнедышащее? " +
                        "Неужели это то, что я думаю, - извечный враг храбрых рыцарей?"]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["Pray that it was burned by fire from candles. If we encounter the dragon, we are toast.",
                    "Молись, чтобы это был огонь от свеч. Если мы наткнёмся на дракона, нам конец."]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["Have more faith in me, Sallinger!", "Тебе следует больше верить в меня, Сэллинджер!"]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["My faith in you is only rivaled by my realism. And... *spots something on the floor and proceeds to pick it up* " +
                    "...my observation talent.",
                    "Моя вера в тебя уступает только моему реализму. И... *замечает что-то на полу и направляется поднять его* " +
                        "...моей наблюдательности."]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["Certainly not by your modesty. What is it?", "Явно не скромности. Что это?"]));
            objectSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM, [
                "Sallinger gives Dominique an emerald scale.", "Сэллинджер отдаёт Доминику изумрудную чешуйку."
            ], true));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["A scale? So I am not too far off, after all. But what do we do with it?",
                    "Чешуйка? Значит, я не так уж и далёк от истины. Но что нам с ней делать?"]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["If it's really the body part of the culprit, we could use it to find the owner.",
                    "Если это действительно часть тела виновника торжества, мы можем использовать её, чтобы найти её владельца."]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["How do we do that?", "И как мы это сделаем?"]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["Every action leaves traces in nature. They are tiny karmic ripples in Natural Order that no creature can see. " +
                    "Except for those that are attuned to it. The seers.",
                    "Всякое действие оставляет в природе следы. Это слабая кармическая рябь в Естественном Порядке, " +
                        "которую не может увидеть ни одно существо. Кроме тех, кто на них настроен. Провидцев."]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["The seers? Aren't they all charlatans telling dwellers what they want to hear? How do we find the real one?",
                    "Провидцы? Разве они все не шарлатаны, говорящие жителям то, что они хотят услышать? Как мы найдём настоящего?"]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["Our path will lead us straight to one. Dwellers are lead to false seers because what they wish to hear can only " +
                    "be spoken by charlatans. They do not seek the truth. They actually run from it.",
                    "Наш путь приведёт нас к нему. Жители находят фальшивых провидцев, потому что желаемое им могут сказать только " +
                        "шарлатаны. Они не ищут правды. На самом деле, они бегут от неё."]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["That is not the case with us. We need a seer for a very specific task that only a seer can accomplish. " +
                    "Besides, with my high-fidelity scam sense I can tell the fake ones easily.",
                    "В нашем случае это не так. Нам нужен провидец для вполне конкретного задания, которое по плечу только провидцу. " +
                        "К тому же, с моим высокоточным чутьём подвоха я вмиг разоблачу любую фальшивку."]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["Scam sense?.. Hmmm, what about that one occasion when I bought--",
                    "Чутьё подвоха?.. Хммм, а как насчёт того случая, когда я купил--"]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["There are RULES, Dominique. I can only use it to further our mission or save us from imminent death. " +
                    "That is how rat riders and their companions are.",
                    "Есть ПРАВИЛА, Доминик. Я могу использовать его только для продвижения к нашей цели или чтобы спасти нас от " +
                        "неминуемой гибели. Так заведено у крысиных всадников и их товарищей."]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["Ah, right, right... I lead the way and make decisions. Well, then, it is time for Dominique and " +
                    "Sallinger to enter the scene! Let us make haste to find the seer.",
                    "Да, верно, верно... Я веду и принимаю решения. Ну, что ж, пришло время Доминику и Сэллинджеру " +
                        "появиться на сцене! Поспешим же найти провидца."]));
            objectSequence.addAction(procureCodeFragmentAction(function () {
                triggered = true;
                gst[CH00][CH00_PHASE]++;
                landscape.actualize();
                hero.obtainCodexEntry(CDX_JOU002_CH00P02);
            }));
            objectSequence.addAction(procureResumeAction());
            registerObject(GUI_EVENT, objectSequence);
        });
        return object;
    });
    return objectType;
}

function describeSeersHutType(chance) {
    var objectType = new LandmarkType(chance);
    objectType.singletonId = "singleton: ch00_phase03";
    objectType.defineGenerateLandmark(function (path, position) {
        var object = new Landmark(path, position, getResource("imgObjSeersHut"));
        var triggered = false;
        registerObject(pathToObjectLayer(path), procureFloatingImageAction(object, getResource("imgQuestMark"),
            function () {
                return triggered;
            }));
        object.defineTrigger(function () {
            var objectSequence = new Sequence();
            objectSequence.addAction(procureStopAction());
            objectSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM, [
                "Dominique and Sallinger find a characteristic ascetic hut. Just the place where one would expect to meet a seer. " +
                    "Dominique dismounts and enters the hut with Sallinger.",
                "Доминик и Сэллинджер находят характерную аскетичную хижину. Идеальное место обитания провидца. " +
                    "Доминик спешивается и входит в хижину вместе с Сэллинджером."
            ], true));
            var seersName = ["Seer", "Провидец"];
            objectSequence.addAction(procureDisplaySpeechMessageAction(seersName, null,
                ["Walk quietly, knight. Your steps are heavy and loud in a way you know not.",
                    "Ходи тише, рыцарь. Твои шаги тяжелы и громки в неизвестном тебе качестве."]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["*quietly to Sallinger* Is this the real deal?", "*тихо обращаясь к Сэллинджеру* Он настоящий?"]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(seersName, null,
                ["Oh please. Your distrust stinks all across Asqarra. And yet what you seek you could have received " +
                    "from any peasant along the road.", "Ох, пожалуйста, давайте без этого. Твоё недоверие воняет на всю Аскарру. " +
                    "И тем не менее, то, что ты ищешь, ты мог узнать у любого крестьянина по дороге."]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["What does that mean? Do you imply to know why we are here?", "Что это ещё значит? Намекаете, что знаете, зачем мы здесь?"]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(seersName, null, ["So long as you do.", "Покуда знаете вы."]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["You seem awfully full of yourself, seer. If there is weight to such attitude, why don't you tell us what we seek?",
                    "Вы чрезвычайно самоуверенны, провидец. Если это чем-то обоснованно, почему бы вам не рассказать нам, что же мы ищем?"]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(seersName, null,
                ["The hogman brought a part of Party Crasher with him. Party Crasher has been a horror to " +
                    "these parts for as long as the oldest homesteads stand here.", "Кабанолюд принёс с собой часть Незваного Гостя. " +
                    "Незваный Гость - ужас этих земель со времён первых построенных здесь усадеб."]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(seersName, null,
                ["Twice a year he leaves his lair to hunt and feast upon the dwellers. But more than living flesh he likes beverages. " +
                    "That's why celebrations are very rare this time of year.",
                    "Дважды в год он покидает своё логово, чтобы поохотиться и попировать над телами жителей. Но более, чем живую плоть, " +
                        "он любит вина. Именно поэтому в это время года праздники - большая редкость."]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["I guess we know how they end.", "Полагаю, мы знаем, чем они заканчиваются."]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(seersName, null,
                ["Yes, yes... You certainly won't be disappointed when you meet it. Go now and do what you've come to do.",
                    "Да, да... Ты определённо не будешь разочарован, когда встретишь его. Иди же и делай то, зачем пришёл."]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["*sarcastically* Would you be so kind as to tell us directions? That was why we sought you out in the first place, you know.",
                    "*язвительно* Не будете ли так добры подсказать дорогу? Мы вроде как за этим и пришли."]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(seersName, null,
                ["Oh, right. But as I said, you could have asked pretty much anyone - just follow the snake path that brought you to me.",
                    "А, точно. Но как я сказал, вы могли спросить это у кого угодно - просто идите по тропе змеи, которая привела вас ко мне."]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["We owe you a thanks, good seer.", "Мы благодарны вам, добрый провидец."]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(seersName, null,
                ["I appreciate the sentiment, but you actually don't. My reward will find me another way. So long as you succeed.",
                    "Я ценю это, но не за что. Моя награда найдёт меня иными путями. Покуда вы исполните задуманное."]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["*leaving, to Dominique* I suppose that was a thanks for nothing. Really, he is one annoying fellow.",
                    "*уходя, к Доминику* Вероятно, это было спасибо ни за что. Честно признаться, он меня весьма раздражает."]));
            objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["Don't be too hard on him. It must be stressful to be one of few true seers, being forced to tell obvious things day after day.",
                    "Не сердись на него. Наверное, непросто быть одним из немногих настоящих провидцев и говорить очевидные, казалось бы, вещи."]));
            objectSequence.addAction(procureCodeFragmentAction(function () {
                triggered = true;
                gst[CH00][CH00_PHASE]++;
                landscape.actualize();
                hero.obtainCodexEntry(CDX_JOU003_CH00P03);
            }));
            objectSequence.addAction(procureResumeAction());
            registerObject(GUI_EVENT, objectSequence);
        });
        return object;
    });
    return objectType;
}

function describeSerpentCaveType(chance) {
    var objectType = new LandmarkType(chance);
    objectType.singletonId = "singleton: ch00_phase05";
    objectType.defineGenerateLandmark(function (path, position) {
        var object = new Landmark(path, position, getResource("imgObjCave"));
        var triggered = false;
        registerObject(pathToObjectLayer(path), procureFloatingImageAction(object, getResource("imgQuestMark"),
            function () {
                return triggered;
            }));
        object.defineTrigger(function () {
            var objectSequence = new Sequence();
            objectSequence.addAction(procureStopAction());
            if (gst[CH00][CH00_CONVERSATION_CAVE] == 0) {
                gst[CH00][CH00_CONVERSATION_CAVE] = 1;
                objectSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM, [
                    "Dominique and Sallinger stand before the eerie entrance to the cave where Party Crasher, presumably lives. " +
                        "Crude drawings of snakes and serpents \"adorn\" the walls as they fade into darkness of the lair.",
                    "Доминик и Сэллинджер стоят перед жутковатым входом в пещеру, где, судя по всему, живёт Незваный Гость. " +
                        "Корявые рисунки змей и змеев \"украшают\" стены, уходящие во тьму логова."
                ], true));
                objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                    ["Somehow I get a feeling that what we are going to be fighting now is not really a dragon...",
                        "Что-то подсказывает мне, что мы сейчас будем не с драконом драться..."]));
                objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                    ["Well, I glad you realized that. But somehow I get a feeling that it does not make it much easier... " +
                        "You know you don't have to do it, right?", "Ну, я рад, что это понял. Но что-то подсказывает мне, что легче от " +
                        "этого будет ненамного... Знаешь, тебе ведь необязательно это делать."]));
                objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                    ["*sighs* I know there's no stopping you. Just please, make sure you are amply prepared before you head there, okay?",
                        "*вздыхает* Я знаю, что тебя всё равно не остановить. Но, пожалуйста, убедись, что ты в полной мере готов, " +
                            "прежде чем пойдёшь туда, хорошо?"]));
                objectSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                    ["Sure.", "Конечно."]));
                objectSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM,
                    ["Would you like to enter the cave?", "Желаете войти в пещеру?"], true).addChoice(TXT_YES).addChoice(TXT_NO));
            } else {
                objectSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM,
                    ["Dominique and Sallinger stand before the eerie entrance to the cave where Party Crasher, presumably lives. " +
                        "Crude drawings of snakes and serpents \"adorn\" the walls as they fade into darkness of the lair. <br> <br> " +
                        "Would you like to enter the cave?",
                        "Доминик и Сэллинджер стоят перед жутковатым входом в пещеру, где, судя по всему, живёт Незваный Гость. " +
                            "Корявые рисунки змей и змеев \"украшают\" стены, уходящие во тьму логова. <br> <br> Желаете войти в пещеру?"], true)
                    .addChoice(TXT_YES).addChoice(TXT_NO));
            }
            objectSequence.addAction(procureCodeFragmentAction(function () {
                if (eventChoice == 0) {
                    triggered = true;
                    gst[CH00][CH00_PHASE]++;
                    objectSequence.addAction(procureLandscapeTransitionAction(LSC_SERPENT_CAVE, true), OBJECTS_NEAR_FRONT);
                } else {
                    objectSequence.addAction(procureResumeAction());
                }
            }));
            registerObject(GUI_EVENT, objectSequence);
        });
        return object;
    });
    return objectType;
}

function describeMilestoneType(chance) {
    var objectType = new LandmarkType(chance);
    objectType.singletonId = "singleton: ch00_milestone";
    objectType.defineGenerateLandmark(function (path, position) {
        var object = new Landmark(path, position, getResource("imgObjMilestone"));
        var triggered = false;
        registerObject(pathToObjectLayer(path), procureFloatingImageAction(object, getResource("imgQuestMark"),
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

                    if (gst[CH00][CH00_TUTORIAL_DANGER] < 2) {
                        if (gst[CH00][CH00_PHASE] >= 5) {
                            var dangerTutorialSequence = new Sequence();
                            dangerTutorialSequence.addAction(procureDistanceTimeoutAction(200));
                            dangerTutorialSequence.addAction(procureStopAction());
                            dangerTutorialSequence.addAction(procureDisplaySpeechMessageAction(
                                CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                                ["Hold on a second. I'm sure you've realized this by now, of course, but just in "
                                    + "case... Memento mori. If you fall in battle it's all over. So be careful and "
                                    + "talk to chroniclers often.",
                                    "Погоди секунду. Я уверен, что ты это, конечно, уже осознал, но на всякий случай... "
                                        + "Мементо мори. Если ты падёшь в битве, всё кончено. Так что будь осторожен и "
                                        + "почаще общайся с летописцами."]));
                            dangerTutorialSequence.addAction(procureDisplaySpeechMessageAction(
                                CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                                ["I sure know that. Even though most enemies we've encountered yet are not exactly "
                                    + "formidable. But yes, I've felt it too.",
                                    "Да знаю я. Даже не взирая на то, что большинство встреченных нами врагов не были "
                                        + "особо грозными. Но да, я тоже это почувствовал."]));
                            if (gst[CH00][CH00_TUTORIAL_DANGER] == 0) {
                                var terminated = false;
                                dangerTutorialSequence.addAction(procureCodeFragmentAction(function () {
                                    registerObject(GUI_EVENT, procureFloatingImageAction(hero,
                                        getResource("imgDangerMark"), function () {
                                            return terminated;
                                        }));
                                }));
                                dangerTutorialSequence.addAction(procureDisplaySpeechMessageAction(
                                    CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                                    ["Exactly. We should expect mortal danger ahead, so better safe than sorry. "
                                        + "If you see a danger sign floating over an enemy, beware: it's going "
                                        + "to be a tough battle.",
                                        "Именно. Впереди нас ждут смертельные опасности, так что бережёного бог "
                                            + "бережёт. Если увидишь знак опасности над врагом, берегись: "
                                            + "битва будет трудной."]));
                                dangerTutorialSequence.addAction(procureCodeFragmentAction(function () {
                                    terminated = true;
                                }));
                            } else {
                                dangerTutorialSequence.addAction(procureDisplaySpeechMessageAction(
                                    CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                                    ["Exactly. We should expect mortal danger ahead, so better safe than sorry.",
                                        "Именно. Впереди нас ждут смертельные опасности, так что бережёного бог "
                                            + "бережёт."]));
                            }
                            dangerTutorialSequence.addAction(procureResumeAction());
                            registerObject(GUI_EVENT, dangerTutorialSequence);
                            gst[CH00][CH00_TUTORIAL_DANGER] = 2;
                        }
                    }
                }
                objectSequence.addAction(procureResumeAction());
            }));

            registerObject(GUI_EVENT, objectSequence);
        });
        return object;
    });
    return objectType;
}

function describeGreenSerpentType(chance) {
    var encounterType = new LandmarkType(chance);
    encounterType.singletonId = "singleton: " + "Green Serpent";
    encounterType.defineGenerateLandmark(function (path, position) {
        var enemyObject = new Landmark(path, position, getResource("imgEnemySerpent1Stand"));
        enemyObject.setAttackImage(getResource("imgEnemySerpent1Attack"));
        var enemy = enlistGreenSerpent(HS_BASE, HS_CH00, enemyObject);
        enemyObject.defineTrigger(function () {
            var encounterSequence = new Sequence();
            encounterSequence.addAction(procureStopAction());
            encounterSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM,
                ["A huge serpentine creature rises before the rat rider, glaring menacingly at him. Bones and rotten chunks of meat are " +
                    "lying all around it.", "Огромное змееподобное существо возвысилось над крысиным всадником, свирепо пожирая его " +
                    "взглядом. Вокруг - кости и куски гнилого мяса."], true));
            encounterSequence.addAction(procureDisplaySpeechMessageAction(["Party Crasher", "Незваный Гость"], null,
                ["Well, well, well... *hisses* Vissitorsss?", "Так, так, так... *шипит* Посссетители?"]));
            encounterSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["Oh no. I just hate talking monsters. They tend to demoralize you before you even start fighting.",
                    "О нет. Ненавижу говорящих чудовищ. Они деморализуют тебя ещё до начала боя."]));
            encounterSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["Hello, Mr. Serpent! Though it pains me to say it: thou must die!",
                    "Здравствуйте, господин Змей! Мне не хочется этого говорить, но: вы должны умереть!"]));
            encounterSequence.addAction(procureDisplaySpeechMessageAction(["Party Crasher", "Незваный Гость"], null,
                ["Mmmm, yesss. Thosse who ssay ssuch wordsss tend to be... ssspicy!",
                    "Мммм, превосссходно. Те, кто говорят такие ссслова обычно... оссстренькие!"]));
            encounterSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["Get ready, Sallinger! Here it comes!", "Готовься, Сэллинджер! Он нападает!"]));
            encounterSequence.addAction(procureCodeFragmentAction(function () {
                setEventMusic(MUS_RELIEF);
            }));

            var afterbattleSequence = new Sequence();
            afterbattleSequence.addAction(procureCodeFragmentAction(function () {
                hero.gainAuraSkill(SKL_ACEOFSPADES);
            }));
            afterbattleSequence.addAction(procureDisplayCenteredMessageAction(WW_MEDIUM,
                ["The serpent is lying on cold stones of the cavern. Everything has suddenly gone quiet.",
                    "Змей лежит на холодных камнях пещеры. Всё внезапно затихло."], true));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["Dominique, do you realize what you just did?", "Доминик, ты понимаешь, что ты сейчас сделал?"]));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["My muscles would not move, but... I made my body deliver the finishing blow anyway! It - was - marvellous!",
                    "Мои мышцы не двигались, но... я всё равно заставил своё тело нанести последний удар! Вос-хи-ти-тель-но!"]));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["It was aura. The material manifestation of a spirit. When you reached your limit, your spirit gained power " +
                    "over the laws of physics.", "Это была аура. Материальное проявление духа. Когда ты находился на грани, " +
                    "твой дух возымел власть над законами физики."]));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["They say everyone has the potential to unleash aura, but ones who actually do it are very few. " +
                    "Even among experienced rat riders it's a rarity to come by, not to mention a newcomer like you.",
                    "Говорят, что у каждого есть потенциал высвобождения ауры, но на практике это могут сделать единицы. " +
                        "Даже среди опытных крысиных всадников это редкость, не говоря уже о новичке, вроде тебя."]));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["A newcomer?.. What do you mean?", "Новичке?.. Что ты имеешь ввиду?"]));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["Heck. Did I say it out loud?", "Чёрт. Я сказал это вслух?.."]));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["I am... Wait. When did I become a rat rider? Who was I before? Why can't I--",
                    "Я же... Постой. Как давно я стал крысиным всадником? Кем я был до этого? Почему я не могу--"]));
            afterbattleSequence.addAction(procureGuiEffectAction(GFX_SCREEN_FLASH, "white", null));
            afterbattleSequence.addAction(procureCodeFragmentAction(function () {
                hero.expendKarma(273);
            }));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["Dominique... Stop, don't try to remember. It will be a violation of the contract, and we'll have to pay with karma.",
                    "Доминик... Остановись, не пытайся вспоминать. Это будет нарушением сделки, и нам придётся заплатить за это кармой."]));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["You wanted to become a hero, and this is your chance. Just forget and live your new life.",
                    "Ты хотел стать героем, и сейчас у тебя есть такая возможность. Просто забудь и живи своей новой жизнью."]));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["No, Sallinger! There is strange emptiness inside me, and I have finally perceived it! I... I don't remember where I am from, " +
                    "where is my home... Tell me, what's going on?", "Нет, Сэллинджер! Внутри меня какая-то неведомая пустота, и я только " +
                    "сейчас её ощутил! Я... я не помню, откуда я, и где мой дом... Объясни мне: что происходит?"]));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["*sighs* It seems, victory over Party Crasher netted us enough karma to allow your thoughts into the forbidden zone. Well, " +
                    "then. If I continue, hero's destiny will elude you.", "*вздыхает* Видимо, победа над Незваным Гостем принесла нам " +
                    "достаточно кармы, чтобы твоя мысль вошла в запретную зону. Ну, что ж. Если я продолжу, судьба героя ускользнёт от тебя."]));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["... So be it. I'd rather be whole Dominique, than a hollow hero. Speak.",
                    "... Ну, и пусть. Я не хочу быть пустым героем. Лучше я буду просто Домиником, но целым. Говори."]));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["Suit yourself, Dominique. You struck a deal with the Peddler of Destinies. You gave up your past, its potential and memory " +
                    "of it to become a warrior capable of carrying a weapon.", "Твоя воля, Доминик. Ты заключил сделку с Торговцем Судьбами. " +
                    "Ты отдал своё прошлое, весь его потенциал и память о нём, чтобы стать воином, способным держать оружие."]));
            afterbattleSequence.addAction(procureGuiEffectAction(GFX_SCREEN_FLASH, "white", null));
            afterbattleSequence.addAction(procureCodeFragmentAction(function () {
                hero.expendKarma(428);
            }));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["My past...", "Моё прошлое..."]));
            afterbattleSequence.addAction(procureCodeFragmentAction(function () {
                displayGui = false;
            }));
            afterbattleSequence.addAction(procureMaskAction());
            afterbattleSequence.addAction(procureDisplayFreeTextAction(400, 200, W - 900,
                ["Hogville. Three years ago.", "Хогвилль. Три года назад."], true));
            afterbattleSequence.addAction(procureDisplayFreeTextAction(200, 200, W - 400, [
                "Dominique was a son of a Hogland noble, born to rule Hogville someday. He grew up reading tales of brave knights and for all " +
                    "of his life he dreamed about heroic exploits. <br> <br> His younger brother, Vink, was a savant that studied cosmology " +
                    "and ancient arts of mysticism and alchemy. <br> <br> While dreaming of valor and fame, Dominique nonetheless prepared " +
                    "to inherit the power and studied organizational and city management basics, speechcraft and politics.",
                "Доминик был сыном Хогледнского дворянина, будущим правителем Хогвилля. Он вырос на рыцарских сказаниях и всю сознательную " +
                    "жизнь мечтал о подвигах. <br> <br> Его младший брат, Винк, был учёным и посвящал своё время изучению космологии и " +
                    "древних искусств мистицизма и алхимии. <br> <br> Доминик, мечтая о доблести и славе, в то же время готовился принять " +
                    "власть от отца и постигал основы организации и градоправления, ораторское искусство и политику."
            ], true));
            afterbattleSequence.addAction(procureDisplayFreeTextAction(200, 200, W - 400, [
                "That is until Vink told him about a mysterious Peddler of Destinies, who can trade various fragments of dwellers' lives for " +
                    "karma and karma for whatever life they wish for. \"Nothing is impossible!\" - Vink said. <br> <br> And so Dominique " +
                    "became obsessed with exchanging the loathed destiny of a noble for incredible adventures. Especially since his " +
                    "responsibility before the citizens grew with each passing day, and his father was about to retire.",
                "Но так было до тех пор, пока Винк не рассказал ему, что существует некий Торговец Судьбами, способный обменивать самые разные " +
                    "фрагменты жизни жителей на карму, а карму на такую жизнь, какую они пожелают. \"Нет ничего невозможного!\" - говорил Винк. " +
                    "<br> <br> И Доминик стал грезить день и ночь о том, чтобы сменить претившую ему судьбу дворянина на невероятные " +
                    "приключения. Ведь его ответственность перед горожанами росла с каждым днём, а отец готовился сложить свои полномочия."
            ], true));
            afterbattleSequence.addAction(procureDisplayFreeTextAction(200, 200, W - 400, [
                "His naive wish turned frighteningly real, when he actually met this Peddler during one of his fruitless weapon training " +
                    "sessions on the outskirts of a forest near Hogville... <br> <br> When dinner time came, not a single dweller in Hogville " +
                    "remembered that there once lived a hogman by the name of Dominique who should have become a governor. Only Vink felt that " +
                    "he lost something important and precious, but he could not understand what it was...",
                "Наивное желание обернулось пугающей реальностью, когда в очередной раз безрезультатно тренируясь с оружием на опушке леса близ " +
                    "Хогвилля, он встретил того самого Торговца... <br> <br> К обеду никто уже не помнил, что жил в Хогвилле когда-то кабанолюд " +
                    "по имени Доминик, который должен был стать правителем. Лишь только Винк ощущал, будто он потерял что-то очень важное и " +
                    "ценное, но никак не мог понять, что..."
            ], true));
            afterbattleSequence.addAction(procureUnmaskAction());
            afterbattleSequence.addAction(procureGuiEffectAction(GFX_SCREEN_FLASH, "white", null));
            afterbattleSequence.addAction(procureCodeFragmentAction(function () {
                displayGui = true;
                hero.expendKarma(1199);
            }));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["... Hogville. So that's it. But how do you know of my contract with the Peddler of Destinies?",
                    "... Хогвилль. Вот, значит, как оно. Но откуда ты знаешь о моей сделке с Торговцем Судьбами?"]));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["Let's say I made my own deal with him. But I did not give away my memory. I'm sorry, Dominique, but I cannot say more.",
                    "Скажем так, я тоже заключил с ним сделку. Но я не отдавал ему свою память. " +
                        "Извини, Доминик, но я не могу пока сказать больше."]));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["That is not important anyway. Sallinger. We... I am coming home.", "Да и неважно. Сэллинджер. Мы... Я отправляюсь домой."]));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                ["We, Dominique. We just broke your contract with the Peddler, but we have paid for it already. You are still a rat rider, and " +
                    "I am your friend. Wherever you go, I go with you.", "Мы, Доминик. Мы только что нарушили твою сделку с Торговцем, но мы " +
                    "уже заплатили за это. Ты по-прежнему крысиный всадник, а я твой друг. Куда ты, туда и я."]));
            afterbattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                ["*slightly smiling* Excellent. Then let us go.", "*слегка улыбаясь* Отлично. Тогда идём."]));
            afterbattleSequence.addAction(procureLandscapeTransitionAction(LSC_PROLOGUE), OBJECTS_NEAR_FRONT);
            afterbattleSequence.addAction(procureCodeFragmentAction(function () {
                hero.obtainCodexEntry(CDX_JOU004_CH00P04)
            }));

            setBattleMusic(MUS_BOSS_BATTLE);
            encounterSequence.addAction(procureInitiateBattleAction(enemy, afterbattleSequence));
            registerObject(GUI_EVENT, encounterSequence);
        });
        return enemyObject;
    });
    return encounterType;
}

function describeBanditType(chance) {
    return describeCommonEncounter(chance, ["Bandit", "Разбойник"],
        getResource("imgEnemyBandit1Stand"), getResource("imgEnemyBandit1Attack"),
        enlistBandit, HS_BASE, HS_CH00, CH00, CH00_TUTORIAL_BANDIT,
        procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait, CH00_TUTORIAL_BANDIT_TXT));
}

function describeBrigandType(chance) {
    return describeCommonEncounter(chance, ["Brigand", "Разбойник"],
        getResource("imgEnemyBandit2Stand"), getResource("imgEnemyBandit2Attack"),
        enlistBrigand, HS_BASE, HS_CH00, CH00, CH00_TUTORIAL_BRIGAND,
        procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait, CH00_TUTORIAL_BRIGAND_TXT));
}

function describeWolfType(chance) {
    return describeCommonEncounter(chance, ["Wolf", "Волк"],
        getResource("imgEnemyWolf1Stand"), getResource("imgEnemyWolf1Attack"),
        enlistWolf, HS_BASE, HS_CH00, CH00, CH00_TUTORIAL_WOLF,
        procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait, CH00_TUTORIAL_WOLF_TXT));
}

function describeRedWolfType(chance) {
    return describeCommonEncounter(chance, ["Red Wolf", "Бурый волк"],
        getResource("imgEnemyWolf2Stand"), getResource("imgEnemyWolf2Attack"),
        enlistRedWolf, HS_BASE, HS_CH00, CH00, CH00_TUTORIAL_RED_WOLF,
        procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait, CH00_TUTORIAL_RED_WOLF_TXT));
}

function describeWaspType(chance) {
    return describeCommonEncounter(chance, ["Giant Wasp", "Гигантская оса"],
        getResource("imgEnemyWasp1Stand"), getResource("imgEnemyWasp1Attack"),
        enlistWasp, HS_BASE, HS_CH00, CH00, CH00_TUTORIAL_WASP,
        procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait, CH00_TUTORIAL_WASP_TXT));
}

function describePoisonWaspType(chance) {
    return describeCommonEncounter(chance, ["Posion Wasp", "Ядовитая оса"],
        getResource("imgEnemyWasp2Stand"), getResource("imgEnemyWasp2Attack"),
        enlistPoisonWasp, HS_BASE, HS_CH00, CH00, CH00_TUTORIAL_POISON_WASP,
        procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait, CH00_TUTORIAL_POISON_WASP_TXT));
}

function describeArmadilloKnightType(chance) {
    return describeCommonEncounter(chance, ["Armadillo Knight", "Броненосец-рыцарь"],
        getResource("imgEnemyArmadillo1Stand"), getResource("imgEnemyArmadillo1Attack"),
        enlistArmadilloKnight, HS_BASE, HS_CH00, CH00, CH00_TUTORIAL_ARMADILLO,
        procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait, CH00_TUTORIAL_ARMADILLO_TXT));
}

function describeBanditRingleaderType(chance) {
    return describeDangerEncounter(chance, ["Bandit Ringleader", "Главарь банды"],
        getResource("imgEnemyBandit3Stand"), getResource("imgEnemyBandit3Attack"),
        enlistBanditRingleader, HS_BASE, HS_CH00);
}

function describeArmadilloVityazType(chance) {
    return describeDangerEncounter(chance, ["Armadillo Vityaz", "Броненосец-витязь"],
        getResource("imgEnemyArmadillo2Stand"), getResource("imgEnemyArmadillo2Attack"),
        enlistArmadilloVityaz, HS_BASE, HS_CH00);
}

/* ENEMIES */

function enlistTutorialBandit(animationObject) {
    var bandit = new Enemy(6, 15, 10, 8, 250, animationObject, CDX_CH00ENM_BANDIT);
    var attackSkill = gainAttackSkill();
    var defendSkill = gainDefendSkill();
    var opening = gainOpeningSkill(40, 0.5);
    bandit.defineBehave(function (character, battleFrame) {
        var position;
        if (battleFrame == 0) {
            character.useSkill(gainOpenerSkill(200), 0);
            var battleTutorialPhase1Sequence = new Sequence();
            battleTutorialPhase1Sequence.addAction(procureStopAction());
            battleTutorialPhase1Sequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                [
                    "Remember: the key to defeating your opponents is to read them and respond accordingly. "
                        + "Not that I need to tell that to you.",
                    "Помни: ключ к победе над противниками - умение видеть их насквозь, предсказывать их действия "
                        + "и соответствующим образом реагировать. Хотя кому я это говорю - ты и так всё прекрасно знаешь."
                ]));
            battleTutorialPhase1Sequence.addAction(procureDisplayCenteredMessageAction(WW_LARGE,
                [
                    "Welcome to the battle tutorial of Rat Rider Dominique! <br> <br> Dominique and Sallinger will fight their opponents "
                        + "in the so-called \"precision-timing battles\". You can see two battle gauges at the top of the screen. "
                        + "Every action that you or your opponent take is reflected on the respective battle gauge, the upper belonging to you "
                        + "and the lower - to your foe. Whenever something reaches the left end of the gauge, it is performed by the character. "
                        + "<br> <br> Dominique, being the skilled warrior able to read through his opponents, can see what the character "
                        + "is going to do in advance, and, given enough time to react, can respond with appropriate actions of his own.",
                    "Добро пожаловать на обучение поединкам игры \"Доминик, крысиный всадник\"! <br> <br> Доминик и Сэллинджер будут "
                        + "сражаться со своими противниками в так называемых \"битвах точного тайминга\". Вы можете видеть две шкалы боя в верхней "
                        + "части экрана. Каждое Ваше действие или действие Вашего противника отражается на соответствующей шкале боя; Вам "
                        + "принадлежит верхняя, Вашему врагу - нижняя. Когда что-либо достигает левого края шкалы, оно исполняется персонажем. "
                        + "<br> <br> Доминик, будучи опытным воином, способным \"читать\" своих противников, может видеть, что персонаж "
                        + "собирается сделать, и при наличии времени может ответить необходимыми действиями со своей стороны."
                ], true));
            battleTutorialPhase1Sequence.addAction(procureCodeFragmentAction(function () {
                registerObject(GUI_EVENT, procureDisplayLabelAction(HP_GAUGE_X + 200, HP_GAUGE_Y + 20, ["HP gauge", "Шкала ОЖ"]));
                registerObject(GUI_EVENT, procureDisplayLabelAction(HP_GAUGE_X + 200, HP_GAUGE_Y + 50,["SP gauge", "Шкала ОВ"]));
            }));
            battleTutorialPhase1Sequence.addAction(procureDisplayCenteredMessageAction(WW_LARGE,
                [
                    "You can choose what action you perform from the skill menu on the right by pressing 'Up' and 'Down' keys. "
                        + "The shape of what will appear on the battle gauge will be sketched, so you can actually time your attacks and blocks. "
                        + "Pressing 'Space' or 'Enter' key (further referenced by ACTION) will make Dominique use chosen skill if he has "
                        + "sufficient stamina and if he is not busy performing another action. <br> <br> "
                        + "You can see Dominique's health (red) and stamina (yellow) gauges in the upper-left corner of the screen. They are measured by "
                        + "health points (HP) and stamina points (SP), respectively.",
                    "Вы можете выбирать, какое действие совершить, из меню навыков справа, нажимая кнопки 'Вверх' и 'Вниз'. "
                        + "Отобразится набросок того, что появится на шкале боя, так что вы сможете рассчитать, когда атаковать и блокировать. "
                        + "Нажав клавишу 'Пробел' или 'Enter' (далее именуемые клавишами ДЕЙСТВИЕ), Вы заставите Доминика использовать выбранный "
                        + "навык, если у него достаточно выносливости и если он не занят выполнением другого действия. <br> <br> "
                        + "Вы можете видеть шкалы здоровья (красная) и выносливости (жёлтая) Доминика в верхнем-левом углу экрана. "
                        + "Они измеряются в очках здоровья (ОЖ) и очках выносливости (ОВ), соответственно."
                ], true));
            battleTutorialPhase1Sequence.addAction(procureDisplayCenteredMessageAction(WW_LARGE,
                [
                    "Time for the actual combat! Bandit's behavior is simple: defend, attack, then make some clumsy action that "
                        + "leaves him open. Times when a character's defense is up are depicted as BLUE areas on the battle gauge. "
                        + "Times when a character's defense is down are depicted as RED areas on the battle gauge. Attack impacts are "
                        + "depicted as swords. Know that when Dominique attacks, he is vulnerable. <br> <br> "
                        + "What you should try to do now is DEFEND when your opponent attacks and attack when he is open. Press ACTION "
                        + "to begin the fight.",
                    "Пришло время для самой битвы! Поведение бандита простое: защититься, атаковать, затем сделать что-нибудь дико неуклюжее, "
                        + "что оставит его уязвимым. Время, когда защита персонажа повышена, обозначается СИНИМИ зонами на шкале боя. "
                        + "Время, когда защита персонажа понижена, обозначается КРАСНЫМИ зонами на шкале боя. Нанесения ударов "
                        + "обозначаются мечами. Помните, что когда Вы атакуете, Вы уязвимы. <br> <br> "
                        + "Сейчас Вам следует попробовать ЗАЩИЩАТЬСЯ, когда Ваш противник атакует, и атаковать, когда он открыт. "
                        + "Нажмите ДЕЙСТВИЕ, чтобы начать бой."
                ], true));
            battleTutorialPhase1Sequence.addAction(procureResumeAction());
            registerObject(GUI_EVENT, battleTutorialPhase1Sequence);
            hero.inflict([acquireResponseArtifact(BGL_LEFT, 1, 1, BGL_COLOR, BGL_COLOR, function (dmg) {
                if ((hero.hp > 20) && (hero.hp - dmg <= 20)) {
                    var safeBattleSequence = new Sequence();
                    safeBattleSequence.addAction(procureStopAction());
                    safeBattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                        ["Dominique, get a hold of yourself.", "Доминик, возьми себя в руки."]));
                    safeBattleSequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                        ["I was just getting warmed up. Now I'll show him the prowess of a rat rider!",
                            "Я просто разогревался. Сейчас я покажу ему мастерство крысиного всадника!"]));
                    safeBattleSequence.addAction(procureCodeFragmentAction(function () {
                        hero.restoreHp(hero.attrMaxHp * 0.7);
                        for (var i = 0; i < 4; i ++) {
                            attrIncrease[i] = 0;
                        }
                    }));
                    safeBattleSequence.addAction(procureResumeAction());
                    registerObject(GUI_EVENT, safeBattleSequence);
                }
                return dmg >= hero.hp ? hero.hp - 1 : dmg;
            }, true).perpetuate()]);
            character.inflict([acquireResponseArtifact(BGL_LEFT, 1, 1, BGL_COLOR, BGL_COLOR, function (dmg) {
                if ((character.hp > character.attrMaxHp * 0.66) && (character.hp - dmg <= character.attrMaxHp * 0.66)) {
                    var battleTutorialPhase2Sequence = new Sequence();
                    battleTutorialPhase2Sequence.addAction(procureStopAction());
                    battleTutorialPhase2Sequence.addAction(procureCodeFragmentAction(function () {
                        hero.expendSp(hero.attrMaxSp * 0.6);
                    }));
                    battleTutorialPhase2Sequence.addAction(procureDisplaySpeechMessageAction(CHR_BANDIT.name, CHR_BANDIT.portrait,
                        ["What's wrong? *grinning* Getting tired already?", "Что-то не так? *ухмыляясь* Уже устал?"]));
                    battleTutorialPhase2Sequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                        ["Nonsense! Don't see any reason to go all out on you.", "Нонсенс! Не вижу причин сражаться с тобой в полную силу."]));
                    battleTutorialPhase2Sequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                        ["Drop the act, Dominique, and take measures to counter fatigue.",
                            "Не паясничай, Доминик, а лучше прими меры против усталости."]));
                    battleTutorialPhase2Sequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                        ["Oh, come on, Sallinger... Get into the festive mood!",
                            "Ох, да ладно, Сэллинджер... Ощути праздник!"]));
                    battleTutorialPhase2Sequence.addAction(procureDisplayCenteredMessageAction(WW_LARGE,
                        [
                            "Since prolonged combat has been proven to be hazardous for health, you will be prone to incapacitate "
                                + "your foes as soon as possible. Thus, it will make sense to attack your opponent not only when he is vulnerable "
                                + "but when he is simply not guarding. However, rapid attacks will deplete Dominique's stamina more quickly. "
                                + "<br> <br> There are ways to restore your health and stamina, of which items are the most simple.",
                            "Так как продолжительный бой, как правило, опасен для здоровья, Вы будете склонны разбираться с Вашими врагами "
                                + "как можно скорее. Таким образом, имеет смысл атаковать Вашего противника не только, когда он уязвим, но "
                                + "и когда он просто не защищается. Однако частые атаки быстро истощат выносливость Доминика. "
                                + "<br> <br> Есть способы восстановить здоровье и выносливость, из которых предметы - самый простой."
                        ], true));
                    battleTutorialPhase2Sequence.addAction(procureCodeFragmentAction(function () {
                        if (hero.activeItems[0] == null) {
                            hero.activeItems[0] = {id: ITM_SPRES1, charges: 2};
                        } else {
                            hero.availableItems[hero.availableItems.length] = hero.activeItems[0];
                            hero.activeItems[0] = {id: ITM_SPRES1, charges: 2};
                        }
                    }));
                    battleTutorialPhase2Sequence.addAction(procureCodeFragmentAction(function () {
                        registerObject(GUI_EVENT, procureDisplayLabelAction(ITEM_WINDOW_X, INFO_WINDOW_Y + 100,
                            ["Items menu", "Меню предметов"]));
                    }));
                    battleTutorialPhase2Sequence.addAction(procureDisplayCenteredMessageAction(WW_LARGE,
                        [
                            "Items function just like skills, except that they do not expend stamina, but have a limited number of uses instead. "
                                + "Use 'Left' and 'Right' keys to choose an item from the item menu in the lower-right corner of the screen. "
                                + "Holding 'Ctrl' key will display information on the chosen item and sketch it on the battle gauge. "
                                + "Pressing ACTION while holding 'Ctrl' will make Dominique use the chosen item. "
                                + "<br> <br> Dominique realizes he has a bottle of refreshing and invigorating spineapple juice. "
                                + "It should come in very handy right now. Try to use it. <br> <br> Press ACTION to continue.",
                            "Предметы работают так же, как и навыки, за исключением того, что они не тратят выносливость, но вместо этого имеют "
                                + "ограниченное число применений. Используйте клавиши 'Влево' и 'Вправо', чтобы выбирать предметы из меню предметов "
                                + "в нижнем-правом углу экрана. Если удерживать клавишу 'Ctrl', можно просмотреть информацию о выбранном предмете и "
                                + "увидеть его набросок на шкале боя. Если нажать ДЕЙСТВИЕ, удерживая 'Ctrl', Доминик воспользуется предметом. "
                                + "<br> <br> Доминик внезапно понимает, что у него есть бутылка освежающего и бодрящего спинанасового сока. "
                                + "Сейчас она очень кстати. Попробуйте её использовать. <br> <br> Нажмите ДЕЙСТВИЕ для продолжения."
                        ], true));
                    battleTutorialPhase2Sequence.addAction(procureResumeAction());
                    registerObject(GUI_EVENT, battleTutorialPhase2Sequence);
                    return character.hp - dmg <= character.attrMaxHp * 0.5 ? character.hp - character.attrMaxHp * 0.5 : dmg;
                } else if ((character.hp > character.attrMaxHp * 0.33) && (character.hp - dmg <= character.attrMaxHp * 0.33)) {
                    var battleTutorialPhase3Sequence = new Sequence();
                    battleTutorialPhase3Sequence.addAction(procureStopAction());
                    battleTutorialPhase3Sequence.addAction(procureCodeFragmentAction(function () {
                        character.inflict([acquirePerpetualAttributeModifierArtifact(ATTR_AGILITY, 0.7)]);
                    }));
                    battleTutorialPhase3Sequence.addAction(procureDisplaySpeechMessageAction(CHR_BANDIT.name, CHR_BANDIT.portrait,
                        ["*pants* Now that is just mean... I will get ya! I just need to... catch a breath...",
                            "*тяжело дышит* Ну, это уже нечестно... Я тебя достану! Только... отдышусь..."]));
                    battleTutorialPhase3Sequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                        ["Alright, Dominique. Let's finish this.", "Отлично, Доминик. Давай закончим с этим."]));
                    battleTutorialPhase3Sequence.addAction(procureDisplayCenteredMessageAction(WW_LARGE,
                        [
                            "It seems your opponent is out of breath already. Now he will be considerably slower. "
                                + "Don't expect it to happen very often though. <br> <br> When Dominique is more agile than his opponent, "
                                + "his battle gauge will move faster. While it offers great advantage, it can be tricky to control the flow "
                                + "of battle, if Dominique is always fighting at top speed. There is a way to negate this letdown. "
                                + "<br> <br> If you hold 'Shift' key, Dominique will synchronize his actions with those of his foe. "
                                + "This, of course, only works if Dominique is initially more nimble. Use the opportunity to finish the bandit. "
                                + "Press ACTION to continue.",
                            "Похоже, Ваш противник уже выдохся. Теперь он будет куда более медлителен. "
                                + "Не рассчитывайте однако, что такое будет происходить часто. <br> <br> Когда Доминик более ловок, чем его "
                                + "противник, его шкала боя будет двигаться быстрее. В то время, как это даёт огромное преимущество, управлять "
                                + "течением битвы станет сложнее, если Доминик всегда будет сражаться на полной скорости. Есть способ это "
                                + "обойти. <br> <br> Если Вы зажмёте клавишу 'Shift', Доминик синхронизирует свои действия с действиями врага. "
                                + "Это, конечно же, работает только, когда Доминик изначально более ловок. Используйте эту возможность, "
                                + "чтобы добить бандита. Нажмите ДЕЙСТВИЕ для продолжения."
                        ], true));
                    battleTutorialPhase3Sequence.addAction(procureResumeAction());
                    registerObject(GUI_EVENT, battleTutorialPhase3Sequence);
                    return character.hp - dmg <= character.attrMaxHp * 0.2 ? character.hp - character.attrMaxHp * 0.2 : dmg;
                }
                return dmg;
            }, true).perpetuate()]);
            behaviorFluctuation = 1;
        } else if (character.getRightmostCooldown() < getAbsoluteArtifactPosition(200)) {
            if (behaviorFluctuation == 1) {
                position = getStandardEnemyOffset(defendSkill) + 30 +  Math.floor(70 * Math.random());
                character.useSkill(defendSkill, position);
                character.inflict([acquireLabelArtifact(getAbsoluteArtifactPosition(position),
                    ["Guard up", "Защита"])]);
                behaviorFluctuation++;
            } else if (behaviorFluctuation == 2) {
                position = getStandardEnemyOffset(defendSkill) + 30 +  Math.floor(70 * Math.random());
                character.useSkill(attackSkill, position);
                character.inflict([acquireLabelArtifact(getAbsoluteArtifactPosition(position),
                    ["Impact", "Удар"])]);
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
    var bandit = new Enemy(10 * strScale, 15 * strScale, 10 * strScale, 8 * strScale, 120 * strScale,
        animationObject, CDX_CH00ENM_BANDIT);
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
                character.useSkill(defendSkill, getStandardEnemyOffset(defendSkill)
                    + 30 +  Math.floor(70 * Math.random()));
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
    var brigand = new Enemy(11 * strScale, 13 * strScale, 11 * strScale, 10 * strScale, 130 * strScale,
        animationObject, CDX_CH00ENM_BRIGAND);
    var powerAttack = gainPowerAttackSkill(200, 0.6, 1.7);
    var defenseSkill = gainEnemyDefenseSkill(300, 1.7);
    var attackSkill = gainAttackSkill();
    var fumbledAttackSkill = gainFumbledAttackSkill(50, 0.6);
    brigand.defineBehave(function (character, battleFrame) {
        var position;
        if (battleFrame == 0) {
            character.useSkill(gainOpenerSkill(100), 0);
            behaviorFluctuation = 1;
        } else if (character.getRightmostCooldown() < getAbsoluteArtifactPosition(200)) {
            if (behaviorFluctuation == 1) {
                position = getStandardEnemyOffset(powerAttack) + 20 +  Math.floor(20 * Math.random());
                character.useSkill(powerAttack, position);
                character.inflict([acquireLabelArtifact(getAbsoluteArtifactPosition(position),
                    ["Power attack", "Силовая атака"])]);
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
    var banditRingleader = new Enemy(11 * strScale, 15 * strScale, 11 * strScale, 9 * strScale, 300 * strScale,
        animationObject, CDX_CH00ENM_BANDITRINGLEADER);
    var powerAttack = gainPowerAttackSkill(200, 0.6, 1.9);
    var doubleStrike = gainLearnableDoubleStrikeSkill();
    var defenseSkill = gainEnemyDefenseSkill(200, 2.1);
    var attackSkill = gainAttackSkill();
    var jabSkill = gainJabSkill();
    banditRingleader.defineBehave(function (character, battleFrame) {
        var position;
        if (battleFrame == 0) {
            if (gst[CH00][CH00_BANDIT_RINGLEADER_QUEST] < 1) {
                gst[CH00][CH00_BANDIT_RINGLEADER_QUEST] = 1;
                itemsLooted.push({id: ITM_MAXHPUP1, charges: 1});
            }
            character.useSkill(gainOpenerSkill(10), 0);
            behaviorFluctuation = 1;
        } else if (character.getRightmostCooldown() < getAbsoluteArtifactPosition(200)) {
            if (behaviorFluctuation == 1) {
                character.useSkill(defenseSkill, getStandardEnemyOffset(defenseSkill)
                    + 50 +  Math.floor(20 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 2) {
                position = getStandardEnemyOffset(doubleStrike) + 30 + Math.floor(40 * Math.random());
                character.useSkill(doubleStrike,  position);
                character.inflict([acquireLabelArtifact(getAbsoluteArtifactPosition(position),
                    ["Double strike", "Двойной удар"])]);
                behaviorFluctuation += 1 + Math.floor(Math.random() * 2);
            } else if (behaviorFluctuation == 3) {
                character.useSkill(jabSkill,  getStandardEnemyOffset(jabSkill)
                    + 50 + Math.floor(10 * Math.random()));
                character.useSkill(attackSkill,  getStandardEnemyOffset(attackSkill)
                    + 50 + Math.floor(30 * Math.random()));
                behaviorFluctuation = 5;
            } else if (behaviorFluctuation == 4) {
                character.useSkill(attackSkill,  getStandardEnemyOffset(attackSkill)
                    + 50 + Math.floor(30 * Math.random()));
                character.useSkill(jabSkill,  getStandardEnemyOffset(jabSkill)
                    + 50 + Math.floor(10 * Math.random()));
                behaviorFluctuation = 5;
            } else if (behaviorFluctuation == 5) {
                character.useSkill(powerAttack,  getStandardEnemyOffset(powerAttack)
                    + 70 + Math.floor(40 * Math.random()));
                behaviorFluctuation = 1;
            }
        }
    });
    return banditRingleader;
}

function enlistWolf(startingHeroStrength, maxHeroStrength, animationObject) {
    var strScale = getHeroStrengthScale(startingHeroStrength, maxHeroStrength);
    var wolf = new Enemy(7 * strScale, 14 * strScale, 12 * strScale, 9 * strScale, 90 * strScale,
        animationObject, CDX_CH00ENM_WOLF);
    var attackSkill = gainAttackSkill();
    var defendSkill = gainDefendSkill();
    var fumbledAttackSkill = gainFumbledAttackSkill(40, 0.3);
    wolf.defineBehave(function (character, battleFrame) {
        var position;
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
                position = getStandardEnemyOffset(fumbledAttackSkill) + 30 + Math.floor(50 * Math.random());
                character.useSkill(fumbledAttackSkill, position);
                character.inflict([acquireLabelArtifact(getAbsoluteArtifactPosition(position),
                    ["Fumbled attack", "Неудачная атака"])]);
                behaviorFluctuation = 1;
            }
        }
    });
    return wolf;
}

function enlistRedWolf(startingHeroStrength, maxHeroStrength, animationObject) {
    var strScale = getHeroStrengthScale(startingHeroStrength, maxHeroStrength);
    var redWolf = new Enemy(9 * strScale, 12 * strScale, 12 * strScale, 10 * strScale, 150 * strScale,
        animationObject, CDX_CH00ENM_REDWOLF);
    var attackSkill = gainAttackSkill();
    var defendSkill = gainDefendSkill();
    var opening = gainOpeningSkill(40, 0.4);
    redWolf.defineBehave(function (character, battleFrame) {
        if (battleFrame == 0) {
            character.inflict([acquireResponseArtifact(BGL_LEFT, 1, 1, BGL_COLOR, BGL_COLOR, function (dmg) {
                var status = acquireNimbleStatus(0, 1200, 1.2);
                registerObject(GUI_COMMON, procureStatusTextAction(character, TEXT_COLOR_INK,
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
    var wasp = new Enemy(8 * strScale, 13 * strScale, 13 * strScale, 10 * strScale, 80 * strScale,
        animationObject, CDX_CH00ENM_WASP);
    var jabSkill = gainEnemyAttackSkill(40, 0.6, 0.4);
    var evadeSkill = gainEnemyEvadeSkill(100, 0.2);
    var openingSkill = gainOpeningSkill(50, 0.8);
    var poisonStingSkill = gainStatusAttackSkill(100, 0.7, acquireWeakStatus, 1.1, 1000, 0.7);
    wasp.defineBehave(function (character, battleFrame) {
        var position;
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
                character.useSkill(jabSkill, getStandardEnemyOffset(jabSkill)
                    + 30 + Math.floor(30 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 4) {
                position = getStandardEnemyOffset(evadeSkill) + 40 + Math.floor(40 * Math.random());
                character.useSkill(evadeSkill, position);
                character.inflict([acquireLabelArtifact(getAbsoluteArtifactPosition(position),
                    ["Evasion", "Уклонение"])]);
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 5) {
                character.useSkill(openingSkill,  getStandardEnemyOffset(openingSkill)
                    + 20 + Math.floor(20 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 6) {
                position = getStandardEnemyOffset(poisonStingSkill) + 40 + Math.floor(40 * Math.random());
                character.useSkill(poisonStingSkill, position);
                character.inflict([acquireLabelArtifact(getAbsoluteArtifactPosition(position),
                    ["Poison sting", "Ядовитое жало"])]);
                behaviorFluctuation = 1;
            }
        }
    });
    return wasp;
}

function enlistPoisonWasp(startingHeroStrength, maxHeroStrength, animationObject) {
    var strScale = getHeroStrengthScale(startingHeroStrength, maxHeroStrength);
    var poisonWasp = new Enemy(9 * strScale, 13 * strScale, 13 * strScale, 10 * strScale,
        80 * strScale, animationObject, CDX_CH00ENM_POISONWASP);
    var jabSkill = gainEnemyAttackSkill(40, 0.6, 0.4);
    var evadeSkill = gainEnemyEvadeSkill(100, 0.2);
    var poisonStingSkill = gainStatusAttackSkill(140, 0.7, acquirePoisonedStatus, 1.1, 1000, 30);
    poisonWasp.defineBehave(function (character, battleFrame) {
        var position;
        if (battleFrame == 0) {
            character.inflict([acquirePerpetualAttributeModifierArtifact(ATTR_EVASION, 0.7)]);
            character.useSkill(gainOpenerSkill(100), 0);
            behaviorFluctuation = 1;
        } else if (character.getRightmostCooldown() < getAbsoluteArtifactPosition(200)) {
            if (behaviorFluctuation == 1) {
                character.useSkill(evadeSkill, getStandardEnemyOffset(evadeSkill)
                    + 40 + Math.floor(40 * Math.random()));
                behaviorFluctuation += 1 + Math.floor(Math.random() * 2);
            } else if (behaviorFluctuation == 2) {
                character.useSkill(jabSkill, getStandardEnemyOffset(jabSkill)
                    + 30 + Math.floor(30 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 3) {
                character.useSkill(jabSkill, getStandardEnemyOffset(jabSkill)
                    + 30 + Math.floor(30 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 4) {
                character.useSkill(evadeSkill, getStandardEnemyOffset(evadeSkill)
                    + 40 + Math.floor(40 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 5) {
                character.useSkill(jabSkill, getStandardEnemyOffset(jabSkill)
                    + 30 + Math.floor(30 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 6) {
                character.useSkill(jabSkill, getStandardEnemyOffset(jabSkill)
                    + 30 + Math.floor(30 * Math.random()));
                behaviorFluctuation += 1;
            } else if (behaviorFluctuation == 7) {
                position = getStandardEnemyOffset(poisonStingSkill) + 40 + Math.floor(40 * Math.random());
                character.useSkill(poisonStingSkill, position);
                character.inflict([acquireLabelArtifact(getAbsoluteArtifactPosition(position),
                    ["Poison sting", "Ядовитое жало"])]);
                behaviorFluctuation = 1;
            }
        }
    });
    return poisonWasp;
}

function enlistArmadilloKnight(startingHeroStrength, maxHeroStrength, animationObject) {
    var strScale = getHeroStrengthScale(startingHeroStrength, maxHeroStrength);
    var armadilloKnight = new Enemy(11 * strScale, 18 * strScale, 9 * strScale, 8 * strScale,
        170 * strScale, animationObject, CDX_CH00ENM_ARMADILLOKNIGHT);
    var attackSkill = gainAttackSkill();
    var defendSkill = gainDefendSkill();
    var fullguardAttack = gainFullguardAttackSkill(160, 1.7);
    var openingSkill = gainOpeningSkill(50, 0.8);
    armadilloKnight.defineBehave(function (character, battleFrame) {
        var position;
        if (battleFrame == 0) {
            character.useSkill(gainOpenerSkill(100), 0);
            behaviorFluctuation = 1;
        } else if (character.getRightmostCooldown() < getAbsoluteArtifactPosition(200)) {
            if (behaviorFluctuation == 1) {
                character.useSkill(defendSkill, getStandardEnemyOffset(defendSkill)
                    + 5 +  Math.floor(15 * Math.random()));
                behaviorFluctuation += 1 + Math.floor(Math.random() * 2);
            } else if (behaviorFluctuation == 2) {
                position = getStandardEnemyOffset(fullguardAttack) + 10 + Math.floor(20 * Math.random());
                character.useSkill(fullguardAttack, position);
                character.inflict([acquireLabelArtifact(getAbsoluteArtifactPosition(position),
                    ["Fullguard attack", "Защищённая атака"])]);
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
    var armadilloVityaz = new Enemy(13 * strScale, 20 * strScale, 9 * strScale, 8 * strScale,
        330 * strScale, animationObject, CDX_CH00ENM_ARMADILLOVITYAZ);
    var counterattack = gainCounterattackSkill();
    var guardedStrike = gainGuardedStrikeSkill();
    var defendSkill = gainDefendSkill();
    var fullguardStrike = gainFullguardAttackSkill(160, 1.7);
    var openingSkill = gainOpeningSkill(50, 0.8);
    armadilloVityaz.defineBehave(function (character, battleFrame) {
        var position;
        if (battleFrame == 0) {
            if (gst[CH00][CH00_ARMADILLO_VITYAZ_QUEST] < 1) {
                gst[CH00][CH00_ARMADILLO_VITYAZ_QUEST] = 1;
                itemsLooted.push({id: ITM_MAXSPUP1, charges: 1});
            }
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
                position = getStandardEnemyOffset(guardedStrike) + 30 + Math.floor(30 * Math.random());
                character.useSkill(guardedStrike, position);
                character.inflict([acquireLabelArtifact(getAbsoluteArtifactPosition(position),
                    ["Guarded strike", "Осторожный удар"])]);
                position = getStandardEnemyOffset(counterattack) + 30 + Math.floor(30 * Math.random());
                character.useSkill(counterattack, position);
                character.inflict([acquireLabelArtifact(getAbsoluteArtifactPosition(position),
                    ["Counterattack", "Контратака"])]);
                behaviorFluctuation = 6;
            } else if (behaviorFluctuation == 5) {
                position = getStandardEnemyOffset(counterattack) + 30 + Math.floor(30 * Math.random());
                character.useSkill(counterattack, position);
                character.inflict([acquireLabelArtifact(getAbsoluteArtifactPosition(position),
                    ["Counterattack", "Контратака"])]);
                position = getStandardEnemyOffset(guardedStrike) + 30 + Math.floor(30 * Math.random());
                character.useSkill(guardedStrike, position);
                character.inflict([acquireLabelArtifact(getAbsoluteArtifactPosition(position),
                    ["Guarded strike", "Осторожный удар"])]);
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
    var greenSerpent = new Enemy(13 * strScale, 18 * strScale, 13 * strScale, 11 * strScale,
        600, animationObject, CDX_CH00ENM_GREENSERPENT);
    var attackSkill = gainEnemyAttackSkill(70, 0.7, 1);
    var powerAttack = gainPowerAttackSkill(200, 0.6, 1.6);
    var jabSkill = gainJabSkill();
    var defendSkill = gainEnemyDefenseSkill(150, 2);
    var evadeSkill = gainEnemyEvadeSkill(100, 0.1);
    var poisonFangSkill = gainStatusAttackSkill(140, 0.9, acquirePoisonedStatus, 1.1, 2000, 40);
    var lieInWait = gainLieInWaitSkill(200, 0.5, 0.8);
    var deathblow = gainDeathblowSkill(300, 0.5);
    greenSerpent.defineBehave(function (character, battleFrame) {
        if (battleFrame == 0) {
            character.inflict([acquireResponseArtifact(BGL_LEFT, 1, 1, BGL_COLOR, BGL_COLOR, function (dmg) {
                if ((character.hp > character.attrMaxHp * 0.7) && (character.hp - dmg <= character.attrMaxHp * 0.7)) {
                    behaviorFluctuation = 1;
                    var battlePhase2Sequence = new Sequence();
                    battlePhase2Sequence.addAction(procureStopAction());
                    battlePhase2Sequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                        ["Heck. It was just playing with us. The real thing starts now!",
                            "Чёрт. Он просто играл с нами. Сейчас начнётся самое оно!"]));
                    battlePhase2Sequence.addAction(procureResumeAction());
                    registerObject(GUI_EVENT, battlePhase2Sequence);
                    return character.hp - dmg <= character.attrMaxHp * 0.5 ? character.hp - character.attrMaxHp * 0.5 : dmg;
                } else if ((character.hp > character.attrMaxHp * 0.1) && (character.hp - dmg <= character.attrMaxHp * 0.1)) {
                    behaviorFluctuation = 1;
                    var battlePhase3Sequence = new Sequence();
                    battlePhase3Sequence.addAction(procureStopAction());
                    battlePhase3Sequence.addAction(procureCodeFragmentAction(function () {
                        hero.battleGaugeArtifacts.length = 0;
                        enemy.battleGaugeArtifacts.length = 0;
                        var lockdown = [];
                        for (var i = 0; i < 7; i++) {
                            lockdown.push(
                                acquireSlotLockArtifact(BGL_LEFT, 1, 1, BGL_COLOR, BGL_COLOR, false, i, true).perpetuate());
                            if (i < 5) {
                                lockdown.push(
                                    acquireSlotLockArtifact(BGL_LEFT, 1, 1, BGL_COLOR, BGL_COLOR, true, i, true).perpetuate());
                            }
                        }
                        hero.inflict(lockdown);
                    }));
                    battlePhase3Sequence.addAction(procureDisplaySpeechMessageAction(["Party Crasher", "Незваный Гость"], null,
                        ["*hisses angrily* Enough of it!", "*зло шипит* Доссстаточно!"]));
                    battlePhase3Sequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                        ["*writhes in pain* I... can't move!", "*корчится от боли* Я... не могу сдвинуться с места!"]));
                    battlePhase3Sequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                        ["No way! Could it be poison?", "Быть не может! Неужели яд?"]));
                    battlePhase3Sequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                        ["Must be... But I won't let it end this way!", "Должно быть... Но я не позволю этому так закончиться!"]));
                    battlePhase3Sequence.addAction(procureDisplaySpeechMessageAction(["Party Crasher", "Незваный Гость"], null,
                        ["Now begone with your vermin!", "Сссгинь ссо своими грызунами!"]));
                    battlePhase3Sequence.addAction(procureDisplaySpeechMessageAction(CHR_DOMINIQUE.name, CHR_DOMINIQUE.portrait,
                        ["Not so fast, you drunken monster...", "Не так быстро, пьяное чудовище..."]));
                    battlePhase3Sequence.addAction(procureDisplaySpeechMessageAction(CHR_SALLINGER.name, CHR_SALLINGER.portrait,
                        ["Dominique?..", "Доминик?.."]));
                    battlePhase3Sequence.addAction(procureResumeAction());
                    battlePhase3Sequence.addAction(procureCodeFragmentAction(function () {
                        character.inflict([acquireResponseArtifact(BGL_LEFT, 1, 1,BGL_COLOR, BGL_COLOR, function () {
                            hero.battleGaugeArtifacts.length = 0;
                            return dmg < character.hp ? character.hp : dmg;
                        }, true)]);
                        hero.inflict([acquireGradualChangeArtifact(BGL_LEFT, 1, 500, BGL_COLOR, BGL_COLOR, ATTR_SP, 0, 100, 0, true)]);
                        hero.inflict([acquireGradualChangeArtifact(BGL_LEFT, 1, 500, BGL_COLOR, BGL_COLOR, ATTR_AP, 0, 2.5, 0, true)]);
                        hero.skillSet[7] = gainSkill(SKL_ACEOFSPADES);
                        skillChoice = 7;
                        var auraEffect = new Action();
                        auraEffect.definePlayFrame(function (frame) {
                            fc.beginPath();
                            fc.arc(hero.position, hero.height, (frame * 20) % 500, 0, 2 * Math.PI);
                            fc.lineWidth = frame % 25;
                            fc.strokeStyle = "white";
                            fc.stroke();
                            return frame >= 150;
                        });
                        registerObject(OBJECTS_NEAR_FRONT, auraEffect);
                    }));
                    registerObject(GUI_EVENT, battlePhase3Sequence);
                    return character.hp - dmg <= character.attrMaxHp * 0.05 ? character.hp - character.attrMaxHp * 0.05 : dmg;
                }
                return dmg;
            }, true).perpetuate()]);
            character.useSkill(gainOpenerSkill(10), 0);
            behaviorFluctuation = 1;
        } else if (character.getRightmostCooldown() < getAbsoluteArtifactPosition(200)) {
            var position;
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
                    position = getStandardEnemyOffset(lieInWait) + 30 + Math.floor(40 * Math.random());
                    character.useSkill(lieInWait, position);
                    character.inflict([acquireLabelArtifact(getAbsoluteArtifactPosition(position),
                        ["Lie in wait", "Затаиться"])]);
                    behaviorFluctuation = 1;
                }
            } else {
                if (behaviorFluctuation == 1) {
                    position = getStandardEnemyOffset(deathblow);
                    character.useSkill(deathblow, position);
                    character.inflict([acquireLabelArtifact(getAbsoluteArtifactPosition(position),
                        ["Deathblow", "Смертельный удар"])]);
                    behaviorFluctuation += 1;
                }
            }
        }
    });
    var baseKarma = greenSerpent.getKarma();
    greenSerpent.defineGetKarma(function () {
        return baseKarma + 2000;
    });
    return greenSerpent;
}