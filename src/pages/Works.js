import React, { Component } from 'react'
import SiteLayout from '../components/SiteLayout'
import Work from '../components/Work'
import data from '../works.json'

class Works extends Component {
  constructor() {
    super()

    this.state = {
      workRefs: Object.keys(data).map(() => {
        if(data.visible) {
          return React.createRef()
        }
      }),
      currentWork: 1,
      workTitles: Object.keys(data).map(title => {
        if(data[title].visible){
          return title
        }
      })
    }
  }

  parallaxScrollImages = () => {
    for (let i = 0; i < this.workImages.length; i++) {
      for (let workImage of this.workImages[i]) {
        const bottom = workImage.getBoundingClientRect().top
        workImage.style.transform = 'translateY(' + bottom / window.innerHeight * 10 * i + '%)'
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

  handleScroll = () => {
    this.parallaxScrollImages()
  }

  render() {
    return (
      <SiteLayout>
        {
          Object.keys(data).map((elem, index) => {
            if (data[elem].visible){
              return <Work
              key={'work-' + index}
              ref={this.state.workRefs[index]}
              title={this.state.workTitles[index]}
              images={data[elem].images}
            />
            }

          })
        }
      </SiteLayout>
    )
  }
}

export default Works
