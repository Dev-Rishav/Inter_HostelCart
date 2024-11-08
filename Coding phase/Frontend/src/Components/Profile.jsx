import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import base2 from '../assets/base2.jpg';
const Profile = () => {
  const [profileImage, setProfileImage] = useState('default-profile.png');
  const [email] = useState('user@manit.ac.in');
  const [hostelNumber] = useState(1);
  const [mobileNumber, setMobileNumber] = useState('1234567890');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto mt-10">
      <h2 className="text-3xl font-semibold mb-6 text-center">Profile</h2>
      <div className="flex flex-col items-center mb-6">
        <div className="relative mb-4">
          <img
            src={base2}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />
          <label className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer flex items-center justify-center">
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            <FaCamera size={20} />
          </label>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">Edit Image</button>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          value={email}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Hostel Number</label>
        <input
          type="text"
          
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          readOnly
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Mobile Number</label>
        <input
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold w-full">Save Changes</button>
    </div>
  );
};

export default Profile;