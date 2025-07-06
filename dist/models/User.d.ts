import * as mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    type: string;
    account_verified: boolean;
    verification_token: string;
    verification_token_time: NativeDate;
    phone: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    name?: string;
    email?: string;
    status?: string;
    photo?: string;
    password?: string;
    reset_password_token?: string;
    reset_password_token_time?: NativeDate;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    type: string;
    account_verified: boolean;
    verification_token: string;
    verification_token_time: NativeDate;
    phone: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    name?: string;
    email?: string;
    status?: string;
    photo?: string;
    password?: string;
    reset_password_token?: string;
    reset_password_token_time?: NativeDate;
}, {}> & {
    type: string;
    account_verified: boolean;
    verification_token: string;
    verification_token_time: NativeDate;
    phone: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    name?: string;
    email?: string;
    status?: string;
    photo?: string;
    password?: string;
    reset_password_token?: string;
    reset_password_token_time?: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    type: string;
    account_verified: boolean;
    verification_token: string;
    verification_token_time: NativeDate;
    phone: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    name?: string;
    email?: string;
    status?: string;
    photo?: string;
    password?: string;
    reset_password_token?: string;
    reset_password_token_time?: NativeDate;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    type: string;
    account_verified: boolean;
    verification_token: string;
    verification_token_time: NativeDate;
    phone: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    name?: string;
    email?: string;
    status?: string;
    photo?: string;
    password?: string;
    reset_password_token?: string;
    reset_password_token_time?: NativeDate;
}>, {}> & mongoose.FlatRecord<{
    type: string;
    account_verified: boolean;
    verification_token: string;
    verification_token_time: NativeDate;
    phone: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    name?: string;
    email?: string;
    status?: string;
    photo?: string;
    password?: string;
    reset_password_token?: string;
    reset_password_token_time?: NativeDate;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
