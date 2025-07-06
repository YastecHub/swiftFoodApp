"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const mongoose = __importStar(require("mongoose"));
const bodyParser = __importStar(require("body-parser"));
const environment_1 = require("./environments/environment");
const UserRouter_1 = __importDefault(require("./routers/UserRouter"));
const cors_1 = __importDefault(require("cors"));
const BannerRouter_1 = __importDefault(require("./routers/BannerRouter"));
const CityRouter_1 = __importDefault(require("./routers/CityRouter"));
const RestaurantRouter_1 = __importDefault(require("./routers/RestaurantRouter"));
const CategoryRouter_1 = __importDefault(require("./routers/CategoryRouter"));
const ItemRouter_1 = __importDefault(require("./routers/ItemRouter"));
const AddressRouter_1 = __importDefault(require("./routers/AddressRouter"));
const OrderRouter_1 = __importDefault(require("./routers/OrderRouter"));
const utils_1 = require("./utils/utils");
const Redis_1 = require("./utils/Redis");
const swagger_1 = require("./swagger");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.setConfigs();
        this.setRoute();
        this.error404Handler();
        this.handleErrors();
    }
    setConfigs() {
        this.dotenvConfigs();
        this.connectMongoDb();
        this.connectRedis();
        this.allowCors();
        this.configureBodyParser();
        (0, swagger_1.setupSwagger)(this.app);
    }
    dotenvConfigs() {
        utils_1.Utils.dotenvConfigs();
    }
    connectMongoDb() {
        mongoose.connect((0, environment_1.getEnvironmentVariables)().db_uri)
            .then(() => {
            console.log('Connected to Mongo successfully');
        });
    }
    connectRedis() {
        Redis_1.Redis.connectToRedis();
    }
    configureBodyParser() {
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(bodyParser.json());
    }
    allowCors() {
        this.app.use((0, cors_1.default)());
    }
    setRoute() {
        this.app.use('src/uploads', express_1.default.static('src/uploads'));
        this.app.use('/api/user/', UserRouter_1.default);
        this.app.use('/api/banner/', BannerRouter_1.default);
        this.app.use('/api/city/', CityRouter_1.default);
        this.app.use('/api/restaurant/', RestaurantRouter_1.default);
        this.app.use('/api/category/', CategoryRouter_1.default);
        this.app.use('/api/item/', ItemRouter_1.default);
        this.app.use('/api/address/', AddressRouter_1.default);
        this.app.use('/api/order/', OrderRouter_1.default);
    }
    error404Handler() {
        this.app.use((req, res) => {
            res.status(404).json({
                message: 'Not found',
                status_code: 404
            });
        });
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
