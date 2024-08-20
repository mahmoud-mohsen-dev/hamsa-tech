import Image from 'next/image';
import Link from 'next/link';

function ProductCard({
  imgSrc,
  alt = '',
  title,
  description,
  linkSrc
}: {
  imgSrc: string;
  alt: string;
  title: string;
  description: string;
  linkSrc: string;
}) {
  return (
    <div className='shadow-featured hover:shadow-featuredHovered relative basis-1/4 bg-white p-5 transition-all duration-300 ease-linear'>
      <p
        className='text-red-dark absolute left-6 top-4 z-20 text-sm font-medium'
        style={{ fontStyle: 'oblique' }}
      >
        NEW
      </p>
      <Link href={linkSrc} className='relative'>
        <Image
          src={imgSrc}
          alt={alt}
          width={100}
          height={156}
          sizes='100vw'
          quality={100}
          style={{ maxHeight: '156px', minWidth: '100%' }}
          className='mb-10 mt-2.5 object-contain transition-["scale"] duration-1000 ease-linear hover:scale-110'
        />
        <div className='h-[100px]'>
          <h4 className='text-black-light mb-[12px] font-openSans text-base font-semibold'>
            {title}
          </h4>
          <h3 className='mb-2.5 max-h-[44px] overflow-hidden font-openSans text-sm font-normal leading-[22px] text-gray-medium'>
            {description}
          </h3>
        </div>
        <p className='text-red-normal font-openSans text-sm font-normal'>
          Read More ⟶
        </p>
      </Link>
    </div>
  );
}

export default ProductCard;
