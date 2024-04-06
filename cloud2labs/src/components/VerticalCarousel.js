// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import './carousel.css'
// const items = [
//   'This is the first item',
//   'This is the second item',
//   'This is the third item',
// ];

// const CarouselItem = ({ content, isActive }) => {
//   return (
//     <motion.div
//       className={`carousel-item ${isActive ? 'active' : ''}`}
//     >
//       {content}
//     </motion.div>
//   );
// };

// const VerticalCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoplay, setIsAutoplay] = useState(true);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       if (isAutoplay) {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//       }
//     }, 3000); // Adjust interval for desired autoplay speed

//     return () => clearInterval(intervalId);
//   }, [isAutoplay, items.length]); // Re-run effect on autoplay toggle or item change

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
//   };

//   const toggleAutoplay = () => {
//     setIsAutoplay(!isAutoplay);
//   };

//   const carouselVariants = {
//     enter: (direction) => ({
//       y: direction === 'up' ? 100 : -100,
//       opacity: 0,
//       transition: { duration: 0.5 },
//     }),
//     center: {
//       y: 0,
//       opacity: 1,
//       filter: 'blur(0px)', // Remove blur for active item
//     },
//     exit: (direction) => ({
//       y: direction === 'up' ? -100 : 100,
//       opacity: 0,
//       transition: { duration: 0.5 },
//     }),
//   };

//   return (
//     <div className="carousel">
//       <motion.div
//         className="carousel-container"
//         initial="false"
//         animate="center"
//         exit="exit"
//         variants={carouselVariants}
//         layout
//       >
//         {items.map((item, index) => (
//           <CarouselItem
//             key={index}
//             content={item}
//             isActive={index === currentIndex}
//           />
//         ))}
//       </motion.div>
//       <button onClick={handlePrev}>Previous</button>
//       <button onClick={handleNext}>Next</button>
//       <button onClick={toggleAutoplay}>{isAutoplay ? 'Pause Autoplay' : 'Start Autoplay'}</button>
//     </div>
//   );
// };

// export default VerticalCarousel;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './carousel.css'

const items = [
  'This is the First item',
  'This is the Second item',
  'This is the Third item',
  'This is the Fourth item',
  'This is the Fifth item',
  'This is the Sixth item',
  'This is the Seventh item',

];

const CarouselItem = ({ content, isActive }) => {
  return (
    <motion.div
      className={`carousel-item ${isActive ? 'active' : ''}`}
      layout
    >
      {content}
    </motion.div>
  );
};

const VerticalCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isAutoplay) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isAutoplay, items.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const toggleAutoplay = () => {
    setIsAutoplay(!isAutoplay);
  };

  const carouselVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="carousel">
      <motion.div
        className="carousel-container"
        initial="false"
        animate="center"
        exit="exit"
        variants={carouselVariants}
        layout
      >
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            content={item}
            isActive={index === currentIndex}
          />
        ))}
      </motion.div>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={toggleAutoplay}>{isAutoplay ? 'Pause Autoplay' : 'Start Autoplay'}</button>
    </div>
  );
};

export default VerticalCarousel;
