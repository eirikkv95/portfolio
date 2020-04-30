import React from 'react';
import classes from './header.module.scss';


const Header = () => {
    return (
        <section className={classes.header}>
            <div className={classes.heading}>
                Velkommen til ØD
            </div>
            <div className={classes.paragraph}>
                This is truly your time to shine bright like a diamond & we will not dissapoint
                because you are who you are!
            </div>
            <div className={classes.button}>
                <p>Get To Know Me</p>
            </div>
        </section>

    );
}

export default Header;