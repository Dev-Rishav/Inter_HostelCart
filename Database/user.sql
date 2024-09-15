DROP TABLE IF EXISTS userTable;

CREATE TABLE userTable (
    userID INT AUTO_INCREMENT,
    emailID VARCHAR(30) UNIQUE NOT NULL,
    hostelNo INT NOT NULL,
    roomNo INT NOT NULL,
    userName VARCHAR(30) NOT NULL,
    userDOB DATE NOT NULL,
    userPhoneNo BIGINT UNIQUE NOT NULL,
    userPassword VARCHAR(16) NOT NULL,
    userDept VARCHAR(30) NOT NULL,
    userCourse VARCHAR(30) NOT NULL,
    
    PRIMARY KEY (userID)
);
INSERT INTO userTable (emailID, hostelNo, roomNo, userName, userDOB, userPhoneNo, userPassword, userDept, userCourse)
VALUES 
('2320403123.manit.ac.in', 9, 32, 'Manjit Kumbhakar', STR_TO_DATE('03/17/03', '%m/%d/%Y'), 4321, 'I am Handsome', 'MBC', 'MCA'),
('2320403216.manit.ac.in', 7, 36, 'Shruti Gupta', STR_TO_DATE('7/03/01', '%m/%d/%Y'), 707880, 'I am shruti', 'MBC', 'MCA'),
('2320403224.manit.ac.in', 7, 50, 'Aditi Nageshwar', STR_TO_DATE('10/15/01', '%m/%d/%Y'), 303033, 'I am aditi', 'MBC', 'MCA');

INSERT INTO userTable (emailID, hostelNo, roomNo, userName, userDOB, userPhoneNo, userPassword, userDept, userCourse)
VALUES 
('2320403219.manit.ac.in', 9, 26, 'Rishav Chakraborty', STR_TO_DATE('10/23/00', '%m/%d/%Y'), 70, 'I am alive', 'MBC', 'MCA');

-- Select data
SELECT * FROM userTable;

-- Insert more data
INSERT INTO userTable (emailID, hostelNo, roomNo, userName, userDOB, userPhoneNo, userPassword, userDept, userCourse)
VALUES 
('2320403205.manit.ac.in', 9, 9004, 'Ayush Gupta', STR_TO_DATE('5/17/2003', '%m/%d/%Y'), 8923124304, 'I am Gupta', 'MBC', 'MCA'),
('2320403219.manit.ac.in', 9, 9017, 'Rishav chakraborty', STR_TO_DATE('10/23/2000', '%m/%d/%Y'), 7063676294, 'I am chakraborty', 'MBC', 'MCA');

INSERT INTO userTable (emailID, hostelNo, roomNo, userName, userDOB, userPhoneNo, userPassword, userDept, userCourse)
VALUES 
('2320403206.manit.ac.in', 9, 9005, 'Karan', STR_TO_DATE('10/26/2002', '%m/%d/%Y'), 9399356355, 'I am karan', 'ME', 'B.Tech'),
('2320403208.manit.ac.in', 9, 9025, 'Risu Kumar Gupta', STR_TO_DATE('01/01/2001', '%m/%d/%Y'), 9798571703, 'I am risu', 'MBC', 'MCA');

INSERT INTO userTable (emailID, hostelNo, roomNo, userName, userDOB, userPhoneNo, userPassword, userDept, userCourse)
VALUES 
('2320403209.manit.ac.in', 9, 9007, 'Mohit Paliwal', STR_TO_DATE('09/20/2003', '%m/%d/%Y'), 9395856355, 'I am Mohit', 'MBC', 'MCA'),
('2320403210.manit.ac.in', 9, 9024, 'Vikas Nayma', STR_TO_DATE('10/03/2001', '%m/%d/%Y'), 9795271703, 'I am Vikas', 'MBC', 'MCA');

-- Delete and rollback
DELETE FROM userTable WHERE emailID='2320403219.manit.ac.in';
ROLLBACK;

-- Select data
SELECT * FROM userTable;


-- feed dummy datas
LOAD DATA INFILE '/var/lib/mysql-files/userDummyData.csv'
INTO TABLE userTable
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(emailID, hostelNo, roomNo, userName, @userDOB, userPhoneNo, userPassword, userDept, userCourse)
SET userDOB = STR_TO_DATE(@userDOB, '%m/%d/%Y');