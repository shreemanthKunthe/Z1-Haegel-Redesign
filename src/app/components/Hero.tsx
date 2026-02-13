import { useState } from "react";
import svgPaths from "../../imports/svg-oqus49gwxv";
import imgBentoGrid from "../../assets/47f541c0e046bff0b94914a0e76c698fbcd23347.png";
import videoSrc from "../../../Videos/Scene (3).mp4";
import { Menu, X } from "lucide-react";

function BackgroundLines() {
  return (
    <div className="absolute h-[973px] left-0 top-[-39px] w-[1440px] pointer-events-none select-none z-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440.53 973">
        <g id="Backgroung Lines">
          <line id="Line 1" stroke="var(--stroke-0, #DFDFDF)" x1="0.264999" x2="1440.27" y1="72.5762" y2="972.576" />
          <line id="Line 2" stroke="var(--stroke-0, #DFDFDF)" transform="matrix(0.847998 -0.529999 -0.529999 -0.847998 0 900)" x2="1698.12" y1="-0.5" y2="-0.5" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundCircles() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[-62px] w-[1090px] h-[1090px] pointer-events-none select-none z-0 opacity-60">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1090 1090">
        <g id="Backgroung Ollaps">
          <circle cx="545" cy="545" id="Ellipse 3" r="544.5" stroke="var(--stroke-0, #DFDFDF)" />
          <circle cx="544.5" cy="545.5" id="Ellipse 2" r="328" stroke="var(--stroke-0, #DFDFDF)" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="hidden lg:flex absolute flex-col gap-[36px] items-center left-[40px] xl:left-[67px] top-[385px] z-10">
      {['behance', 'twitter', 'instagram', 'facebook'].map((social) => (
        <div key={social} className="flex items-center justify-center shrink-0 w-[20px] h-[60px]">
          <div className="-rotate-90 whitespace-nowrap">
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[10px] text-black hover:text-gray-600 transition-colors cursor-pointer capitalize">
              {social}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function DesignerCredit() {
  return (
    <div className="hidden lg:block absolute right-[45px] top-[50%] -translate-y-1/2 z-10">
      <div className="rotate-90 origin-center whitespace-nowrap">
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[12px] text-black tracking-[0.48px] leading-[normal]">
          Designed by <span className="font-extrabold text-black">Shreemanth K</span>
        </p>
      </div>
    </div>
  );
}

function NavMenu() {
  return (
    <div className="hidden md:flex font-['Plus_Jakarta_Sans',sans-serif] font-medium gap-[36px] items-center text-[16px] text-black">
      {['home', 'projects', 'work', 'about us', 'contact'].map((item) => (
        <p key={item} className="relative shrink-0 cursor-pointer hover:text-gray-600 transition-colors">
          {item}
        </p>
      ))}
    </div>
  );
}

function UserIcon() {
  return (
    <div className="size-[24px]">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p82039c0} stroke="var(--stroke-0, #646464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2c19cb00} stroke="var(--stroke-0, #646464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="size-[24px]">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p19568f00} stroke="var(--stroke-0, #646464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M21 21L16.65 16.65" stroke="var(--stroke-0, #646464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}


function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-duration="1200"
        className="absolute top-[30px] md:top-[40px] left-0 w-full px-4 md:px-[60px] flex justify-between items-center z-50"
      >
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[24px] md:text-[40px] text-black z-50 relative">Z1</p>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavMenu />
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-4 items-center">
          <SearchIcon />
          <UserIcon />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} color="black" /> : <Menu size={24} color="black" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {['home', 'projects', 'work', 'about us', 'contact'].map((item) => (
            <p
              key={item}
              className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[24px] text-black capitalize cursor-pointer hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </>
  );
}

function ArrowIcon() {
  return (
    <div className="h-[14px] w-[10px] relative">
      <svg className="block size-full" fill="none" viewBox="0 0 10.4348 13.913">
        <path d={svgPaths.p12663e00} fill="url(#paint0_linear_1_892)" />
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

function ExecuteArrow() {
  return (
    <div className="w-[154px] h-[143px] relative rotate-[18.63deg]">
      <svg className="block size-full" fill="none" viewBox="0 0 155.374 144.374">
        <path d={svgPaths.p34dfa00} stroke="black" strokeLinecap="round" strokeWidth="1.37366" />
      </svg>
    </div>
  );
}

function ItsFreeArrow() {
  return (
    <div className="w-[70px] h-[52px] relative">
      <svg className="block size-full" fill="none" viewBox="0 0 70.593 51.9292">
        <path d={svgPaths.p788e7c0} stroke="black" strokeLinecap="round" strokeWidth="1.26884" />
      </svg>
    </div>
  )
}

export function Hero() {
  return (
    <div className="relative bg-white min-h-[1100px] w-full max-w-[1440px] mx-auto overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Blur effect */}
        <div className="absolute left-[317px] top-[-280px] w-full h-full bg-blue-100/20 blur-3xl opacity-50 rounded-full mix-blend-multiply pointer-events-none"></div>
        <BackgroundLines />
        <BackgroundCircles />
      </div>

      <SocialIcons />
      <DesignerCredit />
      <NavBar />

      <main className="relative z-10 flex flex-col items-center justify-center pt-[110px] sm:pt-[130px] md:pt-[200px] px-4 text-center">

        {/* Top Badge */}
        <div className="relative mb-8">
          <div className="bg-[#ffa850] rounded-full px-6 py-1.5 overflow-hidden">
            <p className="font-['Poppins',sans-serif] font-semibold text-[13px] text-black whitespace-nowrap">
              Join over 1,000,000 happy developers
            </p>
          </div>
        </div>

        {/* Hero Text */}
        <div className="relative max-w-[700px] mb-8">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-['Instrument_Sans',sans-serif] font-medium text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.9px] text-black"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Build Real Skills. Launch Your Developer Career
          </h1>

          {/* Execute Arrow - Absolute relative to the title container */}
          <div
            data-aos="fade-in"
            data-aos-delay="600"
            className="hidden lg:block absolute -right-[180px] top-[-40px] pointer-events-none"
          >
            <ExecuteArrow />
          </div>
        </div>

        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="font-['Albert_Sans',sans-serif] font-medium text-[16px] md:text-[18px] leading-[1.3] text-gray-800 max-w-[550px] mb-8"
        >
          Learn by doing, guided by mentors, real-world challenges, and structured learning paths designed to take you from beginner to a confident developer.
        </p>

        {/* CTA Button */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="relative inline-block z-20"
        >
          <button className="bg-[#1d1d1d] hover:bg-black transition-colors text-white px-8 py-3.5 rounded-lg flex items-center gap-2 font-['Inter',sans-serif] font-semibold text-[14px]">
            <span>Get started</span>
            <ArrowIcon />
          </button>

          {/* It's Free Arrow - Absolute relative to button */}
          <div className="hidden md:block absolute -left-[80px] top-[10px] pointer-events-none">
            <ItsFreeArrow />
          </div>
        </div>

      </main>

      {/* Hero Video / Bento Grid */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-offset="0"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] z-0 pointer-events-none translate-y-[10%]"
      >
        <div className="relative w-full rounded-t-2xl overflow-hidden shadow-2xl bg-gray-100">
          <video
            className="w-full h-auto object-contain"
            autoPlay
            loop
            muted
            playsInline
            poster={imgBentoGrid}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay gradient for better blending if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
        </div>
      </div>

    </div>
  );
}
