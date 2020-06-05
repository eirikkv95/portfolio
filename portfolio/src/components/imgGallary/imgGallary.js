import React, { useState } from 'react';
import classes from './imgGallary.module.scss'

import Volleyball from '../../assets/images/volleyball.jpg'
import Gaming from '../../assets/images/gaming.jpg'
import Coding from '../../assets/images/coding.jpg'
import ImgCard from './imgCard/imgCard';
import RightArrow from '../../assets/svgComponents/rightArrow.js';
import LeftArrow from '../../assets/svgComponents/leftArrow.js';
import ImgNumber from './imgNumber/imgNumber';

const ImageGallary = () => {
    const [images, setImages] = useState(
        [
            {
                "index": 0,
                "nr": 1,
                "img": Volleyball,
                'heading': 'Volleyball for NTNUI-Gjøvik',
                "text": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex harum id dolorem sapiente unde rem, eaque consequatur quasi consectetur nihil nisi aut! Consequuntur, facere architecto. Placeat quisquam iste iure?'

            },
            {
                "index": 1,
                "nr": 2,
                'img': Gaming,
                "heading": "Gaming is one of my hobbies",
                "text": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex harum id dolorem sapiente unde rem, eaque consequatur quasi consectetur nihil nisi aut! Consequuntur, facere architecto. Placeat quisquam iste iure?'
            },
            {
                'index': 2,
                "nr": 3,
                'img': Coding,
                "heading": 'Where did it start?',
                'text': "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex harum id dolorem sapiente unde rem, eaque consequatur quasi consectetur nihil nisi aut! Consequuntur, facere architecto. Placeat quisquam iste iure?"
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
                {images.map(image => {
                    return (
                        <div className={classes.imageDiv} key={image.index}>
                            <img src={image.img} alt="" className={classes.image} />

                            <ImgCard text={image} />
                            <ImgNumber number={image} />

                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default ImageGallary;



