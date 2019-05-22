INSERT INTO users (auth0_id, email, profile_name, username) values ($1, $2, $3, $4)
RETURNING *;