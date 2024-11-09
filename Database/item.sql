   drop table item;
   
   CREATE TABLE item (
    itemNO SERIAL,
    sellerID INT,
    itemName VARCHAR(40) NOT NULL,
    itemPrice INT NOT NULL,
    itemDescription VARCHAR(255),
    itemTags VARCHAR(30) NOT NULL,
    listingDate DATE NOT NULL,
    reportflag BOOLEAN,
    itemVisit INT,
    itemPhotoURL VARCHAR(500),
    gender VARCHAR(10),
    
    CONSTRAINT fk_seller FOREIGN KEY (sellerID) REFERENCES userTable(userID),
    CONSTRAINT pk_item PRIMARY KEY (itemNO)
);


INSERT INTO item (sellerID,itemName,itemPrice,itemDescription,itemTags,listingDate,reportflag,itemVisit,itemPhotoURL,gender) VALUES
	 (1,'TP-Link Router 2.4GHz',500,'6 months old, in very good condition, white in color','Router,Electronics','2024-03-04',false,1,'https://imgs.search.brave.com/XR7yynlmH6a-KNQbaKvSAJTKcIJ6hlZbmD9HXEubayA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFEeWEwbDJ4d0wu/anBn','he'),
	 (2,'Havells Air Cooler',6000,'6 months old, in very good condition, white in color','Cooler,Electronics','2024-02-03',false,9,'https://imgs.search.brave.com/lX6X_TiV-7QhIxUZBoOwF6lpUb40O9JxPTpfssiO90Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF1c0FDM1ZCREwu/anBn','he'),
	 (3,'Smartphone',5000,'Brand new smartphone with latest features','Electronics','2003-03-04',false,105,'https://imgs.search.brave.com/wgThZOJSAJxAHjMHsNMIGjlGm_qc3frt7Eh2S4oQHGw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzUyLzQ1LzMy/LzM2MF9GXzUyNDUz/MjkzX3FHQ1JGZGY2/bkVrQ0xqQnVSSUhR/SVFNT09hWW1nTnBO/LmpwZw','he'),
	 (4,'Laptop',10990,'High-performance laptop for professional use','Electronics','2019-05-08',false,92,'https://imgs.search.brave.com/p3EuDGCoEomIF1qfXco8ZkK1Tmy5-zBOdwYUgAZgX9k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/MjIzNzEwL3Bob3Rv/L2xhcHRvcC1mbG9h/dGluZy1hbmdsZWQt/b3Blbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9Z1VpZkph/cDRkRmtHeW5MQkFz/Q0NCdFR4eWpNNTEx/eTAtODVGLW50R092/VT0','he'),
	 (5,'Camera',1600,'DSLR camera with 4K recording capabilities','Electronics','2023-12-12',false,75,'https://firebasestorage.googleapis.com/v0/b/interhostel-cart.appspot.com/o/images%2Fgargantua-black-5200x3250-9621.jpg?alt=media&token=66acfdf3-bbcd-4034-9566-43ab93aec27d','he'),
	 (6,'Gaming Console',800,'Next-gen gaming console for immersive gaming','Electronics','2024-02-02',false,11,'https://firebasestorage.googleapis.com/v0/b/interhostel-cart.appspot.com/o/images%2Fgargantua-black-5200x3250-9621.jpg?alt=media&token=66acfdf3-bbcd-4034-9566-43ab93aec27d','he'),
	 (7,'Tablet',800,'Lightweight tablet for on-the-go productivity','Electronics','2024-01-03',false,25,'https://firebasestorage.googleapis.com/v0/b/interhostel-cart.appspot.com/o/images%2Fgargantua-black-5200x3250-9621.jpg?alt=media&token=66acfdf3-bbcd-4034-9566-43ab93aec27d','he'),
	 (8,'Fitness Tracker',200,'Track your fitness goals with this smart band','Electronics','2024-03-02',false,19,'https://firebasestorage.googleapis.com/v0/b/interhostel-cart.appspot.com/o/images%2Fgargantua-black-5200x3250-9621.jpg?alt=media&token=66acfdf3-bbcd-4034-9566-43ab93aec27d','he'),
	 (9,'Blue T-shirt',200,'A comfortable blue cotton t-shirt','clothing','2024-03-04',false,5,'https://firebasestorage.googleapis.com/v0/b/interhostel-cart.appspot.com/o/images%2Fgargantua-black-5200x3250-9621.jpg?alt=media&token=66acfdf3-bbcd-4034-9566-43ab93aec27d','he'),
	 (10,'Samsung Mobile',3999,'Brand new mobile with 128GB storage','electronics phone','2024-03-05',false,3,'https://firebasestorage.googleapis.com/v0/b/interhostel-cart.appspot.com/o/images%2Fgargantua-black-5200x3250-9621.jpg?alt=media&token=66acfdf3-bbcd-4034-9566-43ab93aec27d','he');



