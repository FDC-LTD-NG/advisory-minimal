export default function CardHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="font-sans text-xl font-bold uppercase leading-none tracking-[0.04em] text-ink md:text-2xl">
      {children}
    </h2>
  );
}
