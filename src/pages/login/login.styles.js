import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center; /* Konteynerni vertikal markazda saqlaydi */
  justify-content: center; /* Konteynerni gorizontal markazda saqlaydi */
  background-color: #1E56E3; 
  position: relative;
  font-family: 'Arial', sans-serif;
  color: white;
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.03); 
  z-index: 1;
`;

export const Header = styled.div`
  position: absolute;
  /* Logoni tepaga 20px ko'tardik */
  top: clamp(5px, 2vw, 20px); 
  left: clamp(20px, 5vw, 40px);
  z-index: 10;
  width: fit-content;
`;

export const Logo = styled.img`
  /* Logo o'lchami kattaroq va responsiv */
  height: clamp(120px, 18vw, 220px); 
  width: auto;
  object-fit: contain;
  display: block;
`;

export const Content = styled.div`
  z-index: 2;
  text-align: center;
  width: 100%;
  max-width: 480px; 
  padding: clamp(25px, 6vw, 50px);
  background: rgba(255, 255, 255, 0.1); 
  border-radius: 24px;
  backdrop-filter: blur(12px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.15);
  
  margin: 0 auto; 
  box-sizing: border-box;

  @media (max-width: 500px) {
    /* Ekran 500pxdan kichrayganda o'ng va chapdan yopishib qolmasligi uchun */
    width: calc(100% - 30px); 
  }
`;

export const WelcomeTitle = styled.h1`
  font-size: clamp(26px, 5vw, 36px);
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin-bottom: 25px;
`;

export const RemindText = styled.p`
  font-size: 14px;
  margin-bottom: 12px;
  line-height: 1.5;
  span {
    color: #00ff88;
    font-weight: bold;
  }
`;

export const EnterPassText = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  
  label {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 8px;
    margin-left: 4px;
  }
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 15px;
  color: white;
  font-size: 16px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    border-color: #00ff88;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.2);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 25px;

  @media (max-width: 420px) {
    flex-direction: column-reverse;
  }
`;

export const BackButton = styled.button`
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 12px 30px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.2s ease;
  min-width: 120px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const EnterButton = styled.button`
  background: #00ff88;
  border: none;
  color: #1E56E3;
  padding: 12px 45px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  transition: all 0.2s ease;
  min-width: 140px;

  &:hover {
    background: #00e67a;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 136, 0.3);
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`;