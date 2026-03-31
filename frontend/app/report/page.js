"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function ReportPage() {
  const router = useRouter();

  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const fileRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = fileRef.current.files[0];

    if (!file || !description) {
      setMessage("⚠️ Fill all fields");
      return;
    }

    // Duplicate check
    const existing = JSON.parse(localStorage.getItem("reports")) || [];
    const duplicate = existing.find(r => r.description === description);

    if (duplicate) {
      setMessage("⚠️ Already reported!");
      return;
    }

    // Priority logic
    let priority = "Low";
    if (description.includes("hospital") || description.includes("school")) {
      priority = "High";
    }

    const newReport = {
      id: Date.now(),
      description,
      status: "Pending",
      priority,
      location: "Vizag",
      lat: 17.6868,
      lng: 83.2185,
    };

    localStorage.setItem("reports", JSON.stringify([...existing, newReport]));

    setMessage("✅ Report submitted! You helped clean 🌱");

    setTimeout(() => router.push("/dashboard"), 1000);
  };

  return (
    <div className="min-h-screen p-5">
      <button onClick={() => router.push("/dashboard")}>← Back</button>

      <div className="bg-white p-6 rounded-xl max-w-md mx-auto">
        <h1 className="text-xl font-bold mb-4">📸 Report Garbage</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="file" ref={fileRef} className="w-full border p-2" />

          <textarea
            placeholder="Describe issue"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2"
          />

          <button className="w-full bg-green-600 text-white p-2">
            Submit
          </button>
        </form>

        {message && <p className="mt-3">{message}</p>}
      </div>
    </div>
  );
}