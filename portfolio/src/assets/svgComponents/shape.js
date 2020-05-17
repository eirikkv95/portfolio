import React from 'react';
import classes from './shape.module.scss';

const Shape = (props) => {
    return (
        <div className={classes.shape}>
            <svg width="1101" height="369" viewBox="0 0 1101 369" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M558.5 113.499C400.9 93.8993 120.5 275.666 0 368.999H1100.5V0.5C1043 25.6667 922.3 78.6 899.5 89C871 102 755.5 137.999 558.5 113.499Z" fill="url(#paint0_linear)" />
                <defs>
                    <linearGradient id="paint0_linear" x1="565" y1="40.5" x2="538.5" y2="452" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9474C4" />
                        <stop offset="1" stopColor="#B15050" />
                    </linearGradient>
                </defs>
            </svg>

        </div >
    )


}

export default Shape;
