import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

// Simplified component implementations
const Card = ({ children, className }) => (
  <div className={`bg-white shadow-md rounded-lg ${className}`}>{children}</div>
);

const CardHeader = ({ children, className }) => (
  <div className={`p-4 border-b ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const Button = ({ children, variant = 'default', className, ...props }) => {
  const baseStyle = 'px-4 py-2 rounded-md font-medium';
  const variantStyles = {
    default: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border border-gray-300 hover:bg-gray-100',
    link: 'text-blue-500 hover:underline',
    ghost: 'hover:bg-gray-100',
  };
  
  return (
    <button 
      className={`${baseStyle} ${variantStyles[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

const Select = ({ value, onChange, options }) => (
  <select 
    value={value} 
    onChange={(e) => onChange(e.target.value)}
    className="border rounded-md px-2 py-1"
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

const Input = ({ className, ...props }) => (
  <input 
    className={`border rounded-md px-3 py-2 w-full ${className}`} 
    {...props} 
  />
);

// Icons (simplified)
const ChevronDown = () => <span>▼</span>;
const ArrowLeft = () => <span>←</span>;
const Search = () => <span>🔍</span>;

const OrderCard = ({ order }) => (
  <Card className="mb-4">
    <CardHeader className="flex flex-wrap justify-between items-center">
      <div className="mb-2 sm:mb-0">
        <p className="text-sm text-gray-500">ORDER PLACED</p>
        <p className="font-semibold">{order.listingdate}</p>
      </div>
      <div className="mb-2 sm:mb-0">
        <p className="text-sm text-gray-500">TOTAL</p>
        <p className="font-semibold">{order.itemprice}</p>
      </div>
      <div className="mb-2 sm:mb-0">
        <p className="text-sm text-gray-500">BOUGHT FROM</p>
        <p className="font-semibold flex items-center">
          {order.username} <ChevronDown />
        </p>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-500">ORDER # {order.itemno}</p>
        <Button variant="link" className="p-0">View order details</Button>
      </div>
    </CardHeader>
    <CardContent className="flex flex-wrap items-start">
      <img
        src={order.itemphotourl}
        alt={order.productName}
        className="w-24 h-24 object-cover rounded-md mb-4 sm:mb-0 sm:mr-4"
      />
      <div className="flex-grow mb-4 sm:mb-0">
        <h3 className="font-semibold">{order.itemname}</h3>
        <p className="text-sm text-gray-500 mt-1">Return eligibility: <ChevronDown /></p>
        <div className="flex mt-4 space-x-2">
          <Link to={`/item/${order.itemno}`} ><Button>View your item</Button></Link>
          <Button variant="outline">Sell it again</Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Orders = () => {
  const [selectedTab, setSelectedTab] = useState('orders');
  const [selectedYear, setSelectedYear] = useState('2023');
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = Cookies.get('token');
        const response = await axios.get('http://localhost:3001/api/orders', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(response.data.orders);        
        setLoading(false);
        console.log("orders",orders);

      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('Failed to fetch orders');
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const tabs = [
    { id: 'orders', label: 'Orders' },
    { id: 'cancelledOrders', label: 'Cancelled Orders' },
    { id: 'reportedOrders', label: 'Reported Orders' },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <ArrowLeft />
          <h1 className="text-2xl font-semibold ml-2">Your Orders</h1>
        </div>
        
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="flex flex-wrap space-x-2 mb-4 sm:mb-0">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={selectedTab === tab.id ? 'default' : 'ghost'}
                onClick={() => setSelectedTab(tab.id)}
                className="mb-2 sm:mb-0"
              >
                {tab.label}
              </Button>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-sm text-gray-500">{orders.length} orders placed in</p>
            <Select
              value={selectedYear}
              onChange={setSelectedYear}
              options={[
                { value: '2023', label: '2023' },
                { value: '2022', label: '2022' },
                { value: '2021', label: '2021' },
              ]}
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search all orders"
              className="pl-10 pr-4 py-2 w-full"
            />
          </div>
        </div>

        {orders.map((order) => (
          <OrderCard key={order.itemno} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;