import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-slate-900 overflow-hidden relative">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-white text-4xl font-bold z-10 text-center"
      >
        A Dark Night... <br />
        <span className="text-blue-200 text-2xl font-light italic">
          Needs a soft touch.
        </span>
      </motion.h1>

      {/* This will be Batman's silhouette later */}
      <div className="absolute bottom-0 w-full h-1/2 bg-black opacity-50 blur-2xl" />
    </div>
  );
}
  