const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/resume', (req, res) => {
  res.json({ message: 'This is the resume data from the backend.' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
