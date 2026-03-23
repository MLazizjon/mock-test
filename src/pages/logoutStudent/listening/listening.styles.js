import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f1f4f6;
  overflow: hidden;
`;

/* --- HEADER (TOPBAR) STYLES --- */
export const TopBar = styled.header`
  width: 100%;
  height: 65px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  border-bottom: 2px solid #e2e8f0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0 15px;
    height: 55px;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 500px) {
    gap: 8px;
  }
`;

export const LogoText = styled.h1`
  font-size: 22px;
  font-weight: 800;
  color: #2b5a9e;
  margin: 0;
  cursor: pointer;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 25px;
  background-color: #cbd5e1;
`;

export const TestTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #475569;

  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 500px) {
    gap: 10px;
  }
`;

export const TimerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #f8fafc;
  padding: 6px 15px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  color: #1e293b;
  font-weight: 700;
  font-size: 17px;
  font-family: monospace;

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 4px 10px;
  }

  svg {
    color: #2b5a9e;
  }
`;

export const SubmitBtn = styled.button`
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 500px) {
    padding: 6px 12px;
    font-size: 13px;
  }

  &:hover {
    background-color: #1d4ed8;
  }
`;

/* --- MAIN CONTENT --- */
export const MainContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: 100px;
`;

export const HeaderSection = styled.div`
  padding: 25px 40px;
  background: white;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  @media (max-width: 500px) {
    padding: 20px 15px;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MainTitle = styled.h2`
  font-size: 20px;
  margin: 0;
  color: #1e293b;

  @media (max-width: 500px) {
    font-size: 17px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 16px;
  color: #64748b;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const Instruction = styled.p`
  color: #d35400;
  font-weight: bold;
  font-style: italic;
  font-size: 13px;
  margin: 5px 0 0 0;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const AudioBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;

  @media (max-width: 900px) {
    align-items: flex-start;
    width: 100%;
  }
`;

export const PlayBtn = styled.button`
  background: ${props => props.active ? '#ef4444' : '#2563eb'};
  color: white;
  border: none;
  padding: 10px 22px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;

  @media (max-width: 500px) {
    padding: 8px 14px;
    font-size: 13px;
  }
`;

export const InfoText = styled.span`
  font-size: 11px;
  color: #94a3b8;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const QuestionsContainer = styled.div`
  max-width: 850px;
  margin: 30px auto;
  background: white;
  padding: 40px;
  border-radius: 12px;

  @media (max-width: 768px) {
    padding: 25px;
  }

  @media (max-width: 500px) {
    padding: 15px;
    margin: 20px 10px;
  }
`;

export const QuestionRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 10px;
  }
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
`;

export const QText = styled.div`
  flex: 1;
  font-size: 16px;
  line-height: 1.8;
  color: #334155;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #cbd5e1;
  padding: 2px 8px;
  width: 160px;
  margin: 0 5px;
  outline: none;
  font-weight: 600;
  color: #2563eb;

  @media (max-width: 500px) {
    width: 120px;
  }

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

  &:hover { background: #f1f5f9; }
`;

/* --- FOOTER --- */
export const FixedFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  background: #f1f5f9;
  border-top: 1px solid #cbd5e1;
  display: flex;
  align-items: center;
  padding: 0 30px;
  z-index: 100;

  @media (max-width: 500px) {
    height: auto;
    padding: 10px;
  }
`;

export const FooterNav = styled.div`
  display: flex;
  height: 100%;
  align-items: stretch;

  @media (max-width: 500px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const PartTab = styled.div`
  display: flex;
  align-items: center;
  padding: 0 25px;
  border-right: 1px solid #cbd5e1;
  background: ${props => props.active ? '#ffffff' : 'transparent'};
  cursor: pointer;

  @media (max-width: 500px) {
    padding: 10px;
    border-right: none;
  }

  .tab-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title { font-weight: 800; font-size: 14px; color: #1e293b; }
  .count { font-size: 11px; color: #64748b; }
`;

export const QuestionStrip = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 25px;
  align-items: center;

  @media (max-width: 500px) {
    margin-left: 0;
    flex-wrap: wrap;
    gap: 6px;
  }
`;

export const NavSquare = styled.div`
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  color: ${props => props.answered ? '#2563eb' : '#64748b'};
  border-bottom: 2px solid ${props => props.answered ? '#2563eb' : 'transparent'};
  padding: 2px 4px;

  @media (max-width: 500px) {
    font-size: 11px;
  }

  &:hover { color: #2563eb; }
`;