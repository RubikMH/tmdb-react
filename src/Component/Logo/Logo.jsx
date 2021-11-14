import React from "react";
import "./logo.css";
export default function Logo({ src }) {
  return (
    <div className="Logo">
      <img src={src} alt="LOGO" />
    </div>
  );
}
