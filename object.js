/**
 * Created by Etherfly on 01.02.14.
 *
 * This file contains classes definitions.
 */

/* OBJECT STRUCTURES */

function Landscape(terrainColorFar, terrainColorMid, terrainColorNear, objectFrequency) {
    this.terrainColorFar = terrainColorFar;
    this.terrainColorMid = terrainColorMid;
    this.terrainColorNear = terrainColorNear;

    this.objectFrequency = objectFrequency;     // average pixel difference between objects
    this.objectTypes = [];                      // object type generation data

    this.objectsMin = 2 * W / objectFrequency;  // objects to be present on the layer simultaneously

    for (i = 0; i < 3; i++) { objectsOnLayer[i] = 0; }
    farthestObjects[FAR] = (new FieldObject(FAR, 600, 0, null));
    farthestObjects[MID] = (new FieldObject(MID, 600, 0, null));
    farthestObjects[NEAR] = (new FieldObject(NEAR, 600, 0, null));

    this.type = "Landscape";    // type definition
    this.deletable = false;     // universal deletability flag

    this.addObjectType = function(objectType) {
        this.objectTypes.push(objectType);
    };

    this.resetTerrain = function () {
        clearObjectType("Terrain");
        clearObjectType("Decoration");
        reaches[FAR] = new Terrain(FAR, this.terrainColorFar,
            -200, Math.floor(random() * 120) + 130);
        reaches[MID] = new Terrain(MID, this.terrainColorMid,
            -200, Math.floor(random() * 120) + 130);
        reaches[NEAR] = new Terrain(NEAR, this.terrainColorNear,
            -200, Math.floor(random() * 120) + 130);
        for (i = 0; i < 10; i++) {
            this.generateTerrain(FAR);
            this.generateTerrain(MID);
            this.generateTerrain(NEAR);
        }
    };

    this.pathToColor = function (path) {
        var color;
        switch (path) {
            case FAR:
                color = this.terrainColorFar;
                break;
            case MID:
                color = this.terrainColorMid;
                break;
            case NEAR:
                color = this.terrainColorNear;
                break;
            default:
                color = "black";
        }
        return color;
    };

    this.defineGenerateTerrain = function (generateTerrain) {
        this.generateTerrain = generateTerrain;
    };

    this.generateTerrain = function (path) {};

    this.manifest = function () {
        if (this.objectTypes.length > 0) {
            for (var path = 0; path < 3; path++) {
                while (objectsOnLayer[path] < this.objectsMin) {
                    var newObjectPosition = farthestObjects[path].position + this.objectFrequency * (0.5 + Math.random());
                    var probabilityScale = 0;
                    for (var i = 0; i < this.objectTypes.length; i++) {
                        probabilityScale += this.objectTypes[i].chanceToAppear;
                    }
                    var chanceHit = Math.random() * probabilityScale;
                    var currentObjectTypeId = 0;
                    var chanceArea = this.objectTypes[currentObjectTypeId].chanceToAppear;
                    while ((currentObjectTypeId + 1 < this.objectTypes.length) && (chanceArea < chanceHit)) {
                        currentObjectTypeId++;
                        chanceArea += this.objectTypes[currentObjectTypeId].chanceToAppear;
                    }
                    var newObject = this.objectTypes[currentObjectTypeId].generateObject(path, newObjectPosition);
                    registerObject(pathToObjectFrontLayer(path), newObject);
                    objectsOnLayer[path]++;
                    farthestObjects[path] = newObject;
                }
            }
        }
    };

    this.move = function () {
        for (var i = 0; i < 3; i++) {
            if (reaches[i].position < W + 600) {
                this.generateTerrain(i);
            }
        }
    };

    this.destroy = function() {
        clearObjectType("FieldObject");
        this.deletable = true;
    };
}

function Terrain(path, color, position, radius) {
    this.path = path;   // path layer
    this.color = color;         // terrain color
    this.position = position;   // center position
    this.radius = radius;       // radius

    this.type = "Terrain";      // type definition
    this.deletable = false;     // universal deletability flag

    this.manifest = function () {
        fc.beginPath();
        fc.fillStyle = this.color;
        fc.arc(this.position, getBasisHeight(this.path) + 50, this.radius, Math.PI, 2 * Math.PI, false);
        fc.fill();
    };

    this.move = function () {
        this.position -= movementCoefficient;
        if (this.position < -this.radius) {
            this.deletable = true;
        }
    };
}

