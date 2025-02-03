import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";

const Home = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=6");
    setUsers(response.data.results);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 p-4">

      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={fetchUsers}
      >
        Load More Users
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Home;
