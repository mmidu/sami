import React from 'react'

const Header = (props) => {
    // console.log(props)
    return (
        <div className={`logo ${props.isLandingVisible ? '' : 'visible'}`}>
            <h1><a href='/' onClick={(e) => {e.preventDefault(); setTimeout(() => {window.location.href = '/'}, 1000)}}>Sami</a></h1>
        </div>
    )
}
export default Header