import { ArrowDown } from 'lucide-react'
import { GithubIcon } from '@/components/github-icon'
import { SerialMonitor } from '@/components/serial-monitor'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2">
        <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="w-fit rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            Embedded Systems Project
          </p>
          <h1 className="text-balance text-5xl font-semibold tracking-tight md:text-7xl">
            Temperature Monitor — Embedded Systems Project
          </h1>
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            A microcontroller-based system that reads a digital temperature sensor and reports
            accurate, real-time measurements — written in C/C++ and built with PlatformIO.
          </p>
          <p className="font-mono text-sm text-primary">
            Built with PlatformIO and Arduino-compatible hardware.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={site.githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <GithubIcon className="size-4" />
              View on GitHub
            </a>
            <a
              href="#problem"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-foreground"
            >
              Explore the project
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <SerialMonitor />
        </div>
      </div>
    </section>
  )
}
