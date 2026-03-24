import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResults } from '../../provider/Provider'; // Providerni import qilish
import * as S from './login.styles'; 
import logo from './assets/photo_2026-03-24_13-09-34-removebg-preview.png'; 

const LoginS = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  const { loginUser } = useResults(); // Providerdan login funksiyasini olish

  const handleStart = (e) => {
    e.preventDefault();
    
    if (username.trim() && phone.trim()) {
      // 1. O'quvchi ma'lumotlarini Providerga yuborish
      const userData = {
        name: username,
        phone: phone,
        loginTime: new Date().toLocaleString()
      };
      
      loginUser(userData);

      // 2. Student dashboardga yo'naltirish
      navigate('/student');
    } else {
      alert("Iltimos, ismingizni va telefon raqamingizni kiriting!");
    }
  };

  return (
    <S.MainContainer>
      <S.Overlay />
      
      <S.Header>
        <S.Logo src={logo} alt="IELTS CDI MOCK" />
      </S.Header>

      <S.Content>
        <S.Title>Welcome</S.Title>
        <S.Description>
          Assalomu aleykum, xush kelibsiz! <br />
          IELTS Mock testini boshlash uchun ma'lumotlaringizni kiriting.
        </S.Description>

        <S.Form onSubmit={handleStart}>
          <S.InputWrapper>
            <S.Icon className="far fa-user"></S.Icon>
            <S.Input 
              type="text" 
              placeholder="Full Name (Ism va Familiya)" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Icon className="fas fa-phone-alt"></S.Icon>
            <S.Input 
              type="text" 
              placeholder="Phone Number (Telefon)" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required 
            />
          </S.InputWrapper>

          <S.StartButton type="submit">START TEST</S.StartButton>
        </S.Form>
      </S.Content>

      <S.AdminButton onClick={() => navigate('/loginteacher')}>
        <i className="fas fa-user-cog"></i> Admin Panel
      </S.AdminButton>
    </S.MainContainer>
  );
};

export default LoginS;