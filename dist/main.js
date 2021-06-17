/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/MainScene.js":
/*!**************************!*\
  !*** ./src/MainScene.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MainScene)\n/* harmony export */ });\n/* harmony import */ var _Monster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Monster */ \"./src/Monster.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n\r\n\r\n\r\nclass MainScene extends Phaser.Scene {\r\n    constructor() {\r\n        super(\"MainScene\");\r\n    }\r\n\r\n    preload() {\r\n        _Player__WEBPACK_IMPORTED_MODULE_1__.default.preload(this);\r\n\r\n        _Monster__WEBPACK_IMPORTED_MODULE_0__.default.preload(this, 'bandit', '../assets/monsters/bandit.png', '../assets/monsters/bandit_atlas.json', 'bandit_anim', '../assets/monsters/bandit_anim.json')\r\n\r\n        _Monster__WEBPACK_IMPORTED_MODULE_0__.default.preload(this, 'mushroom', '../assets/monsters/mushroom.png', '../assets/monsters/mushroom_atlas.json', 'mushroom_anim', '../assets/monsters/mushroom_anim.json')\r\n\r\n        _Monster__WEBPACK_IMPORTED_MODULE_0__.default.preload(this, 'gnoll', '../assets/monsters/gnoll.png', '../assets/monsters/gnoll_atlas.json', 'gnoll_anim', '../assets/monsters/gnoll_anim.json')\r\n\r\n        _Monster__WEBPACK_IMPORTED_MODULE_0__.default.preload(this, 'golem', '../assets/monsters/golem.png', '../assets/monsters/golem_atlas.json', 'golem_anim', '../assets/monsters/golem_anim.json')\r\n\r\n\r\n        this.load.image('tiles', '../assets/textures/summer.png')\r\n        this.load.tilemapTiledJSON('map', '../assets/textures/map.json')\r\n    }\r\n\r\n    create() {\r\n        const map = this.make.tilemap({ key: 'map' });\r\n        const tileset = map.addTilesetImage('summer', 'tiles', 32, 32)\r\n        const layer1 = map.createStaticLayer('Tile Layer 1', tileset, 0, 0)\r\n        const layer2 = map.createStaticLayer('Tile Layer 2', tileset, 0, 0)\r\n        layer1.setCollisionByProperty({ colides: true })\r\n        this.matter.world.convertTilemapLayer(layer1)\r\n        layer2.setCollisionByProperty({ colides: true })\r\n        this.matter.world.convertTilemapLayer(layer2)\r\n\r\n        this.bandit1 = new _Monster__WEBPACK_IMPORTED_MODULE_0__.default({ scene: this, x: 500, y: 65, texture: 'bandit', frame: 'bandit_idle_1' });\r\n        this.bandit2 = new _Monster__WEBPACK_IMPORTED_MODULE_0__.default({ scene: this, x: 510, y: 75, texture: 'bandit', frame: 'bandit_idle_1' });\r\n        this.bandit3 = new _Monster__WEBPACK_IMPORTED_MODULE_0__.default({ scene: this, x: 500, y: 85, texture: 'bandit', frame: 'bandit_idle_1' });\r\n\r\n        this.mushroom1 = new _Monster__WEBPACK_IMPORTED_MODULE_0__.default({ scene: this, x: 300, y: 75, texture: 'mushroom', frame: 'normalmushroom_idle_1' });\r\n        this.mushroom2 = new _Monster__WEBPACK_IMPORTED_MODULE_0__.default({ scene: this, x: 325, y: 225, texture: 'mushroom', frame: 'normalmushroom_idle_1' });\r\n        this.mushroom3 = new _Monster__WEBPACK_IMPORTED_MODULE_0__.default({ scene: this, x: 110, y: 380, texture: 'mushroom', frame: 'normalmushroom_idle_1' });\r\n        this.mushroom4 = new _Monster__WEBPACK_IMPORTED_MODULE_0__.default({ scene: this, x: 225, y: 300, texture: 'mushroom', frame: 'normalmushroom_idle_1' });\r\n        this.mushroom5 = new _Monster__WEBPACK_IMPORTED_MODULE_0__.default({ scene: this, x: 40, y: 500, texture: 'mushroom', frame: 'normalmushroom_idle_1' });\r\n        this.mushroom6 = new _Monster__WEBPACK_IMPORTED_MODULE_0__.default({ scene: this, x: 310, y: 330, texture: 'mushroom', frame: 'normalmushroom_idle_1' });\r\n\r\n        this.gnoll1 = new _Monster__WEBPACK_IMPORTED_MODULE_0__.default({ scene: this, x: 380, y: 480, texture: 'gnoll', frame: 'gnollbrute_idle_1' });\r\n        this.gnoll2 = new _Monster__WEBPACK_IMPORTED_MODULE_0__.default({ scene: this, x: 485, y: 400, texture: 'gnoll', frame: 'gnollbrute_idle_1' });\r\n        this.gnoll3 = new _Monster__WEBPACK_IMPORTED_MODULE_0__.default({ scene: this, x: 550, y: 185, texture: 'gnoll', frame: 'gnollbrute_idle_1' });\r\n        this.gnoll4 = new _Monster__WEBPACK_IMPORTED_MODULE_0__.default({ scene: this, x: 500, y: 285, texture: 'gnoll', frame: 'gnollbrute_idle_1' });\r\n\r\n        this.golem1 = new _Monster__WEBPACK_IMPORTED_MODULE_0__.default({ scene: this, x: 550, y: 550, texture: 'golem', frame: 'golem_idle_1' });\r\n        this.golem2 = new _Monster__WEBPACK_IMPORTED_MODULE_0__.default({ scene: this, x: 220, y: 550, texture: 'golem', frame: 'golem_idle_1' });\r\n\r\n        this.player = new _Player__WEBPACK_IMPORTED_MODULE_1__.default({ scene: this, x: 65, y: 290, texture: 'mainchar', frame: 'herald_idle_1' });\r\n\r\n        this.player.inputKeys = this.input.keyboard.addKeys({\r\n            up: Phaser.Input.Keyboard.KeyCodes.W,\r\n            down: Phaser.Input.Keyboard.KeyCodes.S,\r\n            left: Phaser.Input.Keyboard.KeyCodes.A,\r\n            right: Phaser.Input.Keyboard.KeyCodes.D,\r\n        })\r\n    }\r\n\r\n    update() {\r\n        this.player.update()\r\n        this.bandit1.update()\r\n        this.bandit2.update()\r\n        this.bandit3.update()\r\n        this.mushroom1.update()\r\n        this.mushroom2.update()\r\n        this.mushroom3.update()\r\n        this.mushroom4.update()\r\n        this.mushroom5.update()\r\n        this.mushroom6.update()\r\n        this.gnoll1.update()\r\n        this.gnoll2.update()\r\n        this.gnoll3.update()\r\n        this.gnoll4.update()\r\n        this.golem1.update()\r\n        this.golem2.update()\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://littletale-rpg/./src/MainScene.js?");

