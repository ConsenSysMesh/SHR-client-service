#! /usr/bin/env sh

if [ "$NODE_ENV" = "test" ]
then
  knex migrate:rollback
  knex migrate:latest
  npm run test
else
  node server.js
fi