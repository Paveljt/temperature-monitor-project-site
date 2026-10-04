import { Reveal } from '@/components/reveal'

export function SectionHeading({
  label,
  title,
  description,
}: {
  label: string
  title: string
  description?: string
}) {
  return (
    <Reveal className="flex max-w-2xl flex-col gap-3">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">{`// ${label}`}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {description ? (
        <p className="text-pretty leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </Reveal>
  )
}
