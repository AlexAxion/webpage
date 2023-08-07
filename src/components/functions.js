import React from 'react';
import YouTube from 'react-youtube';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image1 from './media/Xavier.JPEG';
import Image2 from './media/image.png';

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

export const ImageCarousel = () => {
  return (
    <Carousel showArrows={true} infiniteLoop={true}>
      <div>
        <img src={Image1} alt="Image 1" />
      </div>
      <div>
        <img src={Image2} alt="Image 2" />
      </div>
      {/* Add more <div> elements for additional images */}
    </Carousel>
  );
};

export function page_nav(name){
  window.location.href=name
  }
  