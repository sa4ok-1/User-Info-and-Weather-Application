import axios from "axios";

export const fetchUsers = async () => {
  const response = await axios.get("https://randomuser.me/api/?results=6");
  return response.data.results;
};

export const fetchWeather = async (latitude, longitude) => {
  const response = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  return response.data.current_weather;
};
