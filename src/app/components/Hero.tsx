import React from "react";
import svgPaths from "../../imports/svg-oqus49gwxv";
import imgBentoGrid from "../../assets/47f541c0e046bff0b94914a0e76c698fbcd23347.png";

function BackgroungLines4() {
  return (
    <div className="absolute h-[973px] left-0 top-[-39px] w-[1440px] pointer-events-none" data-name="Backgroung Lines">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440.53 973">
        <g id="Backgroung Lines">
          <line id="Line 1" stroke="var(--stroke-0, #DFDFDF)" x1="0.264999" x2="1440.27" y1="72.5762" y2="972.576" />
          <line id="Line 2" stroke="var(--stroke-0, #DFDFDF)" transform="matrix(0.847998 -0.529999 -0.529999 -0.847998 0 900)" x2="1698.12" y1="-0.5" y2="-0.5" />
        </g>
      </svg>
    </div>
  );
}

function BackgroungOllaps4() {
  return (
    <div className="absolute left-[calc(8.33%+55px)] size-[1090px] top-[-62px] pointer-events-none" data-name="Backgroung Ollaps">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1090 1090">
        <g id="Backgroung Ollaps">
          <circle cx="545" cy="545" id="Ellipse 3" r="544.5" stroke="var(--stroke-0, #DFDFDF)" />
          <circle cx="544.5" cy="545.5" id="Ellipse 2" r="328" stroke="var(--stroke-0, #DFDFDF)" />
        </g>
      </svg>
    </div>
  );
}

function Backgroung4() {
  return (
    <div className="absolute contents left-0 top-[-62px]" data-name="Backgroung">
      <BackgroungLines4 />
      <BackgroungOllaps4 />
    </div>
  );
}

function SocialSitesLink() {
  return (
    <div className="hidden lg:flex absolute content-stretch flex-col gap-[36px] items-start left-[67px] top-[385px] z-10" data-name="Social sites link">
      <div className="flex h-[43px] items-center justify-center relative shrink-0 w-[13px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium leading-[normal] relative text-[10px] text-black">behance</p>
        </div>
      </div>
      <div className="flex h-[33px] items-center justify-center relative shrink-0 w-[13px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium leading-[normal] relative text-[10px] text-black">twitter</p>
        </div>
      </div>
      <div className="flex h-[48px] items-center justify-center relative shrink-0 w-[13px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium leading-[normal] relative text-[10px] text-black">instagram</p>
        </div>
      </div>
      <div className="flex h-[48px] items-center justify-center relative shrink-0 w-[13px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium leading-[normal] relative text-[10px] text-black">facebook</p>
        </div>
      </div>
    </div>
  );
}

function Designer() {
  return (
    <div className="hidden lg:block absolute right-[45px] top-[50%] -translate-y-1/2 z-10" data-name="Designer">
      <div className="flex items-center justify-center rotate-90 origin-center">
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium leading-[0] relative text-[12px] text-black tracking-[0.48px] whitespace-nowrap">
          <span className="leading-[normal]">{`Designed by `}</span>
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold leading-[normal]">{` Shreemanth K`}</span>
        </p>
      </div>
    </div>
  );
}

