import styled from 'styled-components';

export const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  padding-bottom: 60px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const TextPanel = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 40px;
  border-right: 2px solid #ddd;

  @media (max-width: 900px) {
    border-right: none;
    border-bottom: 2px solid #ddd;
  }

  @media (max-width: 500px) {
    padding: 20px;
  }
`;

export const ArticleTitle = styled.h1`
  font-size: 26px;
  margin: 15px 0;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const ArticleText = styled.div`
  font-size: 18px;
  line-height: 1.8;
  white-space: pre-wrap;

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

export const PassageLabel = styled.div`
  font-weight: bold;
  color: #666;
`;

export const QuestionPanel = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 40px;
  background: #f4f6f8;

  @media (max-width: 500px) {
    padding: 20px;
  }
`;

export const QuestionHeader = styled.h2`
  border-bottom: 3px solid #2563eb;
  display: inline-block;
  margin-bottom: 25px;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const QuestionBox = styled.div`
  background: #fff;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;

  @media (max-width: 500px) {
    padding: 15px;
  }
`;

export const QRow = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;

  p {
    font-weight: 600;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const QNum = styled.div`
  min-width: 28px;
  height: 28px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.horizontal ? 'row' : 'column'};
  gap: 10px;
  padding-left: 43px;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    padding-left: 0;
    flex-direction: column;
  }
`;

export const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid ${props => props.selected ? '#2563eb' : '#cbd5e1'};
  background: ${props => props.selected ? '#eff6ff' : 'white'};

  input {
    margin: 0;
  }
`;

export const FixedFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: #e2e8f0;
  border-top: 1px solid #999;
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 100;

  @media (max-width: 500px) {
    height: auto;
    padding: 10px;
  }
`;

export const FooterNav = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 500px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const PartTab = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-right: 1px solid #999;
  background: ${props => props.active ? '#fff' : 'transparent'};

  @media (max-width: 500px) {
    padding: 10px;
    border-right: none;
  }

  .tab-main {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  .title {
    font-weight: 800;
  }

  .count {
    font-size: 11px;
  }
`;

export const QuestionStrip = styled.div`
  display: flex;
  gap: 6px;
  margin-left: 15px;

  @media (max-width: 500px) {
    margin-left: 0;
    flex-wrap: wrap;
  }
`;

export const NavSquare = styled.div`
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  text-decoration: ${props => props.answered ? 'underline' : 'none'};

  @media (max-width: 500px) {
    font-size: 11px;
  }
`;

export const FooterActions = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: bold;
`;

export const SubmitBtn = styled.button`
  background: #2563eb;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 500px) {
    padding: 6px 10px;
    font-size: 13px;
  }
`;