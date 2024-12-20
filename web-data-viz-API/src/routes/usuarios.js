var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/verificarEmail", function (req, res) {
    usuarioController.verificarEmail(req, res);
});

router.get("/kpi1", function (req, res) {
    usuarioController.kpi1(req, res);
});

router.get("/kpi2", function (req, res) {
    usuarioController.kpi2(req, res);
});

router.get("/dashDATA", function (req, res) {
    usuarioController.dashDATA(req, res);
});

module.exports = router;