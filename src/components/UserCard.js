/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSun, FaSnowflake } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import Map from "./Map";

const UserCard = ({ user, saved = false }) => {
  const [weather, setWeather] = useState(null);
  const [showWeather, setShowWeather] = useState(false);

  const fetchWeather = async () => {
    const { latitude, longitude } = user.location.coordinates;
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    setWeather(response.data.current_weather);
  };

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 300000);
    return () => clearInterval(interval);
  }, []);

  const saveUser = () => {
    const savedUsers = JSON.parse(localStorage.getItem("savedUsers")) || [];
    localStorage.setItem("savedUsers", JSON.stringify([...savedUsers, user]));
  };

  const { latitude, longitude } = user.location.coordinates;
  console.log("Latitude:", latitude, "Longitude:", longitude);

  const renderWeatherIcon = (temperature) => {
    const iconSize = 25;

    if (temperature > 0) {
      return <FaSun size={iconSize} color="yellow" />;
    } else if (temperature < 0) {
      return <FaSnowflake size={iconSize} color="lightblue" />;
    }
    return null;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
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
      {weather && (
        <div className="text-center flex items-center justify-center">
          {renderWeatherIcon(weather.temperature)}
          <p className="ml-2">{weather.temperature}°C</p>
        </div>
      )}
      <div className="mt-4 flex justify-between">
        {!saved && (
          <button
            onClick={saveUser}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        )}
        <button
          onClick={() => setShowWeather(!showWeather)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Weather
        </button>
      </div>
      {showWeather && weather && (
        <div className="mt-4 bg-gray-100 p-4 rounded">
          <p>Temperature: {weather.temperature}°C</p>
          <p>Wind Speed: {weather.windspeed} km/h</p>
        </div>
      )}
      <Map latitude={latitude} longitude={longitude} user={user} />
    </div>
  );
};

export default UserCard;
