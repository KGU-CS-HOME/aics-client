import KGULogo from '~/assets/svgs/kgu_logo.svg'

function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary py-8">
      <div className="text-primary-foreground container flex max-w-screen-2xl flex-col gap-4 text-balance text-center leading-loose md:text-left">
        <KGULogo className="mx-auto w-20 md:mx-0" />
        <p className="text-lg font-bold">경기대학교 AI컴퓨터공학부</p>
        <p className="text-sm font-medium">
          경기도 수원시 영통구 광교산로 154-42 육영관 8508호
          <br />
          031-249-9670
        </p>
        <p className="text-sm font-medium">
          © {year} KGU AI Computer Science Dept. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export { SiteFooter }
