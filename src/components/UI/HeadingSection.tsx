import SectionHeading from './SectionHeading';

function HeadingSection({
  heading,
  subHeading
}: {
  heading: string;
  subHeading: string;
}) {
  return (
    <div className='service-details mb-10'>
      <SectionHeading className='mb-2.5'>{heading}</SectionHeading>
      <p className='m-auto max-w-[600px] text-pretty text-center font-openSans text-lg capitalize text-gray-medium opacity-80'>
        {subHeading}
      </p>
    </div>
  );
}

export default HeadingSection;
