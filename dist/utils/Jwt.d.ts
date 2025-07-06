export declare class Jwt {
    static jwtSign(payload: any, userId: any, expires_in?: any): string;
    static jwtVerify(token: string): Promise<any>;
    static jwtSignRefreshToken(payload: any, userId: any, expires_in?: any, redis_ex?: number): Promise<string>;
    static jwtVerifyRefreshToken(refreshToken: string): Promise<any>;
    private static gen_secret_key;
}
