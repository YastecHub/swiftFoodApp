import { DevEnvironment } from "./environment.dev";
import { ProdEnvironment } from "./environment.prod";

export interface Environment{
    db_uri: string,
    sendgrid?: {
        api_key: string,
        email_from: string
    }
}

export function getEnvironmentVariables(){
    if(process.env.NODE_ENV == 'production'){
        return ProdEnvironment
    }
    return DevEnvironment
}