/**
 * Created by Etherfly on 09.03.14.
 *
 * This file contains codex entries.
 */

var CAT_LANDMARKS = 0;
var CAT_ENEMIES = 1;
var CAT_LORE = 2;
var CAT_JOURNAL = 3;

/* UTILITY FUNCTIONS */

function getCategoryNameById(catId) {
    switch (catId) {
        case CAT_LANDMARKS:
            return TXT_CODEX_LANDMARKS;
        case CAT_ENEMIES:
            return TXT_CODEX_ENEMIES;
        case CAT_LORE:
            return TXT_CODEX_LORE;
        case CAT_JOURNAL:
            return TXT_CODEX_JOURNAL;
        default:
            return ["Unknown", "Неизвестное"]
    }
}

function getCategoryDescById(catId) {
    switch (catId) {
        case CAT_LANDMARKS:
            return TXT_CODEX_LANDMARKS_DESC;
        case CAT_ENEMIES:
            return TXT_CODEX_ENEMIES_DESC;
        case CAT_LORE:
            return TXT_CODEX_LORE_DESC;
        case CAT_JOURNAL:
            return TXT_CODEX_JOURNAL_DESC;
        default:
            return ["Unknown", "Неизвестное"]
    }
}

/* CODEX ENTRIES */

/* LANDMARKS */

var CDX_CH00HOUSE = 1;
function inquireChapter00House() {
    return new CodexEntry(["Common house", "Обычный дом"], CAT_LANDMARKS, getResource("imgObjHouse1")).defineText([
        "A common house where commoners live their common days. They are usually very hospitable and will gladly let their guests stay " +
            "(and sometimes do some housework), especially if you are an able warrior, since hostile creatures always threaten their lives. " +
            "<br> <br> 50% chance to recover a small amount of HP or SP <br> 50% chance to spend SP and gain karma",
        "Обычный дом, где обычные существа проживают свои обычные дни. Как правило, они очень гостеприимны и с радостью позволяют своим " +
            "гостям оставаться на ночь (а иногда и домашнюю работу найдут), особенно, если вы умелый воин, ибо враждебные существа всегда " +
            "угрожают их жизням. <br> <br> 50% шанс восстановить небольшое количество ОЖ или ОВ <br> 50% шанс потратить ОВ и получить карму"
    ]);
}

var CDX_CH00HOTSPRING = 2;
function inquireChapter00HotSpring() {
    return new CodexEntry(["Hot spring", "Горячий источник"], CAT_LANDMARKS, getResource("imgObjHotspring")).defineText([
        "A small resort, built around a hot spring. They say waters of hot springs are warmed by Pyrne, itself, which may explain their " +
            "nurturing and healing properties. <br> <br> Recover SP and twice as much HP for karma",
        "Небольшой курорт возле горячего источника. Говорят, воды горячих источников обогреваются самим Пирном, что объясняет их " +
            "питательные и целебные свойства. <br> <br> Восстановить ОВ и вдвое больше ОЖ за карму"
    ]);
}

var CDX_CH00INN = 3;
function inquireChapter00Inn() {
    return new CodexEntry(["Inn", "Трактир"], CAT_LANDMARKS, getResource("imgObjInn")).defineText([
        "A place where weary travellers can eat and rest. Service varies in quality, but no matter what a snack and a bed are never " +
            "a harm (almost). <br> <br> Recover HP and twice as much SP for karma",
        "Место, где уставшие путешественники могут поесть и отдохнуть. Качество сервиса варьируется, но несмотря ни на что, еда и " +
            "кровать вредными не бывают (почти никогда). <br> <br> Восстановить ОЖ и вдвое больше ОВ за карму"
    ]);
}

var CDX_CH00SMITHY = 4;
function inquireChapter00Smithy() {
    return new CodexEntry(["Smithy", "Кузница"], CAT_LANDMARKS, getResource("imgObjSmith")).defineText([
        "Skilled masters of smithing hammer await warriors in need of their service. Blade honing and armor repairs is done using the latest " +
            "technology and maginetic powder which opens up limitless possibilities for improvement. <br> <br> A choice of: <br> - increase " +
            "attribute for karma <br> - obtain item for karma <br> - both at a discount <br> 50% chance to be offered attack and maginetic " +
            "powder: CUT, respectively <br> 50% chance to be offered defense and maginetic powder: PAD, respectively",
        "Искусные мастера кузнечного молота ждут воинов, нуждающихся в их услугах. Заточка клинков и починка брони выполняется с применением " +
            "новейших технологий и использованием магинитной пыли, что открывает безграничные возможности для улучшения. <br> <br> На выбор: " +
            "<br> - увеличить атрибут за карму <br> - получить предмет за карму <br> - и то, и другое со скидкой <br> 50% шанс, что предложат " +
            "атаку и магинитную пыль: МЕЧ, соответственно <br> 50% шанс, что предложат защиту и магинитную пыль: ЩИТ, соответственно"
    ]);
}

