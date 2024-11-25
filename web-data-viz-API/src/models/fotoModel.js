const database = require("../database/config");

// console.log('model',foto)
function salvar(veiculo) {
  console.log('cheguei no model')
const instrucao = `insert into cadastroVeiculo (marca, modelo, ano, imagem_perfil, descricao, fkUsuario) values ('${veiculo.marca}', '${veiculo.modelo}',${veiculo.ano}, '${veiculo.foto}', '${veiculo.descricao}', ${veiculo.idUsuario})`;

  return database.executar(instrucao);
}

// função para redirecionar o cadastro do carro para a pagina de feed

function enviarParaFeed() {
  console.log('cheguei no model para enviar pro feed')
const instrucao = `select v.id, marca, modelo, ano, imagem_perfil, descricao, fkUsuario, u.nome from cadastroVeiculo as v join usuario as u on v.fkUsuario = u.id;`;

  return database.executar(instrucao);
}


module.exports = {salvar, enviarParaFeed}