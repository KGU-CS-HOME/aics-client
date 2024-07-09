import { EndButton } from '~/components/end-button'
import { Seat } from '~/components/seat'
import { SeatsTable } from '~/components/seats-table'

export default function Page(): JSX.Element {
  return (
    <div className="container flex h-full w-full flex-col justify-items-center space-y-8">
      <SeatsTable />
      <EndButton />
    </div>
  )
}
