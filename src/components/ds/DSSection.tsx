interface SectionProps {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}

const DSSection = ({ id, label, title, children }: SectionProps) => (
  <section id={id} className="py-20 border-b border-border">
    <div className="max-w-screen-xl mx-auto px-8">
      <div className="mb-12">
        <p className="c3-label mb-2">{label}</p>
        <h2 className="type-h3 text-foreground">{title}</h2>
        <div className="mt-4 c3-divider" />
      </div>
      {children}
    </div>
  </section>
);

export default DSSection;
