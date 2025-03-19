import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./EyeFollower.css"; // Import the CSS file

const EyeFollower = () => {
  const eyeRef = useRef(null);
  const pupilRef = useRef(null);
  const eyelidRef = useRef(null);

  useEffect(() => {
    const movePupil = (e) => {
      if (!eyeRef.current || !pupilRef.current) return;

      const eye = eyeRef.current.getBoundingClientRect();
      const pupil = pupilRef.current;

      // Get center of the eye
      const eyeCenterX = eye.left + eye.width / 2;
      const eyeCenterY = eye.top + eye.height / 2;

      // Calculate the angle and distance
      const deltaX = e.clientX - eyeCenterX;
      const deltaY = e.clientY - eyeCenterY;

      // Limit the movement radius
      const maxMove = (eye.width / 2) - 15; // Ensure pupil stays inside

      // Calculate constrained position
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const angle = Math.atan2(deltaY, deltaX);

      const moveX = Math.min(distance, maxMove) * Math.cos(angle);
      const moveY = Math.min(distance, maxMove) * Math.sin(angle);

      // Animate pupil movement
      gsap.to(pupil, { x: moveX, y: moveY, duration: 0.2, ease: "power2.out" });
    };

    const blink = () => {
      if (!eyelidRef.current) return;
      gsap.to(eyelidRef.current, {
        height: "100%", 
        duration: 0.4, 
        yoyo: true, 
        repeat: 1, 
        ease: "power2.inOut"
      });
    };

    window.addEventListener("mousemove", movePupil);
    const blinkInterval = setInterval(blink, 3000); // Blink every 3s

    return () => {
      window.removeEventListener("mousemove", movePupil);
      clearInterval(blinkInterval);
    };
  }, []);

  return (
      <div ref={eyeRef} className="eye">
        <div ref={eyelidRef} className="eyelid"></div>
        <div ref={pupilRef} className="pupil"></div>
      </div>
  );
};

export default EyeFollower;
