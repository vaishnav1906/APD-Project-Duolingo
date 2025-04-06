import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State to store languages fetched from the backend
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(''); // To track selected language
  const [lessons, setLessons] = useState([]); // To store lessons for the selected language
  const [selectedCategory, setSelectedCategory] = useState('basic'); // To track the selected lesson category

  // Fetch languages when the component mounts
  useEffect(() => {
    fetch('http://localhost:4000/languages')  // Adjust to your backend API
      .then((response) => response.json())
      .then((data) => setLanguages(data))
      .catch((error) => console.error('Error fetching languages:', error));
  }, []);

  // Fetch lessons when a language and category are selected
  useEffect(() => {
    if (selectedLanguage) {
      fetch(`http://localhost:4000/lesson/${selectedLanguage}/${selectedCategory}`)
        .then((response) => response.json())
        .then((data) => setLessons(data))
        .catch((error) => console.error('Error fetching lessons:', error));
    }
  }, [selectedLanguage, selectedCategory]);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setSelectedCategory('basic'); // Reset to basic category when a new language is selected
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Duolingo Clone! 🦜</h1>
        {!selectedLanguage ? (
          <div>
            <h2>Select a Language to Start Learning:</h2>
            {languages.length > 0 ? (
              languages.map((language, index) => (
                <button key={index} onClick={() => handleLanguageSelect(language)}>
                  {language}
                </button>
              ))
            ) : (
              <p>Loading languages...</p>
            )}
          </div>
        ) : (
          <div>
            <h2>Learning {selectedLanguage}</h2>
            <div>
              <h3>Select a Category:</h3>
              <button onClick={() => handleCategorySelect('basic')}>Basic</button>
              <button onClick={() => handleCategorySelect('numbers')}>Numbers</button>
              <button onClick={() => handleCategorySelect('greetings')}>Greetings</button>
            </div>
            <div>
              <h3>Lessons: {selectedCategory}</h3>
              {lessons.length > 0 ? (
                <ul>
                  {lessons.map((lesson, index) => (
                    <li key={index}>{lesson}</li>
                  ))}
                </ul>
              ) : (
                <p>Loading lessons...</p>
              )}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
