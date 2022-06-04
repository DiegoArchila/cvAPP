/*
*Created Schema cvAPP
*Autor:Diego Alonso Archila
*/

-- drop schame if not exists
DROP SCHEMA IF EXISTS cvapp;

-- create the schema
CREATE SCHEMA IF NOT EXISTS cvapp;

-- select schema
USE cvapp;

-- create tables

CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(128) NOT NULL,
    lastName VARCHAR(128) NOT NULL,
    dateBorn DATE NOT NULL,
    genreId INT NOT NULL,
    pwd VARCHAR(256) NOT NULL,
    isAdmin BOOLEAN NOT NULL DEFAULT FALSE,
    profi TEXT NOT NULL,
    imagen VARCHAR(256) NULL
        DEFAULT "/img/userDefault.svg", -- path imagen default
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP NULL
);

CREATE TABLE IF NOT EXISTS emails (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(256) NOT NULL UNIQUE,
    descript VARCHAR(256) NULL,
    userId INT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP NULL
);

CREATE TABLE IF NOT EXISTS genres (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    genre VARCHAR(256) NOT NULL UNIQUE,
    descript VARCHAR(256) NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP NULL
);

CREATE TABLE IF NOT EXISTS phones (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    phone VARCHAR(256) NOT NULL UNIQUE,
    descript VARCHAR(256) NULL,
    userId INT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP NULL
);

CREATE TABLE IF NOT EXISTS locations (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    country VARCHAR(256) NOT NULL,
    state_province VARCHAR(256) NOT NULL,
    city_town VARCHAR(256) NOT NULL,
    addressLine VARCHAR(256) NOT NULL,
    descript VARCHAR(256) NULL,
    userId INT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP NULL
);

CREATE TABLE IF NOT EXISTS educations (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nameEntity VARCHAR(256) NOT NULL,
    titleObtain VARCHAR(256) NOT NULL,
    _of DATE NOT NULL,
    _to DATE NULL,
    _file VARCHAR(256) NULL,
    descript VARCHAR(256) NULL,
    userId INT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP NULL
);

CREATE TABLE IF NOT EXISTS experiences (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nameEntity VARCHAR(256) NOT NULL,
    _role VARCHAR(256) NOT NULL,
    _of DATE NOT NULL,
    _to DATE NULL,
    _file VARCHAR(256) NULL,
    descript VARCHAR(256) NULL,
    userId INT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP NULL
);

-- constrains Foreign Keys

ALTER TABLE users
    ADD CONSTRAINT genre
        FOREIGN KEY (genreId)
        REFERENCES genres(id);

ALTER TABLE emails
    ADD CONSTRAINT emails
        FOREIGN KEY (userId)
        REFERENCES users(id);

ALTER TABLE phones
    ADD CONSTRAINT phones
        FOREIGN KEY (userId)
        REFERENCES users(id);

ALTER TABLE locations
    ADD CONSTRAINT locations
        FOREIGN KEY (userId)
        REFERENCES users(id);

ALTER TABLE educations
    ADD CONSTRAINT education
        FOREIGN KEY (userId)
        REFERENCES users(id);

ALTER TABLE experiences
    ADD CONSTRAINT experience
        FOREIGN KEY (userId)
        REFERENCES users(id);

-- create genres

INSERT INTO genres (
    genre,
    descript,
    created_at,
    updated_at
) VALUES (
    "Hombre",
    "genero Hombre, Masculino",
    NOW(),
    NOW()
),(
    "Mujer",
    "genero Mujer, Femenino",
    NOW(),
    NOW()
),(
    "No Definido",
    "Otros",
    NOW(),
    NOW()
);

-- create user Admin

INSERT INTO users (
    firstName,
    lastName,
    dateBorn,
    genreId,
    pwd,
    isAdmin,
    profi,
    imagen,
    created_at,
    updated_at
) VALUES (
    "Admin",
    "Lord Powerfull from cvAPP",
    CURDATE(),
    2, -- Other
    "$2a$12$s29chre4BW1ZXNEkCoRvV.brzGsSITR1QZwV2ecSKHODvmHPAmrSS
", -- admin
    TRUE,
    "I am the admin of my universe!! :V",
    "/img/adminDefault.svg",
    NOW(),
    NOW()
)