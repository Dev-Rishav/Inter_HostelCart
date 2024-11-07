import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";
import img from "../assets/login.jpeg";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/auth/login", formData);
      const { token } = response.data;
      Cookies.set("token", token, { expires: 1 }); // Set cookie to expire in 1 day      
      // Redirect to a protected route or dashboard
      window.location.href = "/profile";
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#F8F4E1] to-[#E8DFC7] min-h-screen">
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-10">
              <h2 className="text-4xl font-bold text-[#543310] mb-8">Welcome Back</h2>
              {error && <p className="text-red-500">{error}</p>}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.email}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a78059] transition duration-300"
                  />
                </div>
                <div className="relative">
                  <FaLock className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={formData.password}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a78059] transition duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#74512D] text-white rounded-lg py-3 font-semibold hover:bg-[#543310] transition duration-300 transform hover:scale-105"
                >
                  Log In
                </button>
              </form>
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?
                  <Link to="/signup" className="ml-2 text-[#a78059] hover:underline focus:outline-none font-semibold">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
            <div className="hidden md:block w-1/2">
              <img src={img} alt="login" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;