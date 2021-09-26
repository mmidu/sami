import React, { Component } from 'react'
import Work from '../components/Work'
import data from '../works.json'


class Works extends Component {
  constructor() {
    super()
    
    this.state = {
      workRefs: data.map(() => {
        return React.createRef()
      }),
      currentWork: 1,
      workTitles: data.map(elem => {
        return elem.title
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        {
          data.map((elem, index) => {
            return <Work 
                      id={index}
                      ref={this.state.workRefs[index]} 
                      title={this.state.workTitles[index]}
                      images={elem.images}
                    />
          })
        }
      </React.Fragment>
    )
  }
}

export default Works