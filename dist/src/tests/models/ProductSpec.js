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
var Product_model_1 = require("../../models/Product.model");
var product = new Product_model_1.ProductModel();
describe('Product Model', function () {
    it('should have an create method', function () {
        expect(product.create).toBeDefined();
    });
    it('should have an show method', function () {
        expect(product.show).toBeDefined();
    });
    it('should have an index method', function () {
        expect(product.index).toBeDefined();
    });
    it('should have an productsByCategory method', function () {
        expect(product.productsByCategory).toBeDefined();
    });
    it('should have an top5 method', function () {
        expect(product.top5).toBeDefined();
    });
    it('productsByCategory method should return an array of 1 product under this category:5', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, product.productsByCategory(5)];
                case 1:
                    result = _a.sent();
                    expect(result.length).toEqual(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it('top5 method should return an array of the top5 products ordered by users', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, product.top5()];
                case 1:
                    result = _a.sent();
                    expect(result).toEqual([
                        {
                            product_id: 3,
                            product_name: 'EVS Sports TP199 Knee / Shin Guard, (Black / Hi-Viz Yellow, Large/X-Large)',
                            price: 99.99,
                            category: 3,
                            count: '3',
                        },
                        {
                            product_id: 2,
                            product_name: 'Meaningful Beauty 5-Piece Starter Kit, Gift Set, various color',
                            price: 73.2,
                            category: 2,
                            count: '3',
                        },
                        {
                            product_id: 1,
                            product_name: 'Sunny Days Entertainment Bath Time Sing Along Play Center',
                            price: 9.99,
                            category: 1,
                            count: '3',
                        },
                        {
                            product_id: 6,
                            product_name: 'JBL Vibe 200TWS True Wireless Earbuds - Black',
                            price: 25.99,
                            category: 6,
                            count: '2',
                        },
                        {
                            product_id: 5,
                            product_name: 'Vitamin D & B12 Vitamin Supplements for Adults & Kids | Supports Bone Health |',
                            price: 10,
                            category: 5,
                            count: '2',
                        },
                    ]);
                    return [2 /*return*/];
            }
        });
    }); });
});
