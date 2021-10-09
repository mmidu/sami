import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import ScrollCTA from './ScrollCTA';

class Landing extends Component {

    constructor() {
        super()
        this.canvasRef = React.createRef();
        this.animation = {}
        this.img = new Image()
        this.state = {
            active: true
        }
        
        this.handleScroll = this.handleScroll.bind(this)
        this.handleUnload = this.handleUnload.bind(this)
    }

    handleUnload = e => {
        window.scrollTo(0, 0)
    }

    handleScroll = e => {
        const html = document.body

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        const maxScrollTop = html.scrollHeight - window.innerHeight
        const scrollFraction = scrollTop / maxScrollTop

        const totFrameIndex = Math.min(
            this.animation.maxTotalFrame - 1,
            Math.ceil(scrollFraction * this.animation.maxTotalFrame)
        )

        const frameIndex = totFrameIndex - this.animation.minTotalFrame

        requestAnimationFrame(() => this.updateImage(Math.min(frameIndex + 1, this.animation.frameCount - 1)))

    }

    updateImage = index => {
        if(this.state.active){
            if (index >= this.animation.maxTotalFrame) {
                this.canvasRef.current.className += 'canvasZoom'
                document.getElementById('root').className = 'canvasZoom'
                this.setState({
                    active: false
                }, () => {
                    setTimeout(() => {
                        this.props.action()
                        document.getElementById('root').className = ''
                    }, 1200)
                })
            }
            this.img.src = this.animation.currentFrame(index)
        }
    }

    componentDidMount() {
        window.addEventListener('beforeunload', this.handleUnload)
        window.addEventListener('scroll', this.handleScroll)
        this.context = this.canvasRef.current.getContext('2d', {alpha: !0})
        this.context.imageSmoothingEnabled = true

        this.animation = {
            frameCount: 120,
            minTotalFrame: 0,
            maxTotalFrame: 119,
            currentFrame: index => (
                process.env.PUBLIC_URL + '/images/landing-frames/SHOTPERSITO_' + index.toString().padStart(5, '0') + '.jpg'
            )
        }

        this.preloadImages(this.animation)

        this.img.src = this.animation.currentFrame(1)
        this.canvasRef.current.width = 1920
        this.canvasRef.current.height = 1080

        this.img.onload = () => {
            if(this.canvasRef.current){
                try {
                    this.context.clearRect(0, 0, 1920, 1080)
                    this.context.drawImage(this.img, 0, 0)
                } catch {
                    console.log('canvas deleted')
                }
            }
        }
    }

    preloadImages(animation) {
        for (let i = 0; i < animation.frameCount; i++) {
            const img = new Image()
            img.src = animation.currentFrame(i)
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('beforeunload', this.handleUnload)
    }

    render() {
        return (
            <React.Fragment>
                {<Helmet>
                    <style>
                        {`
                        body {
                            height: 1000vh;
                            background: #fff;
                            overscroll-behavior: none;
                            -webkit-overflow-scrolling: touch;
                            overflow: scroll !important;
                        }

                    `}
                    </style>
                </Helmet>}
                <canvas id='frames-scroll' ref={this.canvasRef}></canvas>
                <ScrollCTA active={this.state.active}/>
            </React.Fragment >
        )
    }
}

export default Landing