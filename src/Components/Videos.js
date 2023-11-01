import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoCard from './VideoCard';
 
function Videos() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

 
    useEffect(() => {
        axios.get('http://localhost:3007/tutorial/videos')
            .then(response => {
                setVideos(response.data.getAllVideosQuery);
                setLoading(false);
            })
            .catch(err => { 
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <center>Loading...</center>;
    }

    if (error) {
        return <center>Error: {error}</center>;
    }

    return (
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    );
}





export default Videos ;
