-- select * from reviews where school_id = $1;
select u.username, r.school_name, r.title, r.location, r.course, r.description, r.rate
from reviews r
    join users u on(u.id = r.author_id)
where r.school_id = $1;