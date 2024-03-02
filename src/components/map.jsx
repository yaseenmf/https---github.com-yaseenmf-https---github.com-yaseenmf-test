import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useHotels } from "../contexts/hotelProvider";
import { useState } from "react";

export default function Map() {
  const [mapCenter, setMapCenter] = useState([50, -1]);
  const { isloading, hotels } = useHotels();
  return (
    <div className="mapContainer">
      <MapContainer
        className="map"
        center={mapCenter}
        zoom={20}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {hotels.Map((item) => (
          <Marker position={[item.latitude, item.longitude]} key={item.id}>
            <Popup>{item.host_location}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
