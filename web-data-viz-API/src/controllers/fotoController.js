const fotoModel = require('../models/fotoModel');


function salvar(req, res) {
  const foto = req.file.filename;
  console.log('controller',foto)

  const {modelo, marca, ano, descricao, idUsuario} = req.body

  const veiculo = {modelo, marca, ano, descricao, idUsuario, foto}
  
  fotoModel.salvar(veiculo)
  .then(resultado => {
    res.status(201).send("Veiculo cadastrado com sucesso");
  }).catch(err => {
    res.status(500).send("Erro ao salvar veículo: " + err);
  });
}

function buscarUsuarioPeloId(req, res) {
  console.log(req.params.id);
  fotoModel.buscarUsuarioPeloId(req.params.id)
  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500).send(err);
  });
}

function enviarParaFeed(req, res) {
  console.log('estou no feedController')
  fotoModel.enviarParaFeed().then(function (resultado) {
      if (resultado.length > 0) {
          res.status(200).json(resultado);
          console.log('cheguei no controler')
      } else {
          res.status(204).send("Nenhum resultado encontrado!")
      }
  }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
  });
}
module.exports = { salvar, buscarUsuarioPeloId, enviarParaFeed } 