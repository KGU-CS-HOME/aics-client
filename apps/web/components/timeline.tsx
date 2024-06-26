import { DotFilledIcon } from '@radix-ui/react-icons'

import { cn } from '@repo/ui/lib/utils'
import '../styles/timeline.css'

function TimelineItem({
  year,
  title,
  description,
  position = 'end',
}: {
  year?: number
  title?: string
  description?: string
  position?: 'start' | 'end'
}) {
  return (
    <li className="relative grid shrink-0 grid-cols-[var(--timeline-col-start,minmax(0,1fr))_auto_var(--timeline-col-end,minmax(0,1fr))] grid-rows-[var(--timeline-row-start,minmax(0,1fr))_auto_var(--timeline-row-end,minmax(0,1fr))] items-center justify-items-center">
      <hr className="bg-primary col-start-2 row-start-1 h-full w-1 rounded-b-full rounded-t-none border-0" />
      <div className="col-start-2 row-start-2">
        <DotFilledIcon className="h-4 w-4" />
      </div>
      <div
        className={cn(
          position === 'start'
            ? 'col-start-3 col-end-4 row-start-1 row-end-4 m-1 self-center justify-self-start md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-4 md:self-center md:justify-self-end md:text-end'
            : 'col-start-auto col-end-4 row-start-[none] row-end-4 self-center justify-self-start md:col-start-3 md:row-start-1',
          'mb-10',
        )}
      >
        <time className="font-mono italic">{year}</time>
        <div className="text-lg font-black">{title}</div>
        {description}
      </div>
      <hr className="bg-primary col-start-2 col-end-auto row-start-3 row-end-[none] h-full w-1 rounded-b-none rounded-t-full border-0" />
    </li>
  )
}

function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <ul className="timeline-snap-icon max-md:timeline-compact relative flex flex-col">
      {children}
    </ul>
  )
}

export { Timeline, TimelineItem }
