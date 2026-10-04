import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function ProblemSection() {
  return (
    <section id="problem" className="border-t border-border/60">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-5">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{'// The problem'}</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Temperature matters — but only if you can see it in time.
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Server closets, greenhouses, labs, and electronics enclosures can overheat or drop out
            of a safe range without anyone noticing. Manual checks are slow and inconsistent, and
            off-the-shelf monitors are often closed boxes you can&apos;t extend.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            This project is a low-cost, fully programmable monitor that continuously samples the
            environment and surfaces readings the moment they change — a foundation that can grow
            into alerts, logging, or remote dashboards.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <figure className="flex flex-col gap-3">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border">
              <Image
                src="/images/temperature-monitor.png"
                alt="Temperature monitor prototype: a microcontroller board wired on a breadboard to a digital temperature sensor and small display"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="font-mono text-xs text-muted-foreground">
              {'fig.01 — prototype: MCU + digital temperature sensor on breadboard'}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
