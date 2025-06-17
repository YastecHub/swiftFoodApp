import * as mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    name: string;
    type: string;
    email: string;
    status: string;
    email_verified: boolean;
    verification_token: string;
    verification_token_time: NativeDate;
    phone: string;
    password: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    reset_password_token?: string;
    reset_password_token_time?: NativeDate;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    type: string;
    email: string;
    status: string;
    email_verified: boolean;
    verification_token: string;
    verification_token_time: NativeDate;
    phone: string;
    password: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    reset_password_token?: string;
    reset_password_token_time?: NativeDate;
}, {}> & {
    name: string;
    type: string;
    email: string;
    status: string;
    email_verified: boolean;
    verification_token: string;
    verification_token_time: NativeDate;
    phone: string;
    password: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    reset_password_token?: string;
    reset_password_token_time?: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    type: string;
    email: string;
    status: string;
    email_verified: boolean;
    verification_token: string;
    verification_token_time: NativeDate;
    phone: string;
    password: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    reset_password_token?: string;
    reset_password_token_time?: NativeDate;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    type: string;
    email: string;
    status: string;
    email_verified: boolean;
    verification_token: string;
    verification_token_time: NativeDate;
    phone: string;
    password: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    reset_password_token?: string;
    reset_password_token_time?: NativeDate;
}>, {}> & mongoose.FlatRecord<{
    name: string;
    type: string;
    email: string;
    status: string;
    email_verified: boolean;
    verification_token: string;
    verification_token_time: NativeDate;
    phone: string;
    password: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    reset_password_token?: string;
    reset_password_token_time?: NativeDate;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
