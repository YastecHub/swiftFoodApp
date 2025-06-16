import { body } from "express-validator";
import User from "../models/User";

export class RestaurantValidators{

    static addRestaurant(){
        return[
            body('name', 'Name is required').isString(),
            body('email', 'Email is required').isEmail()
            .custom((email, {req}) => {
                return User.findOne({
                    email: email
                }).then(user => {
                    if (user) {
                        throw('User Already Exists');
                    }else{
                        return true;
                    }
                }).catch(e => {
                    throw new Error(e);
                })
            }),
            body('phone', 'Phone Number is required').isString(),
            body('password', 'Password is required').isAlphanumeric()
            .isLength({ min: 8, max: 20 })
            .withMessage('Password must be between 8-20 characters'),

            body('restaurantImages', 'Cover image is required')
            .custom((cover, {req}) => {
                if (req.file) {
                    return true;
                } else{
                    throw('File not Uploaded nah')
                }
            }),
            body('res_name', 'Restaurant name is required').isString(),
            body('short_name', 'Restaurant short name is required').isString(),
            body('openTime', 'Open Time is required').isString(),
            body('closeTime', 'Close Time is required').isString(),
            body('price', 'Price short name is required').isString(),
            body('delivery_time', 'Delivery time is required').isString(),
            body('status', 'Status is required').isString(),
            body('address', 'Address is required').isString(),
            body('location', 'location is required').isString(),
            body('cuisine', 'Cuisine is required').isString(),
            body('city_id', 'City Id is required').isString(),
        ];
    }
}