import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
`;

export const PageWrapper = styled.div`
  height: 100vh; display: flex; flex-direction: column; background: #f8fafc;
`;

export const Header = styled.header`
  height: 60px; background: #1e293b; color: white; display: flex;
  align-items: center; justify-content: space-between; padding: 0 40px;
`;

export const Logo = styled.h1` font-size: 18px; font-weight: 700; `;
export const Status = styled.span` background: #334155; padding: 5px 15px; border-radius: 20px; font-size: 14px; `;

export const MainContent = styled.main`
  flex: 1; display: flex; padding: 20px; gap: 20px; overflow: hidden;
`;

export const QuestionSide = styled.div`
  flex: 1.2; background: white; border-radius: 12px; padding: 40px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow-y: auto;
`;

export const PartTitle = styled.h2` color: #2563eb; margin-bottom: 10px; font-size: 24px; `;
export const Instruction = styled.p` color: #64748b; font-style: italic; margin-bottom: 30px; `;

export const QuestionList = styled.div` display: flex; flex-direction: column; gap: 20px; `;
export const QuestionItem = styled.div`
  padding: 15px; background: #f1f5f9; border-radius: 8px; border-left: 4px solid #2563eb;
  font-size: 18px; font-weight: 500; color: #1e293b;
`;

export const CueCard = styled.div`
  background: #fffbeb; border: 2px dashed #f59e0b; padding: 30px; border-radius: 12px;
  h3 { font-size: 22px; color: #b45309; margin-bottom: 15px; }
  ul { margin-top: 15px; padding-left: 20px; }
`;
export const CuePoint = styled.li` font-size: 18px; color: #4b5563; margin-bottom: 8px; `;

export const RecorderSide = styled.div`
  flex: 0.8; display: flex; flex-direction: column; gap: 20px;
`;

export const VideoPlaceholder = styled.div`
  flex: 1; background: #000; border-radius: 12px; display: flex;
  flex-direction: column; align-items: center; justify-content: center; color: #475569;
`;

export const AvatarIcon = styled.div`
  width: 100px; height: 100px; background: #1e293b; border-radius: 50%;
  margin-bottom: 15px; border: 2px solid #334155;
`;

export const ControlsBox = styled.div`
  background: white; border-radius: 12px; padding: 30px; text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
`;

export const Timer = styled.div`
  font-size: 32px; font-family: monospace; font-weight: 700; color: #ef4444;
  margin-bottom: 15px; visibility: ${props => props.display ? 'visible' : 'hidden'};
`;

export const RecordBtn = styled.button`
  width: 100%; padding: 15px; border-radius: 8px; border: none;
  background: ${props => props.isRecording ? '#ef4444' : '#2563eb'};
  color: white; font-weight: 700; font-size: 18px; cursor: pointer;
  display: flex; align-items: center; justify-content: center; gap: 10px;
  animation: ${props => props.isRecording ? pulse : 'none'} 1.5s infinite;
`;

export const Warning = styled.p` font-size: 12px; color: #94a3b8; margin-top: 15px; display: flex; align-items: center; justify-content: center; gap: 5px; `;

export const NextBtn = styled.button`
  padding: 15px; background: #1e293b; color: white; border: none; border-radius: 8px;
  font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px;
  &:hover { background: #0f172a; }
`;