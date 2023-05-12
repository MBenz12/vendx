import { CircleDownIcon, PolygonIcon } from "components/svgs";
import { useEffect, useRef } from "react";
import RevealText from "components/RevealText";
import { useInViewport } from "react-in-viewport";

const IntroSection = () => {
    const handleDown = () => {
        const height = window.innerHeight

        window.scrollTo({ top: height, behavior: 'smooth' })
    }

    const handleScrollDown = (id: string) => {
        if (id === 'INTRO') return
        // @ts-ignore
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    }
    const textRef = useRef<any>();
    const { inViewport, enterCount } = useInViewport(textRef);
    useEffect(() => {
        RevealText();
    }, [inViewport])
    return (
        <section className="section">
            <div className="container mt-[82px] md:mt-10">
                <div className="flex w-full justify-center">
                    <img src="/logo.png" alt="" className="w-[500px]" />
                </div>
                <div className="flex justify-between sm:flex-col sm:gap-8 mt-10 ">
                    <div className="flex gap-[50px] z-20 relative xs:mx-auto">
                        {/* <div className="w-0.5 h-[150px] bg-[#3A3A3A] relative">
                            <div className="absolute left-0 top-0 translate-x-[-50%] w-[20px] h-[20px] rounded-full bg-primary"></div>
                        </div> */}
                        <div className="flex flex-col font-primary text-secondary text-[20px] font-bold leading-[25px] gap-[18px]">
                            {['INTRO', 'roadmap', 'gallery', 'faq'].map((item, index) => (
                                <p className="uppercase cursor-pointer sm:text-white hover:text-primary" key={index} onClick={() => {
                                    handleScrollDown(item);
                                }}>{item}</p>
                            ))}
                        </div>
                    </div>
                    <div className="text-right font-extrabold text-[25px] leading-[29px] font-title">
                        <div className={"relative" + (inViewport && enterCount === 1 ? " fo-mask" : "")}>
                            <span className="text-primary">{"// A New Era Begins…"}</span>
                        </div>
                        <div ref={textRef} className={"max-w-[700px] font-primary text-[25px] leading-[32px] flex justify-end text-secondary sm:order-[-1] sm:ml-auto sm:w-full " + (inViewport && enterCount === 1 ? " reveal-text" : "")}>
                            VendX is the first official licensed Solana based Vending/Arcade business, and we aim to expand across Germany and neighboring countries.
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full flex justify-center z-10">
                <img src="/title_image.png" alt="" className="w-[50vw] lg:w-[80vw]" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[131px] bg-primary xs:h-10">
                <div className="relative container h-full">
                    <div className="absolute top-0 -translate-y-full z-10 sm:right-6">
                        <div className="animate-bounce" onClick={handleDown}>
                            <CircleDownIcon />
                        </div>
                    </div>
                    <div className="absolute top-0 right-[58px] translate-y-[-50%] xs:hidden">
                        <PolygonIcon />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntroSection;