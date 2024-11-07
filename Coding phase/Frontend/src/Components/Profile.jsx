import React, { useState, useEffect } from 'react';
import { FaCamera } from 'react-icons/fa';
import axios from 'axios';
import base2 from '../assets/base2.jpg';
import Cookies from 'js-cookie';

const Profile = () => {
  const [profileImage, setProfileImage] = useState(base2);
  const [email, setEmail] = useState('');
  const [hostelNumber, setHostelNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = Cookies.get('token');
        // console.log(token);
        
        const response = await axios.get('http://localhost:3001/api/user/profile', {
          headers: {
            authorization: `Bearer ${token}`
          }
        });
        
        const { user } = response.data;
        setEmail(user.emailid);
        setHostelNumber(user.hostelno);
        setMobileNumber(user.userphoneno);
        setProfileImage(user.profileImage || base2);
      } catch (error) {
        setError('Failed to fetch profile data');
      }
    };

    fetchProfile();
  }, []);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        setProfileImage(reader.result);
        try {
          const token = Cookies.get('token');
          await axios.post('http://localhost:3001/api/user/profile/image', { image: reader.result }, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        } catch (error) {
          setError('Failed to upload profile image');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = async () => {
    try {
      const token = Cookies.get('token');
      await axios.put('http://localhost:3001/api/user/profile', {
        mobileNumber
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Profile updated successfully');
    } catch (error) {
      setError('Failed to save profile changes');
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto mt-10">
      <h2 className="text-3xl font-semibold mb-6 text-center">Profile</h2>
      <div className="flex flex-col items-center mb-6">
        <div className="relative mb-4">
          <img
            src={profileImage}
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
          value={hostelNumber}
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
      <button onClick={handleSaveChanges} className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold w-full">Save Changes</button>
    </div>
  );
};

export default Profile;