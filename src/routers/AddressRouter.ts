import { Router } from "express";
import { GlobalMiddleWare } from "../middlewares/GlobalMiddleWare";
import { AddressController } from "../controllers/AddressController";
import { AddressValidators } from "../validators/AddressValidators";

class AddressRouter {
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
     * /address/userAddresses:
     *   get:
     *     tags: [Address Module]
     *     summary: Get all user addresses
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: List of addresses
     */
    this.router.get('/userAddresses', GlobalMiddleWare.auth, AddressController.getUserAddresses);

    /**
     * @swagger
     * /address/checkAddress:
     *   get:
     *     tags: [Address Module]
     *     summary: Check address validity
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: Address valid
     */
    this.router.get('/checkAddress', GlobalMiddleWare.auth, AddressValidators.checkAddress(), GlobalMiddleWare.checkError, AddressController.checkAddress);

    /**
     * @swagger
     * /address/getUserLimitedAddresses:
     *   get:
     *     tags: [Address Module]
     *     summary: Get limited user addresses
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: Limited addresses returned
     */
    this.router.get('/getUserLimitedAddresses', GlobalMiddleWare.auth, AddressValidators.getUserLimitedAddresses(), GlobalMiddleWare.checkError, AddressController.getUserLimitedAddresses);

    /**
     * @swagger
     * /address/{id}:
     *   get:
     *     tags: [Address Module]
     *     summary: Get address by ID
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Address found
     */
    this.router.get('/:id', GlobalMiddleWare.auth, AddressController.getAddressById);
  }

  postRoutes() {
    /**
     * @swagger
     * /address/create:
     *   post:
     *     tags: [Address Module]
     *     summary: Create new address
     *     security:
     *       - bearerAuth: []
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               street: { type: string }
     *               city: { type: string }
     *               state: { type: string }
     *               zip: { type: string }
     *               country: { type: string }
     *     responses:
     *       200:
     *         description: Address created
     */
    this.router.post('/create', GlobalMiddleWare.auth, AddressValidators.addAddress(), GlobalMiddleWare.checkError, AddressController.addAddress);
  }

  patchRoutes() {
    // If you have PATCH later, same pattern applies.
  }

  putRoutes() {
    /**
     * @swagger
     * /address/edit/{id}:
     *   put:
     *     tags: [Address Module]
     *     summary: Edit address by ID
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               street: { type: string }
     *               city: { type: string }
     *               state: { type: string }
     *               zip: { type: string }
     *               country: { type: string }
     *     responses:
     *       200:
     *         description: Address updated
     */
    this.router.put('/edit/:id', GlobalMiddleWare.auth, AddressValidators.editAddress(), GlobalMiddleWare.checkError, AddressController.editAddress);
  }

  deleteRoutes() {
    /**
     * @swagger
     * /address/delete/{id}:
     *   delete:
     *     tags: [Address Module]
     *     summary: Delete address by ID
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Address deleted
     */
    this.router.delete('/delete/:id', GlobalMiddleWare.auth, AddressController.deleteAddress);
  }
}

export default new AddressRouter().router;
