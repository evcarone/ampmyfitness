import axios from "axios";

export default {
  login: userData => 
     axios.post("/auth/login",  userData),
  signUp: userData => 
  	 axios.post('/auth/signup', userData),
  dashboard: token =>
     axios.get('/api/dashboard', {headers: {Authorization: `bearer ${token}`}})
}
//   // getPlaylists: function() {
//   //   return axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL5TOTBNdO-gZvLIo-tPxNMyPwAwpHliol&key=AIzaSyDYrjg7hzSQAr0gK0-hxVillcmwo-yx9Tc`);
//   }
// }

// const playlistId = "PL5TOTBNdO-gZvLIo-tPxNMyPwAwpHliol"

// const playlistSearch = `https://www.googleapis.com/youtube/v3/channels/forUsername=Zach%2Nylen&key=AIzaSyDYrjg7hzSQAr0gK0-hxVillcmwo-yx9Tc`

// const videoSearch = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${search}&type=video&key=AIzaSyDYrjg7hzSQAr0gK0-hxVillcmwo-yx9Tc`



//methods for interacting with API Auth routes
// export default {
//   login: userData => 
//      axios.post("/auth/login",  userData),
//   signUp: userData => 
//   	 axios.post('/auth/signup', userData),
//   dashboard: token =>
//      axios.get('/api/dashboard', {headers: {Authorization: `bearer ${token}`}})
// };