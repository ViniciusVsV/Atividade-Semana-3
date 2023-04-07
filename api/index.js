const app = require("./config/ExpressConfig");
require('dotenv').config();

const port = process.env.PORT;
app.listen(port, console.log(`Servidor rodando na porta ${port}`));