
import imgRectangle5 from "../../assets/560271557bb07c471c55ef9c42f4df293577d717.png";
import imgRectangle6 from "../../assets/21b7cde0981dc9485604d74a21e7cb4a6b1c9a2d.png";
import imgRectangle3 from "../../assets/69a30befb5db524cb0cc32c201e2bd65253ee0f1.png";
import imgBackground from "../../assets/598bc72371aceda21e9a625c4945b004b5f47ac1.png";
import imgMentor1 from "../../assets/images/mentor1.png";
import imgMentor2 from "../../assets/images/mentor2.png";

function BackgroungLines() {
    return (
        <div className="absolute h-[1553px] left-0 top-0 w-[1440px] pointer-events-none" data-name="Backgroung Lines">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440.53 1554.7">
                <g id="Backgroung Lines">
                    <line id="Line 1" stroke="var(--stroke-0, #DFDFDF)" x1="0.264999" x2="1440.27" y1="0.423999" y2="900.424" />
                    <line id="Line 2" stroke="var(--stroke-0, #DFDFDF)" transform="matrix(0.847998 -0.529999 -0.529999 -0.847998 0 1553.85)" x2="1698.12" y1="-0.5" y2="-0.5" />
                </g>
            </svg>
        </div>
    );
}

function BackgroungOllaps() {
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

function BackgroundCombined() {
    return (
        <div className="absolute contents left-0 top-0">
            <BackgroungLines />
            <BackgroungOllaps />
            <div className="absolute left-[calc(8.33%+55px)] size-[1090px] top-[-96px] pointer-events-none">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1090 1090">
                    <circle cx="545" cy="545" id="Ellipse 3" r="544.5" stroke="var(--stroke-0, #DFDFDF)" />
                </svg>
            </div>
            {/* Another background element from code */}
            <div className="-translate-x-1/2 absolute contents left-1/2 top-[1266px]" data-name="Backgroung">
                <div className="absolute h-[900px] left-0 top-[1362px] w-[1440px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440.53 901.696">
                        <g id="Backgroung Lines">
                            <line id="Line 1" stroke="var(--stroke-0, #DFDFDF)" x1="0.264999" x2="1440.27" y1="0.423999" y2="900.424" />
                            <line id="Line 2" stroke="var(--stroke-0, #DFDFDF)" transform="matrix(0.847998 -0.529999 -0.529999 -0.847998 0 900.848)" x2="1698.12" y1="-0.5" y2="-0.5" />
                        </g>
                    </svg>
                </div>
                <div className="absolute left-[calc(8.33%+55px)] size-[1090px] top-[1266px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1090 1090">
                        <g id="Backgroung Ollaps">
                            <circle cx="545" cy="545" id="Ellipse 3" r="544.5" stroke="var(--stroke-0, #DFDFDF)" />
                            <circle cx="544.5" cy="545.5" id="Ellipse 2" r="328" stroke="var(--stroke-0, #DFDFDF)" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}

function MentorCard1() {
    return (
        <div className="sticky top-[120px] mx-auto h-[852.315px] w-full max-w-[1230px] relative mb-[150px] bg-white rounded-[34px] shadow-sm overflow-hidden border border-gray-100">
            <p className="absolute font-['Instrument_Sans',sans-serif] font-bold leading-[36.367px] left-[14px] text-[#303030] text-[39.673px] text-left top-[43px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Deepak Mehta
            </p>
            <p className="absolute font-['Instrument_Sans',sans-serif] font-normal leading-[18.455px] left-[14px] text-[11px] text-[rgba(48,48,48,0.96)] top-[84px] w-[177px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                kenzi.lawson@example.com
            </p>
            <div className="absolute h-[609.703px] left-px rounded-[34.044px] top-[242.61px] w-[489px] overflow-hidden">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[34.044px]">
                    <img alt="" className="absolute max-w-none object-cover rounded-[34.044px] size-full" src={imgMentor1} />
                    <img alt="" className="absolute max-w-none object-cover rounded-[34.044px] size-full opacity-0" src={imgRectangle5} />
                    <img alt="" className="absolute max-w-none object-cover rounded-[34.044px] size-full opacity-0" src={imgRectangle3} />
                </div>
            </div>

            <div className="absolute bottom-[714.35px] h-[6px] right-[629px] w-[601px]" data-name="Background">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackground} />
            </div>

            <div className="absolute bottom-[661.82px] flex flex-col font-['Instrument_Sans',sans-serif] font-medium h-[13px] justify-center leading-[0] right-[1216px] text-[#5e5e5e] text-[9.582px] translate-x-full translate-y-1/2 w-[47px]">
                <p className="leading-[normal] whitespace-pre-wrap">More Info</p>
            </div>
            <div className="absolute bottom-[680.82px] flex flex-col font-['Instrument_Sans',sans-serif] font-semibold h-[17px] justify-center leading-[0] right-[1216px] text-[#898989] text-[11px] translate-x-full translate-y-1/2 w-[297px]">
                <p className="leading-[normal] whitespace-pre-wrap">{`TALGH / ART DIRECTION,3D DESIGN + MOTION,R&D`}</p>
            </div>

            <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[22px] left-[622px] text-[#303030] text-[16px] top-[398px] w-[618px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="mb-0">I usually open learning apps when I’m already tired — late at night or after long workdays. Most of the time, I end up closing them before I even start because everything feels too heavy.</p>
                <p className="mb-0">&nbsp;</p>
                <p>This experience felt different. It didn’t ask me to push harder or stay longer. It simply met me where I was. Being able to choose how much energy I had before reading made learning feel possible again, even on days when my focus was low.</p>
            </div>
            <p className="absolute font-['Instrument_Sans',sans-serif] font-normal leading-[22px] left-[622px] text-[#303030] text-[16px] top-[512px] w-[507px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                I didn’t feel rushed. I didn’t feel behind. I just felt okay showing up.
            </p>
            <div className="absolute bottom-[596.35px] h-[6px] right-[262px] w-[356px]" data-name="Background">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackground} />
            </div>
            <div className="absolute bottom-[566.78px] flex flex-col font-['Instrument_Sans',sans-serif] font-semibold h-[13.067px] justify-center leading-[0] right-[608px] text-[#5e5e5e] text-[11px] translate-x-full translate-y-1/2 w-[42.686px]">
                <p className="leading-[normal] whitespace-pre-wrap">Bio</p>
            </div>
        </div>
    )
}

function MentorCard2() {
    return (
        <div className="sticky top-[150px] mx-auto h-[852.315px] w-full max-w-[1230px] relative bg-white rounded-[34px] shadow-sm overflow-hidden border border-gray-100">
            <p className="-translate-x-1/2 absolute font-['Instrument_Sans',sans-serif] font-bold leading-[36.367px] left-[181px] text-[#303030] text-[39.673px] text-center top-[43px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Gautam Shigaokar
            </p>
            <p className="absolute font-['Instrument_Sans',sans-serif] font-normal leading-[18.455px] left-[14px] text-[11px] text-[rgba(48,48,48,0.96)] top-[84px] w-[177px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                kenzi.lawson@example.com
            </p>
            <div className="absolute h-[609.703px] left-px rounded-[34.044px] top-[242.61px] w-[489px] overflow-hidden">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[34.044px]">
                    <img alt="" className="absolute max-w-none object-cover rounded-[34.044px] size-full" src={imgMentor2} />
                    <img alt="" className="absolute max-w-none object-cover rounded-[34.044px] size-full opacity-0" src={imgRectangle5} />
                    <img alt="" className="absolute max-w-none object-cover rounded-[34.044px] size-full opacity-0" src={imgRectangle6} />
                </div>
            </div>

            <div className="absolute bottom-[714.35px] h-[6px] right-[629px] w-[601px]" data-name="Background">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackground} />
            </div>

            <div className="absolute bottom-[661.82px] flex flex-col font-['Instrument_Sans',sans-serif] font-medium h-[13px] justify-center leading-[0] right-[1216px] text-[#5e5e5e] text-[9.582px] translate-x-full translate-y-1/2 w-[47px]">
                <p className="leading-[normal] whitespace-pre-wrap">More Info</p>
            </div>
            <div className="absolute bottom-[680.82px] flex flex-col font-['Instrument_Sans',sans-serif] font-semibold h-[17px] justify-center leading-[0] right-[1216px] text-[#898989] text-[11px] translate-x-full translate-y-1/2 w-[297px]">
                <p className="leading-[normal] whitespace-pre-wrap">{`TALGH / ART DIRECTION,3D DESIGN + MOTION,R&D`}</p>
            </div>

            <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[22px] left-[622px] text-[#303030] text-[16px] top-[398px] w-[618px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="mb-0">I usually open learning apps when I’m already tired — late at night or after long workdays. Most of the time, I end up closing them before I even start because everything feels too heavy.</p>
                <p className="mb-0">&nbsp;</p>
                <p>This experience felt different. It didn’t ask me to push harder or stay longer. It simply met me where I was. Being able to choose how much energy I had before reading made learning feel possible again, even on days when my focus was low.</p>
            </div>
            <p className="absolute font-['Instrument_Sans',sans-serif] font-normal leading-[22px] left-[622px] text-[#303030] text-[16px] top-[512px] w-[507px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                I didn’t feel rushed. I didn’t feel behind. I just felt okay showing up.
            </p>
            <div className="absolute bottom-[596.35px] h-[6px] right-[262px] w-[356px]" data-name="Background">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackground} />
            </div>
            <div className="absolute bottom-[566.78px] flex flex-col font-['Instrument_Sans',sans-serif] font-semibold h-[13.067px] justify-center leading-[0] right-[608px] text-[#5e5e5e] text-[11px] translate-x-full translate-y-1/2 w-[42.686px]">
                <p className="leading-[normal] whitespace-pre-wrap">Bio</p>
            </div>
        </div>
    )
}


