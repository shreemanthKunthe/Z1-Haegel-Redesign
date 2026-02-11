import React from "react";
import svgPaths from "../../imports/svg-oqus49gwxv";
import imgImg from "../../assets/ade7b9f6742178ee817b59205164e5226dbd4c4c.png";

function BackgroungLines2() {
  return (
    <div className="absolute h-[900px] left-0 top-0 w-[1440px] pointer-events-none" data-name="Backgroung Lines">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440.53 901.696">
        <g id="Backgroung Lines">
          <line id="Line 1" stroke="var(--stroke-0, #DFDFDF)" x1="0.264999" x2="1440.27" y1="0.423999" y2="900.424" />
          <line id="Line 2" stroke="var(--stroke-0, #DFDFDF)" transform="matrix(0.847998 -0.529999 -0.529999 -0.847998 0 900.848)" x2="1698.12" y1="-0.5" y2="-0.5" />
        </g>
      </svg>
    </div>
  );
}

function BackgroungOllaps2() {
  return (
    <div className="absolute left-[calc(25%+31px)] size-[657px] top-[121px] pointer-events-none" data-name="Backgroung Ollaps">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 657 657">
        <g id="Backgroung Ollaps">
          <circle cx="328.5" cy="328.5" id="Ellipse 2" r="328" stroke="var(--stroke-0, #DFDFDF)" />
        </g>
      </svg>
    </div>
  );
}

function Backgroung2() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Backgroung">
      <BackgroungLines2 />
      <BackgroungOllaps2 />
    </div>
  );
}

