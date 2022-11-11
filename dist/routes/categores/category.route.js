"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var index_1 = require("../../controllers/categores/index");
var create_1 = require("../../controllers/categores/create");
var router = express_1["default"].Router();
router.get('index', index_1.index);
router.get('index', create_1.create);
exports["default"] = router;
