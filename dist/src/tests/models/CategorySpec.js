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
var Category_model_1 = require("../../models/Category.model");
var category = new Category_model_1.CategoryModel();
describe('Category Model', function () {
    it('should have an create method', function () {
        expect(category.create).toBeDefined();
    });
    it('should have an show method', function () {
        expect(category.show).toBeDefined();
    });
    it('should have an index method', function () {
        expect(category.index).toBeDefined();
    });
    it('create method should add a category', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, category.create("Test Category")];
                case 1:
                    result = _a.sent();
                    expect({ category_id: 8, category_name: result.category_name })
                        .toEqual({ category_id: 8, category_name: "Test Category" });
                    return [2 /*return*/];
            }
        });
    }); });
    it('index method should display all category', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, result2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, category.index()];
                case 1:
                    result = _a.sent();
                    result2 = result.map(function (e) {
                        return { category_id: e.category_id, category_name: e.category_name };
                    });
                    expect(result2)
                        .toEqual([{ category_id: 1, category_name: 'Entertainment' },
                        { category_id: 2, category_name: 'Beauty' },
                        { category_id: 3, category_name: 'Sport' },
                        { category_id: 4, category_name: 'Books' },
                        { category_id: 5, category_name: 'Health' },
                        { category_id: 6, category_name: 'Electronics' },
                        { category_id: 7, category_name: 'Toys' },
                        { category_id: 8, category_name: 'Test Category' }
                    ]);
                    return [2 /*return*/];
            }
        });
    }); });
    it('show method should display one specific category id = 1', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, category.show(1)];
                case 1:
                    result = _a.sent();
                    // this obj only to remove the crated_at because it's not a fixed date
                    expect({ category_id: result.category_id, category_name: result.category_name })
                        .toEqual({ category_id: 1, category_name: 'Entertainment' });
                    return [2 /*return*/];
            }
        });
    }); });
});
