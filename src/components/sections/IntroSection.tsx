import { CircleDownIcon, PolygonIcon, StackLinesIcon } from "components/svgs";

const IntroSection = () => {
    return (
        <section className="section">
            <div className="container mt-[82px]">
                <div className="flex w-full justify-end">
                    <div className="translate-x-[0%]">
                        <StackLinesIcon />
                    </div>
                </div>
                <div className="flex w-full justify-center">
                    <img src="/logo.png" alt="" className="w-[30vw]" />
                </div>
                <div className="mt-[10px] text-right font-extrabold text-[25px] leading-[29px] font-title">
                    <div className="fo-mask relative">
                        <span className="text-primary">{'// Lorem ipsum dolor'}</span>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-[50px]">
                        <div className="w-0 border-2 h-full border-[#3A3A3A] relative">
                            <div className="absolute left-0 top-0 translate-x-[-50%] w-[20px] h-[20px] rounded-full bg-primary"></div>
                        </div>
                        <div className="flex flex-col font-secondary text-secondary text-[20px] font-bold leading-[25px] gap-[18px]">
                            <p className="text-primary">INTRO</p>
                            <p>ROADMAP</p>
                            <p>GALLERY</p>
                            <p>FAQ</p>
                        </div>
                    </div>
                    <div className="w-[420px] font-secondary text-[25px] leading-[32px] text-right text-secondary reveal-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full flex justify-center z-10">
                <img src="/title_image.png" alt="" className="w-[50vw]" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[131px] bg-primary">
                <div className="relative w-full h-full">
                    <div className="absolute top-[-66px] left-[158px] translate-y-[-100%]">
                        <div className="animate-bounce">
                            <CircleDownIcon />
                        </div>
                    </div>
                    <div className="absolute top-0 right-[58px] translate-y-[-50%]">
                        <PolygonIcon />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntroSection;