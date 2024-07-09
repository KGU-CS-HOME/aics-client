import { z } from 'zod'

const signInFormSchema = z.object({
  studentId: z.string().min(1),
  password: z.string().min(1),
})

const defaultValues = {
  studentId: '',
  password: '',
}

export { signInFormSchema, defaultValues }
