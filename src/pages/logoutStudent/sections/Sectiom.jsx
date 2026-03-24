import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useResults } from '../../../provider/Provider';
import * as S from './section.styles';
import { FaHeadphones, FaBookOpen, FaPenNib } from 'react-icons/fa';

const sections = [
  { id: 1, title: 'Listening', path: 'listening', info: '4 parts • 40 questions • 30 minutes', icon: <FaHeadphones />, bgColor: '#eff6ff', iconColor: '#2563eb' },
  { id: 2, title: 'Reading', path: 'reading', info: '3 passages • 40 questions • 60 minutes', icon: <FaBookOpen />, bgColor: '#f0fdf4', iconColor: '#22c55e' },
  { id: 3, title: 'Writing', path: 'writing', info: '2 tasks • 60 minutes', icon: <FaPenNib />, bgColor: '#faf5ff', iconColor: '#a855f7' },
];

const Home = () => {
  const navigate = useNavigate();
  const { activeTest, startTest } = useResults();

  const handleStart = (path, title) => {
    // Agar biron test boshlangan bo'lsa va u hozirgi tanlangan bo'lmasa - bloklaymiz
    if (activeTest && activeTest !== title) {
      alert(`Sizda hozir ${activeTest} testi faol. Avval uni topshirib tugating!`);
      return;
    }
    
    // Testni boshlangan deb belgilaymiz va yo'naltiramiz
    startTest(title);
    navigate(`/student/${path}`);
  };

  return (
    <S.HomeContainer>
      <S.Title>Choose Your Test Section</S.Title>
      <S.Subtitle>
        {activeTest ? `Diqqat! Sizda ${activeTest} testi davom etmoqda.` : "Select a section to begin your IELTS practice test"}
      </S.Subtitle>
      <S.Grid>
        {sections.map((item) => {
          // Boshqa testlar bloklanganini tekshirish
          const isBlocked = activeTest && activeTest !== item.title;

          return (
            <S.Card key={item.id} style={{ opacity: isBlocked ? 0.6 : 1, cursor: isBlocked ? 'not-allowed' : 'default' }}>
              <S.IconWrapper bgColor={item.bgColor} iconColor={item.iconColor}>
                {item.icon}
              </S.IconWrapper>
              <S.SectionTitle>{item.title}</S.SectionTitle>
              <S.Info>{item.info}</S.Info>
              <S.StartButton 
                onClick={() => handleStart(item.path, item.title)}
                disabled={isBlocked}
                style={{ backgroundColor: isBlocked ? '#94a3b8' : '' }}
              >
                {activeTest === item.title ? "Continue Test" : isBlocked ? "Locked" : "Start Test"}
              </S.StartButton>
            </S.Card>
          );
        })}
      </S.Grid>
    </S.HomeContainer>
  );
};

export default Home;