import React from "react";

export default function Welcome({ name }) {
  return <h2>Welcome, {name ? name : "Guest"}!</h2>;
}
