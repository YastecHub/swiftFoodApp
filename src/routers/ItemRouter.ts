import { Router } from "express";
import { GlobalMiddleWare } from "../middlewares/GlobalMiddleWare";
import { ItemController } from "../controllers/ItemController";
import { ItemValidators } from "../validators/ItemValidators";
import { Utils } from "../utils/utils";

class ItemRouter {

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
     * /item/menuItems/{restaurantId}:
     *   get:
     *     tags: [Item Module]
     *     summary: Get menu items for a restaurant
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
     *         description: Menu items fetched successfully
     */
    this.router.get('/menuItems/:restaurantId',GlobalMiddleWare.auth,ItemValidators.getMenuItems(),GlobalMiddleWare.checkError,ItemController.getMenu);
  }

  postRoutes() {
    /**
     * @swagger
     * /item/create:
     *   post:
     *     tags: [Item Module]
     *     summary: Create a new menu item
     *     security:
     *       - bearerAuth: []
     *     requestBody:
     *       required: true
     *       content:
     *         multipart/form-data:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *                 description: Name of the item
     *               price:
     *                 type: number
     *                 description: Price of the item
     *               itemImages:
     *                 type: string
     *                 format: binary
     *                 description: Item image file
     *     responses:
     *       200:
     *         description: Item created successfully
     */
    this.router.post('/create',GlobalMiddleWare.auth,GlobalMiddleWare.adminRole,new Utils().multer.single('itemImages'),ItemValidators.addItem(),GlobalMiddleWare.checkError,ItemController.addItem);
  }

  patchRoutes() {
  }

  putRoutes() {
  }

  deleteRoutes() {
  }
}

export default new ItemRouter().router;