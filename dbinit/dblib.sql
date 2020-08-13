DROP TABLE Libraries;

create table Libraries (
  City varchar(255),
  Name varchar(255),
  Address varchar(255),
  PostCode varchar(255),
  email varchar(255),
  website varchar(255),
  primary key(City, Name)
);

create index a on Libraries(Name, City);
