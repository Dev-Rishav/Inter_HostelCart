import React, { useState } from 'react';

const AddItem = () => {
  const [itemName, setItemName] = useState('');
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState('');
  const [hostelNumber, setHostelNumber] = useState('');
  const [postingDate, setPostingDate] = useState(new Date().toLocaleDateString());

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAddItem = () => {
    // Handle adding the item logic here
    // For now, we just log the item details
    console.log({
      itemName,
      image,
      price,
      hostelNumber,
      postingDate
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add Item for Selling</h2>
      <div className="mb-4">
        <label className="block text-sm">Item Name</label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm">Item Image</label>
        <input
          type="file"
          onChange={handleImageChange}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm">Hostel Number (1-12)</label>
        <input
          type="number"
          value={hostelNumber}
          onChange={(e) => setHostelNumber(Math.max(1, Math.min(12, e.target.value)))}
          min="1"
          max="12"
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm">Posting Date</label>
        <input
          type="text"
          value={postingDate}
          readOnly
          className="w-full px-4 py-2 border rounded-lg bg-gray-100"
        />
      </div>
      <button
        onClick={handleAddItem}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Add Item
      </button>
    </div>
  );
};

export default AddItem;