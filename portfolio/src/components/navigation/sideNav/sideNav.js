import React from 'react'
import classes from './sideNav.module.scss';
import Social from './socialNav/social';

const SideNav = (props) => {

    return props.sideDrawerOpen ? (
        <div className={classes.sideNav}>
            <div className={classes.links}>
                <ul>
                    <li>
                        <a href="./" onClick={props.toggle}>Home</a>
                    </li>
                </ul>

                <Social />

            </div>
        </div>
    ) :
        (
            <>
            </>
        )
}

export default SideNav;