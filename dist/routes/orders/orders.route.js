"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var currentOrdersByUser_1 = require("../../controllers/orders/currentOrdersByUser");
var create_1 = require("../../controllers/orders/create");
var completedOrdersByUser_1 = require("../../controllers/orders/completedOrdersByUser");
var router = express_1["default"].Router();
router.get('index', completedOrdersByUser_1.completedOrdersByUser);
router.get('index', create_1.create);
router.get('index', currentOrdersByUser_1.currentOrdersByUser);
exports["default"] = router;
