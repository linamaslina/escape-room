CREATE TABLE ranking (
	id int(10) not null PRIMARY KEY AUTO_INCREMENT,
    username varchar(150) not null,
    alltime time(6) not null
);

INSERT INTO ranking (username, alltime)  VALUES ('Username1', '00:06:23');
INSERT INTO ranking (username, alltime)  VALUES ('Username2', '00:03:48');