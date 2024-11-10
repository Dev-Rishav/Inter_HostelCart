
CREATE TABLE chatService (
    messageID SERIAL PRIMARY KEY,
    senderID INT NOT NULL,
    receiverID INT NOT NULL,
    itemNO INT NOT NULL,
    messageTime TIMESTAMP NOT NULL,
    messageContent VARCHAR(200) NOT NULL,
    report BOOLEAN NOT NULL,

    CONSTRAINT fk_cs_sender FOREIGN KEY (senderID) REFERENCES userTable(userID),
    CONSTRAINT fk_cs_receiver FOREIGN KEY (receiverID) REFERENCES userTable(userID),
    CONSTRAINT fk_cs_item FOREIGN KEY (itemNO) REFERENCES item(itemNO)
);

INSERT INTO chatService (senderID,receiverID,itemNO,messageTime,messageContent,report) VALUES
	 (1,2,11,'2024-04-21 12:00:00','Hi rishav this side! How you doing?',false),
	 (3,4,12,'2024-04-21 12:21:00','report me',true),
	 (7,8,13,'2024-04-21 03:02:00','I like yours :-)',false),
	 (9,6,14,'2024-04-19 10:21:00','How far are we?',false),
	 (10,5,15,'2024-04-21 11:21:00','lets do it!',false);
	

        alter table chatservice 
    alter column messageContent type text;

alter table chatservice 
     add column room varchar(200);