import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ user }) => {
  if (!user?.location?.coordinates) {
    return <div>Loading map...</div>;
  }

  const { latitude, longitude } = user.location.coordinates;
  const userIcon = new Icon({
    iconUrl: user.picture.large,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  return (
    <div style={{ height: "300px", marginTop: "20px" }}>
      <MapContainer
        center={[latitude, longitude]}
        zoom={5}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <Marker position={[latitude, longitude]} icon={userIcon}>
          <Popup>
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
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
