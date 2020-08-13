LOAD DATA INFILE '/home/nikoleta/Documents/IA/Appathon_Project/Public_libraries_in_England_basic_dataset__as_on_1_July_2016_.csv'
INTO TABLE Libraries
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
(@City, @Name, @Address, @PostCode, @email, @website)
SET City=nullif(@City,''),
Name=nullif(@Name,''),
Address=nullif(@Address,''),
PostCode=nullif(@PostCode,''),
email=nullif(@email,''),
website=nullif(@website,'');
