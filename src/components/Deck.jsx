import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import CardFlip from './CardFlip';
import { ServiceData } from '../constants';
import { EffectCards } from "swiper";

// #F7E6CA
// #E8D59E
// #D9BBB0
// #AD9C8E


const Deck = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F7E6CA] px-4">
      <div className="w-full max-w-screen-xl mx-auto py-8">
        <div className="flex justify-center w-full">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {ServiceData.map((item) => (
              <SwiperSlide key={item.title}>
                <CardFlip {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Deck;




/*import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import CardFlip from './CardFlip';
import { ServiceData } from '../constants';
import { EffectCards } from "swiper";


const Deck = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#FFFAF0]">
      <div className="max-w-[1000px] w-full pb-10">
  
        <div className="mt-8">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {ServiceData.map((item) => (
              <SwiperSlide key={item.title}>
                <CardFlip {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Deck;      */


























/*import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import CardFlip from './CardFlip';
import { ServiceData } from '../constants';
import { EffectCards } from "swiper";



const PageHeader = ({ title }) => (
  <div className="mx-auto px-4 max-w-[1000px] w-full gap-8">
    <div className="sm:text-left pb-2 md:text-center">
      <p className="text-4xl font-bold text-[#F8F8FF] inline border-b-2 border-[#f9b4ab] sm:text leading-normal">
        {title}
      </p>
    </div>
  </div>
);


const Deck = () => {
  return (
    <div name='deck' className='w-full items-center bg-[#59683e]'> 
    <div className="flex justify-center items-center flex-col h-[900px]  w-[260px] lg:w-[360px] h-[380px] lg:h-[410px] bg-[#556B2F]">
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <PageHeader title="14 Kohdan pyykkilista" />
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
             <CardFlip {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
}

export default Deck;
















import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import CardFlip from './CardFlip';
import { ServiceData } from '../constants';
import { EffectCards } from "swiper";



const PageHeader = ({ title }) => (
  <div className="mx-auto px-4 max-w-[1000px] w-full gap-8">
    <div className="sm:text-left pb-2 md:text-center">
      <p className="text-4xl font-bold text-[#F8F8FF] inline border-b-2 border-[#f9b4ab] sm:text leading-normal">
        {title}
      </p>
    </div>
  </div>
);

export default function Deck() {
  return (
    <div className="flex justify-center items-center flex-col h-[900px]  w-[260px] lg:w-[360px] h-[380px] lg:h-[410px] bg-[#556B2F]">
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <PageHeader title="14 Kohdan pyykkilista" />
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
             <CardFlip {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}






/*import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
//import "../styles.css";

import CardFlip from './CardFlip';
import { ServiceData } from '../constants';

import { EffectCards } from "swiper";

export default function Deck() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {ServiceData.map((item) => (
        <SwiperSlide key={item.title}>
           <CardFlip {...item} />
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}*/


