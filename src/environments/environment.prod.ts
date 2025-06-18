import { Environment } from './environment';
import { Utils } from '../utils/utils';

Utils.dotenvConfigs();

export const ProdEnvironment: Environment = {
    db_uri: process.env.PROD_DB_URI,
    jwt_secret_key: process.env.PROD_JWT_SECRET_KEY,
    sendgrid: {
        api_key: process.env.PROD_SENDGRID_API_KEY,
        email_from: process.env.PROD_SENDGRID_SENDER_EMAIL
    }
};