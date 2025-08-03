import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "100%"
      }}
    />
  );
};