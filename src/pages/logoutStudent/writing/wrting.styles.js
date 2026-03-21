import styled from 'styled-components';

export const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f1f5f9;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Header = styled.header`
  height: 60px;
  background: #1e293b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

export const HeaderLeft = styled.div``;
export const LogoText = styled.h1` font-size: 18px; font-weight: 700; letter-spacing: 0.5px; `;

export const TimerBox = styled.div`
  background: ${props => props.critical ? '#ef4444' : '#334155'};
  padding: 6px 20px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 22px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid ${props => props.critical ? '#f87171' : '#475569'};
  transition: all 0.3s;
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
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover { background: #16a34a; }
`;

export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  gap: 2px;
  background: #cbd5e1;
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
`;

export const TaskTab = styled.button`
  padding: 15px 30px;
  border: none;
  background: ${props => props.active ? 'white' : 'transparent'};
  color: ${props => props.active ? '#2563eb' : '#64748b'};
  font-weight: 700;
  cursor: pointer;
  border-bottom: 3px solid ${props => props.active ? '#2563eb' : 'transparent'};
  &:hover { color: #2563eb; }
`;

export const QuestionContent = styled.div` padding: 30px; `;

export const InstructionBox = styled.div`
  background: #eff6ff;
  padding: 12px 18px;
  border-radius: 6px;
  color: #1e40af;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const QuestionTitle = styled.h2` font-size: 20px; color: #1e293b; margin-bottom: 15px; `;

export const QuestionText = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #334155;
  margin-bottom: 25px;
  white-space: pre-line;
`;

export const QuestionImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 4px;
  border: 1px solid #e2e8f0;
`;

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
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #475569;
  font-size: 14px;
  strong { color: #2563eb; font-size: 16px; }
`;

export const TargetInfo = styled.span` font-size: 12px; color: #94a3b8; font-weight: 600; `;

export const TextArea = styled.textarea`
  flex: 1;
  padding: 30px;
  border: none;
  outline: none;
  font-size: 18px;
  line-height: 1.8;
  resize: none;
  color: #0f172a;
  &::placeholder { color: #cbd5e1; }
`;

export const Footer = styled.footer`
  height: 40px;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  padding: 0 25px;
`;

export const Status = styled.span` font-size: 12px; color: #64748b; font-weight: 600; `;