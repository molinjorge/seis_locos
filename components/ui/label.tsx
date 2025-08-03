import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return (
    <label
      {...props}
      style={{
        display: "block",
        marginBottom: "4px",
        fontWeight: 600
      }}
    >
      {children}
    </label>
  );
};