import { useState } from "react";
import cloudSofaLeft from "../../ui/cloudSofa/cloudSofaLeft.png";
import cloudSofaRight from "../../ui/cloudSofa/cloudSofaRight.png";

const ProductInfo = () => {
  const information = ["Description", "Additional Information", "Reviews [5]"];
  const [value, setValue] = useState(0);

  return (
    <>
      <div className="w-full h-full border-t border-zinc-300 max-md:p-1 lg:pb-4">
        <div className="gap-16 items-center justify-center h-[120px] text-2xl font-medium hidden lg:flex">
          <span>Description</span>
          <span className="text-neutral-400">Additional Information</span>
          <span className="text-neutral-400">Reviews [5]</span>
        </div>
        <div className="flex items-center justify-center pt-4 pb-4 text-2xl font-medium lg:hidden">
          <span
            className="text-neutral-400 pr-4"
            onClick={() => setValue(value - (1 % information.length))}
          >
            &lt;
          </span>
          <span>{information[value]}</span>
          <span
            className="text-neutral-400 pl-4"
            onClick={() => setValue((value + 1) % information.length)}
          >
            &gt;
          </span>
        </div>
        <div className="flex flex-col items-center lg:mx-96 text-neutral-400">
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
        <div className="flex flex-col lg:flex-row pt-8 justify-center gap-8">
          <img src={cloudSofaLeft} alt="cloudSofaLeft" className="h-348" />
          <img src={cloudSofaRight} alt="cloudSofaRight" className="h-348" />
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
