import { Link } from 'next-view-transitions'

import { SignInForm } from '~/components/sign-in-form'

export default function SignIn() {
  return (
    <div className="mx-auto grid w-[350px] gap-6 p-8 lg:p-0">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">로그인</h1>
        <p className="text-muted-foreground text-balance">
          경기대학교 AI컴퓨터공학부
        </p>
      </div>
      <SignInForm />
      <div className="mt-4 text-center text-sm">
        아직 계정이 없으신가요?{' '}
        <Link href="/signup" className="underline">
          회원가입
        </Link>
      </div>
    </div>
  )
}
