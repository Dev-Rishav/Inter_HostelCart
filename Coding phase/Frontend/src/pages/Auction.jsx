import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Replace with your backend's URL

const Auction = () => {
  const location = useLocation();
  const { itemno } = location.state || {};
  
  const navigate = useNavigate();
  const [auction, setAuction] = useState({});
  const [bids, setBids] = useState([]);
  const [bidAmount, setBidAmount] = useState('');
  const [isSeller, setIsSeller] = useState(false);
  const [userId, setUserId] = useState(null);
  const token = Cookies.get('token');

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) {
        console.error('Please sign in to view your added items');
        return;
      }

      try {
        const response = await axios.get('http://localhost:3001/api/user/profile', {
          headers: {
            authorization: `Bearer ${token}`
          }
        });
        setUserId(response.data.user.userid);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchProfile();
  }, [token]);
  
  useEffect(() => {
    const fetchAuction = async (auctionId) => {
      try {
        const response = await axios.get(`http://localhost:3001/api/auctions/${auctionId}`);
        setAuction(response.data.auction);
      } catch (error) {
        console.error('Error fetching auction:', error);
      }
    };

    const fetchBids = async (auctionId) => {
      try {
        const response = await axios.get(`http://localhost:3001/api/auctions/${auctionId}/bids`);
        setBids(response.data.bids);
      } catch (error) {
        console.error('Error fetching bids:', error);
      }
    };

    const createAuction = async () => {
      try {
        const response = await axios.post(
          'http://localhost:3001/api/auctions/create',
          { itemId: itemno, startingBid: 100, endTime: '2023-12-31 23:59:59' }, // Replace with actual starting bid and end time
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAuction(response.data.auction);
        fetchBids(response.data.auction.auctionId);
        socket.emit('joinAuction', response.data.auction.auctionId);
      } catch (error) {
        console.error('Error creating auction:', error);
      }
    };

    const fetchAuctionId = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/auctions/item/${itemno}`);
        const auctionId = response.data.auctionId;
        fetchAuction(auctionId);
        fetchBids(auctionId);
        socket.emit('joinAuction', auctionId);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          createAuction();
        } else {
          console.error('Error fetching auction ID:', error);
        }
      }
    };

    const checkIfSeller = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/items/great/atul/${itemno}`);
        const item = response.data.rows[0];
        if (item && item.sellerid === userId) {
          setIsSeller(true);
        } else {
          setIsSeller(false);
        }
      } catch (error) {
        console.error('Error checking if user is seller:', error);
      }
    };

    if (userId) {
      fetchAuctionId();
      checkIfSeller();
    }

    socket.on('newBid', (bid) => {
      setBids((prevBids) => [bid, ...prevBids]);
    });

    return () => {
      socket.off('newBid');
    };
  }, [itemno, token, userId]);

  const handleBid = async () => {
    if (!token) {
      alert('Please sign in to place a bid.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3001/api/auctions/new/bid',
        { auctionId: auction.auctionid, userId, bidAmount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
      setBidAmount('');
    } catch (error) {
      console.error('Error placing bid:', error);
      alert('Failed to place bid');
    }
  };

  const handleStopAuction = async () => {
    if (!token) {
      alert('Please sign in to stop the auction.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3001/api/auctions/stop',
        { auctionId: auction.auctionid },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.error('Error stopping auction:', error);
      alert('Failed to stop auction');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Auction for Item: {auction.itemId}</h1>
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <p className="text-lg">Starting Bid: <span className="font-semibold">{auction.startingbid}</span></p>
        <p className="text-lg">End Time: <span className="font-semibold">{new Date(auction.endtime).toLocaleString()}</span></p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-2xl font-bold mb-4">Place a Bid</h2>
        <div className="flex items-center space-x-4">
          <input
            type="number"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
            placeholder="Enter your bid"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleBid}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Place Bid
          </button>
        </div>
      </div>

      {isSeller && (
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          <h2 className="text-2xl font-bold mb-4">Seller Actions</h2>
          <button
            onClick={handleStopAuction}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Stop Auction
          </button>
        </div>
      )}

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-4">Bids</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">User ID</th>
              <th className="py-2">Bid Amount</th>
              <th className="py-2">Bid Time</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid) => (
              <tr key={bid.bidId} className="border-t">
                <td className="py-2 text-center">{bid.userid}</td>
                <td className="py-2 text-center">{bid.bidamount}</td>
                <td className="py-2 text-center">{new Date(bid.bidtime).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Auction;