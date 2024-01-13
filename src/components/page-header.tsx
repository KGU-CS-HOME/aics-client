import { Card, CardHeader, CardTitle } from '@/components/ui/card'

export function PageHeader({ children }: { children: React.ReactNode }) {
  return (
    <Card className="flex flex-col items-center justify-center bg-gradient-to-b from-primary/50 to-primary p-16">
      <CardHeader>
        <CardTitle className="text-4xl">{children}</CardTitle>
      </CardHeader>
    </Card>
  )
}
