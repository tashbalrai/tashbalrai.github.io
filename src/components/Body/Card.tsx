"use client";
import { FaShareAlt } from "react-icons/fa";
import type { ICard } from "../../utils/types";
import Box from "./Box";
import { useBoxAttributes } from "../../utils/hooks/UseBoxAttributes";
import TagList from "./TagList";
import formatDate from "../../utils/date";

const Card = ({ data }: ICard) => {
    const { width } = useBoxAttributes();

    return (
        <Box height="h-article-height" width={`${width / 16}rem`}>
            <article className="group flex flex-col h-full px-5 pt-11 pb-6 justify-between hover:bg-(--hover-bg-card-color)  hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-row w-full justify-between">
                        <p className="text-xl font-semibold">
                            /{" "}
                            {data.category.charAt(0).toUpperCase() +
                                data.category.toLowerCase().slice(1)}
                        </p>
                        <FaShareAlt
                            style={{ fontSize: "1.25rem" }}
                            className="hidden group-hover:inline-flex"
                        />
                    </div>
                    <a href={`/article/${data.slug}`}>
                        <h5 className="text-3xl">{data.title}</h5>
                    </a>

                    <a href={`/article/${data.slug}`}>
                        <p className="text-lg line-clamp-6">{data.excerpt}</p>
                    </a>
                </div>
                <div className="flex flex-col gap-4">
                    <TagList tags={data.tags} />
                    <div className="flex flex-row items-baseline gap-2">
                        <p className="text-base">Vipan Balrai</p>
                        <p className="text-sm">
                            {formatDate(data.publishedAt)}
                        </p>
                    </div>
                </div>
            </article>
        </Box>
    );
};

export default Card;
