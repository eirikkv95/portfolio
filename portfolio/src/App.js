import React from 'react';
import './assets/scss/base.scss';

import Navigation from './components/navigation/navigation';
import Header from './components/header/header';
import About from './components/about/about';
import Todo from './components/Projects/todo';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Todo />
    </>
  );
}

export default App;
