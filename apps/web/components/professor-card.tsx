import { Avatar, AvatarImage } from '@repo/ui/components/ui/avatar'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card'
import type { Professor } from '../data/professors'

function ProfessorCard({ professor }: { professor: Professor }) {
  return (
    <Card>
      <CardHeader className="items-center">
        <Avatar className="h-32 w-32">
          <AvatarImage
            src={`https://kutis.kyonggi.ac.kr/webkutis/TransferImageStreamHJ.do?gyosu_no=${professor.id}`}
            className="object-cover"
            draggable="false"
          />
        </Avatar>
      </CardHeader>
      <CardContent className="text-center">
        <CardTitle className="mb-2">{professor.name} 교수</CardTitle>
        <p>{professor.contact}</p>
        <p>{professor.email}</p>
      </CardContent>
    </Card>
  )
}

export { ProfessorCard }
