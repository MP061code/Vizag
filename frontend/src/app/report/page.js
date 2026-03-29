"use client";
import { useState, useRef } from "react";

export default function ReportPage() {
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fileRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const file = fileRef.current.files[0];

    if (!file || !description) {
      setMessage("⚠️ Please upload image and enter description");
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Image:", file);
      console.log("Description:", description);

      setMessage("✅ Complaint submitted successfully!");
      setDescription("");
      fileRef.current.value = "";
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          Report Garbage ♻️
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Image Upload */}
          <input
            type="file"
            ref={fileRef}
            className="w-full border p-2 rounded"
          />

          {/* Description */}
          <textarea
            placeholder="Describe the issue..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 rounded"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            {loading ? "Submitting..." : "Submit Complaint"}
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className="mt-4 text-center text-sm">{message}</p>
        )}
      </div>
    </div>
  );
}