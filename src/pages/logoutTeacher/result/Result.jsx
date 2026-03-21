import React, { useState } from 'react';
import { useResults } from '../../../provider/Provider';
import styled from 'styled-components';
import { FiClock, FiEye, FiUser, FiFileText, FiX } from 'react-icons/fi';

const Result = () => {
  const { results } = useResults();
  const [selectedResult, setSelectedResult] = useState(null); // Modal oynasi uchun

  return (
    <Container>
      <Header>
        <div>
          <h1>Teacher Dashboard</h1>
          <p>O'quvchilar tomonidan topshirilgan barcha testlar ro'yxati</p>
        </div>
        <StatsCard>
          <FiFileText size={24} />
          <div>
            <span>Jami natijalar</span>
            <strong>{results.length} ta</strong>
          </div>
        </StatsCard>
      </Header>

      <TableCard>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>O'quvchi ismi</th>
              <th>Test turi</th>
              <th>Vaqt</th>
              <th>Holati</th>
              <th>Amallar</th>
            </tr>
          </thead>
          <tbody>
            {results.length > 0 ? (
              results.map((res) => (
                <tr key={res.id}>
                  <td>#{res.id.toString().slice(-5)}</td>
                  <td className="student-name">
                    <FiUser style={{ marginRight: '8px' }} />
                    {res.studentName}
                  </td>
                  <td><Badge>{res.testType}</Badge></td>
                  <td>
                    <TimeInfo>
                      <FiClock /> {res.submittedAt}
                    </TimeInfo>
                  </td>
                  <td>
                    <StatusBadge pending={res.status === 'pending'}>
                      {res.status === 'pending' ? 'Kutilmoqda' : 'Tekshirildi'}
                    </StatusBadge>
                  </td>
                  <td>
                    <ViewBtn onClick={() => setSelectedResult(res)}>
                      <FiEye /> Ko'rish
                    </ViewBtn>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
                  Hozircha hech qanday natija yo'q.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </TableCard>

      {/* --- MODAL OYNASI (Javoblarni batafsil ko'rish uchun) --- */}
      {selectedResult && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <h3>{selectedResult.studentName} - Javoblar varaqasi</h3>
              <CloseBtn onClick={() => setSelectedResult(null)}><FiX /></CloseBtn>
            </ModalHeader>
            <ModalBody>
              <div className="answers-grid">
                {/* 1 dan 40 gacha bo'lgan barcha javoblarni chiqarish */}
                {Array.from({ length: 40 }, (_, i) => i + 1).map((num) => (
                  <AnswerItem key={num}>
                    <span className="q-num">{num}</span>
                    <span className="q-ans">{selectedResult.answers[num] || "—"}</span>
                  </AnswerItem>
                ))}
              </div>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

// --- STYLED COMPONENTS (Dizayn qismi) ---

const Container = styled.div`
  padding: 40px;
  background-color: #f1f5f9;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  h1 { color: #0f172a; margin: 0; font-size: 28px; }
  p { color: #64748b; margin-top: 5px; }
`;

const StatsCard = styled.div`
  background: white;
  padding: 15px 25px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  color: #2563eb;
  span { display: block; color: #64748b; font-size: 12px; }
  strong { font-size: 20px; color: #1e293b; }
`;

const TableCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td { padding: 16px 20px; text-align: left; }
  th { background: #f8fafc; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; }
  tr:hover { background: #f8fafc; }
  td { border-bottom: 1px solid #f1f5f9; color: #334155; font-size: 14px; }
  .student-name { font-weight: 600; color: #1e293b; display: flex; align-items: center; }
`;

const Badge = styled.span`
  background: #dbeafe;
  color: #1e40af;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
`;

const TimeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #64748b;
  font-size: 13px;
`;

const StatusBadge = styled.span`
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  background: ${props => props.pending ? '#fef3c7' : '#dcfce7'};
  color: ${props => props.pending ? '#92400e' : '#166534'};
`;

const ViewBtn = styled.button`
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
`;

// --- MODAL STYLES ---
const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  width: 90%;
  max-width: 800px;
  max-height: 80vh;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8fafc;
`;

const CloseBtn = styled.button`
  background: none; border: none; font-size: 24px; cursor: pointer; color: #64748b;
`;

const ModalBody = styled.div`
  padding: 25px;
  overflow-y: auto;
  .answers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }
`;

const AnswerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: #f1f5f9;
  border-radius: 8px;
  .q-num { background: #1e293b; color: white; width: 25px; height: 25px; display: flex; align-items: center; justify-content: center; border-radius: 50%; font-size: 12px; }
  .q-ans { font-weight: 600; color: #1e293b; }
`;

export default Result;