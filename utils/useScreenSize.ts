
import { useState, useEffect } from 'react';

export const useScreenSize = (screenSize: number) => {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLarge(window.innerWidth >= screenSize); // lg breakpoint is 1024px
    };

    // Check on mount
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [screenSize]);

  return isLarge;
};