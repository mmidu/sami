import React, { Component } from 'react'
import TextLayout from '../components/TextLayout'

class Contacts extends Component {
    render() {
        return (
            <TextLayout>
                <div className="txtContacts">
                    GOT QUESTIONS?
                    <span>Let's talk</span>
                    <ul>
                        <li>Email: <a href="mailto:samischinaia@gmail.com">samischinaia@gmail.com</a></li>
                        <li>IG: <a  target="_blank" href="https://www.instagram.com/alwaysthesam/" rel="noreferrer">Alwaysthesam</a></li>
                
                    </ul>
                </div>
            </TextLayout>
        )
    }
}

export default Contacts