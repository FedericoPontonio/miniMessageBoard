#! /usr/bin/env node
require('dotenv').config();

const { Client } = require("pg");

const currentDate = new Date();

const createTable = `
CREATE TABLE IF NOT EXISTS messages (
  user_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_name VARCHAR ( 255 ),
  text VARCHAR ( 255 ),
  date TIMESTAMPTZ
);`

const insertData = `INSERT INTO messages ( user_name, text, date ) 
VALUES
  ('Fefè', 'Ciao!', $1),
  ('Fra Fra', 'Hola!', $1),
  ('Mirko', 'Buenos dìas.', $1);
;`

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false, // Important for Neon SSL connection
    },
  });
  await client.connect();
  await client.query(createTable);
  await client.query(insertData, [currentDate]);
  await client.end();
  console.log("done");
}

main();
