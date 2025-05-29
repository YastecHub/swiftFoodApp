import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import { getEnvironmentVariables } from './environments/environment';
import UserRouter from './routers/UserRouter';

export class Server{

   public app : express.Application = express();

    constructor(){
        this.setConfigs();
        this.setRoute();
        this.handleErrors();
    }

    setConfigs(){
        this.connectMongoDb();
        this.configureBodyParser();
    }

    connectMongoDb(){
        mongoose.connect(getEnvironmentVariables().db_uri)
        .then(() => {
        console.log('Connected to Mongo successfully');
        });
    }

    configureBodyParser(){
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
    }

    setRoute(){
        this.app.use('/api/user/', UserRouter)
    }

    handleErrors() {
    this.app.use((error, req, res, next) => {
        const errorStatus = req.errorStatus || 500;
        res.status(errorStatus).json({
            message: error.message || 'Something went wrong, Please try again',
            status_code: errorStatus
        });
    });
    }
}