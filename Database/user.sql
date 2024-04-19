CREATE TABLE userTable (
    userID NUMBER,
    emailID varchar2(30) CONSTRAINT email_not_null_unique UNIQUE NOT NULL,
    hostelNo number CONSTRAINT hostel_not_null not null,
    roomNo number CONSTRAINT room_not_null not null,
    userName varchar2(30) CONSTRAINT username_not_null not null,
    userDOB date CONSTRAINT dob_not_null not null,
    userPhoneNo number CONSTRAINT phone_not_null_unique UNIQUE NOT NULL,
    userPassword varchar2(16) CONSTRAINT password_not_null not null,
    
    CONSTRAINT pk_user PRIMARY KEY (userID)
);


drop table userTable;

ALTER TABLE userTable MODIFY userName
VARCHAR2(30);

ALTER TABLE userTable MODIFY emailID
VARCHAR2(22);
desc userTable;


 
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

INSERT ALL INTO USERTABLE(USERID,EMAILID,HOSTELNO,ROOMNO,USERNAME,USERDOB,userPhoneNo,USERPASSWORD)values(205,'2320403205.manit.ac.in',9,9004,'Ayush Gupta',TO_DATE('5/17/2003','MM/DD/YY'),8923124304,'I am Gupta')
INTO USERTABLE(USERID,EMAILID,HOSTELNO,ROOMNO,USERNAME,USERDOB,userPhoneNo,USERPASSWORD)values(219,'2320403219.manit.ac.in',9,9017,'Rishav chakraborty',TO_DATE('10/23/2000','MM/DD/YY'),7063676294,'I am chakraborty')
select * from dual;

INSERT ALL INTO USERTABLE(USERID,EMAILID,HOSTELNO,ROOMNO,USERNAME,USERDOB,userPhoneNo,USERPASSWORD)values(206,'2320403206.manit.ac.in',9,9005,'Karan',TO_DATE('10/26/2002','MM/DD/YY'),9399356355,'I am karan')
INTO USERTABLE(USERID,EMAILID,HOSTELNO,ROOMNO,USERNAME,USERDOB,userPhoneNo,USERPASSWORD)values(208,'2320403208.manit.ac.in',9,9025,'Risu Kumar Gupta',TO_DATE('01/01/2001','MM/DD/YY'),9798571703,'I am risu')
select * from dual;

INSERT ALL INTO USERTABLE(USERID,EMAILID,HOSTELNO,ROOMNO,USERNAME,USERDOB,userPhoneNo,USERPASSWORD)values(209,'2320403209.manit.ac.in',9,9007,'Mohit Paliwal',TO_DATE('09/20/2003','MM/DD/YY'),9395856355,'I am Mohit')
INTO USERTABLE(USERID,EMAILID,HOSTELNO,ROOMNO,USERNAME,USERDOB,userPhoneNo,USERPASSWORD)values(210,'2320403210.manit.ac.in',9,9024,'Vikas Nayma',TO_DATE('10/03/2001','MM/DD/YY'),9795271703,'I am Vikas')
select * from dual;




delete from USERTABLE where USERID=219;
ROLLBACK;
select * from USERTABLE;
SHOW CON_NAME;


-- DELETE from USERTABLE where USERTABLE.USERID=219 CASCADE CONSTRAINTS;



-- Introducing PL/SQL to generate entries
DECLARE
    v_hostelNo NUMBER;
    v_roomNo NUMBER;
BEGIN
    FOR i IN 1..30 LOOP
        v_hostelNo := TRUNC(DBMS_RANDOM.VALUE(1, 12)); -- Random hostel number between 1 and 10
        v_roomNo := TRUNC(DBMS_RANDOM.VALUE(1, 60)); -- Random room number between 100 and 999
        
        INSERT INTO userTable (userID, emailID, hostelNo, roomNo, userName, userDOB, userPhoneNo, userPassword)
        VALUES (
            i, -- Sequential userID
            'user' || i || '@example.com', -- Unique emailID
            v_hostelNo,
            v_roomNo,
            'User' || i, -- Unique userName
            TO_DATE('2000-01-01', 'YYYY-MM-DD') + TRUNC(DBMS_RANDOM.VALUE(1, 365) * 18), -- Random userDOB between 18 years
            TRUNC(DBMS_RANDOM.VALUE(1000000000, 9999999999)), -- Random userPhoneNo
            'password' || i -- Unique userPassword
        );
    END LOOP;
    COMMIT;
END;
/

SELECT * from USERTABLE;
