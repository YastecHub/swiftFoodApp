"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jwt = void 0;
const jwt = require("jsonwebtoken");
const environment_1 = require("../environments/environment");
class Jwt {
    static jwtSign(payload, expires_in = '180d') {
        return jwt.sign(payload, (0, environment_1.getEnvironmentVariables)().jwt_secret_key, { expiresIn: expires_in, issuer: 'YastecHub' });
    }
    static jwtVerify(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, (0, environment_1.getEnvironmentVariables)().jwt_secret_key, (err, decoded) => {
                if (err)
                    reject(err);
                else if (!decoded)
                    reject(new Error('User is not Authorized.'));
                else
                    resolve(decoded);
            });
        });
    }
}
exports.Jwt = Jwt;
