import React from 'react'

const Footer = (props) => {
    // console.log(props)
    return (
        <div className='footer' onClick={() => {window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
          })}}>
            <h5>back to the top</h5>
        </div>
    )
}
export default Footer