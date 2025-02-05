import React from 'react';

const UserActions = ({ onSave, onRemove, saved }) => (
  <div className="mt-4 flex justify-between">
    {!saved && (
      <button
        onClick={onSave}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    )}
    {saved && (
        <button
          onClick={onRemove}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full w-full hover:bg-red-600"
        >
          Remove
        </button>
      )}
  </div>
);

export default UserActions;