"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var create_1 = require("../../controllers/users/create");
var show_1 = require("../../controllers/users/show");
var index_1 = require("../../controllers/users/index");
var router = express_1["default"].Router();
router.get('index', create_1.create);
router.get('index', index_1.index);
router.get('index', show_1.show);
exports["default"] = router;
