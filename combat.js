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

// Empowered--concentrated statuses are essentially the same as above, save for their names
function acquireEmpoweredStatus(threshold, duration, power) {
    return wrapInflictData(["Empowered", "Усиление"], threshold,
        [acquireAttributeAdjustmentArtifact(BGL_LEFT, 0, duration, "", "", ATTR_ATTACK, 1, power, 0, true)]);
}

function acquireShieldedStatus(threshold, duration, power) {
    return wrapInflictData(["Shielded", "Щит"], threshold,
        [acquireAttributeAdjustmentArtifact(BGL_LEFT, 0, duration, "", "", ATTR_DEFENSE, 1, power, 0, true)]);
}

function acquireNimbleStatus(threshold, duration, power) {
    return wrapInflictData(["Nimble", "Проворство"], threshold,
        [acquireAttributeAdjustmentArtifact(BGL_LEFT, 0, duration, "", "", ATTR_AGILITY, 1, power, 0, true)]);
}

function acquireConcentratedStatus(threshold, duration, power) {
    return wrapInflictData(["Concentrated", "Концентрация"], threshold,
        [acquireAttributeAdjustmentArtifact(BGL_LEFT, 0, duration, "", "", ATTR_REFLEXES, 1, power, 0, true)]);
}

// Trapped status: power is the maximum factor for effective evasion
// and thrice the maximum factor for effectuve agility according to the formula 1 - (p - 1) / 3
function acquireTrappedStatus(threshold, duration, power) {
    return wrapInflictData(["Trapped", "В ловушке"], threshold, [
        acquireAttributeAdjustmentArtifact(BGL_LEFT, 0, duration, "", "", ATTR_EVASION, 1, power, 0, true),
        acquireAttributeAdjustmentArtifact(BGL_LEFT, 0, duration, "", "", ATTR_AGILITY, 1,
            1 - (power - 1) / 3, 0, true)
    ]);
}

// Disoriented status: power is the maximum factor for effective reflection
// and twice the maximum factor for effectuve reflexes according to the formula 1 - (p - 1) / 2
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

function acquirePerpetualAttributeModifierArtifact(attribute, power) {
    var artifact = acquireAttributeAdjustmentArtifact(BGL_LEFT, 1, 1, "", "", attribute, 1, power, 0, true);
    artifact.static = true;
    return artifact;
}

/* OBTAINABLE SKILLS */

function wrapImpactAnimationData(animationImageArray, sfxSrc, framesPerImage, width, height) {
    return {
        animation: animationImageArray,
        sfxSrc: sfxSrc,
        framesPerImage: framesPerImage,
        width: width,
        height: height
    };
}

var SKL_ATTACK = 1;
function gainAttackSkill() {
    var attackSkill = new CombatSkill(["Attack", "Атаковать"],
        ["A standard strike. 100% attack power impact in the middle of a medium-sized guard down period.",
            "Обычный удар. Воздействие 100% силы атаки посреди средних размеров зоны пониженной защиты."], 10);
    attackSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                60, 60, BGL_COLOR, "#FF3C3C", ATTR_DEFENSE, 1, 0.3, 0, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position), getResource("imgBattleImpactIcon"), 1)
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
                80, 80, BGL_COLOR, "#FF3C3C", ATTR_DEFENSE, 1, 0.3, 0, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) + 30,
                getResource("imgBattleImpactIcon"), 1.5)
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
            acquireImpactArtifact(getAbsoluteArtifactPosition(position), getResource("imgBattleImpactIcon"), 0.5)
        ];
    });
    return jabSkill;
}

var SKL_COUNTERATTACK = 5;
function gainCounterattackSkill() {
    var counterattackSkill = new CombatSkill(["Counterattack", "Контратака"], [
        "A defensive action followed by an attack. A small guard up period followed by a 75% attack power "
            + "impact followed by a medium-sized guard down period.",
        "Защитный манёвр, за которым следует атака. Небольшая зона повышенной защиты, за которой следует "
            + "воздействие 75% силы атаки, за которыи следует средних размеров зона пониженной защиты."], 15);
    counterattackSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                60, 0, BGL_COLOR, "#3C78FF", ATTR_DEFENSE, 1, 1.5, 0, false),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                0, 80, BGL_COLOR, "#FF5C5C", ATTR_DEFENSE, 1, 0.5, 0, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position), getResource("imgBattleImpactIcon"), 0.75)
        ];
    });
    return counterattackSkill;
}

