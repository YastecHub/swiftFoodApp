import { Environment } from "./environment";
import { Utils } from '../utils/utils';

Utils.dotenvConfigs();

export const DevEnvironment: Environment = {
    db_uri: process.env.DEV_DB_URI,
    jwt_secret_key: process.env.DEV_JWT_SECRET_KEY,
    sendgrid: {
        api_key: process.env.DEV_SENDGRID_API_KEY,
        email_from: process.env.DEV_SENDGRID_SENDER_EMAIL
    }
};