import * as jwt from 'jsonwebtoken';
import { Secret } from 'jsonwebtoken';
import { getEnvironmentVariables } from "../environments/environment";


export class Jwt{
    static jwtSign(payload, expires_in: any = '180d') {
        return jwt.sign(
            payload,
            getEnvironmentVariables().jwt_secret_key as Secret,
            {expiresIn: expires_in}
        );
    }

    static jwtVerify(token: string) : Promise<any>{
        return new Promise((resolve, reject) => {
            jwt.verify(token, getEnvironmentVariables().jwt_secret_key, (err, decoded) => {
                if(err) reject(err);
                else if(!decoded) reject(new Error('User is not Authorized.'));
                else resolve(decoded);
            })
        })
    }
}