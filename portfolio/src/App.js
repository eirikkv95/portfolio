import React from 'react';
import './assets/scss/base.scss';

import Navigation from './components/navigation/navigation';
import Header from './components/header/header';
import About from './components/about/about';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
    </>
  );
}

export default App;
