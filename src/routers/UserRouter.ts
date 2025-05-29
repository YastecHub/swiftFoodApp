import {Router} from "express"
import { UserController } from "../controllers/UserController";

class UserRouter {
    
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
        this.router.post('/login', UserController.login);

        this.router.get('/test', UserController.test, UserController.test2);
    }

    postRoutes(){}

    patchRoutes(){}

    putRoutes(){}

    deleteRoutes(){}
}

export default new UserRouter().router