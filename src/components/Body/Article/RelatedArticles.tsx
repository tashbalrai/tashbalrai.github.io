import { useEffect, useState } from "react";
import type { IArticleFrontmatter } from "../../../utils/types";

interface IFrontmatter {
    frontmatter: IArticleFrontmatter;
}
const RelatedArticles = ({ frontmatter }: IFrontmatter) => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch("/collection.json")
            .then((res) => res.json())
            .then((data) => {
                setArticles(data);
            });
    }, []);

    if (!frontmatter?.relatedArticles) {
        return null;
    }

    return (
        <div className="w-full border-(--grid-color) border-t-1 mt-24 pt-5">
            <strong>Related Articles:</strong>
            <div className="flex flex-col">
                {articles
                    .filter((article: IArticleFrontmatter) =>
                        frontmatter?.relatedArticles?.includes(article.slug)
                    )
                    .map((article: IArticleFrontmatter) => (
                        <div key={article.slug} className="mt-5">
                            <a href={`/article/${article.slug}`}>
                                <h4 className="related-articles__item__title">
                                    {article.title}
                                </h4>
                            </a>
                            <p>{article.excerpt}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default RelatedArticles;
