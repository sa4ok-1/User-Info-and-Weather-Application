export const saveUserToLocalStorage = (user) => {
  const savedUsers = JSON.parse(localStorage.getItem("savedUsers")) || [];
  const isUserSaved = savedUsers.some(
    (savedUser) => savedUser.email === user.email
  );

  if (!isUserSaved) {
    localStorage.setItem("savedUsers", JSON.stringify([...savedUsers, user]));
  } else {
    alert("User is already saved!");
  }
};

export const removeUserFromLocalStorage = (userId) => {
  const savedUsers = JSON.parse(localStorage.getItem("savedUsers")) || [];
  const updatedUsers = savedUsers.filter((user) => user.login.uuid !== userId);
  localStorage.setItem("savedUsers", JSON.stringify(updatedUsers));
};

export const getSavedUsersFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("savedUsers")) || [];
};
