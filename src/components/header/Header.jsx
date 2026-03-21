import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiClock } from 'react-icons/fi';
import { useResults } from '../../provider/Provider';
import * as S from './Header.styles';

const ListeningHeader = ({ answers, testType = "Listening" }) => {
  const navigate = useNavigate();
  const { addResult } = useResults();
  
  // Reading bo'lsa 60 minut (3600s), Listening bo'lsa 30 minut (1800s)
  const initialSeconds = testType === "Reading" ? 3600 : 1800;
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) {
      handleFinalSubmit(true);
      return;
    }
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const handleFinalSubmit = (isAuto = false) => {
    const confirmText = isAuto 
      ? "Vaqt tugadi! Test avtomatik topshiriladi." 
      : `${testType} testini yakunlab, natijalarni saqlashni xohlaysizmi?`;

    if (isAuto || window.confirm(confirmText)) {
      const resultData = {
        id: Date.now(),
        studentName: "Anvar Narzullayev",
        testType: testType, // Natija aynan shu nom bilan saqlanadi
        submittedAt: new Date().toLocaleString(),
        answers: answers,
        status: "completed"
      };

      addResult(resultData);
      navigate('/teacher/result');
    }
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <S.TopBar>
      <S.HeaderLeft>
        <S.LogoText onClick={() => navigate('/student')}>IELTS Mock</S.LogoText>
        <S.Divider />
        <S.TestTitle>{testType} Practice Test</S.TestTitle>
      </S.HeaderLeft>

      <S.HeaderRight>
        <S.TimerBox>
          <FiClock />
          <span>{formatTime(seconds)}</span>
        </S.TimerBox>
        <S.SubmitBtn onClick={() => handleFinalSubmit(false)}>
          Submit {testType}
        </S.SubmitBtn>
      </S.HeaderRight>
    </S.TopBar>
  );
};

export default ListeningHeader;