// import axios from "axios";

const GET_ALL_CAMPS = "GET_ALL_CAMPS";

let initialState = {
  camps: []
};
export default function camps(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CAMPS + "_FULFILLED":
      return { camps: action.payload };

    default:
      return state;
  }
}
// export function getAllCamps() {
//   let camp = axios
//     .get(``)
//     .then(response => response.data);
//   return {
//     type:
//     payload:
//   };
// }