function Decoration(image, scale, path, offset, position) {
    this.image = image;         // decoration image
    this.scale = scale;         // image scale
    this.path = path;   // path layer
    this.offset = offset;       // height offset from the optimal value
    this.position = position;   // center position

    this.type = "Decoration";   // type definition
    this.deletable = false;     // universal deletability flag

    this.manifest = function() {
        var height = getOptimalHeight(this.path, this.position) + this.offset;
        fc.beginPath();
        fc.drawImage(this.image, this.position - this.image.width / 2, height,
            this.image.width * this.scale, this.image.height * this.scale);
    };

    this.move = function() {
        this.position -= movementCoefficient;
        if (this.position < -this.image.width * this.scale) {
            this.deletable = true;
        }
    };
}

function Sequence() {
    this.sequence = [];
    this.currentActionId = -1;

    this.type = "Sequence";         // type definition
    this.deletable = false;         // universal deletability flag

    this.manifest = function() {
        if (this.currentActionId < 0) {
            this.currentActionId = 0;
            if (this.sequence.length > 0) {
                registerObject(GUI_EVENT, this.sequence[this.currentActionId]);
            } else {
                this.deletable = true;
            }
        }
        if (this.sequence[this.currentActionId].deletable) {
            this.currentActionId++;
            if (this.currentActionId < this.sequence.length) {
                registerObject(GUI_EVENT, this.sequence[this.currentActionId]);
            } else {
                this.deletable = true;
            }
        }
    };

    this.move = function() {};

    this.addAction = function(action) {
        this.sequence.push(action);
    };
}

function Action() {
    this.frame = 0;             // current frame

    this.type = "Action";       // type definition
    this.deletable = false;     // universal deletability flag

    /*
     * specify action behavior by defining the playFrame method
     * WARNING: playFrame MUST contain a terminating "return true" clause
     *          or it will run in an infinite loop
     */
    this.definePlayFrame = function(playFrame) {
        this.playFrame = playFrame;
    };

    this.playFrame = function(frame) {};

    this.manifest = function () {
        if (!this.deletable) {
            this.deletable = this.playFrame(this.frame);
            this.frame++;
        }
    };

    this.move = function() {};
}

function GuiElement(carcassImage, xPos, yPos) {
    this.carcassImage = carcassImage;
    this.xPos = xPos;
    this.yPos = yPos;

    this.defineReflect = function (reflect) {
        this.reflect = reflect;
    };

    this.reflect = function() {};

    this.manifest = function () {
        if (displayGui) {
            fc.beginPath();
            if (this.carcassImage != null) {
                fc.drawImage(this.carcassImage, this.xPos, this.yPos);
            }
            this.reflect();
        }
    };

    this.move = function() {};

    this.type = "GuiElement";   // type definition
    this.deletable = false;     // universal deletability flag
}

