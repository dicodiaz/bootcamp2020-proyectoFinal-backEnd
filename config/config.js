const { Pool } = require('pg');
const connectionString = 'postgresql://postgres:postgres@localhost:5432/proyecto_final';
// const connectionString = 'postgres://oywkpxqyftdaww:e92fcb44f3e3c16e677de95dfd35e90bc72ba3809f2e0450e733bd2891411e21@ec2-54-163-47-62.compute-1.amazonaws.com:5432/d3bo4kc3ghteg7';
const pool = new Pool({
  connectionString: connectionString,
  ssl: false
});

module.exports = { pool };
