import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-full lg:pr-20 pt-10 lg:pl-20 border-t border-zinc-300 text-2xl font-medium">
    <div className="flex justify-around pb-8 max-md:items-center max-md:gap-8 max-md:flex-col max-md:w-full">
      <div className="max-md:flex flex-col max-md:items-center">
        <h2 className="font-bold text-2xl md:self-start">Furniro.</h2>
        <div className="md:self-start text-neutral-400 text-base pt-6">
          <p>400 University Drive Suite 200 Coral Gables</p>
          <p>FL 33134 USA</p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-neutral-400 text-base">Links</div>
        <div className="text-base">Home</div>
        <div className="text-base">Shop</div>
        <div className="text-base">About</div>
        <div className="text-base">Contact</div>
      </div>
      <div className="flex flex-col gap-6 max-md:items-center">
        <div className="text-neutral-400 text-base">Help</div>
        <div className="text-base">Payment Options</div>
        <div className="text-base">Returns</div>
        <div className="text-base">Privacy Policies</div>
      </div>
      <div className="flex flex-col gap-6 ">
        <div className="text-neutral-400 text-base">NewsLetter</div>
        <div className="flex w-full gap-4">
          <input
            type="email"
            className="outline-none border-b-[1px] border-black text-sm min-w-50 bg-white"
            placeholder="Enter Your Email Address"
          />
          <button className="uppercase font-semibold border-b-[1px] border-black text-sm px-1">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div className="w-full border-t border-zinc-300 p-2">
      <span className="text-base font-normal">
        2023 furino. All rights reverved
      </span>
    </div>
  </div>
  )
}

export default Footer