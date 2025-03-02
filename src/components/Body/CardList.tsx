"use client";
import { useBoxAttributes } from "../../utils/hooks/UseBoxAttributes";
import type { ICardList } from "../../utils/types";
import Box from "./Box";
import Card from "./Card";
import Flex from "./Flex";
import Slogans from "./Slogans";

const CardList = ({ data, showSlogan = true }: ICardList) => {
    const { width, boxes } = useBoxAttributes();
    let noEmptyBoxes = boxes % data.length;
    if (noEmptyBoxes === boxes) {
        noEmptyBoxes = 0;
    }

    let i = 0;
    return (
        <Flex>
            {showSlogan && <Slogans />}
            {data.map((card) => {
                return <Card key={`card-${++i}`} data={card} />;
            })}
            {noEmptyBoxes > 0 &&
                [...Array(noEmptyBoxes)].map((_, i) => (
                    <Box
                        key={i}
                        height="h-article-height"
                        width={`${width / 16}rem`}
                    >
                        &nbsp;
                    </Box>
                ))}
        </Flex>
    );
};

export default CardList;
