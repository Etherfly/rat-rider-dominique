/**
 * Created by Etherfly on 20.02.14.
 *
 * This file contains combat content pregenerations: status effects, skills and items.
 */

/* STATUS EFFECTS
 *
 * Parameters:
 *  - threshold is the defense threshold to resist the status
 *      (target's effective defense must be lower for the status to be inflicted)
 *  - duration is the distance on the battlegauge as the time the status is active
 *  - power is defined differently for each status
 */

function wrapInflictData(statusName, defenseThreshold, statusArtifacts) {
    return {
        statusName: statusName,
        defenseThreshold: defenseThreshold,
        statusArtifacts: statusArtifacts
    };
}

// Weak--clouded statuses: power is the maxiumum factor for the affected attribute
function acquireWeakStatus(threshold, duration, power) {
    return wrapInflictData(["Weak", "Слабость"], threshold,
        [acquireAttributeAdjustmentArtifact(BGL_LEFT, 0, duration, "", "", ATTR_ATTACK, 1, power, 0, true)]);
}

function acquireFrailStatus(threshold, duration, power) {
    return wrapInflictData(["Frail", "Дряхлость"], threshold,
        [acquireAttributeAdjustmentArtifact(BGL_LEFT, 0, duration, "", "", ATTR_DEFENSE, 1, power, 0, true)]);
}

function acquireNumbStatus(threshold, duration, power) {
    return wrapInflictData(["Numb", "Онемение"], threshold,
        [acquireAttributeAdjustmentArtifact(BGL_LEFT, 0, duration, "", "", ATTR_AGILITY, 1, power, 0, true)]);
}

function acquireCloudedStatus(threshold, duration, power) {
    return wrapInflictData(["Clouded", "Спутанность сознания"], threshold,
        [acquireAttributeAdjustmentArtifact(BGL_LEFT, 0, duration, "", "", ATTR_REFLEXES, 1, power, 0, true)]);
}

// Trapped status: power is the maximum factor for effective evasion
// and thrice the maximum factor for effectuve agility
function acquireTrappedStatus(threshold, duration, power) {
    return wrapInflictData(["Trapped", "В ловушке"], threshold, [
        acquireAttributeAdjustmentArtifact(BGL_LEFT, 0, duration, "", "", ATTR_EVASION, 1, power, 0, true),
        acquireAttributeAdjustmentArtifact(BGL_LEFT, 0, duration, "", "", ATTR_AGILITY, 1,
            1 - (power - 1) / 3, 0, true)
    ]);
}

// Disoriented status: power is the maximum factor for effective reflection
// and twice the maximum factor for effectuve reflexes
function acquireDisorientedStatus(threshold, duration, power) {
    return wrapInflictData(["Disoriented", "Дизориентация"], threshold, [
        acquireAttributeAdjustmentArtifact(BGL_LEFT, 0, duration, "", "", ATTR_REFLECT, 1, power, 0, true),
        acquireAttributeAdjustmentArtifact(BGL_LEFT, 0, duration, "", "", ATTR_REFLEXES, 1,
            1 - (power - 1) / 2, 0, true)
    ]);
}

// Poisoned status: power is twice the HP loss for the duration of the status
function acquirePoisonedStatus(threshold, duration, power) {
    return wrapInflictData(["Poisoned", "Отравление"], threshold,
        [acquireGradualChangeArtifact(BGL_LEFT, 0, duration, "", "", ATTR_HP, 0, -power, 0, true)]);
}

// Exhausted status: power is twice the SP loss for the duration of the status
function acquireExhaustedStatus(threshold, duration, power) {
    return wrapInflictData(["Exhausted", "Истощение"], threshold,
        [acquireGradualChangeArtifact(BGL_LEFT, 0, duration, "", "", ATTR_SP, 0, -power, 0, true)]);
}

// Dispirited status: power is twice the AP loss for the duration of the status
function acquireDispiritedStatus(threshold, duration, power) {
    return wrapInflictData(["Dispirited", "Подавленность"], threshold,
        [acquireGradualChangeArtifact(BGL_LEFT, 0, duration, "", "", ATTR_AP, 0, -power, 0, true)]);
}

// Twitch status: power is the fluctuation for agility
function acquireTwitchStatus(threshold, duration, power) {
    return wrapInflictData(["Twitch", "Судорога"], threshold,
        [acquireAttributeAdjustmentArtifact(BGL_LEFT, 0, duration, "", "", ATTR_AGILITY, 1, 1, power, true)]);
}

