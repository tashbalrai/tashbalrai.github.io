const TagList = ({ tags }: { tags: string[] }) => {
    return (
        <div className="flex flex-row flex-wrap gap-2 my-2">
            {tags.map((tag) => (
                <a
                    key={tag}
                    href={`/tags/${tag}`}
                    className="text-(--link-color) hover:text-(--hover-link-color) hover:underline"
                >
                    <span key={tag} className="text-sm">
                        #{tag}
                    </span>
                </a>
            ))}
        </div>
    );
};

export default TagList;
