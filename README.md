# GraphQl-and-React

Learning the basic of GraphQl with "Hands on: Full-Stack development with GraphQl and React" (also Express.js,Apollo,MySql and Docker).
Making a small app where user can post/edit/delete news.

Learning about Docker. I didnt want to install Mysql to my computer so I learned about Docker. When you want to use my app, you dont have to install everything to your computer. You just install Docker and then you can run everything in containers.

## How to run:  
* to start the frontend type: npm run client:build
* to start the backend type: npm run server

## How to run without docker-compose

build rakentaa imagen dockerfilen rakennusohjeiden perusteella. Ajetaan aina 
uudestaan, jos ohjeita muutetaan dockerfilessä.
docker build -t graphbookdb:latest . 


tämä komento käynnistää kontin, jossa tietokanta eli tietokanta käynnistyy
start mysql database:
docker run --name graphbookdb -p 3306:3306 graphbookdb:latest

build backend:
docker build -t graphbook:latest .

start backend:
docker run --name graphbook -p 8000:8000 graphbook:latest

if you want to use phpmyadmin to access the database run this:
docker run --name phpmyadmin -d --link graphbookdb:db -p 8080:80 phpmyadmin/phpmyadmin


## How to run with docker-compose
* docker-compose up

Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

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