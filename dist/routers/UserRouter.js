"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const UserValidators_1 = require("../validators/UserValidators");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
class UserRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/send/verification/email', GlobalMiddleWare_1.GlobalMiddleWare.auth, UserController_1.UserController.resendVerificationEmail);
        this.router.get('/login', UserValidators_1.UserValidators.login(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, UserController_1.UserController.login);
        this.router.get('/send/reset/password/token', UserValidators_1.UserValidators.checkResetPasswordEmail(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, UserController_1.UserController.sendResetPasswordOtp);
        this.router.get('/verify/resetPasswordToken', UserValidators_1.UserValidators.verifyResetPasswordToken(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, UserController_1.UserController.verifyResetPasswordToken);
        this.router.get('/profile', GlobalMiddleWare_1.GlobalMiddleWare.auth, UserController_1.UserController.profile);
    }
    postRoutes() {
        this.router.post('/signup', UserValidators_1.UserValidators.signup(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, UserController_1.UserController.signup);
    }
    patchRoutes() {
        this.router.patch('/reset/password', UserValidators_1.UserValidators.resetPassword(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, UserController_1.UserController.resetPassword);
        this.router.patch('/verify/emailToken', GlobalMiddleWare_1.GlobalMiddleWare.auth, UserValidators_1.UserValidators.verifyUserEmailToken(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, UserController_1.UserController.verifyUserEmailToken);
        this.router.patch('/update/phoneNumber', GlobalMiddleWare_1.GlobalMiddleWare.auth, UserValidators_1.UserValidators.verifyPhoneNumber(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, UserController_1.UserController.updatePhoneNumber);
        this.router.patch('/update/profile', GlobalMiddleWare_1.GlobalMiddleWare.auth, UserValidators_1.UserValidators.verifyUserProfile(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, UserController_1.UserController.updateUserProfile);
    }
    putRoutes() { }
    deleteRoutes() { }
}
exports.default = new UserRouter().router;
