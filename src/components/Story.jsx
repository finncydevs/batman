import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Carousel from "./Carousel";
import Confetti from "react-confetti";

const Story = () => {
  const [accepted, setAccepted] = useState(false);
  const { scrollYProgress } = useScroll();
  const noButtonRef = useRef(null);
  
  // Background color transition - simplified for longer scroll
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    ["#0a0a0a", "#0f0f1a", "#1a1a2e", "#b9e2f5", "#fff0f5"]
  );

  const handleNoHover = () => {
    const button = noButtonRef.current;
    if (button) {
      const x = Math.random() * (window.innerWidth - 150) - (window.innerWidth / 2 - 75);
      const y = Math.random() * (window.innerHeight - 150) - (window.innerHeight / 2 - 75);
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
    <motion.div style={{ backgroundColor }} className="relative overflow-hidden">
      {accepted && <Confetti numberOfPieces={500} recycle={false} />}
      
      {/* SCREEN 1: THE DARK KNIGHT (Intro) */}
      <section className="min-h-[120vh] relative flex flex-col items-center justify-center p-4">
        <div className="absolute inset-0 z-0">
             <img src="/assets/gotham-bg.png" alt="Gotham" className="w-full h-full object-cover opacity-60" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40"></div>
        </div>
        
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1.5 }}
            className="text-center text-white z-20 max-w-lg mt-[-20vh]"
        >
            <h1 className="text-7xl md:text-9xl mb-4 font-['Bangers'] tracking-wider text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                GOTHAM
            </h1>
            <p className="text-2xl md:text-4xl font-['Bangers'] text-gray-400 tracking-widest uppercase">
                Needs a Hero...
            </p>
        </motion.div>

        <motion.img 
            src="/assets/batman.jpeg" 
            alt="Batman" 
            className="absolute bottom-0 w-80 md:w-[500px] z-20 drop-shadow-2xl mask-image-gradient"
            initial={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </section>

      {/* SCREEN 2: THE GLOOM (Narrative) */}
      <section className="min-h-[100vh] flex flex-col items-center justify-center p-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="max-w-md"
          >
              <p className="text-3xl md:text-5xl font-['Bangers'] text-gray-300 leading-relaxed">
                  "I walked the streets alone."
              </p>
              <br />
              <p className="text-xl md:text-2xl font-['Fredoka'] text-gray-500 mt-4 italic">
                  Surrounded by shadows, rain, and silence.
              </p>
          </motion.div>
      </section>

      {/* SCREEN 3: THE LIGHT (Transition) */}
      <section className="min-h-[120vh] relative flex items-center justify-center overflow-hidden">
         <motion.div 
            className="absolute inset-0 z-0"
            style={{ y: useTransform(scrollYProgress, [0.3, 0.6], [200, -200]) }}
         >
             <img src="/assets/clouds-layer.png" alt="Clouds" className="w-full h-full object-cover opacity-80 scale-150" />
         </motion.div>
         
         <motion.div 
             className="z-10 text-center p-10 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl mx-6"
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
         >
             <h2 className="text-5xl md:text-7xl font-['Pacifico'] text-pink-200 mb-4 drop-shadow-lg">
                 But then...
             </h2>
             <p className="text-xl text-pink-100 font-['Fredoka']">
                 The clouds parted.
             </p>
         </motion.div>
      </section>

      {/* SCREEN 4: MEMORIES (Carousel) */}
      <section className="min-h-[120vh] flex flex-col items-center justify-center relative z-20">
         <h2 className="text-5xl md:text-6xl font-['Pacifico'] text-white drop-shadow-md mb-16 text-center px-4">
             You Brought Color
         </h2>
         <div className="scale-125 md:scale-150 mb-20">
            <Carousel />
         </div>
         <p className="text-white/60 font-['Fredoka'] mt-10 text-lg animate-pulse">
             (Scroll down for one last thing...)
         </p>
      </section>

      {/* SCREEN 5: THE PROPOSAL */}
      <section className="min-h-[120vh] flex flex-col items-center justify-center relative z-30 pb-20">
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.img 
                src="/assets/heart-balloon.png" 
                className="absolute top-[10%] left-[10%] w-32 md:w-56 opacity-90"
                animate={{ y: [0, -40, 0], rotate: [0, 8, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
            />
            <motion.img 
                src="/assets/cinnamoroll-character.png" 
                className="absolute bottom-[15%] right-[5%] w-56 md:w-80"
                animate={{ y: [0, -20, 0], rotate: [0, 3, -3, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
            />
        </div>

        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="bg-white/80 backdrop-blur-2xl p-10 md:p-14 rounded-[3rem] shadow-[0_0_60px_rgba(225,29,72,0.3)] text-center border-4 border-pink-300 w-[85%] max-w-lg mx-auto relative z-50 mt-10"
        >
            <h2 className="text-4xl md:text-6xl font-['Pacifico'] text-[#e11d48] mb-10 leading-tight">
                Will you be my Valentine?
            </h2>
            
            {!accepted ? (
                <div className="flex flex-col gap-6 justify-center items-center relative h-40 w-full">
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#e11d48] text-white w-full py-4 rounded-full text-3xl font-['Bangers'] tracking-widest shadow-xl hover:bg-[#be123c] transition-all z-20 cursor-pointer"
                        onClick={handleYesClick}
                    >
                        YES! 💖
                    </motion.button>
                     <motion.button 
                        ref={noButtonRef}
                        className="bg-gray-400 text-white px-10 py-3 rounded-full text-xl font-['Bangers'] shadow-inner absolute transition-all duration-100 ease-out"
                        style={{ bottom: 0 }}
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
                    <p className="text-5xl font-['Pacifico'] text-[#e11d48] mb-4">Yay! I love you! 💕</p>
                    <p className="text-sm text-gray-500 font-mono italic">
                        Redirecting to WhatsApp...
                    </p>
                </motion.div>
            )}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Story;
