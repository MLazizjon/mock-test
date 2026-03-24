import React, { createContext, useState, useContext, useEffect } from 'react';
import data from '../db.json'; 

const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
  // --- 1. To'g'ri javoblar kaliti ---
  // Test turi va savol raqami bo'yicha to'g'ri javoblarni shu yerga kiriting
  const correctAnswers = {
    listening: {
      1: "teacher", 2: "holiday", 3: "5", 4: "bus", 5: "20",
      6: "hotel", 7: "8", 8: "palace", 9: "john", 10: "15",
      11: "A", 12: "B", 13: "A", 14: "C", 15: "B",
      16: "large", 17: "free", 18: "9 am", 19: "smith", 20: "0123456",
      21: "education", 22: "internet", 23: "time", 24: "monday", 25: "101",
      26: "june", 27: "4", 28: "results", 29: "excel", 30: "friday",
      31: "pollution", 32: "water", 33: "carbon", 34: "animal", 35: "plants",
      36: "clean", 37: "government", 38: "2010", 39: "75", 40: "safety"
    },
    reading: {
      1: "True", 2: "False", 3: "Not Given", 4: "True", 5: "False",
      // Reading testining qolgan javoblarini shu tartibda davom ettiring
    }
  };

  // --- 2. Yordamchi funksiya: LocalStorage-dan o'qish ---
  const getInitialData = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    if (!saved) return defaultValue;
    try {
      return JSON.parse(saved);
    } catch (error) {
      console.error(`Error parsing localStorage key "${key}":`, error);
      return defaultValue;
    }
  };

  // --- 3. Statelar ---
  const [results, setResults] = useState(() => {
    return getInitialData('all_results', data.results || []);
  });

  const [activeTest, setActiveTest] = useState(localStorage.getItem('activeTest') || null);
  const [currentUser, setCurrentUser] = useState(getInitialData('user', null));

  // --- 4. Effektlar ---
  // Natijalar o'zgarganda xotiraga saqlash
  useEffect(() => {
    localStorage.setItem('all_results', JSON.stringify(results));
  }, [results]);

  // --- 5. Funksiyalar ---

  // Ballni hisoblash: Katta-kichik harf va ortiqcha bo'shliqlarni inobatga olmaydi
  const calculateScore = (userAnswers, testType = "listening") => {
    let score = 0;
    const typeKey = testType.toLowerCase();
    const answersKey = correctAnswers[typeKey] || {};

    Object.keys(userAnswers).forEach((qId) => {
      const uAns = userAnswers[qId]?.toString().toLowerCase().trim();
      const cAns = answersKey[qId]?.toString().toLowerCase().trim();

      if (uAns && uAns === cAns) {
        score++;
      }
    });
    return score;
  };

  // Natijani qo'shish va avtomatik ball hisoblash
  const addResult = (newResult) => {
    const finalScore = calculateScore(newResult.answers, newResult.testType);
    
    const resultWithScore = {
      ...newResult,
      id: Date.now(), // Takrorlanmas ID
      score: finalScore,
      totalQuestions: 40,
      submittedAt: new Date().toLocaleString()
    };

    setResults((prev) => [...prev, resultWithScore]);
    setActiveTest(null);
    localStorage.removeItem('activeTest');
  };

  // Login/Logout
  const loginUser = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logoutUser = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('activeTest');
    setActiveTest(null);
  };

  const startTest = (testType) => {
    setActiveTest(testType);
    localStorage.setItem('activeTest', testType);
  };

  const deleteResult = (id) => {
    setResults((prev) => prev.filter(res => res.id !== id));
  };

  const clearAllResults = () => {
    if (window.confirm("Barcha natijalarni butunlay o'chirib tashlamoqchimisiz?")) {
      setResults([]);
      localStorage.removeItem('all_results');
    }
  };

  // --- 6. Provider Value ---
  return (
    <ResultContext.Provider 
      value={{ 
        results, 
        addResult, 
        deleteResult,
        clearAllResults,
        activeTest, 
        startTest, 
        currentUser, 
        loginUser, 
        logoutUser,
        calculateScore,
        correctAnswers 
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

// Custom hook
export const useResults = () => {
  const context = useContext(ResultContext);
  if (!context) {
    throw new Error("useResults must be used within a ResultProvider");
  }
  return context;
};