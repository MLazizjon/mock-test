import styled from 'styled-components';

export const TopBar = styled.header`
  height: 70px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  border-bottom: 2px solid #edeff2;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const LogoText = styled.div`
  font-size: 24px;
  font-weight: 900;
  color: #2b5a9e;
  cursor: pointer;
  letter-spacing: -0.5px;
  &:hover {
    opacity: 0.8;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 30px;
  background: #e5e7eb;
`;

export const TestTitle = styled.div`
  font-weight: 600;
  color: #4b5563;
  font-size: 17px;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const TimerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f8fafc;
  padding: 8px 18px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 700;
  font-size: 20px;
  color: #1e293b;

  svg {
    color: #2563eb;
    font-size: 20px;
  }
`;

export const SubmitBtn = styled.button`
  background: #2563eb;
  color: white;
  border: none;
  padding: 10px 28px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #1d4ed8;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;