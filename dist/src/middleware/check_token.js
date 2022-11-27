"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_token = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var TOKEN = process.env.TOKEN;
function check_token(req, res, next) {
    console.log('###### FROM THE MIDDLEWARE ######');
    console.log(req.headers.authorization);
    try {
        if (!req.headers.authorization)
            throw new Error('Token is required!!');
        var header_token = req.headers.authorization;
        var token = header_token.split(' ')[1];
        var token_data = jsonwebtoken_1.default.verify(token, TOKEN);
        if (!token_data)
            throw new Error("Invalid Token");
        // console.log(token_data);
        console.log(token_data.user.id);
        req.user_id = token_data.user.id;
        next();
    }
    catch (err) {
        var error = (err + '');
        if (error.includes('Token is required!!'))
            return res.status(401).json({
                status: false,
                msg: 'Token is required',
                err: 'ERROR: Token is required',
            });
        if (err instanceof jsonwebtoken_1.default.JsonWebTokenError)
            return res.status(401).json({
                status: false,
                msg: 'Invalid Token',
                err: 'ERROR: Invalid JWT Token',
            });
        if (error.includes('Invalid Token'))
            return res.status(401).json({
                status: false,
                msg: 'Invalid Token',
                err: 'ERROR: Invalid Token',
            });
        throw new Error("".concat(err));
    }
}
exports.check_token = check_token;
