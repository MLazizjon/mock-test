import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  font-family: 'Inter', sans-serif;
  padding: 15px; /* Kichik ekranlar uchun padding */
  box-sizing: border-box;
  width: 100%;
`;

export const LoginCard = styled.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  /* Eng muhim qismi: */
  width: 100%;
  max-width: 400px; /* Kattaroq ekranlarda 400px dan oshmaydi */
  min-width: 280px; /* Eng kichik ekranlarda ham sig'ishi uchun */
  
  text-align: center;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;

  /* 350px gacha bo'lgan ekranlar uchun paddingni kamaytiramiz */
  @media (max-width: 400px) {
    padding: 30px 20px;
  }

  /* 1300px dan yuqori ekranlarda biroz kattaroq ko'rinishi mumkin */
  @media (min-width: 1300px) {
    max-width: 450px;
    padding: 50px 45px;
  }
`;

export const Title = styled.h1`
  color: #2c3e50;
  font-size: clamp(22px, 5vw, 28px); /* Shrift o'lchami ekranga qarab o'zgaradi */
  margin-bottom: 10px;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  color: #7f8c8d;
  font-size: clamp(13px, 4vw, 15px);
  margin-bottom: 30px;
  line-height: 1.5;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: clamp(15px, 3vw, 20px);
  text-align: left;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: #34495e;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Select = styled.select`
  padding: 12px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  font-size: 16px;
  width: 100%; /* To'liq kenglik */
  box-sizing: border-box;
  outline: none;
  background-color: #fcfcfc;
  appearance: none;
  background-image: url("data:image/svg+xml,..."); /* SVG kodingiz */
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 18px;

  &:focus {
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  font-size: 16px;
  width: 100%; /* To'liq kenglik */
  box-sizing: border-box;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }
`;

export const SubmitButton = styled.button`
  background: #3498db;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    background: #217dbb;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;