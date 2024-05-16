import { useEffect } from 'react';

export default function useZoomScale() {

  useEffect(() => {
    const updateScale = () => {
      const zoomLevel = window.devicePixelRatio;
      document.documentElement.style.setProperty('--scale', 1 / zoomLevel);
    };

    window.addEventListener('resize', updateScale);
    updateScale();

    return () => window.removeEventListener('resize', updateScale);
  }, []);
}
