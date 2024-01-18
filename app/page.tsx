import { Button } from '@/components/ui/button'
import Projectcard from './projects/_components/project-card'


export default function Page() {
  return (
    <div className="flex justify-center items-center p-10 flex-col gap-2 bg-[#0e1420] h-full">
      <Button variant="connectwallet">Connect wallet</Button>
      <Button variant="upcomingsales">Upcoming Sales</Button>
      <Button variant="subscribe">Subscribe</Button>
      <Projectcard/>
    </div>
  )
}