/***/ }),

/***/ "./src/Monster.js":
/*!************************!*\
  !*** ./src/Monster.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Monster)\n/* harmony export */ });\nclass Monster extends Phaser.Physics.Matter.Sprite {\r\n    constructor(data) {\r\n        let { scene, x, y, texture, frame } = data;\r\n        super(scene.matter.world, x, y, texture, frame)\r\n        this.scene.add.existing(this)\r\n        const { Body, Bodies } = Phaser.Physics.Matter.Matter\r\n        let monsterCollider = Bodies.circle(this.x, this.y, 12, { isSensor: false, label: 'monsterCollider' })\r\n        let monsterSensor = Bodies.circle(this.x, this.y, 24, { isSensor: true, label: 'monsterSensor' })\r\n        const compoundBody = Body.create({\r\n            parts: [monsterCollider, monsterSensor],\r\n            frictionAir: 0.25,\r\n        })\r\n        this.setExistingBody(compoundBody)\r\n        this.setFixedRotation()\r\n    }\r\n\r\n    static preload(scene, name, image, atlas_json, anim_name, anim_json) {\r\n        scene.load.atlas(name, image, atlas_json)\r\n        scene.load.animation(anim_name, anim_json)\r\n    }\r\n\r\n\r\n\r\n    get velocity() {\r\n        return this.body.velocity;\r\n    }\r\n\r\n    update() {\r\n        const speed = 0.5;\r\n        let monsterVelocity = new Phaser.Math.Vector2();\r\n\r\n        monsterVelocity.normalize(1)\r\n        monsterVelocity.scale(speed);\r\n        this.setVelocity(monsterVelocity.x, monsterVelocity.y)\r\n        if (Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1) {\r\n            this.anims.play(this.texture.key + '_walk', true)\r\n        } else {\r\n            this.anims.play(this.texture.key + '_idle', true)\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://littletale-rpg/./src/Monster.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player extends Phaser.Physics.Matter.Sprite {\r\n    constructor(data) {\r\n        let { scene, x, y, texture, frame } = data;\r\n        super(scene.matter.world, x, y, texture, frame)\r\n        this.scene.add.existing(this)\r\n        const { Body, Bodies } = Phaser.Physics.Matter.Matter\r\n        let playerCollider = Bodies.circle(this.x, this.y, 12, { isSensor: false, label: 'playerCollider' })\r\n        let playerSensor = Bodies.circle(this.x, this.y, 24, { isSensor: true, label: 'playerSensor' })\r\n        const compoundBody = Body.create({\r\n            parts: [playerCollider, playerSensor],\r\n            frictionAir: 0.25,\r\n        })\r\n        this.setExistingBody(compoundBody)\r\n        this.setFixedRotation()\r\n    }\r\n\r\n    static preload(scene) {\r\n        scene.load.atlas('mainchar', '../assets/maincharacter/mainchar.png', '../assets/maincharacter/mainchar_atlas.json')\r\n        scene.load.animation('mainchar_anim', '../assets/maincharacter/mainchar_anim.json')\r\n    }\r\n\r\n    get velocity() {\r\n        return this.body.velocity;\r\n    }\r\n\r\n    update() {\r\n\r\n        const speed = 2.5;\r\n        let playerVelocity = new Phaser.Math.Vector2();\r\n        if (this.inputKeys.left.isDown) {\r\n            playerVelocity.x = -1\r\n        } else if (this.inputKeys.right.isDown) {\r\n            playerVelocity.x = 1\r\n        }\r\n        if (this.inputKeys.up.isDown) {\r\n            playerVelocity.y = -1\r\n        } else if (this.inputKeys.down.isDown) {\r\n            playerVelocity.y = 1\r\n        }\r\n        playerVelocity.normalize(1)\r\n        playerVelocity.scale(speed);\r\n        this.setVelocity(playerVelocity.x, playerVelocity.y)\r\n        if (Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1) {\r\n            this.anims.play('mainchar_walk', true)\r\n        } else {\r\n            this.anims.play('mainchar_idle', true)\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://littletale-rpg/./src/Player.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MainScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainScene */ \"./src/MainScene.js\");\n\r\n\r\nconst config = {\r\n    width: 1200,\r\n    height: 800,\r\n    backgroundColor: '#999999',\r\n    type: Phaser.AUTO,\r\n    parent: 'survival-game',\r\n    scene: [_MainScene__WEBPACK_IMPORTED_MODULE_0__.default],\r\n    scale: {\r\n        zoom: 2,\r\n    },\r\n    physics: {\r\n        default: 'matter',\r\n        matter: {\r\n            debug: false,\r\n            gravity: { y: 0 },\r\n        }\r\n    },\r\n    plugins: {\r\n        scene: [\r\n            {\r\n                plugin: PhaserMatterCollisionPlugin,\r\n                key: 'matterCollision',\r\n                mapping: 'matterCollision'\r\n            }\r\n        ]\r\n    }\r\n}\r\n\r\n\r\nnew Phaser.Game(config);\n\n//# sourceURL=webpack://littletale-rpg/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;