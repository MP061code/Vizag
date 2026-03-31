"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function StatusPage() {
  const [reports, setReports] = useState([]);
  const router = useRouter();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("reports")) || [];

    data = data.map(r => {
      if (r.status === "Pending") r.status = "In Progress";
      else if (r.status === "In Progress") r.status = "Done";
      return r;
    });

    localStorage.setItem("reports", JSON.stringify(data));
    setReports(data);
  }, []);

  return (
    <div className="min-h-screen p-5 bg-gray-100">

      <button
        onClick={() => router.push("/dashboard")}
        className="mb-4 text-blue-600 font-semibold"
      >
        ← Back to Dashboard
      </button>

      <h1 className="text-xl font-bold mb-4">📊 Status</h1>

      {reports.map(r => (
        <div key={r.id} className="bg-white p-4 mb-3 rounded shadow">
          <p className="font-semibold">{r.description}</p>
          <p>Status: {r.status}</p>
          <p>Priority: {r.priority}</p>
        </div>
      ))}
    </div>
  );
}