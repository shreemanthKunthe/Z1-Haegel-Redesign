
import svgPaths from "../../imports/svg-oqus49gwxv";

function ChartIcon() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" viewBox="0 0 40 40">
        <path clipRule="evenodd" d={svgPaths.p266d6000} fill="var(--fill-0, #00EB8D)" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function Stats() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 max-w-xl">
      <h2 className="font-['Inter',sans-serif] font-normal text-[36px] md:text-[45px] leading-[1.2] tracking-[-2px] text-white">
        Future-ready developers are building with Z1
      </h2>
      <p className="font-['Inter',sans-serif] font-normal text-[15px] leading-[1.4] text-[rgba(255,255,255,0.65)]">
        Modern learners need more than passive courses. Z1 combines guided learning, real-world challenges, and AI mentorship to create measurable skill growth and career readiness.
      </p>

      {/* Attendance Rate */}
      <div className="flex items-start gap-3 mt-4">
        <ChartIcon />
        <div className="flex flex-col">
          <p className="font-['Inter',sans-serif] text-[29px] text-white leading-none">
            66% <span className="text-[15px] text-[rgba(255,255,255,0.5)] ml-1">attendance rate</span>
          </p>
          <p className="font-['Inter',sans-serif] text-[11px] text-[rgba(255,255,255,0.65)] mt-1">
            avg attendance
          </p>
        </div>
      </div>
    </div>
  );
}

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center text-gray-500 font-bold text-xs uppercase tracking-wider h-8">
      {name}
    </div>
  );
}

function OnePasswordLogo() {
  return (
    <div className="h-[25px] w-full max-w-[130px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 136.688 25.7508">
        <path clipRule="evenodd" d={svgPaths.p3a3a7f00} fill="var(--fill-0, #6B6B6B)" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p1deadcf0} fill="var(--fill-0, #6B6B6B)" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function MotiveLogo() {
  return (
    <div className="h-[30px] w-full max-w-[120px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 126.989 47.109">
        <path d={svgPaths.p15f3f300} fill="var(--fill-0, #6B6B6B)" />
        <path d={svgPaths.p216dc380} fill="var(--fill-0, #6B6B6B)" />
      </svg>
    </div>
  );
}

function BrexLogo() {
  return (
    <div className="h-[25px] w-full max-w-[110px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 113.133 29.7656">
        <path d={svgPaths.p3ddbcff8} fill="var(--fill-0, #6B6B6B)" />
        <path d={svgPaths.p3bd2f700} fill="var(--fill-0, #6B6B6B)" />
      </svg>
    </div>
  );
}

function UnivisionLogo() {
  return (
    <div className="h-[20px] w-full max-w-[110px] relative">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 109.498 13.8355">
        <path d={svgPaths.pfdf3500} fill="var(--fill-0, #6B6B6B)" />
      </svg>
      {/* Fallback text if path is incomplete */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0">Univision</div>
    </div>
  );
}

function Logos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center w-full mt-12 lg:mt-0">
      <LogoPlaceholder name="Adobe" />
      <OnePasswordLogo />
      <LogoPlaceholder name="NBA" />
      <MotiveLogo />
      <LogoPlaceholder name="Checkr" />
      <LogoPlaceholder name="Twilio" />
      <LogoPlaceholder name="Broadcom" />
      <LogoPlaceholder name="Sendoso" />
      <BrexLogo />
      <UnivisionLogo />
      <LogoPlaceholder name="Zendesk" />
    </div>
  );
}

export function Partners() {
  return (
    <div className="relative bg-[#1d1d1d] w-full max-w-[1440px] mx-auto overflow-hidden px-4 md:px-[80px] py-[60px] md:py-[80px]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
        <div data-aos="fade-up" className="w-full lg:w-1/2">
          <Stats />
        </div>
        <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="200">
          <Logos />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-[#1d1d1d] to-transparent pointer-events-none" />
    </div>
  );
}
