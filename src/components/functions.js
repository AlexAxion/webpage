import React from 'react';
import YouTube from 'react-youtube';

const videoId = 'CkaNT8QOt9U';

export const YouTubeVideo = () => {
  const opts = {
    height: '360', // Set the height of the video player
    width: '640', // Set the width of the video player
    playerVars: {
      // Optional player settings (https://developers.google.com/youtube/player_parameters)
      autoplay: 0, // Auto-play the video (0: false, 1: true)
      controls: 1, // Show video controls (0: hide, 1: show)
      modestbranding: 1, // Hide YouTube logo in the controls (0: show, 1: hide)
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export function page_nav(name){
  window.location.href=name
  }
  