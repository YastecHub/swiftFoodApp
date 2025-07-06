import * as mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    name: string;
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
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
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
}, {}> & {
    name: string;
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
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
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
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
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
}>, {}> & mongoose.FlatRecord<{
    name: string;
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
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
