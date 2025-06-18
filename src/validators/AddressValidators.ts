import { body, query } from "express-validator";


export class AddressValidators{

    static addAddress(){
        return[
            body('title', 'Title is required').isString(),
            body('landmark', 'LandMark is required').isString(),
            body('address', 'Address is required').isString(),
            body('house', 'House Number is required').isNumeric(),
            body('lat', 'Latittude is required').isNumeric(),
            body('lng', 'Longitude is required').isNumeric()
        ];
    }

    static editAddress(){
        return[
            body('title', 'Title is required').isString(),
            body('landmark', 'LandMark is required').isString(),
            body('address', 'Address is required').isString(),
            body('house', 'House Number is required').isNumeric(),
            body('lat', 'Latittude is required').isNumeric(),
            body('lng', 'Longitude is required').isNumeric()
        ];
    }

    static checkAddress(){
        return[
            query('lat', 'Latittude is required').isNumeric(),
            query('lng', 'Longitude is required').isNumeric()
        ]
    }

    static getLimitedAddresses(){
        return[
            query('limit', 'Address limit is required').isNumeric(),
        ]
    }
}