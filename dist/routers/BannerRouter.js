"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const BannerValidators_1 = require("../validators/BannerValidators");
const BannerController_1 = require("../controllers/BannerController");
const utils_1 = require("../utils/utils");
class BannerRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/banners', GlobalMiddleWare_1.GlobalMiddleWare.auth, BannerController_1.BannerController.getBanners);
    }
    postRoutes() {
        this.router.post('/create', GlobalMiddleWare_1.GlobalMiddleWare.auth, GlobalMiddleWare_1.GlobalMiddleWare.adminRole, new utils_1.Utils().multer.single('bannerImages'), BannerValidators_1.BannerValidators.addBanner(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, BannerController_1.BannerController.addBanner);
    }
    patchRoutes() {
    }
    putRoutes() {
    }
    deleteRoutes() {
    }
}
exports.default = new BannerRouter().router;
