import {
    FaLinkedin,
    FaFacebook,
    FaYoutube,
    FaTwitter,
    FaRss,
} from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="w-full sm:h-f bg-(--bg-footer) py-10 sm:py-20">
            <div className="flex flex-col sm:flex-row text-(--text-footer-color) gap-8 h-full w-3/4 mx-auto">
                <div className="flex flex-col justify-between h-full w-full">
                    <div className="flex flex-col gap-4">
                        <strong className="text-5xl font-bold">
                            Have an idea?, Let&apos;s talk.
                        </strong>
                        <p>Or, just say hello. I love to hear from people.</p>
                        <p className="text-2xl">vbalrai [at] gmail [.] com</p>
                        <div className="flex flex-rows gap-3 mt-10">
                            <FaLinkedin style={{ fontSize: "1.875rem" }} />
                            <FaFacebook style={{ fontSize: "1.875rem" }} />
                            <FaYoutube style={{ fontSize: "1.875rem" }} />
                            <FaTwitter style={{ fontSize: "1.875rem" }} />
                            <FaMedium style={{ fontSize: "1.875rem" }} />
                            <FaRss style={{ fontSize: "1.875rem" }} />
                        </div>
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
                            <a href="/node">About Me</a>
                        </li>
                        <li className="hover:underline whitespace-nowrap">
                            <a href="/node">Javascript</a>
                        </li>
                        <li className="hover:underline whitespace-nowrap">
                            <a href="/node">Typescript</a>
                        </li>
                        <li className="hover:underline whitespace-nowrap">
                            <a href="/node">NodeJS</a>
                        </li>
                        <li className="hover:underline whitespace-nowrap">
                            <a href="/node">Data Structures & Algorithms</a>
                        </li>
                        <li className="hover:underline whitespace-nowrap">
                            <a href="/node">Machine Learning</a>
                        </li>
                        <li className="hover:underline whitespace-nowrap">
                            <a href="/node">Java</a>
                        </li>
                        <li className="hover:underline whitespace-nowrap">
                            <a href="/node">Cloud</a>
                        </li>
                        <li className="hover:underline whitespace-nowrap">
                            <a href="/node">System Design</a>
                        </li>
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