/* OBTAINABLE SKILLS */

var SKL_ATTACK = 1;
function gainAttackSkill() {
    var attackSkill = new CombatSkill(["Attack", "Атаковать"],
        ["A standard strike. 100% attack power impact in the middle of a medium-sized guard down period.",
            "Обычный удар. Воздействие 100% силы атаки посреди средних размеров зоны пониженной защиты."], 10);
    attackSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                60, 60, BGL_COLOR, "#FF3C3C", ATTR_DEFENSE, 1, 0.3, 0, false),
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
            60, 60, BGL_COLOR, "#3C78FF", ATTR_DEFENSE, 1, 1.6, 0, false)]
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
                70, 70, BGL_COLOR, "#FF3C3C", ATTR_DEFENSE, 1, 0.3, 0, false),
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
                30, 30, BGL_COLOR, "#FF5C5C", ATTR_DEFENSE, 1, 0.5, 0, false),
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
                60, 0, BGL_COLOR, "#3C78FF", ATTR_DEFENSE, 1, 1.5, 0, false),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                0, 30, BGL_COLOR, "#FF5C5C", ATTR_DEFENSE, 1, 0.5, 0, false),
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
                30, 0, BGL_COLOR, "#FF5C5C", ATTR_DEFENSE, 1, 0.6, 0, false),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                0, 80, BGL_COLOR, "#3C78FF", ATTR_DEFENSE, 1, 1.7, 0, false),
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
                40, 0, BGL_COLOR, "#3C78FF", ATTR_DEFENSE, 1, 1.7, 0, false),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                30, 30, "#FF5C5C", "#FF5C5C", ATTR_DEFENSE, 0.6, 0.6, 0, false),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position) + 30,
                0, 40, BGL_COLOR, "#3C78FF", ATTR_DEFENSE, 1, 1.7, 0, false),
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
                40, 0, BGL_COLOR, "#3C78FF", ATTR_DEFENSE, 1, 1.7, 0, false),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                120, 120, "#FF5C5C", "#FF5C5C", ATTR_DEFENSE, 0.6, 0.6, 0, false),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position) + 120,
                0, 40, BGL_COLOR, "#3C78FF", ATTR_DEFENSE, 1, 1.7, 0, false),
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
            width / 2, width / 2, BGL_COLOR, "#EE8C8C", ATTR_DEFENSE, 1, vulnerability, 0, false)];
    });
    return openingSkill;
}

function gainFumbledAttackSkill(width, vulnerability) {
    var fumbledAttackSkill = new CombatSkill("Fumbled attack", "A weaker attack with a weakness area around.", 10);
    fumbledAttackSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                width, width * (1 + Math.random()), BGL_COLOR, "#FF4C4C", ATTR_DEFENSE, 1, vulnerability, 0, false),
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
                width / 2, width / 2, BGL_COLOR, "#AA40F0", ATTR_DEFENSE, 1, armor, 0, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position), getImageResource("imgBattleImpactIcon"), 1.2)
        ];
    });
    return fullguardAttackSkill;
}

function gainPoisonStingSkill(width, armor) {
    var poisonStingSkill = new CombatSkill("Poison sting", "A poisoning attack.", 20);
    poisonStingSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                width / 2, width / 2, BGL_COLOR, "#AA40F0", ATTR_DEFENSE, 1, armor, 0, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position), getImageResource("imgBattleImpactIcon"), 0.4,
                true, true, acquireFrailStatus(1.2, 700, 0.4)
            )
        ];
    });
    return poisonStingSkill;
}

function gainThornsSkill(width, reflect) {
    var poisonStingSkill = new CombatSkill("Thorns", "An area of reflection.", 20);
    poisonStingSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                width, width, BGL_COLOR, "#FFCC00", ATTR_REFLECT, 1, reflect, 0, false)
        ];
    });
    return poisonStingSkill;
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
                60, 0, BGL_COLOR, "#FF3C3C", ATTR_DEFENSE, 1, 0.3, 0, false),
            acquireGradualChangeArtifact(getAbsoluteArtifactPosition(position),
                0, 100, BGL_COLOR, "#3CFF3C", ATTR_HP, hero.attrMaxHp * 0.25, hero.attrMaxHp * 0.25, 0, false),
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