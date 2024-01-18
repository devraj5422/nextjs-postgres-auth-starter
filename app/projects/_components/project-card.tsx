import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

const Projectcard = () => {
  return (
    <Card className="relative bg-[#232639] border-purple-300">
      <Image
        src="https://fastly.picsum.photos/id/757/600/400.jpg?hmac=rAOVQk19ZLQQsGTifnZgKPlQg9hjj9V-2xXJEw0N7V8"
        alt=""
        width="300"
        height="100"
        className="rounded-t-lg"
      />

      <CardHeader>
        <Image
          src="https://fastly.picsum.photos/id/961/600/400.jpg?hmac=A0ABh__SSWwwHjxka8-I3d06iZ0HVE6x3rpIzeVI7Uw"
          alt=""
          width="70"
          height="70"
          className="absolute top-44 rounded-sm border-2 border-black border-solid"
        />
        <Badge className="absolute top-0 right-3">Allowist Closed</Badge>
        <CardTitle className="text-white">Citizen Conflict</CardTitle>
        <CardDescription>Real you is not enough</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-white">
          <div>Fundraiser Goal</div>$650,000
        </div>
        <div className="flex justify-between text-white">
          <div>Max allocation</div>TBA
        </div>
      </CardContent>
      <div className="text-center bg-[#2b2f4b] rounded-b-lg text-purple-300">
        Token sale
      </div>
    </Card>
  )
}

export default Projectcard
