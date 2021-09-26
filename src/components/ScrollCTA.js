import React from 'react'

const ScrollCTA = (props) => {
    return (
        <div className={`scrollCTAContainer`}>
            <div className={`scrollLine ${!props.active ? 'scrolled' : 'idle'}`}></div>
            <p className={`scrollCTA ${!props.active ? 'scrolled' : 'idle'}`}>SCROLL &amp; DISCOVER</p>
        </div>
    )
}
export default ScrollCTA