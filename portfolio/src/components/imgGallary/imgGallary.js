import React from 'react';
import classes from './imgGallary.module.scss'

import Volleyball from '../../assets/images/volleyball.jpg'
import Gaming from '../../assets/images/gaming.jpg'
import Coding from '../../assets/images/coding.jpg'

const ImageGallary = () => {


    const imageText = [
        {
            img: { Volleyball },
            heading: "Played volleyball for NTNUI Gjøvik",
            text: "PLayed indoor volleyball for 1.5 year for NTNUI Gjøivk. Did not get to play the last game for the season since the corona viruse ruined it all"
        },
        {
            img: { Gaming },
            heading: "Gaming my whole life",
            text: "Gaming have always been there, in my life. Played fifa most the times but after 2013 I discovered the beauty of single player games like Bloodboorne, Sekiro & Hollow Knight"
        },
        {
            img: { Coding },
            heading: "It all happened in South Africa",
            text: "My friend and I where doing all sorts of stuff in south africa. One day he suggested a course on udemy and I have not looked back since"
        }
    ]

    imageText.forEach(img => {
        console.log(img.heading)
    })


    return (
        <div className={classes.gallary}>
            please help me
            {/* img gallary goes here */}
            {
                imageText.forEach(img => {
                    return <h2>{img.heading}</h2>
                })
            }

        </div>
    );
}

export default ImageGallary;