import * as mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    name: string;
    location: any;
    address: string;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    city_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    short_name: string;
    cover: string;
    cuisine: any[];
    openTime: string;
    closeTime: string;
    price: number;
    delivery_time: number;
    isClose: boolean;
    rating: string;
    totalRating: string;
    description?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    location: any;
    address: string;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    city_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    short_name: string;
    cover: string;
    cuisine: any[];
    openTime: string;
    closeTime: string;
    price: number;
    delivery_time: number;
    isClose: boolean;
    rating: string;
    totalRating: string;
    description?: string;
}, {}> & {
    name: string;
    location: any;
    address: string;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    city_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    short_name: string;
    cover: string;
    cuisine: any[];
    openTime: string;
    closeTime: string;
    price: number;
    delivery_time: number;
    isClose: boolean;
    rating: string;
    totalRating: string;
    description?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    location: any;
    address: string;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    city_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    short_name: string;
    cover: string;
    cuisine: any[];
    openTime: string;
    closeTime: string;
    price: number;
    delivery_time: number;
    isClose: boolean;
    rating: string;
    totalRating: string;
    description?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    location: any;
    address: string;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    city_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    short_name: string;
    cover: string;
    cuisine: any[];
    openTime: string;
    closeTime: string;
    price: number;
    delivery_time: number;
    isClose: boolean;
    rating: string;
    totalRating: string;
    description?: string;
}>, {}> & mongoose.FlatRecord<{
    name: string;
    location: any;
    address: string;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    city_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    short_name: string;
    cover: string;
    cuisine: any[];
    openTime: string;
    closeTime: string;
    price: number;
    delivery_time: number;
    isClose: boolean;
    rating: string;
    totalRating: string;
    description?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
