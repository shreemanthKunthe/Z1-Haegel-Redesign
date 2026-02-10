import React from "react";
import { imgImage1 } from "../../imports/svg-5p28p";
import imgImage2 from "../../assets/f7c887c7257f2c8874cbfbfa2041a1818075d5bd.png";
import imgImage3 from "../../assets/0ac800ad0ac0909c59fdddf651ced8328cb02942.png";
import imgImage4 from "../../assets/bd8c4909788e12257ce3d908c0e56c525d29aa50.png";
import imgImage5 from "../../assets/4307717eca3ecf9bd4683d4fc3e2d7556d371149.png";
import imgImage6 from "../../assets/22bb95c378b0b1910db4fbe039705656063d81c6.png";
import imgImage7 from "../../assets/f38f460099463e75181817aefdddbb6e9dfc81f9.png";

function Backgroung() {
    return (
        <div className="-translate-x-1/2 absolute contents left-[calc(50%-1px)] top-[4px]" data-name="Backgroung">
            <div className="absolute h-[900px] left-[-1px] top-[100px] w-[1440px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440.53 901.696">
                    <g id="Backgroung Lines">
                        <line id="Line 1" stroke="var(--stroke-0, #DFDFDF)" x1="0.264999" x2="1440.27" y1="0.423999" y2="900.424" />
                        <line id="Line 2" stroke="var(--stroke-0, #DFDFDF)" transform="matrix(0.847998 -0.529999 -0.529999 -0.847998 0 900.848)" x2="1698.12" y1="-0.5" y2="-0.5" />
                    </g>
                </svg>
            </div>
            <div className="absolute left-[174px] size-[1090px] top-[4px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1090 1090">
                    <g id="Backgroung Ollaps">
                        <circle cx="545" cy="545" id="Ellipse 3" r="544.5" stroke="var(--stroke-0, #DFDFDF)" />
                        <circle cx="544.5" cy="545.5" id="Ellipse 2" r="328" stroke="var(--stroke-0, #DFDFDF)" />
                    </g>
                </svg>
            </div>
        </div>
    );
}

function Backgroung1() {
    return (
        <div className="-translate-x-1/2 absolute contents left-[calc(50%-19px)] top-[1252px]" data-name="Backgroung">
            <div className="absolute h-[900px] left-[-19px] top-[1348px] w-[1440px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440.53 901.696">
                    <g id="Backgroung Lines">
                        <line id="Line 1" stroke="var(--stroke-0, #DFDFDF)" x1="0.264999" x2="1440.27" y1="0.423999" y2="900.424" />
                        <line id="Line 2" stroke="var(--stroke-0, #DFDFDF)" transform="matrix(0.847998 -0.529999 -0.529999 -0.847998 0 900.848)" x2="1698.12" y1="-0.5" y2="-0.5" />
                    </g>
                </svg>
            </div>
            <div className="absolute left-[156px] size-[1090px] top-[1252px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1090 1090">
                    <g id="Backgroung Ollaps">
                        <circle cx="545" cy="545" id="Ellipse 3" r="544.5" stroke="var(--stroke-0, #DFDFDF)" />
                        <circle cx="544.5" cy="545.5" id="Ellipse 2" r="328" stroke="var(--stroke-0, #DFDFDF)" />
                    </g>
                </svg>
            </div>
        </div>
    );
}

