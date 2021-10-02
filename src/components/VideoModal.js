import React from 'react'
import ReactPlayer from 'react-player'

const VideoModal = (props) => {

    
    return (
        <div className={`videoModal ${props.visibility}`}>
            <div className='exit' onClick={props.toggleVideoModal}>QUIT</div>
            <ReactPlayer
                url={props.url}
                controls
                className='video-modal-class'
            />
        </div>
    )
}
export default VideoModal