function Hero() {
    this.imgHeroStand = getImageResource("imgHeroStand");
    this.imgHeroMove1 = getImageResource("imgHeroMove1");
    this.imgHeroMove2 = getImageResource("imgHeroMove2");
    this.imgHeroPrepare = getImageResource("imgHeroPrepare");
    this.imgHeroAttack = getImageResource("imgHeroAttack");
    this.imgHeroDefend = getImageResource("imgHeroDefend");

    this.attrAttack = 15;
    this.attrDefense = 15;
    this.attrAgility = 10;
    this.attrReflexes = 10;
    this.attrMaxHp = 100;
    this.attrMaxSp = 100;
    this.effAttack = 1;
    this.effDefense = 1;
    this.effAgility = 1;
    this.effReflexes = 1;
    this.hp = this.attrMaxHp;
    this.sp = this.attrMaxSp;

    this.effEvasion = 1;        // effective evasion of 1 means 100% chance to hit, thus no evasion
    this.effReflect = 1;        // effective reflection of 1 means 100% reflect damage reduction, thus no reflection

    this.karma = 100;

    this.position = 500;
    this.path = MID;
    this.height = getOptimalHeight(this.path, this.position);

    this.animationState = AN_STAND;
    this.animationFrame = 0;

    this.skillSet = [];
    // TODO: temporary way to fill skills!
    this.skillSet.push(obtainAttackSkill());
    this.skillSet.push(obtainDefendSkill());
    this.skillSet.push(obtainChargeSkill());
    this.skillSet.push(obtainJabSkill());
    this.skillSet.push(obtainCounterattackSkill());
    this.skillSet.push(obtainGuardedStrikeSkill());
    this.skillSet.push(obtainRatRiderDanceSkill());
    this.skillSet.push(obtainAceOfSpadesSkill());
    this.skillSet.push(obtainOmnislashSkill());
    this.battleGaugeArtifacts = [];

    this.type = "Hero";      // type definition
    this.deletable = false;  // universal deletability flag

    this.moveFarther = function() {
        if (this.path != FAR) {
            if (this.sp > this.attrMaxSp * PATH_CHANGE_SP_COST_RATIO) {
                this.sp -= this.attrMaxSp * PATH_CHANGE_SP_COST_RATIO;
                this.path--;
            } else {
                registerObject(GUI_COMMON, procureGuiEffectAction(GFX_HERO_SPGAUGE_FLASH, "#FF6060", null));
            }
        }
    };

    this.moveNearer = function () {
        if (this.path != NEAR) {
            if (this.sp > this.attrMaxSp * PATH_CHANGE_SP_COST_RATIO) {
                this.sp -= this.attrMaxSp * PATH_CHANGE_SP_COST_RATIO;
                this.path++;
            } else {
                registerObject(GUI_COMMON, procureGuiEffectAction(GFX_HERO_SPGAUGE_FLASH, "#FF6060", null));
            }
        }
    };

    this.progressBattleGauge = function () {
        this.effAttack = 1;
        this.effDefense = 1;
        this.effAgility = 1;
        this.effReflexes = 1;
        for (var i = 0; i < this.battleGaugeArtifacts.length; i++) {
            if (!(typeof this.battleGaugeArtifacts[i] === "undefined")) {
                if (this.battleGaugeArtifacts[i].getEffect(this.battleGaugeArtifacts[i].position, this)) {
                    delete this.battleGaugeArtifacts[i];
                }
            }
        }
        var battleGaugeShift = BATTLEGAUGE_SHIFT_BASIS * getGlobalBattleGaugeShiftCoefficient();
        for (i = 0; i < this.battleGaugeArtifacts.length; i++) {
            if (!(typeof this.battleGaugeArtifacts[i] === "undefined")) {
                this.battleGaugeArtifacts[i].position -= battleGaugeShift;
            }
        }

        if (hero.effDefense > 1) {
            this.setAnimationState(AN_DEFEND);
        } else if (hero.effDefense < 1) {
            this.setAnimationState(AN_PREPARE);
        } else {
            this.setAnimationState(AN_STAND);
        }
    };

    this.getRightmostCooldown = function () {
        var rightmostCooldown = BGL_LEFT;
        for (var i = 0; i < this.battleGaugeArtifacts.length; i++) {
            var artifact = this.battleGaugeArtifacts[i];
            if (!(typeof artifact === "undefined")) {
                if ((artifact.rightCooldown > 0) && (artifact.position + artifact.rightCooldown > rightmostCooldown)) {
                    rightmostCooldown = artifact.position + artifact.rightCooldown;
                }
            }
        }
        return rightmostCooldown;
    };

    this.useSkill = function (skill, position) {
        if (this.getRightmostCooldown() >= skill.getLeftCooldown(position)) {
            registerObject(GUI_COMMON, procureGuiEffectAction(GFX_HERO_BATTLEGAUGE_FLASH, "#FF6060", null));
        } else if (this.sp < skill.spCost) {
            registerObject(GUI_COMMON, procureGuiEffectAction(GFX_HERO_SPGAUGE_FLASH, "#FF6060", null));
        } else {
            /* ATTRIBUTE INCREASE FOR AGILITY */
            var enemyAgilityModifier = enemy.attrAgility / hero.attrAgility;
            var agilityIncreaseMultiplier = 100 / (skill.getLeftCooldown(position) - this.getRightmostCooldown() + 50);
            attrIncrease[ATTR_AGILITY] += agilityIncreaseMultiplier * enemyAgilityModifier * AIB_AGILITY;

            this.expendSp(skill.spCost);
            var artifactData = skill.getArtifacts(position);
            for (var i = 0; i < artifactData.length; i++) {
                // Fuck you, Javascript!
                this.battleGaugeArtifacts.push(artifactData[i]);
            }
            registerObject(GUI_COMMON,
                procureGuiEffectAction(GFX_HERO_BATTLEGAUGE_FLASH_FILL, "#FFFFFF", null));
        }
    };

    this.strike = function (power) {
        registerImpact(hero, enemy, power);
        registerObject(GUI_COMMON,
            procureGuiEffectAction(GFX_HERO_BATTLEGAUGE_FLASH_FILL, "#FF4040", null));
        this.setAnimationState(AN_ATTACK);
    };

    this.expendHp = function (hp) {
        this.hp -= hp;
        if (this.hp < 0) {
            this.hp = 0;
        }
    };

    this.restoreHp = function (hp) {
        this.hp += hp;
        if (this.hp > this.attrMaxHp) {
            this.hp = this.attrMaxHp;
        }
    };

    this.expendSp = function (sp) {
        this.sp -= sp;
        if (this.sp < 0) {
            this.sp = 0;
        }
    };

    this.restoreSp = function (sp) {
        this.sp += sp;
        if (this.sp > this.attrMaxSp) {
            this.sp = this.attrMaxSp;
        }
    };

    this.addKarma = function (karma) {
        this.karma += karma;
    };

    this.expendKarma = function (karma) {
        this.karma -= karma;
    };

    this.setAnimationState = function (animationState) {
        if (this.animationState != AN_ATTACK) {
            this.animationState = animationState;
            this.animationFrame = 0;
        }
    };

    this.getEffectAction = function (imageSequence, framesPerImage, width, height) {
        return procurePlayAnimationAction(imageSequence, framesPerImage,
            width * getPathScale(this.path), height * getPathScale(this.path),
            this.position - this.imgHeroStand.width * getPathScale(this.path) / 8,
            this.height + this.imgHeroStand.height * getPathScale(this.path) / 2);
    };

    this.manifest = function() {
        if (moving) {
            var optimalHeight = getOptimalHeight(this.path, this.position) + 30;
            var heightOffset = optimalHeight - this.height;
            if (Math.abs(heightOffset) > 4) {
                heightOffset = 4 * heightOffset / Math.abs(heightOffset);
            }
            this.height += heightOffset;
        }
        fc.beginPath();
        switch (this.animationState) {
            case AN_STAND:
                fc.drawImage(this.imgHeroStand,
                    this.position - this.imgHeroStand.width * getPathScale(this.path) / 2, this.height,
                    this.imgHeroStand.width * getPathScale(this.path),
                    this.imgHeroStand.height * getPathScale(this.path));
                break;
            case AN_MOVE_1:
                fc.drawImage(this.imgHeroMove1,
                    this.position - this.imgHeroStand.width * getPathScale(this.path) / 2, this.height,
                    this.imgHeroMove1.width * getPathScale(this.path),
                    this.imgHeroMove1.height * getPathScale(this.path));
                if (this.animationFrame > 9) {
                    this.setAnimationState(AN_MOVE_2);
                    this.animationFrame = 0;
                }
                break;
            case AN_MOVE_2:
                fc.drawImage(this.imgHeroMove2,
                    this.position - this.imgHeroStand.width * getPathScale(this.path) / 2, this.height - 1,
                    this.imgHeroMove2.width * getPathScale(this.path),
                    this.imgHeroMove2.height * getPathScale(this.path));
                if (this.animationFrame > 9) {
                    this.setAnimationState(AN_MOVE_1);
                    this.animationFrame = 0;
                }
                break;
            case AN_PREPARE:
                fc.drawImage(this.imgHeroPrepare,
                    this.position - this.imgHeroStand.width * getPathScale(this.path) / 2, this.height,
                    this.imgHeroPrepare.width * getPathScale(this.path),
                    this.imgHeroPrepare.height * getPathScale(this.path));
                break;
            case AN_ATTACK:
                fc.drawImage(this.imgHeroAttack,
                    this.position - this.imgHeroStand.width * getPathScale(this.path) / 2, this.height,
                    this.imgHeroAttack.width * getPathScale(this.path),
                    this.imgHeroAttack.height * getPathScale(this.path));
                if (this.animationFrame > 8) {
                    this.animationState = AN_STAND;
                    this.animationFrame = 0;
                }
                break;
            case AN_DEFEND:
                fc.drawImage(this.imgHeroDefend,
                    this.position - this.imgHeroStand.width * getPathScale(this.path) / 2, this.height,
                    this.imgHeroDefend.width * getPathScale(this.path),
                    this.imgHeroDefend.height * getPathScale(this.path));
                break;
            case AN_DEATH:
                if (this.animationFrame % 6 > 2) {
                    fc.drawImage(this.imgHeroStand,
                        this.position - this.imgHeroStand.width * getPathScale(this.path) / 2, this.height,
                        this.imgHeroStand.width * getPathScale(this.path),
                        this.imgHeroStand.height * getPathScale(this.path));
                }
                break;
        }
        this.animationFrame++;
        if (this.animationFrame > 10) {
            this.animationFrame = 0;
        }
    };

    this.move = function() {};
}

