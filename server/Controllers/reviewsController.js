const { data } = require("../schools");

module.exports = {
  addReview: async (req, res) => {
    const db = req.app.get("db");
    console.log(req.session);
    console.log("reqBody", req.body);
    const {
      school_name,
      title,
      location,
      course,
      position,
      month,
      year,
      rate,
      description
    } = req.body;
    const { username } = req.session.nickname;
    db.add_review([
      username,
      school_name,
      title,
      location,
      course,
      position,
      month,
      year,
      rate,
      description
    ])
      .then(post => {
        res.status(200).send(post);
      })
      .catch(err => {
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
