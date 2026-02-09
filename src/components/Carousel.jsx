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

  return (
    <div className="relative w-full h-[300px] flex justify-center items-center overflow-hidden perspective-1000">
      <div className="carousel-container">
        {images.map((img, index) => (
          <div
            key={index}
            className="carousel-item absolute w-[150px] h-[200px] rounded-xl overflow-hidden shadow-xl border-4 border-white/50"
            style={{
              "--i": index,
              "--total": images.length,
            }}
          >
            <img src={img} alt={`Memory ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