function User() {
  return (
    <div className="size-[24px]" data-name="user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="user">
          <path d={svgPaths.p82039c0} id="Vector" stroke="var(--stroke-0, #646464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2c19cb00} id="Vector_2" stroke="var(--stroke-0, #646464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="size-[24px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.p19568f00} id="Vector" stroke="var(--stroke-0, #646464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M21 21L16.65 16.65" id="Vector_2" stroke="var(--stroke-0, #646464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavMenu() {
  return (
    <div className="flex font-['Plus_Jakarta_Sans',sans-serif] font-medium gap-[36px] items-center text-[16px] text-black" data-name="Nav menu">
      <p className="relative shrink-0 cursor-pointer hover:text-gray-600">home</p>
      <p className="relative shrink-0 cursor-pointer hover:text-gray-600">projects</p>
      <p className="relative shrink-0 cursor-pointer hover:text-gray-600">work</p>
      <p className="relative shrink-0 cursor-pointer hover:text-gray-600">about us</p>
      <p className="relative shrink-0 cursor-pointer hover:text-gray-600">contact</p>
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute left-4 md:left-[60px] top-[40px] right-4 md:right-[60px] flex justify-between items-center z-20" data-name="Nav Bar">
      <p className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[24px] md:text-[40px] text-black">Z1</p>
      <div className="hidden md:block">
        <NavMenu />
      </div>
      <div className="flex gap-4">
        <Search />
        <User />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bg-[#ffa850] h-[29px] overflow-clip rounded-[82.069px] top-0 w-[274px] flex items-center justify-center" data-name="Button">
      <p className="font-['Poppins',sans-serif] font-semibold text-[13.131px] text-black whitespace-nowrap">Join over 1000,000 happy developers</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute top-[49px] left-0 w-full flex flex-col items-center text-center px-4">
      <p className="font-['Instrument_Sans',sans-serif] font-medium text-[28px] md:text-[48.17px] leading-[1.2] md:leading-[56.588px] tracking-[-0.9353px] w-full max-w-[681px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Build Real Skills. Launch Your Developer Career
      </p>
      <p className="font-['Albert_Sans',sans-serif] font-medium text-[14px] md:text-[18px] leading-[1.2] mt-4 md:mt-6 w-full max-w-[549px]">
        Learn by doing , guided by mentors, real-world challenges, and structured learning paths designed to take you from beginner to confident developer.
      </p>
    </div>
  );
}

function ArrowAccent1() {
  return (
    <div className="h-[13.913px] relative shrink-0 w-[10.435px]" data-name="arrow-accent">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4348 13.913">
        <g id="arrow-accent">
          <path d={svgPaths.p12663e00} fill="url(#paint0_linear_1_892)" id="accent" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_892" x1="5.21739" x2="5.21739" y1="0" y2="13.913">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#4A73E8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Primary1() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[265px] bg-[#1d1d1d] flex gap-[6.957px] items-center justify-center px-[27.826px] py-[13.913px] rounded-[6.957px] cursor-pointer hover:bg-black transition-colors" data-name="primary">
      <p className="font-['Inter',sans-serif] font-semibold text-[13.913px] text-white">Get started</p>
      <ArrowAccent1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1220px] h-[249px] px-4">
      {/* Button and Text */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-[643px] h-[249px]">
        <Button />
        <Frame4 />
      </div>

      {/* Decorative Arrow/Star thing - hide on mobile */}
      <div className="hidden lg:block absolute left-[842px] top-0 w-[191.611px] h-[184.701px] flex items-center justify-center">
        <div className="flex-none rotate-[18.63deg]">
          <div className="h-[143px] relative w-[154px]" data-name="Vector">
            <div className="absolute inset-[-0.48%_-0.45%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155.374 144.374">
                <path d={svgPaths.p34dfa00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.37366" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute top-[calc(50%-134.43px)] left-0 w-full h-[409.148px]">
      <Frame6 />
      <Primary1 />
      <div className="absolute h-[50.66px] left-[453px] top-[310px] w-[69.324px]" data-name="Vector">
        <div className="absolute inset-[-1.25%_-0.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70.593 51.9292">
            <path d={svgPaths.p788e7c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.26884" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BentoGrid() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[519px] w-full max-w-[1161px] h-auto aspect-[1161/477] px-4" data-name="Bento grid">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="Bento Grid" className="absolute h-[136.91%] left-0 max-w-none top-[-13.74%] w-full object-contain" src={imgBentoGrid} />
      </div>
      {/* Frame8 and Bento were empty/placeholders in original, but the imgBentoGrid seems to contain the visual */}
    </div>
  );
}

export function Hero() {
  return (
    <div className="relative bg-white min-h-[996px] w-full max-w-[1440px] mx-auto overflow-hidden px-4 md:px-0">
      {/* Hero Blur Background */}
      <div className="absolute inset-0 z-0">
        {/* Using a placeholder for the blur since it was a div with ID in original */}
        <div className="absolute left-[317px] top-[-280px] w-full h-full bg-blue-100/20 blur-3xl opacity-50 rounded-full mix-blend-multiply filter"></div>
      </div>

      <Backgroung4 />
      <SocialSitesLink />
      <Designer />
      <NavBar />
      <Frame7 />
      <BentoGrid />
    </div>
  );
}
