const axios = require("axios");

module.exports = {
  login: (req, res) => {
    const db = req.app.get("");

    // STEP 1.)
    //Make an object called payload with the code recieved from the clientside, client_id, client_secret, grant_type, redirect_uri
    //hint: code is recieved from client side as a query

    let payload = {
      client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      code: req.query.code,
      grant_type: "authorization_code",
      redirect_uri: `http://${req.headers.host}/auth/callback`
    };

    function tradeCodeForAccessToken() {
      return axios.post(
        `https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`,
        payload
      );
    }

    function tradeAccessTokenForUserInfo(accessTokenResponse) {
      const accessToken = accessTokenResponse.data.access_token;
      return axios.get(
        `https://${
          process.env.REACT_APP_AUTH0_DOMAIN
        }/userinfo/?access_token=${accessToken}`
      );
    }

    function storeUserInfoInDataBase(userInfo) {
      const userData = userInfo.data;
      console.log(userData, "userinfo");
      return req.app
        .get("db")
        .find_user_by_auth0_id(userData.sub)
        .then(users => {
          if (users.length) {
            const user = users[0];
            req.session.user = user;
            res.redirect("/");
          } else {
            const createData = [
              userData.sub,
              userData.email,
              userData.name,
              userData.given_name
            ];

            return req.app
              .get("db")
              .create_user(createData)
              .then(newUsers => {
                console.log(newUsers, "check new users");
                const user = newUsers[0];
                req.session.user = user;
                res.redirect("/");
              });
          }
        });
    }

    tradeCodeForAccessToken()
      .then(accessToken => tradeAccessTokenForUserInfo(accessToken))
      .then(userInfo => storeUserInfoInDataBase(userInfo));
  },
  getUser(req, res) {
    console.log("Sending", req.session.user);
    res.status(200).json(req.session.user);
  }
};
