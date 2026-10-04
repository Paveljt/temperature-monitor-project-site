'use client'

import { useEffect, useState } from 'react'

const SAMPLE_COUNT = 24
const BASE_TEMP = 23.4

function seedReadings() {
  return Array.from({ length: SAMPLE_COUNT }, (_, i) =>
    Number((BASE_TEMP + Math.sin(i / 3) * 0.6).toFixed(2)),
  )
}

function formatTime(ms: number) {
  const totalSeconds = Math.floor(ms / 1000)
  const m = String(Math.floor(totalSeconds / 60)).padStart(2, '0')
  const s = String(totalSeconds % 60).padStart(2, '0')
  return `${m}:${s}`
}

export function SerialMonitor() {
  const [readings, setReadings] = useState<number[]>(seedReadings)
  const [tick, setTick] = useState(SAMPLE_COUNT)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      setReadings((prev) => {
        const last = prev[prev.length - 1]
        const drift = (BASE_TEMP - last) * 0.15 + (Math.random() - 0.5) * 0.5
        return [...prev.slice(1), Number((last + drift).toFixed(2))]
      })
      setTick((t) => t + 1)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const current = readings[readings.length - 1]
  const min = Math.min(...readings)
  const max = Math.max(...readings)
  const range = Math.max(max - min, 0.5)
  const points = readings
    .map((value, i) => {
      const x = (i / (SAMPLE_COUNT - 1)) * 100
      const y = 36 - ((value - min) / range) * 32
      return `${x.toFixed(2)},${y.toFixed(2)}`
    })
    .join(' ')

  const log = readings.slice(-5).map((value, i) => ({
    t: formatTime((tick - 4 + i) * 1000),
    value,
  }))

  return (
    <div
      className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-background"
      role="img"
      aria-label={`Simulated serial monitor showing a live temperature reading of ${current.toFixed(1)} degrees Celsius`}
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          /dev/ttyUSB0 · 9600 baud
        </div>
        <span className="font-mono text-xs text-muted-foreground">pio device monitor</span>
      </div>

      <div className="flex flex-col gap-5 p-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Current
            </p>
            <p className="font-mono text-5xl font-medium tabular-nums text-foreground md:text-6xl">
              {current.toFixed(1)}
              <span className="text-2xl text-primary md:text-3xl">{'°C'}</span>
            </p>
          </div>
          <dl className="flex gap-4 font-mono text-xs">
            <div className="flex flex-col items-end">
              <dt className="text-muted-foreground">min</dt>
              <dd className="tabular-nums text-accent">{min.toFixed(1)}</dd>
            </div>
            <div className="flex flex-col items-end">
              <dt className="text-muted-foreground">max</dt>
              <dd className="tabular-nums text-primary">{max.toFixed(1)}</dd>
            </div>
          </dl>
        </div>

        <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="h-20 w-full" aria-hidden="true">
          <polyline
            points={points}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>

        <ul className="flex flex-col gap-1 rounded-md bg-background/60 p-3 font-mono text-xs leading-relaxed">
          {log.map((row) => (
            <li key={row.t} className="flex gap-3 text-muted-foreground">
              <span>{`[${row.t}]`}</span>
              <span>
                {'temp_c='}
                <span className="text-foreground tabular-nums">{row.value.toFixed(2)}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
