export declare class Jwt {
    static jwtSign(payload: any, expires_in?: any): string;
    static jwtVerify(token: string): Promise<any>;
}
