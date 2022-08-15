import React from 'react';
import Navbar from './Navbar';
import "./Videoplayer.css"; 
import ReactPlayer from 'react-player';

function Videoplayer() {
  return (
      <div className='videoplayer'>
          <Navbar />
          <ReactPlayer
              className="react__player"
              controls
              width="80vw"
              height="80vh"
              url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />


      
    </div>
  )
}

export default Videoplayer;
