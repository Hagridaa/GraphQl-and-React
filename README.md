# GraphQl-and-React

Learning the basic of GraphQl with "Hands on: Full-Stack development with GraphQl and React" (also Express.js,Apollo,MySql and Docker).
Making a small app where user can post/edit/delete news.

Learning about Docker. I didnt want to install Mysql to my computer so I learned about Docker. When you want to use my app, you dont have to install everything to your computer. You just install Docker and then you can run everything in containers.

## Requirements
* Docker
 or
* Node 12
* MySql 

## How to run with docker-compose
* docker-compose up

Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

## How to run without docker-compose

Build command builds image based on building instructions in Dockerfile. This command has to be run everytime when something is changed in Dockerfile.
docker build -t graphbookdb:latest . 

This command runs container with database.
start mysql database:
docker run --name graphbookdb -p 3306:3306 graphbookdb:latest

build backend:
docker build -t backend:latest .

start backend:
docker run --name backend -p 8000:8000 backend:latest

build frontend: 
docker build -t frontend:latest . -f Dockerfile.frontend

start fontend:
docker run --name frontend -p 80:80 frontend:latest

if you want to use phpmyadmin to access the database run this:
docker run --name phpmyadmin -d --link graphbookdb:db -p 8080:80 phpmyadmin/phpmyadmin


## How to run without Docker:  
* npm install
* to start the frontend type: npm run client:build
* to start the backend type: npm run server


## db migrations with sequelize
``sequelize db:migrate --migrations-path src/server/migrations --config src/server/config/index.js``

to undo migration write:
``sequelize db:migrate:undo --migrations-path src/server/migrations --config src/server/config/index.js``

## Seeding with sequelize
With sequelize cli we can seed data to the database
 ``sequelize db:seed:all --seeders-path src/server/seeders/ --config src/server/config/index.js``

Example commands how to generate seeders data:
``sequelize seed:generate --name fake-users --seeders-path src/server/seeders``
``sequelize seed:generate --name fake-chats --seeders-path src/server/seeders``
