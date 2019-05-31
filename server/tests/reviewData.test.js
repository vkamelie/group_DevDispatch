const { initDb } = require("../../test/init");
const reviewData = require("./reviewData");

describe("integration testing", () => {
  let db;

  beforeAll(() => {
    return initDb().then(database => {
      return (db = database);
    });
  });

  clearDatabase = () => {
    return db.query("delete from reviews");
  };
  beforeEach(clearDatabase);
  it("adds a new review function", () => {
    return reviewData
      .create(db, {
        author_id: 1,
        school_id: 1,
        school_name: "DevM",
        title: "My cool school",
        location: "phx",
        course: "web dev",
        position: "student",
        month: "jan",
        year: "1999",
        rate: 5,
        description: "this place is pretty cool"
      })
      .then(createdReview => {
        expect(createdReviews.author_id).toEqual(1);
        expect(createdReviews.school_id).toEqual(1);
        expect(createdReviews.school_name).toEqual("DevM");
        expect(createdReviews.title).toEqual("My cool school");
        expect(createdReviews.location).toEqual("phx");
        expect(createdReviews.position).toEqual("web dev");
        expect(createdReviews.month).toEqual("jan");
        expect(createdReviews.year).toEqual("1999");
        expect(createdReviews.rate).toEqual(5);
        expect(createdReviews.description).toEqual("this place is pretty cool");
      });
  });
});
