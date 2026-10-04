import { Activity, Bug, Cable, CircuitBoard, Microchip, type LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const features: { icon: LucideIcon; title: string; body: string; wide?: boolean }[] = [
  {
    icon: Activity,
    title: 'Real-time temperature readings',
    body: 'Continuous sampling at a fixed interval with values streamed instantly over serial, so changes are visible the moment they happen.',
    wide: true,
  },
  {
    icon: Cable,
    title: 'Sensor interfacing',
    body: 'Wiring, pin configuration, and communication with a digital sensor module.',
  },
  {
    icon: Microchip,
    title: 'Embedded programming',
    body: 'Structured C/C++ firmware using setup/loop architecture and timing control.',
  },
  {
    icon: Bug,
    title: 'Debugging',
    body: 'Serial logging, multimeter checks, and iterative testing to isolate hardware vs. software faults.',
  },
  {
    icon: CircuitBoard,
    title: 'Hardware–software integration',
    body: 'Physical circuitry and firmware designed together so each reading is reliable end to end.',
    wide: true,
  },
]

export function Features() {
  return (
    <section id="features" className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 py-20 md:px-8 md:py-28">
        <SectionHeading label="Features" title="What the system does" />
        <ul className="grid gap-4 md:grid-cols-3">
          {features.map((f, i) => (
            <li key={f.title} className={cn(f.wide && 'md:col-span-2')}>
              <Reveal delay={i * 80} className="h-full">
                <div className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/60">
                  <f.icon
                    className="size-6 text-muted-foreground transition-colors group-hover:text-primary"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
