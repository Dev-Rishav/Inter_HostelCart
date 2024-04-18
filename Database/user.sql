-- "user" can't be named as oracle DB has it in reserved words so name is "USERTABLE"

CREATE TABLE userTable (
    userID NUMBER,
    emailID varchar2(20) CONSTRAINT email_not_null_unique UNIQUE NOT NULL,
    hostelNo number CONSTRAINT hostel_not_null not null,
    roomNo number CONSTRAINT room_not_null not null,
    userName varchar2(20) CONSTRAINT username_not_null not null,
    userDOB date CONSTRAINT dob_not_null not null,
    userPhoneNo number CONSTRAINT phone_not_null_unique UNIQUE NOT NULL,
    userPassword varchar2(16) CONSTRAINT password_not_null not null,
    
    CONSTRAINT pk_user PRIMARY KEY (userID)
);

ALTER TABLE userTable MODIFY userName
VARCHAR2(30);

ALTER TABLE userTable MODIFY emailID
VARCHAR2(22);


 
INSERT ALL
INTO userTable (userID, emailID, hostelNo, roomNo, userName, userDOB, userPhoneNo, userPassword)
VALUES (123, '2320403123.manit.ac.in', 9, 32, 'Manjit Kumbhakar', TO_DATE('03/17/03', 'MM/DD,YY'), 4321, 'I am Handsome')
INTO userTable (userID, emailID, hostelNo, roomNo, userName, userDOB, userPhoneNo, userPassword)
VALUES (216, '2320403216.manit.ac.in', 7, 36, 'Shruti Gupta', TO_DATE('7/03/01', 'MM/DD,YY'), 707880, 'I am shruti')
INTO userTable (userID, emailID, hostelNo, roomNo, userName, userDOB, userPhoneNo, userPassword)
VALUES (224, '2320403224.manit.ac.in', 7, 50, 'Aditi Nageshwar', TO_DATE('10/15/01', 'MM/DD,YY'), 303033, 'I am aditi')
SELECT * FROM dual;


INSERT ALL
INTO userTable (userID, emailID, hostelNo, roomNo, userName, userDOB, userPhoneNo, userPassword)
VALUES (219, '2320403219.manit.ac.in', 9, 26, 'Rishav Chakraborty', TO_DATE('10/23/00', 'MM/DD,YY'), 70, 'I am alive')
select * from dual;

SELECT * from USERTABLE;
desc userTable;




delete from USERTABLE where USERID=219;
ROLLBACK;
select * from USERTABLE;
