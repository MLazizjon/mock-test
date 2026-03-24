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
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 35, 126, 0.85); // To'q ko'k shaffof qatlam
  z-index: 1;
`;

export const Header = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  z-index: 2;
`;

export const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  span { font-weight: bold; font-size: 20px; }
  small { font-size: 10px; letter-spacing: 1px; }
`;

export const Content = styled.div`
  z-index: 2;
  text-align: center;
  max-width: 600px;
  padding: 0 20px;
`;

export const Title = styled.h1`
  font-size: 64px;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 40px;
  opacity: 0.9;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
`;

export const Icon = styled.i`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #ccc;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 15px 15px 45px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  color: white;
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const StartButton = styled.button`
  margin-top: 20px;
  padding: 10px 60px;
  background: transparent;
  border: 2px solid white;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: white;
    color: #1a237e;
  }
`;

export const AdminButton = styled.button`
  position: absolute;
  bottom: 30px;
  left: 30px;
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 8px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  z-index: 2;
  font-size: 14px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;