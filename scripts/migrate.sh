#!/bin/sh

docker-compose exec api ./node_modules/.bin/knex migrate:latest --env development --knexfile ./knexfile.js