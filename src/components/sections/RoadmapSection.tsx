const RodmapBox = () => {
    return (
        <div className="w-[500px] h-[400px] rounded-[15px] hover:p-[5px] bg-gradient1-hover hover:border-0 border-2 border-[#1A1A1A]">
            <div className="w-full h-full bg-gradient2 bg-black rounded-[15px] flex flex-col justify-center items-center">
                <img src="/vending_machine.png" alt="" className="w-[188px]" />
                <p className="font-secondary text-secondary text-[30px] leading-[38px]">Lorem Ipsum dolor</p>
            </div>
        </div>
    )
}

const RoadmapSection = () => {
    return (
        <section className="section flex-col gap-[90px]">
            <div className="ml-[193px]">
                <p className="w-fit font-extrabold font-title text-[100px] leading-[115px] text-white">{'// VENDMAP'}</p>
                <p className="mt-[15px] w-[946px] font-primary text-[36px] leading-[42px] text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
            </div>
            <div className="w-full flex justify-center gap-[25px]">
                <RodmapBox />
                <RodmapBox />
                <RodmapBox />
            </div>
        </section>
    );
}

export default RoadmapSection;