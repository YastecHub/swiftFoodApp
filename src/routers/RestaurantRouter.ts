import { Router } from "express";
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

  getRoutes() {
    /**
     * @swagger
     * /restaurant/getRestaurants:
     *   get:
     *     tags: [Restaurant Module]
     *     summary: Get list of all restaurants (admin only)
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: List of restaurants
     */
    this.router.get('/getRestaurants', GlobalMiddleWare.auth, GlobalMiddleWare.adminRole, RestaurantController.getRestaurants
    );

    /**
     * @swagger
     * /restaurant/nearbyRestaurants:
     *   get:
     *     tags: [Restaurant Module]
     *     summary: Find nearby restaurants for user
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: query
     *         name: lat
     *         schema:
     *           type: number
     *         required: true
     *         description: Latitude
     *       - in: query
     *         name: lng
     *         schema:
     *           type: number
     *         required: true
     *         description: Longitude
     *     responses:
     *       200:
     *         description: List of nearby restaurants
     */
    this.router.get('/nearbyRestaurants', GlobalMiddleWare.auth, RestaurantValidators.getNearbyRestaurants(), GlobalMiddleWare.checkError, RestaurantController.getNearbyRestaurants
    );

    /**
     * @swagger
     * /restaurant/searchNearbyRestaurants:
     *   get:
     *     tags: [Restaurant Module]
     *     summary: Search nearby restaurants by keyword
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: query
     *         name: lat
     *         schema:
     *           type: number
     *         required: true
     *       - in: query
     *         name: lng
     *         schema:
     *           type: number
     *         required: true
     *       - in: query
     *         name: keyword
     *         schema:
     *           type: string
     *         required: true
     *     responses:
     *       200:
     *         description: List of restaurants matching keyword nearby
     */
    this.router.get('/searchNearbyRestaurants', GlobalMiddleWare.auth, RestaurantValidators.searchNearbyRestaurants(), GlobalMiddleWare.checkError, RestaurantController.searchNearbyRestaurants
    );
  }

  postRoutes() {
    /**
     * @swagger
     * /restaurant/create:
     *   post:
     *     tags: [Restaurant Module]
     *     summary: Create a new restaurant (admin only)
     *     security:
     *       - bearerAuth: []
     *     requestBody:
     *       required: true
     *       content:
     *         multipart/form-data:
     *           schema:
     *             type: object
     *             properties:
     *               restaurantImages:
     *                 type: string
     *                 format: binary
     *               name:
     *                 type: string
     *               address:
     *                 type: string
     *               phone:
     *                 type: string
     *               email:
     *                 type: string
     *     responses:
     *       200:
     *         description: Restaurant created successfully
     */
    this.router.post('/create', GlobalMiddleWare.auth, GlobalMiddleWare.adminRole, new Utils().multer.single('restaurantImages'), RestaurantValidators.addRestaurant(), GlobalMiddleWare.checkError, RestaurantController.addRestaurant
    );
  }

  patchRoutes() {
  }

  putRoutes() {
  }

  deleteRoutes() {
  }
}

export default new RestaurantRouter().router;