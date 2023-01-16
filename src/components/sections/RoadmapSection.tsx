import RevealText from 'components/RevealText';
import { useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';

const RodmapBox = ({ background, title, contents, color }: { background: string, title: string, contents: Array<string>, color: string }) => {
    const [hover, setHover] = useState(false);
    return (
        <div
            className={"rounded-[15px] max-w-[512px] mx-auto w-full border-2 border-[#1A1A1A] " + (hover ? "p-[5px] bg-gradient1 border-0" : "")}
            style={{ aspectRatio: 1.25 }}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="w-full h-full bg-gradient2 bg-black rounded-[15px] flex flex-col justify-center items-center relative">
                <div className="absolute top-10 flex items-center">
                    <div className="relative flex justify-center">
                        <img src={background} alt="" className="w-[150px] sm:w-[120px] bg-[#9D7C32]/0.2" />
                        <div className={`absolute top-10 w-[150px] bg-black/0 shadow-[_0px_0px_80px_50px_${color}]`} ></div>
                    </div>
                </div>
                <div className={"relative w-full h-full text-white flex justify-center " + (hover ? "bg-black/50 rounded-[15px]" : "")}>
                    <div className={"flex flex-col justify-center items-center " + (!hover ? "mt-[30%]" : "gap-5")}>
                        <p className={"font-primary " + (hover ? "text-gradient1 text-[40px] leading-[47px] sm:text-[30px]" : "text-[30px] sm:text-[24px]")}>{title}</p>
                        {hover &&
                            <div className="flex flex-col items-center gap-4">
                                {contents.concat("_1", "_2").slice(0, 4).map((content => (
                                    <p className={"text-white text-[30px] leading-[35px] sm:text-[24px] " + (content.startsWith("_") ? "opacity-0" : "")} key={content}>{content}</p>
                                )))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const RoadmapSection = () => {
    const textRef = useRef<any>();
    const { inViewport } = useInViewport(textRef);
    useEffect(() => {
        RevealText();
    }, [inViewport]);
    const roadmap = [
        {
            background: "/blue.png",
            title: "Short Term",
            contents: [
                'Art Generations',
                'VX Chambers',
                'Raid to Earn'
            ],
            color: "#9D7C3220",
        },
        {
            background: "/red.png",
            title: "Medium Term",
            contents: [
                'DAO Building',
                'Kickstart Branding',
                'IRL Company',
                'Web3 Partnerships'
            ],
            color: "#9D7C3220",
        },
        {
            background: "/gold.png",
            title: "Long Term",
            contents: [
                'Profit Share',
                'Process Automation',
                'Upscaling'
            ],
            color: "#0132B020",
        },
    ];
    return (
        <section className="section flex-col gap-[90px]" id='roadmap'>
            <div className='container my-10'>
                <div className="ml-10">
                    <div className="w-fit font-extrabold font-title text-[80px] md:text-[60px] sm:text-[40px] xs:text-3xl leading-[115px] md:leading-[75px] sm:leading-[45px] text-white">
                        <div className={"relative" + (inViewport ? " fo-mask" : "")}>
                            <span className="white">
                                {'// VENDMAP'}
                            </span>
                        </div>
                    </div>
                    <p ref={textRef} className={"mt-[15px] max-w-[800px] font-primary text-[36px] leading-[42px] text-secondary sm:text-2xl" + (inViewport ? " reveal-text" : "")}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </p>
                </div>
                <div className="w-full sm:px-5 px-10 grid grid-cols-3 items-center justify-center gap-[25px] my-10 lg:grid-cols-2 sm:grid-cols-1">
                    {roadmap.map((item) => (
                        <RodmapBox key={item.title} background={item.background} title={item.title} contents={item.contents} color={item.color} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RoadmapSection;