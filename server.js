const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;
const NYT_API_KEY = 'EhyMWDy9K5iT2H5QRhcpOrSaBGlBtm1G';
const GOOGLE_BOOKS_API_KEY = 'AIzaSyCSGZabU9B0s_HlH9cmg7BBCjxFQZl0x3g';

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

app.get('/api/book-cover', async (req, res) => {
  const { bookTitle } = req.query;
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(bookTitle)}`);
    const data = await response.json();
    if (data.items && data.items.length > 0 && data.items[0].volumeInfo && data.items[0].volumeInfo.imageLinks) {
      const thumbnail = data.items[0].volumeInfo.imageLinks.thumbnail;
      res.json({ success: true, thumbnail });
    } else {
      res.status(404).json({ success: false, message: 'Book cover not found' });
    }
  } catch (error) {
    console.error('Error fetching book cover:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
