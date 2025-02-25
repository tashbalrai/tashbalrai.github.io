"use client";
import { FaShareAlt } from "react-icons/fa";
import type { ICard } from "../../utils/types";
import Box from "./Box";
import { useBoxAttributes } from "../../utils/hooks/UseBoxAttributes";
import { useState } from "react";
import TagList from "./TagList";

const Card = ({ data }: ICard) => {
    const { width } = useBoxAttributes();
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <Box height="h-article-height" width={`${width / 16}rem`}>
            <article
                onMouseEnter={() => setIsPlaying(true)}
                onMouseLeave={() => setIsPlaying(false)}
                className="group flex flex-col h-full px-5 pt-11 pb-6 justify-between hover:bg-(--hover-bg-card-color)  hover:scale-105 transition-transform duration-300"
            >
                <div className="flex flex-col gap-8">
                    <div className="flex flex-row w-full justify-between">
                        <p className="text-lg">/ {data.category}</p>
                        <FaShareAlt
                            style={{ fontSize: "1.25rem" }}
                            className="hidden group-hover:inline-flex"
                        />
                    </div>
                    <a href={`/article/${data.slug}`}>
                        <h5>{data.title}</h5>
                    </a>

                    <a href={`/article/${data.slug}`}>
                        <p className="line-clamp-6">{data.excerpt}</p>
                    </a>
                </div>
                <TagList tags={data.tags} />
                <div className="flex flex-row items-baseline gap-2">
                    <p className="text-base">{data.author}</p>
                    <p className="text-sm">
                        {data.publishedAt?.toDateString()}
                    </p>
                </div>
            </article>
        </Box>
    );
};

export default Card;
