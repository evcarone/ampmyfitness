import axios from "axios";

export default {
  login: userData => 
     axios.post("/auth/login",  userData),
  signUp: userData => 
  	 axios.post('/auth/signup', userData),
  dashboard: token =>
     axios.get('/api/dashboard', {headers: {Authorization: `bearer ${token}`}}),

  getYogaPlaylists: function() {
    return axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${yogaPlaylistId}&key=${APIKey3}`);
  },

  getRunningPlaylists: function() {
    return axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${runningPlaylistId}&key=${APIKey3}`);
  },

  getHIITPlaylists: function() {
    return axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${HIITPlaylistId}&key=${APIKey3}`);
  },
  
  getCyclingPlaylists: function() {
    return axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${cyclingPlaylistId}&key=${APIKey3}`);
  },

  getPilatesPlaylists: function() {
    return axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${pilatesPlaylistId}&key=${APIKey3}`);
  }
}

const yogaPlaylistId = "PL5TOTBNdO-gZvLIo-tPxNMyPwAwpHliol"
const runningPlaylistId = "PL5TOTBNdO-gbOfPl9WvfhL4mCM8BYr9nH"
const HIITPlaylistId = "PL5TOTBNdO-gYTvnIkE2zo7YRyDe5VH6YV"
const cyclingPlaylistId = "PL5TOTBNdO-gbFlONWQ993U43vje_mufgJ"
const pilatesPlaylistId = "PL5TOTBNdO-gZsmATiegySiHVv8eeuBtLS"


// const APIKey1 = "AIzaSyDYrjg7hzSQAr0gK0-hxVillcmwo-yx9Tc"
//const APIKey2 = "AIzaSyDYrjg7hzSQAr0gK0-hxVillcmwo-yx9Tc"
const APIKey3 = "AIzaSyBWIcAwKvj5Ka0HJVlbvF4ImR7MmvmfUqY"
