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

/* CODEX ENTRIES */

var CDX_CH00HOUSE = 1;
function inquireChapter00House() {
    return new CodexEntry(["Common house", "Обычный дом"], CAT_LANDMARKS, getResource("imgObjHouse1")).defineText([
        "A common house where commoners live their common days. They are usually very hospitable and will gladly let their guests stay "
        + "(and sometimes do some housework), especially if you are an able warrior, since hostile creatures always threaten their lives.",
        "Обычный дом, где обычные существа проживают свои обычные дни. Как правило, они очень гостеприимны и с радостью позволяют своим гостям "
        + "оставаться на ночь (а иногда и домашнюю работу найдут), особенно, если вы умелый воин, ибо враждебные существа всегда угрожают "
        + "их жизням."
    ])
}

/* CODEX ENTRIES ID MAPPING */
function inquireCodex(id) {
    switch (id) {
        case CDX_CH00HOUSE:
            return inquireChapter00House();
        default:
            return null;
    }
}