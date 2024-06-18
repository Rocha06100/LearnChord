var express = require("express");
var router = express.Router();

var aquarioController = require("../controllers/aquarioController");

router.get(`/dashboard/:idUsuario`, function (req, res) {
  aquarioController.buscarAquariosPorEmpresa(req, res);
});

router.get(`/buscarTentativas/:idUsuario`, function (req, res) {
  aquarioController.buscarTentativas(req, res);
});

router.get(`/buscarSomaPontuacao/:idUsuario`, function (req, res) {
  aquarioController.buscarSomaPontuacao(req, res);
});

router.get(`/buscarMediaPontuacao/:idUsuario`, function (req, res) {
  aquarioController.buscarMediaPontuacao(req, res);
});

router.post("/aquario", function (req, res) {
  aquarioController.cadastrar(req, res);
}) 

module.exports = router;