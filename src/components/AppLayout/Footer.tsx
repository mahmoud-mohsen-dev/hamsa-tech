import { Button, Input, Space } from 'antd';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneVolume,
  FaTiktok,
  FaYoutube
} from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { MdDoubleArrow } from 'react-icons/md';
import SubcribeInput from '../UI/embla/SubcribeInput';

function Footer() {
  return (
    <footer className=''>
      <div className='container grid grid-cols-footer gap-5 bg-blue-gray-medium py-16 text-white'>
        <div>
          <div className='mb-8 flex items-center gap-5'>
            <img
              src='/hamsa-logo-white.svg'
              alt='hamsa logo'
              className='h-full max-w-10'
            />
            <h2 className='text-2xl font-bold'>Hamsa Tech</h2>
          </div>
          <h4 className='mb-8 max-w-[360px] text-base font-light opacity-80'>
            Security and privacy are two sides of the same coin. You
            can’t have privacy without security and vice versa.
          </h4>
          <div className='flex items-center gap-4'>
            <Link
              href='/'
              className='hover:bg-blue-primary flex h-[35px] w-[35px] items-center justify-center rounded-lg bg-white bg-opacity-10 text-sm transition-colors duration-300'
            >
              <FaFacebookF />
            </Link>
            <Link
              href='/'
              className='hover:bg-blue-primary flex h-[35px] w-[35px] items-center justify-center rounded-lg bg-white bg-opacity-10 text-sm transition-colors duration-300'
            >
              <FaTiktok />
            </Link>
            <Link
              href='/'
              className='hover:bg-blue-primary flex h-[35px] w-[35px] items-center justify-center rounded-lg bg-white bg-opacity-10 text-sm transition-colors duration-300'
            >
              <FaYoutube />
            </Link>
            <Link
              href='/'
              className='hover:bg-blue-primary flex h-[35px] w-[35px] items-center justify-center rounded-lg bg-white bg-opacity-10 text-sm transition-colors duration-300'
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className=''>
          <h2 className='mb-8 text-2xl font-bold'>Quick Links</h2>
          <ul className='flex flex-col gap-2'>
            <li>
              <Link
                href='/'
                className='font-base flex items-center gap-2 font-light capitalize'
              >
                <MdDoubleArrow className='text-blue-300' />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href='/products'
                className='font-base flex items-center gap-2 font-light capitalize'
              >
                <MdDoubleArrow className='text-blue-300' />
                <span>Products</span>
              </Link>
            </li>
            <li>
              <Link
                href='/blog'
                className='font-base flex items-center gap-2 font-light capitalize'
              >
                <MdDoubleArrow className='text-blue-300' />
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className='font-base flex items-center gap-2 font-light capitalize'
              >
                <MdDoubleArrow className='text-blue-300' />
                <span>About US</span>
              </Link>
            </li>
            <li>
              <Link
                href='/support'
                className='font-base flex items-center gap-2 font-light capitalize'
              >
                <MdDoubleArrow className='text-blue-300' />
                <span>Support</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-8 text-2xl font-bold'>Newsletter</h2>
          <h4 className='mb-5'>
            Don’t miss to subscribe to our new feeds.
          </h4>
          <SubcribeInput />
        </div>
        <div className=''>
          <h2 className='mb-8 text-2xl font-bold'>Contact</h2>
          <div>
            <div className='flex items-center gap-5'>
              <FaPhoneVolume className='text-blue-300' size={40} />
              <div>
                <h4 className='text-xl font-semibold'>Contact Us</h4>
                <h4>(+20) 01023456789</h4>
              </div>
            </div>
            <div className='mt-5 flex items-center gap-5'>
              <IoMdMail className='text-blue-300' size={40} />
              <div>
                <h4 className='text-xl font-semibold'>Mail Us</h4>
                <h4>info@yourdomain.com</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </footer>
  );
}

export default Footer;
