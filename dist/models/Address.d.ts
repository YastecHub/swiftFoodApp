import * as mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    address: string;
    title: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    lat: number;
    lng: number;
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    landmark: string;
    house: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    address: string;
    title: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    lat: number;
    lng: number;
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    landmark: string;
    house: string;
}, {}> & {
    address: string;
    title: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    lat: number;
    lng: number;
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    landmark: string;
    house: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    address: string;
    title: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    lat: number;
    lng: number;
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    landmark: string;
    house: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    address: string;
    title: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    lat: number;
    lng: number;
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    landmark: string;
    house: string;
}>, {}> & mongoose.FlatRecord<{
    address: string;
    title: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    lat: number;
    lng: number;
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    landmark: string;
    house: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
