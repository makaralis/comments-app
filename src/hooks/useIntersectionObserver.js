import { useState, useRef, useEffect } from "react";

export const useIntersectionObserver = (
  ref,
  options,
  forward,
) => {
  const [element, setElement] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef(null);

  const cleanOb = () => {
    if (observer.current) {
      observer.current.disconnect();
    }
  };

  useEffect(() => {
    setElement(ref.current);
  }, [ref]);

  useEffect(() => {
    if (!element) return;

    cleanOb();

    const ob = (observer.current = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;

        if (!forward) {
          setIsIntersecting(isElementIntersecting);
        } else if (forward && !isIntersecting && isElementIntersecting) {
          setIsIntersecting(isElementIntersecting);
          cleanOb();
        }
      },
      { ...options }
    ));

    ob.observe(element);
    
    return () => {
      cleanOb();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element, options]);

  return isIntersecting;
}