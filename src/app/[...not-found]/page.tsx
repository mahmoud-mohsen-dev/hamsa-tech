import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='grid max-h-screen min-h-[750px] place-content-center text-black-light'>
      <h1 className='text-5xl'>Page Not found – 404!</h1>
      <div>
        <Link
          href='/'
          className='mx-auto mt-10 block w-fit rounded-md bg-blue-normal px-9 py-6 text-xl text-white transition-colors duration-300 hover:bg-blue-gray-light'
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
