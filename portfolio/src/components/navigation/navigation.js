import React, { useState, useRef, useEffect } from 'react';
import classes from './navigation.module.scss'
import './navigation.scss';
import { ReactComponent as Moon } from '../../assets/svg/moon.svg';
import { ReactComponent as Sun } from '../../assets/svg/sun.svg';
import ArrowDown from '../../assets/svg/navArrow.js';



function Navigation(props) {

    const links = [
        {
            id: 1,
            name: 'home'

        },
        {
            id: 2,
            name: 'about'
        }
    ];
    const [activeLink, setActiveLink] = useState(1);

    const handleClass = (id) => {
        setActiveLink(id);
    }

    return (
        <div className={classes.header}>
            <nav className={classes.nav}>
                <div className={classes.navItems}>
                    <Moon className={classes.moon} />
                    {
                        links.map(link => {
                            return (
                                <a
                                    key={link.id}
                                    href="#"
                                    onClick={() => { handleClass(link.id) }}
                                    className={`navigation-${link.name}`}>
                                    {link.name}
                                    {
                                        link.id === activeLink ? (<span className={classes.span}></span>) : ("")
                                    }
                                </a>
                            )
                        })
                    }


                    <Sun className={classes.sun} onClick={props.toggleTheme} />

                </div>
            </nav>
        </div>
    )
}




export default Navigation;


