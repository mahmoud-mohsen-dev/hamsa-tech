import { Carousel } from 'antd';
import Image from 'next/image';
import HeroSectionBtnAndText from './HeroSectionBtnAndText';

function HeroSection() {
  const imageContainerStyles =
    'relative max-h-screen before:absolute before:left-0 before:top-0 before:h-full before:max-h-screen before:w-full before:bg-[#00000020] before:bg-blend-normal before:content-[""]';
  return (
    <div className='max-h-screen'>
      <Carousel
        arrows
        autoplay
        className='h-full max-h-screen bg-[#364d79] text-center leading-[100vh] text-white'
      >
        <div className={imageContainerStyles}>
          <img src='/carousel/carousel-1.jpg' alt='ezviz camera' />
          <HeroSectionBtnAndText
            heading='Big New Sales 50%'
            subHeading='on hikvision products'
            btnText='Read More'
          />
        </div>
        <div className={imageContainerStyles}>
          <img src='/carousel/carousel-2.jpg' alt='ezviz camera' />
          <HeroSectionBtnAndText
            heading='Big New Sales 50%'
            subHeading='on hikvision products'
            btnText='Read More'
          />
        </div>
        <div className={imageContainerStyles}>
          <img src='/carousel/carousel-3.jpg' alt='ezviz camera' />
          <HeroSectionBtnAndText
            heading='Big New Sales 50%'
            subHeading='on hikvision products'
            btnText='Read More'
          />
        </div>
      </Carousel>
    </div>
  );
}

export default HeroSection;
