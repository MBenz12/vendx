import { CircleDownIcon, PolygonIcon, StackLinesIcon } from "components/svgs";
import { useRef } from "react";
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
    const { inViewport } = useInViewport(textRef);
    return (
        <section className="section">
            <div className="container mt-[82px] md:mt-10">
                <div className="flex w-full justify-end">
                    <div className="translate-x-[0%]">
                        <StackLinesIcon />
                    </div>
                </div>
                <div className="flex w-full justify-center">
                    <img src="/logo.png" alt="" className="w-[500px]" />
                </div>
                <div className="mt-10 text-right font-extrabold text-[25px] leading-[29px] font-title">
                    <div className={"relative" + (inViewport ? " fo-mask" : "")}>
                        <span className="text-primary">{'// Lorem ipsum dolor'}</span>
                    </div>
                </div>
                <div className="flex justify-between sm:flex-col sm:gap-8">
                    <div className="flex gap-[50px] z-20 relative xs:mx-auto">
                        {/* <div className="w-0.5 h-[150px] bg-[#3A3A3A] relative">
                            <div className="absolute left-0 top-0 translate-x-[-50%] w-[20px] h-[20px] rounded-full bg-primary"></div>
                        </div> */}
                        <div className="flex flex-col font-secondary text-secondary text-[20px] font-bold leading-[25px] gap-[18px]">
                            {['INTRO', 'roadmap', 'gallery', 'faq'].map((item, index) => (
                                <p className="uppercase cursor-pointer sm:text-white hover:text-primary" key={index} onClick={() => {
                                    handleScrollDown(item);
                                }}>{item}</p>
                            ))}
                        </div>
                    </div>
                    <div ref={textRef} className={"w-[420px] font-secondary text-[25px] leading-[32px] text-right text-secondary sm:order-[-1] sm:ml-auto sm:w-full reveal-text"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
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