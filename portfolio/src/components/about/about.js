import React, { useRef } from 'react';
import classes from './about.module.scss';
import Eirik from '../../assets/images/eirikNew.jpg';
import Sparkles from '../sparkle/sparkles';

const About = () => {
  let section = useRef('');

  console.log(section);

  return (
    <section className={classes.about} ref={section}>
      <div className={classes.image}>
        <figure>
          <img src={Eirik} alt="bilde of Eirik Kalvø Vattøy" />
        </figure>
      </div>

      <div className={classes.info}>
        <h2>Hvem er jeg</h2>
        <p>
          Jeg er en 25 år gammel mann fra Ulsteinvik som er spesielt interessert
          i <Sparkles>UI</Sparkles> og vil gjerne gjøre internett bedre for
          alle. Jeg har en Bachelor i Web Utvikling og er for øyeblikket på jakt
          etter min første jobb som nyutdannet webutvikler.{' '}
        </p>

        <p>
          Jeg vil anse meg selv som en lojal, avslappet og samarbeidsvillig
          person som liker en utfordring. Selv om jeg kan være litt sjenert i
          starten, blir jeg fort varm i trøya.
        </p>
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
};

export default About;
