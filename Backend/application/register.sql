create database register;
	use register;
create table register
(
	id int not null primary key auto_increment,
	name char(20) not null,
	passwd varchar(255) not null,
	email varchar(255) not null,
	direct char(40) not null		
)
