import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

// import components

const App = () => {
  
  return(
    <div>
        <Header></Header>
        <Hero></Hero>
        <div style={{height:"2000px"}}></div>
    </div>
  );
};

export default App;
