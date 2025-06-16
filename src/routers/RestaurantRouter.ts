import {Router} from "express"
import { GlobalMiddleWare } from "../middlewares/GlobalMiddleWare";
import { RestaurantController } from "../controllers/RestaurantController";
import { RestaurantValidators } from "../validators/RestaurantValidators";
import { Utils } from "../utils/utils";

class RestaurantRouter {
    
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
        this.router.get('/restaurants',GlobalMiddleWare.auth, RestaurantController.getRestaurants);
    }

    postRoutes(){
        this.router.post('/create',GlobalMiddleWare.auth, GlobalMiddleWare.adminRole, new Utils().multer.single('cover'), RestaurantValidators.addRestaurant(), GlobalMiddleWare.checkError, RestaurantController.addRestaurant);
    }

    patchRoutes(){
    }

    putRoutes(){

    }

    deleteRoutes(){

    }
}

export default new RestaurantRouter().router