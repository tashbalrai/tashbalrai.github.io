import { SOCIAL_LINKS } from "../../../utils/constants";
import formatDate from "../../../utils/date";
import SocialLinks from "../SocialLinks";

interface ITitleBarProps {
    minutesRead?: string;
    publishedAt?: string;
}

const TitleBar = ({ minutesRead, publishedAt }: ITitleBarProps) => {
    return (
        <div className="flex flex-row justify-between items-center mb-8 py-2 border-y  border-(--grid-color)">
            <SocialLinks
                links={SOCIAL_LINKS}
                size="1.25rem"
                parentClassName="gap-2"
            />
            <span className="text-sm">
                {minutesRead && <span>{minutesRead}, </span>}{" "}
                {publishedAt && formatDate(publishedAt)}
            </span>
        </div>
    );
};

export default TitleBar;
