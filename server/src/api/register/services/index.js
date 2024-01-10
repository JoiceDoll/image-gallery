const db = require("../../../database/index");
const registerAccountQuery = require("../queries/registerAccountQuery");

class ClientAccountService {
  async register({ username, email, password }) {
    const query = registerAccountQuery({ username, email, password });

    try {
      const results = await db.query(query);
      return results.rows;
      
    } catch (error) {
      throw new Error(
        "Ocorreu um erro durante o registro. Por favor, tente novamente."
      );
    }
  }
}

module.exports = new ClientAccountService();
