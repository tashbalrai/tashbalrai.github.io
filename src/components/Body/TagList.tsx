const TagList = ({ tags }: { tags: string[] }) => {
    return (
        <div className="flex flex-row flex-wrap gap-2">
            {tags.map((tag) => (
                <a
                    href={`/tags/${tag}`}
                    className="text-(--link-color) hover:text-(--hover-link-color) hover:underline"
                >
                    <span key={tag} className="px-3 py-1 rounded-full text-sm">
                        #{tag}
                    </span>
                </a>
            ))}
        </div>
    );
};

export default TagList;
