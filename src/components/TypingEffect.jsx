import React, { useState, useEffect } from "react";

const TypingEffect = ({ words }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const typingSpeed = 150; // Speed in milliseconds
  const erasingSpeed = 75; // Speed in milliseconds
  const cursorBlinkSpeed = 500; // Cursor blink speed in milliseconds

  useEffect(() => {
    // Check if the words prop is defined and is an array
    if (!Array.isArray(words) || words.length === 0) {
      console.error("The 'words' prop must be a non-empty array.");
      return;
    }

    let timer;

    if (isTyping) {
      if (displayedText.length < words[wordIndex].length) {
        // Typing effect
        timer = setTimeout(() => {
          setDisplayedText(words[wordIndex].slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // Switch to erasing
        setIsTyping(false);
      }
    } else {
      if (displayedText.length > 0) {
        // Erasing effect
        timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, displayedText.length - 1));
        }, erasingSpeed);
      } else {
        // Move to the next word
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timer); // Cleanup on unmount or re-render
  }, [displayedText, isTyping, wordIndex, words]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(cursorTimer); // Cleanup on unmount
  }, []);

  return (
    <div>
      <h1 className="typingEffectFS">
        <span style={{ color: "black" }}>Learn All The Concepts Of </span>
        <span style={{ color: "red" }}>
          {displayedText}
          {showCursor ? "|" : " "}
        </span>
      </h1>
    </div>
  );
};

export default TypingEffect;
