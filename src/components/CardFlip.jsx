/*import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CardFlip = ({ title, content, title2, content2 }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }

    return (
        <div className="flex flex-col mb-20 group relative shadow-lg rounded-xl w-[250px] lg:w-[350px] h-[370px] lg:h-[400px] overflow-hidden cursor-pointer z-20" onClick={handleFlip}>
            <motion.div
                className="flip-card-inner w-full h-full"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                onAnimationComplete={() => setIsAnimating(false)}
            >
                <div className="flip-card-front w-full h-full bg-cover border-[1px] text-white rounded-lg p-4 flex flex-col justify-center items-center">
                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50"/>
                    <div className="relative flex flex-col gap-3 text-center">
                        <h1 className="text-xl lg:text-2xl">{title}</h1>
                        <p className="lg:text-base">{content}</p>
                    </div>
                </div>
                <div className="flip-card-back w-full h-full bg-cover border-[1px] text-white rounded-lg p-4 flex flex-col justify-center items-center">
                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50"/>
                    <div className="relative flex flex-col gap-3 text-center">
                        <h1 className="text-xl lg:text-2xl">{title2}</h1>
                        <p className="lg:text-base">{content2}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CardFlip;











import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CardFlip = ({ title, content, title2, content2 }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip () {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }

    return (
        <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-2 py-2 h-[370px] w-[250px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer z-20" onClick={handleFlip}>
            <motion.div
                className="flip-card-inner w-full h-full"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 360 }}
                transition={{ duration: 0.6, animationDirection: "normal" }}
                onAnimationComplete={() => setIsAnimating(false)}
            >
                <div className="flip-card-front w-full h-full bg-cover border-[1px] text-white rounded-lg p-4">
                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50"/>
                    <div className="relative flex flex-col gap-3">
                        <h1 className="text-xl lg:text-2xl text-center">{title}</h1>
                        <p className="lg:text-base text-center">{content}</p>
                    </div>
                </div>

                <div className="flip-card-back w-full h-full bg-cover border-[1px] text-white rounded-lg p-4">
                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50"/>
                    <div className="relative flex flex-col gap-3">
                        <h1 className="text-xl lg:text-2xl text-center">{title2}</h1>
                        <p className="lg:text-base text-center">{content2}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CardFlip;


import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CardFlip = ({ title, content, title2, content2 }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip () {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }

    return (

<div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-2 py-2 h-[370px] w-[250px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer z-20" onClick={handleFlip}>
<motion.div
    className="flip-card-inner w-full h-full"
    initial={false}
    animate={{ rotateY: isFlipped ? 180 : 360 }}
    transition={{ duration: 0.6, animationDirection: "normal" }}
    onAnimationComplete={() => setIsAnimating(false)}
>
    <div className="flip-card-front w-full h-full bg-cover border-[1px] text-white rounded-lg p-4">
        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50"/>
        <div className="relative flex flex-col gap-3">
            <h1 className="text-xl lg:text-2xl text-center">{title}</h1>
            <p className="lg:text-base text-center">{content}</p>
        </div>
    </div>

    <div className="flip-card-back w-full h-full bg-cover border-[1px] text-white rounded-lg p-4">
        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50"/>
        <div className="relative flex flex-col gap-3">
            <h1 className="text-xl lg:text-2xl text-center">{title2}</h1>
            <p className="lg:text-base text-center">{content2}</p>
        </div>
    </div>
</motion.div>
</div>
    );
};

export default CardFlip;



import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CardFlip = ({ title, content, title2, content2 }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }

    return (
        <motion.div
            className="flip-card-inner w-[250px] lg:w-[350px] h-[370px] lg:h-[400px] relative shadow-lg text-white rounded-xl px-2 py-2 overflow-hidden cursor-pointer z-20"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            onAnimationComplete={() => setIsAnimating(false)}
            onClick={handleFlip}
        >
            <div className="flip-card-front w-full h-full bg-cover border-[1px] text-white rounded-lg p-4 flex flex-col justify-center items-center">
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50"/>
                <div className="relative flex flex-col gap-3 text-center">
                    <h1 className="text-xl lg:text-2xl">{title}</h1>
                    <p className="lg:text-base">{content}</p>
                </div>
            </div>
            <div className="flip-card-back w-full h-full bg-cover border-[1px] text-white rounded-lg p-4 flex flex-col justify-center items-center">
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50"/>
                <div className="relative flex flex-col gap-3 text-center">
                    <h1 className="text-xl lg:text-2xl">{title2}</h1>
                    <p className="lg:text-base">{content2}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default CardFlip;


import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CardFlip = ({ title, content, title2, content2 }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    
    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }
    
    return (
        <motion.div
            className="flip-card-inner relative shadow-lg text-white rounded-xl px-2 py-2 cursor-pointer z-20"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            onAnimationComplete={() => setIsAnimating(false)}
            onClick={handleFlip}
        >
            <div className="flip-card-front w-full h-full bg-cover border-[1px] text-white rounded-lg p-4 flex flex-col justify-center items-center">
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3 text-center">
                    <h1 className="text-xl lg:text-2xl">{title}</h1>
                    <p className="lg:text-base">{content}</p>
                </div>
            </div>
            <div className="flip-card-back w-full h-full bg-cover border-[1px] text-white rounded-lg p-4 flex flex-col justify-center items-center">
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3 text-center">
                    <h1 className="text-xl lg:text-2xl">{title2}</h1>
                    <p className="lg:text-base">{content2}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default CardFlip;


import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CardFlip = ({ title, content, title2, content2 }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    
    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }
    
    return (
        <motion.div
            className="flip-card-inner relative shadow-lg text-white rounded-xl overflow-hidden cursor-pointer"
            style={{ width: '250px', height: '370px' }}
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            onAnimationComplete={() => setIsAnimating(false)}
            onClick={handleFlip}
        >
            <div className="flip-card-front w-full h-full bg-cover border-[1px] text-white rounded-lg p-4 flex flex-col justify-center items-center">
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3 text-center">
                    <h1 className="text-xl lg:text-2xl">{title}</h1>
                    <p className="lg:text-base">{content}</p>
                </div>
            </div>
            <div className="flip-card-back w-full h-full bg-cover border-[1px] text-white rounded-lg p-4 flex flex-col justify-center items-center">
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3 text-center">
                    <h1 className="text-xl lg:text-2xl">{title2}</h1>
                    <p className="lg:text-base">{content2}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default CardFlip;*/

