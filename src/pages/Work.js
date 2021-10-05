import React, { useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import VideoModal from '../components/VideoModal'
import data from '../works.json'

const Work = (props) => {
    const galleryRef = useRef()
    const [isVideoModalOn, setIsVideoModalOn] = useState(false)
    const [work] = useState(data[props.match.params.name])

    const scrollHorizontally = (e) => {
        e = window.event || e
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))
        galleryRef.current.scrollLeft -= (delta * 20)
        // e.preventDefault()
    }

    const toggleVideoModal = () => {
        setIsVideoModalOn(!isVideoModalOn)
    }

    return (
        <React.Fragment>
            <SiteLayout>
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
                                return <img
                                    key={'image-' + index}
                                    src={process.env.PUBLIC_URL + '/images/' + elem}
                                    alt={'image-' + index}
                                />
                            })
                        }
                    </div>
                    <div className='work-container-header'>
                        <Link to='/works' className='nostyle work-back-button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6.678" height="11.68" viewBox="0 0 6.678 11.68">
                          <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M13.264,12.032l4.419-4.416A.835.835,0,1,0,16.5,6.437l-5.007,5a.833.833,0,0,0-.024,1.151L16.5,17.63a.835.835,0,1,0,1.182-1.179Z" transform="translate(-11.251 -6.194)"/>
                        </svg>

                        <span>Back</span>
                        </Link>
                        <div className='work-title'>{props.match.params.name.toUpperCase()}</div>
                    </div>

                    <div className='work-container-footer'>
                        <div className='work-watch-film' onClick={toggleVideoModal}>
                        
                        <span>Watch film</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                            <g id="Play" transform="translate(-992.25 -998)">
                              <g id="Tracciato_3" data-name="Tracciato 3" transform="translate(992.25 998)" fill="none">
                                <path d="M24,0A24,24,0,1,1,0,24,24,24,0,0,1,24,0Z" stroke="none"/>
                                <path d="M 24 2 C 21.02914047241211 2 18.1481990814209 2.581401824951172 15.43722152709961 3.728050231933594 C 12.81771850585938 4.836009979248047 10.46474075317383 6.422561645507812 8.443649291992188 8.443649291992188 C 6.422561645507812 10.46474075317383 4.836009979248047 12.81771850585938 3.728050231933594 15.43722152709961 C 2.581401824951172 18.1481990814209 2 21.02914047241211 2 24 C 2 26.97085952758789 2.581401824951172 29.8518009185791 3.728050231933594 32.56278228759766 C 4.836009979248047 35.18228149414062 6.422561645507812 37.53525924682617 8.443649291992188 39.55635070800781 C 10.46474075317383 41.57743835449219 12.81771850585938 43.16399002075195 15.43722152709961 44.27194976806641 C 18.1481990814209 45.41860198974609 21.02914047241211 46 24 46 C 26.97085952758789 46 29.8518009185791 45.41860198974609 32.56278228759766 44.27194976806641 C 35.18228149414062 43.16399002075195 37.53525924682617 41.57743835449219 39.55635070800781 39.55635070800781 C 41.57743835449219 37.53525924682617 43.16399002075195 35.18228149414062 44.27194976806641 32.56278228759766 C 45.41860198974609 29.8518009185791 46 26.97085952758789 46 24 C 46 21.02914047241211 45.41860198974609 18.1481990814209 44.27194976806641 15.43722152709961 C 43.16399002075195 12.81771850585938 41.57743835449219 10.46474075317383 39.55635070800781 8.443649291992188 C 37.53525924682617 6.422561645507812 35.18228149414062 4.836009979248047 32.56278228759766 3.728050231933594 C 29.8518009185791 2.581401824951172 26.97085952758789 2 24 2 M 24 0 C 37.25482940673828 0 48 10.74517059326172 48 24 C 48 37.25482940673828 37.25482940673828 48 24 48 C 10.74517059326172 48 0 37.25482940673828 0 24 C 0 10.74517059326172 10.74517059326172 0 24 0 Z" stroke="none" fill="#000"/>
                              </g>
                              <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M16.914,13.289l-5.37-5.366a1.01,1.01,0,0,1,0-1.432,1.023,1.023,0,0,1,1.436,0l6.084,6.08a1.012,1.012,0,0,1,.03,1.4l-6.109,6.122a1.014,1.014,0,0,1-1.436-1.432Z" transform="translate(1001.004 1008.804)"/>
                            </g>
                          </svg>

        
                </div>
                    </div>
                </div>
            </SiteLayout>

            <VideoModal
                visibility={isVideoModalOn ? 'visible' : 'hidden'}
                toggleVideoModal={toggleVideoModal}
                url={props.match.params.vimeo}
            />
        </React.Fragment>
    )
}

export default Work