# luodaan devuser käyttäjä ja graphbook_dev tietokanta

CREATE USER 'devuser'@'%' IDENTIFIED WITH caching_sha2_password BY '***';
GRANT ALL PRIVILEGES ON *.* TO 'devuser'@'%' WITH GRANT OPTION;
ALTER USER 'devuser'@'%';

CREATE DATABASE graphbook_dev CHARACTER SET utf8 COLLATE utf8_general_ci;