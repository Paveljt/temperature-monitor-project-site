import { Thermometer } from 'lucide-react'
import { GithubIcon } from '@/components/github-icon'
import { site } from '@/lib/site'

const links = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#technologies', label: 'Stack' },
  { href: '#features', label: 'Features' },
  { href: '#learned', label: 'Learnings' },
  { href: '#about', label: 'About' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-medium">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Thermometer className="size-4" aria-hidden="true" />
          </span>
          temp-monitor
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={site.githubRepoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm transition-colors hover:border-primary hover:text-primary"
        >
          <GithubIcon className="size-4" />
          <span>Repo</span>
        </a>
      </div>
    </header>
  )
}
