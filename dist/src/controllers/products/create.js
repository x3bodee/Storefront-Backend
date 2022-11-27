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
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
var Product_model_1 = require("../../models/Product.model");
// show all products
var Product = new Product_model_1.ProductModel();
var create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, product_name, price, category, price_converted, category_converted, product, error_1, err;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log('show all products');
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                _a = req.body, product_name = _a.product_name, price = _a.price, category = _a.category;
                if (!product_name)
                    throw new Error("Error: product_name is mandatory for creating the product");
                if (!price)
                    throw new Error("Error: price is mandatory for creating the product");
                if (!category)
                    throw new Error("Error: category is mandatory for creating the product");
                if (isNaN(Number(price)) || Number(price) < 1)
                    throw new Error("Product price must be a number greater than 0");
                if (isNaN(Number(category)) || Number(category) < 1)
                    throw new Error("Product category must be a number greater than 0");
                price_converted = parseFloat(price);
                category_converted = parseFloat(category);
                return [4 /*yield*/, Product.create(product_name, price_converted, category_converted)];
            case 2:
                product = _b.sent();
                return [2 /*return*/, res.status(200).json({ status: true, msg: 'Done', product: product })];
            case 3:
                error_1 = _b.sent();
                console.log('error in product create controller: ', error_1);
                err = error_1 + '';
                return [2 /*return*/, res.status(400).json({ status: false, msg: 'Error', err: err })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.create = create;
