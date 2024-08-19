function HeadingSection({
  heading,
  subHeading
}: {
  heading: string;
  subHeading: string;
}) {
  return (
    <div className='service-details mb-10'>
      <h2 className='text-center font-openSans text-3xl font-bold capitalize'>
        {heading}
      </h2>
      <p className='m-auto mt-3 max-w-[600px] text-pretty text-center font-openSans text-lg capitalize text-gray-light opacity-80'>
        {subHeading}
      </p>
    </div>
  );
}

export default HeadingSection;
