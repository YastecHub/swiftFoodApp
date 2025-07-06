import { Router } from "express";
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

  getRoutes() {
    /**
     * @swagger
     * /banner/banners:
     *   get:
     *     tags: [Banner Module]
     *     summary: Get all banners
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: Banners fetched successfully
     */
    this.router.get('/banners', GlobalMiddleWare.auth, BannerController.getBanners);
  }

  postRoutes() {
    /**
     * @swagger
     * /banner/createBanner:
     *   post:
     *     tags: [Banner Module]
     *     summary: Create a new banner
     *     security:
     *       - bearerAuth: []
     *     requestBody:
     *       required: true
     *       content:
     *         multipart/form-data:
     *           schema:
     *             type: object
     *             properties:
     *               bannerImages:
     *                 type: string
     *                 format: binary
     *               title:
     *                 type: string
     *               description:
     *                 type: string
     *     responses:
     *       200:
     *         description: Banner created successfully
     */
    this.router.post('/createBanner',GlobalMiddleWare.auth,GlobalMiddleWare.adminRole,new Utils().multer.single('bannerImages'),BannerValidators.addBanner(),GlobalMiddleWare.checkError,BannerController.addBanner);
  }

  patchRoutes() {
  }

  putRoutes() {
  }

  deleteRoutes() {
  }
}

export default new BannerRouter().router;
