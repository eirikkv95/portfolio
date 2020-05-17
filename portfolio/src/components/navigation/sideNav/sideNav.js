import React, { useState } from 'react'
import classes from './sideNav.module.scss';


const SideNav = (props) => {




    return props.sideDrawerOpen ? (
        <div className={classes.sideNav}>
            <div className={classes.links}>
                <ul>
                    <li>
                        <a href="#" onClick={props.toggle}>Home</a>
                        <a href="#" onClick={props.toggle}>About</a>
                    </li>
                </ul>
            </div>
        </div>
    ) :
        (
            <>
            </>
        )
}

export default SideNav;