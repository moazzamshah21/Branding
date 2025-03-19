import React, { useState } from "react";

const JatButton = ({ text }) => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={styles.wrapper}>
        <div style={styles.shimmercon}>
            <div
                className="shimmer small-shimmer"
                style={{
                transform: "translate3d(-0.5591rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(-30deg, 0deg)",
                transformStyle: "preserve-3d",
                willChange: "transform",
                }}
            ></div>
            <img
                src="https://cdn.prod.website-files.com/6513c48ced436181a3a12349/6513cf1b722bbead5d618519_Frame%2057.svg"
                loading="lazy"
                alt=""
                className="new-image"
        />
            </div>
      <button
        style={{
          ...styles.button,
          color: isHovered ? "#692df7" : "black",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
      </button>

    </div>
  );
};

const styles = {
  wrapper: {
    display: "inline-block",
    position: "relative",
    padding: "10px 10px",
  },
  button: {
    position: "relative",
    backgroundColor: "transparent", // Background stays transparent
    fontWeight: "900",
    fontSize: "14px",
    textTransform: "uppercase",
    letterSpacing: "-1.5px",
    border: "0px solid black",
    borderRadius: "40px",
    padding: "0px",
    cursor: "pointer",
    outline: "none",
    transition: "color 0.3s ease-in-out",
  },
  shimmercon: {
    position: "absolute",
    right: 5,
    top: "-2px",
    zIndex: 10,
  }
};

export default JatButton;
