const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDB,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT, 
  });



module.exports = pool;

