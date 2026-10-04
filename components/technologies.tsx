import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const tech = [
  { name: 'C / C++', role: 'Firmware language', detail: 'Low-level, memory-aware code for the microcontroller.' },
  { name: 'PlatformIO', role: 'Build & toolchain', detail: 'Project config, library management, flashing, and serial monitor.' },
  { name: 'Arduino-compatible hardware', role: 'Microcontroller', detail: 'The board that runs the firmware and talks to peripherals.' },
  { name: 'Temperature sensors', role: 'Input hardware', detail: 'Digital sensor modules that measure ambient temperature.' },
  { name: 'Git', role: 'Version control', detail: 'Incremental commits tracking firmware changes and fixes.' },
  { name: 'GitHub', role: 'Hosting & docs', detail: 'Source repository, README, and project history.' },
]

export function Technologies() {
  return (
    <section id="technologies" className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          label="Technologies"
          title="The stack behind the system"
          description="Tools and hardware spanning firmware, toolchain, and collaboration."
        />
        <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {tech.map((item, i) => (
            <li key={item.name} className="bg-card">
              <Reveal delay={i * 60} className="flex h-full flex-col gap-2 p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {item.role}
                </p>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
