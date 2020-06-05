import React, { useEffect, useState } from 'react'
import classes from './socialMedia.module.scss';
import Twitter from '../../assets/svgComponents/social/twitter';
import Instagram from '../../assets/svgComponents/social/instagram';
import LinkedIn from '../../assets/svgComponents/social/linkedIn';
const SocialMedia = () => {

    const [position, setPosition] = useState(0);


    const listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled = winScroll / height;
        setPosition(scrolled);
    }
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);

        return () => {
            window.removeEventListener("scroll", listenToScroll);
        }
    }, [position])
    // console.log(position)

    return (
        <div className={classes.social}>
            <Twitter />
            <Instagram />
            <LinkedIn />
        </div>)


}

export default SocialMedia;