var CDX_CH00DOJO = 5;
function inquireChapter00Dojo() {
    return new CodexEntry(["Dojo", "Додзё"], CAT_LANDMARKS, getResource("imgObjDojo")).defineText([
        "Dojo is more than a place for training. It's a place where adepts find their path and build up the strength and courage to tread it. " +
            "Each dojo has its own set of traditions and rituals and each can offer unique knowledge of martial arts. <br> <br> A choice of: " +
            "<br> - increase attribute for karma <br> - obtain item for karma <br> - both at a discount <br> 50% chance to be offered agility " +
            "and muscleflex, respectively <br> 50% chance to be offered reflexes and wedgewing, respectively",
        "Додзё - это больше, чем место для тренировок. Это место, где адепты ищут свой путь и копят в себе силу и храбрость, чтобы идти по нему. " +
            "У каждого додзё есть свои традиции и ритуалы, а также уникальные знания боевых искусств. <br> <br> На выбор: <br> - увеличить " +
            "атрибут за карму <br> - получить предмет за карму <br> - и то, и другое со скидкой <br> 50% шанс, что предложат ловкость и " +
            "мышцегиб, соответственно <br> 50% шанс, что предложат реакцию и клинокрыл, соответственно"
    ]);
}

var CDX_CH00CHRONICLER = 6;
function inquireChapter00Chronicler() {
    return new CodexEntry(["Chronicler's pavillion", "Беседка летописца"], CAT_LANDMARKS, getResource("imgObjChronicler")).defineText([
        "A hero's story is lost if it's not recorded by a chronicler. Order of the Holy Stylus is at your service to keep every little detail " +
            "of your journey safe on the pages of huge tomes. <br> <br> Save your game in a browser's local storage <br> <br> Warning! Savegame " +
            "data is linked to your browser, so playing from another browser or clearing the cache will make you unable to load your game.",
        "История героя будет потеряна, если её не запишет летописец. Орден Святого Стилуса к Вашим услугам - каждая деталь Вашего путешествия " +
            "будет в безопасности на страницах огромных фолиантов. <br> <br> Сохранить игру в локальном хранилище браузера <br> <br> Внимание! " +
            "Данные сохранённой игры привязаны к Вашему браузеру, поэтому загрузить игру с другого браузера или после очистки кэша не получится."
    ]);
}

var CDX_CH00LIBRARY = 7;
function inquireChapter00Library() {
    return new CodexEntry(["Library", "Библиотека"], CAT_LANDMARKS, getResource("imgObjLibrary")).defineText([
        "A temple of knowledge where you can pick up useful bits of information about Ecumos. Reading books broadens horizons and opens up " +
            "freedom of thought. <br> <br> Gain new skill or codex entry and karma",
        "Храм знаний, где можно найти полезную информацию об Экумосе. Чтение книг расширяет горизонты и открывает свободу мысли. <br> <br> " +
            "Получить новый навык или запись в кодекс и карму"
    ]);
}

var CDX_CH00TRADINGPOST = 8;
function inquireChapter00TradingPost() {
    return new CodexEntry(["Trading post", "Торговый пост"], CAT_LANDMARKS, getResource("imgObjTradingPost")).defineText([
        "This is where exchange of goods and karma happens. Haggling karmic price is an art that is as complex as creation of items to be sold, " +
            "but anyone might give it a shot. <br> <br> Buy an item for karma",
        "Здесь происходит обмен товарами и кармой. Умение торговаться за хорошую кармическую цену - такое же сложное искусство, как и создание " +
            "самих продаваемых предметов, но попробовать может каждый. <br> <br> Приобрести предмет за карму"
    ]);
}

var CDX_CH00MILESTONE = 9;
function inquireChapter00Milestone() {
    return new CodexEntry(["Milestone", "Мильный камень"], CAT_LANDMARKS, getResource("imgObjMilestone")).defineText([
        "A road sign and an omen of things to come. With these one will never be lost, but wherever they point danger awaits there. <br> <br> " +
            "Progress through the area",
        "Дорожный знак и символ грядущего. С ними не потеряешься, но там, куда они указывают, ждёт опасность. <br> <br> Идти вперёд"
    ]);
}

/* ENEMIES */

var CDX_CH00ENM_BANDIT = 501;
function inquireChapter00EnemyBandit() {
    return new CodexEntry(["Bandit", "Бандит"], CAT_ENEMIES, getResource("imgEnemyBandit1Stand")).defineText([
        "A poor man, probably, a peasant, driven to the path of karmic robbery. Slow and predictable. <br> Anticipated action pattern: " +
            "defend, attack, opening. <br> <br> Hint: <br> - Since the time frame near the enemy attack provides a greater vulnerability, " +
            "it makes sense to use it to deliver a finishing blow. One has to be careful, however: if the enemy still stands after such an " +
            "attack or manages to strike first, one will sustain more damage.",
        "Бедняк, вероятно, крестьянин, вставший на путь кармического грабежа. Медленный и предсказуемый. <br> Ожидаемая схема действий: защита, " +
            "атака, уязвимость. <br> <br> Совет: <br> - Так как временная область близ вражеской атаки предоставляет большую уязвимость, имеет " +
            "смысл использовать её для нанесения последнего удара. Следует, однако, быть осторжным: если враг выстоит такую атаку или сумеет " +
            "нанести удар первым, полученные повреждения будут большими."
    ]);
}

var CDX_CH00ENM_WOLF = 502;
function inquireChapter00EnemyWolf() {
    return new CodexEntry(["Wolf", "Волк"], CAT_ENEMIES, getResource("imgEnemyWolf1Stand")).defineText([
        "A hungry gray wolf, preying upon careless travellers. Fast, but weak. Occassionally fumbles an attack, barely scratching the opponent " +
            "and leaving itself vulnerable. <br> Anticipated action pattern: attack, defend, fumbled attack.",
        "Голодный серый волк, охотящийся на беззаботных путешественников. Быстрый, но слабый. Иногда производит неудачную атаку, едва задевая " +
            "противника и оставляя себя уязвимым. <br> Ожидаемая схема действий: атака, защита, неудачная атака."
    ]);
}

