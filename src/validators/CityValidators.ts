import { body } from "express-validator";

export class CityValidators{

    static addCity(){
        return[
            body('banner', 'Banner image is required').isString(),
            body('lat', 'City Latitude is required').isNumeric(),
            body('lng', 'City Longitude is required').isNumeric(),
            body('status', 'City Status is required').isString()
        ];
    }
}