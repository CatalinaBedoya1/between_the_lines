const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'between_the_lines',
  password: '',
  port: 5432, // Default PostgreSQL port
});

// Function to query the database
const query = async (text, params) => {
  const { rows } = await pool.query(text, params);
  return rows;
};

module.exports = { query };
