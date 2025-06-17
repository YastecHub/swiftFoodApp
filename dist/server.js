"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const environment_1 = require("./environments/environment");
const UserRouter_1 = require("./routers/UserRouter");
const cors = require("cors");
const BannerRouter_1 = require("./routers/BannerRouter");
const CityRouter_1 = require("./routers/CityRouter");
const RestaurantRouter_1 = require("./routers/RestaurantRouter");
class Server {
    constructor() {
        this.app = express();
        this.setConfigs();
        this.setRoute();
        this.handleErrors();
    }
    setConfigs() {
        this.connectMongoDb();
        this.allowCors();
        this.configureBodyParser();
    }
    connectMongoDb() {
        mongoose.connect((0, environment_1.getEnvironmentVariables)().db_uri)
            .then(() => {
            console.log('Connected to Mongo successfully');
        });
    }
    configureBodyParser() {
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
    }
    allowCors() {
        this.app.use(cors());
    }
    setRoute() {
        console.log("Mounting routes...");
        this.app.use('src/uploads/restaurants', express.static('src/uploads/restaurants'));
        this.app.use('/api/user/', UserRouter_1.default);
        this.app.use('/api/banner/', BannerRouter_1.default);
        this.app.use('/api/city/', CityRouter_1.default);
        this.app.use('/api/restaurant/', RestaurantRouter_1.default);
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
exports.Server = Server;
