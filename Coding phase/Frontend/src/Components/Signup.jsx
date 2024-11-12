import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUser, FaPhone, FaBuilding, FaCalendarAlt, FaBook } from "react-icons/fa";
import axios from "axios";
import img from "../assets/login.jpeg";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    emailid: "",
    hostelno: "",
    roomno: "",
    username: "",
    userdob: "",
    userphoneno: "",
    userpassword: "",
    userdept: "",
    usercourse: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedData = {
        ...formData,
        userdob: formatDate(formData.userdob)
      };
      console.log(formattedData);
      const response = await axios.post("http://localhost:3001/api/auth/signup", formattedData);
      const { token } = response.data;
      localStorage.setItem("token", token);
      // Redirect to a protected route or dashboard
      window.location.href = "/";
    } catch (error) {
      setError("Failed to sign up");
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#F8F4E1] to-[#E8DFC7] min-h-screen">
      <div className="flex items-center justify-center min-h-[calc(120vh-64px)]">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-10">
              <h2 className="text-4xl font-bold text-[#543310] mb-8">Create Account</h2>
              {error && <p className="text-red-500">{error}</p>}
              <form onSubmit={handleSubmit} className="space-y-6 ">
                <div className="relative">
                  <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="email"
                    name="emailid"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.emailid}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a78059] transition duration-300"
                  />
                </div>
                <div className="relative">
                  <FaBuilding className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="text"
                    name="hostelno"
                    placeholder="Hostel Number"
                    onChange={handleChange}
                    value={formData.hostelno}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a78059] transition duration-300"
                  />
                </div>
                <div className="relative">
                  <FaBuilding className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="text"
                    name="roomno"
                    placeholder="Room Number"
                    onChange={handleChange}
                    value={formData.roomno}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a78059] transition duration-300"
                  />
                </div>
                <div className="relative">
                  <FaUser className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    value={formData.username}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a78059] transition duration-300"
                  />
                </div>
                <div className="relative">
                  <FaCalendarAlt className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="date"
                    name="userdob"
                    placeholder="Date of Birth"
                    onChange={handleChange}
                    value={formData.userdob}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border text-gray-400 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a78059] transition duration-300"
                  />
                </div>
                <div className="relative">
                  <FaPhone className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="text"
                    name="userphoneno"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    value={formData.userphoneno}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a78059] transition duration-300"
                  />
                </div>
                <div className="relative">
                  <FaLock className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="password"
                    name="userpassword"
                    placeholder="Password"
                    onChange={handleChange}
                    value={formData.userpassword}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a78059] transition duration-300"
                  />
                </div>
                <div className="relative">
                  <FaBook className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="text"
                    name="userdept"
                    placeholder="Department"
                    onChange={handleChange}
                    value={formData.userdept}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a78059] transition duration-300"
                  />
                </div>
                <div className="relative">
                  <FaBook className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="text"
                    name="usercourse"
                    placeholder="Course"
                    onChange={handleChange}
                    value={formData.usercourse}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a78059] transition duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#74512D] text-white rounded-lg py-3 font-semibold hover:bg-[#543310] transition duration-300 transform hover:scale-105"
                >
                  Sign Up
                </button>
              </form>
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?
                  <Link to="/login" className="ml-2 text-[#a78059] hover:underline focus:outline-none font-semibold">
                    Log In
                  </Link>
                </p>
              </div>
            </div>
            <div className="hidden md:block w-1/2">
              <img src={img} alt="signup" className="object-cover  w-full h-screen" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;