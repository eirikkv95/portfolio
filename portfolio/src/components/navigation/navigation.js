import React, { useState } from 'react';
import classes from './navigation.module.scss'
import './navigation.scss';

import { ReactComponent as Sun } from '../../assets/svg/sun.svg';
import Od from '../logo/logo';
import SideNav from './sideNav/sideNav';



function Navigation(props) {
    const [activeLink, setActiveLink] = useState(1);
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const links = [
        {
            id: 1,
            name: 'home'
        }
    ];

    const handleClass = (id) => {
        setActiveLink(id);
    }

    const toggleSideNav = () => {
        setSideDrawerOpen(!sideDrawerOpen);
    }

    return (
        <div className={classes.header}>
            <nav className={classes.nav}>
                <div className={classes.navItems}>
                    <Od />

                    {
                        links.map(link => {
                            return (

                                <a
                                    key={link.id}
                                    href="./"
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
                    {sideDrawerOpen ?
                        (
                            <div className={classes.crosses} onClick={toggleSideNav} >
                                <span className={classes.cross}></span>
                            </div>
                        ) :
                        (
                            <div className={classes.hamburger} onClick={toggleSideNav} >
                                <span className={classes.bars}></span>
                            </div>
                        )}
                    <Sun className={classes.sun} onClick={props.toggleTheme} />
                </div>
            </nav>

            <SideNav links={links} sideDrawerOpen={sideDrawerOpen} toggle={toggleSideNav} />

        </div>
    )
}




export default Navigation;


