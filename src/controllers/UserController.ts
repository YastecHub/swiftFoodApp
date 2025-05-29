export class UserController{
    static login(req, res, next) {
        // const data = [{name: 'yastech'}];
        // res.status(200).send(data);

        const error = new Error('User Email or password does not match');
        next(error);
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