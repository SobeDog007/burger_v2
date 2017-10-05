-- Steven Sober
-- 10/03/2017
-- Homework: Burger_v2
-- schema.sql

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id integer auto_increment not null,
	burger_name varchar(255) not null,
	devoured boolean not null,
	date timestamp not null default current_timestamp,
	primary key(id)  
);
