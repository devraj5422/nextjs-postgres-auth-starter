import Image from 'next/image'
import { Button } from './ui/button'
import Homepagecard from './homepagecard'
import Projectcard from '@/app/projects/_components/project-card'

const Homepage = () => {
  return (
    <div>
      <div className="flex md:flex-row justify-between  flex-col">
        <div className="bg-gradient-to-r from-[#7381ed]  to-[#67e3ff] inline-block text-transparent bg-clip-text pr-10 pl-10 md:pt-16 pt-2 ">
          <div className="md:text-[64px] text-[44px] font-bold ">
            {' '}
            <span>
              {' '}
              Get early access to the <br /> ideas of tomorrow{' '}
            </span>
          </div>
          <div className="text-[#94a7c6]">
            Highly-vetted Web3 projects you can trust. Supported by
            industry-leading <br /> creators and funds.{' '}
          </div>
          <div className="pt-10">
            {' '}
            <Button variant="upcomingsales">Upcoming Sales</Button>{' '}
            <Button variant="subscribe">Subscribe</Button>
          </div>
        </div>
        <div className="p-10">
          <Image
            src="https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2Fhero_polkastarter_f8e25c77c5%2Fhero_polkastarter_f8e25c77c5.png&w=1200&q=70"
            alt="polka"
            width="400"
            height="400"
            className="animate-wiggle"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-2 p-10">
        <Homepagecard title="$49.7M" description="Raised Capital" />
        <Homepagecard title="112" description="IDEAS FUNDED" />
        <Homepagecard title="$981M" description="PROJECTS MKT CAP" />
        <Homepagecard title="35,900" description="UNIQUE PARTICIPANTS" />
      </div>

      <div className='p-10'>
        <div className='text-white font-bold text-3xl pb-4'>Upcoming on Polkastarter</div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-2'><Projectcard/>
        <Projectcard/> </div>
        
      </div>
    </div>
  )
}

export default Homepage
