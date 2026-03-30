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

    setMessage("✅ Complaint submitted!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-5">

      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="mb-4 text-blue-600 font-semibold"
      >
        ← Back
      </button>

      <div className="bg-white p-6 rounded-xl shadow max-w-md mx-auto">

        <h1 className="text-xl font-bold mb-4 text-gray-800 text-center">
          📸 Report Garbage
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input type="file" ref={fileRef} className="w-full border p-2 rounded" />

          <textarea
            placeholder="Describe issue"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 rounded"
          />

          {/* Location */}
          <input
            type="text"
            placeholder="Enter location manually"
            className="w-full border p-2 rounded"
          />

          <button className="w-full bg-green-600 text-white p-2 rounded">
            Submit
          </button>
        </form>

        {message && <p className="mt-3 text-center">{message}</p>}
      </div>
    </div>
  );
}