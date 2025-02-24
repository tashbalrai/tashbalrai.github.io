"use client";

const Flex = ({
    children,
    className = "flex flex-row justify-start flex-wrap",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return <div className={className}>{children}</div>;
};

export { Flex as default, Flex };
