import React, { useEffect, useRef } from 'react';

const BgLogo = ({ className = '' }) => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
  
    // Simulate the initial mouse position as the center of the screen
    const simulatedMouseX = window.innerWidth / 2;
    const simulatedMouseY = window.innerHeight / 2;
  
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
  
    const dx = simulatedMouseX - centerX;
    const dy = simulatedMouseY - centerY;
  
    const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const scale = 1 + Math.min(distance / 1000, 0.3);
  
    element.style.transform = `scale(${scale}) rotate(${angle}deg)`;
  
    const update = (e) => {
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
  
      const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const scale = 1 + Math.min(distance / 1000, 0.3);
  
      element.style.transform = `scale(${scale}) rotate(${angle}deg)`;
    };
  
    window.addEventListener('mousemove', update);
    return () => window.removeEventListener('mousemove', update);
  }, []);
  

  return (
    <div
      ref={ref}
      className={`logo ${className}`} // ✅ Apply passed-in className
    />
  );
};

export default BgLogo;
