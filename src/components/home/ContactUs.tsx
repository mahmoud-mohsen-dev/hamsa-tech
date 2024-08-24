import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa6';

function ContactUs() {
  return (
    <section className='bg-black-accent container py-[30px]'>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-medium text-white'>
          Let’s work together to build something great.
        </h3>
        <Link
          href={'/'}
          className='flex items-center gap-3 rounded bg-red-shade-300 px-7 py-4 text-sm uppercase text-white transition-all duration-300 hover:bg-yellow-medium hover:text-white focus:outline-none'
        >
          <span className='font-semibold'>Contact US</span>
          <FaWhatsapp size={24} />
        </Link>
      </div>
    </section>
  );
}

export default ContactUs;
