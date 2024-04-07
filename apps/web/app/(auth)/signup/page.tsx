import { SignUpForm } from '../../../components/sign-up-form'

export default function SignUp() {
  return (
    <div className="mx-auto grid w-[350px] gap-10 p-8 lg:p-0">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">회원가입</h1>
        <p className="text-muted-foreground text-balance">
          경기대학교 AI컴퓨터공학부
        </p>
      </div>
      <SignUpForm />
    </div>
  )
}
