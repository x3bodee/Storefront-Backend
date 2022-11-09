"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var create_1 = require("../../controllers/products/create");
var index_1 = require("../../controllers/products/index");
var show_1 = require("../../controllers/products/show");
var top5_1 = require("../../controllers/products/top5");
var productsByCategory_1 = require("../../controllers/products/productsByCategory");
var router = express_1["default"].Router();
router.get('index', index_1.index);
router.get('index', show_1.show);
router.get('index', create_1.create);
router.get('index', top5_1.top5);
router.get('index', productsByCategory_1.productsByCategory);
exports["default"] = router;
