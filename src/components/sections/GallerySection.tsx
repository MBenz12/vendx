import { PolygonIcon, TriangleIcon } from "components/svgs";

const GallerySection = () => {
    return (
        <section className="section !bg-primary">
            <div className="absolute left-[98px] top-0 translate-y-[-50%]">
                <PolygonIcon />
            </div>
            <div className="absolute left-[315px] top-[-1px]"><TriangleIcon /></div>
        </section>
    );
}

export default GallerySection;