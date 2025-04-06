import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State to store languages fetched from the backend
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(''); // To track selected language

  // Fetch languages when the component mounts
  useEffect(() => {
    fetch('http://localhost:4000/languages')  // Adjust to your backend API
      .then((response) => response.json())
      .then((data) => setLanguages(data))
      .catch((error) => console.error('Error fetching languages:', error));
  }, []);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
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
            <p>Welcome to your {selectedLanguage} learning journey!</p>
            {/* Add further lessons or quizzes here */}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