var CDX_CH00ENM_WASP = 503;
function inquireChapter00EnemyWasp() {
    return new CodexEntry(["Giant wasp", "Гигантская оса"], CAT_ENEMIES, getResource("imgEnemyWasp1Stand")).defineText([
        "A big and dangerous insect that utilizes a weakening poison. Fast and nimble. Has a chance to evade attacks and uses evasion as means " +
            "of defense. <br> Anticipated action pattern: jab x2-3, evade, vulnerability, poison sting (weakness). <br> <br> Hints: <br> - " +
            "Every status attack (e.g., poison sting) has a defense threshold. If at the impact moment, target's effective defense equals to or " +
            "is greater than the threshold, the status effect is resisted. Thus, in order to protect yourself against negative status effects, " +
            "one simply needs to defend at the right moment. <br> - When giant wasp goes for a poison sting, not only its defense is lowered, " +
            "its evasion rate is going down as well. Just as with most enemies, striking right before the enemy does is an excellent way to " +
            "finish it off.",
        "Большое и опасное насекомое, использующее ослабляющий яд. Быстрое и ловкое. Имеет шанс уклониться от атак и использует уклонение как " +
            "способ защиты. <br> Ожидаемая схема действий: короткий удар x2-3, уклонение, уязвимость, ядовитое жало (слабость). <br> <br> " +
            "Советы: <br> - Всякая статусная атака (например, ядовитое жало) имеет определённый порог защиты. Если в момент удара эффективная " +
            "защита цели равна или превышает порог, статус будет отражён. Таким образом, для защиты от негативных статусов достаточно просто " +
            "оборониться в нужный момент. <br> - Когда гигансткая оса атакует ядовитым жалом, снижается не только её защита, но и её вероятность " +
            "уклонения. Как и с большинством других врагов, удар прямо перед атакой врага - отличный способ закончить бой."
    ]);
}

var CDX_CH00ENM_BRIGAND = 504;
function inquireChapter00EnemyBrigand() {
    return new CodexEntry(["Brigand", "Разбойник"], CAT_ENEMIES, getResource("imgEnemyBandit2Stand")).defineText([
        "A somewhat experienced karmic robber that has obtained some skills and a good weapon. Strong, but slow. Uses power attack that slows " +
            "him down near the moment of impact. <br> Anticipated action pattern: power attack, defend, [attack and fumbled attack] (random " +
            "order), defend. <br> <br> Hint: <br> - While power attack provides great opportunities to deliver a few good blows to the " +
            "opponent, it's also potentially deadly due to its high attack power. Since it slows down near the impact, one may use speed " +
            "synchronization ('Shift' key) to make sure that it is guarded against. One should remember, however, that synchronization negates " +
            "the advantage from having higher agility.",
        "В определённой степени опытный кармический грабитель, обретший некоторые навыки и хорошее оружие. Сильный, но медленный. Использует " +
            "силовую атаку, которая замедляет его близ момента удара. <br> Ожидаемая схема действий: силовая атака, защита, [атака и неудачная " +
            "атака] (в случайном порядке), защита. <br> <br> Совет: <br> - В то время, как силовая атака даёт великолепную возможность пронести " +
            "несколько ударов, она потенциально смертельна ввиду высокой силы атаки. Так как она замедляется к моменту удара, можно использовать " +
            "синхронизацию по скорости (клавиша 'Shift'), чтобы обеспечить успешную защиту. Стоит помнить, однако, что синхронизация лишает " +
            "преимущества в ловкости."
    ]);
}

var CDX_CH00ENM_POISONWASP = 505;
function inquireChapter00EnemyPoisonWasp() {
    return new CodexEntry(["Poison wasp", "Ядовитая оса"], CAT_ENEMIES, getResource("imgEnemyWasp2Stand")).defineText([
        "A lethal version of a giant wasp that uses deadly venom. As its kin, fast and nimble. Its poison deals damage over time, so defending " +
            "against it is imperative. <br> Anticipated action pattern: evade, jab x2, evade, jab x2, poison sting (HP loss).",
        "Смертельный вариант гигансткой осы, использует смертельный яд. Как и её родственница, быстрая и ловкая. Её яд наносит повреждения с " +
            "течением времени, поэтому защита от него критична. <br> Ожидаемая схема действий: уклонение, короткий удар x2, уклонение, " +
            "короткий удар x2, ядовитое жало (потеря ОЖ)."
    ]);
}

var CDX_CH00ENM_REDWOLF = 506;
function inquireChapter00EnemyRedWolf() {
    return new CodexEntry(["Red wolf", "Бурый волк"], CAT_ENEMIES, getResource("imgEnemyWolf2Stand")).defineText([
        "A dangerous red wolf with a short temper. Fast and reckless. Whenever it is hit, it becomes enraged and its speed increases. In " +
            "addition to that, as red wolf's health drops, it starts defending less often. <br> Anticipated action pattern: defend x0-2, " +
            "attack, [attack and opening] (random order). <br> <br> Hint: <br> - Less frequent and more powerful attacks are preferrable in " +
            "battle against red wolf, so precision aiming at openings is especially important.",
        "Опасный и крайне вспыльчивый бурый волк. Быстр и безрассуден. Каждый удар злит его и увеличивает его скорость. В дополнение к этому, " +
            "по мере снижения здоровья бурого волка, он обороняется всё реже. <br> Ожидаемая схема действий: защита x0-2, атака, [атака и " +
            "уязвимость] (в случайном порядке). <br> <br> Совет: <br> - Менее частые и более мощные атаки предпочтительны в битве с бурым " +
            "волком, поэтому точные попадания в уязвимости особенно важны."
    ]);
}

