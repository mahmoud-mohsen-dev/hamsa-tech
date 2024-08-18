import Link from 'next/link';

function Btn({
  children,
  href,
  onClick,
  className = 'bg-white text-gray-normal',
  outlined = false
}: {
  children: React.ReactNode;
  href?: string | null;
  onClick?: () => void;
  className?: string;
  outlined?: boolean;
}): JSX.Element {
  const btnStyles =
    'focus:outline-none active:outline-none hover:bg-opacity-90 active:bg-opacity-100 transition-colors duration-150 py-4 px-6 flex justify-center items-center gap-2 text-lg rounded-3xl shadow-sm';

  if (href) {
    return (
      <Link
        href={href}
        className={`${className} ${btnStyles} ${outlined ? 'border-2 border-white text-white' : ''}`}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`${className} ${btnStyles} ${outlined ? 'border-2 border-white text-white' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Btn;
