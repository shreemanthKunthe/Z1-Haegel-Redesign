import React from "react";
import svgPaths from "../../imports/svg-oqus49gwxv";

function AccentContainer() {
  return (
    <div className="absolute h-[524.272px] left-0 top-0 w-[1440px] pointer-events-none" data-name="accent-container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 524.272">
        <g id="accent-container">
          <g clipPath="url(#clip0_1_1042)">
            <g filter="url(#filter0_f_1_1042)" id="accent">
              <ellipse cx="975.262" cy="-46.2714" fill="url(#paint0_radial_1_1042)" fillOpacity="0.75" rx="661.073" ry="729.312" transform="rotate(-40.0251 975.262 -46.2714)" />
            </g>
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1552.99" id="filter0_f_1_1042" width="1529.36" x="210.58" y="-822.765">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_1042" stdDeviation="37.2816" />
          </filter>
          <radialGradient cx="0" cy="0" gradientTransform="translate(975.263 -46.2715) rotate(86.9805) scale(708.489 642.198)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1042" r="1">
            <stop offset="0.625" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#E5E5E5" />
          </radialGradient>
          <clipPath id="clip0_1_1042">
            <rect fill="white" height="524.272" rx="9.32039" width="1440" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ArrowAccent2() {
  return (
    <div className="h-[10.141px] relative shrink-0 w-[7.606px]" data-name="arrow-accent">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.60585 10.1411">
        <g id="arrow-accent">
          <path d={svgPaths.p2d9a9e00} fill="var(--fill-0, #000000)" id="accent" />
        </g>
      </svg>
    </div>
  );
}

function Primary2() {
  return (
    <div className="absolute bg-[#1d1d1d] content-stretch flex gap-[5.071px] items-center justify-center left-0 px-[20.282px] py-[10.141px] rounded-[5.071px] top-[137.24px] cursor-pointer hover:bg-black transition-colors" data-name="primary">
      <p className="font-['Instrument_Sans',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[10.141px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Get started
      </p>
      <ArrowAccent2 />
    </div>
  );
}

function BrandInfo() {
  return (
    <div className="content-stretch flex flex-col h-[373.981px] items-start justify-between relative shrink-0 w-[295.922px]" data-name="brand-info">
      <div className="h-[182.913px] relative shrink-0 w-full" data-name="header">
        <div className="absolute h-[106.019px] left-0 top-0 w-[295.922px]" data-name="brand">
          <div className="absolute content-stretch flex gap-[9.934px] items-center left-0 top-0" data-name="identity">
            <p className="font-['Inter',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[26.49px] text-black">Z1</p>
          </div>
          <p className="absolute font-['Instrument_Sans',sans-serif] font-normal leading-[normal] left-0 text-[16.311px] text-black top-[40.78px] w-[489.32px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Learn by doing , guided by mentors, real-world challenges, and structured learning paths designed to take you from beginner to confident developer.
          </p>
        </div>
        <Primary2 />
      </div>

      {/* Follow CTA */}
      <div className="content-stretch flex gap-[18.641px] items-center relative shrink-0" data-name="follow-cta">
        <p className="font-['Inter',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[18.641px] text-black">Follow us on:</p>
        <div className="content-stretch flex gap-[18.641px] items-center relative shrink-0" data-name="socials">
          {/* X Logo */}
          <div className="overflow-clip relative shrink-0 size-[37.282px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.2816 37.2816">
              <g id="Group">
                <path clipRule="evenodd" d={svgPaths.p1e4e88a0} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
              </g>
            </svg>
          </div>
          {/* LinkedIn */}
          <div className="relative shrink-0 size-[37.282px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.2816 37.2816">
              <path d={svgPaths.pbf41100} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
          {/* Reddit */}
          <div className="relative shrink-0 size-[37.282px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.2816 37.2816">
              <path d={svgPaths.p314c4d80} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkGroup({ title, links }: { title: string, links: string[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[18.641px] items-start relative shrink-0 whitespace-pre-wrap">
      <p className="font-['Instrument_Sans',sans-serif] font-semibold relative shrink-0 text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {title}
      </p>
      {links.map(link => (
        <p key={link} className="font-['Instrument_Sans',sans-serif] font-normal relative shrink-0 text-gray-600 w-full cursor-pointer hover:text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
          {link}
        </p>
      ))}
    </div>
  )
}

function LinkGroups() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-8 md:gap-[80px] items-start leading-[normal] relative shrink-0 text-[16.311px] w-full md:w-auto" data-name="link-groups">
      <LinkGroup title="Support" links={["FAQ", "Customer support"]} />
      <LinkGroup title="Legal" links={["Privacy policy", "Terms", "Refund Policy"]} />
      <LinkGroup title="Company" links={["About", "Sign in", "Contact"]} />
      <LinkGroup title="Socials" links={["X(Twitter)", "LinkedIn", "Reddit", "Facebook", "Instagram"]} />
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full" data-name="main">
      <div className="content-stretch flex flex-col md:flex-row items-start justify-between px-4 md:px-[80px] py-[46.602px] relative w-full gap-8 md:gap-0">
        <BrandInfo />
        <LinkGroups />
      </div>
    </div>
  );
}

function CopyrightLegal() {
  return (
    <div className="relative shrink-0 w-full" data-name="copyright-legal">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex flex-col md:flex-row font-['Instrument_Sans',sans-serif] font-normal items-center justify-between leading-[normal] pb-[37.282px] px-4 md:px-[80px] relative text-gray-600 text-[14px] md:text-[16.311px] w-full border-t border-gray-200 pt-8 mt-8 gap-4 md:gap-0">
          <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            © 2025 Afterwise All rights reserved.
          </p>
          <div className="content-stretch flex gap-[37.282px] items-center relative shrink-0">
            <p className="relative shrink-0 cursor-pointer hover:text-black">Privacy</p>
            <p className="relative shrink-0 cursor-pointer hover:text-black">Terms</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div
      className="relative bg-white w-full max-w-[1440px] mx-auto overflow-hidden rounded-t-[27.961px] mt-20"
      data-aos="fade-up"
      data-aos-offset="0"
    >
      <AccentContainer />
      <Main />
      <CopyrightLegal />
    </div>
  );
}
