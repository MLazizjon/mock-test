import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './wrting.styles';
import { FiClock, FiCheck, FiInfo, FiType } from 'react-icons/fi';

const Writing = () => {
  const navigate = useNavigate();
  const [activeTask, setActiveTask] = useState(1);
  const [answers, setAnswers] = useState({ task1: "", task2: "" });
  const [timeLeft, setTimeLeft] = useState(3600); // 60 daqiqa

  // Timer mantiqi
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const tasks = {
    1: {
      id: 1,
      title: "Writing Task 1",
      instruction: "You should spend about 20 minutes on this task.",
      question: "You recently stayed at a hotel in another city. When you got home, you realized that you had left some important documents in the room.",
      minWords: 150,
      image: "https://www.ielts-exam.net/images/graphs/IELTS_Writing_Task_1_01.gif" 
    },
    2: {
      id: 2,
      title: "Writing Task 2",
      instruction: "You should spend about 40 minutes on this task.",
      question: "In many parts of the world, families are becoming smaller and more people are living alone. What are the causes of this trend? Does it have a positive or negative effect on society?",
      minWords: 250,
      image: null
    }
  };

  const handleTextChange = (e) => {
    const key = activeTask === 1 ? 'task1' : 'task2';
    setAnswers({ ...answers, [key]: e.target.value });
  };

  const wordCount = (str) => {
    return str.trim() === "" ? 0 : str.trim().split(/\s+/).length;
  };

  const handleSubmit = () => {
    if (window.confirm("Writing testini yakunlab, natijalarni yubormoqchimisiz?")) {
      navigate('/student/results', { state: { writingAnswers: answers } });
    }
  };

  return (
    <S.PageWrapper>
      {/* HEADER SECTION */}
      {/* <S.Header>
        <S.HeaderLeft>
          <S.LogoText>IELTS Academic Writing</S.LogoText>
        </S.HeaderLeft>
        
        <S.TimerBox critical={timeLeft < 300}>
          <FiClock /> <span>{formatTime(timeLeft)}</span>
        </S.TimerBox>

        <S.HeaderRight>
          <S.FinishBtn onClick={handleSubmit}>
            <FiCheck /> Finish Test
          </S.FinishBtn>
        </S.HeaderRight>
      </S.Header> */}

      <S.MainContainer>
        {/* LEFT PANEL: QUESTION */}
        <S.QuestionPanel>
          <S.TaskNav>
            <S.TaskTab active={activeTask === 1} onClick={() => setActiveTask(1)}>
              Task 1
            </S.TaskTab>
            <S.TaskTab active={activeTask === 2} onClick={() => setActiveTask(2)}>
              Task 2
            </S.TaskTab>
          </S.TaskNav>

          <S.QuestionContent>
            <S.InstructionBox>
              <FiInfo size={18} />
              <span>{tasks[activeTask].instruction}</span>
            </S.InstructionBox>
            
            <S.QuestionTitle>{tasks[activeTask].title}</S.QuestionTitle>
            <S.QuestionText>{tasks[activeTask].question}</S.QuestionText>
            
            {/* {tasks[activeTask].image && (
              <S.QuestionImage src={tasks[activeTask].image} alt="Writing Task" />
            )} */}
          </S.QuestionContent>
        </S.QuestionPanel>

        {/* RIGHT PANEL: EDITOR */}
        <S.EditorPanel>
          <S.EditorToolbar>
            <S.StatItem>
              <FiType />
              Word count: <strong>{wordCount(activeTask === 1 ? answers.task1 : answers.task2)}</strong>
            </S.StatItem>
            <S.TargetInfo>
              Target: {tasks[activeTask].minWords} words
            </S.TargetInfo>
          </S.EditorToolbar>

          <S.TextArea 
            placeholder="Write your answer here..."
            value={activeTask === 1 ? answers.task1 : answers.task2}
            onChange={handleTextChange}
            spellCheck="false"
          />
        </S.EditorPanel>
      </S.MainContainer>

      {/* FOOTER: STATUS BAR */}
      <S.Footer>
        <S.Status>
          Task 1: {wordCount(answers.task1)} words | Task 2: {wordCount(answers.task2)} words
        </S.Status>
      </S.Footer>
    </S.PageWrapper>
  );
};

export default Writing;