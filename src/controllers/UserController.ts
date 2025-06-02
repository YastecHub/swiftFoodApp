import User from "../models/User";
import { NodeMailer } from "../utils/NodeMailer";
import { Utils } from "../utils/utils";

export class UserController{
    static async signup(req, res, next) {
        console.log(Utils.generateVerificationToken());

        const email = req.body.email;
        const phone = req.body.phone;
        const password = req.body.password;
        const name = req.body.name;
        const type = req.body.type;
        const status = req.body.status;
        const verification_token = Utils.generateVerificationToken(5);


        const data ={
            email,
            verification_token,
            verification_token_time: Date.now() + new Utils().MAX_TOKEN_TIME,
            phone,
            password,
            name,
            type,
            status
        };

        try {
            let user = await new User(data).save();
            //send email to user for verification
            await NodeMailer.sendMail({
                to: [email],
                subject: 'test',
                html: `<h1>Your Otp is ${verification_token}</h1>`
            });
            res.send(user);
        } catch (e) {
            next(e);
        }
    }

    static async verify(req, res, next){
       const verification_token = req.body.verification_token;
       const email = req.body.email;
       try {
        const user = await User.findOneAndUpdate(
        {
            email: email,
            verification_token: verification_token,
            verification_token_time: {$gt: Date.now()}
        },
        {
           email_verified: true
        },
        {
            new: true
        }
      );
        if (user) {
           res.send(user);
        }else{
            throw new Error('Email verification Token is Expired.Please try again...')
        }
       } catch (e) {
        next(e);
      }
    }
}