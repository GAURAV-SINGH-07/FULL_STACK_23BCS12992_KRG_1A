import React from "react";
import Welcome from "./components/Welcome";

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "system-ui, sans-serif" }}>
      <Welcome name="Gaurav" />
    </div>
  );
}
