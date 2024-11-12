function UserList({ users }) 
{
  if (!Array.isArray(users)) {
    return <p>No users found.</p>;
  }

  
  return (
    <div className="user-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {users.map((user) => (
        <div key={user.id} className="user-card border rounded-lg p-4 shadow-lg bg-white">
          <h2 className="text-lg font-semibold mb-2">{user.username}</h2>
          <p><strong>Phone No:</strong> {user.userphoneno}</p>
          <p><strong>Hostel No:</strong> {user.hostelno}</p>
          <p><strong>Course:</strong> {user.usercourse}</p>
          <p><strong>Course:</strong> {user.userdept}</p>
          <p><strong>Email:</strong> <a href={`mailto:${user.emailid}`} className="text-blue-500">{user.emailid}</a></p>
          <p><strong>Room No:</strong> {user.roomno}</p>
        </div>
      ))}
    </div>
  );
  }
  export default UserList;
  