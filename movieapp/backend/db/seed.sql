DROP DATABASE IF EXISTS moviesdatabase;
CREATE DATABASE moviesdatabase;


\c moviesdatabase;


CREATE TABLE genres(
  id SERIAL PRIMARY KEY,
  genre VARCHAR NOT NULL
);

CREATE TABLE movies(
id SERIAL PRIMARY KEY,
title VARCHAR NOT NULL,
synopsis VARCHAR NOT NULL,
release_date VARCHAR NOT NULL,
genre_id INT REFERENCES genres(id),
img_url VARCHAR NOT NULL
);

CREATE TABLE ratings(
id SERIAL PRIMARY KEY,
stars INT NOT NULL,
movie_id INT REFERENCES movies(id)
);

CREATE TABLE comments(
id SERIAL PRIMARY KEY,
comment TEXT NOT NULL,
movie_id INT REFERENCES movies(id)
);


INSERT INTO genres(genre) VALUES('science-fiction'), ('Pixar'), ('Cycling'), ('Cerebral'), ('Crime');

INSERT INTO movies(title, synopsis, release_date, genre_id, img_url) VALUES('Johnny Mnemonic','In this film based on the William Gibson story, Johnny (Keanu Reeves) is a data courier who has a secret stash of information implanted into his mind. However, the data will kill Johnny if he cannot retrieve it within 48 hours. Accompanied by physically enhanced bodyguard Jane (Dina Meyer), Johnny sets out to acquire the passwords he needs to save himself. Worse yet, he is hunted by gangster Shinji (Denis Akiyama) and businessman Takahashi (Takeshi), both of whom seek the data Johnny possesses.', 'May 26 1995','1','https://is3-ssl.mzstatic.com/image/thumb/Music/9e/d4/7e/mzi.iatbibqg.jpg/320x0w.jpg'), ('Big Hero 6','Robotics prodigy Hiro (Ryan Potter) lives in the city of San Fransokyo. Next to his older brother, Tadashi, Hiros closest companion is Baymax (Scott Adsit), a robot whose sole purpose is to take care of people. When a devastating turn of events throws Hiro into the middle of a dangerous plot, he transforms Baymax and his other friends, Go Go Tamago (Jamie Chung), Wasabi (Damon Wayans Jr.), Honey Lemon (Genesis Rodriguez) and Fred (T.J. Miller) into a band of high-tech heroes', 'November 7, 2014','2','https://mir-s3-cdn-cf.behance.net/project_modules/disp/abdc6021752299.56306f23e668b.jpg'), ('Breaking Away','Dave (Dennis Christopher) and his working-class friends Cyril (Daniel Stern), Moocher (Jackie Earle Haley) and Mike (Dennis Quaid) spend their post-high school days in Bloomington, Indiana, sparring with snooty students from the local university, chasing girls and--in Daves case--dreaming of competitive bicycle racing. The four friends face opposition from all corners as they decide to make Daves dreams come true in the universitys annual bicycle endurance race.', 'July 13, 1979','3','http://www.gstatic.com/tv/thumb/v22vodart/5263/p5263_v_v8_aa.jpg'), ('Gattaca','Vincent Freeman (Ethan Hawke) has always fantasized about traveling into outer space, but is grounded by his status as a genetically inferior in-valid. He decides to fight his fate by purchasing the genes of Jerome Morrow (Jude Law), a laboratory-engineered valid. He assumes Jeromes DNA identity and joins the Gattaca space program, where he falls in love with Irene (Uma Thurman). An investigation into the death of a Gattaca officer (Gore Vidal) complicates Vincents plans.', 'October 24, 1997','4','https://20ui41tp7v127j03rcnp97oh-wpengine.netdna-ssl.com/wp-content/uploads/2016/04/cody_gattaca.jpg'),('Nightcrawler','Los Angeles denizen Louis Bloom (Jake Gyllenhaal) survives by scavenging and petty theft. He stumbles into a new career as a cameraman and -- armed with a camcorder and police scanner -- begins nocturnal forays across the city in search of shocking and grisly crimes. When he catches the eye of a shopworn news director (Rene Russo) who welcomes the chance to raise her stations ratings, Louis goes to increasingly greater lengths to catch the money shot.', 'October 31, 2014','5','https://alternativemovieposters.com/wp-content/uploads/2017/02/walijewski_nightcrawler.jpg');

INSERT INTO ratings(stars,movie_id) VALUES(3,1), (4,2), (5,3), (5,4), (4,5);
INSERT INTO comments(comment,movie_id) VALUES('Keanue Reeves and a talking dolphin I mean oof',1), ('Floating bubble mecha suit thing. I likes I likes',2), ('Cycling Movie BEST IN THE WORLD GIMME MORE',3), ('One of my favorite movies of all time',4), ('Creepy',5)
