import { validationResult } from "express-validator";
import { Jwt } from "../utils/Jwt";

export class GlobalMiddleWare{
    static checkError(req, res, next){
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return next(new Error(errors.array()[0].msg))
        }else{
            next();
        }
    }

    static async auth(req, res, next){
        const header_auth = req.headers.authorization;
        const token = header_auth? header_auth.slice(7, header_auth.length) : null;
        try {
            if (!token){      
                req.errorStatus = 401;
                next( new Error("JWT must be provided"));
            } 
            const decoded = await Jwt.jwtVerify(token);
            req.user = decoded;
            next();
        } catch (e) {       
           req.errorStatus = 401;
           next( new Error("JWT must be provided"));
        }
    }

        static async decodeRefreshToken(req, res, next){
            const refreshToken = req.body.refreshToken;
        try {
            if (!refreshToken){      
                req.errorStatus = 403;
                next( new Error("Access is forbidden! User doesn\'t exist or token is invalid"));
            } 
            const decoded = await Jwt.jwtVerifyRefreshToken(refreshToken);
            req.user = decoded;
            next();
        } catch (e) {       
           req.errorStatus = 403;
           next( new Error("Your session has expired or you are an invalid user!, please login again...."));
        }
    }

    static adminRole(req, res, next){
        const user = req.user;
        if (user.type !== 'user') {
            next( new Error("You are not Authorized Bitch!!!"));
        }
        next();
    }
}