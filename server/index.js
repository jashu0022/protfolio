const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Catch-all handler to serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Port where the server will listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
