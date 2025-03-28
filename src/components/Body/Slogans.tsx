import { useState } from "react";
import { useBoxAttributes } from "../../utils/hooks/UseBoxAttributes";
import Box from "./Box";
import SplitText from "./Text";

const Slogans = () => {
    const { width: boxWidth, boxes } = useBoxAttributes();
    const [isHuntPlaying, setIsHuntPlaying] = useState(true);
    const [isLearnPlaying, setIsLearnPlaying] = useState(true);
    const [isWritePlaying, setIsWritePlaying] = useState(true);
    const [isInspirePlaying, setIsInspirePlaying] = useState(true);

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
                        staggerChildren: 0.1,
                    },
                };
            }
            return {};
        },
    };

    const noEmptyBoxes = boxes - 4;

    return (
        <>
            {boxes > 3 && (
                <Box height="h-slogan-height" width={`${boxWidth / 16}rem`}>
                    <div
                        onMouseEnter={() => setIsHuntPlaying(true)}
                        onMouseLeave={() => setIsHuntPlaying(false)}
                        className="h-slogan-height w-full justify-items-center inline-flex justify-center items-center hover:cursor-pointer"
                    >
                        <h1 className="mx-auto">
                            <SplitText
                                text="HUNT"
                                play={isHuntPlaying}
                                variants={defaultVariants}
                            />
                        </h1>
                    </div>
                </Box>
            )}
            <Box height="h-slogan-height" width={`${boxWidth / 16}rem`}>
                <div
                    onMouseEnter={() => setIsLearnPlaying(true)}
                    onMouseLeave={() => setIsLearnPlaying(false)}
                    className="h-slogan-height w-full justify-items-center inline-flex justify-center items-center hover:cursor-pointer"
                >
                    <h1 className="mx-auto ">
                        <SplitText
                            text="LEARN"
                            play={isLearnPlaying}
                            variants={defaultVariants}
                        />
                    </h1>
                </div>
            </Box>
            <Box height="h-slogan-height" width={`${boxWidth / 16}rem`}>
                <div
                    onMouseEnter={() => setIsWritePlaying(true)}
                    onMouseLeave={() => setIsWritePlaying(false)}
                    className="h-slogan-height w-full px-4 justify-items-center inline-flex justify-center items-center hover:cursor-pointer"
                >
                    <h1 className="mx-auto ">
                        <SplitText
                            text="WRITE"
                            play={isWritePlaying}
                            variants={defaultVariants}
                        />
                    </h1>
                </div>
            </Box>
            <Box height="h-slogan-height" width={`${boxWidth / 16}rem`}>
                <div
                    onMouseEnter={() => setIsInspirePlaying(true)}
                    onMouseLeave={() => setIsInspirePlaying(false)}
                    className="h-slogan-height w-full px-4 justify-items-center inline-flex justify-center items-center hover:cursor-pointer"
                >
                    <h1 className="mx-auto ">
                        <SplitText
                            text="INSPIRE"
                            play={isInspirePlaying}
                            variants={defaultVariants}
                        />
                    </h1>
                </div>
            </Box>
            {noEmptyBoxes > 0 &&
                [...Array(noEmptyBoxes)].map((_, i) => (
                    <Box
                        key={i}
                        height="h-article-height"
                        width={`${boxWidth / 16}rem`}
                    >
                        &nbsp;
                    </Box>
                ))}
        </>
    );
};

export default Slogans;
