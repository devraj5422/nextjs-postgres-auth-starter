import * as React from 'react'



const Homepagecard = ({ title, description }: any) => {
  return (
    <div className="bg-gradient-to-r from-[#7381ed]  to-[#67e3ff] rounded-md p-0.5">
      <div className="bg-gradient-to-b from-[#1b2676] to-[#170c0cf1] text-center justify-center items-center flex flex-col text-white h-[120px] rounded-md ">
        <div className="font-bold text-2xl">{title}</div>
        <div className="text-gray-600">{description}</div>
      </div>
    </div>
  )
}

export default Homepagecard


