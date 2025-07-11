import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserValidators } from "../validators/UserValidators";
import { GlobalMiddleWare } from "../middlewares/GlobalMiddleWare";
import { Utils } from "../utils/utils";

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

  getRoutes() {
    /**
     * @swagger
     * /user/otpLogin:
     *   get:
     *     tags: [User Module]
     *     summary: Login user via OTP
     *     parameters:
     *       - in: query
     *         name: phone
     *         required: true
     *         schema:
     *           type: string
     *       - in: query
     *         name: otp
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: User logged in
     */
    this.router.get('/otpLogin', UserValidators.otpLogin(), GlobalMiddleWare.checkError, UserController.otpLogin);

    /**
     * @swagger
     * /user/registerUserViaPhone:
     *   get:
     *     tags: [User Module]
     *     summary: Register via phone
     *     parameters:
     *       - in: query
     *         name: phone
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Registered
     */
    this.router.get('/registerUserViaPhone', UserValidators.registerUserViaPhone(), GlobalMiddleWare.checkError, UserController.registerUserViaPhone);

    /**
     * @swagger
     * /user/send/verification/email:
     *   get:
     *     tags: [User Module]
     *     summary: Resend verification email
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: Email resent
     */
    this.router.get('/send/verification/email', GlobalMiddleWare.auth, UserController.resendVerificationEmail);

    /**
     * @swagger
     * /user/login:
     *   get:
     *     tags: [User Module]
     *     summary: Login with email & password
     *     parameters:
     *       - in: query
     *         name: email
     *         required: true
     *         schema:
     *           type: string
     *       - in: query
     *         name: password
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: User logged in
     */
    this.router.get('/login', UserValidators.login(), GlobalMiddleWare.checkError, UserController.login);

    /**
     * @swagger
     * /user/send/reset/password/token:
     *   get:
     *     tags: [User Module]
     *     summary: Send reset password token
     *     parameters:
     *       - in: query
     *         name: email
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Token sent
     */
    this.router.get('/send/reset/password/token', UserValidators.checkResetPasswordEmail(), GlobalMiddleWare.checkError, UserController.sendResetPasswordOtp);

    /**
     * @swagger
     * /user/verify/resetPasswordToken:
     *   get:
     *     tags: [User Module]
     *     summary: Verify reset password token
     *     parameters:
     *       - in: query
     *         name: token
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Verified
     */
    this.router.get('/verify/resetPasswordToken', UserValidators.verifyResetPasswordToken(), GlobalMiddleWare.checkError, UserController.verifyResetPasswordToken);

    /**
     * @swagger
     * /user/profile:
     *   get:
     *     tags: [User Module]
     *     summary: Get profile
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: Profile data
     */
    this.router.get('/profile', GlobalMiddleWare.auth, UserController.profile);
  }

  postRoutes() {
    /**
     * @swagger
     * /user/signup:
     *   post:
     *     tags: [User Module]
     *     summary: Register user
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name: { type: string }
     *               phone: { type: string }
     *               email: { type: string }
     *               password: { type: string }
     *               type: { type: string }
     *               status: { type: string }
     *     responses:
     *       200:
     *         description: Created
     */
    this.router.post('/signup', UserValidators.signup(), GlobalMiddleWare.checkError, UserController.signup);

    /**
     * @swagger
     * /user/refresh_token:
     *   post:
     *     tags: [User Module]
     *     summary: Refresh tokens
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: Tokens refreshed
     */
    this.router.post('/refresh_token', GlobalMiddleWare.decodeRefreshToken, GlobalMiddleWare.checkError, UserController.getNewTokens);

    /**
     * @swagger
     * /user/logout:
     *   post:
     *     tags: [User Module]
     *     summary: Logout user
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: Logged out
     */
    this.router.post('/logout', GlobalMiddleWare.auth, GlobalMiddleWare.decodeRefreshToken, UserController.logout);
  }

  patchRoutes() {
    /**
     * @swagger
     * /user/reset/password:
     *   patch:
     *     tags: [User Module]
     *     summary: Reset password
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               new_password: { type: string }
     *     responses:
     *       200:
     *         description: Password reset
     */
    this.router.patch('/reset/password', UserValidators.resetPassword(), GlobalMiddleWare.checkError, UserController.resetPassword);

    /**
     * @swagger
     * /user/verify/emailToken:
     *   patch:
     *     tags: [User Module]
     *     summary: Verify email token
     *     security:
     *       - bearerAuth: []
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               verification_token: { type: string }
     *     responses:
     *       200:
     *         description: Email verified
     */
    this.router.patch('/verify/emailToken', GlobalMiddleWare.auth, UserValidators.verifyUserEmailToken(), GlobalMiddleWare.checkError, UserController.verifyUserEmailToken);

    /**
     * @swagger
     * /user/update/phoneNumber:
     *   patch:
     *     tags: [User Module]
     *     summary: Update phone number
     *     security:
     *       - bearerAuth: []
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               phone: { type: string }
     *     responses:
     *       200:
     *         description: Phone updated
     */
    this.router.patch('/update/phoneNumber', GlobalMiddleWare.auth, UserValidators.verifyPhoneNumber(), GlobalMiddleWare.checkError, UserController.updatePhoneNumber);

     /**
     * @swagger
     * /user/update/profile:
     *   patch:
     *     tags: [User Module]
     *     summary: Update profile
     *     security:
     *       - bearerAuth: []
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               phone: { type: string }
     *               email: { type: string }
     *               password: { type: string }
     *     responses:
     *       200:
     *         description: Profile updated
     */
    this.router.patch('/update/profile', GlobalMiddleWare.auth, UserValidators.verifyUserProfile(), GlobalMiddleWare.checkError, UserController.updateUserProfile);


    /**
     * @swagger
     * /user/update/customerP rofile:
     *   patch:
     *     tags: [User Module]
     *     summary: Update Customer profile
     *     security:
     *       - bearerAuth: []
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name: { type: string }
     *               email: { type: string }
     *     responses:
     *       200:
     *         description: Customer Profile updated
     */
    this.router.patch('/update/customerProfile', GlobalMiddleWare.auth, UserValidators.verifyCustomerProfile(), GlobalMiddleWare.checkError, UserController.updateCustomerProfile);
  }

  putRoutes() {
    /**
     * @swagger
     * /user/updateprofilePic:
     *   put:
     *     tags: [User Module]
     *     summary: Update profile picture
     *     security:
     *       - bearerAuth: []
     *     requestBody:
     *       required: true
     *       content:
     *         multipart/form-data:
     *           schema:
     *             type: object
     *             properties:
     *               profileImages:
     *                 type: string
     *                 format: binary
     *     responses:
     *       200:
     *         description: Picture updated
     */
    this.router.put('/updateprofilePic', GlobalMiddleWare.auth, new Utils().multer.single('profileImages'), UserValidators.userProfilePic(), GlobalMiddleWare.checkError, UserController.updateUserProfilePic);
  }

  deleteRoutes() {}
}

export default new UserRouter().router;
