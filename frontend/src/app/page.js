"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 p-5">

      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          ♻️ CleanVizag
        </h1>

        <p className="text-gray-600 mb-6">
          Smart Waste Management System
        </p>

        <div className="space-y-4">

          <button
            onClick={() => router.push("/report")}
            className="w-full bg-green-600 text-white p-3 rounded-xl"
          >
            📸 Report Garbage
          </button>

          <button
            onClick={() => router.push("/status")}
            className="w-full bg-blue-600 text-white p-3 rounded-xl"
          >
            📊 View Status
          </button>

        </div>
      </div>

      <p className="mt-6 text-white">Making Vizag Cleaner </p>
    </div>
  );
}