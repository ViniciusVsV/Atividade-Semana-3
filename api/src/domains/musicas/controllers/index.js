const express = require("express");
const router = express.Router();
const Musica = require("../models/Musica");

router.get("/", (req, res) => {
    res.status(200).send(Musica);
});

module.exports = router;