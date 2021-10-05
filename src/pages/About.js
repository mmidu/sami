import React, { Component } from 'react'
import TextLayout from '../components/TextLayout'

class Stuff extends Component {
    render() {
        return (
            <TextLayout>
                <div className="txtAbout">
                    <p>Born in <b>1989</b>, is an Italian director who currently lives in Milan. In <b>2009</b>, together with Ludovico Galletti, he founded SÄMEN, an internationally successful film duo. The two began their career directing music videos: a path that led them to collaborate with some of the mainstream labels of the Italian record industry, such as Sony, Emi Music and Universal. Sami and Ludovico quickly became a point of reference for the Italian and international advertising industry, working for brands such as IKEA, Nike, Bmw, Lamborghini, Vodafone, Greenpeace, and with prominent testimonials like Usain Bolt, Bebe Vio and Gianluigi Buffon. Sami has a very recognizable touch, made unique by a polished, cinematic art aesthetic. Sami is able to create deep atmospheres, with meticulous work, continuous research in the field of photography and illuminating flashes of inspiration. While maintaining the focus on advertising, since <b>2015</b> Sami has started to give more space to his passion for the world of cinema, directing several short films that were presented during the last independent festivals. <b>2021</b> marks an important milestone for Sami, who decides to separate from the duo SÄMEN to pursue a more personal aesthetic, with an unprecedented ironic touch.</p>
                </div>
            </TextLayout>

        )
    }
}

export default Stuff