INSERT INTO item (sellerID,itemName,itemPrice,itemDescription,itemTags,listingDate,reportflag,itemVisit,itemPhotoURL,gender) VALUES
	 (1,'Leather Wallet',135,'Brown leather wallet with multiple card slots','accessories','2024-04-05',false,7,'https://firebasestorage.googleapis.com/v0/b/interhostel-cart.appspot.com/o/images%2Fgargantua-black-5200x3250-9621.jpg?alt=media&token=66acfdf3-bbcd-4034-9566-43ab93aec27d','he'),
	 (2,'Wireless Mouse',315,'Ergonomic design, compatible with all devices','electronics','2024-03-05',false,2,'https://firebasestorage.googleapis.com/v0/b/interhostel-cart.appspot.com/o/images%2Fgargantua-black-5200x3250-9621.jpg?alt=media&token=66acfdf3-bbcd-4034-9566-43ab93aec27d','he'),
	 (3,'Floral Dress',449,'Elegant floral pattern dress suitable for parties','clothing dress','2024-06-06',false,10,'https://firebasestorage.googleapis.com/v0/b/interhostel-cart.appspot.com/o/images%2Fgargantua-black-5200x3250-9621.jpg?alt=media&token=66acfdf3-bbcd-4034-9566-43ab93aec27d','he'),
	 (4,'Coffee Mug Set',120,'Set of 4 ceramic mugs with different colors','kitchen home','2024-07-12',false,2,'https://firebasestorage.googleapis.com/v0/b/interhostel-cart.appspot.com/o/images%2Fgargantua-black-5200x3250-9621.jpg?alt=media&token=66acfdf3-bbcd-4034-9566-43ab93aec27d','he'),
	 (7,'Coffee Mug Set',220,'Set of 4 ceramic mugs with different colors','kitchen home','2024-07-12',false,2,'https://firebasestorage.googleapis.com/v0/b/interhostel-cart.appspot.com/o/images%2Fgargantua-black-5200x3250-9621.jpg?alt=media&token=66acfdf3-bbcd-4034-9566-43ab93aec27d','he'),
	 (1,'TP-Link Router 2.4GHz',500,'6 months old, in very good condition, white in color','Router,Electronics','2024-03-04',false,1,'https://imgs.search.brave.com/XR7yynlmH6a-KNQbaKvSAJTKcIJ6hlZbmD9HXEubayA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFEeWEwbDJ4d0wu/anBn','he'),
	 (2,'Havells Air Cooler',6000,'6 months old, in very good condition, white in color','Cooler,Electronics','2024-02-03',false,9,'https://imgs.search.brave.com/lX6X_TiV-7QhIxUZBoOwF6lpUb40O9JxPTpfssiO90Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF1c0FDM1ZCREwu/anBn','he'),
	 (3,'Smartphone',5000,'Brand new smartphone with latest features','Electronics','2003-03-04',false,105,'https://imgs.search.brave.com/wgThZOJSAJxAHjMHsNMIGjlGm_qc3frt7Eh2S4oQHGw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzUyLzQ1LzMy/LzM2MF9GXzUyNDUz/MjkzX3FHQ1JGZGY2/bkVrQ0xqQnVSSUhR/SVFNT09hWW1nTnBO/LmpwZw','he'),
	 (4,'Laptop',10990,'High-performance laptop for professional use','Electronics','2019-05-08',false,92,'https://imgs.search.brave.com/p3EuDGCoEomIF1qfXco8ZkK1Tmy5-zBOdwYUgAZgX9k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/MjIzNzEwL3Bob3Rv/L2xhcHRvcC1mbG9h/dGluZy1hbmdsZWQt/b3Blbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9Z1VpZkph/cDRkRmtHeW5MQkFz/Q0NCdFR4eWpNNTEx/eTAtODVGLW50R092/VT0','he'),
	 (7,'Camera',1600,'DSLR camera with 4K recording capabilities','Electronics','2023-12-12',false,75,'https://imgs.search.brave.com/wgThZOJSAJxAHjMHsNMIGjlGm_qc3frt7Eh2S4oQHGw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzUyLzQ1LzMy/LzM2MF9GXzUyNDUz/MjkzX3FHQ1JGZGY2/bkVrQ0xqQnVSSUhR/SVFNT09hWW1nTnBO/LmpwZw','he');


	
