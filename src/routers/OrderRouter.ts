import { Router } from "express";
import { GlobalMiddleWare } from "../middlewares/GlobalMiddleWare";
import { OrderValidators } from "../validators/OrderValidators";
import { OrderController } from "../controllers/OrderController";

class OrderRouter {

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
     * /order/userOrders:
     *   get:
     *     tags: [Order Module]
     *     summary: Get orders for logged-in user
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: List of user orders
     */
    this.router.get('/userOrders', GlobalMiddleWare.auth,  OrderController.getUserOrders
    );
  }

  postRoutes() {
    /**
     * @swagger
     * /order/create:
     *   post:
     *     tags: [Order Module]
     *     summary: Place a new order
     *     security:
     *       - bearerAuth: []
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               items:
     *                 type: array
     *                 items:
     *                   type: object
     *                   properties:
     *                     itemId:
     *                       type: string
     *                     quantity:
     *                       type: integer
     *               addressId:
     *                 type: string
     *     responses:
     *       200:
     *         description: Order placed successfully
     */
    this.router.post('/create', GlobalMiddleWare.auth, OrderValidators.placeOrder(), GlobalMiddleWare.checkError, OrderController.placeOrder
    );
  }

  patchRoutes() {
  }

  putRoutes() {
  }

  deleteRoutes() {
  }
}

export default new OrderRouter().router;