insert into reviews(author_id, school_id, school_name, title, location, course, position, month, year, rate, description)
values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);

select * from reviews where school_id = $2;