import { Router } from "express";
import { GlobalMiddleWare } from "../middlewares/GlobalMiddleWare";
import { CityValidators } from "../validators/CityValidators";
import { CityController } from "../controllers/CityController";

class CityRouter {

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
     * /city/cities:
     *   get:
     *     tags: [City Module]
     *     summary: Get all available cities
     *     responses:
     *       200:
     *         description: Cities fetched successfully
     */
    this.router.get('/cities', CityController.getCities);
  }

  postRoutes() {
    /**
     * @swagger
     * /city/create:
     *   post:
     *     tags: [City Module]
     *     summary: Create a new city
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *                 description: Name of the city
     *               state:
     *                 type: string
     *                 description: State where the city belongs
     *     responses:
     *       200:
     *         description: City created successfully
     */
    this.router.post('/create',CityValidators.addCity(),GlobalMiddleWare.checkError,CityController.addCity
    );
  }

  patchRoutes() {
  }

  putRoutes() {
  }

  deleteRoutes() {
  }
}

export default new CityRouter().router;