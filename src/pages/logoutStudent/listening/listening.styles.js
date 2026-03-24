import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f1f4f6;
  overflow: hidden;
`;

/* --- MAIN CONTENT AREA --- */
export const MainContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: 150px; /* Footer uchun joy */

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 10px;
  }
`;

export const HeaderSection = styled.div`
  padding: clamp(15px, 3vw, 25px) clamp(15px, 5vw, 40px);
  background: white;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainTitle = styled.h2`
  font-size: clamp(18px, 2.5vw, 22px);
  margin: 0;
  color: #1e293b;
  font-weight: 800;
`;

export const SubTitle = styled.h3`
  font-size: clamp(14px, 2vw, 16px);
  color: #64748b;
  margin: 5px 0;
`;

export const Instruction = styled.p`
  color: #d35400;
  font-weight: bold;
  font-style: italic;
  font-size: clamp(11px, 1.5vw, 13px);
  margin: 0;
`;

export const AudioBox = styled.div`
  display: flex;
  flex-direction: row; /* Tugmalar yonma-yon turishi uchun */
  align-items: center;
  gap: clamp(10px, 2vw, 20px);

  @media (max-width: 900px) {
    align-items: flex-start;
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const PlayBtn = styled.button`
  background: ${props => props.active ? '#ef4444' : '#2563eb'};
  color: white;
  border: none;
  padding: clamp(8px, 1.5vw, 12px) clamp(15px, 2vw, 25px);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: clamp(13px, 1.5vw, 15px);
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover { opacity: 0.9; transform: translateY(-1px); }
  &:active { transform: translateY(0); }
`;

/* --- SUBMIT TUGMASI (YANGI QO'SHILDI) --- */
export const SubmitAllBtn = styled.button`
  background: #10b981; /* Yashil rang */
  color: white;
  border: none;
  padding: clamp(8px, 1.5vw, 12px) clamp(15px, 2vw, 25px);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: clamp(13px, 1.5vw, 15px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(16, 185, 129, 0.2);

  &:hover { 
    background: #059669;
    box-shadow: 0 6px 15px rgba(16, 185, 129, 0.3);
  }
`;

export const InfoText = styled.span`
  font-size: 11px;
  color: #94a3b8;
  display: flex;
  align-items: center;
  gap: 4px;
`;

/* --- QUESTIONS CONTAINER --- */
export const QuestionsContainer = styled.div`
  max-width: 850px;
  margin: clamp(15px, 4vw, 30px) auto;
  background: white;
  padding: clamp(15px, 5vw, 40px);
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);

  @media (max-width: 900px) {
    margin: 15px;
    width: auto;
  }
`;

export const QuestionRow = styled.div`
  display: flex;
  gap: clamp(10px, 3vw, 20px);
  margin-bottom: clamp(20px, 4vw, 30px);
`;

export const QNum = styled.div`
  min-width: 32px;
  height: 32px;
  border: 1.5px solid #1e293b;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  background: #f8fafc;
  flex-shrink: 0;
`;

export const QText = styled.div`
  flex: 1;
  font-size: clamp(14px, 2vw, 16px);
  line-height: 1.8;
  color: #334155;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #cbd5e1;
  padding: 2px 5px;
  width: clamp(100px, 15vw, 160px);
  margin: 0 5px;
  outline: none;
  font-weight: 700;
  color: #2563eb;
  background: transparent;

  &:focus {
    border-bottom: 2px solid #2563eb;
    background: #f1f5f9;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 15px;
`;

export const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: clamp(14px, 1.8vw, 16px);
  transition: background 0.2s;

  &:hover { background: #f1f5f9; }
  
  input {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;

/* --- FIXED FOOTER --- */
export const FixedFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 70px;
  background: #f8fafc;
  border-top: 1px solid #cbd5e1;
  display: flex;
  align-items: center;
  padding: 10px clamp(15px, 5vw, 40px);
  z-index: 1000;
  box-sizing: border-box;

  @media (max-width: 900px) {
    height: auto;
    padding: 10px;
  }
`;

export const FooterNav = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: stretch;
  justify-content: space-between;

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr; 
    gap: 8px;
  }
`;

export const PartTab = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0 clamp(5px, 2vw, 25px);
  border-right: ${props => props.active ? 'none' : '1px solid #cbd5e1'};
  background: ${props => props.active ? '#ffffff' : 'transparent'};
  border-radius: ${props => props.active ? '8px' : '0'};
  box-shadow: ${props => props.active ? '0 4px 6px -1px rgba(0,0,0,0.1)' : 'none'};
  cursor: pointer;
  transition: all 0.2s;

  @media (max-width: 900px) {
    border-right: none;
    border: 1px solid ${props => props.active ? '#2563eb' : '#cbd5e1'};
    padding: 8px;
    justify-content: center;
  }

  .tab-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title { 
    font-weight: 800; 
    font-size: clamp(11px, 1.5vw, 14px); 
    color: #1e293b; 
    white-space: nowrap;
  }
  .count { 
    font-size: clamp(9px, 1.2vw, 11px); 
    color: #64748b; 
  }
`;

export const QuestionStrip = styled.div`
  display: flex;
  gap: clamp(4px, 1vw, 10px);
  margin-left: clamp(10px, 2vw, 25px);
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    margin-left: 0px;
    margin-top: 5px;
    justify-content: center;
    width: 100%;
  }
`;

export const NavSquare = styled.div`
  cursor: pointer;
  font-size: clamp(10px, 1.3vw, 13px);
  font-weight: 700;
  color: ${props => props.answered ? '#2563eb' : '#64748b'};
  border-bottom: 2px solid ${props => props.answered ? '#2563eb' : 'transparent'};
  padding: 2px 4px;
  transition: all 0.2s;

  &:hover { 
    color: #2563eb; 
    background: #eff6ff;
    border-radius: 4px;
  }
`;