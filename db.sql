CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    username varchar(255) NOT NULL UNIQUE,
    email varchar(255) NOT NULL UNIQUE,
    contrasena varchar(255) NOT NULL,
    fecha varchar(255) NOT NULL
);