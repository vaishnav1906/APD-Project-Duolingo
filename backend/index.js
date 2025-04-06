const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

// Sample lessons for each language
const lessons = {
  English: {
    basic: ['Hello', 'How are you?', 'Good morning', 'Good night', 'Thank you'],
    numbers: ['One', 'Two', 'Three', 'Four', 'Five'],
    greetings: ['Hi', 'What\'s up?', 'See you later'],
  },
  Spanish: {
    basic: ['Hola', '¿Cómo estás?', 'Buenos días', 'Buenas noches', 'Gracias'],
    numbers: ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco'],
    greetings: ['¿Qué tal?', 'Hasta luego', 'Nos vemos'],
  },
  French: {
    basic: ['Bonjour', 'Comment ça va?', 'Bon matin', 'Bonne nuit', 'Merci'],
    numbers: ['Un', 'Deux', 'Trois', 'Quatre', 'Cinq'],
    greetings: ['Salut', 'À plus', 'À bientôt'],
  },
  German: {
    basic: ['Hallo', 'Wie geht\'s?', 'Guten Morgen', 'Gute Nacht', 'Danke'],
    numbers: ['Eins', 'Zwei', 'Drei', 'Vier', 'Fünf'],
    greetings: ['Wie geht\'s?', 'Tschüss', 'Bis bald'],
  },
};

// Endpoint to get languages (for the frontend to use)
app.get('/languages', (req, res) => {
  const languageList = Object.keys(lessons);  // Extract languages from the lessons object
  res.json(languageList);
});

// Endpoint to get lessons for a selected language and category
app.get('/lesson/:language/:category', (req, res) => {
  const { language, category } = req.params;
  const languageLessons = lessons[language];

  if (languageLessons && languageLessons[category]) {
    res.json(languageLessons[category]);
  } else {
    res.status(404).send('Lesson not found');
  }
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
