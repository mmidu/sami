import React from 'react'

const Header = (props) => {
    // console.log(props)
    return (
        <div className={`logo ${props.isLandingVisible ? '' : 'visible'}`}>
            <h1><a href={process.env.PUBLIC_URL + '/'} onClick={(e) => {e.preventDefault(); setTimeout(() => {window.location.href = process.env.PUBLIC_URL + '/'}, 1000)}}>Sami</a></h1>
        </div>
    )
}
export default Header