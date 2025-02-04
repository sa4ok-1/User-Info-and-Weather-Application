import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { fetchUsers } from "../services/api";

const Home = () => {
  const [users, setUsers] = useState([]);

  const loadMoreUsers = async () => {
    const newUsers = await fetchUsers();
    setUsers((prevUsers) => [...prevUsers, ...newUsers]);
  };

  useEffect(() => {
    loadMoreUsers();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 p-4 flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
      <div className="flex justify-center mt-6 w-full">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={loadMoreUsers}
        >
          Load More Users
        </button>
      </div>
    </div>
  );
};

export default Home;
