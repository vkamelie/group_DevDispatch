const { data } = require("../schools");

module.exports = {
  // addReview: async (req, res) => {
  //   //We will probably need to add LOGGED IN middleware here
  //   //We will need to talk about the data being sent up from the client, this is a rough draft
  //   //I imagine the user will fill in the course they took?
  //   const { course, rating, post } = req.body;

  //   const user_id = req.session.user.id; //This is assuming we are using sessions. We may need to change this.  This is the user id
  //   const { id } = req.params; //This is the school id
  //   const db = req.app.get("db");

  //   //Send the updated reviews. bd.add_review adds a review, and than sends back ALL reviews associated with the school you are leaving a review for.
  //   const newReviews = await db.add_review([user_id, id, course, rating, post]);
  //   res.status(200).send(newReviews);
  // },
  //This gets all data associated with a schools page, not just reviews
  addReview: async (req, res) => {
    const db = req.app.get("db");
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
