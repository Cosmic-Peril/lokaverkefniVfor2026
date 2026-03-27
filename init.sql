CREATE TABLE IF NOT EXISTS disorders (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
)

TRUNCATE TABLE disorders RESTART INDENTITY;

INSERT INTO disorders (name, description) VALUES
("too lazy pls fix this future me, no i am not copying someone very specific with this reminder, im just simply too lazy right now")
("I am not copying Samuel/Lexi shhh no one can know.. who will they be tonight, that's the question..")