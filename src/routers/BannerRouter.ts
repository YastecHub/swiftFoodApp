import {Router} from "express"
import { GlobalMiddleWare } from "../middlewares/GlobalMiddleWare";
import { BannerValidators } from "../validators/BannerValidators";
import { BannerController } from "../controllers/BannerController";
import { Utils } from "../utils/utils";

class BannerRouter {
    
    public router: Router;

    constructor() {
       this.router = Router();
       this.getRoutes();
       this.postRoutes();
       this.patchRoutes();
       this.putRoutes();
       this.deleteRoutes();
    }

    getRoutes(){
        this.router.get('/banners', GlobalMiddleWare.auth , BannerController.getBanners);
    }

    postRoutes(){
        this.router.post('/create', GlobalMiddleWare.auth, GlobalMiddleWare.adminRole, new Utils().multer.single('banner'), BannerValidators.addBanner(), GlobalMiddleWare.checkError, BannerController.addBanner);
    }

    patchRoutes(){
    }

    putRoutes(){

    }

    deleteRoutes(){

    }
}

export default new BannerRouter().router