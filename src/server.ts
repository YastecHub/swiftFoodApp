import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import { getEnvironmentVariables } from './environments/environment';
import UserRouter from './routers/UserRouter';
import * as cors from 'cors';
import BannerRouter from './routers/BannerRouter';
import CityRouter from './routers/CityRouter';
import RestaurantRouter from './routers/RestaurantRouter';
import CategoryRouter from './routers/CategoryRouter';
import ItemRouter from './routers/ItemRouter';
import AddressRouter from './routers/AddressRouter';
import OrderRouter from './routers/OrderRouter';

export class Server{

   public app : express.Application = express();

    constructor(){
        this.setConfigs();
        this.setRoute();
        this.handleErrors();
    }

    setConfigs(){
        this.connectMongoDb();
        this.allowCors();
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

    allowCors(){
        this.app.use(cors());
    }

    setRoute(){
        this.app.use('src/uploads/restaurants', express.static('src/uploads/restaurants'));
        this.app.use('/api/user/', UserRouter);
        this.app.use('/api/banner/', BannerRouter);
        this.app.use('/api/city/', CityRouter);
        this.app.use('/api/restaurant/', RestaurantRouter);
        this.app.use('/api/category/', CategoryRouter);
        this.app.use('/api/item/', ItemRouter);
        this.app.use('/api/address/', AddressRouter);
        this.app.use('/api/order/', OrderRouter);
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