const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

const musicaRouter = require("../src/domains/Musicas/controllers/index");
app.use("/api/musica", musicaRouter);

const usuariosRouter = require("../src/domains/usuarios/controllers/index");
app.use("/api/usuarios", usuariosRouter);

module.exports = app;