import React from 'react';

const UserInfo = ({ user }) => (
  <div>
    <img
      src={user.picture.large}
      alt={user.name.first}
      className="rounded-full w-24 mx-auto"
    />
    <h3 className="text-xl font-bold text-center">
      {user.name.first} {user.name.last}
    </h3>
    <p className="text-center text-gray-500">{user.email}</p>
    <p className="text-center">
      {user.location.city}, {user.location.country}
    </p>
  </div>
);

export default UserInfo;