/*import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CardFlip = ({ title, content, title2, content2 }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    
    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }
    
    return (
         <div className="flex flex-col gap-6 group relative shadow-lg text-[#000000] rounded-xl px-6 py-8  overflow-hidden cursor-pointer z-20" onClick={handleFlip}>
         <motion.div
            className="flip-card-inner w-full h-full"
           // style={{ width: '250px', height: '370px' }}
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, animationDirection: "normal" }}
            onAnimationComplete={() => setIsAnimating(false)}
    
        >
            <div className="flip-card-front w-full h-full bg-cover border-[1px] border-[#000000]  text-[#000000]rounded-lg p-4">
                <div className="absolute inset-0 bg-[#FFFAF0] opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3 text-center">
                    <h1 className="text-xl lg:text-2xl">{title}</h1>
                    <p className="lg:text-base">{content}</p>
                </div>
            </div>
            <div className="flip-card-back w-full h-full bg-cover border-[1px] border-[#000000]  text-[#000000] rounded-lg p-4">
                <div className="absolute inset-0 bg-[#FFFAF0] opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3 text-center">
                    <h1 className="text-xl lg:text-2xl">{title2}</h1>
                    <p className="lg:text-base">{content2}</p>
                </div>
            </div>
        </motion.div>
        </div>
    );
};

export default CardFlip;


import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CardFlip = ({ title, content, title2, content2, backgroundImage, icon }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }

    return (
        <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer z-20" onClick={handleFlip}>
            <motion.div
                className="flip-card-inner w-full h-full"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 360 }}
                transition={{ duration: 0.6, animationDirection: "normal" }}
                onAnimationComplete={() => setIsAnimating(false)}
            >
                <div className="flip-card-front w-full h-full bg-cover border-[1px] text-white rounded-lg p-4">
                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                    <div className="relative flex flex-col gap-3">

                        <h1 className="text-xl lg:text-2xl text-center">{title}</h1>
                        <p className="lg:text-base text-center">{content}</p>
                    </div>
                </div>
                <div className="flip-card-back w-full h-full bg-cover border-[1px] text-white rounded-lg p-4">
                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                    <div className="relative flex flex-col gap-3">
    
                        <h1 className="text-xl lg:text-2xl text-center">{title2}</h1>
                        <p className="lg:text-base text-center">{content2}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CardFlip;*/

