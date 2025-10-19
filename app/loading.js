"use client";
import { useState, useEffect } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome!
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Your content has loaded successfully
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(105.9deg, rgba(0,122,184,1) 24.4%, rgba(46,0,184,0.88) 80.5%)",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6">
        {/* Spinner */}
        <div className="relative">
          <div className="w-24 h-24 border-4 border-white/20 rounded-full"></div>
          <div className="absolute top-0 left-0 w-24 h-24 border-4 border-t-white border-r-white border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          <div className="absolute top-2 left-2 w-20 h-20 border-4 border-white/30 rounded-full animate-ping"></div>
        </div>

        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
            Loading
          </h1>
          <p className="text-white/80 text-sm md:text-base font-medium">
            Please wait while we prepare everything
          </p>
        </div>

        {/* Progress bar */}
        {/* <div className="w-full max-w-md">
          <div className="relative h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-white via-white/90 to-white rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <div className="mt-3 text-center">
            <span className="text-white/90 text-sm font-semibold tabular-nums">
              {Math.min(Math.round(progress), 100)}%
            </span>
          </div>
        </div> */}

        {/* Loading dots animation */}
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
}
