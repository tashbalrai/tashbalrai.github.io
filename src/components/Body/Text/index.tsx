import { motion, type Variants } from "framer-motion";

const defaultVariants = {
    from: {
        opacity: 1,
        rotate: 0,
    },
    to: (isHover: boolean) => {
        if (isHover) {
            return {
                opacity: [0, 1],
                rotate: [359, 0],
                transition: {
                    staggerChildren: 0.01,
                },
            };
        }
        return {};
    },
};

export default function SplitText({
    text,
    play = false,
    variants = defaultVariants,
}: {
    text: string;
    variants?: Variants;
    play: boolean;
}) {
    const ts = text.replaceAll(" ", "#").split("");
    return (
        <>
            <span className="sr-only">{text}</span>
            <motion.span
                initial="from"
                animate="to"
                custom={play}
                variants={variants}
                aria-hidden
            >
                {ts.map((char, i) => (
                    <motion.span
                        custom={play}
                        variants={variants}
                        key={`char-${i}`}
                        className="inline-block"
                    >
                        {char === "#" ? <>&nbsp;</> : char}
                    </motion.span>
                ))}
            </motion.span>
        </>
    );
}