function Enemy(attrAttack, attrDefense, attrAgility, attrReflexes, attrMaxHp, animationObject) {
    this.attrAttack = attrAttack;
    this.attrDefense = attrDefense;
    this.attrAgility = attrAgility;
    this.attrReflexes = attrReflexes;
    this.attrMaxHp = attrMaxHp;
    this.effAttack = 1;
    this.effDefense = 1;
    this.effAgility = 1;
    this.effReflexes = 1;
    this.hp = this.attrMaxHp;

    this.effEvasion = 1;
    this.effReflect = 1;

    this.animationObject = animationObject;

    this.battleGaugeArtifacts = [];

    this.type = "Enemy";     // type definition
    this.deletable = false;  // universal deletability flag

    /*
     * specify AI behavior by defining the behave method
     * character refers to this battler
     * battleFrame refers to the number of frames that have passed since the beginning of battle
     */
    this.defineBehave = function (behave) {
        this.behave = behave;
    };

    this.behave = function (character, battleFrame) {};

    this.progressBattleGauge = function () {
        this.effAttack = 1;
        this.effDefense = 1;
        this.effAgility = 1;
        this.effReflexes = 1;
        for (var i = 0; i < this.battleGaugeArtifacts.length; i++) {
            if (!(typeof this.battleGaugeArtifacts[i] === "undefined")) {
                if (this.battleGaugeArtifacts[i].getEffect(this.battleGaugeArtifacts[i].position, this)) {
                    delete this.battleGaugeArtifacts[i];
                }
            }
        }
        var battleGaugeShift = BATTLEGAUGE_SHIFT_BASIS
            * getGlobalBattleGaugeShiftCoefficient() * getAgilityDifferenceCoefficient();
        for (i = 0; i < this.battleGaugeArtifacts.length; i++) {
            if (!(typeof this.battleGaugeArtifacts[i] === "undefined")) {
                this.battleGaugeArtifacts[i].position -= battleGaugeShift;
            }
        }
    };

    this.getRightmostCooldown = function () {
        var rightmostCooldown = BGL_LEFT;
        for (var i = 0; i < this.battleGaugeArtifacts.length; i++) {
            var artifact = this.battleGaugeArtifacts[i];
            if (!(typeof artifact === "undefined")) {
                if ((artifact.rightCooldown > 0) && (artifact.position + artifact.rightCooldown > rightmostCooldown)) {
                    rightmostCooldown = artifact.position + artifact.rightCooldown;
                }
            }
        }
        return rightmostCooldown;
    };

    this.useSkill = function (skill, position) {
        var artifactData = skill.getArtifacts(position);
        if (this.getRightmostCooldown() >= skill.getLeftCooldown(position)) {
            // Maybe some special behavior will go here
        } else {
            for (var i = 0; i < artifactData.length; i++) {
                this.battleGaugeArtifacts.push(artifactData[i]);
            }
        }
    };

    this.strike = function (power) {
        registerImpact(enemy, hero, power);
        registerObject(GUI_COMMON, procureGuiEffectAction(GFX_ENEMY_BATTLEGAUGE_FLASH_FILL, "#FF4040", null));
        this.animationObject.setAnimationState(AN_ATTACK);
    };

    this.expendHp = function (hp) {
        this.hp -= hp;
        if (this.hp < 0) {
            this.hp = 0;
        }
    };

    this.restoreHp = function (hp) {
        this.hp += hp;
        if (this.hp > this.attrMaxHp) {
            this.hp = this.attrMaxHp;
        }
    };

    this.getEffectAction = function (imageSequence, framesPerImage, width, height) {
        return procurePlayAnimationAction(imageSequence, framesPerImage,
            width * getPathScale(this.animationObject.path),
            height * getPathScale(this.animationObject.path),
            this.animationObject.position,
            getOptimalHeight(this.animationObject.path, this.animationObject.position)
                + this.animationObject.offset + this.animationObject.defaultImage.height
                * getPathScale(this.animationObject.path) / 4);
    };

    this.defineGetKarma = function (getKarma) {
        this.getKarma = getKarma;
    };

    this.getKarma = function () {
        var overallStrengthModifier = (this.attrAttack * this.attrDefense * this.attrAgility * this.attrReflexes)
            / (hero.attrAttack * hero.attrDefense * hero.attrAgility * hero.attrReflexes);
        return Math.floor(Math.sqrt(overallStrengthModifier) * this.attrMaxHp / 5);
    };
}

