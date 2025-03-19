import formatDate from "../../../utils/date";
import SocialShare from "../SocialShare";

interface ITitleBarProps {
    minutesRead?: string;
    publishedAt?: string;
    pageUrl?: string;
}

const TitleBar = ({ minutesRead, publishedAt, pageUrl }: ITitleBarProps) => {
    return (
        <div className="flex flex-row justify-between items-center mb-8 py-2 border-y  border-(--grid-color)">
            {pageUrl && <SocialShare pageUrl={pageUrl} />}
            <span className="text-sm">
                {minutesRead && <span>{minutesRead}, </span>}{" "}
                {publishedAt && formatDate(publishedAt)}
            </span>
        </div>
    );
};

export default TitleBar;
