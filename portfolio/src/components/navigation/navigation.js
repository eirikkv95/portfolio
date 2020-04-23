import React from 'react';
import classes from './navigation.module.scss'
import { ReactComponent as Moon } from '../../assets/svg/moon.svg';
import { ReactComponent as Sun } from '../../assets/svg/sun.svg';
import ArrowDown from '../../assets/svg/navArrow.js';



function Navigation(props) {


    console.log(props.theme)
    return (
        <div className={classes.header}>
            <nav className={classes.nav}>
                <div className={classes.navItems}>
                    <Moon className={classes.moon} />
                    <a href="#">HOME</a>
                    <a href="#">ABOUT <span><ArrowDown /></span></a>

                    <Sun className={classes.sun} onClick={props.toggleTheme} />

                </div>
            </nav>
        </div>
    )
}




export default Navigation;