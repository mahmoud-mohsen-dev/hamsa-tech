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
    <div className='font-openSans absolute left-1/4 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/3 flex-col items-start gap-4'>
      <h1 className='text-5xl font-semibold leading-[3.5rem] shadow-sm'>
        {heading}
      </h1>
      <h3 className='text-2xl font-normal leading-9'>{subHeading}</h3>
      <Btn className='bg-white leading-4 text-gray-normal'>
        {btnText}
      </Btn>
    </div>
  );
}

export default HeroSectionBtnAndText;
