import Link from 'next/link';

function CategoryCard({
  heading,
  description,
  link = '/',
  icon
}: {
  heading: string | React.ReactElement;
  description: string;
  link?: string;
  icon: React.ReactNode; // i.e., <i className='icomoon icon-cctv-camera2'></i>
}) {
  return (
    <div className='category-card border-gray-[##e8e9eb] border-b border-solid p-[45px] transition-all duration-300 ease-linear hover:bg-red-primary'>
      <div className='relative mb-8 h-[60px]'>{icon}</div>
      <h2 className='mb-8 text-2xl font-semibold text-black-medium'>
        {heading}
      </h2>

      <p className='mb-8 text-sm leading-6 text-gray-light'>
        {description}
      </p>

      <Link href={link} className='btn relative flex items-center'>
        <i className='icomoon icon-arrow-right flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-transparent bg-red-primary text-xs text-white transition-all duration-300 ease-linear hover:border-red-primary hover:bg-transparent hover:text-red-primary'></i>
        <span className='ml-2 font-bold text-black-medium'>
          Read More
        </span>
      </Link>
    </div>
  );
}

export default CategoryCard;