function CombatSkill(name, description, spCost) {
    this.name = name;
    this.description = description;
    this.spCost = spCost;

    this.defineGetArtifacts = function (getArtifacts) {
        this.getArtifacts = getArtifacts;
    };

    this.getArtifacts = function (position) {};

    this.getLeftCooldown = function (position) {
        var leftCooldown = 0;
        var artifactData = this.getArtifacts(0);
        for (var i = 0; i < artifactData.length; i++) {
            if (artifactData[i].leftCooldown > leftCooldown) {
                leftCooldown = artifactData[i].leftCooldown;
            }
        }
        if (position != null) {
            return getAbsoluteArtifactPosition(position) - leftCooldown;
        } else {
            return leftCooldown;
        }
    }
}

function BattleGaugeArtifact(position, leftCooldown, rightCooldown) {
    this.position = position;
    this.leftCooldown = leftCooldown;
    this.rightCooldown = rightCooldown;

    /*
     * specify BGA effect by defining the getEffect method
     * WARNING: getEffect MUST contain a terminating "return true" clause
     *          or it won't be deleted until the end of battle
     */
    this.defineGetEffect = function (getEffect) {
        this.getEffect = getEffect;
    };

    this.getEffect = function (position, character) {};

    /*
     * specify BGA appearance on the battle gauge by defining the draw method
     */
    this.defineDraw = function (draw) {
        this.draw = draw;
    };

    this.draw = function (position, character) {};

    /*
     * specify BGA preview on the battle gauge by defining the sketch method
     */
    this.defineSketch = function (sketch) {
        this.sketch = sketch;
    };

    this.sketch = function (position, character) {};
}

