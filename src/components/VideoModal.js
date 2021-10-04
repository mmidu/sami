import React from 'react'
import ReactPlayer from 'react-player'

const VideoModal = (props) => {
    
    return (
        <div className={`videoModal ${props.visibility}`}>
            <div className='exit' onClick={props.toggleVideoModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="6.678" height="11.68" viewBox="0 0 6.678 11.68">
                    <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M13.264,12.032l4.419-4.416A.835.835,0,1,0,16.5,6.437l-5.007,5a.833.833,0,0,0-.024,1.151L16.5,17.63a.835.835,0,1,0,1.182-1.179Z" transform="translate(-11.251 -6.194)" fill="#fff"/>
                    </svg> 
                    Back</div>
            <ReactPlayer
                url={props.url}
                controls
                className='video-modal-class'
            />
        </div>
    )
}
export default VideoModal