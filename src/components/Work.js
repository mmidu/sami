import React, { Component, useState } from 'react'


const WorkImage = (props) => {

    const [isInViewport, setIsInViewport] = useState(false)

    const getIsInViewport = (boundingRect) => {
        return boundingRect.top < window.innerHeight / 2 && boundingRect.bottom > 0 && boundingRect.bottom >= window.innerHeight / 2
    }
    
    return (
        <div ref={el => {
            if (!el) return
            const boundingRect = el.getBoundingClientRect()
            setIsInViewport(getIsInViewport(boundingRect))

          }} className={`workImage imageRandom-${props.index} ${isInViewport ? ' inViewport' : ''}`}
            onClick={props.onClick}
          >
            <img src={process.env.PUBLIC_URL + '/images/' + props.folder + '/' + props.name} alt={'image-' + props.index} />
        </div>
    )
}

class Work extends Component {
    ref = React.createRef()

    constructor() {
        super()

        this.state = {
            titleVisible: false,
            // hidden: true,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
        const titleVisible = this.getTitleVisibility()
        // this.setState({
        //     titleVisible: titleVisible,
        //     hidden: !titleVisible
        // })
        console.log(titleVisible)
        if(titleVisible){
            this.props.setVisibleTitle(this.props.title)
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        const titleVisible = this.getTitleVisibility()
        
        this.setState(prevState => {
            if(prevState.titleVisible !== titleVisible) {
                if(titleVisible) {
                    this.props.setVisibleTitle(this.props.title)
                }
                return {
                    titleVisible: titleVisible
                }
            }
        })
        // this.setState(prevState => {
        //     if (prevState.titleVisible !== titleVisible) {
        //         if (prevState.titleVisible) {
        //             // console.log('showing')
        //             return {
        //                 titleVisible: titleVisible,
        //                 hidden: false
        //             }
        //         } else {
        //             // console.log('hiding')
        //             this.props.setVisibleTitle(this.props.title)
        //             return {
        //                 titleVisible: titleVisible,
        //                 hidden: !titleVisible
        //             }
        //         }
        //     }
        //     return null
        // })

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
                <div ref={this.ref} className='blockWork'>
                    {
                        this.props.images.map((elem, index) => {
                            return (
                                <WorkImage key={index} index={index} folder={this.props.images_folder} name={elem} onClick={() => {window.location.href = process.env.PUBLIC_URL + '/works/' + this.props.title.toLowerCase()}}/>
                            )
                        })
                    }
                </div>
            </React.Fragment>

        )
    }

}

export default Work