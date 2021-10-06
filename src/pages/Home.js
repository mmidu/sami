import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'    
import VideoModal from '../components/VideoModal'
import Landing from '../components/Landing'
import HomeLayout from '../components/HomeLayout'
// import Cookies from 'universal-cookie'
import data from '../works.json'

function LinkedParagraph (props){
  const history = useHistory();

  return <p className={props.className} onClick={()=> history.push(props.path)}>{props.children}</p>
}

class Home extends Component {
  
  constructor() {
    super()
    document.body.style.overflow = 'hidden'
    
    this.state = {
      isVideoModalOn: false,
      isLandingVisible: true
    }

    this.toggleVideoModal = this.toggleVideoModal.bind(this)
    this.closeLanding = this.closeLanding.bind(this)
  }

  componentDidMount = () => {
    // this.cookies = new Cookies()
    // if(this.cookies.get('visitedLanding') !== undefined) {
    //   this.setState({
    //     isLandingVisible: false
    //   })
    // }
  }

  componentWillUnmount = () => {
    document.body.style.overflow = null
  }

  toggleVideoModal = () => {
    this.setState(prevState => ({
      isVideoModalOn: !prevState.isVideoModalOn
    }))
  }

  closeLanding = () => {
    this.setState({
      isLandingVisible: false
    }, 
    // () => {
    //   this.cookies.set('visitedLanding', true, { path: '/' })
    // }
    )
  }

  render = () => {
    return (
      
      this.state.isLandingVisible ?
        <Landing action={this.closeLanding}/>
        :
        <HomeLayout isLandingVisible={this.state.isLandingVisible}>
          <div className='slider-container'>
            <div className='slider-2'>
              <div className='slide-track-2'>
                <LinkedParagraph className='slide-cta' path='/works'>Watch Website</LinkedParagraph>
                <p className='slide-cta light' onClick={this.toggleVideoModal}>Watch NOPE!</p>
              </div>
              <div className='slide-track-2'>
                <LinkedParagraph className='slide-cta' path='/works'>Watch Website</LinkedParagraph>
                <p className='slide-cta light' onClick={this.toggleVideoModal}>Watch NOPE!</p>
              </div>
                <div className='slide-track-2'>
                <LinkedParagraph className='slide-cta' path='/works'>Watch Website</LinkedParagraph>
                <p className='slide-cta light' onClick={this.toggleVideoModal}>Watch NOPE!</p>
              </div>
            </div>

          </div>
          {/* <div className='slider'>
            <div className='slide-track'>
              <div className='slide cta cta-dark'><Link to='/works'>Watch Website</Link></div>
              <div className='slide cta cta-light' onClick={this.toggleVideoModal}>Watch NOPE!</div>
              <div className='slide cta cta-dark'><Link to='/works'>Watch Website</Link></div>
              <div className='slide cta cta-light' onClick={this.toggleVideoModal}>Watch NOPE!</div>
              <div className='slide cta cta-dark'><Link to='/works'>Watch Website</Link></div>
            </div>
          </div> */}
          <VideoModal
            visibility={this.state.isVideoModalOn ? 'visible' : 'hidden'}
            toggleVideoModal={this.toggleVideoModal}
            url={data['nope!'].vimeo}
          />
        </HomeLayout>
    )
  }
}

export default Home