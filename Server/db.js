const Pool = require('pg').Pool;

const pool = new Pool({
  user: "",
  host: "localhost",
  database: "btl",
  password: "lifeme",
  port: "5432", 
});



module.exports = pool;




