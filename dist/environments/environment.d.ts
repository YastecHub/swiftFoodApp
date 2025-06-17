export interface Environment {
    db_uri: string;
    jwt_secret_key: string;
    sendgrid?: {
        api_key: string;
        email_from: string;
    };
}
export declare function getEnvironmentVariables(): Environment;
