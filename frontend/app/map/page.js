"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapPage() {
  return (
    <MapContainer center={[17.6868, 83.2185]} zoom={13} style={{ height: "100vh" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[17.6868, 83.2185]}>
        <Popup>Garbage Reported Here</Popup>
      </Marker>
    </MapContainer>
  );
}