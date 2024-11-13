import React, { useState } from 'react';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { AiOutlineCreditCard } from 'react-icons/ai';
// import { IoLogoPaypal } from 'react-icons/io';
import { SiGooglepay, SiPhonepe } from 'react-icons/si';
import { RiPaypalLine } from 'react-icons/ri';

const Payment = () => {
  const [activePaymentMethod, setActivePaymentMethod] = useState(null);
  const [otp, setOtp] = useState('');
  const [saveDetails, setSaveDetails] = useState(false);

  // Handle OTP submission
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Perform OTP verification here
    alert('OTP submitted: ' + otp);
  };

  return (
    <div className="p-8 bg-yellow-50 rounded-lg shadow-lg max-w-2xl mx-auto my-10 border border-gray-200">
  <h2 className="text-3xl font-bold mb-6 text-gray-800">Payment Methods</h2>
  
  <div className="mb-8">
    <h3 className="text-2xl font-semibold mb-3 text-gray-700">Available Payment Methods</h3>
    <ul className="list-none list-inside space-y-2">
      <li className="bg-gray-100 h-14 text-center">
        <button onClick={() => setActivePaymentMethod('upi')} className="flex items-center text-blue-950 hover:text-blue-800">
          <SiGooglepay className="text-3xl mr-2" /> Google Pay / <SiPhonepe className="text-3xl ml-2 mr-2" /> PhonePe
        </button>
      </li>
      <li>
        <button onClick={() => setActivePaymentMethod('razorpay')} className="flex items-center text-blue-600 hover:text-blue-700">
          <RiPaypalLine className="text-3xl mr-2" /> Razorpay
        </button>
      </li>
      <li>
        <button onClick={() => setActivePaymentMethod('cards')} className="flex items-center text-blue-600 hover:text-blue-700">
          <AiOutlineCreditCard className="text-3xl mr-2" /> Cards (Debit/Credit)
        </button>
      </li>
    </ul>
  </div>

  {/* UPI Payment Section */}
  {activePaymentMethod === 'upi' && (
    <div className="p-6 bg-gray-300 rounded-lg border border-gray-600 shadow-sm">
      <h3 className="text-xl font-semibold mb-2 text-gray-700">UPI Payment</h3>
      <p className="mb-4 text-gray-600">Select your UPI app and enter your UPI ID.</p>
      <input type="text" placeholder="UPI ID" className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4" />
      <button className="bg-gray-950 text-white px-4 py-2 rounded-lg hover:bg-blue-800">Save UPI ID</button>
      <div className="mt-4">
        <label className="inline-flex items-center text-gray-600">
          <input type="checkbox" checked={saveDetails} onChange={() => setSaveDetails(!saveDetails)} className="form-checkbox h-5 w-5 text-blue-600" />
          <span className="ml-2">Save details for future use</span>
        </label>
      </div>
    </div>
  )}

  {/* Razorpay Section */}
  {activePaymentMethod === 'razorpay' && (
    <div className="p-6 bg-gray-300 rounded-lg border border-gray-600 shadow-sm">
      <h3 className="text-xl font-semibold mb-2 text-gray-700">Razorpay</h3>
      <p className="mb-4 text-gray-600">To integrate Razorpay, follow their documentation for the setup.</p>
      <button className="bg-gray-950 text-white px-4 py-2 rounded-lg hover:bg-blue-800">Save Razorpay Account</button>
      <div className="mt-4">
        <label className="inline-flex items-center text-gray-600">
          <input type="checkbox" checked={saveDetails} onChange={() => setSaveDetails(!saveDetails)} className="form-checkbox h-5 w-5 text-blue-600" />
          <span className="ml-2">Save details for future use</span>
        </label>
      </div>
    </div>
  )}

  {/* Card Details Section */}
  {activePaymentMethod === 'cards' && (
    <div className="p-6 bg-gray-300 rounded-lg border border-gray-600 shadow-sm">
      <h3 className="text-xl font-semibold mb-2 text-gray-700">Card Details</h3>
      <form onSubmit={handleOtpSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">Card Number</label>
          <input type="text" placeholder="Enter card number" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">Expiry Date</label>
          <input type="text" placeholder="MM/YY" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">CVV</label>
          <input type="text" placeholder="Enter CVV" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">Account Holder Name</label>
          <input type="text" placeholder="Enter your name" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">OTP Verification</label>
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
        </div>
        <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Verify OTP</button>
        <div className="mt-4">
          <label className="inline-flex items-center text-gray-600">
            <input type="checkbox" checked={saveDetails} onChange={() => setSaveDetails(!saveDetails)} className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="ml-2">Save details for future use</span>
          </label>
        </div>
      </form>
    </div>
  )}
</div>

  );
};

export default Payment;