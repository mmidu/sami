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

  componentDidMount = () => {
    this.workImages = [
      document.getElementsByClassName('imageRandom-0'),
      document.getElementsByClassName('imageRandom-1'),
      document.getElementsByClassName('imageRandom-2'),
      document.getElementsByClassName('imageRandom-3')
    ]
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)

  }

  getIsInViewport = (boundingRect) => {
    return boundingRect.top < window.innerHeight && boundingRect.bottom > 0 && boundingRect.bottom >= window.innerHeight / 2
  }

  handleScroll = () => {
    for (let i = 0; i < this.workImages.length; i++) {
      for (let workImage of this.workImages[i]) {
        const boundingRect = workImage.getBoundingClientRect()
        const isInViewport = this.getIsInViewport(boundingRect)

        if(isInViewport) {
          workImage.classList.add('inViewport')
        } else {
          workImage.classList.remove('inViewport')
        }
      }
    }
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
                vimeo={data[elem].vimeo}
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
