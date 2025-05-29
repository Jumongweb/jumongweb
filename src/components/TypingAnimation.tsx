
import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typeText = () => {
      if (isTyping && currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isTyping && currentIndex === text.length) {
        // Wait for 4 seconds before starting to delete
        setTimeout(() => {
          setIsTyping(false);
        }, 4000);
      } else if (!isTyping && currentIndex > 0) {
        setDisplayText(text.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!isTyping && currentIndex === 0) {
        // Start typing again
        setIsTyping(true);
      }
    };

    const timeout = setTimeout(typeText, isTyping ? 100 : 50);
    return () => clearTimeout(timeout);
  }, [currentIndex, isTyping, text]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingAnimation;
