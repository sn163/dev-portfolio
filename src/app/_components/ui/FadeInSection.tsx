import { useState, useEffect, useRef, PropsWithChildren } from "react";

interface Props {
  classProps?: string;
}
export const FadeInSection: React.FC<PropsWithChildren<Props>> = ({ children, classProps }) => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    const dom = domRef.current as Element;
    observer.observe(dom);
    return () => observer.unobserve(dom);
  }, []);
  return (
    <div className={`fade-in-section ${isVisible ? "is-visible" : ""} ${classProps}`} ref={domRef}>
      {children}
    </div>
  );
};
