CREATE TABLE chatService (
    messageID NUMBER CONSTRAINT messageID_not_null_unique NOT NULL UNIQUE,
    senderId NUMBER not NULL,
    receiverId NUMBER not NULL,
    itemNO NUMBER not NULL,
    messageTime TIMESTAMP(2) not null,
    messageContent VARCHAR2(200) CONSTRAINT msgCont_not_null not NULL,
    report NUMBER(1) CONSTRAINT report_cs_not_null NOT NULL,

    CONSTRAINT fk_cs_sender FOREIGN KEY (senderID) REFERENCES userTable(userID),
    CONSTRAINT fk_cs_receiver FOREIGN KEY (receiverId) REFERENCES userTable(userID),
    CONSTRAINT fk_cs_item FOREIGN KEY (itemNO) REFERENCES item(itemNO)
);
desc chatService


drop table chatService;
Insert
INTO CHATSERVICE(MESSAGEID,SENDERID,RECEIVERID,ITEMNO,MESSAGETIME,MESSAGECONTENT,report)
VALUES(1, 219, 203, 4, TIMESTAMP '2024-04-21 12:00:00', 'Hi rishav this side! How you doing?', 0);


insert all 
into CHATSERVICE(MESSAGEID,SENDERID,RECEIVERID,ITEMNO,MESSAGETIME,MESSAGECONTENT,report) 
VALUES(2, 216, 224, 8, TIMESTAMP '2024-04-21 12:21:00', 'report me', 1)
into CHATSERVICE(MESSAGEID,SENDERID,RECEIVERID,ITEMNO,MESSAGETIME,MESSAGECONTENT,report) 
VALUES(3, 203, 4, 4, TIMESTAMP '2024-04-21 03:02:00', 'I like yours :-)', 0)
into CHATSERVICE(MESSAGEID,SENDERID,RECEIVERID,ITEMNO,MESSAGETIME,MESSAGECONTENT,report) 
VALUES(4, 216, 219, 6, TIMESTAMP '2024-04-19 10:21:00', 'How far are we?', 0)
into CHATSERVICE(MESSAGEID,SENDERID,RECEIVERID,ITEMNO,MESSAGETIME,MESSAGECONTENT,report)
VALUES(5, 203, 4, 8, TIMESTAMP '2024-04-21 11:21:00', 'lets do it!', 0)
into CHATSERVICE(MESSAGEID,SENDERID,RECEIVERID,ITEMNO,MESSAGETIME,MESSAGECONTENT,report) 
VALUES(6, 219, 9, 9, TIMESTAMP '2024-04-21 10:24:00', 'I am interested!', 0)
select * from dual;

select * from CHATSERVICE;