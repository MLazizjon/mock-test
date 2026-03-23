import styled from 'styled-components';

export const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f1f5f9;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

/* HEADER */
export const Header = styled.header`
  height: 60px;
  background: #1e293b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;

  @media (max-width: 500px) {
    padding: 0 15px;
    height: 55px;
  }
`;

export const HeaderLeft = styled.div``;

export const LogoText = styled.h1`
  font-size: 18px;
  font-weight: 700;

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

export const TimerBox = styled.div`
  background: ${props => props.critical ? '#ef4444' : '#334155'};
  padding: 6px 20px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 22px;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 500px) {
    font-size: 16px;
    padding: 4px 10px;
  }
`;

export const HeaderRight = styled.div``;

export const FinishBtn = styled.button`
  background: #22c55e;
  color: white;
  border: none;
  padding: 8px 18px;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 500px) {
    padding: 6px 10px;
    font-size: 12px;
  }
`;

/* MAIN */
export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  gap: 2px;
  background: #cbd5e1;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const QuestionPanel = styled.div`
  flex: 1;
  background: white;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const TaskNav = styled.div`
  display: flex;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;

  @media (max-width: 500px) {
    justify-content: space-around;
  }
`;

export const TaskTab = styled.button`
  padding: 15px 30px;
  border: none;
  background: ${props => props.active ? 'white' : 'transparent'};
  color: ${props => props.active ? '#2563eb' : '#64748b'};
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 500px) {
    padding: 10px;
    font-size: 13px;
  }
`;

export const QuestionContent = styled.div`
  padding: 30px;

  @media (max-width: 500px) {
    padding: 20px;
  }
`;

export const InstructionBox = styled.div`
  background: #eff6ff;
  padding: 12px 18px;
  border-radius: 6px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 500px) {
    font-size: 12px;
    padding: 10px;
  }
`;

export const QuestionTitle = styled.h2`
  font-size: 20px;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const QuestionText = styled.p`
  font-size: 16px;
  line-height: 1.7;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const QuestionImage = styled.img`
  width: 100%;
  max-width: 500px;
`;

/* EDITOR */
export const EditorPanel = styled.div`
  flex: 1;
  background: white;
  display: flex;
  flex-direction: column;
`;

export const EditorToolbar = styled.div`
  padding: 10px 25px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    padding: 10px;
  }
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;

  @media (max-width: 500px) {
    font-size: 12px;
  }

  strong {
    font-size: 16px;
  }
`;

export const TargetInfo = styled.span`
  font-size: 12px;

  @media (max-width: 500px) {
    font-size: 11px;
  }
`;

export const TextArea = styled.textarea`
  flex: 1;
  padding: 30px;
  border: none;
  outline: none;
  font-size: 18px;
  line-height: 1.8;

  @media (max-width: 500px) {
    padding: 15px;
    font-size: 15px;
  }
`;

/* FOOTER */
export const Footer = styled.footer`
  height: 40px;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  padding: 0 25px;

  @media (max-width: 500px) {
    padding: 0 10px;
    height: auto;
  }
`;

export const Status = styled.span`
  font-size: 12px;

  @media (max-width: 500px) {
    font-size: 11px;
  }
`;