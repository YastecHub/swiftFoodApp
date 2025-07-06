"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
let server = new server_1.Server().app;
let port = process.env.PORT || 3000;
process.env.TZ = "Africa/Lagos"; // Set timezone to Africa/Lagos
server.listen(port, () => {
    console.log(`Server they run at port ${port}`);
});
