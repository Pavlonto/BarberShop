import React, { useState } from 'react';
import './App.css';
import Burger from './components/Burger/Burger';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {

  const [burgerMode, setBurgerMode] = useState(false)

  return (
    <div className="App">
      <div className="wrapper">
        <Burger burgerMode={burgerMode} setBurgerMode={setBurgerMode} />
        <Header burgerMode={burgerMode} setBurgerMode={setBurgerMode}/>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;