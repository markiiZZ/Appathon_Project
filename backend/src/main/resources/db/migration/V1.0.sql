SET SQL_MODE='ALLOW_INVALID_DATES';

create table Libraries (
  City varchar(255),
  Name varchar(255),
  Address varchar(255),
  PostCode varchar(255),
  email varchar(255),
  website varchar(255),
  primary key(City, Name)
);

CREATE UNIQUE INDEX a 
  ON Libraries (City, Name);


