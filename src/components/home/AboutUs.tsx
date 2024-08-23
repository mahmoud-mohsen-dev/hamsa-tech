import Link from 'next/link';

function AboutUs() {
  return (
    <section className='grid grid-cols-2 bg-blue-sky-ultralight'>
      <div className='flex flex-col items-start justify-center gap-7 p-20 text-black-medium'>
        <h2 className='font-openSans text-4xl font-bold leading-[calc(2.25rem*1.35)]'>
          From Small Brackets
          <br />
          to Advanced Access Control
          <br />
          and Security Solutions!
        </h2>
        <p className='mb-2'>
          Helping families live intelligently means we’re always
          working to bring our customers the latest technology. As one
          of the premier providers of smart home technology, we are
          recognized throughout the industry for our products,
          innovation & customer satisfaction.
        </p>

        <Link
          href={'/'}
          className='btn relative flex max-w-fit items-center justify-between gap-4 rounded bg-yellow-medium px-9 py-6 text-[15px] leading-none text-white transition-all duration-300 ease-linear hover:bg-blue-gray-medium hover:text-white'
        >
          <span className='text-base font-bold'>Discover More</span>
          <i className='icomoon icon-arrow-right text-sm'></i>
        </Link>
      </div>
      <div>
        <img
          src='/hikvision-dom-camera.png'
          alt='camera dom hikvision'
          className='h-full'
        />
      </div>
    </section>
  );
}

export default AboutUs;
