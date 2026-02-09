import React from 'react';

const Carousel = () => {
  const images = [
    "/assets/photo1.jpeg",
    "/assets/photo2.jpeg",
    "/assets/photo3.jpeg",
    "/assets/photo4.jpeg",
    "/assets/photo5.jpeg",
    "/assets/photo6.jpeg",
    "/assets/photo7.jpeg",
    "/assets/photo8.jpeg",
  ];

  // Divide images into columns for the bento grid effect
  const col1 = [...images, ...images]; // Double for seamless infinite scroll
  const col2 = [...images.reverse(), ...images.reverse()]; // Reverse for variety
  const col3 = [...images, ...images]; // Third column

  return (
    <div className="relative w-full h-[800px] bg-black overflow-hidden flex justify-center gap-4 p-4">
        {/* Gradient Overlays for smooth entry/exit */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

        {/* Column 1 - Scrolls Up */}
        <div className="w-1/3 md:w-1/4 h-full overflow-hidden relative group">
            <div className="flex flex-col animate-scroll-up">
                {col1.map((img, i) => (
                    <div key={`col1-${i}`} className="w-full relative rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-white/50 transition-colors duration-300 mb-4">
                        <img src={img} alt="Memory" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                ))}
            </div>
        </div>

        {/* Column 2 - Scrolls Down (Slower/Faster or Reverse) */}
        <div className="w-1/3 md:w-1/4 h-full overflow-hidden relative group mt-12 md:mt-0">
             <div className="flex flex-col animate-scroll-down" style={{ animationDuration: '25s' }}>
                {col2.map((img, i) => (
                    <div key={`col2-${i}`} className="w-full relative rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-white/50 transition-colors duration-300 mb-4">
                        <img src={img} alt="Memory" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                ))}
            </div>
        </div>

        {/* Column 3 - Scrolls Up */}
        <div className="hidden md:block w-1/4 h-full overflow-hidden relative group">
             <div className="flex flex-col animate-scroll-up" style={{ animationDuration: '22s' }}>
                {col3.map((img, i) => (
                    <div key={`col3-${i}`} className="w-full relative rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-white/50 transition-colors duration-300 mb-4">
                        <img src={img} alt="Memory" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Carousel;
