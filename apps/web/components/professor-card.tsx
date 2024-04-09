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
    <Card className="text-center">
      <CardHeader className="items-center">
        <Avatar className="h-32 w-32">
          <AvatarImage
            src={professor.img || 'https://placehold.co/128'}
            className="object-cover"
            draggable="false"
          />
        </Avatar>
      </CardHeader>
      <CardContent>
        <CardTitle>{professor.name}</CardTitle>
        <p className="text-muted-foreground mt-2 text-sm">{professor.type}</p>
      </CardContent>
      <CardContent className="flex flex-col gap-1">
        <p>{professor.contact}</p>
        <p>{professor.email}</p>
      </CardContent>
    </Card>
  )
}

export { ProfessorCard }