var SKL_GUARDEDSTRIKE = 6;
function gainGuardedStrikeSkill() {
    var guardedStrikeSkill = new CombatSkill(["Guarded strike", "Осторожный удар"], [
        "An attack followed by a defensive action. A medium-sized guard down period followed by a 75% attack power "
            + "impact followed by a large guard up period.",
        "Атака, за которой следует защитный манёвр. Средних размеров зона пониженной защиты, за которой следует "
            + "воздействие 75% силы атаки, за которыи следует срендих размеров зона повышенной защиты."], 18);
    guardedStrikeSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                80, 0, BGL_COLOR, "#FF5C5C", ATTR_DEFENSE, 1, 0.6, 0, false),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                0, 80, BGL_COLOR, "#3C78FF", ATTR_DEFENSE, 1, 1.7, 0, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position), getResource("imgBattleImpactIcon"), 0.75)
        ];
    });
    return guardedStrikeSkill;
}

var SKL_RATRIDERDANCE = 7;
function gainRatRiderDanceSkill() {
    var ratRiderDanceSkill = new CombatSkill(["Rat Rider Dance", "Танец Крыс. Всадника"], [
        "A mighty combo of three strikes. Three 70% attack power impacts surrounded with small guard up, guard down, "
            + "guard down, guard up periods.",
        "Мощная комбинация из трёх ударов. Три воздействия 70% силы атаки, окружённые небольшими зонами повышенной, "
            + "пониженной, пониженной и ещё раз повышенной защиты."], 25);
    ratRiderDanceSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position) - 30,
                40, 0, BGL_COLOR, "#3C78FF", ATTR_DEFENSE, 1, 1.5, 0, false),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                30, 30, "#FF3C3C", "#FF3C3C", ATTR_DEFENSE, 0.3, 0.3, 0, false),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position) + 30,
                0, 40, BGL_COLOR, "#3C78FF", ATTR_DEFENSE, 1, 1.5, 0, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) - 30,
                getResource("imgBattleImpactIcon"), 0.7),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position),
                getResource("imgBattleImpactIcon"), 0.7),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) + 30,
                getResource("imgBattleImpactIcon"), 0.7)
        ];
    });
    return ratRiderDanceSkill;
}

var SKL_ACEOFSPADES = 8;
function gainAceOfSpadesSkill() {
    var aceOfSpadesSkill = new CombatSkill(["Ace of Spades", "Пиковый Туз"], [
        "An powerful technique for the Queen of Spades that utilizes aura for added strike force. 500% attack power "
            + "impact in the right side of a huge guard down period.",
        "Мощная техника для Пиковой Дамы, использующая ауру для увеличения силы удара. Воздействие 500% силы атаки "
            + "в правой части огромной зоны пониженной защиты."], 40);
    aceOfSpadesSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                100, 100, BGL_COLOR, "#FF3C3C", ATTR_DEFENSE, 1, 0.5, 0, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) + 60,
                [getResource("imgBattleAuraImpact1Icon"), getResource("imgBattleAuraImpact2Icon")],
                5, false, false, null, wrapImpactAnimationData(
                    [getResource("imgEffectHit1-1"), getResource("imgEffectHit1-2"), getResource("imgEffectHit1-3")],
                    "sound/sfx/hit-01.ogg", 4, 45, 45))
        ];
    });
    return aceOfSpadesSkill;
}

var SKL_DEEPBREATH = 9;
function gainDeepBreathkill() {
    var deepBreathSkill = new CombatSkill(["Deep breath", "Глубокий вдох"], [
        "A deep breath for relaxation and respite. A huge guard down period during which 5 SP is recovered.",
        "Глубокий вдох для расслабления и восстановления сил. Огромный период пониженной защиты, во время которого "
            + "восстанавливается 5 ОВ."], 0);
    deepBreathSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                100, 100, BGL_COLOR, "#FF3C3C", ATTR_DEFENSE, 1, 0.3, 0, true),
            acquireGradualChangeArtifact(getAbsoluteArtifactPosition(position),
                100, 100, BGL_COLOR, "#3CFF3C", ATTR_SP, 2, 8, 0, false)
        ];
    });
    return deepBreathSkill;
}


var SKL_EVADE = 10;
function gainEvadeSkill() {
    var evadeSkill = new CombatSkill(["Evade", "Уклониться"], [
        "An attempt to completely evade an enemy attack. A small up to 50% evasion up period.",
        "Попытка полностью избежать атаки врага. Небольшой период повышенного до 50% уклонения."], 5);
    evadeSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                40, 40, BGL_COLOR, "#FFCC00", ATTR_EVASION, 1, 0.5, 0, false)
        ];
    });
    return evadeSkill;
}

