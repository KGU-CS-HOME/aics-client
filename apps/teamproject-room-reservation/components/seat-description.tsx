import { ArrowUpIcon } from '@radix-ui/react-icons'

function SeatDescription() {
  return (
    <section className="flex w-full justify-between text-sm md:text-lg">
      <div className="flex w-24 items-center px-4">
        <ArrowUpIcon className="size-6" />
        <p className="font-semibold">입구</p>
      </div>

      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <div className="bg-slate size-4 rounded-full bg-slate-900"></div>
          <p className="font-semibold">이용가능</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="size-4 rounded-full bg-red-600"></div>
          <p className="font-semibold">이용중 / 이용불가</p>
        </div>
      </div>
    </section>
  )
}

export { SeatDescription }
