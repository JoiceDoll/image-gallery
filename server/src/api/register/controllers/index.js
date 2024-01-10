const clientAccountService = require("../services/index");

class RegisterClient {
  async store(req, res) {
    const { username, email, password } = req.body;
    const stringPassword = String(password);
 
    try {
      const results = await clientAccountService.register({ username, email, password: stringPassword });

      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(results));
      console.log(results);
    } catch (error) {
      res.writeHead(400, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify({ error }));
    }
  }
}

module.exports = new RegisterClient();
