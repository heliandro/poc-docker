USE nodedb;

CREATE TABLE people(
    id int auto_increment,
    name varchar(255),
    primary key(id)
);

INSERT INTO 
    people (name) 
VALUES
    ('John'),
    ('Mary'),
    ('Peter'),
    ('Susan'),
    ('Bob');