import { ImageCarousel } from '../../components/image-carousel'
import { RecentNotices } from '../../components/recent-notices'

export default function Page(): JSX.Element {
  return (
    <div className="container flex max-w-screen-2xl flex-col gap-8">
      <ImageCarousel />
      <RecentNotices />
    </div>
  )
}
