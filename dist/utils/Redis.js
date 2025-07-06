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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Redis = void 0;
const redis_1 = require("redis");
const environment_1 = require("../environments/environment");
const client = (0, redis_1.createClient)({
    // url: 'redis://' + getEnvironmentVariables().redis.host + ':' + getEnvironmentVariables().redis.port,
    username: (0, environment_1.getEnvironmentVariables)().redis.username,
    password: (0, environment_1.getEnvironmentVariables)().redis.password,
    socket: {
        host: (0, environment_1.getEnvironmentVariables)().redis.host,
        port: (0, environment_1.getEnvironmentVariables)().redis.port
    }
});
class Redis {
    static connectToRedis() {
        // this.client.on('error', (err) => console.log('Redis Client Error', err));
        client.connect().then(() => {
            console.log('Connected to Redis');
        })
            .catch(e => {
            throw (e);
        });
    }
    static setValue(key, value, expires_at) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let options = {};
                if (expires_at) {
                    options = {
                        EX: expires_at
                    };
                }
                yield client.set(key, value, options);
                return;
            }
            catch (e) {
                console.log(e);
                throw ('Server not connected! Please try again...');
            }
        });
    }
    static getValue(key) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const value = yield client.get(key);
                return value;
            }
            catch (e) {
                console.log(e);
                throw ('Your Session is Expired! Please Login Again...');
            }
        });
    }
    static deleteKey(key) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield client.del(key);
            }
            catch (e) {
                console.log(e);
                throw ('Server not connected! Please try again...');
            }
        });
    }
}
exports.Redis = Redis;
