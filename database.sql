CREATE DATABASE scoreboard;
USE scoreboard;
CREATE TABLE ranking (
    id int(10) not null PRIMARY KEY AUTO_INCREMENT,
    username varchar(150) not null,
    alltime time(0) not null
);

CREATE TABLE hints (
    id int(10) not null PRIMARY KEY AUTO_INCREMENT,
    hint varchar(200) not null
);
INSERT INTO hints (hint)  VALUES ('Огледай се!');
INSERT INTO hints (hint)  VALUES ('Можеш ли да осветиш тъмната стая?');
INSERT INTO hints (hint)  VALUES ('Къде е скрит тайният ключ?');
INSERT INTO hints (hint)  VALUES ('Изгаси ли огъня вече?');
INSERT INTO hints (hint)  VALUES ('Местата са отбелязани с цифри на картата на Европа.');
INSERT INTO hints (hint)  VALUES ('Плюшеното мече на правилното място ли е?');
INSERT INTO hints (hint)  VALUES ('Цветята не могат да растат без вода.');
INSERT INTO hints (hint)  VALUES ('Обувките са само за декорация.');
INSERT INTO hints (hint)  VALUES ('Какво означават буквите на стената? Може би номер?');
INSERT INTO hints (hint)  VALUES ('Думата на стената (АФГ) може да се дешифрира с шифъра на бюрото. Това ще ви даде едно от седемте числа.');
INSERT INTO hints (hint)  VALUES ('Буквите на купата могат да имат нещо общо с реда на кода?');
INSERT INTO hints (hint)  VALUES ('Инициалите на цифрите може да имат значение.');