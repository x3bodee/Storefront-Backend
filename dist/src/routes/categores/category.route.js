"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = require("../../controllers/categores/index");
var show_1 = require("../../controllers/categores/show");
var create_1 = require("../../controllers/categores/create");
var check_token_1 = require("../../middleware/check_token");
var router = express_1.default.Router();
router.get('/', index_1.index);
router.get('/:id', show_1.show);
router.post('/', check_token_1.check_token, create_1.create);
exports.default = router;
