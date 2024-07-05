import { Button } from '@ui/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@ui/components/ui/dialog'

interface SeatProps {
  seatNum: string
  isReserved: boolean
  isBlocked: boolean
  team?: boolean
  isDisabled: boolean
}

function Seat({
  seatNum,
  team = false,
  isReserved,
  isBlocked,
  isDisabled,
}: SeatProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={isBlocked || isReserved ? 'destructive' : 'default'}
          className={`aspect-square select-none text-xs
      ${team ? 'size-16 sm:size-24 md:size-44' : 'size-8 sm:size-10 md:size-20'}
      sm:text-sm md:text-lg`}
          disabled={isDisabled}
        >
          {seatNum}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="text-center font-bold">팀프로젝트실 이용 수칙</div>
        </DialogHeader>
        <div className="flex flex-col space-y-6">
          <ol className="mt-1 list-inside list-decimal">
            <li>좌석 사용 이후에는 자리를 정리합니다.</li>
            <li>
              뚜껑 있는 음료수 및 텀블러를 제외한 음식물은 반입금지입니다.
            </li>
            <li>
              PC 사용 시 불법 SW 및 게임 등의 프로그램을 설치하지 않습니다.
            </li>
            <li>임의적으로 냉/난방기를 조작하지 않습니다.</li>
            <li>기물이 파손되지 않도록 하고 발생 시 TA에게 알립니다.</li>
            <li>위의 사항을 위반 및 적발 시 사용이 제한 될 수 있습니다.</li>
          </ol>
          <p className="text-center font-bold">
            {seatNum}번 자리를 이용하시겠습니까?
          </p>
        </div>
        <Button type="submit">이용하기</Button>
      </DialogContent>
    </Dialog>
  )
}

export { Seat }
