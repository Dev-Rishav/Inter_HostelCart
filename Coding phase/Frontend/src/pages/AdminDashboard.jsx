import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReportList from "../AdminComponents/ReportList.jsx";
import UserList from "../AdminComponents/UserList.jsx";
import CapacityCircle from '../AdminComponents/CapacityCircle.jsx';
import ItemList from '../AdminComponents/ItemList.jsx';
import { FaShoppingCart } from "react-icons/fa";
function AdminDashboard() {
  const [reports, setReports] = useState([]);
  const [users, setUsers] = useState([]);
  const [items, setItems] = useState([]);
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [sec,setsec]=useState(0);
  const maxCapacity = 100; 

  useEffect(() => {
    fetchReports();
    fetchUsers();
    fetchItems();
  }, []);

 useEffect(()=>{atul},[sec]);
 
  const fetchReports = async () => {                                     //update report list
    const response = await axios.get('http://localhost:3001/api/items');
    const items=response.data.rows|| [];
    const reporteditem=items.filter(item=>item.reportflag)
    setReports(reporteditem);
  };

  const fetchUsers = async () => {                                       //update user list
    const response = await axios.get('http://localhost:3001/api/user/alluser');
   // const usersData = response.data.users || [];

    // const unblockedUsers = usersData.filter(user => !user.isBlocked);  
    // const blockedUsers = usersData.filter(user => user.isBlocked);

    setUsers(response.data.rows|| []);
    
    //setBlockedUsers(blockedUsers);
  };

  const fetchItems = async () => {                                       // Fetch items list
    const response = await axios.get('http://localhost:3001/api/items');
    setItems(response.data.rows|| []);

  };

  const verifyReport = async (reportId) => {                             //mark report as verified
    await axios.put(`/api/reports/${reportId}/verify`);
    fetchReports(); 
  };

  const blockUser = async (userId) => {                                 //block a particular user
    await axios.put(`/api/users/${userId}/block`);
    fetchUsers();  
  };
  function atul() {
    switch (sec) {
      case 1: return <UserList users={users} /> 
      case 2: return <ReportList reports={reports} onVerify={verifyReport} />
      case 3: return <UserList users={blockUser} onBlockUser={blockUser} /> 
      case 4: return <ItemList items={items} />   
      default:
        return;
    }
 }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">~Admin Dashboard~</h1>

      <div className="flex justify-center gap-10">
      
        <section className="w-64 bg-white p-6 rounded-lg shadow-lg h-[12rem] hover:scale-105 transform transition duration-300"onClick={()=>setsec(1)} >
          <CapacityCircle capacity={users.length} maxCapacity={maxCapacity} label="user" />
          
        </section>

        
        <section className="w-64 bg-white p-6 rounded-lg shadow-lg h-[12rem] hover:scale-105 transform transition duration-300" onClick={()=>setsec(2)}>
          <CapacityCircle capacity={reports.length} maxCapacity="100" label="report"/>
          
        </section>

        <section className="w-64 bg-white p-6 rounded-lg shadow-lg h-[12rem] hover:scale-105 transform transition duration-300" onClick={()=>setsec(3)}>
          <CapacityCircle capacity={users.length} maxCapacity={maxCapacity} label="blocked-user" />
        
        </section>

        <section className="w-64 bg-white p-6 rounded-lg shadow-lg h-[12rem] hover:scale-105 transform transition duration-300"onClick={()=>setsec(4)}>
        <FaShoppingCart className="text-gray-300 text-7xl mx-auto" />  
          <h3 className="text-base font-bold mb-2 text-center mt-3">Items List</h3>
          <p className="text-gray-900 font-semibold text-lg text-center">{items.length}</p>
          
        </section>
      </div>
     {atul()}
    </div>
  </div>
);
}

export default AdminDashboard;