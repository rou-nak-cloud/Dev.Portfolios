import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

//  SVG LINE COMPONENT
export default function AnimatedLine() {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  const initialPath = "M 10 100 Q 500 100 1190 100";

  useGSAP(() => {
    const svg = svgRef.current;

    // Mouse interaction
    const handleMove = (e) => {
      const rect = svg.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newPath = `M 10 100 Q ${x} ${y} 1190 100`;

      gsap.to(pathRef.current, {
        attr: { d: newPath },
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(pathRef.current, {
        attr: { d: initialPath },
        duration: 1.3,
        ease: "elastic.out(1, 0.4)",
      });
    };

    svg.addEventListener("mousemove", handleMove);
    svg.addEventListener("mouseleave", handleLeave);

    return () => {
      svg.removeEventListener("mousemove", handleMove);
      svg.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1200 200"
      className="w-full h-22"
      preserveAspectRatio="none"
    >
      <path
        ref={pathRef}
        d={initialPath}
        stroke="#463947"
        strokeWidth="1"
        fill="transparent"
        opacity="0.7"
      />
    </svg>
  );
}
