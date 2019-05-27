const authController = require("./Controllers/authController");

const { data } = require("./schools");

require("dotenv").config();
//Environment Variables
const { PORT, CONNECTION_STRING } = process.env;

//Dependencies
const express = require("express");
const app = express();
const massive = require("massive");
const sinon = require("sinon");
const session = require("express-session");

//Top level middlewares
app.use(express.json());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  })
);

//Database
massive(CONNECTION_STRING)
  .then(db => {
    console.log("connected to db");
    app.set("db", db);
    db.init(); //Make sure we take this out when we run our build
  })
  .catch(err => {
    console.log("Failed to connect to db");
  });

//Middlewares
const reviewsController = require("./Controllers/reviewsController");
const schoolsController = require("./Controllers/schoolsControllers");

//Endpoints

//Auth endpoints
app.get("/auth/callback", authController.login);
app.get("/api/user-data", authController.getUser);

//This returns all info for a school, which includes the reviews associated with it
app.get("/schools/:id/reviews", reviewsController.getReviews);
app.post("/schools/:id/reviews", reviewsController.addReview);

//This is what is fired from the input in Home.js. This is used to search for school by keyword, which opens a modal
app.get("/schools", schoolsController.getSchoolQuery);
app.get("/schools/all", schoolsController.getAllSchools);

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
