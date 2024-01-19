import { MenuIcon } from 'lucide-react'
import { Button } from '../ui/button'
import Navigationmenu from './navigation'

const Navbar = () => {
  return (
    <div className="flex justify-between bg-[#0e1420] p-3">
      <div className="text-white p-3 text-3xl font-bold hidden md:block">Polkastarter</div>
      <div className="text-white p-3 text-3xl font-bold md:hidden">P</div>
      {/* <Navigationmenu/> */}
      <div className="p-3 flex items-center gap-3">
        {' '}
        <Button variant="connectwallet">Connect wallet</Button>
        <MenuIcon className='text-gray-400 cursor-pointer'/>

      </div>
    </div>
  )
}

export default Navbar
