const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Define API routes
app.get('/api/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('db.json'));
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  const notes = JSON.parse(fs.readFileSync('db.json'));
  newNote.id = Date.now(); // Add a unique ID to the note
  notes.push(newNote);
  fs.writeFileSync('db.json', JSON.stringify(notes));
  res.json(newNote);
});

// Define a route to the index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
