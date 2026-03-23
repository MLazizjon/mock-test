import styled from 'styled-components';

/* CONTAINER */
export const Container = styled.div`
  padding: 40px;
  background-color: #f1f5f9;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;

  @media (max-width: 900px) {
    padding: 20px;
  }
`;

/* HEADER */
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    color: #0f172a;
    margin: 0;
    font-size: 28px;

    @media (max-width: 500px) {
      font-size: 22px;
    }
  }

  p {
    color: #64748b;
    margin-top: 5px;

    @media (max-width: 500px) {
      font-size: 12px;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

export const StatsCard = styled.div`
  background: white;
  padding: 15px 25px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  color: #2563eb;

  span { 
    display: block; 
    color: #64748b; 
    font-size: 12px;

    @media (max-width: 500px) { font-size: 11px; }
  }

  strong { 
    font-size: 20px; 
    color: #1e293b;

    @media (max-width: 500px) { font-size: 16px; }
  }
`;

/* TABLE */
export const TableCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;

  th, td { padding: 16px 20px; text-align: left; }

  th {
    background: #f8fafc;
    color: #64748b;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    border-bottom: 1px solid #e2e8f0;
  }

  td { border-bottom: 1px solid #f1f5f9; color: #334155; font-size: 14px; }

  .student-name { font-weight: 600; color: #1e293b; display: flex; align-items: center; }

  tr:hover { background: #f8fafc; }

  @media (max-width: 700px) {
    th, td { padding: 12px 10px; font-size: 12px; }
  }
`;

export const Badge = styled.span`
  background: #dbeafe;
  color: #1e40af;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;

  @media (max-width: 500px) { font-size: 10px; padding: 3px 6px; }
`;

export const TimeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #64748b;
  font-size: 13px;

  @media (max-width: 500px) { font-size: 11px; gap: 4px; }
`;

export const StatusBadge = styled.span`
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  background: ${props => props.pending ? '#fef3c7' : '#dcfce7'};
  color: ${props => props.pending ? '#92400e' : '#166534'};

  @media (max-width: 500px) {
    font-size: 10px;
    padding: 3px 6px;
  }
`;

export const ViewBtn = styled.button`
  background: #1e293b;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.2s;

  &:hover { background: #334155; }

  @media (max-width: 500px) {
    padding: 6px 10px;
    font-size: 12px;
  }
`;

/* MODAL */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  width: 90%;
  max-width: 800px;
  max-height: 80vh;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    max-height: 90vh;
  }
`;

export const ModalHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8fafc;

  h3 { font-size: 18px; color: #0f172a; }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    h3 { font-size: 16px; }
  }
`;

export const CloseBtn = styled.button`
  background: none; border: none; font-size: 24px; cursor: pointer; color: #64748b;

  @media (max-width: 500px) { font-size: 20px; }
`;

export const ModalBody = styled.div`
  padding: 25px;
  overflow-y: auto;

  .answers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;

    @media (max-width: 700px) {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }

    @media (max-width: 500px) {
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: 10px;
    }
  }
`;

export const AnswerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: #f1f5f9;
  border-radius: 8px;

  .q-num { 
    background: #1e293b; 
    color: white; 
    width: 25px; height: 25px; 
    display: flex; align-items: center; justify-content: center; 
    border-radius: 50%; 
    font-size: 12px; 

    @media (max-width: 500px) { width: 20px; height: 20px; font-size: 10px; }
  }

  .q-ans { font-weight: 600; color: #1e293b; font-size: 13px;

    @media (max-width: 500px) { font-size: 11px; }
  }
`;