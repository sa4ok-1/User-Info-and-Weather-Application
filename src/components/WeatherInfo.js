import React from "react";
import { FaSun, FaSnowflake } from "react-icons/fa";

const WeatherInfo = ({ weather }) => {
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
    <div className="mt-4 bg-gray-100 p-4 rounded flex flex-col items-center">
      <p className="flex items-center">
        Temperature: {weather.temperature}°C{" "}
        <span className="ml-2">{renderWeatherIcon(weather.temperature)}</span>
      </p>
      <p>Wind Speed: {weather.windspeed} km/h</p>
    </div>
  );
};

export default WeatherInfo;