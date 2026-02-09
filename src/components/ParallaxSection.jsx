import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxSection = ({ children, className, zIndex = 0 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div
      ref={ref}
      className={`relative flex items-center justify-center h-screen overflow-hidden ${className}`}
      style={{ zIndex }}
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;
