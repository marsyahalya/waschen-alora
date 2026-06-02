"use client";

import { useEffect, useRef, useState } from 'react';

const NUM_DOTS = 6;
const LERP_FACTOR = 0.28; // Speed of tracking

export const CustomCursor = () => {
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const mouseCoords = useRef({ x: 0, y: 0 });
  const dotCoords = useRef(Array.from({ length: NUM_DOTS }, () => ({ x: 0, y: 0 })));
  
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isOverInput, setIsOverInput] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable custom cursor on mobile/touch screens
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isVisible]);

  // RequestAnimationFrame loop for fluid, high-performance tracking
  useEffect(() => {
    if (isTouchDevice || !isVisible) return;

    let animationFrameId: number;

    const updateCoords = () => {
      const target = mouseCoords.current;
      const coords = dotCoords.current;

      // The head dot follows the mouse coordinate directly
      coords[0].x += (target.x - coords[0].x) * LERP_FACTOR;
      coords[0].y += (target.y - coords[0].y) * LERP_FACTOR;

      // Subsequent dots smoothly interpolate towards the position of the dot in front
      for (let i = 1; i < NUM_DOTS; i++) {
        const factor = LERP_FACTOR - (i * 0.025); // Gradually slower response for trailing lag
        coords[i].x += (coords[i - 1].x - coords[i].x) * factor;
        coords[i].y += (coords[i - 1].y - coords[i].y) * factor;
      }

      // Render positions using transform matrices to avoid reflows
      dotsRef.current.forEach((el, idx) => {
        if (el) {
          const x = coords[idx].x;
          const y = coords[idx].y;
          
          let scale = 1;
          if (isHovered) {
            // Keep scaling extremely subtle and sharp (no large swelling or vector blurs)
            scale = idx === 0 ? 1.3 : (1 - idx * 0.12);
          } else {
            scale = 1 - idx * 0.12; // Natural tapered pointer shape
          }

          if (isClicked) {
            scale *= 0.75; // Subtle tactile compression on click
          }

          if (scale < 0) scale = 0;

          el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
          el.style.opacity = isOverInput ? '0' : String(0.95 - idx * 0.12);
        }
      });

      animationFrameId = requestAnimationFrame(updateCoords);
    };

    updateCoords();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isTouchDevice, isVisible, isHovered, isClicked, isOverInput]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // 1. Detect if cursor is over a dark section
      const isOverDark = !!(
        target.closest('.dark') ||
        target.closest('.bg-primary') ||
        target.closest('.bg-\\[\\#49122E\\]') ||
        target.closest('footer') ||
        target.closest('.bg-black') ||
        target.closest('.bg-gray-900') ||
        target.closest('.from-\\[\\#49122E\\]')
      );
      setIsDarkBg(isOverDark);

      // 2. Detect text inputs/textareas to show browser default caret
      const isInput = 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.closest('input') || 
        target.closest('textarea') ||
        target.isContentEditable;

      if (isInput) {
        setIsOverInput(true);
        setIsHovered(false);
        return;
      }
      setIsOverInput(false);

      // 3. Detect interactive targets to trigger subtle expand animation
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.interactive-hover') ||
        target.closest('.swiper-button-next') ||
        target.closest('.swiper-button-prev') ||
        target.getAttribute('role') === 'button';

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    // Toggle active class to hide native cursor
    if (isVisible && !isTouchDevice && !isOverInput) {
      document.body.classList.add('custom-cursor-active');
    } else {
      document.body.classList.remove('custom-cursor-active');
    }
    return () => {
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isVisible, isTouchDevice, isOverInput]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {Array.from({ length: NUM_DOTS }).map((_, idx) => (
        <div
          key={idx}
          ref={(el) => {
            if (el) dotsRef.current[idx] = el;
          }}
          className={`fixed top-0 left-0 rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 will-change-transform ${
            isDarkBg ? 'bg-white' : 'bg-primary'
          }`}
          style={{
            // Base head dot size is 10px, trailing dots taper down naturally
            width: `${10 - idx * 1.3}px`,
            height: `${10 - idx * 1.3}px`,
            transition: 'opacity 0.2s ease-out, background-color 0.3s ease-out',
          }}
        />
      ))}
    </>
  );
};
