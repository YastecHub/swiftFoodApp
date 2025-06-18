import { Server } from "./server";

let server = new Server().app
let port = process.env.PORT;

server.listen(port, () => {
    console.log(`Server they run at port ${port}`);
});
