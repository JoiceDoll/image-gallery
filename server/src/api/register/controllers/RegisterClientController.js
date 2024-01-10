const ClientAccountService = require("../services/ClientAccountService")

class RegisterClient {
  async store(req, res) {
    const { username, email, password } = req.body;

    try {
      const results = await ClientAccountService.register({
        username,
        email,
        password,
      });

      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(results));
    } catch (error) {
      res.writeHead(400, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify({ error }));
    }
  }
}

module.exports = new RegisterClient();
