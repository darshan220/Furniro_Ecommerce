import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

import mainSofa from "../../ui/sofaImages/mainSofa.svg";
import { sideImages, sofaInfo } from "../../utils/constants";
import StarRating from "../Star/StarRating";
import SelectSize from "../Size/SelectSize";

const Product = () => {
  return (
    <>
      <div className="w-full h-[100px] bg-orange-50">
        <div className="flex items-center h-full gap-x-8 lg:pl-20 max-md:justify-center">
          <span className="text-neutral-400">Home</span>
          <span>&gt;</span>
          <span className="text-neutral-400">shop</span>
          <span>&gt;</span>
          <span>|</span>
          <span>Asgaard sofa</span>
        </div>
      </div>
      <div className="w-full h-full flex flex-col md:flex-row">
        <div className="w-full lg:w-2/4 lg:pl-20 lg:pt-8 flex gap-8 md:flex-row max-md:flex-col-reverse max-md:pt-4">
          <div className="flex max-md:justify-center lg:flex-col flex-row gap-4">
            {sideImages.map((item) => (
              <img
                src={item.src}
                alt={item.alt}
                className="w-[76px] h-20 bg-zinc-300 rounded-lg"
              />
            ))}
          </div>
          <div className="flex max-md:m-8 lg:w-[423px] h-[430px] bg-orange-50 rounded-lg">
            <img src={mainSofa} alt="mainSofa" />
          </div>
        </div>
        <div className="w-full lg:w-2/4  pt-8 flex flex-col gap-4 max-md:p-2">
          <div className="text-[42px] font-normal">Asgaard sofa</div>
          <div className="text-neutral-400 text-2xl font-medium">
            Rs. 250,000.00
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-row gap-2 h-5">
              <StarRating rating={4.5} />
            </div>
            <div>|</div>
            <div>Asgaard sofa</div>
          </div>
          <div className="w-full break-words">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </div>
          <div className="text-neutral-400 text-sm">Size</div>
          <div className="flex flex-row gap-4">
            <SelectSize text={"L"} />
            <SelectSize text={"XL"} />
            <SelectSize text={"XS"} />
          </div>
          <div className="text-neutral-400 text-sm">Color</div>
          <div className="flex flex-row gap-4">
            <div className="w-[30px] h-[30px] bg-violet-500 rounded-[50px]" />
            <div className="w-[30px] h-[30px] bg-black rounded-[50px]" />
            <div className="w-[30px] h-[30px] bg-yellow-600 rounded-[50px]" />
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <button className="w-full md:w-[123px] h-16 bg-white border border-gray-400 rounded-lg px-3 py-2">
              - 1 +
            </button>
            <button className="w-full md:w-[215px] h-16 text-xl bg-white border border-gray-400 rounded-lg px-3 py-2">
              Add to Cart
            </button>
            <button className="w-full md:w-[215px] h-16 text-xl bg-white border border-gray-400 rounded-lg px-3 py-2">
              + Compare
            </button>
          </div>
          <div className="p-4 border-t border-zinc-300 flex flex-col gap-4">
            {sofaInfo.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-full flex items-center text-neutral-400"
                >
                  <div className="w-20">{item.title}</div>
                  <div className="">:&nbsp;{item.info}</div>
                </div>
              );
            })}
            <div className="w-full flex items-center">
              <div className="w-20 text-neutral-400">Share</div>
              <div className="flex gap-4">
                :&nbsp;
                <FaFacebook />
                <FaLinkedin />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
