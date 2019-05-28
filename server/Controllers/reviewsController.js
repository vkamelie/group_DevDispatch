const { data } = require("../schools");

module.exports = {
  addReview: async (req, res) => {
    const db = req.app.get("db");
    console.log(req.session);
    console.log("reqBody", req.body);

    const {
      schoolName,
      id,
      title,
      location,
      course,
      position,
      month,
      year,
      rate,
      description
    } = req.body;
  const user_id = req.session.user.id;

    db.add_review([
      user_id,
      id, 
      title,
      location,
      course,
      position,
      month,
      year,
      rate,
      description,
      schoolName
    ])
      .then(post => {
        console.log("Success");
        res.status(200).send(post);
      })
      .catch(err => {
        console.log("Error");
        console.log(err);
      });
  },

  getReviews: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    const school = data.filter(school => school.id == id)[0];
    const reviews = await db.get_reviews(id);
    res.status(200).send({
      school,
      reviews
    });
  }
};