INSERT INTO item (sellerID,itemName,itemPrice,itemDescription,itemTags,listingDate,reportflag,itemVisit,itemPhotoURL,gender) VALUES
	 (8,'TP-Link Router 2.4GHz',500,'6 months old, in very good condition, white in color','Router,Electronics','2024-03-04',false,1,'https://imgs.search.brave.com/XR7yynlmH6a-KNQbaKvSAJTKcIJ6hlZbmD9HXEubayA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFEeWEwbDJ4d0wu/anBn','he'),
	 (2,'Havells Air Cooler',6000,'6 months old, in very good condition, white in color','Cooler,Electronics','2024-02-03',false,9,'https://imgs.search.brave.com/lX6X_TiV-7QhIxUZBoOwF6lpUb40O9JxPTpfssiO90Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF1c0FDM1ZCREwu/anBn','he'),
	 (3,'Smartphone',5000,'Brand new smartphone with latest features','Electronics','2003-03-04',false,105,'https://imgs.search.brave.com/wgThZOJSAJxAHjMHsNMIGjlGm_qc3frt7Eh2S4oQHGw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzUyLzQ1LzMy/LzM2MF9GXzUyNDUz/MjkzX3FHQ1JGZGY2/bkVrQ0xqQnVSSUhR/SVFNT09hWW1nTnBO/LmpwZw','he'),
	 (4,'Laptop',10990,'High-performance laptop for professional use','Electronics','2019-05-08',false,92,'https://imgs.search.brave.com/p3EuDGCoEomIF1qfXco8ZkK1Tmy5-zBOdwYUgAZgX9k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/MjIzNzEwL3Bob3Rv/L2xhcHRvcC1mbG9h/dGluZy1hbmdsZWQt/b3Blbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9Z1VpZkph/cDRkRmtHeW5MQkFz/Q0NCdFR4eWpNNTEx/eTAtODVGLW50R092/VT0','he'),
	 (7,'Camera',1600,'DSLR camera with 4K recording capabilities','Electronics','2023-12-12',false,75,'https://imgs.search.brave.com/wgThZOJSAJxAHjMHsNMIGjlGm_qc3frt7Eh2S4oQHGw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzUyLzQ1LzMy/LzM2MF9GXzUyNDUz/MjkzX3FHQ1JGZGY2/bkVrQ0xqQnVSSUhR/SVFNT09hWW1nTnBO/LmpwZw','he'),
	 (1,'Sample Item',100,'This is a sample item description.','sample, item, test','2023-10-01',false,0,'https://example.com/sample-item.jpg','he'),
	 (1,'fwssf',454,'ghubuyghbhj','test','2024-09-24',false,0,'https://firebasestorage.googleapis.com/v0/b/interhostel-cart.appspot.com/o/images%2Froronoa-zoro-green-5120x2880-18358.jpg?alt=media&token=0f81ab85-38eb-44b9-a709-7fb5a301fc93','he'),
	 (1,'fwssf',6545,'daqdadacacac a','test','2024-09-24',false,0,'https://firebasestorage.googleapis.com/v0/b/interhostel-cart.appspot.com/o/images%2Froronoa-zoro-green-5120x2880-18358.jpg?alt=media&token=511840e6-d86e-41b3-b0db-04ade74c8a47','he'),
	 (1,'pencil',5,'wooden pencil ','P','2024-09-24',false,0,'https://firebasestorage.googleapis.com/v0/b/interhostel-cart.appspot.com/o/images%2Fgargantua-black-5200x3250-9621.jpg?alt=media&token=66acfdf3-bbcd-4034-9566-43ab93aec27d','he'),
	 (1,'this is for test',500,'testing','test','2024-09-24',false,0,'https://firebasestorage.googleapis.com/v0/b/interhostel-cart.appspot.com/o/images%2Fvenom-black-symbiote-desktop-wallpaper-4k.jpg?alt=media&token=d261ab75-d62a-4b0c-bad0-ef1c17d97afb','he');

	
