function UserList({ users, onBlock }) 
{
  if (!Array.isArray(users)) {
    return <p>No users found.</p>;
  }
    return (
      <div className="space-y-4">
        <ul>
          {users.map((user) => (
            <li key={user.id}  className="flex justify-between items-center border-b py-3">
              <p className="text-lg font-medium text-gray-700"> {user.username}</p>
              <button onClick={() => onBlock(user.id)} disabled={user.isBlocked} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none transition duration-200">
                {user.isBlocked ? "Blocked" : "Block User"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export default UserList;
  