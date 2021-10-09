import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import SiteLayout from '../components/SiteLayout'
import Work from '../components/Work'
import data from '../works.json'

class Works extends Component {
  constructor() {
    super()
    this.state = {
      workRefs: Object.keys(data).map(() => {
        if (data.visible) {
          return React.createRef()
        }
        return null
      }),
      currentWork: 1,
      workTitles: Object.keys(data).map(title => {
        if (data[title].visible) {
          return title
        }
        return null
      }),
      visibleTitle: null,
      titleClasses: 'workTit play'
    }
    this.setVisibleTitle = this.setVisibleTitle.bind(this)
  }

  componentDidMount = () => {
    this.workImages = [
      document.getElementsByClassName('imageRandom-0'),
      document.getElementsByClassName('imageRandom-1'),
      document.getElementsByClassName('imageRandom-2'),
      document.getElementsByClassName('imageRandom-3')
    ]
    this.updateImageVisibility()
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)

  }

  getIsInViewport = (boundingRect) => {
    return boundingRect.top < window.innerHeight && boundingRect.bottom > 0 && boundingRect.bottom >= window.innerHeight / 2
  }

  handleScroll = () => {
    this.updateImageVisibility()
  }

  setVisibleTitle = (title) => {
    // this.
    this.setState(prevState => {
      if (prevState.titleClasses !== 'workTit stop hide') {
        return {
          titleClasses: 'workTit stop hide'
        }
      }
    }, () => {
      setTimeout(() => {
        this.setState({
          visibleTitle: title,
          titleClasses: 'workTit play'
        })
      }, 500)
    })
  }

  updateImageVisibility = () => {
    for (let i = 0; i < this.workImages.length; i++) {
      for (let workImage of this.workImages[i]) {
        const boundingRect = workImage.getBoundingClientRect()
        const isInViewport = this.getIsInViewport(boundingRect)

        if (isInViewport) {
          workImage.classList.add('inViewport')
        }
      }
    }
  }

  render() {
    return (
      <SiteLayout>
        <div ref={this.workTitleRef} className={this.state.titleClasses}>
          {
            this.state.visibleTitle ? <Link to={'/works/' + this.state.visibleTitle.toLowerCase()}>{this.state.visibleTitle.toUpperCase()}</Link> : null
          }
        </div>
        {/* <ScrollContainer> */}
          {
            Object.keys(data).map((elem, index) => {
              if (data[elem].visible) {
                return <Work
                  key={'work-' + index}
                  ref={this.state.workRefs[index]}
                  title={this.state.workTitles[index]}
                  images_folder={data[elem].images_folder}
                  images={data[elem].images}
                  vimeo={data[elem].vimeo}
                  setVisibleTitle={this.setVisibleTitle}
                />
              }
              return null
            })
          }
        {/* </ScrollContainer> */}
        {/* <div className={`workTit ${this.state.titleVisible ? 'play' : 'stop hide'} ${this.props.title.length > 10 ? 'longTitle' : ''}`}>
            <Link to={'/works/' + this.props.title.toLowerCase()}>{this.props.title.toUpperCase()}</Link>
          </div> */}

        <Footer></Footer>
      </SiteLayout>
    )
  }
}

export default Works
