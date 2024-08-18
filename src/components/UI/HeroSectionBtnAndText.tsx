import Btn from './Btn';

function HeroSectionBtnAndText({
  heading,
  subHeading,
  btnText
}: {
  heading: string;
  subHeading: string;
  btnText: string;
}) {
  return (
    <div className='absolute left-1/4 top-3/4 z-10 flex -translate-x-1/2 -translate-y-3/4 flex-col items-start gap-4 font-openSans'>
      <h1 className='text-shadow-sm text-5xl font-semibold leading-[3.5rem] shadow-black'>
        {heading}
      </h1>
      <h3 className='text-shadow-sm text-2xl font-normal leading-9 shadow-black'>
        {subHeading}
      </h3>
      <Btn className='bg-white leading-4 text-gray-normal'>
        {btnText}
      </Btn>
    </div>
  );
}

export default HeroSectionBtnAndText;
