'use client';
import { Carousel } from 'antd';
// import Image from 'next/image';
import HeroSectionBtnAndText from './HeroSectionBtnAndText';
import ConfigAos from '../Theme/ConfigAos';
import 'aos/dist/aos.css';
import { useState } from 'react';

function HeroSection() {
  const [isAnimationIsOn, setIsAnimationIsOn] = useState(true);
  const imageContainerStyles =
    'relative max-h-screen before:absolute before:left-0 before:top-0 before:h-full before:max-h-screen before:w-full before:bg-[#00000020] before:bg-blend-normal before:content-[""]';

  const handlebeforeChange = () => {
    setIsAnimationIsOn(false);
  };
  const handleAfterChange = () => {
    setIsAnimationIsOn(true);
  };

  return (
    <ConfigAos>
      <section>
        <Carousel
          arrows
          autoplay
          pauseOnHover={false}
          beforeChange={handlebeforeChange}
          afterChange={handleAfterChange}
          className='min-h-fit w-full max-w-full bg-white text-center text-white lg:mx-auto lg:max-w-[1536px] xl:max-h-screen'
        >
          <div className={imageContainerStyles} key='1'>
            <img
              src='/hero-section/ezviz-indoor-camera.jpg'
              alt='ezviz indoor camera'
            />
            <HeroSectionBtnAndText
              heading='Highest level of'
              subHeading='protection.'
              btnText='Read More'
              isAnimationIsOn={isAnimationIsOn}
            />
          </div>
          <div className={imageContainerStyles} key='2'>
            <img
              src='/hero-section/ezviz-outdoor-camera.jpg'
              alt='ezviz camera'
            />
            <HeroSectionBtnAndText
              heading='24/7 control of '
              subHeading='your security.'
              btnText='Read More'
              isAnimationIsOn={isAnimationIsOn}
            />
          </div>
          <div className={imageContainerStyles} key='3'>
            <img
              src='/hero-section/ezviz-indoor-camera-2.jpg'
              alt='ezviz camera'
            />
            <HeroSectionBtnAndText
              heading='Every security'
              subHeading='solutions.'
              btnText='Read More'
              isAnimationIsOn={isAnimationIsOn}
            />
          </div>
        </Carousel>
      </section>
    </ConfigAos>
  );
}

export default HeroSection;
