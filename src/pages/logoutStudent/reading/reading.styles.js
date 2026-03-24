import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f1f4f6;
  overflow: hidden;
`;

export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  /* Footer yopib qo'ymasligi uchun paddingni dinamik qilamiz */
  padding-bottom: 75px; 

  @media (max-width: 900px) {
    flex-direction: column;
    padding-bottom: 140px; /* 2 qatorli footer uchun ko'proq joy */
  }
`;

/* --- PANELS --- */
export const TextPanel = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: clamp(15px, 3vw, 40px);
  background: white;
  border-right: 2px solid #e2e8f0;

  @media (max-width: 900px) {
    height: 45vh;
    border-right: none;
    border-bottom: 2px solid #e2e8f0;
  }
`;

export const PassageLabel = styled.span`
  font-weight: 800;
  color: #2563eb;
  text-transform: uppercase;
  font-size: 12px;
`;

export const ArticleTitle = styled.h1`
  font-size: clamp(20px, 2.5vw, 26px);
  margin: 10px 0;
`;

export const ArticleText = styled.div`
  font-size: clamp(15px, 1.6vw, 17px);
  line-height: 1.7;
  color: #334155;
`;

export const QuestionPanel = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: clamp(15px, 3vw, 40px);
  background: #f8fafc;
`;

export const QuestionHeader = styled.h2`
  font-size: 18px;
  border-bottom: 3px solid #2563eb;
  padding-bottom: 5px;
  margin-bottom: 20px;
  display: inline-block;
`;

export const QuestionBox = styled.div`
  background: white;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
`;

export const QRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  p { font-weight: 600; margin: 0; font-size: 15px; }
`;

export const QNum = styled.div`
  min-width: 28px;
  height: 28px;
  border: 2px solid #1e293b;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 13px;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.horizontal ? 'row' : 'column'};
  gap: 8px;
  flex-wrap: wrap;
`;

export const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid ${props => props.selected ? '#2563eb' : '#e2e8f0'};
  background: ${props => props.selected ? '#eff6ff' : 'white'};
  font-size: 14px;
`;

/* --- FIXED FOOTER (TUZATILGAN QISM) --- */
export const FixedFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 70px; /* Balandlikni avtoga qo'yamiz */
  background: #ffffff;
  border-top: 1px solid #cbd5e1;
  display: flex;
  align-items: center;
  padding: 5px clamp(10px, 3vw, 30px);
  z-index: 1000;
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding: 10px;
  }
`;

export const FooterNav = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
  justify-content: flex-start;

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr; /* 2 ustunli grid */
    gap: 8px;
  }

  @media (max-width: 600px) {
    /* 600px dan pastda ham 2x2 qoladi, faqat elementlar kichrayadi */
    gap: 5px;
  }
`;

export const PartTab = styled.div`
  display: flex;
  flex-direction: row; /* Raqamlar yonda turishi uchun */
  align-items: center;
  padding: 8px clamp(10px, 1.5vw, 20px);
  border-right: 1px solid #e2e8f0;
  background: ${props => props.active ? '#f8fafc' : 'transparent'};
  cursor: pointer;
  flex: ${props => props.active ? '2' : '1'}; /* Active qism kengroq bo'ladi */
  transition: all 0.2s ease;

  @media (max-width: 900px) {
    border: 1px solid ${props => props.active ? '#2563eb' : '#e2e8f0'};
    border-radius: 8px;
    flex: none;
    width: 100%;
    box-sizing: border-box;
    justify-content: flex-start;
  }

  .tab-main {
    display: flex;
    flex-direction: column;
    min-width: fit-content;
  }

  .title { 
    font-weight: 800; 
    font-size: clamp(11px, 1.3vw, 13px); 
    color: #1e293b;
    white-space: nowrap;
  }
  .count { 
    font-size: 10px; 
    color: #64748b; 
  }
`;

export const QuestionStrip = styled.div`
  display: flex;
  gap: 4px;
  margin-left: 10px;
  align-items: center;
  flex-wrap: wrap; /* Raqamlar sig'masa pastga tushishi uchun */

  @media (max-width: 600px) {
    gap: 2px;
    margin-left: 5px;
  }
`;

export const NavSquare = styled.div`
  cursor: pointer;
  font-size: clamp(9px, 1.1vw, 12px);
  font-weight: 700;
  color: ${props => props.answered ? '#2563eb' : '#94a3b8'};
  border-bottom: 2px solid ${props => props.answered ? '#2563eb' : 'transparent'};
  padding: 2px 3px;
  min-width: 15px;
  text-align: center;

  &:hover { color: #2563eb; }
`;