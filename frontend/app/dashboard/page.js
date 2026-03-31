"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("reports")) || [];
    setReports(data);
  }, []);

  const total = reports.length;
  const pending = reports.filter(r => r.status === "Pending").length;
  const completed = reports.filter(r => r.status === "Done").length;
  const ecoScore = total * 10;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200 p-5 text-gray-900">

      {/* LOGO */}
      <div className="flex flex-col items-center mb-6">
        <div className="bg-white p-3 rounded-full shadow mb-2">
          <Image src="/logo.png" alt="logo" width={70} height={70} />
        </div>

        <h1 className="text-2xl font-bold">♻️ SwachhBodh</h1>
        <p className="text-gray-700 text-sm">
          स्वच्छबोध - Smart Waste Management
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <p className="text-gray-800">Total Reports</p>
          <h2 className="text-xl font-bold">{total}</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow text-center">
          <p className="text-gray-800">Pending</p>
          <h2 className="text-xl font-bold text-yellow-600">{pending}</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow text-center">
          <p className="text-gray-800">Completed</p>
          <h2 className="text-xl font-bold text-green-600">{completed}</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow text-center">
          <p className="text-gray-800">Eco Score</p>
          <h2 className="text-xl font-bold text-blue-600">{ecoScore}</h2>
        </div>
      </div>

      {/* FEATURES */}
      <h2 className="text-lg font-semibold mb-3"> Features</h2>

      <div className="grid gap-4">
        <div onClick={() => router.push("/report")} className="bg-green-600 text-white p-4 rounded-xl shadow cursor-pointer">
          📸 Report Garbage
        </div>

        <div onClick={() => router.push("/status")} className="bg-blue-600 text-white p-4 rounded-xl shadow cursor-pointer">
          📊 View Status
        </div>

        <div onClick={() => router.push("/map")} className="bg-purple-600 text-white p-4 rounded-xl shadow cursor-pointer">
          🗺️ View Map
        </div>
      </div>
    </div>
  );
}