var CDX_CH00ENM_ARMADILLOKNIGHT = 507;
function inquireChapter00EnemyArmadilloKnight() {
    return new CodexEntry(["Armadillo knight", "Броненосец-рыцарь"], CAT_ENEMIES, getResource("imgEnemyArmadillo1Stand")).defineText([
        "An armored warrior of the armadillo kin. Armadillos have a penchant for exploring and experiencing different warrior ways. Tough, " +
            "but slow. Has a fullguard attack, which provides a defense increase instead of a decrease. <br> Anticipated action pattern: " +
            "defend, fullguard attack x0-1, opening, attack, defend.",
        "Бронированный воин из рода броненосцев. Броненосцы имеют склонность к исследованию и испытанию различных воинских традиций. Крепкий, " +
            "но медлительный. Имеет полностью защищённую атаку, дающую повышение защиты вместо понижения. <br> Ожидаемая схема действий: " +
            "защита, цельнозащитная атака x0-1, уязвимость, атака, защита."
    ]);
}

var CDX_CH00ENM_BANDITRINGLEADER = 508;
function inquireChapter00EnemyBanditRingleader() {
    return new CodexEntry(["Bandit ringleader", "Главарь банды"], CAT_ENEMIES, getResource("imgEnemyBandit3Stand")).defineText([
        "Danger encounter! <br> <br> A ringleader of a local band. Terrorizes commoners, occasionally commits atrocities and is a bad person " +
            "overall. Uses power attack and double strike. <br> Anticipated action pattern: defend, double strike, [jab and attack] (random " +
            "order), power attack. <br> <br> Learnable skill: double strike.",
        "Опасный бой! <br> <br> Главарь местной банды. Терроризирует жителей, иногда учиняет зверства и в целом является плохим (не)человеком. " +
            "Использует силовую атаку и двойной удар. <br> Ожидаемая схема действий: защита, двойной удар, [короткий удар и атака] (в случайном " +
            "порядке), силовая атака. <br> <br> Изучаемый навык: двойной удар."
    ]);
}

var CDX_CH00ENM_ARMADILLOVITYAZ = 509;
function inquireChapter00EnemyArmadilloVityaz() {
    return new CodexEntry(["Armadillo vityaz", "Броненосец-витязь"], CAT_ENEMIES, getResource("imgEnemyArmadillo2Stand")).defineText([
        "Danger encounter! <br> <br> A mighty hero of the armadillo kin. His true cause is long lost, so he wanders the world in search of " +
            "worthy opponents. Bulat plating and blades were yet to fail him in a fight. <br> Anticipated action pattern: fullguard attack, " +
            "opening, defend, [counterattack and guarded strike] (random order), defend.",
        "Опасный бой! <br> <br> Могучий герой из рода броненосцев. Его истинные цели давно забыты, так что он бродит по миру в поисках " +
            "достойных противников. Булатный доспех и лезвия ещё ни разу не подвели его в битве. До этого. <br> Ожидаемая схема действий: " +
            "цельнозащитная атака, уязвимость, защита, [контратака и осторожный удар] (в случайном порядке), защита."
    ]);
}

var CDX_CH00ENM_GREENSERPENT = 510;
function inquireChapter00EnemyGreenSerpent() {
    return new CodexEntry(["Green serpent", "Зелёный змей"], CAT_ENEMIES, getResource("imgEnemySerpent1Stand")).defineText([
        "Boss! <br> <br> The legendary 'Party Crasher' that leaves his den once in half a year to gather supplies and hunt for sport. It " +
            "has developed a taste for alcoholic beverages, so it is not uncommon for it to attend parties as an unwanted guest and " +
            "slaughter every living being in sight only to consume the spirits in their blood. For this very reason few actually organize " +
            "feasts at times of year when Party Crasher is on the prowl.",
        "Босс! <br> <br> Легендарный 'Незваный Гость', который покидает своё логово раз в полгода, чтобы запастись едой и поохотиться ради " +
            "развлечений. Он пристрастился к алкоголю, так что нередко посещает бурные празднества и убивает всех " +
            "присутствующих исключительно ради спирта в их крови. Именно поэтому немногие рискуют организовывать пиры в то время года, когда " +
            "Незваный Гость выходит на охоту."
    ]);
}

/* LORE */