/*import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CardFlip = ({ title, content, title2, content2, backgroundImage }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }

    return (
        // <div className="flex flex-col gap-6 group relative shadow-lg text-[#000000] rounded-xl px-6 py-8 h-[250px] w-[270px] lg:h-[400px] lg:w-[370px] overflow-hidden cursor-pointer z-20" onClick={handleFlip}>
        <div className="flex flex-col gap-6 group relative shadow-lg text-[#000000] rounded-xl px-6 py-8 h-[250px] w-[270px] lg:h-[400px] lg:w-[370px] overflow-hidden cursor-pointer z-20" onClick={handleFlip}>
         <motion.div
            className="flip-card-inner w-full h-full"
            style={{ width: '100%', height: '100%' }}
            //style={{ width: '250px', height: '370px' }}
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 360 }}
            transition={{ duration: 0.6, animationDirection: "normal" }}
            onAnimationComplete={() => setIsAnimating(false)}
        >
            <div className="flip-card-front w-full h-full bg-cover border-[1px] rounded-lg border-[#000000] text-[#000000] p-0 flex flex-col justify-center items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="absolute inset-0 bg-[#FFFAF0] opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3 text-center">
                <h1 
                className="text-base lg:text-base sm:text-xs"
                >{title}</h1>
                        <p
                         className="lg:text-sm sm:text-xs"
                         >{content}</p>
                    {/*<h1 className="text-base lg:text-1xl">{title}</h1>
                    <p className="lg:text-sm">{content}</p>*/
                /*</div>
            </div>
            <div className="flip-card-back w-full h-full bg-cover border-[1px] border-[#000000] rounded-lg text-[#000000] p-0 flex flex-col justify-center items-center"  style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="absolute inset-0 bg-[#FFFAF0] opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3 text-center">
                <h1 className="text-base lg:text-base sm:text-xs">{title2}</h1>
                        <p className="lg:text-sm sm:text-xs">{content2}</p>
                    {/*<h1 className="text-base lg:text-1xl">{title2}</h1>
                    <p className="lg:text-sm">{content2}</p>*/
                /*</div>
            </div>
        </motion.div>
        </div>
    );
};

export default CardFlip;*/



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

{/*h-[250px] w-[200px] sm:h-[200] sm:w-[150]*/} 
    return (
        
        <div className="flex flex-col gap-6 group relative shadow-lg border-radius: 18px; h-[250px] w-[200px] sm:h-[200] sm:w-[150] lg:h-[620px] lg:w-[400px] overflow-hidden cursor-pointer z-20" onClick={handleFlip}>
          { /* <motion.div
                className="flip-card-inner w-full h-full"
                
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 360 }}
                transition={{ duration: 0.6, animationDirection: "normal" }}
                onAnimationComplete={() => setIsAnimating(false)}
            >
                <div className="flip-card-front w-full h-full bg-cover rounded-lg text-center p-0" style={{ backgroundImage: `url(${backgroundImagef})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}> 


             
                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 text-center" />
               
                    <div className="relative flex flex-col gap-3 text-center justify-center items-center h-full">
                        <h1 className="text-lg lg:text-lg sm:text-base">{title}</h1>
                        <p className="lg:text-base sm:text-xs">{content}</p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="flip-card-back w-full h-full bg-cover rounded-lg p-0" style={{ backgroundImage: `url(${backgroundImageb})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />

                    <div className="relative flex flex-col gap-3 text-center" />
                <h1 className="text-lg lg:text-lg sm:text-base">{title2}</h1>
                        <p className="lg:text-base sm:text-base">{content2}</p>
                    
                </div>
                </div>
    </motion.div>


<motion.div className="flip-card-inner" variants={animation} initial="initial" animate="animate">*/}


<motion.div
                className="flip-card-inner w-full h-full"
                
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 360 }}
                transition={{ duration: 0.6, animationDirection: "normal" }}
                onAnimationComplete={() => setIsAnimating(false)}
            >

    <div className="flip-card-front w-full h-full bg-cover p-0 rounded-xl " style={{ backgroundImage: `url(${backgroundImagef})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
    <div className="absolute inset-0 bg-[#F5F5DC] opacity-10 group-hover:opacity-50 text-center" />
    <div className="relative flex flex-col gap-3 text-center justify-center items-center h-full">
        <h1 className="text-lg lg:text-lg sm:text-base">{title}</h1>
        <p className="lg:text-base sm:text-xs">{content}</p>
    </div>
   </div>

    <div className="flip-card-back w-full h-full bg-cover rounded-lg p-0" style={{ backgroundImage: `url(${backgroundImageb})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
        <div className="relative flex flex-col gap-3 text-center justify-center items-center h-full">
            <h1 className="text-lg lg:text-lg sm:text-base">{title2}</h1>
            <p className="lg:text-base sm:text-base">{content2}</p>
        </div>
    </div>
</motion.div>


        </div>
        
    );
};

export default CardFlip;




