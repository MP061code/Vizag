"use client";
import { useState, useEffect } from "react";

export default function StatusPage() {
  const [complaints, setComplaints] = useState([]);
  const [score, setScore] = useState(0);

  // Dummy data (later backend will replace)
  useEffect(() => {
    const data = [
      {
        id: 1,
        description: "Garbage near beach",
        status: "Pending",
        timeLeft: 20,
        votes: 0,
      },
      {
        id: 2,
        description: "Overflowing dustbin",
        status: "Completed",
        timeLeft: 0,
        votes: 2,
      },
    ];

    setComplaints(data);
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setComplaints((prev) =>
        prev.map((c) => ({
          ...c,
          timeLeft: c.timeLeft > 0 ? c.timeLeft - 1 : 0,
        }))
      );
    }, 60000); // 1 min

    return () => clearInterval(timer);
  }, []);

  // Vote handler
  const handleVote = (id, value) => {
    setComplaints((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, votes: c.votes + value } : c
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold text-center mb-5">
        Complaint Status 📊
      </h1>

      {/* Citizen Score */}
      <div className="text-center mb-4">
        <h2 className="text-lg">Your Score: {score} 🏆</h2>
      </div>

      {/* Complaint List */}
      <div className="space-y-4 max-w-xl mx-auto">
        {complaints.map((c) => (
          <div
            key={c.id}
            className="bg-white p-4 rounded shadow"
          >
            <h3 className="font-bold">{c.description}</h3>

            <p>
              Status:{" "}
              <span
                className={
                  c.status === "Pending"
                    ? "text-red-500"
                    : "text-green-600"
                }
              >
                {c.status}
              </span>
            </p>

            {/* Timer */}
            {c.status === "Pending" && (
              <p>⏱️ Time left: {c.timeLeft} mins</p>
            )}

            {/* Community Voting */}
            <div className="mt-2">
              <button
                onClick={() => handleVote(c.id, 1)}
                className="bg-green-500 text-white px-2 py-1 mr-2 rounded"
              >
                👍 Cleaned
              </button>

              <button
                onClick={() => handleVote(c.id, -1)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                👎 Not Cleaned
              </button>

              <p className="text-sm mt-1">
                Votes: {c.votes}
              </p>
            </div>

            {/* Proof Section (UI only) */}
            {c.status === "Completed" && (
              <p className="text-sm mt-2">
                📸 Proof uploaded
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}