var CDX_LORE001_NATURALORDER = 1001;
function inquireLore001NaturalOrder() {
    return new CodexEntry(["Natural Order", "Естественный Порядок"], CAT_LORE).defineText([
        "From Courkis Mance's \"Guide to Ecumos for children. Short adult edition\" <br> <br> " +
            "Truth, the meaning of life, the value behind every little movement in the world... No matter the age, a dweller, be it a hogman, " +
            "a human or a snow kuu, is always on a spiritual quest to find these things. One needs them to keep going. And we are lucky to " +
            "be born into Ecumos where such quests are known to succeed. <br> <br> We all have weight to our words, actions and choices. " +
            "This weight gives us sentience and the ability to influence the world, to alter the way things are, to create and grace the " +
            "existence with the beauty of our souls. This weight is what came to be called karma. The intricate natural balance that keeps " +
            "our world from falling apart is not unlike a mechanism with gears and scales. While your ego stands on one side of the scales, " +
            "karma is the weight on the other. This grand design is known as Natural Order. <br> <br> Being part of Natural Order, creatures " +
            "of Ecumos are blessed with the ability to sense karma and burdened with its laws. Whatever you want, you receive at the cost of " +
            "karma, whatever you offer, you give away for karma. However simple it may sound, there are countless exceptions, and yet each " +
            "one confirms the infinite complexity and perfection of Natural Order.",
        "Из \"Путеводителя по Экумосу для детей. Сокращённое взрослое издание\" Коркиса Мэнса <br> <br> " +
            "Истина, смысл жизни, ценность каждого маленького движения в мире... Не важно в какую эпоху, житель, будь это кабанолюд, человек или " +
            "снежный куу, всегда находится в духовном поиске. Эти вещи нужны ему, чтобы идти вперёд. И нам повезло родиться в Экумосе, где " +
            "подобные поиски небезрезультатны. <br> <br> У наших слов, действий и выбора есть вес. Этот вес даёт нам сознание и способность " +
            "влиять на мир, привносить в него изменения, творить и украшать сущее изяществом наших душ. Этот вес в какой-то момент стал " +
            "называться кармой. Затейливая равновесная природная система, которая удерживает наш мир от разваливания на части, чем-то похожа " +
            "на механизм с шестерёнками и весами. В то время, как Ваше эго стоит на одной чаше весов, карма - это вес на другой. Этот " +
            "великий замысел известен как Естественный Порядок. <br> <br> Будучи частью Естественного Порядка, существа Экумоса " +
            "благословлены способностью чувствовать карму и отягощены её законами. Всё, что ты хочешь, ты получаешь ценой кармы, всё, что ты " +
            "предлагаешь, ты отдаёшь за карму. Но каким бы простым ни казался этот принцип, найдутся тысячи исключений, и в то же время " +
            "каждое подтверждает бесконечную сложность и совершенство Естественного Порядка."
    ]);
}

var CDX_LORE002_SOURCESOFKARMA = 1002;
function inquireLore002SourcesOfKarma() {
    return new CodexEntry(["Sources of karma", "Источники кармы"], CAT_LORE).defineText([
        "From Courkis Mance's \"Guide to Ecumos for children. Short adult edition\" <br> <br> " +
            "While our world may be a part of a larger and greater design, where laws are different, there is no constance to the amount of karma " +
            "that circulates in Ecumos. There are sources and drains. Karma is the nourishment of the land as a hospitable place to live and is " +
            "a basis of the existence of Ecumos. But one is certain to ask: where does karma come from? <br> <br> The prime source of karma is " +
            "the locked potential of each individual. Within each of us is an evershifting labyrinth of possibilities. Anything we can be, do or " +
            "create is locked within us from birth and is unlocked throughout life by \"keys\" from outside - experience, knowledge and courage. " +
            "Thus, becoming greater and better, preparing to bring new things into the world yields karma. A potter accumulates it with every " +
            "technique learned during his apprenticeship and with every better piece of work he makes. A teacher receives karma from the " +
            "knowledge he implants in the minds of his pupils. A warrior's karma rises as does his power and the burden on his soul from all " +
            "those he felled. <br> <br> As you may have realized, growth of a soul is necessary to attain karma. Whoever stops improving loses " +
            "most of his karmic income and may fall into poverty. And what can be worse than losing the ability to choose and bring changes, " +
            "becoming a slave to the wills of others and going wherever the flow takes you?..",
        "Из \"Путеводителя по Экумосу для детей. Сокращённое взрослое издание\" Коркиса Мэнса <br> <br> " +
            "В то время, как наш мир может быть частью большего и более великого замысла, в котором другие законы, в Экумосе нет постоянства в " +
            "количестве циркулирующей в нём кармы. Есть источники и стоки. Карма питает землю, достаточно гостеприимную для того, чтобы жить на " +
            "ней; карма есть основа существования Экумоса. Но Вы, конечно же, спросите: откуда берётся карма? <br> <br> Основной источник кармы - " +
            "закрытый потенциал каждого. В любом из нас есть постоянно меняющийся лабиринт возможностей. Всё, чем мы можем быть, что мы можем " +
            "сделать или создать, закрыто в нас с рождения и открывается с течением жизни посредством \"ключей\" извне - опыта, знаний и " +
            "храбрости. Таким образом, становясь величественнее и лучше, готовясь привносить новое в мир, мы обретаем карму. Гончар копит её с " +
            "каждой новой техникой, освоенной во время ученичества, и с каждым вылепленным горшком, который лучше, чем предыдущий. Учитель получает " +
            "карму от знаний, которые вкладывает в умы своих учеников. Карма воина растёт с его силой и грузом на душе, увеличивающимся с каждым " +
            "павшим от его рук. <br> <br> Как Вы могли уже понять, для обретения кармы необходим рост души. Тот, кто прекращает развиваться, " +
            "теряет свой кармический доход и становится бедняком. А что может быть хуже, чем потеря способности выбирать и что-то менять, чем " +
            "становление рабом чужой воли, плывущим по течению?"
    ]);
}

