create database legendguitar;
use legendGuitar;


CREATE USER 'legendGuitar'@'localhost' IDENTIFIED BY 'GodIsNotDead';
GRANT ALL PRIVILEGES ON legendGuitar.* TO 'legendGuitar'@'localhost';
FLUSH PRIVILEGES;

create table Usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(200) unique,
senha varchar(45)
);

create table avaliacao(
idAvaliacao int AUTO_INCREMENT,
fkUsuario int,
avaliacao int unique,
PRIMARY KEY (idAvaliacao, fkUsuario),
FOREIGN KEY (fkUsuario) references Usuario(idUsuario)

);

create table metricas(
idMetricas int primary key auto_increment,
fkUsuario int,
pontuacao int,
qtdFacil int,
qtdMedio int,
qtdDificil INT
);

select * from avaliacao;


drop database legendGuitar;