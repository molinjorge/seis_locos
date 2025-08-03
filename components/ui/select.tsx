// components/ui/select.tsx

import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string }[];
}

export const Select: React.FC<SelectProps> = ({ options, ...props }) => {
  return (
    <select
      {...props}
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px"
      }}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

// Simulación de componentes adicionales
export const SelectContent = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

export const SelectItem = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) => <option value={value}>{children}</option>;

