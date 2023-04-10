const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

const musicaRouter = require("../src/domains/Musicas/controllers/index");
app.use("/api/musicas", musicaRouter);

const usuariosRouter = require("../src/domains/Usuarios/controllers/index");
app.use("/api/usuarios", usuariosRouter);

const artistasRouter = require("../src/domains/Artistas/controllers/index");
app.use("/api/artistas", artistasRouter);

const musicausuariorouter = require("../src/domains/musicaUsuario/controllers/index");
app.use("/api/musicaUsuario", musicausuariorouter);

module.exports = app;