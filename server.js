// This is for my search results page. Im using Express.js
//im using open library for search results page 
app.get('/api/search', async (req, res) => {
    try {
      const { genre } = req.query;
      // Make request to Open Library API with genre parameter
      const response = await fetch(`https://openlibrary.org/subjects/${encodeURIComponent(genre)}.json`);
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Error searching by genre:', error);
      res.status(500).json({ error: 'Error searching by genre' });
    }



  });
  