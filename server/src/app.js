const http = require("http");
const bodyParser = require("body-parser");
const routers = require("./routes/routes");

const app = http.createServer((req, res) => {
  bodyParser.json()(req, res, async () => {
    routers(req, res);
  });
});

module.exports = app;