function ObjectType(chanceToAppear) {
    this.chanceToAppear = chanceToAppear;

    this.defineGenerateObject = function(generateObject) {
        this.generateObject = generateObject;
    };

    this.generateObject = function(path, position) {};
}

function FieldObject(path, position, offset, defaultImage) {
    this.defaultImage = defaultImage;   // image in a default state
    this.path = path;           // path layer
    this.position = position;           // center position
    this.offset = offset;               // offset from the center position

    this.finished = false;              // trigger finish flag
    this.scale = getPathScale(this.path);

    this.animationState = AN_STAND;
    this.animationFrame = 0;

    this.type = "FieldObject";  // type definition
    this.deletable = false;     // universal deletability flag

    this.setAnimationState = function(animationState) {
        this.animationState = animationState;
        this.animationFrame = 0;
    };

    this.defineTrigger = function(trigger) {
        this.trigger = trigger;
    };

    this.setAttackImage = function(attackImage) {
        this.attackImage = attackImage;
    };

    this.trigger = function() {};

    this.manifest = function() {
        var height = getOptimalHeight(this.path, this.position) + this.offset;
        fc.beginPath();
        switch (this.animationState) {
            case AN_STAND:
                fc.drawImage(this.defaultImage, this.position
                    - this.defaultImage.width * getPathScale(this.path) / 2, height,
                    this.defaultImage.width * this.scale, this.defaultImage.height * this.scale);
                break;
            case AN_ATTACK:
                fc.drawImage(this.attackImage, this.position
                    - this.attackImage.width * getPathScale(this.path) / 2, height,
                    this.attackImage.width * this.scale, this.attackImage.height * this.scale);
                if (this.animationFrame > 8) {
                    this.animationState = AN_STAND;
                    this.animationFrame = 0;
                }
                break;
            case AN_DEATH:
                if (this.animationFrame % 6 > 2) {
                    fc.drawImage(this.defaultImage, this.position
                        - this.defaultImage.width * getPathScale(this.path) / 2, height,
                        this.defaultImage.width * this.scale, this.defaultImage.height * this.scale);
                }
                break;
        }
        this.animationFrame++;
        if (this.animationFrame > 10) {
            this.animationFrame = 0;
        }

    };

    this.move = function() {
        this.position -= movementCoefficient;
        if (this.position < -this.defaultImage.width * this.scale) {
            objectsOnLayer[this.path]--;
            this.deletable = true;
        }
    };
}