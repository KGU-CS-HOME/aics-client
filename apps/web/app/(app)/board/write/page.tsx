import { PlateEditor } from '@repo/ui/components/plate-editor'

export default function Page(): JSX.Element {
  return (
    <div className="container flex max-w-screen-2xl flex-col gap-8">
      <PlateEditor />
    </div>
  )
}
