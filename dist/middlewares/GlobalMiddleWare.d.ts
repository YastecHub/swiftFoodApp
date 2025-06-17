export declare class GlobalMiddleWare {
    static checkError(req: any, res: any, next: any): any;
    static auth(req: any, res: any, next: any): Promise<void>;
    static adminRole(req: any, res: any, next: any): void;
}
