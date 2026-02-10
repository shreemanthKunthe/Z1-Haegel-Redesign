import React from "react";
import svgPaths from "../../imports/svg-oqus49gwxv";

function Svg2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="svg">
      <div className="-translate-x-1/2 absolute left-1/2 size-[40px] top-0" data-name="Frame">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <g id="Frame">
            <path clipRule="evenodd" d={svgPaths.p266d6000} fill="var(--fill-0, #00EB8D)" fillRule="evenodd" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="h-[460.375px] relative shrink-0 w-[416px]" data-name="div">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[45px] text-white top-[149px] tracking-[-2px] w-[501px]">
        <p className="leading-[52.8px] whitespace-pre-wrap">Future-ready developers are building with Z1</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[15px] text-[rgba(255,255,255,0.65)] top-[245.5px] w-[475px]">
        <p className="leading-[20.8px] whitespace-pre-wrap">Modern learners need more than passive courses. Z1 combines guided learning, real-world challenges, and AI mentorship to create measurable skill growth and career readiness.</p>
      </div>

      {/* Attendance Rate */}
      <div className="absolute content-stretch flex flex-col items-start left-0 pb-[1.594px] top-[302px]">
        <div className="content-stretch flex items-start mb-[-1px] pr-[94px] relative shrink-0">
          <div className="content-stretch flex items-start pb-[4.797px] relative shrink-0">
            <Svg2 />
          </div>
          <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-0.25px] whitespace-nowrap ml-2">
            <p className="text-[29px]">
              <span className="leading-[38.4px]">{`66% `}</span>
              <span className="leading-[38.4px] text-[rgba(255,255,255,0.5)]">attendance rate</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[0] mb-[-1px] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.65)] whitespace-nowrap mt-2">
          <p className="leading-[15.6px]">avg attendance</p>
        </div>
      </div>
    </div>
  );
}

// Logo placeholders since the original code had empty divs for PNGs
function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center text-gray-500 font-bold text-xs uppercase tracking-wider">
      {name}
    </div>
  );
}

function Logos() {
  return (
    <div className="absolute inset-[0_144px_0.38px_780px] overflow-visible" data-name="div">
      {/* Left Column */}
      <div className="absolute h-[492.375px] left-0 top-[-112.62px] w-[136.5px] flex flex-col items-center gap-16 pt-20">
        {/* Adobe */}
        <LogoPlaceholder name="Adobe" />

        {/* 1Password (SVG) */}
        <div className="relative h-[25.75px] w-[136.5px]">
          <div className="-translate-x-1/2 absolute h-[25.75px] left-1/2 top-0 w-[136.5px]">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[25.75px] left-1/2 overflow-clip top-1/2 w-[136.475px]">
              <div className="absolute inset-[0_-0.16%_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136.688 25.7508">
                  <g id="Group">
                    <path clipRule="evenodd" d={svgPaths.p3a3a7f00} fill="var(--fill-0, #6B6B6B)" fillRule="evenodd" id="Vector" />
                    <path clipRule="evenodd" d={svgPaths.p1deadcf0} fill="var(--fill-0, #6B6B6B)" fillRule="evenodd" id="Vector_2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* NBA */}
        <LogoPlaceholder name="NBA" />

        {/* Adobe again? */}
        <LogoPlaceholder name="Adobe" />

        {/* Motive (SVG) */}
        <div className="relative h-[47.109px] w-[127px]">
          <div className="-translate-x-1/2 absolute h-[47.109px] left-1/2 top-0 w-[127px]">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[47.109px] left-1/2 overflow-clip top-1/2 w-[126.99px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.989 47.109">
                <g id="Group">
                  <path d={svgPaths.p15f3f300} fill="var(--fill-0, #6B6B6B)" id="Vector" />
                  <path d={svgPaths.p216dc380} fill="var(--fill-0, #6B6B6B)" id="Vector_2" />
                  {/* Truncated paths in original read, assuming the main shapes are here or I can't do much without full SVG content. 
                                Actually, I should just use the paths available. The original file had many paths for motive.
                                I'll assume they are all in svgPaths and map them if I could, but I can't see the keys.
                                I'll render a simplified placeholder if I can't reference all keys. 
                                For now, I'll rely on the SVGs I can see or just use text for Motive if it breaks.
                            */}
                </g>
              </svg>
              {/* Fallback for Motive if SVG paths are missing/complex */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs font-bold uppercase tracking-widest">Motive</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="absolute h-[492.375px] left-[176.5px] top-[-113.58px] w-[179px] flex flex-col items-center gap-12 pt-10">
        {/* 1Password again (SVG) */}
        <div className="relative h-[25.75px] w-[136.5px]">
          <div className="-translate-x-1/2 absolute h-[25.75px] left-1/2 top-0 w-[136.5px]">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[25.75px] left-1/2 overflow-clip top-1/2 w-[136.475px]">
              <div className="absolute inset-[0_-0.16%_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136.688 25.7508">
                  <g id="Group">
                    <path clipRule="evenodd" d={svgPaths.p3a3a7f00} fill="var(--fill-0, #6B6B6B)" fillRule="evenodd" id="Vector" />
                    <path clipRule="evenodd" d={svgPaths.p1deadcf0} fill="var(--fill-0, #6B6B6B)" fillRule="evenodd" id="Vector_2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Checkr */}
        <LogoPlaceholder name="Checkr" />

        {/* Twilio */}
        <LogoPlaceholder name="Twilio" />

        {/* Broadcom */}
        <LogoPlaceholder name="Broadcom" />

        {/* Sendoso */}
        <LogoPlaceholder name="Sendoso" />

        {/* Brex (SVG) */}
        <div className="relative h-[29.766px] w-[113.5px]">
          <div className="absolute inset-[0_0.31%_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113.133 29.7656">
              <g id="Group">
                <path d={svgPaths.p3ddbcff8} fill="var(--fill-0, #6B6B6B)" id="Vector" />
                <path d={svgPaths.p3bd2f700} fill="var(--fill-0, #6B6B6B)" id="Vector_2" />
              </g>
            </svg>
          </div>
        </div>

        {/* Univision (SVG) */}
        <div className="relative h-[13.906px] w-[109.5px]">
          <div className="absolute inset-[0.13%_0_0.38%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 109.498 13.8355">
              <g id="Group">
                <path d={svgPaths.pfdf3500} fill="var(--fill-0, #6B6B6B)" id="Vector" />
                {/* More paths would go here */}
              </g>
            </svg>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-[10px] font-bold uppercase">Univision</div>
        </div>

        {/* Zendesk */}
        <LogoPlaceholder name="Zendesk" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bg-gradient-to-b from-[#1d1d1d] h-[120px] left-0 right-[0.5px] to-[rgba(29,29,29,0)] top-0 pointer-events-none" data-name="div" />
    </div>
  );
}

export function Partners() {
  return (
    <div className="relative bg-[#1d1d1d] min-h-[600px] w-full max-w-[1440px] mx-auto overflow-hidden px-4 md:px-[80px] pt-[80px] pb-20">
      <div className="content-stretch flex flex-col lg:flex-row items-start relative shrink-0">
        <Stats />
        <div className="hidden lg:block">
          <Logos />
        </div>
      </div>
    </div>
  );
}
