const express = require('express');
const router = express.Router();
const upload = require('../config/configUpload'); // ARQUIVO COM A CONFIGURAÇÃO DO UPLOAD
const fotoController = require('../controllers/fotoController');

router.get("", (req, res) => {
  res.render("index")
});

// upload.single('foto') vai buscar no json alguma propriedade chamada foto 
router.post('/cadastroVeiculo', upload.single('foto'), (req, res) => {
  fotoController.salvar(req, res);
});
console.log('cheguei no routes')
// router.get('/:id', upload.single('foto'), (req, res) => {
//   fotoController.buscarUsuarioPeloId(req, res);
// });

router.get('/feedVeiculos', (req, res) => {
  fotoController.enviarParaFeed(req, res);
  console.log("Dados do feed:")
});
module.exports = router;