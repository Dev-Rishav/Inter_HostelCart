import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReportList from "../AdminComponents/ReportList.jsx";
import UserList from "../AdminComponents/UserList.jsx";
import CapacityCircle from '../AdminComponents/CapacityCircle.jsx';
import ItemList from '../AdminComponents/ItemList.jsx';

function AdminDashboard() {
  const [reports, setReports] = useState([]);
  const [users, setUsers] = useState([]);
  const [items, setItems] = useState([]);
  const [blockedUsers, setBlockedUsers] = useState([]);
  const maxCapacity = 100000; 

  useEffect(() => {
    fetchReports();
    fetchUsers();
    fetchItems();
  }, []);

  const fetchReports = async () => {                                     //update report list
    const response = await axios.get('/api/reports');
    setReports(response.data.reports || []);
  };

  const fetchUsers = async () => {                                       //update user list
    const response = await axios.get('/api/users');
    const usersData = response.data.users || [];

    const unblockedUsers = usersData.filter(user => !user.isBlocked);  
    const blockedUsers = usersData.filter(user => user.isBlocked);

    setUsers(unblockedUsers);
    setBlockedUsers(blockedUsers);
  };

  const fetchItems = async () => {                                       // Fetch items list
    const response = await axios.get('/api/items');
    setItems(response.data.items || []);
  };

  const verifyReport = async (reportId) => {                             //mark report as verified
    await axios.put(`/api/reports/${reportId}/verify`);
    fetchReports(); 
  };

  const blockUser = async (userId) => {                                 //block a particular user
    await axios.put(`/api/users/${userId}/block`);
    fetchUsers();  
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">~Admin Dashboard~</h1>

      <div className="flex justify-center gap-10">
      
        <section className="w-64 bg-white p-6 rounded-lg shadow-lg h-[12rem]">
          <CapacityCircle capacity={users.length} maxCapacity={maxCapacity} label="user" />
          <UserList users={users}/>
        </section>

        
        <section className="w-64 bg-white p-6 rounded-lg shadow-lg h-[12rem]">
          <CapacityCircle capacity={reports.length} maxCapacity="100" label="report"/>
          <ReportList reports={reports} onVerify={verifyReport} />
        </section>

        <section className="w-64 bg-white p-6 rounded-lg shadow-lg h-[12rem]">
          <CapacityCircle capacity={users.length} maxCapacity={maxCapacity} label="blocked-user" />
          <UserList users={users} onBlockUser={blockUser} />
        </section>

        <section className="w-64 bg-white p-6 rounded-lg shadow-lg h-[12rem]">
          <h2 className="text-lg font-bold mb-2 text-center">Items List</h2>
          <ItemList items={items} />
        </section>  
      </div>
    </div>
  </div>
);
}

export default AdminDashboard;