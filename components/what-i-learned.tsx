import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const lessons = [
  {
    title: 'Reading datasheets',
    body: 'Translating sensor specs — voltage, timing, resolution — into working code and wiring.',
  },
  {
    title: 'Professional embedded workflow',
    body: 'Using PlatformIO for reproducible builds, dependency management, and flashing instead of a one-off sketch.',
  },
  {
    title: 'Systematic debugging',
    body: 'Separating hardware faults from firmware bugs with serial output, isolated tests, and one change at a time.',
  },
  {
    title: 'Thinking in constraints',
    body: 'Writing efficient code for limited memory and processing power on a microcontroller.',
  },
  {
    title: 'Version control habits',
    body: 'Committing small, meaningful changes with Git and documenting the project on GitHub.',
  },
  {
    title: 'Hardware meets software',
    body: 'Seeing how physical signals, circuits, and code depend on each other in a real system.',
  },
]

export function WhatILearned() {
  return (
    <section id="learned" className="border-t border-border/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1fr_2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            label="What I learned"
            title="Takeaways from building it"
            description="Beyond a working device, this project sharpened skills I use across every engineering problem."
          />
        </div>
        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {lessons.map((lesson, i) => (
            <li key={lesson.title}>
              <Reveal delay={i * 60} className="flex gap-4">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-primary/50 text-primary">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-semibold">{lesson.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{lesson.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
