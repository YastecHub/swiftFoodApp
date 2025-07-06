import { Server } from "./server";

let server = new Server().app;
let port = process.env.PORT || 3000;
process.env.TZ = "Africa/Lagos"; // Set timezone to Africa/Lagos

server.listen(port, () => {
    console.log(`Server they run at port ${port}`);
    console.log(`Swagger docs: http://localhost:${port}/api-docs`);
});