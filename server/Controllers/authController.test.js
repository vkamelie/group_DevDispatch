const authFuncs = require("./authController");

// describe("Integration Testing", () => {
//   let db;
//   function DB() {
//     db.query("delete from users");
//   }
//   beforeAll(() => {
//     return testDb.initDb().then(database => {
//       return (db = database);
//     });
//   });
//   afterAll(() => {
//     clearDB();
//   });
//   describe("Register function", () => {
//     it("Should store a user in the db & send it up", () => {
//       const user = {
//         email: "danielstmartin2@gmail.com",
//         username: "Daniel"
//       };
//       return authFuncs.register(db, user).then(createdUser => {
//         expect(createdUser.length).not.toEqual(0);
//         expect(createdUser[0]).toMatchObject({
//           email: expect.any(String),
//           username: expect.any(String)
//         });
//       });
//     });
//   });
// });
// describe("Integration Testing", () => {
//   let db;

//   describe("Register function", () => {
//     it("Should store a user in the db & send it up", () => {
//       const user = {
//         email: "danielstmartin2@gmail.com",
//         username: "Daniel"
//       };
//       return authFuncs.register(db, user).then(createdUser => {
//         expect(createdUser.length).not.toEqual(0);
//         expect(createdUser[0]).toMatchObject({
//           email: expect.any(String),
//           username: expect.any(String)
//         });
//       });
//     });
//   });
// });
