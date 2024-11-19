#! /usr/bin/env node
require('dotenv').config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  user_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_name VARCHAR ( 255 ),
  text VARCHAR ( 255 )
);

INSERT INTO messages ( user_name, text ) 
VALUES
  ('Fefè', 'Ciao!'),
  ('Fra Fra', 'Hola!'),
  ('Mirko', 'Buenos dìas.');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false, // Important for Neon SSL connection
    },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
