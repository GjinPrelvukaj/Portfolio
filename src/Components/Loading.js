import box from "./box.svg";
import React from "react";

function LoadingScreen() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        transition: "opacity 1s ease-in-out", // add a transition
        opacity: 1, // set the initial opacity to 1
      }}
    >
      <img
        src={box}
        alt=""
        style={{
          backgroundColor: "#FFF",
          width: "50%",
          height: "50%",
          overflow: "hidden",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}

export default LoadingScreen;
