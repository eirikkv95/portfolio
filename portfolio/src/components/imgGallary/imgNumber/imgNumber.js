import React from 'react'
import classes from './imgNumber.module.scss';

const ImgNumber = (props) => {
    return (

        <div className={classes.imgNumber}>
            <span> #{props.number.nr}</span>
        </div>

    );
}

export default ImgNumber;