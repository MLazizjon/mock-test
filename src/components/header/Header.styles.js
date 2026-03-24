import styled from 'styled-components';

export const TopBar = styled.header`
  height: 70px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Kichik ekranlarda paddingni clamp orqali boshqaramiz */
  padding: 0 clamp(10px, 3vw, 40px); 
  border-bottom: 2px solid #edeff2;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 480px) {
    height: 60px; /* Mobil qurilmalarda balandlikni biroz kamaytirdik */
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.5vw, 20px);
`;

export const LogoText = styled.div`
  font-size: clamp(17px, 4vw, 24px);
  font-weight: 900;
  color: #2b5a9e;
  cursor: pointer;
  letter-spacing: -0.5px;
  white-space: nowrap;
  user-select: none;

  &:hover {
    opacity: 0.8;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 25px;
  background: #e5e7eb;

  @media (max-width: 550px) {
    display: none; /* Ekran juda kichrayganda dividerni olib tashlaymiz */
  }
`;

export const TestTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #64748b;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: none; /* Tabletlardan kichik ekranlarda sarlavhani yashiramiz */
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(8px, 2vw, 20px);
`;

export const TimerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f1f5f9;
  padding: 8px clamp(10px, 2vw, 18px);
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  font-family: 'JetBrains Mono', 'Courier New', monospace; /* Raqamlar uchun mono shrift */
  font-weight: 800;
  font-size: clamp(14px, 3.5vw, 19px);
  color: #0f172a;
  min-width: fit-content;

  svg {
    color: #2563eb;
    font-size: 1.2em;
  }

  @media (max-width: 420px) {
    background: transparent;
    border-color: transparent;
    padding: 0;
    gap: 4px;
  }
`;

export const SubmitBtn = styled.button`
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  border: none;
  padding: clamp(8px, 2vw, 12px) clamp(12px, 3vw, 24px);
  border-radius: 8px;
  font-weight: 700;
  font-size: clamp(12px, 2.5vw, 15px);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 400px) {
    padding: 7px 12px;
    font-size: 12px;
    border-radius: 6px;
  }
`;