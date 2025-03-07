import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-all duration-300 active:scale-95 ${className}`}
      {...props}>
      {children}
    </button>
  );
}