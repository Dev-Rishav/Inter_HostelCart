CREATE TABLE userTable (
    userID INT,
    emailID VARCHAR(30) UNIQUE NOT NULL,
    hostelNo INT NOT NULL,
    roomNo INT NOT NULL,
    userName VARCHAR(30) NOT NULL,
    userDOB DATE NOT NULL,
    userPhoneNo BIGINT UNIQUE NOT NULL,
    userPassword VARCHAR(16) NOT NULL,
    
    PRIMARY KEY (userID)
);

-- Drop table if exists
DROP TABLE IF EXISTS userTable;

-- Modify column definitions
ALTER TABLE userTable MODIFY COLUMN userName VARCHAR(30);
ALTER TABLE userTable MODIFY COLUMN emailID VARCHAR(22);

-- Insert data
INSERT INTO userTable (userID, emailID, hostelNo, roomNo, userName, userDOB, userPhoneNo, userPassword)
VALUES 
(123, '2320403123.manit.ac.in', 9, 32, 'Manjit Kumbhakar', STR_TO_DATE('03/17/03', '%m/%d/%y'), 4321, 'I am Handsome'),
(216, '2320403216.manit.ac.in', 7, 36, 'Shruti Gupta', STR_TO_DATE('7/03/01', '%m/%d/%y'), 707880, 'I am shruti'),
(224, '2320403224.manit.ac.in', 7, 50, 'Aditi Nageshwar', STR_TO_DATE('10/15/01', '%m/%d/%y'), 303033, 'I am aditi');

INSERT INTO userTable (userID, emailID, hostelNo, roomNo, userName, userDOB, userPhoneNo, userPassword)
VALUES 
(219, '2320403219.manit.ac.in', 9, 26, 'Rishav Chakraborty', STR_TO_DATE('10/23/00', '%m/%d/%y'), 70, 'I am alive');

-- Select data
SELECT * FROM userTable;

-- Insert more data
INSERT INTO userTable (userID, emailID, hostelNo, roomNo, userName, userDOB, userPhoneNo, userPassword)
VALUES 
(205, '2320403205.manit.ac.in', 9, 9004, 'Ayush Gupta', STR_TO_DATE('5/17/2003', '%m/%d/%y'), 8923124304, 'I am Gupta'),
(219, '2320403219.manit.ac.in', 9, 9017, 'Rishav chakraborty', STR_TO_DATE('10/23/2000', '%m/%d/%y'), 7063676294, 'I am chakraborty');

INSERT INTO userTable (userID, emailID, hostelNo, roomNo, userName, userDOB, userPhoneNo, userPassword)
VALUES 
(206, '2320403206.manit.ac.in', 9, 9005, 'Karan', STR_TO_DATE('10/26/2002', '%m/%d/%y'), 9399356355, 'I am karan'),
(208, '2320403208.manit.ac.in', 9, 9025, 'Risu Kumar Gupta', STR_TO_DATE('01/01/2001', '%m/%d/%y'), 9798571703, 'I am risu');

INSERT INTO userTable (userID, emailID, hostelNo, roomNo, userName, userDOB, userPhoneNo, userPassword)
VALUES 
(209, '2320403209.manit.ac.in', 9, 9007, 'Mohit Paliwal', STR_TO_DATE('09/20/2003', '%m/%d/%y'), 9395856355, 'I am Mohit'),
(210, '2320403210.manit.ac.in', 9, 9024, 'Vikas Nayma', STR_TO_DATE('10/03/2001', '%m/%d/%y'), 9795271703, 'I am Vikas');

-- Delete and rollback
DELETE FROM userTable WHERE userID=219;
ROLLBACK;

-- Select data
SELECT * FROM userTable;

-- Stored procedure to generate entries
DELIMITER //
CREATE PROCEDURE generate_entries()
BEGIN
    DECLARE v_hostelNo INT;
    DECLARE v_roomNo INT;
    DECLARE i INT DEFAULT 1;
    
    WHILE i <= 30 DO
        SET v_hostelNo = FLOOR(1 + (RAND() * 12));
        SET v_roomNo = FLOOR(1 + (RAND() * 60));
        
        INSERT INTO userTable (userID, emailID, hostelNo, roomNo, userName, userDOB, userPhoneNo, userPassword)
        VALUES (
            i, 
            CONCAT('user', i, '@example.com'), 
            v_hostelNo, 
            v_roomNo, 
            CONCAT('User', i), 
            DATE_ADD('2000-01-01', INTERVAL FLOOR(RAND() * 365 * 18) DAY), 
            FLOOR(1000000000 + (RAND() * 8999999999)), 
            CONCAT('password', i)
        );
        
        SET i = i + 1;
    END WHILE;
    COMMIT;
END //
DELIMITER ;

-- Call the stored procedure
CALL generate_entries();

-- Select data
SELECT * FROM userTable;

-- Describe table
DESCRIBE userTable;