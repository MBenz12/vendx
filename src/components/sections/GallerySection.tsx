import RevealText from "components/RevealText";
import { CircleLeftIcon, CircleRightIcon, PolygonIcon, TriangleIcon } from "components/svgs";
import { useEffect, useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";

const ArtCard = ({ image, style }: { image: string, style: any }) => {
    return (
        <div className="card-container" style={style}>
            <div className="card">
                <img src={image} alt="" className="w-full h-full" />
            </div>
        </div>
    )
}
const MAX_VISIBILITY = 2;
const GallerySection = () => {
    const [arts] = useState([
        '/art1.png',
        '/art1.png',
        '/art1.png',
        '/art1.png',
        '/art1.png',
        '/art1.png',
        '/art1.png',
    ]);
    const [active, setActive] = useState(2);
    const textRef = useRef<any>();
    const { inViewport } = useInViewport(textRef);
    useEffect(() => {
        RevealText();
    }, [inViewport])
    return (
        <section className="section !bg-primary items-center container" id='gallery'>
            <div className="absolute left-[98px] top-0 translate-y-[-50%]">
                <PolygonIcon />
            </div>
            <div className="absolute left-[315px] top-[-1px]"><TriangleIcon /></div>
            <div className="absolute left-0 top-[23%]">
                <svg width="943" height="67" viewBox="0 0 943 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 2L628.658 1.99997L698.151 65L943 65" stroke="#3A3A3A" strokeOpacity="0.2" strokeWidth="3" strokeMiterlimit="10" />
                </svg>
            </div>
            <div className="absolute top-0 left-[56%]">
                <svg width="42" height="270" viewBox="0 0 42 270" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 0V141.495L39.67 159.295V269.13" stroke="#3A3A3A" strokeOpacity="0.2" strokeWidth="3" strokeMiterlimit="10" />
                </svg>
            </div>

            <div className="absolute left-0 bottom-[23%]">
                <svg width="1148" height="61" viewBox="0 0 1148 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 2L765.322 1.99997L849.923 59L1148 59" stroke="#3A3A3A" strokeOpacity="0.2" strokeWidth="3" strokeMiterlimit="10" />
                </svg>
            </div>

            <div className="absolute bottom-0 right-[20%]">
                <svg width="45" height="347" viewBox="0 0 45 347" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 0V230.77L42.69 256.28V346.16" stroke="#3A3A3A" strokeOpacity="0.2" strokeWidth="3" strokeMiterlimit="10" />
                </svg>
            </div>
            <div className='flex max-w-[1400px] w-full justify-between items-center md:flex-col md:gap-[100px] my-3'>
                <div>
                    <div className={"relative" + (inViewport ? " fo-mask" : "")}>
                        <span className="black">
                            <p className="max-w-[469px] w-full text-[60px] leading-[68px] font-title font-extrabold lg:text-4xl">{"// ARTWORK"}</p>
                        </span>
                    </div>
                    <div className="mt-[10px]">
                        <svg width="154" height="9" viewBox="0 0 154 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M61.8425 0.389893L49.5102 8.61033H0.402771V0.389893H61.8425H154H61.8425Z" fill="black" />
                            <path d="M61.8425 0.389893L49.5102 8.61033H0.402771V0.389893H61.8425ZM61.8425 0.389893H154" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
                        </svg>
                    </div>
                    <p ref={textRef} className={"mt-[35px] max-w-[374px] w-full font-primary text-secondary text-[36px] leading-[42px] lg:text-2xl" + (inViewport ? " reveal-text" : "")}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                </div>
                <div className="carousel mx-[180px] flex-shrink-0 sm:mx-0">
                    {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><CircleLeftIcon /></button>}
                    {arts.map((art, i) => (
                        <ArtCard key={"art" + i} image={art} style={{
                            '--active': i === active ? 1 : 0,
                            '--offset': (active - i) / 3,
                            '--direction': Math.sign(active - i),
                            '--abs-offset': Math.abs(active - i) / 3,
                            'pointerEvents': active === i ? 'auto' : 'none',
                            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                        }} />
                    ))}
                    {active < arts.length - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><CircleRightIcon /></button>}
                </div>
            </div>
        </section>
    );
}

export default GallerySection;