var CDX_LORE003_ROBBERSANDDEALERS = 1003;
function inquireLore003RobbersAndDealers() {
    return new CodexEntry(["Robbers and dealers", "Грабители и дельцы"], CAT_LORE).defineText([
        "From Courkis Mance's \"Guide to Ecumos for children. Short adult edition\" <br> <br> " +
            "Probably, it would have been wonderful to live in paradise where everyone is perfectly honest in improving themselves and making the " +
            "lives of others better. But even in Ecumos where Natural Order is at work, that is not the case. There are certain types of " +
            "creatures you would be best to avoid during your travels. <br> <br> Robbers are those who desire to take karma from you even as you " +
            "are opposed to it. While there is no known way to extract karma from a person against its will, there are numerous ways to force " +
            "creatures to give it up through psychological pressure. The most direct way is threatening with physical punishment or even death. " +
            "As you get overtaken by fear, you lose balance and your deep mind unvoluntary resigns your karma in favor of the aggressor. Robber " +
            "sparing you is then regarded as an act of mercy and whatever you are going to be feeling about the incident will cost you even more. " +
            "More complex ways the robbers may work with include but are not limited to making you feel guilty and challenging strong opponents. " +
            "A category of warriors known as rat riders are especially delicious, since their code binds them and they cannot decline a " +
            "challenge. <br> <br> Another kind of karmic parasites is a dealer whose primary method of work is deception. While not as " +
            "progressive as within human society, bureaucracy and artificial economics are still present within other civilizations. Basically " +
            "dealers inflate the value of things by creating problems in the way of getting these things and providing a solution. This makes " +
            "them somewhat essential in the minds of others and earns them karma, though they barely create anything on their own. Dealers will " +
            "gladly sell air and water to you and even charge you for the space you take in the world. <br> <br> Your primary defense against " +
            "these creatures is knowing and ignoring their deceptive schemes, adamancy and perception. They all play a dangerous game with " +
            "Natural Order, and sooner or later they lose.",
        "Из \"Путеводителя по Экумосу для детей. Сокращённое взрослое издание\" Коркиса Мэнса <br> <br> " +
            "Наверное, было бы здорово жить в раю, где все исключительно честны в своём стремлении к саморазвитию и улучшению жизни окружающих. " +
            "Но даже Экумос, где работает Естественный Порядок, не таков. Есть отдельные виды существ, которых Вам следует избегать. <br> <br> " +
            "Грабители - это те, кто желает отнять Вашу карму, даже когда Вы против этого. В то время, как нет известного способа вытащить карму " +
            "из кого-либо против его или её воли, есть множество способов заставить её отдать. Самый простой способ - угроза насилия. Когда Вас " +
            "охватывает страх, Вы теряете равновесие и непроизвольно отдаёте карму в пользу агрессора. Пощада затем воспринимается как " +
            "акт милосердия, и любые чувства, которые Вы вспоследствии испытаете из-за этого, обойдутся ещё дороже. Отдельные категории воинов, " +
            "такие как крысиные всадники, особенно интересны для грабителей, так как их свод правил не позволяет им отказываться от поединка. " +
            "<br> <br> Другой вид кармических паразитов - это дельцы, чьим основным методом работы является обман. Хотя и не настолько " +
            "запущенно, как в человеческом обществе, бюрократия и искусственная экономика всё равно присутствуют во всех цивилизациях. В своей " +
            "основе дельцы раздувают ценность вещей, создавая проблемы на пути их достижения и предоставляя решение. Это делает их в " +
            "определённой мере необходимыми в глазах других и приносит им карму, хотя они едва ли что-то создают сами. Дельцы с радостью " +
            "продадут Вам воздух и воду и даже возьмут с Вас за место, которое Вы занимаете в пространстве. <br> <br> Ваша защита от " +
            "этих существ - знание и невосприимчивость к их обманным схемам, твёрдость воли и умение видеть суть вещей. Все они играют с " +
            "Естественным Порядком в опасную игру и в итоге рано или поздно проигрывают."
    ]);
}

var CDX_LORE004_ONDEITIES = 1004;
function inquireLore004OnDeities() {
    return new CodexEntry(["On deities", "О божествах"], CAT_LORE).defineText([
        "From Courkis Mance's \"Guide to Ecumos for children. Short adult edition\" <br> <br> " +
            "In times past when no strict understanding of natural processes was established, dwellers of Ecumos regarded certain aspects of the " +
            "world as manifestations of divine will. Personalized forces of nature became objects of worship and over centuries accumulated a " +
            "huge karmic potential. It should be noted that despire their depictions they were always genderless. As the civilizations developed " +
            "and their understanding of the world deepened, the worship declined but the names of deities were not forgotten. Instead they became " +
            "the core elements of explained phenomena. <br> <br> Thus the three great deities have evolved: Astraie became the Astraie incharge " +
            "that creates the conditions for lightning to appear during thunderstorms; Pyrne became the molten core of Ecumos; Elset became the " +
            "beginning of winter brought about by the ocean current, also named after it. There are also many such examples with minor deities. " +
            "<br> <br> However, due to these personifications becoming a significant part of the world's culture and their accumulated karma, " +
            "their will actually came to be. Unexplainable, irrational events like discernable words in the thunder or exquisite, meaningful ice " +
            "patterns on glass were regarded as nothing short of wonders. After many years of observations and many wonders (and calamities) it " +
            "was found that these divinities are aggregations of many souls that are chosen to be part of a deity not without principle. And so " +
            "began the new wave of religious rennaisance that we live through to this day.",
        "Из \"Путеводителя по Экумосу для детей. Сокращённое взрослое издание\" Коркиса Мэнса <br> <br> " +
            "В прошлые времена, когда не было чёткого понимания природных процессов, жители Экумоса относились к определённым аспектам мира как " +
            "к проявлениям божественной воли. Персонализированные силы природы стали предметами поклонения и за века накопили огромный " +
            "кармический потенциал. Стоит отметить, что несмотря на какие-либо их изображения, они всё равно оставались лишёнными принадлежности " +
            "к конкретному полу. По мере того, как цивилизации развивались и их понимание мира углублялось, поклонение угасало, но имена " +
            "богожеств не были забыты. Вместо этого они стали основными элементами объяснённых явлений. <br> <br> Таким образом, три великих " +
            "божества преобразились: Астрайе стал зарядом Астрайе, который создаёт условия для молний во время грозы; Пирн стал расплавленным " +
            "ядром Экумоса; Эльсет стал началом зимы, приносимым океаническим течением, также названным в его честь. Есть множество подобных " +
            "примеров для мелких божеств. <br> <br> Однако, ввиду того, что такие олицетворения стали значительной частью мировой культуры, и их " +
            "накопленной кармы, они и в самом деле обрели волю. Необъяснимые, иррациональные события, такие как различаемые в отзвуках грома " +
            "слова и осмысленные узоры льда на стёклах были интерпретированы не иначе как чудеса. После многих лет наблюдений и многих чудес " +
            "(и катастроф) было обнаружено, что эти божества представляют собой скопление многих душ, выбираемых быть частью бога неслучайно. " +
            "И так началась новая волна религиозного ренессанса, продолжающаяся по сей день."
    ]);
}

