import User from "../models/User";
import { Jwt } from "../utils/Jwt";
import { NodeMailer } from "../utils/NodeMailer";
import { Utils } from "../utils/utils";


export class UserController{

    static async signup(req, res, next) {
        console.log(Utils.generateVerificationToken(6));
        const email = req.body.email;
        const phone = req.body.phone;
        const password = req.body.password;
        const name = req.body.name;
        const type = req.body.type;
        const status = req.body.status;
        const verification_token = Utils.generateVerificationToken(6);
        
        try {
            const hash = await Utils.encryptPassword(password);
            const data ={
                email,
                verification_token,
                verification_token_time: Date.now() + new Utils().MAX_TOKEN_TIME,
                phone,
                password: hash,
                name,
                type,
                status
            };

        
            let user = await new User(data).save();
            const payload = {
                user_id: user._id,
                email: email
            }

            const token = Jwt.jwtSign(payload);

            //send email to user for verification
            res.json({
                token: token,
                user: user
            });
            await NodeMailer.sendMail({
                to: [email],
                subject: 'Email Verification',
                html: `<h1>Your Otp is ${verification_token}</h1>`
            });         
        } catch (e) {
            next(e);
        }
    }

    static async verify(req, res, next){
       const verification_token = req.body.verification_token;
       const email = req.user.email;
       try {
        const user = await User.findOneAndUpdate(
        {
            email: email,
            verification_token: verification_token,
            verification_token_time: {$gt: Date.now()}
        },
        {
           email_verified: true,
           updated_at: new Date(),
        },
        {
            new: true
        }
      );
        if (user) {
           res.send(user);
        }else{
            throw new Error('Wrong Otp or Email verification Token is Expired.Please try again...')
        }
       } catch (e) {
        next(e);
      }
    }

    static async resendVerificationEmail(req, res, next){
       const email = req.user.email;
       const verification_token = Utils.generateVerificationToken();
       try {
        const user = await User.findOneAndUpdate(
        {  email: email },
        {
            updated_at: new Date(),
            verification_token: verification_token,
            verification_token_time: Date.now() + new Utils().MAX_TOKEN_TIME
        }
      );
        if (user) {
            res.json({success: true });
            await NodeMailer.sendMail({
                to: [user.email],
                subject: 'Resend Email Verification',
                html: `<h1>Your Otp is ${verification_token}</h1>`
            });
        }else{
            throw new Error('User doesn\'t exist')
        }
        } catch (e) {
            next(e);
        }
    }

    static async login(req, res, next) {
        const user = req.user;
        const password = req.query.password;
        const data = {
            password,
            encrypt_password : user.password
        }
        try {
            await Utils.comparePassword(data);
            const payload = {
                user_id: user._id,
                email: user.email
            }
            const token = Jwt.jwtSign(payload);
            //send email to user for verification
            res.json({
                token: token,
                user: user
            });
        } catch (e) {
            next(e)
        }
    }

    static async sendResetPasswordOtp(req, res, next){
       const email = req.query.email;
       const reset_password_token = Utils.generateVerificationToken();
       try {
            const user = await User.findOneAndUpdate(
                {  email: email },
                {
                    updated_at: new Date(),
                    reset_password_token: reset_password_token,
                    reset_password_token_time: Date.now() + new Utils().MAX_TOKEN_TIME
                }
            );
            if (user) {
                res.json({success: true });
                await NodeMailer.sendMail({
                    to: [user.email],
                    subject: 'Resend Password email verification OTP',
                    html: `<h1>Your Otp is ${reset_password_token}</h1>`
                });
            }else{
                throw new Error('User doesn\'t exist')
            }
        } catch (e) {
            next(e);
        }
    }

    static async verifyResetPasswordToken(req, res, next){
        try {
            res.json({ success: true })
        } catch (e) {
            next(e);
        }
    }
}