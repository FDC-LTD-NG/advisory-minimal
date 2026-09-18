export default function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
      {children}
    </p>
  );
}
