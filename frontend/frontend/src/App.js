import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';  // Optional: Add some CSS styling

// Main App Component
function App() {
  // State to store languages fetched from the backend
  const [languages, setLanguages] = useState([]);

  // Fetch languages when the component mounts
  useEffect(() => {
    fetch('http://localhost:4000/languages')  // Adjust to your backend API
      .then((response) => response.json())
      .then((data) => setLanguages(data))
      .catch((error) => console.error('Error fetching languages:', error));
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Duolingo Clone! 🦜</h1>
          <p>Learn a new language today</p>

          {/* Display list of languages */}
          <ul>
            {languages.length > 0 ? (
              languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))
            ) : (
              <p>Loading languages...</p>
            )}
          </ul>

          {/* Link to the "Start Learning" page */}
          <Link to="/start">
            <button>Start Learning</button>
          </Link>
        </header>

        {/* Define Routes */}
        <Switch>
          <Route path="/start">
            <StartLearning />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// New component for the "Start Learning" page
function StartLearning() {
  return (
    <div>
      <h2>Welcome to the Lesson!</h2>
      <p>Choose a language and start your learning journey!</p>
      {/* You can add lesson content here in the future */}
    </div>
  );
}

export default App;

