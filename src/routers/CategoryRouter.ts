import { Router } from "express";
import { GlobalMiddleWare } from "../middlewares/GlobalMiddleWare";
import { CategoryController } from "../controllers/CategoryController";
import { CategoryValidators } from "../validators/CategoryValidators";
import { Utils } from "../utils/utils";

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
     * /category/getCategories:
     *   get:
     *     tags: [Category Module]
     *     summary: Get categories
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: Categories fetched successfully
     */
    this.router.get(
      '/getCategories',
      GlobalMiddleWare.auth,
      CategoryController.getCategoriesByRestaurant
    );
  }

  postRoutes() {
      /**
     * @swagger
     * /category/create:
     *   post:
     *     tags:
     *       - Category Module
     *     summary: Create a new category
     *     security:
     *       - bearerAuth: []
     *     requestBody:
     *       required: true
     *       content:
     *         multipart/form-data:
     *           schema:
     *             type: object
     *             properties:
     *               categoryImages:
     *                 type: string
     *                 format: binary
     *               name:
     *                 type: string
     *                 description: Name of the category
     *               status:
     *                 type: string
     *                 description: State where the category your food belongs
     *     responses:
     *       200:
     *         description: Category created successfully
     */
    this.router.post('/create', GlobalMiddleWare.auth, GlobalMiddleWare.adminRole, new Utils().multer.single('categoryImages'), CategoryValidators.addCategory(), GlobalMiddleWare.checkError, CategoryController.addCategory);
  }

  patchRoutes() {
  }

  putRoutes() {
  }

  deleteRoutes() {
  }
}

export default new CategoryRouter().router;