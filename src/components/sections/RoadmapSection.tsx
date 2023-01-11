const RodmapBox = () => {
    return (
        <div className="rounded-[15px] hover:p-[5px] max-w-[512px] mx-auto w-full bg-gradient1-hover hover:border-0 border-2 border-[#1A1A1A]" style={{ aspectRatio: 1.25 }}>
            <div className="w-full h-full bg-gradient2 bg-black rounded-[15px] flex flex-col justify-center items-center">
                <img src="/vending_machine.png" alt="" className="w-[188px] sm:w-[120px]" />
                <p className="font-secondary text-secondary text-[30px] sm:text-[24px] leading-[38px] sm:leading-[28px]">Lorem Ipsum dolor</p>
            </div>
        </div>
    )
}

const RoadmapSection = () => {
    return (
        <section className="section flex-col gap-[90px]" id='roadmap'>
            <div className='container my-10'>
                <div className="ml-10">
                    <div className="w-fit font-extrabold font-title text-[80px] md:text-[60px] sm:text-[40px] xs:text-3xl leading-[115px] md:leading-[75px] sm:leading-[45px] text-white">
                        <div className="fo-mask relative">
                            <span className="white">
                                {'// VENDMAP'}
                            </span>
                        </div>
                    </div>
                    <p className="mt-[15px] max-w-[800px] font-primary text-[36px] leading-[42px] text-secondary sm:text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </p>
                </div>
                <div className="w-full sm:px-5 px-10 grid grid-cols-3 items-center justify-center gap-[25px] my-10 lg:grid-cols-2 sm:grid-cols-1">
                    <RodmapBox />
                    <RodmapBox />
                    <RodmapBox />
                </div>
            </div>
        </section>
    );
}

export default RoadmapSection;