"use client";

const Flex = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={"flex flex-row justify-start flex-wrap " + className}>
            {children}
        </div>
    );
};

export { Flex as default, Flex };
