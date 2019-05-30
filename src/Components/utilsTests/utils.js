const axios = require('axios')
module.exports = {
    // handleInput = val => {
    //     this.setState({
    //       input: val
    //     });
    // }
    getFeatured = () => {
        axios.get("/schools/Featured").then(res => {
            return res.data.data
        });
      }


}