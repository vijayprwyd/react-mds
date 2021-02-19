import React, { useEffect, useState } from 'react';

export function Hidden() {
  const [windowWidth, setWindowWidth] = useState(window.outerWidth);
  function handleWindowResize() {
    setWindowWidth(window.outerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return <>{windowWidth > 1200 && <p>Hi</p>}</>;
}
