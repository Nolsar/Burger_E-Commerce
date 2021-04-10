--inserts values into the table 'burgers'--
NSERT INTO burgers (burger_name, devoured)
VALUES ('Angus Burger', FALSE), ('Cheeseburger', FALSE), ('Bacon Cheeseburger', TRUE);

--returns the table 'burgers'--
SELECT * FROM burgers;