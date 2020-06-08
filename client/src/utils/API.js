import axios from "axios";

export default {
  login: userData => 
     axios.post("/auth/login",  userData),
  signUp: userData => 
  	 axios.post('/auth/signup', userData),
  dashboard: token =>
     axios.get('/api/dashboard', {headers: {Authorization: `bearer ${token}`}}),

  getYogaPlaylists: function() {
    return axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${yogaPlaylistId}&key=${APIKey1}`);
  },

  getRunningPlaylists: function() {
    return axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${runningPlaylistId}&key=${APIKey1}`);
  },

  getHIITPlaylists: function() {
    return axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${HIITPlaylistId}&key=${APIKey1}`);
  },
  
  getCyclingPlaylists: function() {
    return axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${cyclingPlaylistId}&key=${APIKey1}`);
  },

  getPilatesPlaylists: function() {
    return axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${pilatesPlaylistId}&key=${APIKey1}`);
  },

  getCrossfitPlaylists: function() {
    return axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${crossfitPlaylistId}&key=${APIKey1}`);
  }
}

const yogaPlaylistId = "PL5TOTBNdO-gZvLIo-tPxNMyPwAwpHliol"
const runningPlaylistId = "PL5TOTBNdO-gbOfPl9WvfhL4mCM8BYr9nH"
const HIITPlaylistId = "PL5TOTBNdO-gYTvnIkE2zo7YRyDe5VH6YV"
const cyclingPlaylistId = "PL5TOTBNdO-gbFlONWQ993U43vje_mufgJ"
const pilatesPlaylistId = "PL5TOTBNdO-gZsmATiegySiHVv8eeuBtLS"
const crossfitPlaylistId = "PL5TOTBNdO-gZDFvTz0fd2qeiJoqg0l9z5"


const APIKey1 = "AIzaSyDYrjg7hzSQAr0gK0-hxVillcmwo-yx9Tc"
// const APIKey2 = "AIzaSyDYrjg7hzSQAr0gK0-hxVillcmwo-yx9Tc"
// const APIKey3 = "AIzaSyBWIcAwKvj5Ka0HJVlbvF4ImR7MmvmfUqY"
