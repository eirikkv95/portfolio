import React from 'react';
import classes from './header.module.scss';

// General scroll to element function

const Header = () => {

    return (
        <section className={classes.header}>
            <div className={classes.heading}>
                Welcome to ØD
            </div>
            <div className={classes.paragraph}>
                Sorry for the dust! We know it’s taking a while but sit tight and we’ll be with you soon
            </div>
            <div className={classes.button}>
                <p>Get To Know Me</p>
            </div>
        </section>

    );
}

export default Header;