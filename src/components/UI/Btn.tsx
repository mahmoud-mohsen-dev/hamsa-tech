import Link from 'next/link';

function Btn({
  children,
  href,
  onClick,
  className = 'bg-white text-gray-normal text-lg',
  outlined = false
}: {
  children: React.ReactNode;
  href?: string | null;
  onClick?: () => void;
  className?: string;
  outlined?: boolean;
}): JSX.Element {
  const btnStyles =
    'focus:outline-none active:outline-none transition-colors duration-300 py-4 px-6 flex justify-center items-center gap-2 rounded shadow-sm';

  if (href) {
    return (
      <Link
        href={href}
        className={` ${btnStyles} ${outlined ? 'border-2 border-white text-white' : ''} ${className}`}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`${btnStyles} ${outlined ? 'border-2 border-white text-white' : ''} ${className}`}
      onClick={onClick}
      type='button'
    >
      {children}
    </button>
  );
}

export default Btn;
