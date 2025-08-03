import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "error";
}

export const Badge: React.FC<BadgeProps> = ({ variant = "default", children, ...props }) => {
  const backgroundColor = {
    default: "#eee",
    success: "#d4edda",
    warning: "#fff3cd",
    error: "#f8d7da"
  }[variant];

  const color = {
    default: "#333",
    success: "#155724",
    warning: "#856404",
    error: "#721c24"
  }[variant];

  return (
    <span
      {...props}
      style={{
        display: "inline-block",
        padding: "4px 8px",
        fontSize: "12px",
        borderRadius: "4px",
        backgroundColor,
        color,
        fontWeight: 500
      }}
    >
      {children}
    </span>
  );
};