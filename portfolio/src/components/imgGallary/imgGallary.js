import React, { useState } from 'react';
import classes from './imgGallary.module.scss'

import Volleyball from '../../assets/images/volleyball.jpg'
import Gaming from '../../assets/images/gaming.jpg'
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
                "text": 'Startet å spille volleball for NTNUI-Gjøvik høsten 2018. Ble med på mange forskjellige turneringer rundt om i oslo området og laget gjorde en god jobb i serien.'

            },
            {
                "index": 1,
                "nr": 2,
                'img': Gaming,
                "heading": "Gaming ",
                "text": 'Gaming har vært en stor del av oppveksten og det hele startet med pokemon. Det har blitt mye fifa men i 2017 sa det stopp og jeg fikk øynene opp for single player spill. Top 3 spill: Bloodborne, sekiro og Dark souls'
            },

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
            <div className={classes.direction}>

                <div>
                    <LeftArrow nextImage={nextImage} />
                    <RightArrow prevImage={prevImage} />
                </div>
            </div>

        </div>
    );
}

export default ImageGallary;



