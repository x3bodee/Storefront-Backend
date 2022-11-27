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
exports.ProductModel = void 0;
var db_1 = __importDefault(require("../helper/db"));
var ProductModel = /** @class */ (function () {
    function ProductModel() {
    }
    ProductModel.prototype.index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, db_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        sql = 'SELECT product_id, product_name, price, category_name, category_id, p.created_at FROM product p inner join category on category = category_id;';
                        return [4 /*yield*/, conn.query(sql)];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        err_1 = _a.sent();
                        throw new Error("".concat(err_1));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductModel.prototype.productsByCategory = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, result, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, db_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        sql = 'select product_id,product_name,price,category_name,category_id,p.created_at,category_name from product p inner join category on p.category = category_id where category = ($1);';
                        return [4 /*yield*/, conn.query(sql, [id])];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        err_2 = _a.sent();
                        throw new Error("".concat(err_2));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductModel.prototype.show = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, result, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, db_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        sql = 'select product_id, product_name, price, category_name, category_id, p.created_at FROM product p inner join category on category = category_id where product_id = ($1);';
                        return [4 /*yield*/, conn.query(sql, [id])];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        err_3 = _a.sent();
                        throw new Error("".concat(err_3));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductModel.prototype.top5 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, result, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, db_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        sql = 'select p.product_id, p.product_name, p.price, p.category, count(op.product_id)  from order_product as op left join product as p on op.product_id = p.product_id group by p.product_id ORDER BY COUNT(op.product_id) DESC limit (5);';
                        return [4 /*yield*/, conn.query(sql)];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        err_4 = _a.sent();
                        throw new Error("".concat(err_4));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductModel.prototype.create = function (name, price, category) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, check_if_category_exist, sql1, select_result, sql2, insert_result, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, db_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        sql = 'select category_id from category where category_id = ($1);';
                        return [4 /*yield*/, conn.query(sql, [category])];
                    case 2:
                        check_if_category_exist = _a.sent();
                        if (!check_if_category_exist.rows[0])
                            throw new Error("Error: The category you are using is wrong");
                        sql1 = 'select product_name, category from product where product_name = ($1) AND category = ($2);';
                        return [4 /*yield*/, conn.query(sql1, [name, category])];
                    case 3:
                        select_result = _a.sent();
                        if (select_result.rows[0])
                            throw new Error("Error: This record alredy exist!!");
                        sql2 = 'insert into product (product_name,price,category) values ($1,$2,$3) RETURNING *;';
                        return [4 /*yield*/, conn.query(sql2, [name, price, category])];
                    case 4:
                        insert_result = _a.sent();
                        conn.release();
                        return [2 /*return*/, insert_result.rows[0]];
                    case 5:
                        err_5 = _a.sent();
                        throw new Error("".concat(err_5));
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return ProductModel;
}());
exports.ProductModel = ProductModel;
