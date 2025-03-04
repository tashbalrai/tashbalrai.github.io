import type { IArticleFrontmatter } from "../../../utils/types";
import TagList from "../TagList";
import TitleBar from "./TitleBar";

interface props {
    frontmatter: IArticleFrontmatter;
}
const Header = ({ frontmatter }: props) => {
    return (
        <>
            <TagList tags={frontmatter.tags} />
            <TitleBar
                readtime={frontmatter.readtime}
                publishedAt={frontmatter.publishedAt}
            />
        </>
    );
};

export default Header;
