import styled from 'styled-components';

export const PageWrapper = styled.div` height: 100vh; display: flex; flex-direction: column; `;
export const MainContainer = styled.div` display: flex; flex: 1; overflow: hidden; padding-bottom: 60px; `;
export const TextPanel = styled.div` flex: 1; overflow-y: auto; padding: 40px; border-right: 2px solid #ddd; `;
export const ArticleTitle = styled.h1` font-size: 26px; margin: 15px 0; `;
export const ArticleText = styled.div` font-size: 18px; line-height: 1.8; white-space: pre-wrap; `;
export const PassageLabel = styled.div` font-weight: bold; color: #666; `;
export const QuestionPanel = styled.div` flex: 1; overflow-y: auto; padding: 40px; background: #f4f6f8; `;
export const QuestionHeader = styled.h2` border-bottom: 3px solid #2563eb; display: inline-block; margin-bottom: 25px; `;
export const QuestionBox = styled.div` background: #fff; padding: 20px; margin-bottom: 15px; border-radius: 8px; border: 1px solid #e2e8f0; `;
export const QRow = styled.div` display: flex; gap: 15px; margin-bottom: 15px; p { font-weight: 600; } `;
export const QNum = styled.div` min-width: 28px; height: 28px; border: 1px solid #000; display: flex; align-items: center; justify-content: center; font-weight: bold; `;

/* Savollar turi bo'yicha gorizontal yoki vertikal qilish */
export const OptionsWrapper = styled.div`
  display: flex; 
  flex-direction: ${props => props.horizontal ? 'row' : 'column'}; 
  gap: 10px; padding-left: 43px; flex-wrap: wrap;
`;

export const OptionLabel = styled.label`
  display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 5px; cursor: pointer;
  border: 1px solid ${props => props.selected ? '#2563eb' : '#cbd5e1'};
  background: ${props => props.selected ? '#eff6ff' : 'white'};
  input { margin: 0; }
`;

export const FixedFooter = styled.footer` position: fixed; bottom: 0; width: 100%; height: 60px; background: #e2e8f0; border-top: 1px solid #999; display: flex; align-items: center; padding: 0 20px; z-index: 100; `;
export const FooterNav = styled.div` display: flex; height: 100%; `;
export const PartTab = styled.div`
  display: flex; align-items: center; padding: 0 20px; border-right: 1px solid #999;
  background: ${props => props.active ? '#fff' : 'transparent'};
  .tab-main { display: flex; flex-direction: column; cursor: pointer; }
  .title { font-weight: 800; }
  .count { font-size: 11px; }
`;
export const QuestionStrip = styled.div` display: flex; gap: 6px; margin-left: 15px; `;
export const NavSquare = styled.div` cursor: pointer; font-size: 13px; font-weight: bold; text-decoration: ${props => props.answered ? 'underline' : 'none'}; `;
export const FooterActions = styled.div` margin-left: auto; display: flex; align-items: center; gap: 15px; font-weight: bold; `;
export const SubmitBtn = styled.button` background: #2563eb; color: #fff; border: none; padding: 8px 16px; border-radius: 5px; cursor: pointer; font-weight: bold; display: flex; align-items: center; gap: 5px; `;