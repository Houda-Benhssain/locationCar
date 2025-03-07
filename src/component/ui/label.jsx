import React from "react";

export function Label({ htmlFor, children, className = "" }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium text-slate-700 dark:text-slate-300 ${className}`}
    >
      {children}
    </label>
  );
}
