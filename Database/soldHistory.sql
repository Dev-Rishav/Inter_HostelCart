create table soldHistory(
    transactionID varchar(50) PRIMARY KEY,
    itemNO NUMBER not null,
    sellerID NUMBER not NULL,
    soldPrice NUMBER ,
    soldDate DATE CONSTRAINT soldDate_not_null NOT NULL,
   
   
    
    CONSTRAINT fk_sh_seller FOREIGN KEY (sellerID) REFERENCES userTable(userID),
    CONSTRAINT fk_sh_item FOREIGN KEY (itemNO) REFERENCES item(itemNO)

 
);

drop table sol_history;

insert into SOLDHISTORY values('abcd1234xyz',7,219,400,TO_DATE('15/04/2024','dd/mm/yyyy'));
insert into SOLDHISTORY values('abcd219xyz',9,224,5500,TO_DATE('20/06/2024','dd/mm/yyyy'));
insert into SOLDHISTORY values('abcd216xyz',1,123,150,TO_DATE('10/04/2024','dd/mm/yyyy'));
insert into SOLDHISTORY values('abdc123xyz',3,123,130,TO_DATE('15/05/2024','dd/mm/yyyy'));
insert into SOLDHISTORY values('abcd219xyz',5,219,420,TO_DATE('10/07/2024','dd/mm/yyyy'));
insert into SOLDHISTORY values('abfg216xyz',10,9,14580,TO_DATE('12/09/2024','dd/mm/yyyy'));
insert into SOLDHISTORY values('abcd224xyz',12,16,35050,TO_DATE('15/10/2024','dd/mm/yyyy'));
insert into SOLDHISTORY values('bacd219xyz',13,24,12000,TO_DATE('10/11/2024','dd/mm/yyyy'));
insert into SOLDHISTORY values('amnd224xyz',15,23,2000,TO_DATE('15/12/2024','dd/mm/yyyy'));
insert into SOLDHISTORY values('pocd224xyz',14,27,45000,TO_DATE('18/10/2024','dd/mm/yyyy'));

desc sold_history;

select * from SOLDHISTORY;