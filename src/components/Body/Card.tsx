"use client";

import type { ICard } from "../../utils/types";
import Box from "./Box";
import { useBoxAttributes } from "../../utils/hooks/UseBoxAttributes";
import TagList from "./TagList";
import formatDate from "../../utils/date";
import SocialShare from "./SocialShare";
import { ARTICLE_BASE_URL } from "../../utils/constants";

const Card = ({ data }: ICard) => {
    const { width } = useBoxAttributes();

    return (
        <Box height="h-article-height" width={`${width / 16}rem`}>
            <article className="group flex flex-col h-full px-5 pt-11 pb-6 justify-between hover:bg-(--hover-bg-card-color)  hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-row w-full justify-between">
                        <a href={`/category/${data.category.toLowerCase()}`}>
                            <h1 className="text-lg font-semibold">
                                /{" "}
                                {data.category.charAt(0).toUpperCase() +
                                    data.category
                                        .replace("-", " ")
                                        .toLowerCase()
                                        .slice(1)}
                            </h1>
                        </a>
                        <SocialShare
                            pageUrl={`${ARTICLE_BASE_URL}${data.slug}`}
                        />
                    </div>
                    <a
                        href={`${ARTICLE_BASE_URL}${data.slug}`}
                        aria-label="Read full article."
                    >
                        <h1 className="text-2xl my-0 ">{data.title}</h1>
                    </a>

                    <a href={`${ARTICLE_BASE_URL}${data.slug}`}>
                        <p className="text-lg line-clamp-5">{data.excerpt}</p>
                    </a>
                </div>
                <div className="flex flex-col gap-4">
                    <TagList tags={data.tags} />
                    <div className="flex flex-row items-baseline gap-2">
                        <p className="text-base">
                            <a href="/about-me">Vipan Balrai</a>
                        </p>
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
