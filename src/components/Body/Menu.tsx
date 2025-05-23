import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";

const variants = {
    play: { opacity: 1, y: 0, transition: { ease: easeInOut, duration: 0.5 } },
    stop: {
        opacity: 0,
        y: -2000,
        transition: { ease: easeInOut, duration: 0.5, delay: 0.5 },
    },
};

const variantItems = {
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.5,
            staggerChildren: 0.5,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        },
    },
};

const Menu = ({
    isOpen,
    callback,
}: {
    isOpen: boolean;
    callback: (isOpen: boolean) => void;
}) => {
    const [categories, setCategories] = useState<string[]>([]);
    const [tags, setTags] = useState<string[]>([]);

    useEffect(() => {
        fetch("/categories.json").then(async (response) => {
            const data = await response.json();
            if (Array.isArray(data)) {
                setCategories(Array.from(new Set(data)));
            }
        });

        fetch("/tags.json").then(async (response) => {
            const data = await response.json();
            if (Array.isArray(data)) {
                setTags(Array.from(new Set(data)));
            }
        });
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0, y: -1000 }}
            variants={variants}
            animate={isOpen ? "play" : "stop"}
            className="absolute border-(--grid-color) w-full border-y min-h-screen top-[71px] left-0 bg-(--bg-body-color) z-10 p-10"
        >
            <div className="flex justify-end w-full">
                <TfiClose
                    onClick={() => callback(false)}
                    size="3rem"
                    className="hover:cursor-pointer hover:scale-105"
                />
            </div>
            <AnimatePresence>
                <motion.div
                    variants={variantItems}
                    animate={isOpen ? "visible" : "hidden"}
                    className="flex flex-col w-full items-start justify-center"
                >
                    <h3>/ CATEGORIES</h3>
                    <div className="flex flex-col md:flex-row items-start justify-start m-5 gap-2">
                        {categories &&
                            categories.map((category) => {
                                return (
                                    <motion.p
                                        key={`cat-${category}`}
                                        variants={variantItems}
                                    >
                                        <a
                                            href={`/category/${category}`}
                                            className="text-(--link-color) hover:text-(--hover-link-color) hover:underline"
                                        >
                                            {category}
                                        </a>
                                    </motion.p>
                                );
                            })}
                    </div>
                    <h3>/ TAGS</h3>
                    <div className="flex flex-col md:flex-row items-start justify-start m-5 gap-2">
                        {tags &&
                            tags.map((tag) => {
                                return (
                                    <motion.p
                                        key={`tag-${tag}`}
                                        variants={variantItems}
                                    >
                                        <a
                                            href={`/tags/${tag}`}
                                            className="text-(--link-color) hover:text-(--hover-link-color) hover:underline"
                                        >
                                            {tag}
                                        </a>
                                    </motion.p>
                                );
                            })}
                    </div>
                    <h3>/ ABOUT</h3>
                    <div className="flex flex-row items-center justify-start m-5 gap-2">
                        <a
                            href={`/about-me`}
                            className="text-(--link-color) hover:text-(--hover-link-color) hover:underline"
                        >
                            About Me
                        </a>
                    </div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

export default Menu;