var SKL_NETCAST = 11;
function gainNetCasSkill() {
    var netCastSkill = new CombatSkill(["Net cast", "Забрасывание сети"], [
        "A casting of a net to limit enemy's mobility. A weak impact that decreases evasion and agility in the left "
            + "side of a medium-sized guard down period.",
        "Поимка врага в сеть для ограничения его подвижности. Слабое воздействие, снижающее уклонение и ловкость, "
            + "в левой части средних размеров зоны пониженной защиты."], 30);
    netCastSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                60, 60, BGL_COLOR, "#FF3C3C", ATTR_DEFENSE, 1, 0.3, 0, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) - 30, getResource("imgBattleItemTrap"),
                0, true, false, acquireTrappedStatus(1.1, 2000, 1.3))
        ];
    });
    return netCastSkill;
}

var SKL_DOUBLESTRIKE = 12;
function gainDoubleStrikeSkill() {
    var doubleStrikeSkill = new CombatSkill(["Double strike", "Двойной удар"], [
        "A risky double attack. Two 70% attack power impact in the left and right side of a large guard down period.",
        "Рискованный двойной выпад. Два воздействия 70% силы атаки в левой и правой части большого периода "
            + "пониженной защиты."], 15);
    doubleStrikeSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                80, 80, BGL_COLOR, "#FF3C3C", ATTR_DEFENSE, 1, 0.3, 0, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) - 30, getResource("imgBattleImpactIcon"), 0.7),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) + 30, getResource("imgBattleImpactIcon"), 0.7)
        ];
    });
    return doubleStrikeSkill;
}

var SKL_OMNISLASH = 1001;
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
                getResource("imgBattleImpactIcon"), 0.8),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) - 90,
                getResource("imgBattleImpactIcon"), 0.8),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) - 60,
                getResource("imgBattleImpactIcon"), 0.8),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) - 30,
                getResource("imgBattleImpactIcon"), 0.8),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position),
                getResource("imgBattleImpactIcon"), 0.8),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) + 30,
                getResource("imgBattleImpactIcon"), 0.8),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) + 60,
                getResource("imgBattleImpactIcon"), 0.8),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) + 90,
                getResource("imgBattleImpactIcon"), 0.8),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) + 120,
                getResource("imgBattleImpactIcon"), 0.8)
        ];
    });
    return omnislashSkill;
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
        case SKL_DEEPBREATH:
            return gainDeepBreathkill();
        case SKL_EVADE:
            return gainEvadeSkill();
        case SKL_NETCAST:
            return gainNetCasSkill();
        case SKL_DOUBLESTRIKE:
            return gainDoubleStrikeSkill();
        default:
            return null;
    }
}

/* HERO LEVELING SKILL GAINS */

var levelingSkills = [
    {id: SKL_CHARGE, attrAttack: 20, attrDefense: 15, attrAgility: 10, attrReflexes: 10},
    {id: SKL_JAB, attrAttack: 15, attrDefense: 15, attrAgility: 12, attrReflexes: 11},
    {id: SKL_COUNTERATTACK, attrAttack: 20, attrDefense: 20, attrAgility: 12, attrReflexes: 14},
    {id: SKL_GUARDEDSTRIKE, attrAttack: 25, attrDefense: 28, attrAgility: 15, attrReflexes: 15},
    {id: SKL_RATRIDERDANCE, attrAttack: 40, attrDefense: 35, attrAgility: 23, attrReflexes: 20}
];

function getLevelingSkills() {
    var levelingSkillList = [];
    for (var i = 0; i < levelingSkills.length; i++) {
        if (!hero.hasSkill(levelingSkills[i].id)) {
            if ((hero.attrAttack >= levelingSkills[i].attrAttack)
                && (hero.attrDefense >= levelingSkills[i].attrDefense)
                && (hero.attrAgility >= levelingSkills[i].attrAgility)
                && (hero.attrReflexes >= levelingSkills[i].attrReflexes)) {
                levelingSkillList.push(levelingSkills[i].id);
            }
        }
    }
    return levelingSkillList;
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
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                width / 2, width / 2, BGL_COLOR, BGL_COLOR, ATTR_EVASION, 1, 2 - vulnerability / 2, 0, true),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                width, width, BGL_COLOR, "#EE8C8C", ATTR_DEFENSE, 1, vulnerability, 0, false)];
    });
    return openingSkill;
}

function gainEnemyAttackSkill(width, vulnerability, power) {
    var fumbledAttackSkill = new CombatSkill("Enemy attack", "A customizable attack skill.", 10);
    fumbledAttackSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                width, width, BGL_COLOR, "#FF5C5C", ATTR_DEFENSE, 1, vulnerability, 0, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position),
                getResource("imgBattleImpactIcon"), power)
        ];
    });
    return fumbledAttackSkill;
}

