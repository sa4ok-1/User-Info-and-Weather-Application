import React, { useEffect, useState } from "react";
import { FaSun, FaSnowflake } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import Map from "./Map";
import { fetchWeather } from "../services/api";
import { saveUserToLocalStorage } from "../services/localStorage";

const UserCard = ({ user, onRemove, saved = false }) => {
  const [weather, setWeather] = useState(null);
  const [showWeather, setShowWeather] = useState(false);

  useEffect(() => {
    const { latitude, longitude } = user.location.coordinates;
    fetchWeather(latitude, longitude).then(setWeather);

    const interval = setInterval(() => {
      fetchWeather(latitude, longitude).then(setWeather);
    }, 300000);

    return () => clearInterval(interval);
  }, [user.location.coordinates]);

  const saveUser = () => {
    saveUserToLocalStorage(user);
  };

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
        <div className="mt-4 bg-gray-100 p-4 rounded flex flex-col items-center">
          <p className="flex items-center">
            Temperature: {weather.temperature}°C{" "}
            <span className="ml-2">
              {renderWeatherIcon(weather.temperature)}
            </span>
          </p>

          <p>Wind Speed: {weather.windspeed} km/h</p>
        </div>
      )}

      {saved && (
        <button
          onClick={onRemove}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full w-full hover:bg-red-600"
        >
          Remove
        </button>
      )}
      <Map user={user} />
    </div>
  );
};

export default UserCard;
