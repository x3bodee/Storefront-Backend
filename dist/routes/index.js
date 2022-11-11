"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var category_route_1 = __importDefault(require("./categores/category.route"));
var products_route_1 = __importDefault(require("./products/products.route"));
var orders_route_1 = __importDefault(require("./orders/orders.route"));
var users_route_1 = __importDefault(require("./users/users.route"));
var routes = express_1["default"].Router();
routes.use('/category', category_route_1["default"]);
routes.use('/product', products_route_1["default"]);
routes.use('/order', orders_route_1["default"]);
routes.use('/user', users_route_1["default"]);
exports["default"] = routes;
