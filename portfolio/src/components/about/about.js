import React from 'react';
import classes from './about.module.scss';
import { Parallax } from 'react-scroll-parallax';
import Eirik from '../../assets/images/eirikNew.jpg'

const About = () => {
    return (
        <section className={classes.about}>
            <div className={classes.image}>
                <figure>
                    <img src={Eirik} alt="" />
                </figure>
            </div>

            <div className={classes.info}>
                <h2>Who Am I</h2>
                <p>Kar frå Ulsteinvik. I denne perioden er jeg på utkikk etter jobb innen webutvikling. Begeistret for front-end utvikling og spesielt UI(User Interface). Studerer på Gjøvik og bacheloren er ferdig til sommeren. Oslo er byen jeg håper å få meg jobb. Til syvende og sist så prøver jeg å finne ut hva jeg gjør her på denne kloden </p>
            </div>

            <div className={`${classes.backgroundText} ${classes.who}`}>
                <p>who</p>
            </div>
            <div className={`${classes.backgroundText} ${classes.am}`}>
                <p>am</p>
            </div>
            <div className={`${classes.backgroundText} ${classes.i}`}>
                <p>I</p>
            </div>
        </section>
    );
}

export default About;