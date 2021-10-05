import React, { Component } from 'react'
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
      })
    }
  }

  parallaxScrollImages = () => {
    for (let i = 0; i < this.workImages.length; i++) {
      for (let workImage of this.workImages[i]) {
        const boundingRect = workImage.getBoundingClientRect()
        const isInViewport = this.getIsInViewport(boundingRect)
        workImage.style.transform = 'translateY(' + boundingRect.top / window.innerHeight * 10 * i + '%)'
        if(isInViewport) {
          workImage.classList.add('inViewport')
        }
      }
    }
  }

  componentDidMount = () => {
    this.workImages = [
      document.getElementsByClassName('imageRandom-0'),
      document.getElementsByClassName('imageRandom-1'),
      document.getElementsByClassName('imageRandom-2'),
      document.getElementsByClassName('imageRandom-3')
    ]
    this.parallaxScrollImages()
    window.addEventListener('scroll', this.handleScroll)
    this.forceUpdate()
  }

  getIsInViewport = (boundingRect) => {
    return boundingRect.top < window.innerHeight / 2 && boundingRect.bottom > 0 && boundingRect.bottom >= window.innerHeight / 2
  }

  handleScroll = () => {
    this.parallaxScrollImages()
  }

  render() {
    return (
      <SiteLayout>
        {
          Object.keys(data).map((elem, index) => {
            if (data[elem].visible) {
              return <Work
                key={'work-' + index}
                ref={this.state.workRefs[index]}
                title={this.state.workTitles[index]}
                images={data[elem].images}
              />
            }
            return null
          })
        }
      </SiteLayout>
    )
  }
}

export default Works
