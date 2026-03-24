import styled from 'styled-components';

export const Container = styled.div`
  padding: clamp(10px, 3vw, 40px);
  background-color: #f8fafc;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  gap: 15px;
  flex-wrap: wrap;

  .title-area h1 {
    font-size: clamp(20px, 4vw, 28px);
    color: #0f172a;
    margin: 0;
    font-weight: 800;
  }

  .title-area p {
    font-size: clamp(12px, 1.5vw, 14px);
    color: #64748b;
    margin-top: 5px;
  }
`;

export const StatsCard = styled.div`
  background: white;
  padding: 15px 25px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;

  .icon-wrapper {
    background: #eff6ff;
    color: #3b82f6;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    span { font-size: 12px; color: #64748b; }
    strong { font-size: 18px; color: #1e293b; }
  }
`;

export const TableCard = styled.div`
  background: white;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.04);
  overflow-x: auto; 
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px; 

  th, td {
    padding: 16px 20px;
    font-size: 14px;
    text-align: left;
    border-bottom: 1px solid #f1f5f9;
  }

  th {
    background: #f8fafc;
    color: #64748b;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.05em;
  }

  tr:hover { background-color: #f8fafc; }

  .student-info {
    font-weight: 600;
    color: #1e293b;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const ScoreBadge = styled.div`
  background: ${props => props.isHigh ? '#dcfce7' : '#fee2e2'};
  color: ${props => props.isHigh ? '#15803d' : '#b91c1c'};
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 800;
  display: inline-flex;
  font-size: 13px;
`;

export const Badge = styled.span`
  background: #f1f5f9;
  color: #475569;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
`;

export const ViewBtn = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: 0.2s;

  &:hover { background: #2563eb; transform: translateY(-1px); }
`;

export const DeleteBtn = styled.button`
  background: #fee2e2;
  color: #ef4444;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  &:hover { background: #fecaca; color: #dc2626; }
`;

/* MODAL QISMI */
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 20px;
`;

export const ModalContent = styled.div`
  background: white;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  padding: 20px 30px;
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;

  h3 { font-size: 20px; margin: 0; color: #0f172a; font-weight: 800; }
  span { font-size: 14px; color: #64748b; }
`;

export const ModalBody = styled.div`
  padding: 30px;
  overflow-y: auto;
  background: #fafafa;

  h4 { margin-bottom: 15px; color: #1e293b; }
`;

export const StatItem = styled.div`
  flex: 1;
  background: white;
  padding: 15px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 5px;

  strong { font-size: 24px; color: ${props => props.color}; }
  span { font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: 700; }
`;

export const AnswersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 15px;
  margin-top: 10px;
`;

export const AnswerCard = styled.div`
  padding: 12px;
  border-radius: 12px;
  background: ${props => props.correct ? '#f0fdf4' : '#fef2f2'};
  border: 1px solid ${props => props.correct ? '#bbf7d0' : '#fecaca'};
  transition: 0.2s;

  &:hover { transform: scale(1.02); }

  .q-num { 
    font-size: 11px; 
    color: #64748b; 
    font-weight: 800; 
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  .u-ans { 
    display: flex; 
    align-items: center; 
    gap: 6px; 
    font-size: 15px; 
    font-weight: 700; 
    color: ${props => props.correct ? '#15803d' : '#b91c1c'};
    word-break: break-all;
  }

  .c-ans { 
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px dashed ${props => props.correct ? '#bbf7d0' : '#fecaca'};
    font-size: 11px; 
    color: #15803d; 
    font-weight: 600;
  }
`;

export const CloseBtn = styled.button`
  background: #f1f5f9;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #64748b;
  transition: 0.2s;

  &:hover { background: #e2e8f0; color: #0f172a; }
`;