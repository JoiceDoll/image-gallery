const db = require("../../../database/index");
const accountQuery = require("../queries/accountQuery");

class ClientAccountService {
  async register({ username, email, password }) {
    try {
      const query = accountQuery({ username, email, password });
      await db.query(query);
      return "Successfully registered!";
    } catch (error) {
      return error;
    }
  }
}

module.exports = new ClientAccountService();
