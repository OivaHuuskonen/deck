import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CardFlip = ({ title, content, title2, content2, backgroundImagef, backgroundImageb }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip () {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }

    return (

<div className="flex flex-col gap-6 group relative shadow-lg flex-1 overflow-hidden cursor-pointer z-20">
  <motion.div
    className="flip-card-inner w-full h-full"
    initial={false}
    animate={{ rotateY: isFlipped ? 180 : 360 }}
    transition={{ duration: 0.6, animationDirection: "normal" }}
    onAnimationComplete={() => setIsAnimating(false)}
  >

    <div className="flip-card-front w-full h-full bg-cover border-[1px] border-slate-100 rounded-2xl p-0" style={{ backgroundImage: `url(${backgroundImagef})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
    <div className="absolute inset-0 bg-[#F5F5DC] opacity-10 group-hover:opacity-50 text-center" />
    <div className="relative flex flex-col gap-3 text-center justify-center items-center h-full">
    
        <h1 className="text-lg lg:text-lg md:text-base sm:text-sm">{title}</h1>
        <p className="lg:text-base md:text-base sm:text-xs">{content}</p>
    </div>
   </div>

    <div className="flip-card-back w-full h-full bg-cover border-[1px] border-slate-100 rounded-2xl p-0" style={{ backgroundImage: `url(${backgroundImageb})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div className="absolute inset-0 bg-[#F5F5DC] opacity-10 group-hover:opacity-50 text-center" />
        <div className="relative flex flex-col gap-3 text-center justify-center items-center h-full">
            <h1 className="text-lg lg:text-lg md:text-base sm:text-sm">{title2}</h1>
            <p className="lg:text-base md:text-base sm:text-xs">{content2}</p>
        </div>
    </div>
</motion.div>
        </div>
    );
};

export default CardFlip;


 {/*<div className="flex flex-col gap-6 group relative shadow-lg h-[250px] w-[200px] sm:h-[200] sm:w-[150] lg:h-[620px] lg:w-[400px] overflow-hidden cursor-pointer z-20" onClick={handleFlip}>*/}




