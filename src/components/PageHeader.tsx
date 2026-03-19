import ScrollReveal from "./ScrollReveal";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PageHeader({ title, subtitle, description }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-12 lg:px-20 gradient-radial">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          {subtitle && (
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium">
              {subtitle}
            </p>
          )}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tighter">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
