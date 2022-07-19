CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "records" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT NOT NULL,
    "record_id" INT NOT NULL,
    "cover" VARCHAR,
    "artist" VARCHAR,
    "title" VARCHAR,
    "year" INT,
    "country" VARCHAR,
    "genre" VARCHAR,
    "owned" BOOLEAN
);
