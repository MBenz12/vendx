import { DiscordIcon, PolygonIcon, TwitterIcon } from "./svgs";

const Footer = () => {
    return (
        <footer className="flex py-8 items-center justify-between relative bg-primary container sm:flex-col sm:gap-4 sm:py-4">
            <div className="absolute top-0 right-[80px] translate-y-[-50%]">
                <PolygonIcon />
            </div>
            <img src="/logo.png" alt="" className="w-[390px] md:w-[250px]" />
            <div className="flex gap-2 ml-auto sm:mx-auto mr-20">
                <TwitterIcon />
                <DiscordIcon />
            </div>
        </footer>
    );
};

export default Footer;