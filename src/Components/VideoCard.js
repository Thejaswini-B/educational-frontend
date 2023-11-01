
import React from "react";

function VideoCard({ video }) {
  
  
  // const embedURL = `https://youtu.be/GMHK-0TKRVk?si=eEKle8IRYFcKBudw` ;
  // const embedURL = `https://www.youtube.com/embed/GMHK-0TKRVk`; 

  return (
    <div className="video-card">
      <iframe
        className="embed-responsive-item"
        width="100%"
        height="200"
        // src={embedURL}
        src={video.video_url}
        title={video.video_name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className='video-c'>
        {" "}
        <h4>{video.video_name}</h4>
        <p>{video.video_description}</p>
        <span>Category: {video.category}</span>
        <div>Duration: {video.duration} mins</div>
        <p>Published at: {new Date(video.published_at).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default VideoCard;
