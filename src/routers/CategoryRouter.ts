import { Router } from "express";
import { GlobalMiddleWare } from "../middlewares/GlobalMiddleWare";
import { CategoryController } from "../controllers/CategoryController";

class CategoryRouter {

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
     * /category/getCategories/{restaurantId}:
     *   get:
     *     tags: [Category Module]
     *     summary: Get categories by restaurant ID
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: restaurantId
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the restaurant
     *     responses:
     *       200:
     *         description: Categories fetched successfully
     */
    this.router.get(
      '/getCategories/:restaurantId',
      GlobalMiddleWare.auth,
      CategoryController.getCategoriesByRestaurant
    );
  }

  postRoutes() {
  }

  patchRoutes() {
  }

  putRoutes() {
  }

  deleteRoutes() {
  }
}

export default new CategoryRouter().router;