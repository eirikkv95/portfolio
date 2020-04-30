import React from 'react';
import './assets/scss/base.scss';
import classes from './app.module.scss'
import Navigation from './components/navigation/navigation';
import Header from './components/header/header'
import About from './components/about/about';
import { ParallaxProvider } from 'react-scroll-parallax';
import ImageGallary from './components/imgGallary/imgGallary';

function App() {

  const body = document.body;
  // apply the cached theme on reload
  const theme = localStorage.getItem('theme');

  if (theme) {
    body.classList.add(theme);
  }
  const toggleTheme = () => {

    if (body.classList.contains('darkMode')) {
      body.classList.replace('darkMode', 'lightMode');
      localStorage.setItem('theme', 'lightMode');
    } else {
      body.classList.replace('lightMode', 'darkMode');
      localStorage.setItem('theme', 'darkMode');
    }
  }

  return (
    <div className={classes.layout}>
      <Navigation toggleTheme={toggleTheme} theme={theme} />
      <ParallaxProvider>
        <Header />
        <About />
        <ImageGallary />
      </ParallaxProvider>
    </div>
  );
}

export default App;
