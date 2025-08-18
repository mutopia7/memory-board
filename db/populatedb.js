#! /usr/bin/env node

require("dotenv").config()

const { Client } = require("pg");


const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- Unique identifier
    user_name VARCHAR(100) NOT NULL,               -- Author's name
    text TEXT NOT NULL,                            -- Message text
    bg_color VARCHAR(20) DEFAULT '#ffffff',        -- Background color
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Creation date
);

INSERT INTO messages (user_name, text, bg_color) VALUES
('Adam', 'Hi there!', 'yellow'),
('Noah', 'You are also invited to the ship.', '#ff2356'),
('Rasool', 'Hello World! My name is rasool and my github is: https://github.com/mutopia7', 'skyBlue');
`;

async function main() {
  console.log("seeding..."); 
  
  let client;
  if (process.env.DATABASE_URL) {
      client = new Client({
          connectionString: process.env.DATABASE_URL,
          ssl: { rejectUnauthorized: false }
      });
  } else {
      client = new Client({
          host: process.env.HOST,
          user: process.env.USER,
          password: process.env.PASSWORD,  
          database: process.env.DATABASE,
          port: process.env.DB_PORT
      });
  }

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
