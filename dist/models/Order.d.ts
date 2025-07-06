import * as mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    total: number;
    address: any;
    order: string;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    restaurant_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    payment_status: boolean;
    payment_mode: string;
    grandTotal: number;
    deliveryCharge: number;
    instruction?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    total: number;
    address: any;
    order: string;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    restaurant_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    payment_status: boolean;
    payment_mode: string;
    grandTotal: number;
    deliveryCharge: number;
    instruction?: string;
}, {}> & {
    total: number;
    address: any;
    order: string;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    restaurant_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    payment_status: boolean;
    payment_mode: string;
    grandTotal: number;
    deliveryCharge: number;
    instruction?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    total: number;
    address: any;
    order: string;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    restaurant_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    payment_status: boolean;
    payment_mode: string;
    grandTotal: number;
    deliveryCharge: number;
    instruction?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    total: number;
    address: any;
    order: string;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    restaurant_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    payment_status: boolean;
    payment_mode: string;
    grandTotal: number;
    deliveryCharge: number;
    instruction?: string;
}>, {}> & mongoose.FlatRecord<{
    total: number;
    address: any;
    order: string;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    restaurant_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    payment_status: boolean;
    payment_mode: string;
    grandTotal: number;
    deliveryCharge: number;
    instruction?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
