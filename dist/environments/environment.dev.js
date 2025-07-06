"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevEnvironment = void 0;
const utils_1 = require("../utils/utils");
utils_1.Utils.dotenvConfigs();
exports.DevEnvironment = {
    db_uri: process.env.DEV_DB_URI,
    jwt_secret_key: process.env.DEV_JWT_SECRET_KEY,
    jwt_refresh_secret_key: process.env.DEV_REFRESH_TOKEN_SECRET,
    sendgrid: {
        api_key: process.env.DEV_SENDGRID_API_KEY,
        email_from: process.env.DEV_SENDGRID_SENDER_EMAIL
    },
    redis: {
        username: null,
        password: null,
        host: process.env.LOCAL_REDIS_HOST,
        port: parseInt(process.env.LOCAL_REDIS_PORT)
    }
};
