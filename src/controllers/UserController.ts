export class UserController{
    static login(req, res) {
        const data = [{name: 'yastech'}];
        res.status(200).send(data);
    }

    static test(req, res, next){
        console.log('test');
        (req as any).msg = 'This is a Test';
        next();
    }

    static test2(req, res){
       res.send((req as any).msg);
    }
}