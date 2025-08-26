const mysql = require('mysql2/promise');
const pool = mysql.createPool({
  host:'localhost',
  user:' MySQL95',
  password:'zjxndgw183246NZK.', 
  database:'wm_market',
  waitForConnections:true,
  connectionLimit:10
});
module.exports = pool;
