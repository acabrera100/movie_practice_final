CREATE DATABASE moviesdatabase;
DROP DATABASE IF EXISTS;

\c moviesdatabase;

DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS genres;
DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS comments;

CREATE TABLE movies(
id SERIAL PRIMARY KEY,
title VARCHAR NOT NULL,
summary VARCHAR NOT NULL,
release_date VARCHAR NOT NULL,
genre_id INT REFERENCES genres(id),
img_url VARCHAR NOT NULL
);

CREATE TABLE genres(
id SERIAL PRIMARY KEY,
name VARCHAR NOT NULL
);

CREATE TABLE ratings(
id SERIAL PRIMARY KEY,
stars INT NOT NULL,
movie_id INT REFERENCES movies(id)
);

CREATE TABLE comments(
id SERIAL PRIMARY KEY,
text TEXT NOT NULL,
movie_id INT REFERENCES movies(id)
);

INSERT INTO movies(title, summary, release_date, genre_id, img_url) VALUES ('111', '222', '333', '1','www.com')




-- INSERT INTO movies(title, summary, release_date, genre_id, img_url) VALUES('Johnny Mnemonic','In this film based on the William Gibson story, Johnny (Keanu Reeves) is a data courier who has a secret stash of information implanted into his mind. However, the data will kill Johnny if he cannot retrieve it within 48 hours. Accompanied by physically enhanced bodyguard Jane (Dina Meyer), Johnny sets out to acquire the passwords he needs to save himself. Worse yet, he is hunted by gangster Shinji (Denis Akiyama) and businessman Takahashi (Takeshi), both of whom seek the data Johnny possesses.', "May 26, 1995",'1','https://is3-ssl.mzstatic.com/image/thumb/Music/9e/d4/7e/mzi.iatbibqg.jpg/320x0w.jpg');
