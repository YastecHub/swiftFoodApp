"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const mongoose_1 = require("mongoose");
const restaurantSchema = new mongoose.Schema({
    user_id: { type: mongoose.Types.ObjectId, ref: 'users', required: true },
    city_id: { type: mongoose.Types.ObjectId, ref: 'cities', required: true },
    name: { type: String, required: true },
    //short_name: { type: String, required: true},
    description: { type: String },
    cover: { type: String, required: true },
    location: { type: Object, required: true },
    cuisine: { type: Array, required: true },
    openTime: { type: String, required: true },
    closeTime: { type: String, required: true },
    price: { type: Number, required: true },
    address: { type: String, required: true },
    delivery_time: { type: Number, required: true },
    isClose: { type: Boolean, required: true, default: false },
    status: { type: String, required: true },
    rating: { type: String, required: true, default: 0 },
    totalRating: { type: String, required: true, default: 0 },
    created_at: { type: Date, required: true, default: new Date() },
    updated_at: { type: Date, required: true, default: new Date() },
});
restaurantSchema.index({ location: "2dsphere" }, { background: true });
exports.default = (0, mongoose_1.model)('restaurants', restaurantSchema);