var CDX_LORE005_HUMANSOCIETY = 1005;
function inquireLore005HumanSociety() {
    return new CodexEntry(["Human society", "Человеческое общество"], CAT_LORE).defineText([
        "From Courkis Mance's \"Guide to Ecumos for children. Short adult edition\" <br> <br> " +
            "For most dwellers of Ecumos there is no greater symbol of depravity than human society. That, unfortunately, is not without reason, " +
            "for there is no other civilization than has strayed farther from Natural Order and profaned its laws like humanity did. <br> <br> " +
            "Their bloody ascension began with Mirales Chronoclast who was a general and a savant serving the human king a long time ago. As a " +
            "general he managed to unite many warring states and forge an empire that stood for generations and brought unseen progress to the " +
            "world. As a savant he studied cosmology and Natural Order and wrote \"The High Kin\", the treatise that sparked unspeakable hubris in " +
            "humanity. Most prominent of their people continued his research after his death and over centuries developed physics, chemistry, " +
            "medicine, military science and many other sciences to the point we see today. While fruits of progress were partly shared with other " +
            "races, so was their burning cruelty. The wars waged by humanity out of greed brought snow kuus' civilization to ruin and many " +
            "nations to the brink of extinction. However strong, most other races are nonetheless at the mercy of humans. <br> <br> The only " +
            "thing that rivals men's greed and cruelty is their disregard for Natural Order. They have solidified karma into small talismans " +
            "called coins and prohibited karma to be transferred any other way. Thus the concept of money and artificial economics came to be. " +
            "Over time humanity's sense of karma diminished and they became dependent on money, their synonym for freedom and happiness. Througn " +
            "complex many-layered machinations the commoners of human society are made to work tirelessly and give up all of their karma to the " +
            "select few known as nobility. <br> <br> There is barely any happiness or justice within their civilization, but despite their utmost " +
            "ignorance of Natural Order, they have brought many things into this world that other races blissfully and no less ignorantly use " +
            "today.",
        "Из \"Путеводителя по Экумосу для детей. Сокращённое взрослое издание\" Коркиса Мэнса <br> <br> " +
            "Для большинства жителей Экумоса нет более подходящего символа порочности, чем человеческое общество. К сожалению, этому есть " +
            "причины, ибо нет другой цивилизации, которая настолько далеко отошла от Естественного Порядка и так надругалась над его законами. " +
            "<br> <br> Их кровавое восхождение началось с Миралеса Хронокласта, полководца и учёного, служившего человеческому королю много, " +
            "много лет назад. Как полководец, он объединил множество воевавших государств и построил империю, которая выстояла многие поколения и " +
            "принесла в мир невиданный доселе прогресс. Как учёный, он изучал космологию и Естественный Порядок и написал \"Высшее Племя\" - " +
            "трактат, поселивший в людях невыразимую гордыню. Самые лучшие представители их рода продолжили его изыскания после того, как он " +
            "умер, и на протяжении веков развивали физику, химию, медицину, военное дело и прочие науки до состояния, которое мы наблюдаем " +
            "сегодня. С другими расами они поделились как плодами своего прогресса, так и своей пылающей жестокостью. Войны, которые человечество " +
            "вело из жадности, разрушили цивилизацию снежных куу и поставили многие народы на грань вымирания. Как бы ни были сильны другие расы, " +
            "большинство всё равно беззащитны перед людьми. <br> <br> Единственная вещь, которая сопоставима с человеческой жадностью и " +
            "жестокостью, - это их неуважение к Естественному Порядку. Они дали карме твёрдую форму в виде маленьких талисманов, называемых " +
            "монетами, и запретили иные способы обмена кармой. Таким образом появились деньги и искусственная экономика. Со временем у человека " +
            "притупилось чувство кармы, и он стал зависим от денег, синонима свободы и счастья для него. Будучи жертвами сложных, многоуровневых " +
            "махинаций, простолюдины вынуждены работать без устали и отдавать всю свою карму нескольким избранным, которые именуются " +
            "аристократией. <br> <br> Едва ли в человеческой цивилизации есть счастье или правосудие, но несмотря на их крайнее невежество " +
            "относительно Естественного Порядка, они принесли в мир множество вещей, которыми блаженно и не менее невежественно пользуются " +
            "другие расы."
    ]);
}

