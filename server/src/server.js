const app = require("./app");
require("dotenv").config();
const port = 4000;
const ip = "localhost";

app.listen(port, ip, () => {
  console.log(`server running at http://${ip}:${port}`);
});