function Grid() {
    return (
        <div className="absolute h-[1412.4px] left-[560px] top-[251px] w-[880px]">
            {/* Blurs */}
            <div className="absolute backdrop-blur-[27.5px] h-[352px] left-[440px] top-0 w-[440px]" />
            <div className="absolute backdrop-blur-[27.5px] h-[352px] left-0 top-[352px] w-[440px]" />
            <div className="absolute backdrop-blur-[27.5px] h-[352px] left-[440px] top-[704px] w-[440px]" />
            <div className="absolute backdrop-blur-[27.5px] h-[352px] left-0 top-[1056px] w-[440px]" />

            {/* Images with Masks */}
            {/* MaskGroup (01) */}
            <div className="absolute contents left-[440px] top-[352px]">
                <div className="absolute left-[438.9px] top-[286px] w-[442.2px] h-[352px]" style={{ maskImage: `url('${imgImage1}')`, WebkitMaskImage: `url('${imgImage1}')`, maskSize: '440px 352px', maskRepeat: 'no-repeat', maskPosition: '1.1px 66px' }}>
                    <div className="absolute inset-0 pointer-events-none">
                        <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage2} />
                        <img alt="" className="absolute max-w-none object-cover size-full opacity-0" src={imgImage3} />
                    </div>
                </div>
            </div>

            {/* MaskGroup1 (02) */}
            <div className="absolute contents left-0 top-[704px]">
                <div className="absolute left-[-1.1px] top-[638px] w-[442.2px] h-[352px]" style={{ maskImage: `url('${imgImage1}')`, WebkitMaskImage: `url('${imgImage1}')`, maskSize: '440px 352px', maskRepeat: 'no-repeat', maskPosition: '1.1px 66px' }}>
                    <div className="absolute inset-0 pointer-events-none">
                        <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage4} />
                        <img alt="" className="absolute max-w-none object-cover size-full opacity-0" src={imgImage5} />
                    </div>
                </div>
            </div>

            {/* MaskGroup2 (03) */}
            <div className="absolute contents left-[440px] top-[1056px]">
                <div className="absolute left-[438.9px] top-[1013.1px] w-[442.2px] h-[352px]" style={{ maskImage: `url('${imgImage1}')`, WebkitMaskImage: `url('${imgImage1}')`, maskSize: '440px 352px', maskRepeat: 'no-repeat', maskPosition: '1.1px 42.9px' }}>
                    <div className="absolute inset-0 pointer-events-none">
                        <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage6} />
                        <img alt="" className="absolute max-w-none object-cover size-full opacity-0" src={imgImage7} />
                    </div>
                </div>
            </div>

            {/* Numbers and Text */}
            <p className="-translate-x-full absolute font-['Instrument_Sans',sans-serif] font-normal leading-[1.34] left-[847px] text-[105.6px] text-black text-right top-[220px] tracking-[-1.056px]">01</p>
            <p className="absolute font-['Instrument_Sans',sans-serif] font-semibold leading-[1.34] left-[462px] text-[17.6px] text-black top-[286px] tracking-[-0.176px]">Dreamy Flowers</p>
            <p className="absolute font-['Instrument_Sans',sans-serif] font-normal leading-[1.34] left-[462px] text-[13.2px] text-black top-[309.1px] tracking-[-0.132px]">Behance: Omar Aqil</p>

            <p className="-translate-x-full absolute font-['Instrument_Sans',sans-serif] font-normal leading-[1.34] left-[407.5px] text-[105.6px] text-black text-right top-[572px] tracking-[-1.056px]">02</p>
            <p className="absolute font-['Instrument_Sans',sans-serif] font-semibold leading-[1.34] left-[22px] text-[17.6px] text-black top-[638px] tracking-[-0.176px]">LUMI</p>
            <p className="absolute font-['Instrument_Sans',sans-serif] font-normal leading-[1.34] left-[22px] text-[13.2px] text-black top-[661.1px] tracking-[-0.132px]">Lumi by Roli</p>

            <p className="-translate-x-full absolute font-['Instrument_Sans',sans-serif] font-normal leading-[1.34] left-[846.2px] text-[105.6px] text-black text-right top-[924px] tracking-[-1.056px]">03</p>
            <p className="absolute font-['Instrument_Sans',sans-serif] font-semibold leading-[1.34] left-[462px] text-[17.6px] text-black top-[990px] tracking-[-0.176px]">LUMI</p>
            <p className="absolute font-['Instrument_Sans',sans-serif] font-normal leading-[1.34] left-[462px] text-[13.2px] text-black top-[1013.1px] tracking-[-0.132px]">Lumi by Roli</p>

            <p className="-translate-x-full absolute font-['Instrument_Sans',sans-serif] font-normal leading-[1.34] left-[407px] text-[105.6px] text-black text-right top-[1250.5px] tracking-[-1.056px]">04</p>
            <p className="absolute font-['Instrument_Sans',sans-serif] font-semibold leading-[1.34] left-[22px] text-[17.6px] text-black top-[1322px] tracking-[-0.176px]">Type Balance</p>
            <p className="absolute font-['Instrument_Sans',sans-serif] font-normal leading-[1.34] left-[22px] text-[13.2px] text-black top-[1368.4px] tracking-[-0.132px]">Antian Lmeri</p>

            {/* Grid Lines */}
            <div className="absolute flex h-[1228.7px] items-center justify-center left-0 top-0 w-0">
                <div className="flex-none rotate-90">
                    <div className="h-0 relative w-[1228.7px]">
                        <div className="absolute inset-[-1.65px_0_0_0]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1228.7 1.65">
                                <line id="Line 1" stroke="var(--stroke-0, black)" strokeWidth="1.65" x2="1228.7" y1="0.825" y2="0.825" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute flex h-[1228.7px] items-center justify-center left-[440px] top-0 w-0">
                <div className="flex-none rotate-90">
                    <div className="h-0 relative w-[1228.7px]">
                        <div className="absolute inset-[-1.65px_0_0_0]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1228.7 1.65">
                                <line id="Line 1" stroke="var(--stroke-0, black)" strokeWidth="1.65" x2="1228.7" y1="0.825" y2="0.825" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Testimonials() {
    return (
        <div className="relative bg-white min-h-[1610px] w-full max-w-[1440px] mx-auto overflow-hidden px-4 md:px-0">
            <Backgroung />
            <Backgroung1 />

            {/* Text */}
            <div className="absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-4 md:left-[116px] text-[48px] md:text-[105.51px] text-black top-[80px] md:top-[121.5px] tracking-[-2px] md:tracking-[-2.6385px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[1.1] md:leading-[60.792px]">Testimonials</p>
            </div>
            <div className="absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-4 md:left-[116px] text-[12px] md:text-[13.127px] text-black top-[140px] md:top-[201.5px] w-full max-w-[673.496px] pr-4" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[1.3] md:leading-[17.065px] whitespace-pre-wrap">Growth looks different for everyone — but consistent learning leads to real change. Hear from learners who built skills, gained confidence, and turned knowledge into action.</p>
            </div>

            <div className="hidden md:block">
                <Grid />
            </div>
            <div className="md:hidden mt-[250px] px-4 text-center text-gray-500">
                <p>Testimonial gallery is best viewed on larger screens</p>
            </div>
        </div>
    );
}
