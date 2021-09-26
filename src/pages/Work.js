import React, { useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import data from '../works.json'

const Work = (props) => {
    const galleryRef = useRef()
    const [work, setWork] = useState(data[props.match.params.id])

    const scrollHorizontally = (e) => {
        e = window.event || e
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))
        galleryRef.current.scrollLeft -= (delta * 20)
        e.preventDefault()
    }

    return (
        <React.Fragment>
            {<Helmet>
                <style>
                    {`
                        body {
                            background: transparent linear-gradient(129deg, #FCFDED 0%, #D9CAFC 100%) 0% 0% no-repeat padding-box;
                            overflow: hidden;
                        }
                    `}
                </style>
            </Helmet>}
            <div className='work-container'>
                <div ref={galleryRef} className='work-container-gallery' onWheel={scrollHorizontally}>
                    {
                        work.images.map((elem, index) => {
                            return <img src={process.env.PUBLIC_URL + '/images/' + elem} alt={'image-' + index} />
                        })
                    }
                </div>
                <div className='work-container-header'>
                    <Link to='/works' className='nostyle work-back-button'>&lt;&nbsp;&nbsp;&nbsp;Back</Link>
                    <div className='work-title'>{work.title.toUpperCase()}</div>
                </div>

                <div className='work-container-footer'>
                    <div>Watch film</div>
                </div>
            </div>

        </React.Fragment>


    )
}

export default Work