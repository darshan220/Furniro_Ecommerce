import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-[505px] pr-20 pt-10 pl-20 border-t border-zinc-300 text-2xl font-medium">
    <div className="flex w-full pb-8">
      <div className="w-2/4">
        <h2 className="font-bold text-2xl md:self-start">Furniro.</h2>
        <div className="md:self-start text-neutral-400 text-base pt-12">
          <p>400 University Drive Suite 200 Coral Gables</p>
          <p>FL 33134 USA</p>
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-12">
        <div className="text-neutral-400 text-base">Links</div>
        <div className="text-base">Home</div>
        <div className="text-base">Shop</div>
        <div className="text-base">About</div>
        <div className="text-base">Contact</div>
      </div>
      <div className="w-1/2 flex flex-col gap-12">
        <div className="text-neutral-400 text-base">Help</div>
        <div className="text-base">Payment Options</div>
        <div className="text-base">Returns</div>
        <div className="text-base">Privacy Policies</div>
      </div>
      <div className="w-1/2 flex flex-col gap-12">
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
    <div className="border-t border-zinc-300 pt-8">
      <span className="text-base font-normal">
        2023 furino. All rights reverved
      </span>
    </div>
  </div>
  )
}

export default Footer