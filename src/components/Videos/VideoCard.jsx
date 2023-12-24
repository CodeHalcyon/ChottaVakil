import React from 'react'
import { Link } from 'react-router-dom'

function VideoCard(props) {
  return (
    <div className='video-card'>
      <div className="vid-thumb">
        <a href="https://youtu.be/PPtgunsyMfo" target='_blank'><img src="images/thumbnail.png" alt="" /></a>
      </div>
      <div className="vid-details">
        <a href="https://youtu.be/PPtgunsyMfo" target='_blank'><h1>Right to Education</h1></a>
        <p>
The right to education is a fundamental human right that ensures every individual has access to quality learning opportunities, promoting personal development and societal progress.</p>
      </div>
    </div>
  )
}

export default VideoCard
