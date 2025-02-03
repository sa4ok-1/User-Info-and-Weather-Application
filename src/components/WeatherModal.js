import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const UpdateMap = ({ lat, lon }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lon], 10);
    setTimeout(() => {
      map.invalidateSize();
    }, 300);
  }, [lat, lon, map]);
  return null;
};

const WeatherModal = ({ weather, isOpen, onClose }) => {
  if (!isOpen || !weather) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-80 md:w-96 shadow-lg relative">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Weather Details</h2>

        {/* Weather icon */}
        <div className="flex flex-col items-center">
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
            alt="Weather Icon"
            className="w-16 h-16"
          />
          <p className="text-lg font-bold">{weather.condition}</p>
        </div>

        {/* Temperature */}
        <div className="mt-4">
          <p><strong>Temperature:</strong> {weather.current}°C</p>
          <p><strong>Min:</strong> {weather.min}°C</p>
          <p><strong>Max:</strong> {weather.max}°C</p>
        </div>

        {/* Map */}
        <div className="mt-4 w-full h-48 rounded-lg overflow-hidden">
          <MapContainer
            center={[weather.lat, weather.lon]}
            zoom={10}
            style={{ width: "100%", height: "100%" }}
            className="rounded-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            <Marker position={[weather.lat, weather.lon]} />
            <UpdateMap lat={weather.lat} lon={weather.lon} />
          </MapContainer>
        </div>

        {/* Close button */}
        <button
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WeatherModal;
