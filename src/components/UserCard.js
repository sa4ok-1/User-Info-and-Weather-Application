import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import Map from "./Map";
import { fetchWeather } from "../services/api";
import { saveUserToLocalStorage } from "../services/localStorage";
import WeatherInfo from "./WeatherInfo";
import UserActions from './UserActions';
import UserInfo from './UserInfo';

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

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <UserInfo user={user} />

      <div className="mt-4 flex justify-center"> {/* Center the Weather button */}
        <button
          onClick={() => setShowWeather(!showWeather)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Weather
        </button>
      </div>

      {showWeather && weather && <WeatherInfo weather={weather} />}

      <UserActions onSave={saveUser} onRemove={onRemove} saved={saved} />

      <Map user={user} />
    </div>
  );
};

export default UserCard;