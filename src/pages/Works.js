import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import SiteLayout from '../components/SiteLayout'
import Work from '../components/Work'
import data from '../works.json'

class Works extends Component {
  constructor() {
    super()

    this.state = {
      workRefs: Object.keys(data).map(title => {
        if (data[title].visible) {
          return React.createRef()
        }
        return null
      }),
      imageRefs: Object.keys(data).map(title => {
        if (data[title].visible) {
          let workImagesRefs = []
          for (const image in data[title].images) {
            workImagesRefs.push(React.createRef())
          }
          return workImagesRefs
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
    this.setImagesVisibility()
    this.updateTitle()
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)

  }

  getIsInViewport = (boundingRect) => {
    return boundingRect.top < window.innerHeight && boundingRect.bottom > 0 && boundingRect.bottom >= window.innerHeight
  }

  handleScroll = () => {
    this.setImagesVisibility()
    this.updateTitle()
  }

  setImagesVisibility = () => {
    this.state.imageRefs.forEach(workImages => {
      workImages.forEach(image => {
        if (image.current.getIsInViewport()) {
          image.current.setVisible()
        }
      })
    })
  }

  updateTitle = () => {
    this.state.workRefs.forEach(workRef => {
      if (workRef.current.getTitleVisibility()) {
        this.setVisibleTitle(workRef.current.getTitle())
      }
    })
  }

  setVisibleTitle = (title) => {
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
          titleClasses: 'workTit play' + (title.length > 10 ? ' longTitle' : '')
        })
      }, 500)
    })
  }

  render() {
    return (
      <SiteLayout>
        <Helmet>
          {
            <style>
              {`
                        body{
                            /*GRADIENT*/
                            background: rgba(0, 0, 0, 0) -webkit-linear-gradient(0deg, #F4FCFF 0%, #d9cafca1) repeat scroll 0 0;
                            background: rgba(0, 0, 0, 0) -webkit-linear-gradient(0deg, #F4FCFF 0%, #d9cafca1) repeat scroll 0 0;
                            background: rgba(0, 0, 0, 0) linear-gradient(0deg, #F4FCFF 0%, #d9cafca1) repeat scroll 0 0;
                            background: linear-gradient(0deg, #F4FCFF, #D9CAFC);
                            background-size: auto;
                            background-size: 600% 600%;
                            -webkit-animation: horizon 8s ease infinite;
                            -moz-animation: horizon 8s ease infinite;
                            animation: horizon 8s ease infinite;
                        }
                        @-webkit-keyframes horizon {
                            0%{background-position:59% 0%}
                            50%{background-position:42% 100%}
                            100%{background-position:59% 0%}
                        }
                        @-moz-keyframes horizon {
                            0%{background-position:59% 0%}
                            50%{background-position:42% 100%}
                            100%{background-position:59% 0%}
                        }
                        @-o-keyframes horizon {
                            0%{background-position:59% 0%}
                            50%{background-position:42% 100%}
                            100%{background-position:59% 0%}
                        }
                        @keyframes horizon {
                            0%{background-position:59% 0%}
                            50%{background-position:42% 100%}
                            100%{background-position:59% 0%}
                        }
                    `}
            </style>
          }
        </Helmet>
        <div ref={this.workTitleRef} className={this.state.titleClasses}>
          {
            this.state.visibleTitle ? <Link to={'/works/' + this.state.visibleTitle.toLowerCase()}>{this.state.visibleTitle.toUpperCase()}</Link> : null
          }
        </div>
        {
          Object.keys(data).map((elem, index) => {
            if (data[elem].visible) {
              return <Work
                key={'work-' + index}
                ref={this.state.workRefs[index]}
                workImagesRefs={this.state.imageRefs[index]}
                title={this.state.workTitles[index]}
                images_folder={data[elem].images_folder}
                images={data[elem].images}
                vimeo={data[elem].vimeo}
                index={index}
              />
            }
            return null
          })
        }
        <Footer></Footer>
      </SiteLayout>
    )
  }
}

export default Works