function gainEnemyDefenseSkill(width, armor) {
    var fumbledAttackSkill = new CombatSkill("Enemy defense", "A customizable defense skill.", 5);
    fumbledAttackSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                width, width, BGL_COLOR, "#3C78FF", ATTR_DEFENSE, 1, armor, 0, false)
        ];
    });
    return fumbledAttackSkill;
}

function gainFumbledAttackSkill(width, vulnerability) {
    var fumbledAttackSkill = new CombatSkill("Fumbled attack", "A weaker attack with a weakness area around.", 10);
    fumbledAttackSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                width, width * (1 + Math.random()), BGL_COLOR, "#FF4C4C", ATTR_DEFENSE, 1, vulnerability, 0, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position), getResource("imgBattleWeakImpactIcon"),
                vulnerability)
        ];
    });
    return fumbledAttackSkill;
}

function gainPowerAttackSkill(width, vulnerability, power) {
    var fumbledAttackSkill = new CombatSkill("Power attack", "A mighty, but slow strike.", 20);
    fumbledAttackSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                width, width, BGL_COLOR, "#FF5C5C", ATTR_DEFENSE, 1, vulnerability, 0, false),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                width, width, BGL_COLOR, BGL_COLOR, ATTR_AGILITY, 1, vulnerability, 0, true),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position),
                getResource("imgBattleImpactIcon"), power)
        ];
    });
    return fumbledAttackSkill;
}

function gainEnemyEvadeSkill(width, power) {
    var evadeSkill = new CombatSkill("Evade", "A customizable evasion skill.", 5);
    evadeSkill.defineGetArtifacts(function (position) {
        return [acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
            width, width, BGL_COLOR, "#FFCC00", ATTR_EVASION, 1, power, 0, false)];
    });
    return evadeSkill;
}

function gainStatusAttackSkill(width, weakness, statusFunction, defenseThreshold, duration, power) {
    var poisonStingSkill = new CombatSkill("Status attack",
        "A status-inflicting attack. Evasion down near impact.", 20);
    poisonStingSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                width, width, BGL_COLOR, "#FF4C4C", ATTR_DEFENSE, 1, weakness, 0, false),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                width, width, BGL_COLOR, BGL_COLOR, ATTR_EVASION, 1, 2 - weakness / 2, 0, true),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position),
                [getResource("imgBattleInflictImpact1Icon"), getResource("imgBattleInflictImpact2Icon")],
                weakness, true, true, statusFunction(defenseThreshold, duration, power))
        ];
    });
    return poisonStingSkill;
}

function gainFullguardAttackSkill(width, armor) {
    var fullguardAttackSkill = new CombatSkill("Fullguard attack", "An attack with a guard up area around.", 20);
    fullguardAttackSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                width / 2, width / 2, BGL_COLOR, "#AA40F0", ATTR_DEFENSE, 1, armor, 0, false),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position), getResource("imgBattleImpactIcon"), 1.2)
        ];
    });
    return fullguardAttackSkill;
}

function gainLearnableDoubleStrikeSkill() {
    var doubleStrikeSkill = new CombatSkill(["Double strike", "Двойной удар"], [
        "Double strike skill for the enemy, so the hero can learn it."], 15);
    var hitCount = 0;
    doubleStrikeSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                80, 80, BGL_COLOR, "#FF3C3C", ATTR_DEFENSE, 1, 0.3, 0, false),
            acquireTriggerArtifact(function (character) {
                character.strike(0.7);
                if ((hitCount < 2) && (hero.effDefense > 1)) {
                    hitCount++;
                } else if (hitCount < 2) {
                    hitCount = 0;
                }
            }, getAbsoluteArtifactPosition(position) - 30, 10, getResource("imgBattleImpactIcon")),
            acquireTriggerArtifact(function (character) {
                character.strike(0.7);
                if ((hitCount < 2) && (hero.effDefense > 1)) {
                    hitCount++;
                } else if (hitCount < 2) {
                    hitCount = 0;
                }
                if ((hitCount == 2) && !hero.hasSkill(SKL_DOUBLESTRIKE)) {
                    skillsLearned.push(SKL_DOUBLESTRIKE);
                    registerObject(GUI_EVENT, procureStatusTextAction(hero, TEXT_COLOR_INK,
                        ["Dominique learns something new!", "Доминик учится новому!"]
                    ));
                    hitCount++;
                } else if (hitCount < 2) {
                    hitCount = 0;
                }
            }, getAbsoluteArtifactPosition(position) + 30, 10, getResource("imgBattleImpactIcon")),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) - 30, getResource("imgBattleImpactIcon"), 0.7),
            acquireImpactArtifact(getAbsoluteArtifactPosition(position) + 30, getResource("imgBattleImpactIcon"), 0.7)
        ];
    });
    return doubleStrikeSkill;
}

