const RegisterClientController = require("../api/register/controllers/RegisterClientController");

const router = (req, res) => {
  if (req.url === "/register" && req.method === "POST") {
    RegisterClientController.store(req, res);
  } else if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page test");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not found.");
  }
};

module.exports = router;
