const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 5000;
const NYT_API_KEY = 'EhyMWDy9K5iT2H5QRhcpOrSaBGlBtm1G';

app.get('/api/books/:category', async (req, res) => {
  try {
    const category = req.params.category;
    const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${category}.json?api-key=${NYT_API_KEY}`);
    const data = await response.json();
    res.json(data.results.books || []);
  } catch (error) {
    console.error(`Error fetching ${category} books:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
