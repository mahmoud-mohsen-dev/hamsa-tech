function SectionHeading({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`mb-10 text-center text-4xl font-bold capitalize text-black-light ${className}`}
    >
      {children}
    </h2>
  );
}

export default SectionHeading;
