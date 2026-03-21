import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5; /* Oq-gray fon */
  font-family: 'Inter', sans-serif; /* Zamonaviy shrift */
  padding: 20px;
  box-sizing: border-box;
  position: absolute;
  left: 0px ;
  top: 0px;
  z-index: 999;
  width: 100%;
  height: 100%;
`;

export const LoginCard = styled.div`
  background: #ffffff; /* Asosiy karta oq rangda */
  padding: 45px 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* Yumshoqroq soya */
  width: 100%;
  max-width: 400px;
  text-align: center;
  border: 1px solid #e0e0e0; /* Yengil chegara */
`;

export const Title = styled.h1`
  color: #2c3e50; /* To'q qora rang */
  font-size: 28px;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  color: #7f8c8d; /* Och gray rang */
  font-size: 15px;
  margin-bottom: 35px;
  line-height: 1.5;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: #34495e; /* To'qroq gray rang */
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Select = styled.select`
  padding: 13px;
  border: 1px solid #dcdcdc; /* Yengilroq chegara */
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
  background-color: #fcfcfc;
  color: #333;
  -webkit-appearance: none; /* Default brauzer stilini olib tashlash */
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23666' width='18px' height='18px'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 18px;

  &:focus {
    border-color: #3498db; /* Ko'k chegara focus bo'lganda */
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2); /* Ko'k soya */
  }
`;

export const Input = styled.input`
  padding: 13px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
  color: #333;

  &:focus {
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }
`;

export const SubmitButton = styled.button`
  background: #3498db; /* Ko'k rang */
  color: white;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 15px;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #217dbb; /* To'qroq ko'k rang hoverda */
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

// export const GlobalStyle = styled.createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
// `;