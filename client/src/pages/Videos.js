import React, { useState, useEffect } from "react";
import API from "../utils/API";


function Videos() {
  // Setting our component's initial state
  const [videos, setVideos] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    
    API.getPlaylists()
        .then(res => {
            setVideos(res.data.items)
        })
        .catch(err => console.log(err));
}, []);
console.log(videos)


  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { value } = event.target;
    setSearch(value);
    console.log(search)
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    API.getPlaylists(search)
        .then(res => {
            setVideos(res.data.items)
        })
  };

    return (
      <div>
        <input onChange={handleInputChange} placeholder="search"></input>
        <button onClick={handleFormSubmit}>Search</button>
 {videos.map(video => (

<div>
 <p>{video.snippet.title}</p>
 <iframe id="ytplayer" type="text/html" width="640" height="360"
  src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}?autoplay=1`}
  frameborder="0"></iframe>
  <p>{video.snippet.resourceId.videoId}</p>
 </div>
                    ))}
      </div>
    );
  }


export default Videos;
