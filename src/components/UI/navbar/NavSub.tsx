'use client';
import { NavItemKeyType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

// import EmblaCarouselInView from '../embla';

interface NavSubProps {
  name: string;
  items: NavItemKeyType[];
  currentHovered: string;
}

function NavSubCategoryItem({
  activeFoundItem,
  currentSubHovered
}: {
  activeFoundItem: NavItemKeyType | undefined;
  currentSubHovered: boolean;
}) {
  return (
    currentSubHovered &&
    activeFoundItem && (
      <ul className='mb-6 mt-5 flex justify-center gap-8'>
        {activeFoundItem.children.map((item) => {
          return (
            <li key={v4()}>
              <Link
                href={item.page ?? '/'}
                className='flex flex-col items-center'
                // className='text-gray-normal hover:bg-gray-lighter rounded-[50px] bg-transparent py-2 pl-4 pr-3.5 text-sm font-semibold hover:text-black-light'
              >
                <>
                  <div className='relative'>
                    <Image
                      src={item.imgSrc}
                      alt={item.subCategoryName}
                      // fill
                      width={110}
                      height={110}
                      quality={100}
                      style={{
                        objectFit: 'contain',
                        minHeight: '110px',
                        maxHeight: '110px',
                        minWidth: '110px'
                        // objectPosition: 'center'
                      }}
                    />
                  </div>
                  <p className='mt-5 text-xs text-gray-normal hover:text-blue-dark'>
                    {item.subCategoryName}
                  </p>
                </>
              </Link>
            </li>
          );
        })}
      </ul>
    )
  );
}

function NavSub({ name, currentHovered, items }: NavSubProps) {
  // const OPTIONS = { slidesToScroll: 'auto' };
  // const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' };
  const isActive = name === currentHovered;
  const [currentSubHovered, setCurrentSubHovered] = useState('');

  useEffect(() => {
    if (items[0] && items[0].categoryName) {
      // console.log(items[0].categoryName);
      setCurrentSubHovered(items[0].categoryName);
    }
  }, [items]);
  // console.log(currentSubHovered);
  const indexOfFoundItem = items.findIndex(
    (item) => item.categoryName === currentSubHovered
  );
  const stylessOnHover =
    isActive ?
      'nav-sub_active visible opacity-100'
    : 'invisible opacity-0';

  const handleHovered = (categoryName: string) => {
    setCurrentSubHovered(categoryName);
  };

  // const imagesSlide = items[0].children.map((items) => items.imgSrc);
  // let imagesSlides;
  // if (items.length > 0 && items[0]) {
  //   imagesSlides = items[0].children.map((items) => items.imgSrc);
  // }
  // console.log(activeFoundItem?.categoryName);
  // console.log(activeFoundItem?.categoryName === currentSubHovered);

  return (
    items.length > 0 && (
      <div
        className={`nav-sub absolute bottom-0 left-0 z-[110] w-full translate-y-full border-t border-solid border-gray-ultralight bg-white shadow-lg ${stylessOnHover}`}
      >
        <ul className='flex justify-center gap-2 py-5'>
          {items.map((item) => (
            <li key={v4()}>
              <Link
                href={item.page ?? '/'}
                className={`rounded-[50px] py-2 pl-4 pr-3.5 text-sm font-semibold ${item.categoryName === currentSubHovered ? 'bg-gray-lighter text-black-light' : 'bg-transparent text-gray-normal'}`}
                onMouseEnter={() => handleHovered(item.categoryName)}
                // onMouseLeave={() => handleHovered('')}
              >
                {item.categoryName}
              </Link>
            </li>
          ))}
        </ul>

        <NavSubCategoryItem
          currentSubHovered={isActive}
          activeFoundItem={items[indexOfFoundItem]}
        />
      </div>
    )
  );
}

export default NavSub;
