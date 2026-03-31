"use client";
import { useEffect, useState } from "react";

export default function StatusPage() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("reports")) || [];

    // Auto update status
    data = data.map(r => {
      if (r.status === "Pending") r.status = "In Progress";
      else if (r.status === "In Progress") r.status = "Done";
      return r;
    });

    localStorage.setItem("reports", JSON.stringify(data));
    setReports(data);
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">📊 Status</h1>

      {reports.map(r => (
        <div key={r.id} className="border p-3 mb-3 rounded">
          <p><b>{r.description}</b></p>
          <p>Status: {r.status}</p>
          <p>Priority: {r.priority}</p>
        </div>
      ))}
    </div>
  );
}