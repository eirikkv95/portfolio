import React from 'react';
import classes from './header.module.scss';


const Header = () => {
    return (
        <section className={classes.header}>
            <div className={classes.heading}>
                Welcome to ØD
            </div>
            <div className={classes.paragraph}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae impedit facere doloribus aspernatur placeat accusantium voluptates voluptate fugiat sed consequatur fugit
            </div>
            <div className={classes.button}>
                <p>Get To Know Me</p>
            </div>
        </section>

    );
}

export default Header;