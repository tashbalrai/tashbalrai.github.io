import type { IArticleFrontmatter } from "../../../utils/types";
import TagList from "../TagList";
import TitleBar from "./TitleBar";

interface props {
    frontmatter: IArticleFrontmatter;
}
const ArticleHeader = ({ frontmatter }: props) => {
    return (
        <>
            <h1>{frontmatter.title}</h1>
            <TagList tags={frontmatter.tags} />
            <TitleBar
                minutesRead={frontmatter.minutesRead}
                publishedAt={frontmatter.publishedAt}
            />
        </>
    );
};

export default ArticleHeader;
