import React from 'react'
import Header from './Header'
import Navigation from './Navigation'

const TextLayout = ({ children }) => {
    return (
        <React.Fragment>
            <div className='sideSx'>
                <Header />
                <Navigation />
            </div>
            <div className='contTxt'>
                <main>{children}</main>
            </div>
        </React.Fragment>
    )
}
export default TextLayout
