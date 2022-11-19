"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var check_token_1 = require("../../middleware/check_token");
var signup_1 = require("../../controllers/users/signup");
var signin_1 = require("../../controllers/users/signin");
var show_1 = require("../../controllers/users/show");
var index_1 = require("../../controllers/users/index");
var router = express_1.default.Router();
router.post('/signin', signin_1.signin);
router.post('/', signup_1.signup);
router.get('/', check_token_1.check_token, index_1.index);
router.get('/:id', check_token_1.check_token, show_1.show);
exports.default = router;
