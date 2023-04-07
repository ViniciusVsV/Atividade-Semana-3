const app = require("./config/ExpressConfig");
require("dotenv").config();

const port = process.env.PORT;
app.listen(3030, console.log("Servidor Rodando..."));

