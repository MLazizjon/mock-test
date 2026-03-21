import React, { createContext, useState, useContext, useEffect } from 'react';
import data from '../../src/db.json'; // Ma'lumotni import orqali olish

const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
  const [results, setResults] = useState([]);

  // Dastur yoqilganda db.json dan natijalarni bir marta yuklab oladi
  useEffect(() => {
    if (data && data.results) {
      setResults(data.results);
    }
  }, []);

  // Yangi natija qo'shish funksiyasi
  const addResult = (newResult) => {
    setResults((prev) => [...prev, newResult]);
  };

  return (
    <ResultContext.Provider value={{ results, addResult }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResults = () => useContext(ResultContext);