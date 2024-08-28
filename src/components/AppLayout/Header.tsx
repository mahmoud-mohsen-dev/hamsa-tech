'use client';
// import Image from 'next/image';
import Link from 'next/link';
import SearchInputField from '../UI/navbar/SearchInputField';
import { Select } from 'antd';
import { IoIosArrowDown } from 'react-icons/io';
import useScrollHandler from '@/hooks/useScrollHander';
import { usePathname } from 'next/navigation';
import Navbar from '../UI/navbar/Navbar';
import { useState } from 'react';
import { TiShoppingCart } from 'react-icons/ti';

function Header() {
  const [linkHovered, setLinkHovered] = useState('');
  useScrollHandler();
  const pathname = usePathname();

  return (
    <header
      className={`header fixed left-0 top-0 z-[100] mx-auto flex h-[48px] w-full items-center bg-transparent md:h-[64px] ${pathname === '/' ? 'bg-transparent' : 'colored-navbar'} ${linkHovered ? 'colored-navbar' : 'bg-transparent'}`}
    >
      <div className='container flex h-full items-stretch justify-between'>
        <div className='flex h-full items-center 2xl:gap-5 3xl:gap-20'>
          <Link
            className='flex h-full items-center gap-3 md:gap-4'
            href='/'
          >
            {/* <Image
            src='/hamsa-logo-white.svg'
            alt='hamsa-logo'
            width={28}
            height={28}
          /> */}
            <div className='logo_img h-6 w-6 md:h-7 md:w-7'></div>
            <h1 className='flex items-center gap-1'>
              <span className='logo_hamsa text-md font-semibold uppercase text-white'>
                Hamsa
              </span>
              <span className='logo_tech text-md font-semibold uppercase text-white'>
                Tech
              </span>
            </h1>
          </Link>
          {/* Navbar */}
          <Navbar
            linkHovered={linkHovered}
            setLinkHovered={setLinkHovered}
          />
        </div>

        <div className='hidden items-center gap-3 2xl:flex'>
          <SearchInputField />
          <div className='h-[22px] w-[1px] rounded-sm bg-[#eaeaea]'></div>
          <Select
            defaultValue='english'
            style={{ width: 100 }}
            className='language-select'
            options={[
              { value: 'english', label: 'English' },
              { value: 'arabic', label: 'العربية' }
            ]}
            suffixIcon={
              <IoIosArrowDown size={14} className='text-white' />
            }
          />
          <div className='h-[22px] w-[1px] rounded-sm bg-[#eaeaea]'></div>
          <Link href='/' className='shopping-cart relative'>
            <div className='absolute right-0 top-0 z-[200] flex h-4 w-4 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-red-shade-350 bg-opacity-80'>
              <p className='text-[.5rem] leading-[1rem] text-white'>
                0
              </p>
            </div>
            <TiShoppingCart size={24} className='text-inherit' />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
