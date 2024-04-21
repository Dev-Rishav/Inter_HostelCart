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