import { Cpu, MonitorDot, Thermometer, type LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const steps: { icon: LucideIcon; tag: string; title: string; body: string }[] = [
  {
    icon: Thermometer,
    tag: 'INPUT',
    title: 'Sensor samples',
    body: 'A temperature sensor measures the ambient environment and outputs a signal representing the current reading.',
  },
  {
    icon: Cpu,
    tag: 'PROCESS',
    title: 'Microcontroller computes',
    body: 'Firmware written in C/C++ and built with PlatformIO reads the sensor at a fixed interval, converts raw data to °C, and validates it.',
  },
  {
    icon: MonitorDot,
    tag: 'OUTPUT',
    title: 'Readings reported',
    body: 'Processed values stream over serial in real time, ready to display, log, or trigger a response when thresholds are crossed.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          label="How it works"
          title="From physical signal to readable data"
          description="A simple, dependable data path: the sensor feeds a microcontroller programmed using PlatformIO, which turns raw measurements into real-time readings."
        />
        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <Reveal delay={i * 120} className="h-full">
                <div className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60">
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                      <step.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {`step ${i + 1} · ${step.tag}`}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal>
          <pre className="overflow-x-auto rounded-xl border border-border bg-card p-5 font-mono text-sm leading-relaxed text-muted-foreground">
            <code>
              <span className="text-accent">void</span> <span className="text-foreground">loop</span>
              {'() {\n  '}
              <span className="text-accent">float</span>
              {' tempC = sensor.'}
              <span className="text-foreground">readTemperature</span>
              {'();\n  Serial.'}
              <span className="text-foreground">print</span>
              {'('}
              <span className="text-primary">{'"temp_c="'}</span>
              {');\n  Serial.'}
              <span className="text-foreground">println</span>
              {'(tempC, 2);\n  '}
              <span className="text-foreground">delay</span>
              {'('}
              <span className="text-primary">1000</span>
              {');\n}'}
            </code>
          </pre>
        </Reveal>
      </div>
    </section>
  )
}
