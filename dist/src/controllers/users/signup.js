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
exports.signup = void 0;
var User_model_1 = require("../../models/User.model");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// create new user
var User = new User_model_1.UserModel();
var TOKEN = process.env.TOKEN;
var signup = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, first_name, last_name, email, password, user, createed_user, token, error_1, err;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log('create new user');
                _a = req.body, first_name = _a.first_name, last_name = _a.last_name, email = _a.email, password = _a.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                if (!first_name)
                    throw new Error("Error: first_name is mandatory for creating the user");
                if (!last_name)
                    throw new Error("Error: last_name is mandatory for creating the user");
                if (!email)
                    throw new Error("Error: email is mandatory for creating the user");
                if (!password)
                    throw new Error("Error: password is mandatory for creating the user");
                user = { first_name: first_name, last_name: last_name, email: email, password: password };
                return [4 /*yield*/, User.signup(user)];
            case 2:
                createed_user = _b.sent();
                token = jsonwebtoken_1.default.sign({ user: { id: createed_user === null || createed_user === void 0 ? void 0 : createed_user.user_id,
                        first_name: createed_user === null || createed_user === void 0 ? void 0 : createed_user.first_name,
                        last_name: createed_user === null || createed_user === void 0 ? void 0 : createed_user.last_name,
                        email: createed_user === null || createed_user === void 0 ? void 0 : createed_user.email,
                        created_at: createed_user === null || createed_user === void 0 ? void 0 : createed_user.created_at
                    } }, TOKEN, { expiresIn: "7d" } // it will be expired after 7 days 
                );
                return [2 /*return*/, res.status(200).json({ status: true, msg: 'Done', token: token })];
            case 3:
                error_1 = _b.sent();
                console.log('error in user signup controller: ', error_1);
                err = error_1 + "";
                return [2 /*return*/, res.status(400).json({ status: false, msg: 'Error', err: err })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.signup = signup;
