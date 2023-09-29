import React from "react";
import "../tailwind.css";

function Success() {
  return (
    <div class="flex items-center justify-center" style={{ marginBottom: 25 }}>
      <div
        className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Success!</strong>
        <span className="block sm:inline"> Your message has been sent.</span>
      </div>
    </div>
  );
}

export default Success;
