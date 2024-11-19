const { Pool } = require('pg');

module.exports = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false, // Important for Neon SSL connection
    },
  });

  //test
//   async function getPgVersion() {
//     const client = await pool.connect();
//     try {
//       const result = await client.query('SELECT version()');
//       console.log(result.rows[0]);
//     } finally {
//       client.release();
//     }
//   }
  
//   getPgVersion();
  