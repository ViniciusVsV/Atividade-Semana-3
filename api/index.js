const app = require("./config/ExpressConfig");

const port = process.env.PORT;
app.listen(port, console.log("Servidor Rodando..."));