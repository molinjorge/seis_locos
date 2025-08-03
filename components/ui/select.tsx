import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select: React.FC<SelectProps> = ({ children, ...props }) => {
  return (
    <select
      {...props}
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "100%"
      }}
    >
      {children}
    </select>
  );
};