function gainLieInWaitSkill(width, defenseFluct, agilityFluct) {
    var lieInWaitSkill = new CombatSkill("Lie in wait", "Slow down and guard, then quickly lunge at a foe.", 20);
    lieInWaitSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                width, 0, BGL_COLOR, "#AA40F0", ATTR_DEFENSE, 1, 2 - defenseFluct, 0, false),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                width, 0, BGL_COLOR, BGL_COLOR, ATTR_AGILITY, 1, agilityFluct, 0, true),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                0, width, BGL_COLOR, "#FF4C4C", ATTR_DEFENSE, 1, defenseFluct, 0, false),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                0, width * 2, BGL_COLOR, BGL_COLOR, ATTR_AGILITY, 1, 1 + agilityFluct, 0, true),
            acquireEmptyArtifact(getAbsoluteArtifactPosition(position), 0, getResource("imgBattleNimbleIcon"))
        ];
    });
    return lieInWaitSkill;
}

function gainDeathblowSkill(width, vulnerability) {
    var fumbledAttackSkill = new CombatSkill("Deathblow", "A sure-kill strike.", 40);
    fumbledAttackSkill.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                width, width, BGL_COLOR, "#FF5C5C", ATTR_DEFENSE, 1, vulnerability, 0, false),
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                width, width, BGL_COLOR, BGL_COLOR, ATTR_AGILITY, 1, 0.1, 0, true),
            acquireTriggerArtifact(function (character) {
                heroResponseHandlers.push(function (dmg) {
                    return dmg >= hero.hp ? dmg : hero.hp;
                });
                character.strike(3, false);
            }, getAbsoluteArtifactPosition(position), 1000, getResource("imgBattleDeathblowIcon"))
        ];
    });
    return fumbledAttackSkill;
}

/* ITEMS */

var ITM_HPRES1 = 1;
function obtainOintmentItem() {
    var ointmentItem = new UsableItem(["Ointment", "Мазь"],
        ["A common curative ointment that is useful when working on flesh wounds. "
            + "Restores 25% HP over a long period of time.", "Обычная целебная мазь, полезна при обработке "
            + "поверхностных ран. Восстанавливает 25% ОЖ за длительный период времени."],
        getResource("imgItemOintment1"), 20, 2, true);
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
            acquireEmptyArtifact(getAbsoluteArtifactPosition(position), 0, getResource("imgBattleItemIcon"))
        ];
    });
    return ointmentItem;
}

var ITM_SPRES1 = 2;
function obtainSpineappleJuiceItem() {
    var spineappleJuiceItem = new UsableItem(["Spineapple juice", "Спинанасовый сок"],
        ["An energizing spineapple juice. A few draughts will make weariness go away, "
            + "restoring 25% SP over a long period of time", "Тонизирующий сок спинанаса. Несколько глотков прогонят "
            + "усталость, восстанавливая 25% ОВ за длительный период времени."],
        getResource("imgItemPotion1"), 15, 2, true);
    spineappleJuiceItem.defineGetFieldEffect(function () {
        hero.restoreSp(hero.attrMaxSp * 0.25);
        return true;
    });
    spineappleJuiceItem.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                60, 0, BGL_COLOR, "#FF3C3C", ATTR_DEFENSE, 1, 0.3, 0, false),
            acquireGradualChangeArtifact(getAbsoluteArtifactPosition(position),
                0, 100, BGL_COLOR, "#3CFF3C", ATTR_SP, hero.attrMaxSp * 0.25, hero.attrMaxSp * 0.25, 0, false),
            acquireEmptyArtifact(getAbsoluteArtifactPosition(position), 0, getResource("imgBattleItemIcon"))
        ];
    });
    return spineappleJuiceItem;
}

var ITM_ATKUP1 = 3;
function obtainMagineticPowderCutItem() {
    var magneticPowderCutItem = new UsableItem(["Maginetic powder: CUT", "Магинитная пыль: МЕЧ"],
        ["A pouch of ensorcelled powder, which aligns itself on the cutting edge of a weapon to increase its power. "
            + "When applied, it raises effective attack by 20%. Medium duration.",
            "Мешочек с зачарованной пылью, которая располагает себя на режущей кромке оружия для увеличения его "
                + "силы. При применении увеличивает эффективную атаку на 20%. Средняя длительность."],
        getResource("imgItemPowder1"), 20, 2, true);
    magneticPowderCutItem.defineGetFieldEffect(function () {
        var status = acquireEmpoweredStatus(0, 3000, 1.2);
        registerObject(GUI_COMMON, procureHeroTextAction(TEXT_COLOR_INK,
            [TXT_ACTIVATED[LANG_ENG] + status.statusName[LANG_ENG],
                TXT_ACTIVATED[LANG_RUS] + status.statusName[LANG_RUS]]));
        hero.inflict(status.statusArtifacts);
        return true;
    });
    magneticPowderCutItem.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                60, 0, BGL_COLOR, "#FF3C3C", ATTR_DEFENSE, 1, 0.3, 0, false),
            acquireSelfInflictArtifact(getAbsoluteArtifactPosition(position), 5, getResource("imgBattleItemIcon"),
                acquireEmpoweredStatus(0, 3000, 1.2))
        ];
    });
    return magneticPowderCutItem;
}

