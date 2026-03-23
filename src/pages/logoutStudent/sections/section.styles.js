import styled from 'styled-components';

export const HomeContainer = styled.div`
  /* Ekran kengligiga qarab padding o'zgaradi */
  padding: clamp(30px, 8vw, 60px) 15px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
  width: 100%;
`;

export const Title = styled.h1`
  /* 350px da 24px, 1300px da 32px bo'ladi */
  font-size: clamp(24px, 5vw, 32px);
  color: #0a192f;
  margin-bottom: 12px;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  color: #64748b;
  margin-bottom: clamp(30px, 6vw, 50px);
  font-size: clamp(14px, 2vw, 16px);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
`;

export const Grid = styled.div`
  display: grid;
  /* 350px atrofida 1 ta ustun, kengroq ekranda 3 ta ustungacha avtomatik o'tadi */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(15px, 3vw, 25px);
  width: 100%;

  /* Juda kichik ekranlarda (masalan iPhone SE - 375px) cardlar to'liq sig'ishi uchun */
  @media (max-width: 350px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 16px; /* Biroq yumshoqroq burchaklar */
  padding: clamp(20px, 4vw, 30px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  height: 100%; /* Hamma cardlar bir xil balandlikda bo'lishi uchun */
  box-sizing: border-box;

  &:hover {
    border-color: #2563eb;
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(37, 99, 235, 0.12);
  }
`;

export const IconWrapper = styled.div`
  width: clamp(45px, 5vw, 55px);
  height: clamp(45px, 5vw, 55px);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: clamp(20px, 4vw, 24px);
  background-color: ${props => props.bgColor || '#f1f5f9'};
  color: ${props => props.iconColor || '#2563eb'};
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

export const SectionTitle = styled.h3`
  font-size: clamp(18px, 3vw, 22px);
  color: #1e293b;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const Info = styled.p`
  font-size: clamp(13px, 2vw, 14px);
  color: #64748b;
  margin-bottom: 30px;
  line-height: 1.6;
  flex-grow: 1; /* Buttonni har doim pastga surib turadi */
`;

export const StartButton = styled.button`
  width: 100%;
  background: #2563eb;
  color: white;
  border: none;
  padding: clamp(10px, 2.5vw, 14px);
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: auto; /* Card ichida eng pastda turishini ta'minlaydi */

  &:hover {
    background: #1d4ed8;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
  }

  &:active {
    transform: scale(0.98);
  }
`;