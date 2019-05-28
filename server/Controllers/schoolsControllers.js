const { data } = require("../schools");

module.exports = {
  getSchoolQuery: (req, res) => {
    //This endpoint is for the input in Home.js. It filters schools which have QUERY included in the title
    //Which is needed for the modal under the input

    //This is the text that will be compared against all the names in schools.js
    const { query } = req.query;

    //Filter all schools whose name contains QUERY(filter) and than take off the id, name, and rating(map).
    const filteredSchools = data
      .filter(school => school.name.toLowerCase().includes(query))
      .map(school => {
        const { id, name, rating } = school;
        return {
          id,
          name,
          rating
        };
      });

    //And than send back that data
    res.status(200).send(filteredSchools);
  },
  getAllSchools: (req, res) => {
    res.status(200).send(data);
  }
};
