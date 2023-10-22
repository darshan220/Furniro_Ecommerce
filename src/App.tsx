import Header from "./components/Header/Header";
import { sideImages, sofaInfo } from "./utils/constants";

import star from "./ui/star.png";
import mainSofa from "./ui/sofaImages/mainSofa.svg";
import starHalf from "./ui/star-half.png";
import cloudSofaLeft from "./ui/cloudSofa/cloudSofaLeft.png";
import cloudSofaRight from "./ui/cloudSofa/cloudSofaRight.png";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Cards";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

function App() {
  return (
    <>
      <Header />
      <div className="w-full h-[100px] bg-orange-50">
        <div className="flex items-center h-full gap-x-8 pl-20">
          <span className="text-neutral-400">Home</span>
          <span>&gt;</span>
          <span className="text-neutral-400">shop</span>
          <span>&gt;</span>
          <span>|</span>
          <span>Asgaard sofa</span>
        </div>
      </div>
      <div className="w-full h-[820px] flex">
        <div className="w-2/4 pl-20 pt-8 flex gap-8">
          <div className="flex flex-col gap-4">
            {sideImages.map((item) => (
              <div className="w-[76px] h-20 bg-zinc-300 rounded-lg">
                <span key={item.id}>
                  <img src={item.src} alt={item.alt} className="h-20" />
                </span>
              </div>
            ))}
          </div>
          <div className="flex w-[423px] h-[430px] bg-orange-50 rounded-lg">
            <img src={mainSofa} alt="mainSofa" />
          </div>
        </div>
        <div className="w-2/4 pt-8 flex flex-col gap-4">
          <div className="text-[42px] font-normal">Asgaard sofa</div>
          <div className="text-neutral-400 text-2xl font-medium">
            Rs. 250,000.00
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-row gap-2 h-5">
              <img src={star} alt="star" className="w-5" />
              <img src={star} alt="star" className="w-5" />
              <img src={star} alt="star" className="w-5" />
              <img src={star} alt="star" className="w-5" />
              <img src={starHalf} alt="star" className="w-5" />
            </div>
            <div>|</div>
            <div>Asgaard sofa</div>
          </div>
          <div className="w-[424px] break-words">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </div>
          <div className="text-neutral-400 text-sm">Size</div>
          <div className="flex flex-row gap-4">
            <div className="w-[30px] h-[30px] bg-yellow-600 rounded-[5px] pt-0.5 pl-2.5 hover:text-white">
              L
            </div>
            <div className="w-[30px] h-[30px] bg-yellow-600 rounded-[5px] pt-0.5 pl-1.5 hover:text-white">
              XL
            </div>
            <div className="w-[30px] h-[30px] bg-yellow-600 rounded-[5px] pt-0.5 pl-1.5 hover:text-white">
              XS
            </div>
          </div>
          <div className="text-neutral-400 text-sm">Color</div>
          <div className="flex flex-row gap-4">
            <div className="w-[30px] h-[30px] bg-violet-500 rounded-[50px]" />
            <div className="w-[30px] h-[30px] bg-black rounded-[50px]" />
            <div className="w-[30px] h-[30px] bg-yellow-600 rounded-[50px]" />
          </div>
          <div className="flex flex-row gap-4">
            <button className="w-[123px] h-16 bg-white border border-gray-400 rounded-lg px-3 py-2">
              - 1 +
            </button>
            <button className="w-[215px] h-16 text-xl bg-white border border-gray-400 rounded-lg px-3 py-2">
              Add to Cart
            </button>
            <button className="w-[215px] h-16 text-xl bg-white border border-gray-400 rounded-lg px-3 py-2">
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
      <div className="w-full h-[744px] border-t border-zinc-300">
        <div className="gap-16 flex items-center justify-center h-[120px] text-2xl font-medium">
          <span>Description</span>
          <span className="text-neutral-400">Additional Information</span>
          <span className="text-neutral-400">Reviews [5]</span>
        </div>
        <div className="flex flex-col items-center mx-96 text-neutral-400">
          <p className="mb-4">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
        <div className="flex pt-8 justify-center gap-8">
          <img src={cloudSofaLeft} alt="cloudSofaLeft" className="h-348" />
          <img src={cloudSofaRight} alt="cloudSofaRight" className="h-348" />
        </div>
      </div>
      <Cards />
      <Footer />
    </>
  );
}

export default App;
