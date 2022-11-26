"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var index_1 = __importDefault(require("./routes/index"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var PORT = process.env.PORT;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use('/api', index_1.default);
app.listen(process.env.PORT, function () {
    console.log("app running on port: ".concat(PORT));
});
exports.default = app;
