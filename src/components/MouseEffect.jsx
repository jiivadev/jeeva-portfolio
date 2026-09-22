import { useEffect, useRef } from 'react';

function MouseEffect() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const glow = glowRef.current;

      if (!glow) return;

      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className='mouse-glow' />

      <div className='mouse-dot' />
    </>
  );
}

export default MouseEffect;
