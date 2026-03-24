import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  position: relative;
  font-family: 'Arial', sans-serif;
  color: white;
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(13, 17, 39, 0.85); // To'q ko'k filtr
  z-index: 1;
`;

export const Header = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 2;
`;

export const Logo = styled.img`
  height: 45px;
`;

export const Content = styled.div`
  z-index: 2;
  text-align: center;
  width: 100%;
  max-width: 500px;
  padding: 20px;
`;

export const WelcomeTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin-bottom: 20px;
`;

export const RemindText = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  span {
    color: #00ff88;
    font-weight: bold;
  }
`;

export const EnterPassText = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 25px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputGroup = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  
  label {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 5px;
    margin-left: 5px;
  }
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  padding: 12px 15px;
  color: white;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #00ff88;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 25px;
`;

export const BackButton = styled.button`
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 8px 30px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const EnterButton = styled.button`
  background: transparent;
  border: 1px solid #00ff88;
  color: #00ff88;
  padding: 8px 45px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    background: rgba(0, 255, 136, 0.1);
  }
`;