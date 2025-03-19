import React, { useState, useEffect } from 'react';
import './Typewriter.css';

const TypewriterEffect = () => {
  const words = ["UX DESIGNERS", "HACKERS", "DIRECTORS"];
  const [currentWord, setCurrentWord] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 1000; // Pause before changing words

  useEffect(() => {
    let timer;

    if (isDeleting) {
      // Deleting effect
      timer = setInterval(() => {
        setCurrentWord((prev) => prev.slice(0, prev.length - 1));
      }, deletingSpeed);
      
      // When the word is fully deleted, move to the next word
      if (currentWord === "") {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    } else {
      // Typing effect
      timer = setInterval(() => {
        setCurrentWord((prev) => {
          if (prev.length < words[index].length) {
            return prev + words[index][prev.length];
          } else {
            return prev;
          }
        });
      }, typingSpeed);
      
      // When the word is fully typed, wait and then start deleting
      if (currentWord === words[index]) {
        setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime); // Wait before starting the deletion
      }
    }

    return () => clearInterval(timer);
  }, [currentWord, index, isDeleting, words]);

  return (
    <div>

        <h1><span className="typewriter-word">{currentWord}&nbsp;</span></h1>    
    </div>
  );
};

export default TypewriterEffect;
