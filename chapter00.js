/**
 * Created by Etherfly on 01.02.14.
 *
 * This file contains objects specific to or introduced in the prologue.
 */

/* SEQUENCES */

function procureStartPrologueSequence() {
    var startPrologue = new Sequence();
    startPrologue.addAction(procureMaskAction());
    startPrologue.addAction(procureDisplayFreeTextAction(200, 200, W - 400, getTextResource("txtIntro1"), true));
    startPrologue.addAction(procureDisplayFreeTextAction(200, 200, W - 400, getTextResource("txtIntro2"), true));
    startPrologue.addAction(procureDisplayFreeTextAction(200, 200, W - 400, getTextResource("txtIntro3"), true));
    startPrologue.addAction(procureDisplayMessageAction((W - 1100) / 2, 200, 1100, 300,
        getTextResource("txtIntro4"), false));
    startPrologue.addAction(procureCodeFragmentAction(function () {
        clearObjectType("Hero");
        hero = new Hero();
        hero.setAnimationState(AN_MOVE_1);
        registerObject(OBJECTS_MID, hero);
        displayGui = true;
        moving = true;
        for (i = 0; i < 3; i++) { objectsOnLayer[i] = 0; }
        landscape = createTitleLandscape();
        landscape.resetTerrain();
        var houseType = new ObjectType(0.5);
        houseType.defineGenerateObject(function (path, position) {
            var house = new FieldObject(path, position, 50, getImageResource("imgObjHouse1"));
            house.defineTrigger(function () {
                var houseSequence = new Sequence();
                houseSequence.addAction(procureStopAction());
                houseSequence.addAction(procureDisplayCenteredMessageAction(WW_SMALL, "Hello, world!", false)
                    .addChoice("Yeah, hi.")
                    .addChoice("All is dust."));
                houseSequence.addAction(procureCodeFragmentAction(function () {
                    var houseSequenceAnswered = new Sequence();
                    if (currentChoice == 0) {
                        houseSequenceAnswered.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL, "Wow! A talking boar!", true));
                        houseSequenceAnswered.addAction(procureCodeFragmentAction(function () {
                            hero.restoreHp(18);
                        }));
                    } else {
                        houseSequenceAnswered.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL,  "Ooohhhkay...", true));
                        houseSequenceAnswered.addAction(procureCodeFragmentAction(function () {
                            hero.expendHp(28);
                            hero.expendSp(37);
                            hero.attrAttack += 0.23;
                            hero.attrDefense += 0.31;
                            hero.attrAgility += 0.11;
                            hero.attrReflexes += 0.05;
                        }));
                    }
                    houseSequenceAnswered.addAction(procureResumeAction());
                    registerObject(GUI_EVENT, houseSequenceAnswered);
                }));
                registerObject(GUI_EVENT, houseSequence);
            });
            return house;
        });
        var banditType = new ObjectType(0.5);
        banditType.defineGenerateObject(function (path, position) {
            var bandit = new FieldObject(path, position, 50, getImageResource("imgEnemyBandit1Stand"));
            bandit.setAttackImage(getImageResource("imgEnemyBandit1Attack"));
            bandit.defineTrigger(function () {
                var banditSequence = new Sequence();
                banditSequence.addAction(procureStopAction());
                banditSequence.addAction(procureDisplayCenteredMessageAction(WW_SMALL, "\"Hey, there! Wanna fight?\"", false)
                    .addChoice("Anytime!")
                    .addChoice("Sorry, dude, not now."));
                banditSequence.addAction(procureCodeFragmentAction(function () {
                    var banditSequenceAnswered = new Sequence();
                    if (currentChoice == 0) {
                        banditSequenceAnswered.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL, "\"Heh! Let's rock!\"", true));
                        banditSequenceAnswered.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL, "A bandit approaches!", true));
                        var banditSequenceFinished = new Sequence();
                        banditSequenceFinished.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL,
                                "\"That was a fine display of skill...\"", true));
                        banditSequenceFinished.addAction(procureResumeAction());
                        banditSequenceAnswered.addAction(procureInitiateBattleAction(enlistBandit(bandit),
                            banditSequenceFinished));
                    } else {
                        banditSequenceAnswered.addAction(
                            procureDisplayCenteredMessageAction(WW_SMALL,  "\"Aw, what a shame...\"", true));
                        banditSequenceAnswered.addAction(procureCodeFragmentAction(function () {
                            hero.restoreHp(25);
                            hero.restoreSp(25);
                        }));
                        banditSequenceAnswered.addAction(procureResumeAction());
                    }
                    registerObject(GUI_EVENT, banditSequenceAnswered);
                }));
                registerObject(GUI_EVENT, banditSequence);
            });
            return bandit;
        });
        landscape.addObjectType(houseType);
        landscape.addObjectType(banditType);
        registerObject(GUI_EVENT, landscape);
        setControlMode(CM_FIELD);
    }));
    startPrologue.addAction(procureUnmaskAction());
    return startPrologue;
}