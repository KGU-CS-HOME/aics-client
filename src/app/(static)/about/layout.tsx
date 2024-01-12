import { Card, CardHeader } from '@/components/ui/card'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Card className="flex h-[300px] flex-col items-center justify-center bg-gradient-to-b from-muted/50 to-muted p-4">
        <CardHeader>
          <h1 className="text-5xl font-bold">학부소개</h1>
        </CardHeader>
      </Card>
      <div className="flex flex-col justify-between px-2 pt-10 lg:flex-row">
        <div className="">메뉴</div>
        <div className="w-full max-w-screen-lg">{children}</div>
      </div>
    </>
  )
}
