import Btn from '../UI/Btn';

function HeroSectionBtnAndText({
  heading,
  subHeading,
  btnText,
  isAnimationIsOn
}: {
  heading: string;
  subHeading: string;
  btnText: string;
  isAnimationIsOn: boolean;
}) {
  return (
    <div className='absolute left-[130px] top-1/2 z-10 flex -translate-y-1/3 flex-col items-start gap-4 font-openSans'>
      {isAnimationIsOn && (
        <h1
          // className='text-8xl font-semibold leading-[3.5rem] shadow-black text-shadow-sm'
          className='text-8xl font-semibold shadow-gray-light text-shadow-sm'
          data-aos='fade-up'
          // data-aos-offset='0'
          data-aos-delay='200'
          data-aos-duration='1000'
          // // data-aos-easing='ease-in-out'
          // // data-aos-mirror='true'
          // data-aos-once='false'
          // data-aos-anchor-placement='top-center'
        >
          {heading}
        </h1>
      )}
      {isAnimationIsOn && (
        <h3
          className='text-8xl font-semibold text-blue-dark shadow-gray-light text-shadow-sm'
          data-aos='fade-right'
          // data-aos-offset='0'
          data-aos-delay='500'
          data-aos-duration='500'
        >
          {subHeading}
        </h3>
      )}
      {isAnimationIsOn && (
        <div
          data-aos='fade-up'
          // data-aos-offset='0'
          data-aos-delay='1000'
          data-aos-duration='500'
        >
          <Btn
            className='relative mt-[24px] bg-red-shade-350 px-10 py-4 text-xl capitalize text-white hover:bg-yellow-medium'
            // dataAos='fade-down'
            // dataAosDelay='10000'
            // dataAosDuration='500'
          >
            {btnText}
          </Btn>
        </div>
      )}
    </div>
  );
}

export default HeroSectionBtnAndText;
