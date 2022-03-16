<p align="center">   <a href="http://nestjs.com/" target="blank">
  <img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a> 
</p>  

## Description

API for a future application, which will aim to help owners of dogs to find a partner for their bestfriend to reproduce
with. Created by Virginie Baumes, Mathilde Grimal, Antonin Val, Lise Guichard.

## Installation

```bash 
$ npm install 
$ docker compose up 
```

## Running the app

### Local

```bash 
 # development 
$ npm run start  

 # watch mode 
$ npm run start:dev   
```

Go to <a>http://localhost:3000/api/</a>

### Production

Create at the root of the application a .env file with:
DB_PASSWORD=yourpassword DB_NAME=yourDBNAME DB_HOST=yourDBHOST SECRETKEY=yoursecretkey

## Test

```bash 
 # unit tests 
$ npm run test

 # e2e tests 
$ npm run test:e2e

 # test coverage 
$ npm run test:cov 
```

