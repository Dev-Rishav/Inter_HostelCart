import React, { useState } from 'react';
import axios from 'axios';
import { storage } from '../Firebase/setup'; 
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const AddItem = () => {
  const [formData, setFormData] = useState({
    sellerID: 1, // TODO: Fetch the current user's ID
    itemName: '',
    itemPrice: '',
    itemDescription: '',
    itemTags: '',
    listingDate: new Date().toISOString().split('T')[0], 
    itemPhotoURL: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      itemPhotoURL: e.target.files[0],
    }));
  };

  const handleAddItem = async () => {
    const { sellerID, itemName, itemPrice, itemDescription, itemTags, listingDate, itemPhotoURL } = formData;

    if (!itemName || !itemPrice || !itemDescription || !itemTags || !itemPhotoURL) {
      setError('All fields are required');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Upload the image to Firebase
      const storageRef = ref(storage, `images/${itemPhotoURL.name}`);
      await uploadBytes(storageRef, itemPhotoURL);
      const imageUrl = await getDownloadURL(storageRef);

      // Convert form data to URL-encoded format
      const urlEncodedData = new URLSearchParams();
      urlEncodedData.append('sellerID', sellerID);
      urlEncodedData.append('itemName', itemName);
      urlEncodedData.append('itemPrice', itemPrice);
      urlEncodedData.append('itemDescription', itemDescription);
      urlEncodedData.append('itemTags', itemTags);
      urlEncodedData.append('listingDate', listingDate);
      urlEncodedData.append('itemPhotoURL', imageUrl);

      // Send the form data with the image URL
      const response = await axios.post('http://localhost:3001/api/items', urlEncodedData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      setSuccess('Item added successfully');
      setFormData({
        sellerID: 1,
        itemName: '',
        itemPrice: '',
        itemDescription: '',
        itemTags: '',
        listingDate: new Date().toISOString().split('T')[0],
        itemPhotoURL: ''
      });
    } catch (err) {
      setError('Failed to add item');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add Item for Selling</h2>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      {success && <div className="mb-4 text-green-500">{success}</div>}
      <div className="mb-4">
        <label className="block text-sm">Item Name</label>
        <input
          type="text"
          name="itemName"
          value={formData.itemName}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm">Item Price</label>
        <input
          type="number"
          name="itemPrice"
          value={formData.itemPrice}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm">Item Description</label>
        <textarea
          name="itemDescription"
          value={formData.itemDescription}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm">Item Tags</label>
        {/* <input
          type="text"
          name="itemTags"
          value={formData.itemTags}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        /> */}
        <select id="options" name="itemTags" onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg">
          <option value="clothing">Clothings</option>
          <option value="electronics">Electronics</option>
          <option value="stationary">Stationary</option>
          <option value="vehicle">Vehicle</option>
          <option value="sport">Sport</option>
          <option value="medicine">Medicine</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm">Item Photo</label>
        <input
          type="file"
          name="itemPhotoURL"
          onChange={handleImageChange}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm">Listing Date</label>
        <input
          type="text"
          name="listingDate"
          value={formData.listingDate}
          readOnly
          className="w-full px-4 py-2 border rounded-lg bg-gray-100"
        />
      </div>
      <button
        onClick={handleAddItem}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add Item'}
      </button>
    </div>
  );
};

export default AddItem;