/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";

const Map = ({ user }) => {
  const [coordinates, setCoordinates] = useState(null);

  const fetchCoordinates = async () => {
    const { latitude, longitude } = user.location.coordinates;

    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );

    if (response.data && response.data.current_weather) {
      setCoordinates({
        lat: latitude,
        lng: longitude,
      });
    }
  };

  useEffect(() => {
    if (user.location.coordinates) {
      fetchCoordinates();
    }
  }, []);

  if (!coordinates) {
    return <div>Loading map...</div>;
  }

  const { lat, lng } = coordinates;

  const userIcon = new Icon({
    iconUrl: user.picture.large, 
    iconSize: [40, 40],
    iconAnchor: [20, 40], 
  });

  return (
    <div style={{ height: "300px", marginTop: "20px" }}>
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <Marker position={[lat, lng]} icon={userIcon}>
          <Popup>
            <div>
              <h3>
                {user.name.first} {user.name.last}
              </h3>
              <p>
                {user.location.city}, {user.location.country}
              </p>
              <img
                src={user.picture.large}
                alt={user.name.first}
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
