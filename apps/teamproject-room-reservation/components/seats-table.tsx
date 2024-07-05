'use client'

import { Card, CardContent, CardFooter } from '@ui/components/ui/card'
import { useState } from 'react'

import { SEAT_DATA } from '~/app/constants/seat'
import { Seat } from './seat'
import { SeatDescription } from './seat-description'

function SeatsTable() {
  const [seats, setSeats] = useState(SEAT_DATA)
  return (
    <Card className="flex flex-col items-center pt-8">
      <CardContent className="flex w-full justify-evenly">
        <div className="flex h-full flex-col gap-1 self-center">
          {seats.slice(5, 12).map((seat, index) => (
            <Seat
              key={index}
              seatNum={seat.seatNum}
              isReserved={seat.isReserved}
              isBlocked={seat.isBlocked}
              isDisabled={seat.isReserved || seat.isBlocked}
            />
          ))}
        </div>

        <div className="flex flex-col justify-evenly gap-1">
          <div className="flex justify-center gap-1">
            {seats
              .slice(0, 5)
              .reverse()
              .map((seat, index) => (
                <Seat
                  key={index}
                  seatNum={seat.seatNum}
                  isReserved={seat.isReserved}
                  isBlocked={seat.isBlocked}
                  isDisabled={seat.isReserved || seat.isBlocked}
                />
              ))}
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="flex gap-1">
              {seats
                .slice(16, 20)
                .reverse()
                .map((seat, index) => (
                  <Seat
                    key={index}
                    seatNum={seat.seatNum}
                    isReserved={seat.isReserved}
                    isBlocked={seat.isBlocked}
                    isDisabled={seat.isReserved || seat.isBlocked}
                  />
                ))}
            </div>
            <div className="flex gap-1">
              {seats.slice(20, 24).map((seat, index) => (
                <Seat
                  key={index}
                  seatNum={seat.seatNum}
                  isReserved={seat.isReserved}
                  isBlocked={seat.isBlocked}
                  isDisabled={seat.isReserved || seat.isBlocked}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="flex gap-1">
              {seats.slice(24, 28).map((seat, index) => (
                <Seat
                  key={index}
                  seatNum={seat.seatNum}
                  isReserved={seat.isReserved}
                  isBlocked={seat.isBlocked}
                  isDisabled={seat.isReserved || seat.isBlocked}
                />
              ))}
            </div>

            <div className="flex gap-1">
              {seats.slice(28, 32).map((seat, index) => (
                <Seat
                  key={index}
                  seatNum={seat.seatNum}
                  isReserved={seat.isReserved}
                  isBlocked={seat.isBlocked}
                  isDisabled={seat.isReserved || seat.isBlocked}
                />
              ))}
            </div>
          </div>

          <div className="flex items-end justify-center gap-1">
            {seats
              .slice(12, 16)
              .reverse()
              .map((seat, index) => (
                <Seat
                  key={index}
                  seatNum={seat.seatNum}
                  isReserved={seat.isReserved}
                  isBlocked={seat.isBlocked}
                  isDisabled={seat.isReserved || seat.isBlocked}
                />
              ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-1">
          {seats.slice(32).map((seat, index) => (
            <Seat
              key={index}
              seatNum={seat.seatNum}
              isReserved={seat.isReserved}
              isBlocked={seat.isBlocked}
              isDisabled={seat.isReserved || seat.isBlocked}
              team
            />
          ))}
        </div>
      </CardContent>
      <CardFooter className="w-full">
        <SeatDescription />
      </CardFooter>
    </Card>
  )
}

export { SeatsTable }