const floatStyle = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
`;

function Card({ title, desc, left, top, delay = "0s", duration = "6s", className = "absolute" }: { title: string, desc: string, left?: string, top?: string, delay?: string, duration?: string, className?: string }) {
  return (
    <div
      onClick={() => console.log(`Clicked on ${title}`)}
      className={`${className} bg-white content-stretch flex flex-col gap-[15.884px] h-[274px] items-start p-[10.589px] rounded-[5.295px] w-[247.527px] cursor-pointer hover:scale-105 transition-all shadow-lg hover:shadow-xl z-10`}
      style={{
        left,
        top,
      }}
      data-name="card"
    >
      <div aria-hidden="true" className="absolute border-[#dcdcdc] border-[0.662px] border-solid inset-0 pointer-events-none rounded-[5.295px]" />
      <div className="h-[168.768px] relative rounded-[3.971px] shrink-0 w-full" data-name="img">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[3.971px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[3.971px] size-full" src={imgImg} />
          <div className="absolute bg-gradient-to-b from-[28.365%] from-[rgba(74,115,232,0)] inset-0 rounded-[3.971px] to-[rgba(74,115,232,0.5)]" />
        </div>
      </div>

      <div className="content-stretch flex flex-col gap-[10.589px] items-start relative shrink-0 w-full" data-name="content">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[215.758px]" data-name="header">
          <p className="font-['Inter',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[10.589px] text-black text-center">{title}</p>
          <div className="relative shrink-0 size-[23.826px]" data-name="cta">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.8261 23.8261">
              <g id="cta">
                <rect fill="var(--fill-0, white)" height="23.1643" rx="11.5821" width="23.1643" x="0.330918" y="0.330918" />
                <rect height="23.1643" rx="11.5821" stroke="var(--stroke-0, #DCDCDC)" strokeWidth="0.661836" width="23.1643" x="0.330918" y="0.330918" />
                <path d={svgPaths.p61f7600} fill="var(--stroke-0, black)" id="arrow" />
              </g>
            </svg>
          </div>
        </div>
        <p className="font-['Inter',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#6c6c6c] text-[9.266px] w-[min-content] whitespace-pre-wrap">{desc}</p>
      </div>
    </div>
  );
}

function ArrowAccent() {
  return (
    <div className="h-[11.034px] relative shrink-0 w-[8.276px]" data-name="arrow-accent">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.27586 11.0345">
        <g id="arrow-accent">
          <path d={svgPaths.p18bd7300} fill="url(#paint0_linear_1_993)" id="accent" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_993" x1="4.13793" x2="4.13793" y1="0" y2="11.0345">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#4A73E8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Primary() {
  return (
    <div className="bg-[#1d1d1d] flex gap-[5.517px] items-center justify-center px-[22.069px] py-[11.034px] rounded-[5.517px] cursor-pointer hover:bg-black transition-colors" data-name="primary">
      <p className="font-['Inter',sans-serif] font-semibold text-[11.034px] text-white">Explore now</p>
      <ArrowAccent />
    </div>
  );
}

export function Opportunities() {
  return (
    <div className="relative bg-white min-h-[900px] w-full max-w-[1440px] mx-auto overflow-hidden px-4 md:px-0">
      <style>{floatStyle}</style>
      <Backgroung2 />

      {/* Circle Background - hide on mobile */}
      <div className="hidden md:block absolute left-[175px] size-[1090px] top-[-96px] pointer-events-none">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1090 1090">
          <circle cx="545" cy="545" id="Ellipse 3" r="544.5" stroke="var(--stroke-0, #B5B5B5)" />
        </svg>
      </div>

      {/* Heading */}
      <div
        data-aos="fade-up"
        className="absolute left-1/2 -translate-x-1/2 top-[80px] md:top-[calc(50%-180px)] w-full max-w-[673.496px] text-center px-4 flex flex-col items-center"
      >
        <p className="font-['Instrument_Sans',sans-serif] font-normal text-[32px] md:text-[55.678px] leading-[1.1] md:leading-[60.792px] tracking-[-1.5px] md:tracking-[-2.6385px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
          Endless Opportunities
        </p>
        <p className="font-['Instrument_Sans',sans-serif] font-normal text-[12px] md:text-[13.127px] leading-[1.3] md:leading-[17.065px] text-black mt-4 mb-8">
          Our courses are structured around practical learning — not passive watching. Each path is designed to strengthen fundamentals, push hands-on execution, and guide you toward real-world confidence. Learn progressively, build consistently, and grow with clarity.
        </p>

        <div className="relative">
          <Primary />
          <div className="hidden md:block absolute -left-[80px] top-[0px] pointer-events-none w-[70px] h-[52px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70.593 51.9292">
              <path d={svgPaths.p788e7c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.26884" />
            </svg>
          </div>
        </div>
      </div>

      {/* Cards - responsive grid on mobile, absolute positioning on desktop */}
      <div className="md:hidden absolute top-[280px] left-4 right-4 grid grid-cols-1 gap-6 justify-items-center">
        <Card title="Digital Asset Discovery" desc="Locate and catalogue all your online accounts, from streaming services to bank logins." className="relative" />
        <Card title="Password Management" desc="Securely store and manage your passwords with ease, ensuring you never lose access." className="relative" delay="1s" />
        <Card title="Account Monitoring" desc="Receive alerts for suspicious activities on your accounts, helping to protect your assets." className="relative" delay="2s" />
        <Card title="Two-Factor Authentication" desc="Enhance your security by enabling two-factor authentication on critical accounts." className="relative" delay="3s" />
      </div>

      {/* Desktop cards */}
      <div className="hidden md:block">
        <div data-aos="fade-up" data-aos-delay="0">
          <Card title="Digital Asset Discovery" desc="Locate and catalogue all your online accounts, from streaming services to bank logins." left="208px" top="91px" />
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <Card title="Password Management" desc="Securely store and manage your passwords with ease, ensuring you never lose access." left="135px" top="516px" />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <Card title="Account Monitoring" desc="Receive alerts for suspicious activities on your accounts, helping to protect your assets." left="953px" top="72px" />
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <Card title="Two-Factor Authentication" desc="Enhance your security by enabling two-factor authentication on critical accounts." left="1089px" top="505px" />
        </div>
      </div>

      {/* Decorative vectors - hide on mobile */}
      <div className="hidden md:flex absolute h-[184.701px] items-center justify-center left-[1230px] top-[349px] w-[191.611px] pointer-events-none">
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
