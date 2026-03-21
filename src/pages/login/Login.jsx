import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './login.styles';

const Login = () => {
  const [role, setRole] = useState('student');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Student logikasi
    if (role === 'student' && password === '1234') {
      // LogoutS ichidagi "/" (Home/Section) sahifasiga o'tadi
      navigate('/student'); 
    } 
    // Teacher logikasi
    else if (role === 'teacher' && password === 'admin') {
      // LogoutT ichidagi asosiy sahifaga o'tadi
      navigate('/teacher'); 
    } 
    else {
      alert("Xatolik: Rol yoki parol noto'g'ri!");
    }
  };

  return (
    <S.Container>
      <S.LoginCard>
        <S.Title>IELTS Mock</S.Title>
        <S.Subtitle>Tizimga xush kelibsiz</S.Subtitle>

        <S.Form onSubmit={handleLogin}>
          <S.FormGroup>
            <S.Label>Foydalanuvchi roli</S.Label>
            <S.Select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="student">Student (Parol: 1234)</option>
              <option value="teacher">Teacher (Parol: admin)</option>
            </S.Select>
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>Parol</S.Label>
            <S.Input 
              type="password" 
              placeholder="Parolni kiriting" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </S.FormGroup>

          <S.SubmitButton type="submit">Kirish</S.SubmitButton>
        </S.Form>
      </S.LoginCard>
    </S.Container>
  );
};

export default Login;