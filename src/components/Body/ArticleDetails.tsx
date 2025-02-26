import { getEntry, render, type RenderedContent } from "astro:content";
import type { IArticleFrontmatter } from "../../utils/types";

export interface IArticleDetails {
    article: {
        id: string;
        body?: string;
        data: IArticleFrontmatter;
        rendered?: RenderedContent;
        filePath?: string;
    };
}

const ArticleDetails = async ({ article }: IArticleDetails) => {
    return (
        <article>
            <header>
                <h1 className="mt-12 mb-5">Title</h1>
            </header>
            <div
                dangerouslySetInnerHTML={{ __html: article.rendered?.html! }}
            />
            {/* <footer className="w-full border-(--grid-color) border-t-1 mt-24 pt-5">
                <p className="text-lg mt-5 ml-2">
                    Written by {props.data.author}
                </p>
                <p className="text-sm ml-2">
                    Published: {props.data.publishedAt?.toDateString()}
                </p>
                <p className="text-sm mt-5 ml-2 mb-10">
                    {props.data.aboutAuthor}
                </p>
            </footer> */}
        </article>
    );
};

export default ArticleDetails;
