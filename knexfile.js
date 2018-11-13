// Update with your config settings.
require('dotenv').config()

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL
};