function MobileMentorCard({ name, email, imgInfo, bio, role }: { name: string, email: string, imgInfo: string, bio: string, role: string }) {
    return (
        <div className="relative bg-white rounded-[24px] shadow-sm overflow-hidden border border-gray-100 p-6 flex flex-col gap-6">
            <div className="w-full aspect-square rounded-[24px] overflow-hidden relative bg-gray-100">
                <img src={imgInfo} alt={name} className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="font-['Instrument_Sans',sans-serif] font-bold text-[28px] text-[#303030] leading-none">{name}</h3>
                <p className="font-['Instrument_Sans',sans-serif] font-normal text-[14px] text-gray-500">{email}</p>
                <p className="font-['Instrument_Sans',sans-serif] font-semibold text-[12px] text-gray-400 uppercase tracking-wide mt-2">{role}</p>
            </div>

            <div className="mt-2">
                <p className="font-['Instrument_Sans',sans-serif] font-normal text-[16px] text-[#303030] leading-relaxed">
                    {bio}
                </p>
            </div>
        </div>
    )
}

export function Mentors() {
    return (
        <div className="relative bg-white pt-[80px] md:pt-[120px] pb-[80px] md:pb-[100px] w-full max-w-[1440px] mx-auto px-4 md:px-0">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <BackgroundCombined />
            </div>

            {/* Title */}
            <div data-aos="fade-up" className="relative pl-0 md:pl-[80px] mb-12 md:mb-20 z-10 px-4 md:px-0">
                <div className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[1] text-[48px] md:text-[105.51px] text-black tracking-[-2px] md:tracking-[-2.6385px] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.1] md:leading-[1.1]">Our Mentors</p>
                </div>
                <div className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] text-[14px] md:text-[13.127px] text-black w-full max-w-[673.496px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.5] md:leading-[17.065px] whitespace-pre-wrap">Our mentors aren't just instructors — they're active builders, designers, and engineers working on real projects. They bring industry experience, practical thinking, and hands-on guidance to help you grow with clarity and confidence.</p>
                </div>
            </div>

            <div className="hidden md:flex flex-col gap-10 relative z-20 px-[80px]">
                <MentorCard1 />
                <MentorCard2 />
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col gap-8 relative z-20 px-0">
                <MobileMentorCard
                    name="Deepak Mehta"
                    email="kenzi.lawson@example.com"
                    role="TALGH / ART DIRECTION, 3D DESIGN"
                    imgInfo={imgMentor1}
                    bio="I usually open learning apps when I’m already tired — late at night or after long workdays. Most of the time, I end up closing them before I even start because everything feels too heavy. This experience felt different. It didn’t ask me to push harder."
                />
                <MobileMentorCard
                    name="Gautam Shigaokar"
                    email="kenzi.lawson@example.com"
                    role="TALGH / ART DIRECTION, 3D DESIGN"
                    imgInfo={imgMentor2}
                    bio="I usually open learning apps when I’m already tired — late at night or after long workdays. Most of the time, I end up closing them before I even start because everything feels too heavy. This experience felt different. It didn’t ask me to push harder."
                />
            </div>
        </div>
    );
}
