"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
var db_1 = __importDefault(require("../helper/db"));
var pg_format_1 = __importDefault(require("pg-format"));
var helper_for_product_model_1 = require("../helper/helper_for_product_model");
var compine_order_lines_1 = require("../helper/compine_order_lines");
var OrderModel = /** @class */ (function () {
    function OrderModel() {
    }
    OrderModel.prototype.completedOrdersByUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, result, final_result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, db_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        sql = 'select o.order_id, o.status, o.user_id, o.created_at, p.product_id, p.product_name, p.price, p.category as category_id, c.category_name, op.order_quantity as product_quantity from order_product op inner join orders o on op.order_id = o.order_id inner join product p on op.product_id = p.product_id inner join category c on c.category_id = p.category where o.user_id = ($1) AND status = True order by o.order_id;';
                        return [4 /*yield*/, conn.query(sql, [id])];
                    case 2:
                        result = _a.sent();
                        final_result = (0, compine_order_lines_1.compine_order_lines_after)(result.rows);
                        console.log(result.rows);
                        console.log(final_result);
                        conn.release();
                        return [2 /*return*/, final_result];
                    case 3:
                        err_1 = _a.sent();
                        throw new Error("".concat(err_1));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // TODO: you can delete the user_id from the select.
    OrderModel.prototype.currentOrdersByUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, result, final_result, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, db_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        sql = 'select o.order_id, o.status, o.user_id, o.created_at, p.product_id, p.product_name, p.price, p.category as category_id, c.category_name, op.order_quantity as product_quantity from order_product op inner join orders o on op.order_id = o.order_id inner join product p on op.product_id = p.product_id inner join category c on c.category_id = p.category where o.user_id = ($1) AND status = False order by o.order_id;';
                        return [4 /*yield*/, conn.query(sql, [id])];
                    case 2:
                        result = _a.sent();
                        final_result = (0, compine_order_lines_1.compine_order_lines_after)(result.rows);
                        conn.release();
                        return [2 /*return*/, final_result];
                    case 3:
                        err_2 = _a.sent();
                        throw new Error("".concat(err_2));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OrderModel.prototype.create = function (user_id, products_list) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, converted_id_list, converted_quantites_list, sql1, select_result, list, insert_order_sql, insert_order_result_1, order_product, insert_order_products_sql, insert_order_products_result, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, db_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 8, , 10]);
                        converted_id_list = (0, helper_for_product_model_1.convert_ids_to_sql_list)(products_list);
                        converted_quantites_list = products_list.map(function (e) { return e[1]; });
                        sql1 = 'select * from product where product_id = ANY ($1);';
                        return [4 /*yield*/, conn.query(sql1, [converted_id_list])];
                    case 3:
                        select_result = _a.sent();
                        list = select_result.rows;
                        console.log("check_product_list: ", (0, helper_for_product_model_1.check_product_list)(list, converted_id_list));
                        if (!(0, helper_for_product_model_1.check_product_list)(list, converted_id_list))
                            throw new Error("Error: there is a wrong product in the list!!");
                        // throw new Error(`Error: to stop`);
                        return [4 /*yield*/, conn.query('BEGIN')];
                    case 4:
                        // throw new Error(`Error: to stop`);
                        _a.sent();
                        insert_order_sql = 'insert into orders (user_id) values ($1) RETURNING *;';
                        return [4 /*yield*/, conn.query(insert_order_sql, [user_id])];
                    case 5:
                        insert_order_result_1 = _a.sent();
                        console.log(insert_order_result_1.rows);
                        order_product = products_list.map(function (e) { return e.concat(insert_order_result_1.rows[0].order_id); });
                        console.log(order_product);
                        insert_order_products_sql = 'insert into order_product (product_id, order_quantity, order_id) values %L';
                        return [4 /*yield*/, conn.query((0, pg_format_1.default)(insert_order_products_sql, order_product))];
                    case 6:
                        insert_order_products_result = _a.sent();
                        console.log(insert_order_products_result);
                        // throw new Error(`Error: to stop`);
                        return [4 /*yield*/, conn.query('COMMIT')];
                    case 7:
                        // throw new Error(`Error: to stop`);
                        _a.sent();
                        conn.release();
                        return [2 /*return*/, insert_order_result_1.rows[0]];
                    case 8:
                        err_3 = _a.sent();
                        return [4 /*yield*/, conn.query('ROLLBACK')];
                    case 9:
                        _a.sent();
                        throw new Error("".concat(err_3));
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    return OrderModel;
}());
exports.OrderModel = OrderModel;
