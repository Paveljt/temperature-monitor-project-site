import { GraduationCap } from 'lucide-react'
import { GithubIcon } from '@/components/github-icon'
import { Reveal } from '@/components/reveal'
import { site } from '@/lib/site'

export function AboutMe() {
  return (
    <section id="about" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="flex flex-col gap-8 rounded-2xl border border-border bg-card p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div className="flex max-w-2xl flex-col gap-4">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">{'// About me'}</p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Pavel Tsafack
              </h2>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <GraduationCap className="size-4 text-accent" aria-hidden="true" />
                Computer Engineering student · New Jersey Institute of Technology (NJIT)
              </p>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                I&apos;m passionate about the layer where hardware and software meet — embedded
                systems, microcontrollers, and building devices that interact with the physical
                world. I&apos;m looking for opportunities to apply these skills on real engineering
                teams.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a
                href={site.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <GithubIcon className="size-4" />
                View the repository
              </a>
              <a
                href={site.githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-foreground"
              >
                GitHub profile
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
