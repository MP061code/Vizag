"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function StatusPage() {
  const router = useRouter();
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    setComplaints([
      { id: 1, text: "Garbage near beach", status: "Pending", time: 20 },
      { id: 2, text: "Dustbin overflow", status: "Done", time: 0 },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-5">

      {/* Back */}
      <button
        onClick={() => router.push("/")}
        className="mb-4 text-blue-600 font-semibold"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold text-center mb-4">
        📊 Status
      </h1>

      <div className="space-y-4 max-w-md mx-auto">
        {complaints.map((c) => (
          <div key={c.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{c.text}</h3>
            <p>Status: {c.status}</p>
            {c.status === "Pending" && (
              <p>⏱️ {c.time} mins left</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}