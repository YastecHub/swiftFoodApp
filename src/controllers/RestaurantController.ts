import Category from "../models/Category";
import Restaurant from "../models/Restaurant";
import User from "../models/User";
import { Utils } from "../utils/utils";

export class RestaurantController{

    static async addRestaurant(req, res, next){
        const path = req.file.path;
        const restaurant = req.body;
        const verification_token = Utils.generateVerificationToken(6);

        try {
            // create restaurant user
            const hash = await Utils.encryptPassword(req.body.password);
            const data ={
                email: restaurant.email,
                verification_token,
                verification_token_time: Date.now() + new Utils().MAX_TOKEN_TIME,
                phone: restaurant.phone,
                password: hash,
                name: restaurant.name,
                type: 'restaurant',
                status: 'active'
            };
           const user = await new User(data).save();

           //create categories
           const categoriesData = JSON.parse(restaurant.categories).map(x => {
            return {name: x, user_id: user._id};
           })
           const categories = Category.insertMany(categoriesData);

           //create restaurant
           let restaurant_data: any = {
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
           if(restaurant.description) restaurant_data = {...restaurant_data, description: restaurant.description};
           const restaurantDoc = await new Restaurant(restaurant_data).save();
            res.send(restaurantDoc);
        } catch (e) {
            next(e);
        }
    }

    static async getNearbyRestaurants(req, res, next){
        const data = req.query
        //const METERS_PER_KM = 1000;
        const EARTH_RADIUS_IN_KM = 6378.1;
        try {
            const restaurants = await Restaurant.find
            (
                {
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
                                [ parseFloat(data.lng), parseFloat(data.lat) ],
                                parseFloat(data.radius) / EARTH_RADIUS_IN_KM
                           ]
                        }
                    }
                }
            );
            res.send(restaurants);
        } catch (e) {
            next(e);
        }
    }

    
    static async searchNearbyRestaurants(req, res, next){
        const data = req.query
        //const METERS_PER_KM = 1000;
        const EARTH_RADIUS_IN_KM = 6378.1;
        try {
            const restaurants = await Restaurant.find
            (
                {
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
                                [ parseFloat(data.lng), parseFloat(data.lat) ],
                                parseFloat(data.radius) / EARTH_RADIUS_IN_KM
                            ]
                        }
                    }
                }
            );
            res.send(restaurants);
        } catch (e) {
            next(e);
        }
    }
}