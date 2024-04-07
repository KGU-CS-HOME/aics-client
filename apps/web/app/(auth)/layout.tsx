import Image from 'next/image'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">{children}</div>
      <div className="bg-muted hidden lg:block">
        <Image
          src="/images/university.webp"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
