import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center; 
  justify-content: center;
  /* Orqa fon rasm va gradient uyg'unligi */
  background: ${props => props.bg ? `linear-gradient(rgba(30, 86, 227, 0.45), rgba(30, 86, 227, 0.45)), url(${props.bg})` : '#1E56E3'};
  background-size: cover;
  background-position: center;
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
  background: rgba(0, 0, 0, 0.05); 
  z-index: 1;
`;

export const Header = styled.div`
  position: absolute;
  top: clamp(10px, 2vw, 25px); 
  left: clamp(20px, 5vw, 40px);
  z-index: 10;
  width: fit-content;
`;

export const Logo = styled.img`
  height: clamp(130px, 18vw, 210px); 
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
    width: calc(100% - 30px); /* Konteyner chekkaga yopishmaydi */
  }
`;

export const Title = styled.h1`
  font-size: clamp(26px, 5vw, 36px);
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 25px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Icon = styled.i`
  position: absolute;
  left: 15px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
`;

export const Input = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 15px 15px 15px 45px;
  color: white;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    border-color: #00ff88;
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const StartButton = styled.button`
  background: #00ff88;
  border: none;
  color: #1E56E3;
  padding: 15px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.2s ease;
  margin-top: 10px;

  &:hover {
    background: #00e67a;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 136, 0.3);
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const AdminButton = styled.button`
  position: absolute;
  bottom: clamp(20px, 4vw, 30px); /* Ekran kichrayganda ham pastdan joy saqlaydi */
  right: clamp(20px, 5vw, 30px); /* Ekran kichrayganda ham o'ngdan joy saqlaydi */
  z-index: 5;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 10px 18px;
  border-radius: 30px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  white-space: nowrap;

  &:hover {
    background: white;
    color: #1E56E3;
  }

  @media (max-width: 500px) {
    /* O'rtaga olish kodlarini olib tashladik, o'ngda qoladi */
    padding: 8px 15px;
    font-size: 13px;
  }
`;