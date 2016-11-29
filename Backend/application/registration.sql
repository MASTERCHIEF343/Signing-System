
create table registration
(
	id int not null primary key auto_increment,
	userid int not null,
	signstatus int(1) not null default 0,
	lastsign datetime default null,
	foreign key(userid) references register(id) on delete cascade on update cascade
)