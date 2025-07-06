import * as mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    status: boolean;
    created_at: NativeDate;
    updated_at: NativeDate;
    banner: string;
    restaurant_id?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    status: boolean;
    created_at: NativeDate;
    updated_at: NativeDate;
    banner: string;
    restaurant_id?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
}, {}> & {
    status: boolean;
    created_at: NativeDate;
    updated_at: NativeDate;
    banner: string;
    restaurant_id?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    status: boolean;
    created_at: NativeDate;
    updated_at: NativeDate;
    banner: string;
    restaurant_id?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    status: boolean;
    created_at: NativeDate;
    updated_at: NativeDate;
    banner: string;
    restaurant_id?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
}>, {}> & mongoose.FlatRecord<{
    status: boolean;
    created_at: NativeDate;
    updated_at: NativeDate;
    banner: string;
    restaurant_id?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
