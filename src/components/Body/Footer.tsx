import SocialLinks from "./SocialLinks";
import { SOCIAL_LINKS } from "../../utils/constants";
import { tags } from "../../utils/tags";

const Footer = () => {
    return (
        <footer className="w-full sm:h-f bg-(--bg-footer) py-10 sm:py-20">
            <div className="flex flex-col lg:flex-row text-(--text-footer-color) gap-8 h-full w-3/4 mx-auto">
                <div className="flex flex-col justify-between h-full w-full">
                    <div className="flex flex-col gap-4">
                        <strong className="text-5xl font-bold">
                            Have an idea?, Let&apos;s talk.
                        </strong>
                        <p>Or, just say hello. I love to hear from people.</p>
                        <p className="text-2xl">vbalrai [at] gmail [.] com</p>
                        <SocialLinks
                            links={SOCIAL_LINKS}
                            className="text-(--text-footer-color)"
                        />
                    </div>
                    <p className="font-normal text-sm pb-10 mt-4 max-sm:hidden">
                        Designed & developed by Vipan Balrai.
                    </p>
                </div>
                <nav
                    className="flex flex-col gap-10 h-full"
                    aria-label="footer links"
                >
                    <h3 className="text-2xl font-bold underline">Topics</h3>
                    <ul className="flex flex-col sm:flex-row flex-wrap w-full gap-4 text-base">
                        <li className="hover:underline whitespace-nowrap">
                            <a href="/author">About Me</a>
                        </li>
                        {tags &&
                            Object.keys(tags).map((key) => {
                                return (
                                    <li
                                        key={key}
                                        className="hover:underline whitespace-nowrap"
                                    >
                                        <a href={`/tags/${key}`}>{tags[key]}</a>
                                    </li>
                                );
                            })}
                    </ul>
                </nav>
                <p className="font-normal text-sm pb-10 mt-4 sm:hidden">
                    Designed & developed by Vipan Balrai.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
