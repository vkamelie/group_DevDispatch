const axios = require('axios')
module.exports = {

    getFeatured: () => {
        return axios.get("/schools/Featured").then(res =>{
            return res.data.pizza
        })
        // console.log(axios.get("/schools/Featured")
        
        }
      


}