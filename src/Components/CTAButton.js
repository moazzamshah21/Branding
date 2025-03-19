import React, { useState } from "react";

const CTAButton = ({ text, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={styles.wrapper}>
      <button
        style={{
          ...styles.button,
          transform: isHovered ? "translate(4px, 4px)" : "translate(0, 0)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>{text}</span>
        {children} {/* Render the children here */}
      </button>
      <span
        style={{
          ...styles.shadow,
          top: isHovered ? "4px" : "4px",
          left: isHovered ? "4px" : "4px",
        }}
      ></span>
    </div>
  );
};

const styles = {
  wrapper: {
    position: "relative",
    display: "inline-block",
  },
  button: {
    position: "relative",
    backgroundColor: "white",
    color: "black",
    fontWeight: "900",
    fontSize: "14px",
    letterSpacing: "-1px", // 👈 Add letter spacing here
    textTransform: "uppercase",
    border: "2px solid black",
    borderRadius: "40px",
    padding: "16px 24px",
    cursor: "pointer",
    outline: "none",
    transition: "transform 0.2s ease-in-out",
    zIndex: "1",
  },
  shadow: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    borderRadius: "40px",
    zIndex: "0",
    transition: "all 0.2s ease-in-out",
  },
};

export default CTAButton;
