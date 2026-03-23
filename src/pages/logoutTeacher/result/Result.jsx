import React, { useState } from 'react';
import { useResults } from '../../../provider/Provider';
import { 
  Container, Header, StatsCard, TableCard, Table, Badge, TimeInfo, StatusBadge, ViewBtn,
  ModalOverlay, ModalContent, ModalHeader, CloseBtn, ModalBody, AnswerItem
} from './result.styles';
import { FiClock, FiEye, FiUser, FiFileText, FiX } from 'react-icons/fi';

const Result = () => {
  const { results } = useResults();
  const [selectedResult, setSelectedResult] = useState(null);

  return (
    <Container>
      {/* HEADER */}
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

      {/* TABLE CARD */}
      <TableCard>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>O'quvchi</th>
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

      {/* --- MODAL OYNASI --- */}
      {selectedResult && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <h3>{selectedResult.studentName} - Javoblar varaqasi</h3>
              <CloseBtn onClick={() => setSelectedResult(null)}><FiX /></CloseBtn>
            </ModalHeader>
            <ModalBody>
              <div className="answers-grid">
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

export default Result;