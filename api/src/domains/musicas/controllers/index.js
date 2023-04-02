const express = require("express");
const router = express.Router();
const Musica = require("../models/Musica");

//Retorna todas as músicas da lista
router.get("/Musicas", (req, res) => {
    res.status(200).send(Musica);
});
//Filtra a lista de músicas por um nome passado
router.get("/Musicas/Pesquisa", (req, res) => {
    const nome = req.query.nome;
    const filtro = Musica.filter(Musica => Musica.nome === nome);

    if(!filtro)
        res.status(404).json("Nenhuma música encontrada");
    else
        res.status(200).json(filtro);
});
//Adiciona uma música à lista
router.post("/Musicas/:nome/:artista/:genero/:downloads", (req, res) => {
    const musica = {
        nome: req.params.nome,
        artista: req.params.artista,
        genero: req.params.genero,
        quantidadeDownloads: req.params.downloads
    }

    listaDeMusicas.push(musica);
});

module.exports = router;