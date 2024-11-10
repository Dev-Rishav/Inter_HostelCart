CREATE TABLE userTable (
    userID SERIAL,
    emailID VARCHAR(30) UNIQUE NOT NULL,
    hostelNo INT NOT NULL,
    roomNo INT NOT NULL,
    userName VARCHAR(30) NOT NULL,
    userDOB DATE NOT NULL,
    userPhoneNo BIGINT UNIQUE NOT NULL,
    userPassword VARCHAR(100) NOT NULL,
    userDept VARCHAR(30) NOT NULL,
    userCourse VARCHAR(30) NOT NULL,
    
    PRIMARY KEY (userID)
);

drop table userTable ;

select * from usertable u ;

INSERT INTO userTable (emailID, hostelNo, roomNo, userName, userDOB, userPhoneNo, userPassword, userDept, userCourse) VALUES
    ('2320403123.manit.ac.in', 9, 32, 'Manjit Kumbhakar', '2003-03-17', 4321212121, 'I am Handsome', 'MBC', 'MCA'),
    ('2320403216.manit.ac.in', 7, 36, 'Shruti Gupta', '2001-07-03', 707880, 'I am shruti', 'MBC', 'MCA'),
    ('2320403224.manit.ac.in', 7, 50, 'Aditi Nageshwar', '2001-10-15', 303033, 'I am aditi', 'MBC', 'MCA'),
    ('2320403219@stu.manit.ac.in', 9, 26, 'Rishav Chakraborty', '2000-10-23', 7063676293, '$2b$10$lxMmvovCgVLQ.L7S4AdGIO6MXcETr.cqS9QHEsG4UINtUZV.ifSL.', 'MBC', 'MCA'),
    ('2320403205.manit.ac.in', 9, 9004, 'Ayush Gupta', '2003-05-17', 8923124304, 'I am Gupta', 'MBC', 'MCA'),
    ('2320433219.manit.ac.in', 9, 9017, 'Rishav chakraborty', '2000-10-23', 7063676294, 'I am chakraborty', 'MBC', 'MCA'),
    ('2320403206.manit.ac.in', 9, 9005, 'Karan', '2002-10-26', 9399356355, 'I am karan', 'ME', 'B.Tech'),
    ('2320403208.manit.ac.in', 9, 9025, 'Risu Kumar Gupta', '2001-01-01', 9798571703, 'I am risu', 'MBC', 'MCA'),
    ('2320403209.manit.ac.in', 9, 9007, 'Mohit Paliwal', '2003-09-20', 9395856355, 'I am Mohit', 'MBC', 'MCA'),
    ('2320403210.manit.ac.in', 9, 9024, 'Vikas Nayma', '2001-10-03', 9795271703, 'I am Vikas', 'MBC', 'MCA');


INSERT INTO userTable (emailID, hostelNo, roomNo, userName, userDOB, userPhoneNo, userPassword, userDept, userCourse) VALUES
 ('2320403203@stu.manit.ac.in', 9, 9003, 'Atul', '2002-10-26', 9399356355, 'atul1234', 'ME', 'B.Tech'),
    ('2320403208@stu.manit.ac.in', 9, 9025, 'Risu Kumar Gupta', '2001-01-01', 9798571703, 'I am risu', 'MBC', 'MCA');
    

    alter table usertable 
add column reported boolean;

update usertable set reported='false';
select * from usertable u ;