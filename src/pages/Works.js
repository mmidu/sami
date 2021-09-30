import React, { Component } from 'react'
import SiteLayout from '../components/SiteLayout'
import Work from '../components/Work'
import data from '../works.json'

            
class Works extends Component {
  constructor() {
    super()
    
    this.state = {
      workRefs: Object.keys(data).map(() => {
        return React.createRef()
      }),
      currentWork: 1,
      workTitles: Object.keys(data).map(title => {
        return title
      })
    }
  }

  render() {
    return (
      <SiteLayout>
        {
          Object.keys(data).map((elem, index) => {
            return <Work 
                      key={'work-' + index}
                      ref={this.state.workRefs[index]} 
                      title={this.state.workTitles[index]}
                      images={data[elem].images}
                    />
          })
        }
      </SiteLayout>
    )
  }
}

export default Works
