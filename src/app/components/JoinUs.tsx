

function RegisterButton() {
  return (
    <div className="bg-[#5b6cff] inline-flex items-center justify-center px-6 py-4 rounded-full cursor-pointer hover:bg-blue-600 transition-colors mt-8 relative group">
      <div className="font-['Inter',sans-serif] font-normal text-[16px] text-center text-white relative z-10">
        Register
      </div>
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_1px_1px_1px_0px_rgba(255,255,255,0.25)] pointer-events-none" />
    </div>
  );
}

function MarketingContent() {
  return (
    <div className="relative z-10 flex flex-col items-start max-w-[800px]">
      {/* Date tag */}
      <div className="inline-flex items-center px-4 py-2 border border-white rounded-full mb-6">
        <p className="font-['Instrument_Sans',sans-serif] font-normal text-[11px] text-white">December 21, 2022</p>
      </div>

      {/* Title */}
      <h3 className="font-['Instrument_Sans',sans-serif] font-normal text-[48px] leading-[1.1] text-white tracking-[-2px] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
        Attention-Grabbing Marketing in a Noisy Market
      </h3>

      <RegisterButton />
    </div>
  );
}

function FeatureBox() {
  return (
    <div className="w-full border-t-2 border-r-2 border-white rounded-tr-[56px] p-8 md:p-12 relative flex flex-col md:flex-row gap-8 min-h-[500px]">
      <div className="flex-1">
        <MarketingContent />
      </div>

      {/* Image Side */}
      <div className="flex-1 relative rounded-lg overflow-hidden bg-gray-800 min-h-[300px]">
        {/* Placeholder or Image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          Event Image
        </div>
      </div>
    </div>
  )
}

function JoinUsText() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end w-full mb-12" data-aos="fade-up">
      <div className="font-['Instrument_Sans',sans-serif] font-normal text-[56px] md:text-[105px] text-white tracking-[-2px] md:tracking-[-5px] leading-[1]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Join us
      </div>
      {/* All events button */}
      <div className="hidden md:flex items-center justify-center px-6 py-4 border border-white/20 rounded-full cursor-pointer hover:bg-white/10 transition-colors">
        <p className="font-['Instrument_Sans',sans-serif] font-normal text-[16px] text-white">All events</p>
      </div>
    </div>
  )
}

export function JoinUs() {
  return (
    <div className="relative bg-[#1d1d1d] w-full max-w-[1440px] mx-auto px-4 md:px-[80px] py-[100px]">
      <div className="relative h-full flex flex-col justify-start">
        <JoinUsText />
        <div className="mt-[50px] md:mt-[100px]" data-aos="fade-up" data-aos-delay="200">
          <FeatureBox />
        </div>
      </div>
    </div>
  );
}
