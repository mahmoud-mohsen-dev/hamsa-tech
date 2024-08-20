function SectionHeading({
  children,
  className
}: {
  children: string;
  className?: string;
}) {
  return (
    <h2
      className={`text-black-light mb-10 text-center text-4xl font-bold capitalize ${className}`}
    >
      {children}
    </h2>
  );
}

export default SectionHeading;
