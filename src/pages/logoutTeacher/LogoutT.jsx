import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Header from '../../components/header/Header'; 
import Result from './result/Result'; // Bu yerda barcha studentlar ro'yxati chiqadi

const LogoutT = () => {
  return (
    <div>
      {/* <Header />  */}
      <main style={{ padding: '20px' }}>
        <Routes>
          {/* O'qituvchi kirishi bilan natijalar jadvalini ko'radi */}
          <Route path="/" element={<Result />} /> 

          {/* Agar navigate('/result') ishlatilsa ham shu sahifaga tushadi */}
          <Route path="/result" element={<Result />} /> 
          
          {/* Kelajakda boshqa sahifalar qo'shilsa shu yerga yoziladi */}
        </Routes>
      </main>
    </div>
  );
};

export default LogoutT;