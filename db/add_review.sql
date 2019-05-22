insert into reviews(author_id, school_id, course, rate, post)
values($1, $2, $3, $4, $5);

select * from reviews where school_id = $2;