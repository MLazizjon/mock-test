import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './login.styles';
import logo from './assets/Logo (1).png'; 
import bgImage from './assets/5eca6921ebb58571fd35a67419b9eadd9146b9aa.jpg'; // Oxirgi yuborgan rasmingiz nomi

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login === 'admin' && password === 'admin') {
      navigate('/teacher');
    } else {
      alert("Login yoki parol xato!");
    }
  };

  return (
    <S.MainContainer bg={bgImage}>
      <S.Overlay /> {/* Rasm ustidagi ko'k qatlam */}
      
      <S.Header>
        <S.Logo src={logo} alt="IELTS CDI MOCK" />
      </S.Header>

      <S.Content>
        <S.WelcomeTitle>Assalomu Alekum</S.WelcomeTitle>
        <S.Divider />
        
        <S.RemindText>
          <span>Remind:</span> If you are not an Admin or Teacher, please go back immediately.
        </S.RemindText>
        
        <S.EnterPassText>Enter the Password</S.EnterPassText>

        <S.Form onSubmit={handleSubmit}>
          <S.InputGroup>
            <label>Login:</label>
            <S.Input 
              type="text" 
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required 
              autoComplete="new-password"
            />
          </S.InputGroup>

          <S.InputGroup>
            <label>Password:</label>
            <S.Input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              autoComplete="new-password"
            />
          </S.InputGroup>

          <S.ButtonGroup>
            <S.BackButton type="button" onClick={() => navigate('/')}>
              ‹ Back
            </S.BackButton>
            <S.EnterButton type="submit">
              Enter
            </S.EnterButton>
          </S.ButtonGroup>
        </S.Form>
      </S.Content>
    </S.MainContainer>
  );
};

export default Login;