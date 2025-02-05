import axios from "axios";

export const fetchUsers = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=6");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const fetchWeather = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    return response.data.current_weather;
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
};