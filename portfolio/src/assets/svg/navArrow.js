

import React from 'react';
import classes from './navArrow.module.scss';

const NavArrow = () => {
    return (
        <>
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={classes.arrow} d="M8 11L0.205771 0.5L15.7942 0.499998L8 11Z" />
            </svg>

        </>
    );
}

export default NavArrow;
