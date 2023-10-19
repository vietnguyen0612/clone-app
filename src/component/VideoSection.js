import React, {useState, useRef} from 'react'
import "./VideoSection.scss"
import imageVideo from "../image/video-preview.jpg"

import video from "../video/MOTO-HD.mp4"
import { PiPlayCircleLight } from 'react-icons/pi';
export default function VideoSection() {

    const [isPlaying, setIsPlaying] = useState(false);
    const [isHidden, setIsHidden] =  useState(false);
    const videoRef = useRef(null);

    const toggleVideo = () => {
        const video = videoRef.current;

        if (video.paused) {
            video.play();
            setIsPlaying(true);
            setIsHidden(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };
    
  return (
    <div className='video-section'>
        <video  
            ref={videoRef}
            className="video"
            onClick={toggleVideo} 
            controls
            loop 
        >
            <source src={video} type="video/mp4" />

        </video>
        <img className={`background-image ${isHidden ? 'active': ""}`} src={imageVideo} alt="Video Background" />

        <div className={`play-button ${isPlaying ? 'active': ""}`} onClick={toggleVideo}>
            <PiPlayCircleLight  className='icon'/>
        </div>
    </div>
  )
}
