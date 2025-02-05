export const saveUserToLocalStorage = (user) => {
  try {
    const savedUsers = JSON.parse(localStorage.getItem("savedUsers")) || [];
    const isUserSaved = savedUsers.some(
      (savedUser) => savedUser.email === user.email
    );

    if (!isUserSaved) {
      localStorage.setItem("savedUsers", JSON.stringify([...savedUsers, user]));
    } else {
      alert("User is already saved!");
    }
  } catch (error) {
    console.error("Error saving user to localStorage:", error);
  }
};

export const removeUserFromLocalStorage = (userId) => {
  try {
    const savedUsers = JSON.parse(localStorage.getItem("savedUsers")) || [];
    const updatedUsers = savedUsers.filter((user) => user.login.uuid !== userId);
    localStorage.setItem("savedUsers", JSON.stringify(updatedUsers));
  } catch (error) {
    console.error("Error removing user from localStorage:", error);
  }
};

export const getSavedUsersFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem("savedUsers")) || [];
  } catch (error) {
    console.error("Error getting saved users from localStorage:", error);
    return [];
  }
};