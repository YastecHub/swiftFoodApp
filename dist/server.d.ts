import express from 'express';
export declare class Server {
    app: express.Application;
    constructor();
    setConfigs(): void;
    dotenvConfigs(): void;
    connectMongoDb(): void;
    connectRedis(): void;
    configureBodyParser(): void;
    allowCors(): void;
    setRoute(): void;
    error404Handler(): void;
    handleErrors(): void;
}
