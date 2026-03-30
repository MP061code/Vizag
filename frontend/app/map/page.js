"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Load Map ONLY on client side
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

export default function MapPage() {
  return (
    <MapContainer
      center={[17.6868, 83.2185]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[17.6868, 83.2185]}>
        <Popup>Garbage Reported Here</Popup>
      </Marker>
    </MapContainer>
  );
}