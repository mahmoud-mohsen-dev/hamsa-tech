// import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import ActiveLink from '../UI/ActiveLink';

function Header() {
  const linksStyles = 'px-5 font-medium uppercase text-sm text-white';

  return (
    <header className='container fixed left-0 top-0 z-50 mx-auto flex items-center bg-transparent lg:h-[64px]'>
      <div className='flex items-center gap-20'>
        <Link className='flex items-center gap-4' href='/'>
          <Image
            src='/hamsa-logo-white.svg'
            alt='hamsa-logo'
            width={28}
            height={28}
          />
          <h1 className='flex items-center gap-1'>
            <span className='text-sm font-medium uppercase text-white'>
              Hamsa
            </span>
            <span className='text-sm font-medium uppercase text-white'>
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
    </header>
  );
}

export default Header;
