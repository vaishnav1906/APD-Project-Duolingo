const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Duolingo Clone! 🐥 Learn a new language today!</h1>');
});

app.listen(port, () => {
  console.log(`App is live at http://localhost:${port}`);
});
