import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ParallaxSection from "./ParallaxSection";
import Carousel from "./Carousel";
import Confetti from "react-confetti";

const Story = () => {
  const [accepted, setAccepted] = useState(false);
  const { scrollYProgress } = useScroll();
  const noButtonRef = useRef(null);
  
  // Background color transition
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["#0a0a0a", "#1a1a2e", "#b9e2f5", "#fff0f5"]
  );

  const handleNoHover = () => {
    const button = noButtonRef.current;
    if (button) {
      const x = Math.random() * (window.innerWidth - 200) - (window.innerWidth / 2 - 100);
      const y = Math.random() * (window.innerHeight - 200) - (window.innerHeight / 2 - 100);
      button.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  const handleYesClick = () => {
    setAccepted(true);
    setTimeout(() => {
        window.open("https://wa.me/6281318510319?text=YESSSS%20I%20WANT%20TO%20BE%20YOUR%20VALENTINE", "_blank");
    }, 1500);
  };

  return (
    <motion.div style={{ backgroundColor }} className="min-h-[500vh]">
      {accepted && <Confetti numberOfPieces={500} recycle={false} />}
      
      {/* SECTION 1: THE DARK KNIGHT */}
      <ParallaxSection className="h-screen relative z-10">
        <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1.5 }}
            className="text-center text-white z-20"
        >
            <h1 className="text-5xl font-bold mb-4 font-mono tracking-widest uppercase glow-text">The Dark Knight</h1>
            <p className="text-xl text-gray-400">Patrolling the shadows alone...</p>
        </motion.div>
        
        <div className="absolute inset-0 z-0 opacity-60">
             <img src="/assets/gotham-bg.png" alt="Gotham" className="w-full h-full object-cover" />
        </div>
        
        <motion.img 
            src="/assets/batman.jpeg" 
            alt="Batman" 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 md:w-80 drop-shadow-2xl z-20"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
        />
        {/* Immersive Fog/Rain (Simple CSS overlay) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
      </ParallaxSection>

      {/* SECTION 2: THE TRANSITION (CLOUDS) */}
      <ParallaxSection className="h-screen relative z-20">
         <motion.div 
            style={{ x: useTransform(scrollYProgress, [0.2, 0.5], [-100, 0]), scale: useTransform(scrollYProgress, [0.2, 0.5], [1, 1.2]) }}
            className="absolute inset-0 flex items-center justify-center opacity-80"
         >
             <img src="/assets/clouds-layer.png" alt="Clouds" className="w-[150%] max-w-none opacity-80" />
         </motion.div>
         
         <motion.div 
             className="z-30 text-center p-8 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl max-w-md mx-4"
             whileInView={{ y: [20, 0], opacity: [0, 1] }}
             transition={{ duration: 0.8 }}
         >
             <h2 className="text-3xl font-bold text-white mb-2">Until a light appeared...</h2>
             <p className="text-white/90">Breaking through the darkness.</p>
         </motion.div>
      </ParallaxSection>

      {/* SECTION 3: MEMORIES (CAROUSEL) */}
      <ParallaxSection className="h-screen relative z-30 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-[#e11d48] mb-10 drop-shadow-md bg-white/50 backdrop-blur px-6 py-2 rounded-full">Our Precious Memories</h2>
        <Carousel />
      </ParallaxSection>

      {/* SECTION 4: THE CINNAMOROLL KINGDOM */}
      <ParallaxSection className="h-screen relative z-30">
        <div className="text-center z-20">
            <h1 className="text-5xl font-bold mb-4 text-[#e11d48] drop-shadow-sm">My Soft Spot</h1>
            <p className="text-xl text-[#0ea5e9]">You make everything brighter!</p>
        </div>

        <motion.img 
            src="/assets/cinnamoroll-character.png" 
            alt="Cinnamoroll" 
            className="absolute bottom-20 right-10 w-64 md:w-80 drop-shadow-xl z-10"
            animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
            }}
            transition={{ repeat: Infinity, duration: 3 }}
        />
        
         <motion.img 
            src="/assets/heart-balloon.png" 
            alt="Balloon" 
            className="absolute top-20 left-10 w-32 md:w-48 z-10"
            animate={{ y: [0, -50, 0], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </ParallaxSection>

      {/* SECTION 5: THE PROPOSAL */}
      <div className="h-screen flex flex-col items-center justify-center relative z-40">
        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl text-center border-4 border-pink-200 max-w-lg mx-4"
        >
            <h2 className="text-4xl font-bold text-[#e11d48] mb-6">Will you be my Valentine?</h2>
            
            {!accepted ? (
                <div className="flex gap-6 justify-center items-center relative h-20">
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-[#e11d48] text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-[#be123c] transition-colors z-50 cursor-pointer"
                        onClick={handleYesClick}
                    >
                        YES! 💖
                    </motion.button>
                     <motion.button 
                        ref={noButtonRef}
                        className="bg-gray-400 text-white px-8 py-4 rounded-full text-xl font-bold shadow-inner absolute transition-all duration-300 ease-out"
                        style={{ position: 'absolute', right: 0 }} 
                        onMouseEnter={handleNoHover}
                        onTouchStart={handleNoHover}
                    >
                        No
                    </motion.button>
                </div>
            ) : (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                >
                    <p className="text-3xl font-bold text-[#e11d48] mb-4">Yay! I love you! 💕</p>
                    <p className="text-sm text-gray-500 mb-4">(Redirecting to WhatsApp...)</p>
                    <img src="/assets/cinnamoroll-character.png" alt="Happy" className="w-40 mx-auto" />
                </motion.div>
            )}
        </motion.div>
      </div>

    </motion.div>
  );
};

export default Story;
