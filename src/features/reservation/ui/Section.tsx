import "./Section.scss";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="reservation-section">
      <h1 className="title">{title}</h1>
      {children}
    </section>
  );
};
