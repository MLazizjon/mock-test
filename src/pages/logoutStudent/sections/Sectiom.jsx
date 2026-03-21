import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './section.styles';
import { FaHeadphones, FaBookOpen, FaPenNib, FaMicrophone } from 'react-icons/fa';

const sections = [
  { id: 1, title: 'Listening', path: 'listening', info: '4 parts • 40 questions • 30 minutes', icon: <FaHeadphones />, bgColor: '#eff6ff', iconColor: '#2563eb' },
  { id: 2, title: 'Reading', path: 'reading', info: '3 passages • 40 questions • 60 minutes', icon: <FaBookOpen />, bgColor: '#f0fdf4', iconColor: '#22c55e' },
  { id: 3, title: 'Writing', path: 'writing', info: '2 tasks • 60 minutes', icon: <FaPenNib />, bgColor: '#faf5ff', iconColor: '#a855f7' },
  // { id: 4, title: 'Speaking', path: 'speaking', info: '3 parts • 11-14 minutes', icon: <FaMicrophone />, bgColor: '#fff7ed', iconColor: '#f97316' }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <S.HomeContainer>
      <S.Title>Choose Your Test Section</S.Title>
      <S.Subtitle>Select a section to begin your IELTS practice test</S.Subtitle>
      <S.Grid>
        {sections.map((item) => (
          <S.Card key={item.id}>
            <S.IconWrapper bgColor={item.bgColor} iconColor={item.iconColor}>
              {item.icon}
            </S.IconWrapper>
            <S.SectionTitle>{item.title}</S.SectionTitle>
            <S.Info>{item.info}</S.Info>
            <S.StartButton onClick={() => navigate(`/student/${item.path}`)}>
              Start Test
            </S.StartButton>
          </S.Card>
        ))}
      </S.Grid>
    </S.HomeContainer>
  );
};

export default Home;