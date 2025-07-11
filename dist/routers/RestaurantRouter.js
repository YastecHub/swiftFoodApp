"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const RestaurantController_1 = require("../controllers/RestaurantController");
const RestaurantValidators_1 = require("../validators/RestaurantValidators");
const utils_1 = require("../utils/utils");
class RestaurantRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/getRestaurants', GlobalMiddleWare_1.GlobalMiddleWare.auth, GlobalMiddleWare_1.GlobalMiddleWare.adminRole, RestaurantController_1.RestaurantController.getRestaurants);
        this.router.get('/nearbyRestaurants', GlobalMiddleWare_1.GlobalMiddleWare.auth, RestaurantValidators_1.RestaurantValidators.getNearbyRestaurants(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, RestaurantController_1.RestaurantController.getNearbyRestaurants);
        this.router.get('/searchNearbyRestaurants', GlobalMiddleWare_1.GlobalMiddleWare.auth, RestaurantValidators_1.RestaurantValidators.searchNearbyRestaurants(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, RestaurantController_1.RestaurantController.searchNearbyRestaurants);
    }
    postRoutes() {
        this.router.post('/create', GlobalMiddleWare_1.GlobalMiddleWare.auth, GlobalMiddleWare_1.GlobalMiddleWare.adminRole, new utils_1.Utils().multer.single('restaurantImages'), RestaurantValidators_1.RestaurantValidators.addRestaurant(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, RestaurantController_1.RestaurantController.addRestaurant);
    }
    patchRoutes() {
    }
    putRoutes() {
    }
    deleteRoutes() {
    }
}
exports.default = new RestaurantRouter().router;