var ITM_DEFUP1 = 4;
function obtainMagineticPowderPadItem() {
    var magneticPowderPadItem = new UsableItem(["Maginetic powder: PAD", "Магинитная пыль: ЩИТ"],
        ["A pouch of ensorcelled powder, which aligns itself on the armor, covering its weak points and increasing "
            + "its protective properties. When applied, it raises effective defense by 20%. Medium duration.",
            "Мешочек с зачарованной пылью, которая располагает себя на доспехе, прикрывая уязвимые места и увеличивая "
                + "защитные свойства. При применении увеличивает эффективную защиту на 20%. Средняя длительность."],
        getResource("imgItemPowder2"), 20, 2, true);
    magneticPowderPadItem.defineGetFieldEffect(function () {
        var status = acquireShieldedStatus(0, 3000, 1.2);
        registerObject(GUI_COMMON, procureHeroTextAction(TEXT_COLOR_INK,
            [TXT_ACTIVATED[LANG_ENG] + status.statusName[LANG_ENG],
                TXT_ACTIVATED[LANG_RUS] + status.statusName[LANG_RUS]]));
        hero.inflict(status.statusArtifacts);
        return true;
    });
    magneticPowderPadItem.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                60, 0, BGL_COLOR, "#FF3C3C", ATTR_DEFENSE, 1, 0.3, 0, false),
            acquireSelfInflictArtifact(getAbsoluteArtifactPosition(position), 5, getResource("imgBattleItemIcon"),
                acquireShieldedStatus(0, 3000, 1.2))
        ];
    });
    return magneticPowderPadItem;
}

var ITM_AGIUP1 = 5;
function obtainMuscleflexItem() {
    var muscleflexItem = new UsableItem(["Muscleflex", "Мышцегиб"],
        ["A stem of a muscleflex, a common ingredient in all sorts of alchemical potions. Makes the body nimble and "
            + "flexible. When chewed upon, it raises effective agility by 20%. Medium duration.",
            "Стебель мышцегиба, часто используемого в приготовлении всяческих алхимических зелий ингредиента. Делает "
                + "тело ловким и гибким. При пережёвывании увеличивает эффективную ловкость на 20%. "
                + "Средняя длительность."],
        getResource("imgItemPlant1"), 20, 2, true);
    muscleflexItem.defineGetFieldEffect(function () {
        var status = acquireNimbleStatus(0, 3000, 1.2);
        registerObject(GUI_COMMON, procureHeroTextAction(TEXT_COLOR_INK,
            [TXT_ACTIVATED[LANG_ENG] + status.statusName[LANG_ENG],
                TXT_ACTIVATED[LANG_RUS] + status.statusName[LANG_RUS]]));
        hero.inflict(status.statusArtifacts);
        return true;
    });
    muscleflexItem.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                60, 0, BGL_COLOR, "#FF3C3C", ATTR_DEFENSE, 1, 0.3, 0, false),
            acquireSelfInflictArtifact(getAbsoluteArtifactPosition(position), 5, getResource("imgBattleItemIcon"),
                acquireNimbleStatus(0, 3000, 1.2))
        ];
    });
    return muscleflexItem;
}

