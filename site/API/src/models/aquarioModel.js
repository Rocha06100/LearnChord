

var database = require("../database/config");

function buscarAquariosPorEmpresa(idUsuario) {

  var instrucaoSql = `select sum(qtdFacil) as facil, sum(qtdMedio) as medio, sum(qtdDificil) as dificil from metricas
	where fkUsuario = ${idUsuario}
    group by(fkUsuario);`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarTentativas(idUsuario) {

  var instrucaoSql = `select count(*) as tentativas from metricas
  where fkUsuario = ${idUsuario};`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarSomaPontuacao(idUsuario) {

    var instrucaoSql = `select sum(pontuacao) as soma from metricas
    where fkUsuario = ${idUsuario};`
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMediaPontuacao(idUsuario) {

  var instrucaoSql = `select round(avg(pontuacao), 2) as media from metricas
  where fkUsuario = ${idUsuario};`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(empresaId, descricao) {
  
  var instrucaoSql = `INSERT INTO (descricao, fk_empresa) aquario VALUES (${descricao}, ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  buscarTentativas,
  buscarSomaPontuacao,
  buscarMediaPontuacao,
  cadastrar
}
