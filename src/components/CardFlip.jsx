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
         <div className="flex flex-col gap-6 group relative shadow-lg text-[#000000] rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer z-20" onClick={handleFlip}>
         <motion.div
            className="flip-card-inner w-full h-full"
            style={{ width: '250px', height: '370px' }}
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 360 }}
            transition={{ duration: 0.6, animationDirection: "normal" }}
            onAnimationComplete={() => setIsAnimating(false)}
    
        >
            <div className="flip-card-front w-full h-full bg-cover border-[1px] border-[#000000]  text-[#000000]rounded-lg p-4 flex flex-col justify-center items-center">
                <div className="absolute inset-0 bg-[#FFFAF0] opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3 text-center">
                    <h1 className="text-xl lg:text-2xl">{title}</h1>
                    <p className="lg:text-base">{content}</p>
                </div>
            </div>
            <div className="flip-card-back w-full h-full bg-cover border-[1px] border-[#000000]  text-[#000000] rounded-lg p-4 flex flex-col justify-center items-center">
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


/*import React, { useState } from 'react';
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



