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

           //create restaurant
           let restaurant_data: any = {
                name: restaurant.res_name,
                //short_name: restaurant.short_name,
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

          //create categories
           const categoriesData = JSON.parse(restaurant.categories).map(x => {
            return {name: x, restaurant_id: restaurantDoc._id};
           })
           const categories = Category.insertMany(categoriesData);

            res.send(restaurantDoc);
        } catch (e) {
            next(e);
        }
    }

    static async getNearbyRestaurants(req, res, next){ 
        //const METERS_PER_KM = 1000;
        const data = req.query
        const EARTH_RADIUS_IN_KM = 6378.1;
        const perPage = 10;
        const currentPage = parseInt(data.page) || 1;
        const prevPage = currentPage == 1 ? null : currentPage - 1;
        let nextPage = currentPage + 1;
        try {
            const restaurants_doc_count = await Restaurant.countDocuments(
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
                                parseFloat(data.radius) /  EARTH_RADIUS_IN_KM
                            ]
                        }
                    }
                }
            );
            //send empty array if no restaurants found
            if(!restaurants_doc_count) {
                return res.json({
                    restaurants: [],
                    perPage,
                    currentPage,
                    prevPage,
                    nextPage: null,
                    totalPages: 0
                });
            }
            const totalPages = Math.ceil(restaurants_doc_count / perPage);
            if(totalPages == 0 || totalPages == currentPage) {
                nextPage = null;
            } 
            if(totalPages < currentPage) {
                throw('No more Restaurants available');
            }
            const restaurants = await Restaurant.find(
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
                                parseFloat(data.radius) /  EARTH_RADIUS_IN_KM
                            ]
                        }
                    }
                }
            )
            .skip((currentPage * perPage) - perPage)
            .limit(perPage);

            res.json({
                restaurants,
                perPage,
                currentPage,
                prevPage,
                nextPage,
                totalPages,
                // totalRecords: restaurants_doc_count
            });
        } catch(e) {
            next(e);
        }
    }

    
    static async searchNearbyRestaurants(req, res, next){
        //const METERS_PER_KM = 1000;
        const data = req.query;    
        const EARTH_RADIUS_IN_KM = 6378.1;
        const perPage = 5;
        const currentPage = parseInt(data.page) || 1;
        const prevPage = currentPage == 1 ? null : currentPage - 1;
        let nextPage = currentPage + 1;
         try {
            const restaurants_doc_count = await Restaurant.countDocuments(
                {
                    status: 'active',
                    name: { $regex: data.name, $options: 'i'},
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
                                parseFloat(data.radius) /  EARTH_RADIUS_IN_KM
                            ]
                        }
                    }
                }
            );
            //send empty array if no restaurants found
            if(!restaurants_doc_count) {
                return res.json({
                    restaurants: [],
                    perPage,
                    currentPage,
                    prevPage,
                    nextPage: null,
                    totalPages: 0
                });
            }
            const totalPages = Math.ceil(restaurants_doc_count / perPage);
            if(totalPages == 0 || totalPages == currentPage) {
                nextPage = null;
            } 
            if(totalPages < currentPage) {
                throw('No more Restaurants available');
            }
            const restaurants = await Restaurant.find(
                {
                    status: 'active',
                    name: { $regex: data.name, $options: 'i'},
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
                                parseFloat(data.radius) /  EARTH_RADIUS_IN_KM
                            ]
                        }
                    }
                }
            )
            .skip((currentPage * perPage) - perPage)
            .limit(perPage);
            res.json({
                restaurants,
                perPage,
                currentPage,
                prevPage,
                nextPage,
                totalPages
            });
        } catch(e) {
            next(e);
        }
    }


    static async getRestaurants(req, res, next){
        try {
            const restaurants = await Restaurant.find
            (
                {
                    status: 'active'
                }
            );
            res.send(restaurants);
        } catch (e) {
            next(e);
        }
    }
}