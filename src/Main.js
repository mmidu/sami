import React, { Component } from 'react'
import {
    Route,
    BrowserRouter,
    Switch
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Works from './pages/Works'
import Work from './pages/Work'
import './Main.css'
import { Helmet } from 'react-helmet'

class Main extends Component {
    render() {
        const updatePadding = !!window.chrome || /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        return (
            <BrowserRouter basename={'/'}>
                {updatePadding ? <Helmet><style>{`
                    .footer svg {
                        display: block;
                        margin: 0 auto;
                        width: 65px;
                    }
                    .footer {
                        padding-bottom: 6em;
                    }
                `}</style></Helmet>:''}
                <Switch>
                    <Route path={['/about', '/works', '/contacts']}>
                            <Switch>
                                    <Route path='/works/:name' component={Work} />
                                    <Route exact path='/works' component={Works} />
                                    <Route path='/about' component={About} />
                                    <Route path='/contacts' component={Contacts} />
                            </Switch>
                    </Route>

                    <Route path={['/']}>
                        <Switch>
                            <Route exact path='/' component={Home} />
                        </Switch>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Main
