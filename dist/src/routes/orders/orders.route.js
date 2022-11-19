"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var currentOrdersByUser_1 = require("../../controllers/orders/currentOrdersByUser");
var create_1 = require("../../controllers/orders/create");
var completedOrdersByUser_1 = require("../../controllers/orders/completedOrdersByUser");
var check_token_1 = require("../../middleware/check_token");
var router = express_1.default.Router();
router.post('/', check_token_1.check_token, create_1.create);
router.get('/completedOrdersByUser', check_token_1.check_token, completedOrdersByUser_1.completedOrdersByUser);
router.get('/currentOrdersByUser', check_token_1.check_token, currentOrdersByUser_1.currentOrdersByUser);
exports.default = router;
