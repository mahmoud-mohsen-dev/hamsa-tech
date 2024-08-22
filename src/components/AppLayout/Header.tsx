'use client';
import Image from 'next/image';
import Link from 'next/link';
import ActiveLink from '../UI/ActiveLink';
import SearchInputField from '../UI/SearchInputField';
import { Select } from 'antd';
import { IoIosArrowDown } from 'react-icons/io';
import useScrollHandler from '@/hooks/useScrollHander';

function Header() {
  const linksStyles =
    'nav_link px-5 font-medium uppercase text-sm text-white';

  useScrollHandler();

  return (
    <header className='header container fixed left-0 top-0 z-50 mx-auto flex items-center justify-between bg-transparent lg:h-[64px]'>
      <div className='flex items-center gap-20'>
        <Link className='flex items-center gap-4' href='/'>
          {/* <Image
            src='/hamsa-logo-white.svg'
            alt='hamsa-logo'
            width={28}
            height={28}
          /> */}
          <div className='logo_img h-7 w-7'></div>
          <h1 className='flex items-center gap-1'>
            <span className='logo_hamsa text-sm font-medium uppercase text-white'>
              Hamsa
            </span>
            <span className='logo_tech text-sm font-medium uppercase text-white'>
              Tech
            </span>
          </h1>
        </Link>
        {/* Navigation links */}
        <nav>
          <ul className='flex items-center'>
            <li>
              <ActiveLink
                href='/products'
                activeClassName='!text-red-secondary'
                className={linksStyles}
              >
                Products
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href='/branches'
                activeClassName='!text-red-secondary'
                className={linksStyles}
              >
                Branches
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href='/blog'
                activeClassName='!text-red-secondary'
                className={linksStyles}
              >
                Blog
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href='/about'
                activeClassName='!text-red-secondary'
                className={linksStyles}
              >
                About Us
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href='/support'
                activeClassName='!text-red-secondary'
                className={linksStyles}
              >
                Support
              </ActiveLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className='flex items-center gap-3'>
        <SearchInputField />
        <div className='h-[22px] w-[1px] rounded-sm bg-[#eaeaea]'></div>
        <Select
          defaultValue='english'
          style={{ width: 100 }}
          options={[
            { value: 'english', label: 'English' },
            { value: 'arabic', label: 'العربية' }
          ]}
          suffixIcon={
            <IoIosArrowDown size={14} className='text-white' />
          }
        />
      </div>
    </header>
  );
}

export default Header;
