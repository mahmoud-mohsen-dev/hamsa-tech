import Btn from '../UI/Btn';

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
      <h1 className='text-5xl font-semibold leading-[3.5rem] shadow-black text-shadow-sm'>
        {heading}
      </h1>
      <h3 className='text-2xl font-normal leading-9 shadow-black text-shadow-sm'>
        {subHeading}
      </h3>
      <Btn className='text-black-light relative bg-white leading-4'>
        {btnText}
        {/* <i className='icon-arrow-right before:absolute before:right-0 before:top-0 before:text-6xl before:text-[#65b530] before:content-["\e923"]'></i> */}
      </Btn>
    </div>
  );
}

export default HeroSectionBtnAndText;
