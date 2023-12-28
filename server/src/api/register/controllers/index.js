const ClientAccountService = require("../services");

class RegisterClient {
  store(req, res) {
    const { username, email, password } = req.body;
    try {
      const results = ClientAccountService({ username, email, password });
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(results));
    } catch (error) {
      res.writeHead(400, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(error));
    }
  }
}

module.exports = new RegisterClient();
