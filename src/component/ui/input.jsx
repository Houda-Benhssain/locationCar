import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-all duration-300 ${className}`}
      {...props}
    />
  );
}
