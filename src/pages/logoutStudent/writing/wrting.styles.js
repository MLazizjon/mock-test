import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f1f4f6;
  overflow: hidden;
`;

/* --- MAIN CONTAINER --- */
export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  gap: 2px;
  background: #cbd5e1;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

/* --- LEFT PANEL: QUESTION --- */
export const QuestionPanel = styled.div`
  flex: 1;
  background: white;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }

  @media (max-width: 900px) {
    height: 45vh;
    flex: none;
  }
`;

export const TaskNav = styled.div`
  display: flex;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const TaskTab = styled.button`
  flex: 1;
  padding: clamp(12px, 2vw, 20px);
  border: none;
  background: ${props => props.active ? 'white' : 'transparent'};
  color: ${props => props.active ? '#2563eb' : '#64748b'};
  font-weight: 800;
  font-size: clamp(13px, 1.5vw, 15px);
  cursor: pointer;
  border-bottom: 3px solid ${props => props.active ? '#2563eb' : 'transparent'};
  transition: all 0.2s;

  &:hover { color: #2563eb; }
`;

export const QuestionContent = styled.div`
  padding: clamp(15px, 3vw, 35px);
`;

export const InstructionBox = styled.div`
  background: #eff6ff;
  padding: clamp(10px, 1.5vw, 15px);
  border-radius: 8px;
  font-size: clamp(12px, 1.2vw, 14px);
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  color: #1e40af;
  border: 1px solid #dbeafe;
`;

export const QuestionTitle = styled.h2`
  font-size: clamp(18px, 2.2vw, 24px);
  color: #1e293b;
  margin-bottom: 15px;
  font-weight: 800;
`;

export const QuestionText = styled.p`
  font-size: clamp(15px, 1.6vw, 17px);
  line-height: 1.8;
  color: #334155;
  background: #fcfcfc;
  padding: 15px;
  border-left: 4px solid #cbd5e1;
  border-radius: 4px;
`;

export const QuestionImage = styled.img`
  width: 100%;
  max-width: 550px;
  height: auto;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
`;

/* --- RIGHT PANEL: EDITOR --- */
export const EditorPanel = styled.div`
  flex: 1;
  background: white;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const EditorToolbar = styled.div`
  padding: clamp(8px, 1.5vw, 12px) clamp(15px, 2.5vw, 25px);
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: clamp(12px, 1.3vw, 14px);
  color: #475569;

  strong {
    font-size: clamp(14px, 1.5vw, 16px);
    color: #2563eb;
  }
`;

export const TargetInfo = styled.span`
  font-size: clamp(11px, 1.1vw, 13px);
  background: #f1f5f9;
  padding: 4px 10px;
  border-radius: 20px;
  color: #64748b;
  font-weight: 600;
`;

export const TextArea = styled.textarea`
  flex: 1;
  padding: clamp(15px, 3vw, 30px);
  border: none;
  outline: none;
  font-size: clamp(16px, 1.8vw, 19px);
  line-height: 1.8;
  color: #1e293b;
  resize: none;
  font-family: 'Inter', sans-serif;

  &::placeholder { color: #94a3b8; }

  @media (max-width: 900px) {
    min-height: 300px;
  }
`;

/* --- FOOTER --- */
export const Footer = styled.footer`
  height: clamp(40px, 6vh, 50px);
  background: white;
  border-top: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  padding: 0 clamp(15px, 3vw, 25px);
  box-shadow: 0 -2px 10px rgba(0,0,0,0.03);
`;

export const Status = styled.span`
  font-size: clamp(11px, 1.2vw, 13px);
  color: #64748b;
  font-weight: 500;
  letter-spacing: 0.5px;
`;