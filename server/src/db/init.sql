CREATE DATABASE itinerary;

USE itinerary;

CREATE TABLE users (
    id int PRIMARY KEY auto_increment,
    name VARCHAR(250) NOT NULL,
    email VARCHAR(250) UNIQUE,
    password VARCHAR(250) NOT NULL,
    role VARCHAR(250) NOT NULL,
);

CREATE TABLE user_preferences (
    id int PRIMARY KEY auto_increment,
    additional_requirements VARCHAR(250) NOT NULL,
    main_activity VARCHAR(250) NOT NULL,

)
