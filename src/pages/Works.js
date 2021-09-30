import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
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
      <React.Fragment>
      {<Helmet>
                <style>
                    {`
                        .sideDx {
                            text-align: unset !important;
                        }
                    `}
                </style>
            </Helmet>}
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
      </React.Fragment>
    )
  }
}

export default Works
