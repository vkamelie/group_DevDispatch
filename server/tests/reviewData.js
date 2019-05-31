module.exports = {
  getAllReviews(db) {
    return db.query("select * from reviews");
  },
  create(db, newReview) {
    return db.query(
      "insert into reviews(author_id, school_id, title, location, course, position, month, year, rate, description, school_name) values (${author_id}, ${school_id}, ${title}, ${location}, ${course}, ${position}, ${month}, ${year}, ${rate}, ${description}, ${school_name}) returning *",
      {
        author_id: newReview.author_id,
        school_id: newReview.school_id,
        title: newReview.title,
        location: newReview.location,
        course: newReview.course,
        position: newReview.position,
        month: newReview.month,
        year: newReview.year,
        rate: newReview.rate,
        description: newReview.description,
        school_name: newReview.school_name
      }
    );
  }
};