INSERT INTO item (sellerID,itemName,itemPrice,itemDescription,itemTags,listingDate,reportflag,itemVisit,itemPhotoURL,gender) VALUES
	 (1,'gghahaha',695654,' jhdbah bdabd jabc a','test','2024-09-24',false,0,'https://firebasestorage.googleapis.com/v0/b/interhostel-cart.appspot.com/o/images%2Ftorii-gate-japanese-5120x7244-15297.jpg?alt=media&token=83c59cb8-31fa-4b3c-bd41-0cfe800b287c','he'),
	 (1,'testa cokaskcascj aclaksa',454,'dadawdadszdsdca','adad','2024-09-24',false,0,'https://firebasestorage.googleapis.com/v0/b/interhostel-cart.appspot.com/o/images%2Fdeadpool-vs-wolverine-yellow-background-desktop-wallpaper-4k.jpg?alt=media&token=36ceee2d-7051-421a-9b29-16ac2bb191f2','he'),
	 (1,'pen',10,'pen hahaha','pen','2024-09-24',false,0,'https://firebasestorage.googleapis.com/v0/b/interhostel-cart.appspot.com/o/images%2Fretro-spike-spiegel-cityscape-cowboy-bebop-desktop-wallpaper-4k.jpg?alt=media&token=5db8a8db-55e6-4fcc-aadd-bd6d2e27ac5b','he');


