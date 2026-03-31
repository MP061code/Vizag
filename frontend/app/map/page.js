"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(m => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(m => m.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(m => m.Popup), { ssr: false });

export default function MapPage() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("reports")) || [];
    setReports(data);
  }, []);

  return (
    <MapContainer center={[17.6868, 83.2185]} zoom={13} style={{ height: "100vh" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {reports.map(r => (
        <Marker key={r.id} position={[r.lat, r.lng]}>
          <Popup>
            {r.description} <br />
            Status: {r.status}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}