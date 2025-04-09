import React, { useState } from "react";
import { motion } from "framer-motion";

const CardFlip = ({
  title,
  content,
  title2,
  content2,
  backgroundImagef,
  backgroundImageb,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  // #F7E6CA
// #E8D59E
// #D9BBB0
// #AD9C8E

  return (
    <div
      className="relative shadow-lg w-full h-full cursor-pointer rounded-2xl overflow-hidden"
      onClick={handleFlip}
    >
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {/* Etupuoli */}
        <div
          className="flip-card-front w-full h-full text-[#D9BBB0] bg-cover bg-[#E8D59E] border-[1px] border-[#AD9C8E] border-slate-100 rounded-2xl flex justify-center items-center"
          style={{
            backgroundImage: `url(${backgroundImagef})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-[#F5F5DC] opacity-10 group-hover:opacity-50" />
          <div className="relative text-center flex flex-col justify-center items-center h-full w-full p-4">
            <h1 className="text-xl md:text-2xl font-normal text-white mb-4">{title}</h1>
            <p className="text-base md:text-lg font-normal text-white">{content}</p>
          </div>
        </div>

        {/* Takapuoli */}
        <div
          className="flip-card-back w-full h-full bg-cover border-[1px] border-slate-100 rounded-2xl flex justify-center items-center"
          style={{
            backgroundImage: `url(${backgroundImageb})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-[#F5F5DC] opacity-10 group-hover:opacity-50" />
          <div className="relative text-center flex flex-col justify-center items-center h-full w-full p-4">
            <h1 className="text-xl md:text-2xl font-normal text-white mb-4">{title2}</h1>
            <p className="text-base md:text-lg font-normal text-white">{content2}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardFlip;