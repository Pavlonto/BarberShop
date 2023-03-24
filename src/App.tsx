import React, { useState } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom'
import Burger from './components/Header/Burger/Burger';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Special from './components/Header/Burger/Special/Special';
import AboutUs from './components/Header/Burger/AboutUs/AboutUs';
import Contacts from './components/Header/Burger/Contacts/Contacts';
import Price from './components/Header/Burger/Price/Price';

function App() {

  const [burgerMode, setBurgerMode] = useState(false)
  const [scroll, setScroll] = useState(true)

  return (
    <div className="App">
      <div className={"wrapper"} style={scroll ? {} : {height: "100vh", overflow: "hidden", position: "fixed", left: "0", width: "100%"}}>
        <Burger burgerMode={burgerMode} setBurgerMode={setBurgerMode} scroll={scroll} setScroll={setScroll} />
        <Header burgerMode={burgerMode} setBurgerMode={setBurgerMode} scroll={scroll} setScroll={setScroll} />
        <Routes>
          <Route path={'/'} element={<Navigate to={'/BarberShop/main'}/>} />
          <Route path={'/BarberShop'} element={<Navigate to={'/BarberShop/main'}/>} />
          <Route path={'/BarberShop/main'} element={<Main/>} />
          <Route path={'/BarberShop/about'} element={<AboutUs/>} />
          <Route path={'/BarberShop/price'} element={<Price/>} />
          <Route path={'/BarberShop/special'} element={<Special/>} />
          <Route path={'/BarberShop/contacts'} element={<Contacts/>} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;