var CDX_JOU001_CH00P01 = 1501;
function inquireJournal001Ch00P01() {
    return new CodexEntry(["Prologue: In search of trouble", "Пролог: В поисках неприятностей"], CAT_JOURNAL).defineText([
        "Dominique and Sallinger have arrived to Asqarra, a free province inhabited mostly by hogman and wolf homesteaders who manage " +
            "to live side by side. It has been known to be dangerous because of many bandits and wild animals in the area. But " +
            "Dominique hopes to find something greater, worthy of a hero's feat.",
        "Доминик и Сэллинджер прибыли в свободную провинцию Аскарра, населённую в основном поселенцами кабанолюдов и волколюдов, " +
            "умудряющимися сосуществовать мирно. Известно, что здесь весьма опасно из-за бандитов и диких животных. Но Доминик " +
            "надеется найти нечто большее, достойное подвига героя."
    ]);
}

var CDX_JOU002_CH00P02 = 1502;
function inquireJournal002Ch00P02() {
    return new CodexEntry(["Prologue: Seer's guidance", "Пролог: Наставления провидца"], CAT_JOURNAL).defineText([
        "The duo have found a violently destroyed house (not without victims) and an emerald scale amidst the ruins. Everything points to " +
            "the fact that the culprit is a huge scaly beast. To find it Dominique must find the real seer who can trace the scale back to " +
            "its owner. <br> <br> Milestones on the way: 1",
        "Двое обнаружили разрушенный дом, полусъеденные тела и изумрудную чешуйку среди развалин. Всё указывает на то, " +
            "что совершила это огромная чешуйчатая тварь. Чтобы найти её, Доминик должен найти настоящего провидца, который сможет отследить " +
            "её. <br> <br> Мильных камней на пути: 1"
    ]);
}

var CDX_JOU003_CH00P03 = 1503;
function inquireJournal003Ch00P03() {
    return new CodexEntry(["Prologue: Party Crasher", "Пролог: Незваный Гость"], CAT_JOURNAL).defineText([
        "The rat rider has visited the seer only to find out that he was already on the way to his target - Party Crasher. Though the " +
            "two are yet to find out what kind of monster is that, they will meet it soon if they continue following the snake path. " +
            "<br> <br> Milestones on the way: 1",
        "Крысиный всадник посетил провидца только, чтобы узнать, что он уже на пути к своей цели - Незваному Гостю. Хотя двое ещё не " +
            "догадываются, что за чудовище их ждёт, они вскоре с ним встретятся, если продолжат путь по тропе змеи. " +
            "<br> <br> Мильных камней на пути: 1"
    ]);
}

var CDX_JOU004_CH00P04 = 1504;
function inquireJournal004Ch00P04() {
    return new CodexEntry(["Prologue: The end?", "Пролог: Конец?"], CAT_JOURNAL).defineText([
        "The game is finished (for now), but not Dominique's story. What will rat rider find when he returns to what was once his home?..",
        "Игра на этом окончена (пока), но не история Доминика. Что же найдёт крысиный всадник по возвращении в свой бывший дом?.."
    ]);
}

/* CODEX ENTRIES ID MAPPING */
function inquireCodex(id) {
    switch (id) {
        case CDX_CH00HOUSE:
            return inquireChapter00House();
        case CDX_CH00HOTSPRING:
            return inquireChapter00HotSpring();
        case CDX_CH00INN:
            return inquireChapter00Inn();
        case CDX_CH00SMITHY:
            return inquireChapter00Smithy();
        case CDX_CH00DOJO:
            return inquireChapter00Dojo();
        case CDX_CH00CHRONICLER:
            return inquireChapter00Chronicler();
        case CDX_CH00LIBRARY:
            return inquireChapter00Library();
        case CDX_CH00TRADINGPOST:
            return inquireChapter00TradingPost();
        case CDX_CH00MILESTONE:
            return inquireChapter00Milestone();
        case CDX_CH00ENM_BANDIT:
            return inquireChapter00EnemyBandit();
        case CDX_CH00ENM_WOLF:
            return inquireChapter00EnemyWolf();
        case CDX_CH00ENM_WASP:
            return inquireChapter00EnemyWasp();
        case CDX_CH00ENM_BRIGAND:
            return inquireChapter00EnemyBrigand();
        case CDX_CH00ENM_POISONWASP:
            return inquireChapter00EnemyPoisonWasp();
        case CDX_CH00ENM_REDWOLF:
            return inquireChapter00EnemyRedWolf();
        case CDX_CH00ENM_ARMADILLOKNIGHT:
            return inquireChapter00EnemyArmadilloKnight();
        case CDX_CH00ENM_BANDITRINGLEADER:
            return inquireChapter00EnemyBanditRingleader();
        case CDX_CH00ENM_ARMADILLOVITYAZ:
            return inquireChapter00EnemyArmadilloVityaz();
        case CDX_CH00ENM_GREENSERPENT:
            return inquireChapter00EnemyGreenSerpent();
        case CDX_LORE001_NATURALORDER:
            return inquireLore001NaturalOrder();
        case CDX_LORE002_SOURCESOFKARMA:
            return inquireLore002SourcesOfKarma();
        case CDX_LORE003_ROBBERSANDDEALERS:
            return inquireLore003RobbersAndDealers();
        case CDX_LORE004_ONDEITIES:
            return inquireLore004OnDeities();
        case CDX_LORE005_HUMANSOCIETY:
            return inquireLore005HumanSociety();
        case CDX_JOU001_CH00P01:
            return inquireJournal001Ch00P01();
        case CDX_JOU002_CH00P02:
            return inquireJournal002Ch00P02();
        case CDX_JOU003_CH00P03:
            return inquireJournal003Ch00P03();
        case CDX_JOU004_CH00P04:
            return inquireJournal004Ch00P04();
        default:
            return null;
    }
}