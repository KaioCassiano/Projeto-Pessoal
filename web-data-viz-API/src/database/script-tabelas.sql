-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE AutoLegado;

USE AutoLegado;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	dtNasc DATE,
	celular VARCHAR(11)
);

CREATE TABLE cadastroVeiculo (
id int primary key auto_increment,
marca varchar(45),
modelo varchar(45),
ano int,
imagem_perfil varchar(255),
descricao text,
fkUsuario int,
constraint fkUsuarioVeiculo foreign key (fkUsuario) references usuario(id)
);

ALTER TABLE cadastroVeiculo
ADD COLUMN data_insercao TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

select * from usuario;

desc usuario;