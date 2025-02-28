import { FaLinkedin, FaYoutube, FaRss } from "react-icons/fa";
import { FaBluesky, FaMedium, FaX } from "react-icons/fa6";

interface ISocialLinks {
    links: {
        linkedin?: string;
        medium?: string;
        bluesky?: string;
        youtube?: string;
        x?: string;
    };
    size?: string;
    className?: string;
    parentClassName?: string;
}

const SocialLinks = ({
    links,
    size = "1.875rem",
    className = "text-(--text-color)",
    parentClassName = "gap-2",
}: ISocialLinks) => {
    return (
        <div className={"flex flex-rows " + parentClassName}>
            {links?.["linkedin"] && (
                <a href={links["linkedin"]} target="_blank">
                    <FaLinkedin
                        style={{ fontSize: size }}
                        className={className}
                    />
                </a>
            )}
            {links?.["medium"] && (
                <a href={links["medium"]} target="_blank">
                    <FaMedium
                        style={{ fontSize: size }}
                        className={className}
                    />
                </a>
            )}
            {links?.["bluesky"] && (
                <a href={links["bluesky"]} target="_blank">
                    <FaBluesky
                        style={{ fontSize: size }}
                        className={className}
                    />
                </a>
            )}
            {links?.["youtube"] && (
                <a href={links["youtube"]} target="_blank">
                    <FaYoutube
                        style={{ fontSize: size }}
                        className={className}
                    />
                </a>
            )}
            {links?.["x"] && (
                <a href={links["x"]} target="_blank">
                    <FaX style={{ fontSize: size }} className={className} />
                </a>
            )}
        </div>
    );
};

export default SocialLinks;
