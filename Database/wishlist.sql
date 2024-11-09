CREATE TABLE wishList (
    itemNO INT,
    buyerId INT,

    CONSTRAINT fk_wl_buyer FOREIGN KEY (buyerId) REFERENCES userTable(userID),
    CONSTRAINT fk_wl_item FOREIGN KEY (itemNO) REFERENCES item(itemNO)
);


INSERT INTO wishList (itemNO, buyerId) VALUES 
(19, 4),
(18, 7),
(14, 3),
(11, 10),
(24, 1);

select * from wishlist;

alter table wishlist rename to cart;