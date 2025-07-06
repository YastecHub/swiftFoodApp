"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jwt = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const environment_1 = require("../environments/environment");
const Crypto = __importStar(require("crypto"));
const Redis_1 = require("./Redis");
class Jwt {
    static jwtSign(payload, userId, expires_in = '1h') {
        //Jwt.gen_secret_key();
        return jwt.sign(payload, (0, environment_1.getEnvironmentVariables)().jwt_secret_key, {
            expiresIn: expires_in,
            audience: userId.toString(),
            issuer: 'YastecHub'
        });
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
    static jwtSignRefreshToken(payload_1, userId_1) {
        return __awaiter(this, arguments, void 0, function* (payload, userId, expires_in = '1y', redis_ex = 365 * 24 * 60 * 60) {
            try {
                const refreshToken = jwt.sign(payload, (0, environment_1.getEnvironmentVariables)().jwt_refresh_secret_key, {
                    expiresIn: expires_in,
                    audience: userId.toString(),
                    issuer: 'YastecHub'
                });
                //set refresh token in Redis with key userId
                yield Redis_1.Redis.setValue(userId.toString(), refreshToken, redis_ex);
                return refreshToken;
            }
            catch (e) {
                console.log(e);
                throw ('Error signing refresh token.');
            }
        });
    }
    static jwtVerifyRefreshToken(refreshToken) {
        return new Promise((resolve, reject) => {
            jwt.verify(refreshToken, (0, environment_1.getEnvironmentVariables)().jwt_refresh_secret_key, (err, decoded) => {
                if (err)
                    reject(err);
                else if (!decoded)
                    reject(new Error('User is not Authorized.'));
                else {
                    // Check if the refresh token exists in Redis
                    const user = decoded;
                    Redis_1.Redis.getValue(user.aud).then(value => {
                        if (value === refreshToken)
                            resolve(decoded);
                        else
                            reject(new Error('Your Session is Expired! Please Login Again...'));
                    })
                        .catch(e => {
                        reject(e);
                    });
                }
            });
        });
    }
    static gen_secret_key() {
        const DEV_access_token_secret_key = Crypto.randomBytes(32).toString('hex');
        const DEV_refresh_token_secret_key = Crypto.randomBytes(32).toString('hex');
        const PROD_access_token_secret_key = Crypto.randomBytes(32).toString('hex');
        const PROD_refresh_token_secret_key = Crypto.randomBytes(32).toString('hex');
        console.table({
            DEV_access_token_secret_key,
            DEV_refresh_token_secret_key,
            PROD_access_token_secret_key,
            PROD_refresh_token_secret_key
        });
    }
}
exports.Jwt = Jwt;
