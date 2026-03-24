import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './login.styles';
import logo from './assets/Logo (1).png'; // Logotip yo'li
import bgImage from './assets/5eca6921ebb58571fd35a67419b9eadd9146b9aa.jpg'; // Orqa fon rasmi yo'li

const LoginS = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleStart = (e) => {
    e.preventDefault();
    if (username && phone) {
      navigate('/student');
    } else {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
    }
  };

  return (
    <S.MainContainer bg={bgImage}>
      <S.Overlay />
      
      <S.Header>
        <S.Logo src={logo} alt="IELTS CDI MOCK" />
        {/* <S.LogoText>
          <span>IELTS</span>
          <small>CDI MOCK</small>
        </S.LogoText> */}
      </S.Header>

      <S.Content>
        <S.Title>Welcome</S.Title>
        <S.Description>
            Assalomu aleykum hush kelib siz
        </S.Description>

        <S.Form onSubmit={handleStart}>
          <S.InputWrapper>
            <S.Icon className="far fa-user"></S.Icon>
            <S.Input 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Icon className="far fa-envelope"></S.Icon>
            <S.Input 
              type="text" 
              placeholder="Phone" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required 
            />
          </S.InputWrapper>

          <S.StartButton type="submit">START</S.StartButton>
        </S.Form>
      </S.Content>

      <S.AdminButton onClick={() => navigate('/loginteacher')}>
        <i className="fas fa-user-cog"></i> Admin
      </S.AdminButton>
    </S.MainContainer>
  );
};

export default LoginS;