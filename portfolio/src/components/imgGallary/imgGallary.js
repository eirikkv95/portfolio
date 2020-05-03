import React, { useState, useRef, useEffect } from 'react';
import classes from './imgGallary.module.scss'

import Volleyball from '../../assets/images/volleyball.jpg'
import Gaming from '../../assets/images/gaming.jpg'
import Coding from '../../assets/images/coding.jpg'
import ImgCard from './imgCard/imgCard';
import RightArrow from '../../assets/svgComponents/rightArrow.js';
import LeftArrow from '../../assets/svgComponents/leftArrow.js';

const ImageGallary = () => {
    const [speed, setSpeed] = useState(.6);

    const [images, setImages] = useState(
        [
            {
                "index": 0,
                "img": Volleyball,
                'heading': 'Volleyball for NTNUI-Gjøvik',
                "text": 'Started to play volleyball in 2018 when NTNUI in Gjøvik offered volleyball to the students. In the beginning we where playing for fun, but made a team in 2019'
            },
            {
                "index": 1,
                'img': Gaming,
                "heading": "Gaming is one of my hobbies",
                "text": 'Up until 2013, FIFA was maybe the only game that I played. Far cry 3 changed the game for me and now I love single player games. My top 3 games: Bloodborne, Sekiro & Hollow Knight'
            },
            {
                'index': 2,
                'img': Coding,
                "heading": 'Where did it start?',
                'text': "It Started in South-Africa with my friend. I was finished with collage and did quite a few things down there. A few days before I was heading home I wondered what I was going to do in my future. My friend suggested a course on udemy and that was web development and that was in the beginning of 2017."
            }
        ]
    )
    const nextImage = () => {
        setImages(images => [images[images.length - 1], ...images.slice(0, -1)]);
    };

    const prevImage = () => {
        setImages(images => [...images.slice(1), images[0]]);
    };


    return (
        <div className={classes.gallary}>
            <div className={classes.direction}>

                <div>
                    <LeftArrow nextImage={nextImage} />
                    <RightArrow prevImage={prevImage} />
                </div>
            </div>
            <div className={classes.images}>
                {images.map(current => {
                    return (
                        <div className={classes.imageDiv} key={current.index}>
                            <img src={current.img} alt="" className={classes.image} />

                            <ImgCard text={current} />

                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default ImageGallary;



