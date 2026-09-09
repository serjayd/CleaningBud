interface Props {
  title: string;
  subtitle?: string;
  description: string;
}

export default function SectionHeader({ title, subtitle, description }: Props) {
  return (
    <div className="text-center mb-8">
      <span className="text-sm text-primary font-semibold tracking-wider uppercase mb-2">
        {subtitle}
      </span>
      <h2 className="font-bold text-4xl mb-3">{title}</h2>
      <p className="text-muted-foreground max-w-xl mx-auto">{description}</p>
    </div>
  );
}
