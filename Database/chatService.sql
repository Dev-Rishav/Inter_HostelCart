-- Drop the chatService table if it exists
DROP TABLE IF EXISTS chatService;

-- Create the chatService table
CREATE TABLE chatService (
    messageID INT AUTO_INCREMENT PRIMARY KEY,
    senderID INT NOT NULL,
    receiverID INT NOT NULL,
    itemNO INT NOT NULL,
    messageTime DATETIME NOT NULL,
    messageContent VARCHAR(200) NOT NULL,
    report INT NOT NULL,

    CONSTRAINT fk_cs_sender FOREIGN KEY (senderID) REFERENCES userTable(userID),
    CONSTRAINT fk_cs_receiver FOREIGN KEY (receiverID) REFERENCES userTable(userID),
    CONSTRAINT fk_cs_item FOREIGN KEY (itemNO) REFERENCES item(itemNO)
);

-- Insert data into the chatService table
INSERT INTO chatService (messageID, senderID, receiverID, itemNO, messageTime, messageContent, report)
VALUES (1, 1, 2, 50, '2024-04-21 12:00:00', 'Hi rishav this side! How you doing?', 0);

INSERT INTO chatService (messageID, senderID, receiverID, itemNO, messageTime, messageContent, report)
VALUES (2, 3, 4, 51, '2024-04-21 12:21:00', 'report me', 1),
       (3, 7, 8, 52, '2024-04-21 03:02:00', 'I like yours :-)', 0),
       (4, 9, 10, 53, '2024-04-19 10:21:00', 'How far are we?', 0),
       (5, 11, 12, 54, '2024-04-21 11:21:00', 'lets do it!', 0);

-- Select all data from the chatService table
SELECT * FROM chatService;