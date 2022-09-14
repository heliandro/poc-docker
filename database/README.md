# MySQL

## Executando o command line do MySQL

> docker exec -it mysql-db mysql -u root -p

## Comandos

> show databases;

> use nodedb;

> create table people(id int auto_increment, name varchar(255), primary key(id));

> desc people;

> insert into people(name) values('Joao');

> select * from people;