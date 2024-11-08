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

	
select * from item;