// Array to store notes
const notes = [];

function showNotesPage() {
  document.getElementById('landingPage').style.display = 'none';
  document.getElementById('notesPage').style.display = 'block';
}

function saveNote() {
  const noteTitle = document.getElementById('noteTitle').value;
  const noteText = document.getElementById('noteText').value;

  // Validate the input
  if (!noteTitle.trim()) {
    alert('Please enter a note title.');
    return;
  }

  if (!noteText.trim()) {
    alert('Please enter note text.');
    return;
  }

  // Create a new note object
  const newNote = {
    title: noteTitle,
    text: noteText,
  };

  // Save the new note to the notes array
  notes.push(newNote);

  // Clear the input fields
  document.getElementById('noteTitle').value = '';
  document.getElementById('noteText').value = '';

  // Update the list of existing notes
  displayNotes();
}

function displayNotes() {
  const notesList = document.getElementById('notesList');
  notesList.innerHTML = '';

  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    const li = document.createElement('li');
    li.innerHTML = `<a href="#" onclick="displayNote(${i})">${note.title}</a>`;
    notesList.appendChild(li);
  }
}

function displayNote(index) {
  const note = notes[index];
  document.getElementById('noteTitle').value = note.title;
  document.getElementById('noteText').value = note.text;
}

displayNotes();
