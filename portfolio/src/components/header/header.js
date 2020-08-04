import React from 'react';
import classes from './header.module.scss';


const Header = () => {

    return (
        <section className={classes.header}>
            <div className={classes.heading}>
                <h1>ØD</h1>
            </div>
            <div className={classes.paragraph}>
                <p>Heisann! Mitt navn er Eirik og jeg har nylig fullført bachelorgraden min i Webutvikling ved NTNU Gjøvik, og begynner dermed jakten på min første jobb som nyutdannet webutvikler. </p>
            </div>

        </section>

    );
}

export default Header;