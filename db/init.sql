drop table if exists reviews;
drop table if exists users;

 create table users(
id serial primary key,
auth0_id VARCHAR,
email VARCHAR,
profile_name TEXT,
username text
);

create table reviews(
id serial primary key,
author_id integer references users(id),
school_id integer,
course text not null, 
rate integer not null,
post text not null
);




insert into users(username)
values('Username');

insert into reviews(author_id, school_id, course, rate, post)
values(1, 1, 'webDev', 5, 'life chaninging yo'),
(1, 1, 'webDev', 5, 'life chaninging yo'),
(1, 1, 'webDev', 5, 'life chaninging yo');