create table logs
(
	id int not null primary key auto_increment,
	userid int not null,
	signdate datetime not null,
	foreign key(userid) references register(id) on delete cascade on update cascade
)