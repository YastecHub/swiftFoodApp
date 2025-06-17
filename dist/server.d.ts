import * as express from 'express';
export declare class Server {
    app: express.Application;
    constructor();
    setConfigs(): void;
    connectMongoDb(): void;
    configureBodyParser(): void;
    allowCors(): void;
    setRoute(): void;
    handleErrors(): void;
}
