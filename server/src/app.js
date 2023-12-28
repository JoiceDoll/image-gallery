const http = require("http");
const routers = require("./routes/routes");

const app = http.createServer(routers);

module.exports = app;
