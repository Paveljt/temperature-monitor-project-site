import { GithubIcon } from '@/components/github-icon'
import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          {'© '}
          {new Date().getFullYear()} Pavel Tsafack · Temperature Monitor
        </p>
        <div className="flex items-center gap-5">
          <a href="#top" className="font-mono text-xs transition-colors hover:text-foreground">
            back to top ↑
          </a>
          <a
            href={site.githubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-5" />
            <span className="sr-only">GitHub repository</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
