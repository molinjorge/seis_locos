import React from "react";

export const Card = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    {...props}
    style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      backgroundColor: "#fff",
      marginBottom: "16px"
    }}
  >
    {children}
  </div>
);

export const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div style={{ marginBottom: "12px", borderBottom: "1px solid #eee", paddingBottom: "8px" }}>
    {children}
  </div>
);

export const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ margin: 0, fontSize: "1.2rem" }}>{children}</h2>
);

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);