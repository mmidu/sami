import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import { Helmet } from 'react-helmet'

ReactDOM.render(
    <React.Fragment>
        <Helmet>
            <style>
                {`
                body:before {
                    content: "";
                    display: block;
                    position: fixed;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -10;
                    background: url('/cs/sami/images/bgSky.jpg') no-repeat center center;
                    opacity: 0;
                    -webkit-background-size: cover;
                    -moz-background-size: cover;
                    -o-background-size: cover;
                    background-size: cover;
                }
                .frameFilm {
                    background-image: url('/cs/sami/images/nopeFrame.jpg');
                }
                @media only screen and (max-width: 40.063em) { 
                    .frameFilm {
                        background-image: url('/cs/sami/images/nopeFrameMb.jpg');
                    }
                }
                `}
            </style>
        </Helmet>
        <Main />
    </React.Fragment>
    ,
    document.getElementById('root')
)