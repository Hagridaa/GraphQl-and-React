#RAKENNUSOHJEET TIETOKANNALLE

#haetaan base image mihin ohjeet pohjautuu
FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD root

#kopiodaan omat sql- käyttäjän luonti lausekkeet konttiin
COPY V01_initial_script.sql /docker-entrypoint-initdb.d/

#varataan portti 3306
EXPOSE 3306

#käynnistys komento, jolla hommaa starttaa
CMD ["mysqld"]