var ITM_RFXUP1 = 6;
function obtainWedgewingItem() {
    var wedgewingItem = new UsableItem(["Wedgewing", "Клинокрыл"],
        ["A dried wedgewing can be used as a base for brewing invigorative drinks, as a piquant spice or simply "
            + "inhaled as dust or ingested for a boost of concentration. Some say it's addictive, but these claims "
            + "were never proven. When used, it raises effective reflexes by 20%. Medium duration.",
            "Сушёный клинокрыл можно использовать как основу для приготовления бодрящих напитков, как пикантную "
                + "приправу или просто вдохнуть как порошок или разжевать для повышения концентрации. Говорят, "
                + "что он вызывает привыкание, но эти доводы не доказаны. При употреблении увеличивает "
                + "эффективную реакцию на 20%. Средняя длительность."],
        getResource("imgItemPlant2"), 20, 2, true);
    wedgewingItem.defineGetFieldEffect(function () {
        var status = acquireConcentratedStatus(0, 3000, 1.2);
        registerObject(GUI_COMMON, procureHeroTextAction(TEXT_COLOR_INK,
            [TXT_ACTIVATED[LANG_ENG] + status.statusName[LANG_ENG],
                TXT_ACTIVATED[LANG_RUS] + status.statusName[LANG_RUS]]));
        hero.inflict(status.statusArtifacts);
        return true;
    });
    wedgewingItem.defineGetArtifacts(function (position) {
        return [
            acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
                60, 0, BGL_COLOR, "#FF3C3C", ATTR_DEFENSE, 1, 0.3, 0, false),
            acquireSelfInflictArtifact(getAbsoluteArtifactPosition(position), 5, getResource("imgBattleItemIcon"),
                acquireConcentratedStatus(0, 3000, 1.2))
        ];
    });
    return wedgewingItem;
}

var ITM_DMG1 = 7;
function obtainFlyingDaggerItem() {
    var flyingDaggerItem = new UsableItem(["Flying dagger", "Летающий кинжал"],
        ["An enchanted dagger that seeks the target on its own. Just throw it into the air. 50% attack power impact.",
            "Заколдованный кинжал, который самостоятельно ищет цель. Просто подбросьте его в воздух. "
                + "Воздействие 50% силы атаки."], getResource("imgItemDagger1"), 30, 3, false);
    flyingDaggerItem.defineGetFieldEffect(function () { return false; });
    flyingDaggerItem.defineGetArtifacts(function (position) {
        return [
            acquireImpactArtifact(getAbsoluteArtifactPosition(position), getResource("imgBattleImpactIcon"), 0.5)
        ];
    });
    return flyingDaggerItem;
}

var ITM_GUARD1 = 8;
function obtainBucklerItem() {
    var bucklerItem = new UsableItem(["Buckler", "Баклер"],
        ["A small round shield that protects from particularly nasty blows. Medium guard up by 30~80% period.",
            "Небольшой круглый щит, который защитит от особо коварных ударов. "
                + "Средних размеров зона повышенной на 30~80% защиты."],
        getResource("imgItemShield1"), 25, 5, false);
    bucklerItem.defineGetFieldEffect(function () { return false; });
    bucklerItem.defineGetArtifacts(function (position) {
        return [acquireAttributeAdjustmentArtifact(getAbsoluteArtifactPosition(position),
            60, 60, "8CA8FF", "#3C78FF", ATTR_DEFENSE, 1.3, 1.8, 0, false)];
    });
    return bucklerItem;
}

var ITM_TALISMAN1 = 9;
function obtainLuckyCharmItem() {
    var luckyCharmItem = new UsableItem(["Lucky charm", "Талисман на удачу"],
        ["A copper charm worn around the neck, believed to bring good luck to the wearer. An amalgamation of good luck "
            + "is etched on its surface. One may gift it to a random stranger for 10 karma or wear during a battle "
            + "to unlock its potential for a continuous accumulation of 20 karma.",
            "Медный талисман, носимый на шее; существует поверье, что он приносит удачу. Смешение разных символов "
                + "удачи вытравлено на его поверхности. Его можно подарить случайному прохожему за 10 ед. кармы или "
                + "надеть в битве, чтобы раскрыть его потенциал и накопить с течением времени 20 ед. кармы."],
        getResource("imgItemTalisman1"), 10, 1, true);
    luckyCharmItem.defineGetFieldEffect(function () {
        hero.addKarma(10);
        return true;
    });
    luckyCharmItem.defineGetArtifacts(function (position) {
        return acquireKarmaArtifactSet(getAbsoluteArtifactPosition(position),2, 500, 10);
    });
    return luckyCharmItem;
}

var ITM_MAXHPUP1 = 10;
function obtainGarnetElixirItem() {
    var elixirItem = new UsableItem(["Garnet Elixir", "Гранатовый эликсир"],
        ["A highly treasured dark-red elixir known to bestow longevity upon those who drink it. Increases max HP by 10.",
            "Очень ценный тёмно-красный эликсир, одаривающий долголетием того, кто его пьёт. Увеличивает максимальные ОЖ на 10."],
        getResource("imgItemElixir1"), 5000, 1, true);
    elixirItem.defineGetFieldEffect(function () {
        hero.increaseMaxHp(10);
        return true;
    });
    return elixirItem;
}

