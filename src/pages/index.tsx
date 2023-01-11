import Footer from "components/Footer";
import FaqSection from "components/sections/FaqSection";
import GallerySection from "components/sections/GallerySection";
import IntroSection from "components/sections/IntroSection";
import RoadmapSection from "components/sections/RoadmapSection";

const HomePage = () => {
    return (
        <main className='overflow-x-hidden'>
            <IntroSection />
            <RoadmapSection />
            <GallerySection />
            <FaqSection />
            <Footer />
        </main>
    );
};

export default HomePage;