INSERT INTO item (sellerID, itemName, itemPrice, itemDescription, itemTags, listingDate, reportflag, itemVisit, itemPhotoURL, gender) VALUES
(1, 'Laptop', 20000, '8 months old, black color, excellent condition', 'Electronics', '2024-03-04', false, 1, 'https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg', 'he'),
(2, 'Smartphone', 5000, '6 months old, silver color, very good condition', 'Electronics', '2024-04-03', false, 2, 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQjKGU9iHKHgexdIrZ7-oeBH5gkher22P8xNbx_7bfleTnQWfX30x_O8RfiiuM8kAJeTaEzebqN7kVdj7Jmi6KGj9mTkOTrOS6cLDIoC1A', 'he'),
(3, 'Headphone', 500, '4 months old, black color, lightly used, great condition', 'Electronics', '2024-03-04', false, 3, 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRkfSyCMWTYS1B6uRJeEbO6ZlWXZT9PCxcHZvcOPtNT88zqBm6DOvlYaITscUrZgz5BYWO3WJPWt0eUN0Hp9wxwIU9yJIvDOSHgyANM2G5_hp4HaRpdMcuJZQ', 'he'),
(4, 'Tablet', 4000, '1 year old, white color, fully functional, good condition', 'Electronics', '2024-01-01', false, 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qb4GEm-xLi_4WQnZeBcumEq4tB3gj-dWsw&s', 'he'),
(5, 'Portable Bluetooth Speaker', 1000, '5 months old, red color, clear sound, great condition', 'Electronics', '2024-02-15', false, 5, 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQlu2kgWAXavuqWSxqnJD-_2UpsELULVUv5-_WCCiiyOpuuCtpEBhrmCaleomt5BPGiVesg1VLVgRrE3nxyq4xvtp2u77DxiEl_86ccRZqvocRvBJGXAQ', 'he'),
(6, 'Power Bank', 600, '7 months old, gray color, reliable, very good condition', 'Electronics', '2024-03-01', false, 6, 'https://media.istockphoto.com/id/1126642401/photo/power-bank-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=FMMhXxZql2guHigJvPDsi6S5Bp_QT6OsfZnD6kqcc3U=', 'he'),
(7, 'LED Desk Lamp', 700, '3 months old, white color, adjustable brightness, like new', 'Electronics', '2024-05-10', false, 7, 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSoJ1pgxT37JEvTYgFb6g9cnpy9BH1r_TgBKXJAoDJATtO5nPYJFwZVg4LAkPm0stQW34BvDAg_kc2wo1eKYnyOPvqtGsqeW-MB1mCCka2v2_WhODF9azfy', 'he'),
(8, 'Wi-Fi Router', 800, '10 months old, black color, high speed, good condition', 'Electronics', '2024-02-20', false, 8, 'https://c8.alamy.com/comp/RKBJ3A/wireless-wifi-router-isolated-RKBJ3A.jpg', 'he'),
(9, 'Electric Kettle', 1500, '6 months old, silver color, quick-boiling, excellent condition', 'Electronics', '2024-03-03', false, 9, 'https://m.media-amazon.com/images/I/717V4glGOsL._AC_UF894,1000_QL80_.jpg', 'he'),
(10, 'USB Flash Drive', 200, '8 months old, blue color, ample storage, good condition', 'Electronics', '2024-03-05', false, 10, 'https://media.istockphoto.com/id/172295657/photo/flash-drive-on-white-background.jpg?s=612x612&w=0&k=20&c=WIEpilaLFDQrRF6TOB3DIMgHHRnDIHaDDSBtubYyUBs=', 'he');




INSERT INTO item (sellerID, itemName, itemPrice, itemDescription, itemTags, listingDate, reportflag, itemVisit, itemPhotoURL, gender) VALUES
(1, 'Notebook', 50, '3 months old, blue cover, lightly used', 'Stationary', '2024-04-01', false, 1, 'https://media.istockphoto.com/id/149402372/photo/notebook.jpg?s=612x612&w=0&k=20&c=aGoLZSVt9IXBiO_bsJqvP9pjiyVJ7cETmSZm5fKjdUI=', 'he'),
(2, 'Calculator', 200, '6 months old, black color, excellent condition', 'Stationary', '2024-04-02', false, 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNquvpQImBDI6m6j1ilOD8-bgjSny3-hJDg&s', 'he'),
(3, 'Pen Set', 30, '2 months old, assorted colors, barely used', 'Stationary', '2024-04-03', false, 3, 'https://helloaugust.in/wp-content/uploads/2020/04/colour-gel-pen-set.jpg', 'he'),
(4, 'Desk Organizer', 150, '5 months old, white color, sturdy condition', 'Stationary', '2024-04-04', false, 4, 'https://media.istockphoto.com/id/183424789/photo/pencil-holder-with-contents.jpg?s=612x612&w=0&k=20&c=YPbh8_BmCxIeO6ChFTZCqvDEkCOC1iC7xk3dbuA9o4k=', 'he'),
(5, 'Marker Set', 40, '4 months old, assorted colors, ink in good condition', 'Stationary', '2024-04-05', false, 5, 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSvEEqf0bdF_uJ0L1ym-SYBOLZTT3RLPOsPDm5ghnlOYSiyyv_ykbFVOzvTNeYL0DMFOvF8q-H2kQag4OM9XOoMN9IJC5b9dU-51tOZ0ei86ITfqG7TDEl4', 'he'),
(6, 'Stapler', 70, '6 months old, silver color, lightly used', 'Stationary', '2024-04-06', false, 6, 'https://m.media-amazon.com/images/I/611IBNRk2vL.jpg', 'he'),
(7, 'Art Supplies Set', 300, '3 months old, assorted colors, like new', 'Stationary', '2024-04-07', false, 7, 'https://images.meesho.com/images/products/438370361/ins3i_1200.jpg', 'he'),
(8, 'Folder Set', 25, '2 months old, black color, fully intact', 'Stationary', '2024-04-08', false, 8, 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRx8SORgNOTKAq1pDxkOnXfA_diGtgkf80a43mBOr9GFlgpaDU2aJhGCCUXqN2Q5TYiME-A-bnCy7JZmzYYwsWqduP32LYHTxWKUUQW_IJqMFRLzS0p7MDJ', 'he'),
(9, 'Geometry Set', 50, '5 months old, transparent color, no scratches', 'Stationary', '2024-04-09', false, 9, 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSIag-lvVWc4NNwANMPIzTI0gpmk7T9-JjzD6dR1Ppz3-Arobpy-zR3XRbQyvcYz8WhY2BsxvcwK96qgOI3MboUBFz89t501iok4NLq3HOfTEiTU5yN6rDhag', 'he'),
(10, 'Sticky Notes', 20, '1 month old, yellow and pink, good adhesive', 'Stationary', '2024-04-10', false, 10, 'https://media.istockphoto.com/id/1494224375/photo/group-of-colorful-sticky-notes-on-white-paper-background.jpg?s=612x612&w=0&k=20&c=7pRezznvpU4TUtmEHPLJfkrWUEUwRfWJyCXpU9OWhJQ=', 'he');



INSERT INTO item (sellerID, itemName, itemPrice, itemDescription, itemTags, listingDate, reportflag, itemVisit, itemPhotoURL, gender) VALUES
(1, 'Bicycle', 3000, '10 months old, blue color, well-maintained, smooth ride', 'Vehicle', '2024-03-04', false, 1, 'https://justbuycycles.com/cdn/shop/products/T05507_1.png?v=1673182232', 'he'),
(2, 'Electric Scooter', 15000, '8 months old, black color, excellent battery life, great condition', 'Vehicle', '2024-04-03', false, 2, 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTtXQVqm6_4ffo1WBW_U4GeQ1mB852r5Y_IuJ7ODlbXhEfuQj9BWh5r5r43Q4sUsdcDFyPdpEdCsnVAysg7pXit7vZWrG14sYiiPhDEw7P1uFcgKxfHMIUp', 'he'),
(5, 'Motorcycle', 25000, '15 months old, silver color, fully serviced, reliable condition', 'Vehicle', '2024-02-15', false, 5, 'https://imgd.aeplcdn.com/370x208/n/cw/ec/103183/raider-125-right-side-view-20.png?isig=0&q=80', 'he'),
(6, 'Helmet', 500, '3 months old, black color, like new, excellent condition', 'Vehicle', '2024-03-01', false, 6, 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR36uE0wbRvJymrqKMSH4L0PCf6EJjEH-BIR0MTKiYGXq1RfIfm0kMKBrml0joiJMiSO4vlis7HwOHV6r4wzYxVN4awCSAFq81EiT7dwFSnHbi3xxNT2XUv', 'he'),
(9, 'Electric Cycle', 20000, '9 months old, gray color, powerful battery, excellent condition', 'Vehicle', '2024-03-03', false, 9, 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRss89tXI3mjXL4rRqy06UlZb6T6autb5QsCpNrHMO4HLMmdGt8-EYDL_eCVg4_HMKeZyAGs3lNlXcbOnJO30ECqf46UdJLaw6978_vcJ3NRzPqIcyPVLYT', 'he');



INSERT INTO item (sellerID, itemName, itemPrice, itemDescription, itemTags, listingDate, reportflag, itemVisit, itemPhotoURL, gender) VALUES
(1, 'Tennis Racket', 1500, '6 months old, red color, good condition, lightly used with no damage', 'Sports', '2024-03-04', false, 1, 'https://cdn.pixabay.com/photo/2023/04/17/10/31/tennis-7932067_640.jpg', 'he'),
(2, 'Badminton Racket', 800, '8 months old, green color, very good condition, used but still in excellent shape', 'Sports', '2024-04-03', false, 2, 'https://media.istockphoto.com/id/1761333789/photo/badminton-shuttlecocks-and-racket-placed-in-the-corner-of-a-synthetic-field.jpg?s=612x612&w=0&k=20&c=3rr4BZqe1rDWsCe6LF_YPCXZe6Um5jizc6d6n96U1Q4=', 'he'),
(3, 'Football', 1200, '1 year old, white and black color, good condition, some wear but still very functional', 'Sports', '2024-03-04', false, 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXo8tXXCbU9nsV2Qn54ItpMWxaC5FzR2FaRA&s', 'he'),
(4, 'Basketball', 1500, '10 months old, orange color, great condition, lightly used, with a strong grip', 'Sports', '2024-01-01', false, 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGvoYLiAoGm7a4PILGf6IWd0f8hn1gpni9Jw&s', 'he'),
(5, 'Table Tennis Bat', 500, '4 months old, red and black color, lightly used, excellent condition with no scratches', 'Sports', '2024-02-15', false, 5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdtY3G5h1sC9-dVWyDCATc5poTfoSsf0FQKE9ul7pGY8htsJ-YGkx3eXCPxgyoVWSqlMKK&s', 'he'),
(6, 'Cricket Bat', 2000, '7 months old, wooden color, good condition, slight marks from use but no cracks', 'Sports', '2024-03-01', false, 6, 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSrLh0GM4JjPnoLQsQ71zVel3sJ8DzkO2matX18R58egGm-BTkiShxJjqBVkLfky2aa18-Ud8J6-zMJRXpTVoJFNd2Xsg33mnlncGJmyFLNmR2OWSW6ZkxRBg', 'he'),
(7, 'Yoga Mat', 800, '9 months old, purple color, excellent condition, minimal wear, non-slip surface', 'Sports', '2024-05-10', false, 7, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQXbF_JkLdk8WlVNTWovcylpYMbCqCtXNCwA_53_sejlHrNvZBilpL0A&s', 'he'),
(8, 'Dumbbells (Set)', 1200, '5 months old, gray color, like new condition, lightly used for home workouts', 'Sports', '2024-02-20', false, 8, 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRJVAi_dbjB5Mcoqob-60aAiYQm_pAFLkfSfv-dPnXijrX-XoACY1TwTLNS4NMMe_D_Vzef67cP5I1E2TB1YO89FcC9zs4OydGKAPEqNQi8peMx1C9fHka4', 'he'),
(9, 'Skipping Rope', 300, '3 months old, blue color, very good condition, lightly used, adjustable length', 'Sports', '2024-03-03', false, 9, 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR4EciDTTOw4-fWdsrtcLoX2RfPKkkXVICrJ221-nwmXXk24rda6p8MMeb2_4dqktwLE59DihQqbFOiQgF2SOWCEkvhRyUrUz6G9uV7pp4HJC7vDBrstPloYA', 'he');

INSERT INTO item (sellerID, itemName, itemPrice, itemDescription, itemTags, listingDate, reportflag, itemVisit, itemPhotoURL, gender) VALUES
(1, 'Watch', 1500, '1 year old, black color, good condition, lightly used, minor scratches on the strap', 'Accessories', '2024-01-10', false, 1, 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ4x8gMA02nOgjgrvh4X0UxIzhT2aiWfAmHEmdwt4Gl1B2yul1-51ZqfunSA8Eici2lpfzfRNml7Ox2m3Nie0eDqM5a6MTi0EVCqLO0cbQ', 'he'),
(2, 'Sunglasses', 800, '6 months old, brown color, great condition, no scratches, stylish frame', 'Accessories', '2024-03-15', false, 2, 'https://images.meesho.com/images/products/53696109/xg9u1_512.webp', 'he'),
(3, 'Backpack', 1200, '8 months old, navy blue color, very good condition, no tears, spacious', 'Accessories', '2024-02-20', false, 3, 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSVe9bmqHic31EqagoG1MMhXt4SfXXNAHV1NqyCulR7G-qO-6Y3i2PAS26H_IyrH4VMPeW1Ln-cYfVY09Z36xZMJ0_MpU2s2guXhRx-wHSn_M88bCixhT6t', 'he'),
(5, 'Hat', 300, '6 months old, gray color, excellent condition, hardly worn', 'Accessories', '2024-02-25', false, 5, 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR4A1cnruPzpa2L_HdNyQBN8V6Ecks1VGarRhstxHzhRDdITNjQfZNZ_6Dd7l0VYPlDXXk0TRgfFRyVHvPKCY_iW7mczzn8HVD1uoxFG-_hvwd5eTCc4enI42Y', 'he'),
(6, 'Scarf', 500, '3 months old, red color, like new, soft fabric, no signs of use', 'Accessories', '2024-04-05', false, 6, 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTN5qJM6D1VdClLAlwVA6yqD7rwVkXLxWQNHclwliGVgTUpPhcRCkGjnFTiGJPzQLusdCbzD4l1LcKh2QF-ZpmACbQHiP8ugN3F9DygaLOx', 'she'),
(7, 'Belt', 400, '1 year old, brown color, good condition, no cracks or tears', 'Accessories', '2024-01-30', false, 7, 'https://t3.ftcdn.net/jpg/00/83/27/08/240_F_83270815_WXTLsSs9htMDxDIwL7koSVR3ZwNQnfLA.jpg', 'he'),
(8, 'Handbag', 1000, '5 months old, black color, great condition, stylish and spacious', 'Accessories', '2024-02-18', false, 8, 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8SzlL4-mVXM2_9SiNbhl9CjqYZSJljDXmnjTZg9fXtSmOkZG4vmPlAYyKAwNxG1rNi0hNHTlDufxLJ9Edu_a7djAdx1k4u2Cza6_QoGvhLhYaYcBXCAvzFw', 'she'),
(9, 'Gloves', 300, '7 months old, black color, very good condition, lightly used for winter', 'Accessories', '2024-03-10', false, 9, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRspEG59vgEM-iBRiOkN0w9z-A-cRndRJSNbQ&s', 'he'),
(10, 'Keychain', 150, '2 months old, silver color, excellent condition, hardly used, stylish', 'Accessories', '2024-04-01', false, 10, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdOlWpuqDnLErhaPJABBrOuCZcvij7H5CRyQ&s', 'he');

	
select * from item;