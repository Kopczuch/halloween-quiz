import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoriesPage from './pages/CategoriesPage';
import questionsData from './data/questions.json';

function App() {
  const [selectedQuestions, setSelectedQuestions] = useState({});

	const pickRandom = (arr) => {
        if (!arr || arr.length === 0) return null;
        const index = Math.floor(Math.random() * arr.length);

        return arr[index];
    };

    useEffect(() => {
        const categories = Object.keys(questionsData);
        const newSelection = {};

        categories.forEach((categoryName) => {
            const category = questionsData[categoryName];
            newSelection[categoryName] = {};

            Object.keys(category).forEach((points) => {
                const randomQuestion = pickRandom(category[points]);
                newSelection[categoryName][points] = randomQuestion || null;
            });
        });

        setSelectedQuestions(newSelection);
    }, []);

  return (
    <div
  style={{
    backgroundColor: '#2F2F2F',
    color: '#f5f5f5',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
  }}
>
  <style>
    {`
      body, html {
        margin: 0;
        padding: 0;
        background-color: #2F2F2F !important;
        color: #f5f5f5;
        height: 100%;
      }

      .card {
        border: 2px solid #ffffff !important;
      }
    `}
  </style>
      <Router>
        <Routes basename="/halloween-quiz">
          <Route path="/" element={<CategoriesPage questions={selectedQuestions} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
