/* Deck.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import CardFlip from './CardFlip';
import { ServiceData } from '../constants';
import { EffectCards } from "swiper";

const PageHeader = ({ title }) => (
  <div className="text-center">
    <p className="text-4xl font-bold text-[#000000] inline border-b-2 border-[#000000] sm:text leading-normal">
      {title}
    </p>
  </div>
);

const Deck = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#FFFAF0]">
      <div className="max-w-[1000px] w-full pb-10">
        <PageHeader title="14 Kohdan pyykkilista" />
        <br></br><br></br>
        <div className="mt-8 w-full h-full">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            style={{ width: '100%', height: '100%' }} // Set Swiper width to 100%
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

export default Deck;*/

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import CardFlip from './CardFlip';
import { ServiceData } from '../constants';
import { EffectCards } from "swiper";

const PageHeader = ({ title }) => (
  <div className="text-center">
    <p className="text-4xl font-bold text-[#000000] inline border-b-2 border-[#000000] sm:text leading-normal">
      {title}
    </p>
  </div>
);

const Deck = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#FFFAF0]">
      <div className="max-w-[1000px] w-full pb-10">
        <PageHeader title="14 Kohdan pyykkilista" />
        <br></br><br></br>
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

export default Deck;      


























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


