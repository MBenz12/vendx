import FaqSection from "components/sections/FaqSection";
import GallerySection from "components/sections/GallerySection";
import IntroSection from "components/sections/IntroSection";
import RoadmapSection from "components/sections/RoadmapSection";

const HomePage = () => {
    return (
        <main>
            <IntroSection />
            <RoadmapSection />
            <GallerySection />
            <FaqSection />
        </main>
    );
};

export default HomePage;