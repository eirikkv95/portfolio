import React from 'react'
import classes from './imgCard.module.scss';

const ImgCard = (props) => {
    return (

        <div className={classes.cardBox}>
            <h3>{props.text.heading}</h3>
            <p> {props.text.text} </p>
            <span>{props.text.nr}</span>
        </div>
    );
}

export default ImgCard;