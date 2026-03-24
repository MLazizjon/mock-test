import React, { useState, useEffect, useRef } from 'react';
import * as S from './listening.styles';
import { FiPlay, FiPause, FiVolume2 } from 'react-icons/fi';
// import ListeningHeader from './listening.styles';

// Audio fayllar
import audio1 from './audio/1.mp3';
import audio2 from './audio/2.mp3';
import audio3 from './audio/3.mp3';
import audio4 from './audio/2.mp3';

const Listening = () => {
  const [activePart, setActivePart] = useState(1);
  const [answers, setAnswers] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const partsData = {
    1: {
      title: "Part 1: Customer Satisfaction Survey",
      instruction: "ONE WORD AND/OR A NUMBER ONLY",
      range: [1, 10],
      audio: audio1,
      questions: [
        { id: 1, text: "Occupation: ______" },
        { id: 2, text: "Reason for visit: ______" },
        { id: 3, text: "Length of stay: ______ days" },
        { id: 4, text: "Transport used: ______" },
        { id: 5, text: "Cost of ticket: £______" },
        { id: 6, text: "Accommodation type: ______" },
        { id: 7, text: "Rating for food: ______ /10" },
        { id: 8, text: "Name of hotel: ______" },
        { id: 9, text: "Manager's name: ______" },
        { id: 10, text: "Date of arrival: ______ August" },
      ]
    },
    2: {
      title: "Part 2: New Sports Complex",
      instruction: "Choose the correct letter, A, B or C",
      range: [11, 20],
      audio: audio2,
      questions: [
        { id: 11, text: "The gym is open until:", type: "MCQ", options: ["A. 8 PM", "B. 10 PM", "C. Midnight"] },
        { id: 12, text: "Membership for students is:", type: "MCQ", options: ["A. Free", "B. Half price", "C. £20 per month"] },
        { id: 13, text: "The pool is closed on:", type: "MCQ", options: ["A. Mondays", "B. Weekends", "C. Fridays"] },
        { id: 14, text: "What should you bring?", type: "MCQ", options: ["A. A towel", "B. ID card", "C. Lock"] },
        { id: 15, text: "The cafe is located on:", type: "MCQ", options: ["A. Ground floor", "B. First floor", "C. Second floor"] },
        { id: 16, text: "The sauna is ______." },
        { id: 17, text: "Parking is ______ for members." },
        { id: 18, text: "The yoga class starts at ______." },
        { id: 19, text: "Coach's name is ______." },
        { id: 20, text: "Phone number: ______" },
      ]
    },
    3: {
      title: "Part 3: University Assignment",
      instruction: "Write NO MORE THAN THREE WORDS",
      range: [21, 30],
      audio: audio3,
      questions: [
        { id: 21, text: "Topic of research: ______" },
        { id: 22, text: "Source of information: ______" },
        { id: 23, text: "Main difficulty: ______" },
        { id: 24, text: "Deadline for draft: ______" },
        { id: 25, text: "Professor's office: Room ______" },
        { id: 26, text: "Presentation date: ______" },
        { id: 27, text: "Group size: ______ people" },
        { id: 28, text: "Key finding: ______" },
        { id: 29, text: "Software used: ______" },
        { id: 30, text: "Next meeting: ______" },
      ]
    },
    4: {
      title: "Part 4: Environmental Lecture",
      instruction: "ONE WORD ONLY",
      range: [31, 40],
      audio: audio4,
      questions: [
        { id: 31, text: "Impact of ______ on oceans." },
        { id: 32, text: "The rise in ______ levels." },
        { id: 33, text: "Main cause is ______." },
        { id: 34, text: "Loss of ______ habitat." },
        { id: 35, text: "Effect on local ______." },
        { id: 36, text: "Proposed solution: ______" },
        { id: 37, text: "Funding from ______." },
        { id: 38, text: "Research began in ______." },
        { id: 39, text: "Success rate: ______ %" },
        { id: 40, text: "Future goal: ______" },
      ]
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      setIsPlaying(false);
    }
  }, [activePart]);

  const handleInput = (id, val) => {
    setAnswers(prev => ({ ...prev, [id]: val }));
  };

  const jumpToQuestion = (id) => {
    const el = document.getElementById(`q-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const getAnsweredCount = (pId) => {
    const [start, end] = partsData[pId].range;
    return Object.keys(answers).filter(id => id >= start && id <= end).length;
  };

  const current = partsData[activePart];

  return (
    <S.PageWrapper>
      {/* <ListeningHeader answers={answers} /> */}
      <S.MainContainer>
        <S.HeaderSection>
          <S.TitleBlock>
            <S.MainTitle>IELTS Listening Full Test</S.MainTitle>
            <S.SubTitle>{current.title}</S.SubTitle>
            <S.Instruction>{current.instruction}</S.Instruction>
          </S.TitleBlock>

          <S.AudioBox>
            <audio ref={audioRef} onEnded={() => setIsPlaying(false)}>
              <source src={current.audio} type="audio/mpeg" />
            </audio>
            <S.PlayBtn onClick={() => {
              if (isPlaying) audioRef.current.pause();
              else audioRef.current.play();
              setIsPlaying(!isPlaying);
            }} active={isPlaying}>
              {isPlaying ? <FiPause /> : <FiPlay />} 
              {isPlaying ? "Pause" : `Play Part ${activePart}`}
            </S.PlayBtn>
            <S.InfoText><FiVolume2 /> Note: Audio plays only once.</S.InfoText>
          </S.AudioBox>
        </S.HeaderSection>

        <S.QuestionsContainer>
          {current.questions.map((q) => (
            <S.QuestionRow key={q.id} id={`q-${q.id}`}>
              <S.QNum>{q.id}</S.QNum>
              <S.QText>
                {q.type === "MCQ" ? (
                  <>
                    <p>{q.text}</p>
                    <S.Options>
                      {q.options.map(opt => (
                        <S.OptionLabel key={opt}>
                          <input 
                            type="radio" 
                            name={`q${q.id}`} 
                            onChange={() => handleInput(q.id, opt)}
                            checked={answers[q.id] === opt}
                          /> {opt}
                        </S.OptionLabel>
                      ))}
                    </S.Options>
                  </>
                ) : (
                  q.text.split("______").map((t, i, arr) => (
                    <React.Fragment key={i}>
                      {t}
                      {i !== arr.length - 1 && (
                        <S.Input 
                          value={answers[q.id] || ""}
                          onChange={(e) => handleInput(q.id, e.target.value)}
                        />
                      )}
                    </React.Fragment>
                  ))
                )}
              </S.QText>
            </S.QuestionRow>
          ))}
        </S.QuestionsContainer>
      </S.MainContainer>

      <S.FixedFooter>
        <S.FooterNav>
          {[1, 2, 3, 4].map(pId => (
            <S.PartTab key={pId} active={activePart === pId}>
              <div className="tab-main" onClick={() => setActivePart(pId)}>
                <span className="title">Part {pId}</span>
                {activePart !== pId && (
                  <span className="count">{getAnsweredCount(pId)} of 10</span>
                )}
              </div>
              
              {activePart === pId && (
                <S.QuestionStrip>
                  {Array.from({ length: 10 }, (_, i) => partsData[pId].range[0] + i).map(num => (
                    <S.NavSquare 
                      key={num} 
                      answered={!!answers[num]} 
                      onClick={() => jumpToQuestion(num)}
                    >
                      {num}
                    </S.NavSquare>
                  ))}
                </S.QuestionStrip>
              )}
            </S.PartTab>
          ))}
        </S.FooterNav>
      </S.FixedFooter>
    </S.PageWrapper>
  );
};

export default Listening;