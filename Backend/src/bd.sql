create database report_now;
use report_now;
create table users (id int(50) not null auto_increment primary key, name varchar(35));
ALTER TABLE `report_now`.`users` 
ADD COLUMN `user` VARCHAR(45) NOT NULL AFTER `name`,
ADD COLUMN `email` VARCHAR(45) NOT NULL AFTER `user`,
ADD COLUMN `phone` VARCHAR(15) NULL DEFAULT NULL AFTER `email`,
ADD COLUMN `password` VARCHAR(45) NOT NULL AFTER `phone`;
