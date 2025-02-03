import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";

const SavedUsers = () => {
  const [savedUsers, setSavedUsers] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("savedUsers")) || [];
    setSavedUsers(users);
  }, []);

  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Saved Users</h2>
      {savedUsers.length === 0 ? (
        <p className="text-center text-lg text-gray-500">You have no saved users. Start saving some!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedUsers.map((user) => (
            <UserCard key={user.login.uuid} user={user} saved={true} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedUsers;
