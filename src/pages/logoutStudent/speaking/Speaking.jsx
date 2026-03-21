// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import * as S from './speaking.styles';
// import { FiMic, FiSquare, FiPlay, FiChevronRight, FiAlertCircle } from 'react-icons/fi';

// const Speaking = () => {
//   const navigate = useNavigate();
//   const [activePart, setActivePart] = useState(1);
//   const [isRecording, setIsRecording] = useState(false);
//   const [prepTime, setPrepTime] = useState(0); // Part 2 uchun tayyorgarlik vaqti
//   const [recordTime, setRecordTime] = useState(0);
//   const timerRef = useRef(null);

//   const parts = {
//     1: {
//       title: "Part 1: Introduction & Interview",
//       instruction: "Answer the following general questions about yourself (4-5 minutes).",
//       questions: [
//         "Let's talk about your hometown. Where is it located?",
//         "What do you like most about the place where you live?",
//         "Do you prefer living in a house or an apartment? Why?",
//         "Let's move on to talk about hobbies. What do you do in your free time?"
//       ]
//     },
//     2: {
//       title: "Part 2: Individual Long Turn (Cue Card)",
//       instruction: "You have 1 minute to prepare. Then speak for 1-2 minutes.",
//       cueCard: {
//         topic: "Describe a beautiful city you have visited.",
//         points: [
//           "Where the city is",
//           "When you went there",
//           "What you did there",
//           "And explain why you think it is beautiful."
//         ]
//       }
//     },
//     3: {
//       title: "Part 3: Two-way Discussion",
//       instruction: "More abstract questions related to Part 2 topic.",
//       questions: [
//         "Why do some people prefer to live in big cities?",
//         "What are the disadvantages of living in a very modern city?",
//         "How do you think cities will change in the future?",
//         "Is it important to preserve old buildings in a city? Why?"
//       ]
//     }
//   };

//   // Timer mantiqi
//   useEffect(() => {
//     if (isRecording) {
//       timerRef.current = setInterval(() => {
//         setRecordTime(prev => prev + 1);
//       }, 1000);
//     } else {
//       clearInterval(timerRef.current);
//     }
//     return () => clearInterval(timerRef.current);
//   }, [isRecording]);

//   const formatTime = (sec) => {
//     const m = Math.floor(sec / 60);
//     const s = sec % 60;
//     return `${m}:${s < 10 ? '0' : ''}${s}`;
//   };

//   const handleRecord = () => {
//     setIsRecording(!isRecording);
//     if (!isRecording) setRecordTime(0);
//   };

//   const handleNext = () => {
//     if (activePart < 3) {
//       setActivePart(activePart + 1);
//       setIsRecording(false);
//       setRecordTime(0);
//     } else {
//       if (window.confirm("Finish Speaking test?")) navigate('/student/results');
//     }
//   };

//   return (
//     <S.PageWrapper>
//       <S.Header>
//         <S.Logo>IELTS Speaking Simulation</S.Logo>
//         <S.Status>Part {activePart} of 3</S.Status>
//       </S.Header>

//       <S.MainContent>
//         {/* LEFT: QUESTIONS/CUE CARD */}
//         <S.QuestionSide>
//           <S.PartTitle>{parts[activePart].title}</S.PartTitle>
//           <S.Instruction>{parts[activePart].instruction}</S.Instruction>

//           {activePart !== 2 ? (
//             <S.QuestionList>
//               {parts[activePart].questions.map((q, i) => (
//                 <S.QuestionItem key={i}>{q}</S.QuestionItem>
//               ))}
//             </S.QuestionList>
//           ) : (
//             <S.CueCard>
//               <h3>{parts[activePart].cueCard.topic}</h3>
//               <p>You should say:</p>
//               <ul>
//                 {parts[activePart].cueCard.points.map((p, i) => (
//                   <S.CuePoint key={i}>{p}</S.CuePoint>
//                 ))}
//               </ul>
//             </S.CueCard>
//           )}
//         </S.QuestionSide>

//         {/* RIGHT: RECORDER & VIDEO SIMULATION */}
//         <S.RecorderSide>
//           <S.VideoPlaceholder>
//             <S.AvatarIcon />
//             <span>Examiner (Simulation)</span>
//           </S.VideoPlaceholder>

//           <S.ControlsBox>
//             <S.Timer display={isRecording}>{formatTime(recordTime)}</S.Timer>
//             <S.RecordBtn isRecording={isRecording} onClick={handleRecord}>
//               {isRecording ? <FiSquare /> : <FiMic />}
//               {isRecording ? "Stop Recording" : "Start Speaking"}
//             </S.RecordBtn>
            
//             <S.Warning>
//               <FiAlertCircle /> Make sure your microphone is working.
//             </S.Warning>
//           </S.ControlsBox>

//           <S.NextBtn onClick={handleNext}>
//             {activePart === 3 ? "Finish Test" : "Next Part"} <FiChevronRight />
//           </S.NextBtn>
//         </S.RecorderSide>
//       </S.MainContent>
//     </S.PageWrapper>
//   );
// };

// export default Speaking;