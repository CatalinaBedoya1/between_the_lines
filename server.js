const express = require('express');
const fetch = require('node-fetch'); // Import Fetch API
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Endpoint to handle POST requests to /api/preferences
app.post('/api/preferences', async (req, res) => {
    const preferences = req.body; // Preferences sent from the client
    console.log('Received preferences:', preferences);
  
    try {
      // Build search query from user preferences
      const searchQuery = buildSearchQuery(preferences);
      console.log('Search query:', searchQuery);
  
      // Fetch book recommendations from Open Library API based on search query
      const response = await fetch(`https://openlibrary.org/search.json?q=${searchQuery}`);
      const data = await response.json(); // Extract JSON data from the response
      console.log('Open Library API response:', data);
  
      if (response.ok) {
        // Extract book recommendations from the API response
        const recommendations = extractRecommendations(data);
        console.log('Recommendations:', recommendations);
  
        // Send the recommendations back to the client
        res.json({ recommendations });
      } else {
        // Handle unsuccessful response from Open Library API
        console.error('Open Library API error:', data.error);
        res.status(500).json({ error: 'Error fetching recommendations' });
      }
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      res.status(500).json({ error: 'Error fetching recommendations' });
    }
  });
  

// Function to build the query for the Open Library API based on user preferences
function buildQuery(preferences) {
    // Construct the query parameters based on user preferences
    const queryParams = {
        q: constructSolrQuery(preferences), // Construct the Solr query based on preferences
        fields: '*', // Get all fields
        sort: 'new', // Sort by relevance
        lang: 'en', // Language code (e.g., English)
        limit: 10 // Limit the number of results to 10
        // Add more parameters as needed
    };
    // Encode query parameters and return as string
    return new URLSearchParams(queryParams).toString();
}

// Function to construct the Solr query based on user preferences
function constructSolrQuery(preferences) {
    // Construct the Solr query based on user preferences
    // For example, you might construct a query to search for books based on genre, book length, etc.
    // Here's a basic example:
    let solrQuery = '';
    if (preferences.genre) {
        solrQuery += `subject:"${preferences.genre}"`; // Search by genre
    }
    // Add more criteria based on other preferences
    return solrQuery;
}


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
