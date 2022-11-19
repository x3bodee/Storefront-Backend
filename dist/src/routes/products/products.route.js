"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var create_1 = require("../../controllers/products/create");
var index_1 = require("../../controllers/products/index");
var show_1 = require("../../controllers/products/show");
var top5_1 = require("../../controllers/products/top5");
var productsByCategory_1 = require("../../controllers/products/productsByCategory");
var check_token_1 = require("../../middleware/check_token");
var router = express_1.default.Router();
router.get('/productsByCategory/:id', productsByCategory_1.productsByCategory);
router.get('/top5', top5_1.top5);
router.get('/', index_1.index);
router.get('/:id', show_1.show);
router.post('/', check_token_1.check_token, create_1.create);
exports.default = router;
