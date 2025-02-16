"use client";

import { useState, useEffect } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 10));
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-full mx-auto mt-10">
      <div className="relative h-4 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-center mt-2 text-sm font-medium">{progress}%</p>
    </div>
  );
}
