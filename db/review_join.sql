select users.user_id,
reviews.id,
reviews.school,
reviews.course,
reviews.rate,
reviews.post
from users
inner join reviews 
on users.user_id = reviews.id;