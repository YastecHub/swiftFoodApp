"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidators = void 0;
const express_validator_1 = require("express-validator");
const User_1 = __importDefault(require("../models/User"));
class UserValidators {
    static signup() {
        return [
            (0, express_validator_1.body)('email', 'Email is required').isEmail()
                .custom((email, { req }) => {
                return User_1.default.findOne({
                    email: email,
                    //type: 'user'
                }).then(user => {
                    if (user) {
                        throw ('User Already Exists');
                    }
                    else {
                        return true;
                    }
                }).catch(e => {
                    throw new Error(e);
                });
            }),
            (0, express_validator_1.body)('phone', 'Phone Number is required').isString(),
            (0, express_validator_1.body)('password', 'Password is required').isAlphanumeric()
                .isLength({ min: 8, max: 20 })
                .withMessage('Password must be between 8-20 characters'),
            (0, express_validator_1.body)('name', 'Name is required').isString(),
            (0, express_validator_1.body)('type', 'User role type is required').isString(),
            (0, express_validator_1.body)('status', 'User status is required').isString(),
        ];
    }
    static verifyUserEmailToken() {
        return [
            (0, express_validator_1.body)('verification_token', 'Email verification token is required').isNumeric(),
        ];
    }
    static login() {
        return [
            (0, express_validator_1.query)('email', 'Email is required').isEmail()
                .custom((email, { req }) => {
                return User_1.default.findOne({
                    email: email,
                }).then(user => {
                    if (user) {
                        if (user.type == 'user' || user.type == 'admin') {
                            req.user = user;
                            return true;
                        }
                        else {
                            throw ('You are not an Authorized User');
                        }
                    }
                    else {
                        throw ('No User Registered with such email, Please Register');
                    }
                }).catch(e => {
                    throw new Error(e);
                });
            }),
            (0, express_validator_1.query)('password', 'Password is required').isAlphanumeric()
        ];
    }
    static checkResetPasswordEmail() {
        return [
            (0, express_validator_1.query)('email', 'Email is required').isEmail()
                .custom((email, { req }) => {
                return User_1.default.findOne({
                    email: email
                }).then(user => {
                    if (user) {
                        return true;
                    }
                    else {
                        throw ('No User Registered with such email, Please Register');
                    }
                }).catch(e => {
                    throw new Error(e);
                });
            })
        ];
    }
    static verifyResetPasswordToken() {
        return [
            (0, express_validator_1.query)('email', 'Email is required').isEmail(),
            (0, express_validator_1.query)('reset_password_token', 'Reset password token is required').isNumeric()
                .custom((reset_password_token, { req }) => {
                return User_1.default.findOne({
                    email: req.query.email,
                    reset_password_token: reset_password_token,
                    reset_password_token_time: { $gt: Date.now() }
                }).then(user => {
                    if (user) {
                        return true;
                    }
                    else {
                        throw ('Reset password token doesn\'t exist. Please regenerate a new token.');
                    }
                }).catch(e => {
                    throw new Error(e);
                });
            })
        ];
    }
    static resetPassword() {
        return [
            (0, express_validator_1.body)('email', 'Email is required').isEmail()
                .custom((email, { req }) => {
                return User_1.default.findOne({
                    email: email,
                }).then(user => {
                    if (user) {
                        req.user = user;
                        return true;
                    }
                    else {
                        throw ('No User with such email');
                    }
                }).catch(e => {
                    throw new Error(e);
                });
            }),
            (0, express_validator_1.body)('new_password', 'New password is required').isAlphanumeric(),
            (0, express_validator_1.body)('otp', 'Reset password token is required.').isNumeric()
                .custom((reset_password_token, { req }) => {
                if (req.user.reset_password_token == reset_password_token) {
                    return true;
                }
                else {
                    req.errorStatus = 422;
                    throw ('Reset password token is invalid, please try again');
                }
            })
        ];
    }
    static verifyPhoneNumber() {
        return [
            (0, express_validator_1.body)('phone', 'PhoneNumber is required').isNumeric()
        ];
    }
    static verifyUserProfile() {
        return [
            (0, express_validator_1.body)('phone', 'PhoneNumber is required').isNumeric(),
            (0, express_validator_1.body)('email', 'Email is required').isEmail()
                .custom((email, { req }) => {
                return User_1.default.findOne({
                    email: email,
                }).then(user => {
                    if (user) {
                        throw ('User with email already exist, Please provide a unique email Id');
                    }
                    else {
                        return true;
                    }
                }).catch(e => {
                    throw new Error(e);
                });
            }),
            (0, express_validator_1.body)('password', 'Password is required').isAlphanumeric(),
        ];
    }
    ;
    // static checkRefreshToken() {
    //     return [
    //         body('refreshToken', 'Refresh token is required').isString()
    //             .custom((refreshToken, {req}) => {
    //                 if (refreshToken) {
    //                     return true;
    //                 } else {
    //                     req.errorStatus = 403;
    //                     throw('Acceess is forbidden, Please login again');
    //                 }
    //             })
    //     ];
    // }
    static userProfilePic() {
        return [
            (0, express_validator_1.body)('profileImages', 'Profile image is required')
                .custom((profileImage, { req }) => {
                if (req.file) {
                    return true;
                }
                else {
                    throw ('File not uploaded');
                }
            })
        ];
    }
}
exports.UserValidators = UserValidators;
