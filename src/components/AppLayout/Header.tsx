'use client';
import Image from 'next/image';
import Link from 'next/link';
import ActiveLink from '../UI/ActiveLink';
import SearchInputField from '../UI/SearchInputField';
import { Select } from 'antd';
import { IoIosArrowDown } from 'react-icons/io';
import useScrollHandler from '@/hooks/useScrollHander';
// import { useRouter } from 'next/router';
import { usePathname, useSearchParams } from 'next/navigation';

function Header() {
  const linksStyles =
    'nav_link 2xl:px-3 3xl:px-5 font-medium uppercase text-sm text-white';

  useScrollHandler();

  const pathname = usePathname();

  return (
    <header
      className={`header fixed left-0 top-0 z-[9999] mx-auto flex h-[48px] w-full items-center bg-transparent md:h-[64px] ${pathname === '/' ? 'bg-transparent' : 'colored-navbar'}`}
    >
      <div className='container flex items-center justify-between'>
        <div className='flex items-center 2xl:gap-5 3xl:gap-20'>
          <Link className='flex items-center gap-3 md:gap-4' href='/'>
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
          {/* Navigation links */}
          <nav className='hidden 2xl:block'>
            <ul className='flex items-center'>
              <li>
                <ActiveLink
                  href='/products'
                  activeClassName='!text-red-shade-350'
                  className={linksStyles}
                >
                  Products
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  href='/branches'
                  activeClassName='!text-red-shade-350'
                  className={linksStyles}
                >
                  Branches
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  href='/blog'
                  activeClassName='!text-red-shade-350'
                  className={linksStyles}
                >
                  Blog
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  href='/about'
                  activeClassName='!text-red-shade-350'
                  className={linksStyles}
                >
                  About Us
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  href='/support'
                  activeClassName='!text-red-shade-350'
                  className={linksStyles}
                >
                  Support
                </ActiveLink>
              </li>
            </ul>
          </nav>
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
        </div>
      </div>
    </header>
  );
}

export default Header;
