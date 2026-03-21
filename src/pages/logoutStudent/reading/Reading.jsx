import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './reading.styles';
import { FiCheck, FiFlag } from 'react-icons/fi';
// import ListeningHeader from '../../../components/header/Header'; 

const Reading = () => {
  const navigate = useNavigate();
  const [activePart, setActivePart] = useState(1);
  const [answers, setAnswers] = useState({});

  const passages = {
    1: {
      title: "The Step Pyramid of Djoser",
      range: [1, 13],
      text: `The pyramids are the most famous monuments of ancient Egypt and still hold enormous interest for people in the present day. These grand, impressive structures were built as burial sites for the pharaohs and remain some of the most life-like representations of the ancient Egyptian culture.

      The earliest pyramid was the Step Pyramid of Djoser, built during the Third Dynasty. Prior to Djoser’s reign, tombs were rectangular monuments made of dried clay bricks, which covered underground passages where the deceased person was buried. For reasons that remain unclear, Djoser’s main official, Imhotep, conceived of building a taller, more impressive tomb for his king by stacking stone slabs on top of one another.

      This process eventually resulted in the creation of the first step pyramid. The construction was a massive undertaking, requiring thousands of laborers and a sophisticated understanding of engineering. The pyramid was surrounded by a complex of temples and courtyards, all enclosed by a high wall. The burial chamber of the king was hidden deep underground, reached by a maze of tunnels designed to discourage grave robbers.`,
      questions: [
        { id: 1, type: "TFNG", text: "The pyramids were built to serve as tombs for Egyptian kings.", options: ["TRUE", "FALSE", "NOT GIVEN"] },
        { id: 2, type: "TFNG", text: "Djoser was the first pharaoh to be buried in a stone pyramid.", options: ["TRUE", "FALSE", "NOT GIVEN"] },
        { id: 3, type: "TFNG", text: "Imhotep was a pharaoh during the Third Dynasty.", options: ["TRUE", "FALSE", "NOT GIVEN"] },
        { id: 4, type: "TFNG", text: "The underground passages were meant to protect the pharaoh's body.", options: ["TRUE", "FALSE", "NOT GIVEN"] },
        { id: 5, type: "TFNG", text: "The construction of the pyramid was completed in less than ten years.", options: ["TRUE", "FALSE", "NOT GIVEN"] },
        { id: 6, type: "TFNG", text: "Stone slabs were used because clay bricks were unavailable.", options: ["TRUE", "FALSE", "NOT GIVEN"] },
        { id: 7, type: "TFNG", text: "The maze of tunnels was successful in keeping out all robbers.", options: ["TRUE", "FALSE", "NOT GIVEN"] },
        { id: 8, type: "GapFill", text: "The Step Pyramid was built by stacking ______ on top of each other.", options: ["stone slabs", "clay bricks", "wooden beams", "gold plates"] },
        { id: 9, type: "GapFill", text: "Imhotep was Djoser's most important ______.", options: ["official", "soldier", "enemy", "successor"] },
        { id: 10, type: "GapFill", text: "The tomb was designed to be much ______ than previous monuments.", options: ["taller", "smaller", "wider", "darker"] },
        { id: 11, type: "TFNG", text: "Egyptian culture is well represented by pyramids.", options: ["TRUE", "FALSE", "NOT GIVEN"] },
        { id: 12, type: "TFNG", text: "Laborers were paid well for their work.", options: ["TRUE", "FALSE", "NOT GIVEN"] },
        { id: 13, type: "TFNG", text: "The complex included a high wall.", options: ["TRUE", "FALSE", "NOT GIVEN"] },
      ]
    },
    2: {
      title: "The World Wide Web and its Impact",
      range: [14, 26],
      text: `In 1989, Tim Berners-Lee, a British scientist, invented the World Wide Web (WWW) while working at CERN. The main goal was to allow scientists around the world to share information automatically. At that time, information was difficult to access because different computers used different systems.

      The first website was launched in 1991, and it explained what the World Wide Web was. By the mid-1990s, the Web had started to change the way people lived. It revolutionized communication, business, and education. Online shopping, social media, and digital banking all became possible because of this invention.

      However, the rapid growth of the Web also brought challenges. Issues such as data privacy, cybercrime, and the digital divide became major concerns for governments and individuals alike. Despite these problems, the Web remains one of the most significant inventions in human history, connecting billions of people across the globe.`,
      questions: [
        { id: 14, type: "MCQ", text: "Who invented the World Wide Web?", options: ["A. Bill Gates", "B. Tim Berners-Lee", "C. Steve Jobs", "D. Mark Zuckerberg"] },
        { id: 15, type: "MCQ", text: "Where was the inventor working when he created the WWW?", options: ["A. NASA", "B. Oxford University", "C. CERN", "D. Google"] },
        { id: 16, type: "MCQ", text: "What was the initial purpose of the Web?", options: ["A. Online shopping", "B. Information sharing", "C. Social networking", "D. Entertainment"] },
        { id: 17, type: "MCQ", text: "What year was the first website launched?", options: ["A. 1989", "B. 1991", "C. 1995", "D. 2000"] },
        { id: 18, type: "TFNG", text: "Different computer systems made information sharing easy before the WWW.", options: ["TRUE", "FALSE", "NOT GIVEN"] },
        { id: 19, type: "TFNG", text: "The Web has had a major impact on education.", options: ["TRUE", "FALSE", "NOT GIVEN"] },
        { id: 20, type: "TFNG", text: "Cybercrime was a problem before the Web existed.", options: ["TRUE", "FALSE", "NOT GIVEN"] },
        { id: 21, type: "MCQ", text: "Which issue is mentioned as a challenge of the Web?", options: ["A. Slow speed", "B. Data privacy", "C. High cost", "D. Limited access"] },
        { id: 22, type: "MCQ", text: "The Web connects ______ of people.", options: ["A. Millions", "B. Billions", "C. Thousands", "D. Hundreds"] },
        { id: 23, type: "TFNG", text: "Tim Berners-Lee is an American scientist.", options: ["TRUE", "FALSE", "NOT GIVEN"] },
        { id: 24, type: "TFNG", text: "Digital banking is a result of the WWW.", options: ["TRUE", "FALSE", "NOT GIVEN"] },
        { id: 25, type: "TFNG", text: "Governments are not concerned about the digital divide.", options: ["TRUE", "FALSE", "NOT GIVEN"] },
        { id: 26, type: "TFNG", text: "The first website explained the WWW.", options: ["TRUE", "FALSE", "NOT GIVEN"] },
      ]
    },
    3: {
      title: "The Psychology of Memory",
      range: [27, 40],
      text: `Memory is a fundamental mental process that allows individuals to encode, store, and retrieve information. Psychologists distinguish between different types of memory, primarily short-term and long-term memory.

      Short-term memory, also known as working memory, holds a limited amount of information for a brief period, typically around 20 to 30 seconds. Long-term memory, on the other hand, has an almost limitless capacity and can store information for years.

      The process of forgetting is also a key area of study. Ebbinghaus, a pioneer in memory research, discovered the 'forgetting curve,' which shows that information is lost rapidly shortly after it is learned, but the rate of loss levels off over time. Factors such as attention, repetition, and emotional significance can all influence how well a memory is retained. Modern research continues to explore how the brain physically stores these memories in neural networks.`,
      questions: [
        { id: 27, type: "YESNO", text: "Memory consists of three main stages: encoding, storage, and retrieval.", options: ["YES", "NO", "NOT GIVEN"] },
        { id: 28, type: "YESNO", text: "Short-term memory can hold information for several minutes.", options: ["YES", "NO", "NOT GIVEN"] },
        { id: 29, type: "YESNO", text: "Long-term memory has a restricted capacity.", options: ["YES", "NO", "NOT GIVEN"] },
        { id: 30, type: "YESNO", text: "Ebbinghaus was the first to study neural networks.", options: ["YES", "NO", "NOT GIVEN"] },
        { id: 31, type: "GapFill", text: "The 'forgetting curve' shows that loss of info is fastest ______ after learning.", options: ["shortly", "long", "never", "always"] },
        { id: 32, type: "GapFill", text: "Working memory is another name for ______ memory.", options: ["short-term", "long-term", "emotional", "neural"] },
        { id: 33, type: "YESNO", text: "Repetition helps in retaining memories.", options: ["YES", "NO", "NOT GIVEN"] },
        { id: 34, type: "YESNO", text: "Emotional significance has no effect on memory.", options: ["YES", "NO", "NOT GIVEN"] },
        { id: 35, type: "YESNO", text: "Information loss levels off eventually.", options: ["YES", "NO", "NOT GIVEN"] },
        { id: 36, type: "YESNO", text: "The brain uses neural networks for storage.", options: ["YES", "NO", "NOT GIVEN"] },
        { id: 37, type: "YESNO", text: "Short-term memory is also called working memory.", options: ["YES", "NO", "NOT GIVEN"] },
        { id: 38, type: "YESNO", text: "Ebbinghaus studied the process of forgetting.", options: ["YES", "NO", "NOT GIVEN"] },
        { id: 39, type: "YESNO", text: "Modern research is no longer interested in memory.", options: ["YES", "NO", "NOT GIVEN"] },
        { id: 40, type: "YESNO", text: "Long-term memory can last for a lifetime.", options: ["YES", "NO", "NOT GIVEN"] },
      ]
    }
  };

  const handleSelect = (qId, val) => {
    setAnswers({ ...answers, [qId]: val });
  };

  const jumpToQuestion = (id) => {
    const el = document.getElementById(`q-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <S.PageWrapper>
      {/* Headerga answers va testType uzatilyapti */}
      {/* <ListeningHeader answers={answers} testType="Reading" /> */}

      <S.MainContainer>
        <S.TextPanel>
          <S.PassageLabel>Reading Passage {activePart}</S.PassageLabel>
          <S.ArticleTitle>{passages[activePart].title}</S.ArticleTitle>
          <S.ArticleText>{passages[activePart].text}</S.ArticleText>
        </S.TextPanel>

        <S.QuestionPanel>
          <S.QuestionHeader>Questions {passages[activePart].range[0]} - {passages[activePart].range[1]}</S.QuestionHeader>
          {passages[activePart].questions.map((q) => (
            <S.QuestionBox key={q.id} id={`q-${q.id}`}>
              <S.QRow>
                <S.QNum>{q.id}</S.QNum>
                <p>{q.text}</p>
              </S.QRow>
              <S.OptionsWrapper horizontal={q.type === "TFNG" || q.type === "YESNO"}>
                {q.options.map(opt => (
                  <S.OptionLabel key={opt} selected={answers[q.id] === opt}>
                    <input 
                      type="radio" 
                      name={`q-${q.id}`} 
                      checked={answers[q.id] === opt}
                      onChange={() => handleSelect(q.id, opt)}
                    />
                    {opt}
                  </S.OptionLabel>
                ))}
              </S.OptionsWrapper>
            </S.QuestionBox>
          ))}
        </S.QuestionPanel>
      </S.MainContainer>

      <S.FixedFooter>
        <S.FooterNav>
          {[1, 2, 3].map(pId => (
            <S.PartTab key={pId} active={activePart === pId}>
              <div className="tab-main" onClick={() => setActivePart(pId)}>
                <span className="title">Part {pId}</span>
                {activePart !== pId && (
                   <span className="count">
                     {Object.keys(answers).filter(id => id >= passages[pId].range[0] && id <= passages[pId].range[1]).length} of {passages[pId].range[1] - passages[pId].range[0] + 1}
                   </span>
                )}
              </div>
              {activePart === pId && (
                <S.QuestionStrip>
                  {Array.from({ length: passages[pId].range[1] - passages[pId].range[0] + 1 }, (_, i) => passages[pId].range[0] + i).map(num => (
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

export default Reading;