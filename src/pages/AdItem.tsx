import { FunctionComponent, useEffect } from "react";

const AdItem: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div
      className="relative rounded-[10px] bg-white shadow-[0px_4px_20px_-20px_rgba(0,_0,_0,_0.25)] w-full h-[569px] overflow-hidden flex flex-col p-[20px] box-border items-center justify-center gap-[14px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] min-w-[320px] max-w-[460px] text-left text-base text-black font-dm-sans"
      data-animate-on-scroll
    >
      <img
        className="self-stretch flex-1 relative rounded-[12px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="../cover@2x.png"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[25px]">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="relative w-[24px] h-[24px] shrink-0">
              <img
                className="absolute top-[0px] left-[0px] rounded-[8px] w-[24px] h-[24px] object-cover"
                alt=""
                src="../rectangle-47@2x.png"
              />
            </div>
            <div className="relative w-[137px] h-[18px] shrink-0">
              <div className="absolute top-[0px] left-[0px] font-medium inline-block">
                By Ape Vision GmbH
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[6px] text-right text-[10px]">
            <img
              className="relative w-[16px] h-[16px] shrink-0 overflow-hidden"
              alt=""
              src="../shieldcheck.svg"
            />
            <div className="relative font-medium inline-block">Verified</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-[12px] text-green">
          <div className="flex flex-row items-center justify-start gap-[9px]">
            <img
              className="relative w-[6px] h-[6px] shrink-0"
              alt=""
              src="../ellipse-9.svg"
            />
            <b className="relative tracking-[-0.02em] leading-[150%] capitalize flex items-center w-[165px] shrink-0">
              Active till 28. November 2022
            </b>
          </div>
          <h1 className="m-[0] self-stretch relative text-[18px] tracking-[-0.02em] leading-[160%] capitalize font-bold font-inherit text-black inline-block">
            helps doctors measure, monitor, and predict their patients' lung
            health
          </h1>
        </div>
        <footer className="flex flex-row items-center justify-start gap-[18px] text-right text-base text-black font-dm-sans">
          <div className="w-[108px] shrink-0 flex flex-row items-center justify-start gap-[10px] z-[1]">
            <img
              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
              alt=""
              src="../users.svg"
            />
            <div className="relative tracking-[-0.02em] leading-[150%] capitalize inline-block">
              <b>{`47 `}</b>
              <span className="font-medium text-gray">Investors</span>
            </div>
          </div>
          <div className="w-[152px] shrink-0 flex flex-row items-start justify-start gap-[10px] z-[0] text-left">
            <img
              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
              alt=""
              src="../moneybag.svg"
            />
            <div className="relative tracking-[-0.02em] leading-[150%] capitalize flex items-center">
              <span className="[line-break:anywhere] w-full">
                <b>{`89.721 USDT `}</b>
                <span className="font-medium text-gray">Raised</span>
              </span>
            </div>
          </div>
        </footer>
        <button className="cursor-pointer [border:none] p-[10px_0px] bg-[transparent] self-stretch rounded-[12px] [background:linear-gradient(-59.35deg,_#40bc5d,_#50d76f)] shadow-[0px_5px_20px_rgba(64,_188,_93,_0.4)] h-[46px] shrink-0 flex flex-col box-border items-center justify-center">
          <b className="relative text-[16px] tracking-[-0.02em] leading-[150%] inline-block font-dm-sans text-white text-center">
            Invest Now
          </b>
        </button>
      </div>
    </div>
  );
};

export default AdItem;
