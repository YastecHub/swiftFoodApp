import User from "../models/User";

export class UserController{
    static login(req, res, next) {
        // const data = [{name: 'yastech'}];
        // res.status(200).send(data);

        // const error = new Error('User Email or password does not match');
        // next(error);

        // res.send(req.body);

        const email = req.body.email;
        const password = req.body.password;

        const user = new User({
            email,
            password
        });

        user.save().then((user) => {
            res.send(user);
        })
        .catch(e => {
            next(e);
        })
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