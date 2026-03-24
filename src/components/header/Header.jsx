import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiClock, FiUser, FiCheckCircle } from 'react-icons/fi';
import { useResults } from '../../provider/Provider';
import * as S from './Header.styles';

const ListeningHeader = ({ answers, testType = "Listening" }) => {
  const navigate = useNavigate();
  const { addResult, currentUser } = useResults();
  
  const initialSeconds = testType === "Reading" ? 3600 : 1800;
  const [seconds, setSeconds] = useState(initialSeconds);

  const handleFinalSubmit = useCallback((isAuto = false) => {
    const confirmText = isAuto 
      ? "Vaqt tugadi! Test avtomatik topshiriladi." 
      : `${testType} testini yakunlab, natijalarni saqlashni xohlaysizmi?`;

    if (isAuto || window.confirm(confirmText)) {
      const resultData = {
        id: Date.now(),
        // LOGIN QILGAN FOYDALANUVCHI ISMI
        studentName: currentUser ? currentUser.name : "Guest Student",
        testType: testType,
        submittedAt: new Date().toLocaleString(),
        answers: answers || {},
        status: "pending"
      };

      // 1. Natijani Providerga (va localStorage ga) saqlash
      addResult(resultData);
      
      // 2. MUAMMONI YECHIMI: 
      // Sectionga emas, to'g'ri Natijalar (Result) sahifasiga yuboramiz.
      // App.js dagi teacher pathiga moslab yozildi:
      navigate('/teacher/result'); 
    }
  }, [answers, testType, addResult, navigate, currentUser]);

  useEffect(() => {
    if (seconds <= 0) {
      handleFinalSubmit(true);
      return;
    }
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, handleFinalSubmit]);

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
        {/* Ism Headerda ko'rinib turishi uchun */}
        {currentUser && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3b82f6', fontWeight: '600' }}>
            <FiUser />
            <span>{currentUser.name}</span>
          </div>
        )}
      </S.HeaderLeft>

      <S.HeaderRight>
        <S.TimerBox>
          <FiClock />
          <span>{formatTime(seconds)}</span>
        </S.TimerBox>
        <S.SubmitBtn onClick={() => handleFinalSubmit(false)}>
          <FiCheckCircle style={{ marginRight: '5px' }} />
          Submit {testType}
        </S.SubmitBtn>
      </S.HeaderRight>
    </S.TopBar>
  );
};

export default ListeningHeader;