"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityValidators = void 0;
const express_validator_1 = require("express-validator");
class CityValidators {
    static addCity() {
        return [
            (0, express_validator_1.body)('banner', 'Banner image is required').isString(),
            (0, express_validator_1.body)('lat', 'City Latitude is required').isNumeric(),
            (0, express_validator_1.body)('lng', 'City Longitude is required').isNumeric(),
            (0, express_validator_1.body)('status', 'City Status is required').isString()
        ];
    }
}
exports.CityValidators = CityValidators;
