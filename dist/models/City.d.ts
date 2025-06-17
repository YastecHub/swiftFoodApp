import * as mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    name: string;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    lat: number;
    lng: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    lat: number;
    lng: number;
}, {}> & {
    name: string;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    lat: number;
    lng: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    lat: number;
    lng: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    lat: number;
    lng: number;
}>, {}> & mongoose.FlatRecord<{
    name: string;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    lat: number;
    lng: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
