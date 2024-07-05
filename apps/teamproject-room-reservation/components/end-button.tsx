'use client'

import { useState } from 'react'

import { Button } from '@ui/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@ui/components/ui/dialog'

function EndButton() {
  const [isOccupied, setIsOccupied] = useState(true)
  return (
    isOccupied && (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="h-10 w-96 self-center md:h-12"
            variant="destructive"
          >
            이용 종료
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div className="text-center font-bold">이용 종료하기</div>
          </DialogHeader>
          <div className="flex flex-col text-center">
            <p>퇴실 전 좌석 청결 상태를 확인하여주세요.</p>
            <p>이용을 종료하시겠습니까?</p>
          </div>
          <Button type="submit">퇴실하기</Button>
        </DialogContent>
      </Dialog>
    )
  )
}

export { EndButton }
