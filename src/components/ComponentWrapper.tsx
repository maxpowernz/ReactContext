import React from "react";

export function ComponentWrapper({ children }: React.PropsWithChildren) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px", backgroundColor: "lightgray" }}>
      {children}
    </div>
  );
}
