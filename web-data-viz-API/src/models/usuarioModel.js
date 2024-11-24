var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verificarEmail() {
    console.log('estou função verificarEmail')
    var instrucaoSql = `
        SELECT id, nome, email FROM usuario;
    `;
  
    return database.executar(instrucaoSql);
  }

  function kpi1() {
    console.log('estou função kpi1')
    var instrucaoSql = `
        SELECT COUNT(*) AS quantidade_total_usuarios
        FROM usuario;
    `;
    return database.executar(instrucaoSql);
  }

  function kpi2() {
    console.log('estou função kpi2')
    var instrucaoSql = `
        SELECT COUNT(*) AS quantidade_total_veiculos
        FROM cadastroVeiculo;
    `;
    return database.executar(instrucaoSql);
  } 

  function dashDATA() {
    console.log('estou função dashDATA')
    var instrucaoSql = `
         SELECT DATE_FORMAT(DATE(data_insercao), '%d/%m/%Y') AS data, 
       COUNT(*) AS quantidade_veiculos
       FROM cadastroVeiculo
       GROUP BY DATE_FORMAT(DATE(data_insercao), '%d/%m/%Y')
       ORDER BY data DESC;

    `;
    return database.executar(instrucaoSql);
  } 
  

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha,  dtNasc, celular) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha,  dtNasc, celular) VALUES ('${nome}', '${email}', '${senha}','${dtNasc}', '${celular}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    verificarEmail,
    kpi1,
    kpi2,
    dashDATA,
    cadastrar
};