var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `SELECT DATE(data_insercao) AS data, COUNT(*) AS quantidade_cadastros
FROM cadastroVeiculo
GROUP BY DATE(data_insercao)
ORDER BY data;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {

    var instrucaoSql = `SELECT DATE(data_insercao) AS data, COUNT(*) AS quantidade_cadastros
FROM cadastroVeiculo
GROUP BY DATE(data_insercao)
ORDER BY data;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
