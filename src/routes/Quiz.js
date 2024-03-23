import React, { useState } from 'react';

const Quiz = () => {
  const [preferences, setPreferences] = useState({
    genre: '',
    bookLength: '',
    readingSpeed: '',
    writingStyle: '',
    characters: '',
    plotType: '',
    settings: ''
    // Add more preferences as needed
  });

  const handlePreferenceChange = (preferenceType, value) => {
    setPreferences({ ...preferences, [preferenceType]: value });
  };

  const handleQuizSubmit = async () => {
    try {
      // Send preferences to the server using fetch
      const response = await fetch('/api/preferences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(preferences)
      });
      const data = await response.json();
      // Handle response from the server (recommendations)
      console.log(data);
    } catch (error) {
      console.error('Error submitting preferences:', error);
    }
  };

  return (
    <div>
      <h2>Book Recommendation Quiz</h2>
      <div>
        <h3>What genre of books do you prefer?</h3>
        <select value={preferences.genre} onChange={e => handlePreferenceChange('genre', e.target.value)}>
          <option value="">Select genre</option>
          <option value="Mystery/Thriller">Mystery/Thriller</option>
          <option value="Romance">Romance</option>
          <option value="Science Fiction/Fantasy">Science Fiction/Fantasy</option>
          <option value="Historical Fiction">Historical Fiction</option>
          <option value="Non-fiction">Non-fiction</option>
          <option value="Biography/Memoir">Biography/Memoir</option>
          <option value="Horror">Horror</option>
          <option value="Contemporary Fiction">Contemporary Fiction</option>
          <option value="Classic Literature">Classic Literature</option>
        </select>
      </div>
      <div>
        <h3>How long do you prefer your books to be?</h3>
        <select value={preferences.bookLength} onChange={e => handlePreferenceChange('bookLength', e.target.value)}>
          <option value="">Select book length</option>
          <option value="Short (less than 300 pages)">Short (less than 300 pages)</option>
          <option value="Medium (300-500 pages)">Medium (300-500 pages)</option>
          <option value="Long (more than 500 pages)">Long (more than 500 pages)</option>
        </select>
      </div>
      <div>
        <h3>How fast do you typically read?</h3>
        <select value={preferences.readingSpeed} onChange={e => handlePreferenceChange('readingSpeed', e.target.value)}>
          <option value="">Select reading speed</option>
          <option value="Slow (1-2 weeks per book)">Slow (1-2 weeks per book)</option>
          <option value="Moderate (3-4 days per book)">Moderate (3-4 days per book)</option>
          <option value="Fast (1-2 days per book)">Fast (1-2 days per book)</option>
        </select>
      </div>
      <div>
        <h3>What type of writing style do you enjoy?</h3>
        <select value={preferences.writingStyle} onChange={e => handlePreferenceChange('writingStyle', e.target.value)}>
          <option value="">Select writing style</option>
          <option value="Descriptive and lyrical">Descriptive and lyrical</option>
          <option value="Concise and to the point">Concise and to the point</option>
          <option value="Dialogue-heavy and conversational">Dialogue-heavy and conversational</option>
        </select>
      </div>
      <div>
        <h3>What kind of characters do you prefer?</h3>
        <select value={preferences.characters} onChange={e => handlePreferenceChange('characters', e.target.value)}>
          <option value="">Select character type</option>
          <option value="Complex and morally ambiguous">Complex and morally ambiguous</option>
          <option value="Relatable and everyday people">Relatable and everyday people</option>
          <option value="Larger-than-life and heroic">Larger-than-life and heroic</option>
        </select>
      </div>
      <div>
        <h3>What type of plot do you find most engaging?</h3>
        <select value={preferences.plotType} onChange={e => handlePreferenceChange('plotType', e.target.value)}>
          <option value="">Select plot type</option>
          <option value="Twisty and full of surprise">Twisty and full of surprise</option>
          <option value="Slow-burn and character-driven">Slow-burn and character-driven</option>
          <option value="Fast-paced and action-packed">Fast-paced and action-packed</option>
        </select>
      </div>
      <div>
        <h3>What settings do you prefer in books?</h3>
        <select value={preferences.settings} onChange={e => handlePreferenceChange('settings', e.target.value)}>
          <option value="">Select setting</option>
          <option value="Urban and modern cities">Urban and modern cities</option>
          <option value="Rural and countryside">Rural and countryside</option>
          <option value="Historical periods and settings">Historical periods and settings</option>
        </select>
      </div>
      <button onClick={handleQuizSubmit}>Submit</button>
    </div>
  );
};

export default Quiz;
