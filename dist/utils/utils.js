"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const Bcrypt = require("bcrypt");
const Multer = require("multer");
const fs = require("fs");
const path = require("path");
const storageOptions = Multer.diskStorage({
    destination: (req, file, cb) => {
        const fieldName = file.fieldname;
        const uploadPath = path.join(__dirname, `../uploads/${fieldName}`);
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    }
    else {
        cb(new Error('Only JPEG/PNG files are allowed'), false);
    }
};
class Utils {
    constructor() {
        this.MAX_TOKEN_TIME = (5 * 60 * 1000);
        this.multer = Multer({ storage: storageOptions, fileFilter: fileFilter });
    }
    static generateVerificationToken(digit = 6) {
        const digits = '0123456789';
        let otp = '';
        for (let i = 0; i < digit; i++) {
            otp += Math.floor(Math.random() * 10);
        }
        return otp;
    }
    static encryptPassword(password) {
        return new Promise((resolve, reject) => {
            Bcrypt.hash(password, 10, function (err, hash) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(hash);
                }
            });
        });
    }
    static comparePassword(data) {
        return new Promise((resolve, reject) => {
            Bcrypt.compare(data.password, data.encrypt_password, function (err, same) {
                if (err) {
                    reject(err);
                }
                else if (!same) {
                    reject(new Error('User & Password Doesn\'t Match'));
                }
                else {
                    resolve(true);
                }
            });
        });
    }
}
exports.Utils = Utils;
