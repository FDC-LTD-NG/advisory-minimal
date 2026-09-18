export default function CardHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="font-sans text-2xl font-bold uppercase leading-none tracking-[0.02em] text-ink md:text-3xl">
      {children}
    </h2>
  );
}
