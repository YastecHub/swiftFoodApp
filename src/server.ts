import * as express from 'express';
import * as mongoose from 'mongoose';
import { getEnvironmentVariables } from './environments/environment';
import UserRouter from './routers/UserRouter';

export class Server{

   public app : express.Application = express();

    constructor(){
        this.setConfigs();
        this.setRoute();
    }

    setConfigs(){
        this.connectMongoDb();
    }

    connectMongoDb(){
        mongoose.connect(getEnvironmentVariables().db_uri)
        .then(() => {
        console.log('Connected to Mongo successfully');
        });
    }

    setRoute(){
        this.app.use('/api/user/', UserRouter)
    }
}