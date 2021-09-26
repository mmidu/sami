import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Work extends Component {
    ref = React.createRef()

    constructor() {
        super()

        this.state = {
            'titleVisible': false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
        this.setState(prevState => {
            return {
                titleVisible: this.getTitleVisibility()
            }
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        this.setState({
                titleVisible: this.getTitleVisibility()
        })
    }

    getTitleVisibility = () => {
        if (this.ref.current) {
            let boundingRect = this.ref.current.getBoundingClientRect()
            
            return boundingRect.top < window.innerHeight / 2 && boundingRect.bottom > 0 && boundingRect.bottom >= window.innerHeight / 2    
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className={`workTit ${this.state.titleVisible ? 'play' : 'hidden'}`}>
                    <Link to={'/works/' + this.props.title.toLowerCase()}>{this.props.title.toUpperCase()}</Link>
                </div>
                <div ref={this.ref} className='blockWork'>
                    {
                        this.props.images.map((elem, index) => {
                            return (
                                <div key={'image-' + index} className={'imageRandom-' + index}>
                                    <img src={process.env.PUBLIC_URL + '/images/' + elem} alt={'image-' + index} />
                                </div>
                            )
                        })
                    }
                </div>
            </React.Fragment>

        )
    }

}

export default Work