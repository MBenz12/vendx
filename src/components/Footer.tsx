import { DiscordIcon, PolygonIcon, TwitterIcon } from "./svgs";

const Footer = () => {
    return (
        <footer className="h-[174px] flex items-center justify-between relative bg-primary px-[30px]">
            <div className="absolute top-0 right-[80px] translate-y-[-50%]">
                <PolygonIcon />
            </div>
            <img src="/logo.png" alt="" className="w-[390px] h-[130px]" />
            <div className="flex gap-2 mr-[80px]">
                <TwitterIcon />
                <DiscordIcon />
            </div>
        </footer>
    );
};

export default Footer;