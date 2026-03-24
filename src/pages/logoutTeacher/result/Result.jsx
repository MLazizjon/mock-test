import React, { useState } from 'react';
import { useResults } from '../../../provider/Provider';
import * as S from './result.styles'; 
import { FiEye, FiCheck, FiX, FiUser, FiTrash2 } from 'react-icons/fi';

const Result = () => {
  const { results, deleteResult, clearAllResults, currentUser, correctAnswers } = useResults();
  const [selectedResult, setSelectedResult] = useState(null);

  // Foydalanuvchiga qarab filtrlash
  const displayResults = currentUser?.role === 'teacher' 
    ? results 
    : results.filter(res => res.studentName.includes(currentUser?.name));

  return (
    <S.Container>
      <S.Header>
        <div className="title-area">
          <h1>{currentUser?.role === 'teacher' ? 'Admin Panel: Natijalar' : 'Mening Natijalarim'}</h1>
          <p>Test topshirgan o'quvchilar va ularning ballari</p>
        </div>

        {/* --- HAMMASINI O'CHIRISH TUGMASI (Faqat Admin uchun) --- */}
        {currentUser?.role === 'teacher' && results.length > 0 && (
          <S.ViewBtn 
            style={{ backgroundColor: '#ef4444' }} 
            onClick={clearAllResults}
          >
            <FiTrash2 /> Hammasini tozalash
          </S.ViewBtn>
        )}
      </S.Header>

      <S.TableCard>
        <S.Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>O'quvchi</th>
              <th>Test Turi</th>
              <th>Ball (Score)</th>
              <th>Sana</th>
              <th>Amallar</th>
            </tr>
          </thead>
          <tbody>
            {displayResults.length > 0 ? (
              displayResults.map((res) => (
                <tr key={res.id}>
                  <td>#{res.id.toString().slice(-5)}</td>
                  <td className="student-info">
                    <FiUser /> {res.studentName}
                  </td>
                  <td><S.Badge>{res.testType}</S.Badge></td>
                  <td>
                    <S.ScoreBadge isHigh={res.score >= 30}>
                      {res.score} / {res.totalQuestions || 40}
                    </S.ScoreBadge>
                  </td>
                  <td>{res.submittedAt.split(',')[0]}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {/* KO'RISH TUGMASI */}
                      <S.ViewBtn onClick={() => setSelectedResult(res)}>
                        <FiEye /> Ko'rish
                      </S.ViewBtn>

                      {/* --- YAKKA TARTIBDA O'CHIRISH TUGMASI (Faqat Admin uchun) --- */}
                      {currentUser?.role === 'teacher' && (
                        <S.DeleteBtn onClick={() => {
                          if(window.confirm("Ushbu natijani o'chirib tashlamoqchimisiz?")) {
                            deleteResult(res.id);
                          }
                        }}>
                          <FiTrash2 />
                        </S.DeleteBtn>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '40px' }}>Ma'lumot topilmadi</td>
              </tr>
            )}
          </tbody>
        </S.Table>
      </S.TableCard>

      {/* --- MODAL: NATIJANI KO'RISH --- */}
      {selectedResult && (
        <S.ModalOverlay onClick={() => setSelectedResult(null)}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.ModalHeader>
              <div>
                <h3>{selectedResult.studentName}</h3>
                <span>{selectedResult.testType} - {selectedResult.submittedAt}</span>
              </div>
              <S.CloseBtn onClick={() => setSelectedResult(null)}><FiX /></S.CloseBtn>
            </S.ModalHeader>

            <S.ModalBody>
              <div style={{ display: 'flex', gap: '20px', marginBottom: '25px' }}>
                <S.StatItem color="#10b981">
                  <strong>{selectedResult.score}</strong>
                  <span>To'g'ri</span>
                </S.StatItem>
                <S.StatItem color="#ef4444">
                  <strong>{(selectedResult.totalQuestions || 40) - selectedResult.score}</strong>
                  <span>Xato</span>
                </S.StatItem>
                <S.StatItem color="#3b82f6">
                  <strong>{Math.round((selectedResult.score / 40) * 100)}%</strong>
                  <span>Foiz</span>
                </S.StatItem>
              </div>

              <h4>Batafsil tahlil:</h4>
              <S.AnswersGrid>
                {Array.from({ length: 40 }, (_, i) => i + 1).map((num) => {
                  const userAns = selectedResult.answers[num] || "—";
                  const testTypeKey = selectedResult.testType.toLowerCase();
                  const cAns = correctAnswers[testTypeKey]?.[num] || "Noma'lum";
                  const isCorrect = userAns.toString().toLowerCase().trim() === cAns.toString().toLowerCase().trim();

                  return (
                    <S.AnswerCard key={num} correct={isCorrect}>
                      <div className="q-num">Savol {num}</div>
                      <div className="u-ans">
                        {isCorrect ? <FiCheck color="#10b981" /> : <FiX color="#ef4444" />}
                        {userAns}
                      </div>
                      {!isCorrect && <div className="c-ans">Asli: {cAns}</div>}
                    </S.AnswerCard>
                  );
                })}
              </S.AnswersGrid>
            </S.ModalBody>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.Container>
  );
};

export default Result;