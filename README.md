# SHR-client-service

This is the repo for handling CRUD functions for a client for TravelBlocks.


### Stack
We’ll use a simple NodeJS service with a Postgres for our backend.
- NodeJS 8.6.0
- Postgres 10.1
- Docker for Mac 1.13.0


### How to run the client microservices

We need to have docker installed previously.

```
$ bash < docker-compose up -d --build
```

This will start the web and db containers and visit the following url: `http://localhost:3000/client`

Other commands:

```
$ bash < docker-compose stop
```

```
$ bash < docker-compose logs
```
 

