import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/header/Header'; 
import Home from './sections/Sectiom'; 
import Reading from './reading/Reading';
import Listening from './listening/LIstening';
import Writing from './writing/Writing';
// import Speaking from './speaking/Speaking';

const LogoutS = () => {
  return (
    <div>
      <main>
        <Routes>
          {/* 1. Section (Home) sahifasi - BU YERDA HEADER YO'Q */}
          <Route path="/" element={
            <div style={{ padding: '20px' }}>
              <Home />
            </div>
          } /> 

          {/* 2. Testlar sahifasi - BU YERDA HEADER BOR */}
          <Route path="/reading" element={
            <>
              <Header />
              <Reading />
            </>
          } />
          
          <Route path="/listening" element={
            <>
              <Header />
              <Listening />
            </>
          } />
          
          <Route path="/writing" element={
            <>
              <Header />
              <Writing />
            </>
          } />
          
          {/* <Route path="/speaking" element={
            <>
              <Header />
              <Speaking />
            </>
          } /> */}
        </Routes>
      </main>
    </div>
  );
};

export default LogoutS;