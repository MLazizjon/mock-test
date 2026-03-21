import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Inter', sans-serif;
  /* position: absolute;
  top: 0px;
  left: 0px; */
  /* width: 100%; */
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #0a192f;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  color: #64748b;
  margin-bottom: 50px;
  font-size: 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #2563eb;
    box-shadow: 0 10px 20px rgba(37, 99, 235, 0.1);
  }
`;

export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 24px;
  background-color: ${props => props.bgColor || '#f1f5f9'};
  color: ${props => props.iconColor || '#2563eb'};
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
  color: #1e293b;
  margin-bottom: 8px;
`;

export const Info = styled.p`
  font-size: 14px;
  color: #64748b;
  margin-bottom: 25px;
  line-height: 1.6;
`;

export const StartButton = styled.button`
  width: 100%;
  background: #2563eb;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  margin-top: auto;

  &:hover {
    background: #1d4ed8;
  }
`;