var ITM_MAXSPUP1 = 11;
function obtainCitrineElixirItem() {
    var elixirItem = new UsableItem(["Citrine Elixir", "Цитриновый эликсир"],
        ["A highly treasured golden elixir known to bestow endurance upon those who drink it. Increases max SP by 10.",
            "Очень ценный золотой эликсир, одаривающий выносливостью того, кто его пьёт. Увеличивает максимальные ОВ на 10."],
        getResource("imgItemElixir2"), 5000, 1, true);
    elixirItem.defineGetFieldEffect(function () {
        hero.increaseMaxSp(10);
        return true;
    });
    return elixirItem;
}

var ITM_DEBUG_HP = 1001;
function obtainDebugCube1Item() {
    var cubeItem = new UsableItem(["Mystic Cube: HP", "Мистический Куб: ОЖ"],
        ["A mystic debug cube which heals Dominiqe's wounds instantly.",
            "Мистический отладочный куб, который полностью вылечивает раны Доминика."],
        getResource("imgItemCube1"), 10000, 50, true);
    cubeItem.defineGetFieldEffect(function () {
        hero.restoreHp(hero.attrMaxHp);
        return true;
    });
    cubeItem.defineGetArtifacts(function (position) {
        return [
            acquireGradualChangeArtifact(getAbsoluteArtifactPosition(position),
                0, 10, BGL_COLOR, "#3CFF3C", ATTR_HP, hero.attrMaxHp, hero.attrMaxHp, 0, false),
            acquireEmptyArtifact(getAbsoluteArtifactPosition(position), 0, getResource("imgBattleItemIcon"))
        ];
    });
    return cubeItem;
}

var ITM_DEBUG_SPAP = 1002;
function obtainDebugCube2Item() {
    var cubeItem = new UsableItem(["Mystic Cube: SP/AP", "Мистический Куб: ОВ/ОА"],
        ["A mystic debug cube which reenergizes Dominique instantly.",
            "Мистический отладочный куб, который мгновенно заряжает Доминика энергией."],
        getResource("imgItemCube2"), 10000, 50, true);
    cubeItem.defineGetFieldEffect(function () {
        hero.restoreSp(hero.attrMaxSp);
        hero.restoreAp(1);
        return true;
    });
    cubeItem.defineGetArtifacts(function (position) {
        return [
            acquireGradualChangeArtifact(getAbsoluteArtifactPosition(position),
                0, 5, BGL_COLOR, "#3CFF3C", ATTR_SP, hero.attrMaxHp, hero.attrMaxHp, 0, false),
            acquireGradualChangeArtifact(getAbsoluteArtifactPosition(position),
                0, 5, BGL_COLOR, "#3CFF3C", ATTR_AP, 1, 1, 0, false),
            acquireEmptyArtifact(getAbsoluteArtifactPosition(position), 0, getResource("imgBattleItemIcon"))
        ];
    });
    return cubeItem;
}

var ITM_DEBUG_KARMA = 1003;
function obtainDebugCube3Item() {
    var cubeItem = new UsableItem(["Mystic Cube: Karma", "Мистический Куб: Карма"],
        ["A mystic debug cube which enriches Dominique with Karma.",
            "Мистический отладочный куб, который обогащает Доминика кармой."],
        getResource("imgItemCube3"), 10000, 50, true);
    cubeItem.defineGetFieldEffect(function () {
        hero.addKarma(200);
        return true;
    });
    cubeItem.defineGetArtifacts(function (position) {
        return [
            acquireTriggerArtifact(function () { hero.addKarma(200); },
                getAbsoluteArtifactPosition(position), 0, getResource("imgBattleItemIcon"))
        ];
    });
    return cubeItem;
}

/* OBTAINABLE ITEMS ID MAPPING */
function obtainItem(id) {
    switch (id) {
        case ITM_HPRES1:
            return obtainOintmentItem();
        case ITM_SPRES1:
            return obtainSpineappleJuiceItem();
        case ITM_ATKUP1:
            return obtainMagineticPowderCutItem();
        case ITM_DEFUP1:
            return obtainMagineticPowderPadItem();
        case ITM_AGIUP1:
            return obtainMuscleflexItem();
        case ITM_RFXUP1:
            return obtainWedgewingItem();
        case ITM_DMG1:
            return obtainFlyingDaggerItem();
        case ITM_GUARD1:
            return obtainBucklerItem();
        case ITM_TALISMAN1:
            return obtainLuckyCharmItem();
        case ITM_MAXHPUP1:
            return obtainGarnetElixirItem();
        case ITM_MAXSPUP1:
            return obtainCitrineElixirItem();
        case ITM_DEBUG_HP:
            return obtainDebugCube1Item();
        case ITM_DEBUG_SPAP:
            return obtainDebugCube2Item();
        case ITM_DEBUG_KARMA:
            return obtainDebugCube3Item();
        default:
            return null;
    }
}