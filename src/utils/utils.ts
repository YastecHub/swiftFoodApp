import * as Bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Secret } from 'jsonwebtoken';
import { getEnvironmentVariables } from "../environments/environment";

export class Utils{
    public MAX_TOKEN_TIME = (5 * 60 * 1000);

    static generateVerificationToken(digit: number = 6){
        const digits = '0123456789';
        let otp = '';
        for (let i = 0; i < digit; i++) {
           otp += Math.floor(Math.random() * 10);         
        }
        return parseInt(otp);
    }

    static encryptPassword(password){
        return new Promise((resolve, reject) => {
            Bcrypt.hash(password, 10, function(err, hash) {
            if (err) {
                reject(err);
            }else{
                resolve(hash);
            }
            });
        });
    }

    static comparePassword(data: { password: string, encrypt_password: string}): Promise<any>{
        return new Promise((resolve, reject) => {
            Bcrypt.compare(data.password, data.encrypt_password, function(err, same) {
            if (err) {
                reject(err);
            }else if(!same){
                reject(new Error('User & Password Doesn\'t Match'))
            }
            else{
                resolve(true);
            }
            });
        });
    }

    static jwtSign(payload, expires_in: any = '180d') {
        return jwt.sign(
            payload,
            getEnvironmentVariables().jwt_secret_key as Secret,
            {expiresIn: expires_in}
        );
    }
}