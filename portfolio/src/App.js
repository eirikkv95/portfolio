import React from 'react';
import './assets/scss/base.scss';
import classes from './app.module.scss';

import Navigation from './components/navigation/navigation';
import Header from './components/header/header';
import About from './components/about/about';
import ImageGallary from './components/imgGallary/imgGallary';
import Gif from './components/gif/gif';

function App() {
  return (
    <>
      <div className={classes.layout}>
        <Navigation />
        <Header />
        <About />
        <ImageGallary />
        <Gif />
      </div>
      {/* <SocialMedia /> */}
    </>
  );
}

export default App;
