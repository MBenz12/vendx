import { CircleLeftIcon, CircleRightIcon, PolygonIcon, TriangleIcon } from "components/svgs";

const ArtCard = ({ className, image }: { className?: string, image: string }) => {
    return (
        <div className={"rounded-[20px] p-[6px] bg-gradient1 " + className || ""}>
            <div className="w-full h-full">
                <img src={image} alt="" className="w-full h-full" />
            </div>
        </div>
    )
}

const GallerySection = () => {
    return (
        <section className="section !bg-primary gap-[56px] items-center">
            <div className="absolute left-[98px] top-0 translate-y-[-50%]">
                <PolygonIcon />
            </div>
            <div className="absolute left-[315px] top-[-1px]"><TriangleIcon /></div>
            <div>
                <p className="w-[469px] text-[60px] leading-[68px] font-title font-extrabold">{"// ARTWORK"}</p>
                <p className="mt-[7px] w-[374px] font-primary text-secondary text-[36px] leading-[42px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            </div>
            <div className="flex items-center gap-[23px]">
                <CircleLeftIcon />
                <div className="flex gap-[93px] relative">
                    <ArtCard image="/art1.png" className="w-[309px] h-[605px]" />
                    <ArtCard image="/art1.png" className="w-[473px] h-[647px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" />
                    <ArtCard image="/art1.png" className="w-[309px] h-[605px]" />
                </div>
                <CircleRightIcon />
            </div>
        </section>
    );
}

export default GallerySection;