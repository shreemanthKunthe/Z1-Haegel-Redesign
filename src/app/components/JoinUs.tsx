import React from "react";

function RegisterButton() {
  return (
    <div className="absolute bg-[#5b6cff] content-stretch flex items-start left-0 pb-[25px] pl-[23px] pr-[22.344px] pt-[23px] rounded-[64px] top-[176.78px] cursor-pointer hover:bg-blue-600 transition-colors" data-name="a">
      <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[0px]">Register</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1px_1px_1px_0px_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function MarketingContent() {
  return (
    <div className="h-[224.781px] relative shrink-0 w-[804px]" data-name="div">
      {/* Date tag */}
      <div className="absolute content-stretch flex items-start left-0 pb-[9.188px] pl-[13px] pr-[13.313px] pt-[8px] rounded-[32px] top-0" data-name="div">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[32px]" />
        <div className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[13.2px]">December 21, 2022</p>
        </div>
      </div>

      {/* Title */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-0 text-[48px] text-white top-[98.19px] tracking-[-2px] w-[787.747px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[52.8px] whitespace-pre-wrap">Attention-Grabbing Marketing in a Noisy Market</p>
      </div>

      <RegisterButton />
    </div>
  );
}

function MarketingSection() {
  return (
    <div className="content-stretch flex items-start pb-[177.219px] pr-[442px] relative shrink-0" data-name="div">
      <MarketingContent />
      {/* Image placeholder for 638f985c2aa8d8cea27549ab_Frame%2033058-p-500.jpg */}
      <div className="absolute inset-[0_0_0_844px] bg-gray-800 rounded-lg overflow-hidden">
        {/* Fallback visual since image is missing */}
        <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">Event Image</div>
      </div>
    </div>
  );
}

function FeatureBox() {
  return (
    <div className="content-stretch flex h-[558px] items-start pr-[34px] pt-[34px] relative rounded-tr-[56px] shrink-0" data-name="div">
      <div aria-hidden="true" className="absolute border-r-2 border-solid border-t-2 border-white inset-0 pointer-events-none rounded-tr-[56px]" />
      <MarketingSection />
    </div>
  )
}

function JoinUsText() {
  return (
    <div className="h-[115.188px] relative shrink-0 w-[1280px]" data-name="div">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-0 text-[105px] text-white top-[57px] tracking-[-5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[115.2px]">Join us</p>
      </div>
      {/* All events button */}
      <div className="absolute bottom-0 content-stretch flex items-start left-[1160.27px] pb-[26px] pl-[22px] pr-[23.734px] pt-[24px] rounded-[64px] cursor-pointer hover:bg-white/10 transition-colors" data-name="a">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[64px]" />
        <div className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[0px]">All events</p>
        </div>
      </div>
    </div>
  )
}

export function JoinUs() {
  return (
    <div className="relative bg-[#1d1d1d] w-full max-w-[1440px] mx-auto overflow-hidden px-4 md:px-[80px]">
      <div className="content-stretch flex flex-col gap-[48px] md:gap-[96px] items-start py-[72px] md:py-[144px] relative shrink-0">
        <JoinUsText />
        <FeatureBox />
      </div>
    </div>
  );
}
