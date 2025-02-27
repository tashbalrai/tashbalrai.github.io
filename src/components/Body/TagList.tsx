const TagList = ({ tags }: { tags: string[] }) => {
    return (
        <div className="flex flex-row flex-wrap gap-2">
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="bg-(--bg-tag-color) px-3 py-1 rounded-full text-sm"
                >
                    {tag}
                </span>
            ))}
        </div>
    );
};

export default TagList;
