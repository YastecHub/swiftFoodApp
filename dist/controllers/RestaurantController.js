"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantController = void 0;
const Category_1 = require("../models/Category");
const Restaurant_1 = require("../models/Restaurant");
const User_1 = require("../models/User");
const utils_1 = require("../utils/utils");
class RestaurantController {
    static addRestaurant(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = req.file.path;
            const restaurant = req.body;
            const verification_token = utils_1.Utils.generateVerificationToken(6);
            try {
                // create restaurant user
                const hash = yield utils_1.Utils.encryptPassword(req.body.password);
                const data = {
                    email: restaurant.email,
                    verification_token,
                    verification_token_time: Date.now() + new utils_1.Utils().MAX_TOKEN_TIME,
                    phone: restaurant.phone,
                    password: hash,
                    name: restaurant.name,
                    type: 'restaurant',
                    status: 'active'
                };
                const user = yield new User_1.default(data).save();
                //create categories
                const categoriesData = JSON.parse(restaurant.categories).map(x => {
                    return { name: x, user_id: user._id };
                });
                const categories = Category_1.default.insertMany(categoriesData);
                //create restaurant
                let restaurant_data = {
                    name: restaurant.res_name,
                    short_name: restaurant.short_name,
                    location: JSON.parse(restaurant.location),
                    address: restaurant.address,
                    openTime: restaurant.openTime,
                    closeTime: restaurant.closeTime,
                    status: restaurant.status,
                    cuisine: JSON.parse(restaurant.cuisine),
                    price: parseInt(restaurant.price),
                    delivery_time: parseInt(restaurant.delivery_time),
                    city_id: restaurant.city_id,
                    user_id: user._id,
                    cover: path
                };
                if (restaurant.description)
                    restaurant_data = Object.assign(Object.assign({}, restaurant_data), { description: restaurant.description });
                const restaurantDoc = yield new Restaurant_1.default(restaurant_data).save();
                res.send(restaurantDoc);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static getNearbyRestaurants(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.query;
            //const METERS_PER_KM = 1000;
            const EARTH_RADIUS_IN_KM = 6378.1;
            try {
                const restaurants = yield Restaurant_1.default.find({
                    status: 'active',
                    location: {
                        // $nearSphere: {
                        //     $geometry:
                        //     {
                        //         type: "Point",
                        //         coordinates: [ parseFloat(data.lng), parseFloat(data.lat) ]
                        //     },
                        //     $maxDistance: parseFloat(data.radius) * METERS_PER_KM
                        // }
                        $geoWithin: {
                            $centerSphere: [
                                [parseFloat(data.lng), parseFloat(data.lat)],
                                parseFloat(data.radius) / EARTH_RADIUS_IN_KM
                            ]
                        }
                    }
                });
                res.send(restaurants);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static searchNearbyRestaurants(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.query;
            //const METERS_PER_KM = 1000;
            const EARTH_RADIUS_IN_KM = 6378.1;
            try {
                const restaurants = yield Restaurant_1.default.find({
                    status: 'active',
                    name: { $regex: data.name, $options: 'i' },
                    location: {
                        // $nearSphere: {
                        //     $geometry:
                        //     {
                        //         type: "Point",
                        //         coordinates: [ parseFloat(data.lng), parseFloat(data.lat) ]
                        //     },
                        //     $maxDistance: parseFloat(data.radius) * METERS_PER_KM
                        // }
                        $geoWithin: {
                            $centerSphere: [
                                [parseFloat(data.lng), parseFloat(data.lat)],
                                parseFloat(data.radius) / EARTH_RADIUS_IN_KM
                            ]
                        }
                    }
                });
                res.send(restaurants);
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.RestaurantController = RestaurantController;
